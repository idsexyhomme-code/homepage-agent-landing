#!/usr/bin/env bash
# 배포 전 결정적 자동 점검 (LLM 쿼터 무관). 실패 시 비-0 종료 → 배포 중단 근거.
# 사용: bash scripts/predeploy_check.sh
set -uo pipefail
cd "$(dirname "$0")/.." || exit 2
FAIL=0
ok(){ printf "  ✓ %s\n" "$1"; }
bad(){ printf "  ✗ %s\n" "$1"; FAIL=1; }

echo "== 1) JS 문법 (app.js) =="
if node --check app.js 2>/dev/null; then ok "app.js node --check"; else bad "app.js 문법 오류"; fi

echo "== 2) JSON 유효성 (vercel.json / manifest) =="
for f in vercel.json manifest.webmanifest; do
  [ -f "$f" ] || { ok "$f 없음(스킵)"; continue; }
  if python3 -c "import json;json.load(open('$f'))" 2>/dev/null; then ok "$f 유효 JSON"; else bad "$f JSON 오류"; fi
done

echo "== 3) sitemap.xml XML 유효성 =="
if python3 -c "import xml.dom.minidom;xml.dom.minidom.parse('sitemap.xml')" 2>/dev/null; then ok "sitemap.xml 유효"; else bad "sitemap.xml XML 오류"; fi

echo "== 4) 각 페이지 정적 셸 JSON-LD 유효성 =="
python3 - <<'PY'
import re,json,glob,sys
fail=0
for f in ["index.html"]+glob.glob("*/index.html"):
    html=open(f,encoding="utf-8").read()
    for i,b in enumerate(re.findall(r'<script type="application/ld\+json">(.*?)</script>',html,re.S)):
        try: json.loads(b)
        except Exception as e: print(f"  ✗ {f} JSON-LD[{i}] 오류: {e}"); fail=1
sys.exit(fail)
PY
[ $? -eq 0 ] && ok "전 페이지 JSON-LD 유효" || FAIL=1

echo "== 5) pic() 참조 자산 존재 (imgMeta 키가 assets/에 있나) =="
python3 - <<'PY'
import re,os,sys
t=open("app.js",encoding="utf-8").read()
m=re.search(r'const imgMeta = (\{.*?\});',t,re.S)
fail=0
if m:
    import json
    meta=json.loads(m.group(1))
    for name in meta:
        p=os.path.join("assets",name)
        if not os.path.exists(p): print(f"  ✗ 누락 자산: assets/{name}"); fail=1
sys.exit(fail)
PY
[ $? -eq 0 ] && ok "imgMeta 자산 전부 존재" || FAIL=1

echo "== 6) 회귀 grep (내부문서 배포차단 / 수기 br / 미치환 도메인) =="
grep -q "REMEMORY_HANDOFF.md" .vercelignore 2>/dev/null && ok "내부문서 .vercelignore 제외됨" || bad "REMEMORY_HANDOFF.md 미제외"
BR=$(grep -oE '<br>' app.js | wc -l | tr -d ' '); [ "$BR" = "0" ] && ok "수기 <br> 0" || echo "  · 수기 <br> ${BR}개(참고)"
grep -q "rememory\.kr" app.js rememory/index.html 2>/dev/null && bad "rememory.kr 미치환 잔재" || ok "rememory.kr 잔재 0"

echo ""
if [ "$FAIL" = "0" ]; then echo "RESULT: PASS ✅  (배포 진행 가능)"; exit 0; else echo "RESULT: FAIL ❌  (배포 중단 — 위 ✗ 해결 필요)"; exit 1; fi
