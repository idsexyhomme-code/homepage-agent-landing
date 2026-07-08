#!/usr/bin/env python3
"""
Pretendard 가변폰트를 '사이트에 실제 쓰인 글자'로만 서브셋 → 2.1MB→~0.2MB (90%↓).
가변 굵기축(wght 45~930)은 그대로 보존되어 화면은 픽셀 동일. 원본은 보존.

⚠️ 새 한글 문구를 추가한 뒤 배포하기 전엔 이 스크립트를 다시 실행하세요.
   (안 하면 새 글자만 시스템 폰트로 대체 렌더 — 깨지진 않지만 살짝 다름)

필요: pip3 install --user fonttools brotli
실행: python3 scripts/subset_font.py
"""
import subprocess, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1]
SRC = ROOT / "assets" / "fonts" / "PretendardVariable.woff2"          # 원본(보존)
OUT = ROOT / "assets" / "fonts" / "PretendardVariable.subset.woff2"   # 배포에 쓰는 서브셋
CORPUS = ROOT / "scripts" / "_font_corpus.txt"

# 사이트에 등장하는 모든 소스 파일 → 모든 코드포인트 포함 보장
sources = [ROOT / "index.html", ROOT / "app.js", ROOT / "style.css"]
sources += list(ROOT.glob("*/index.html"))
text = []
for p in sources:
    try:
        text.append(p.read_text(encoding="utf-8"))
    except Exception:
        pass
CORPUS.write_text("\n".join(text), encoding="utf-8")

cmd = [
    "python3", "-m", "fontTools.subset", str(SRC),
    f"--text-file={CORPUS}",
    # ASCII·라틴·문장부호·화살표·기호·전각 등 안전 여유분
    "--unicodes=U+0020-007E,U+00A0-00FF,U+2000-206F,U+20A0-20BF,U+2190-21FF,U+2200-22FF,U+2605-2606,U+25A0-25FF,U+FF01-FFEE,U+3000-303F",
    "--layout-features=*", "--glyph-names", "--flavor=woff2",
    f"--output-file={OUT}",
]
subprocess.check_call(cmd)
print(f"OK  {SRC.stat().st_size//1024}KB -> {OUT.stat().st_size//1024}KB")
CORPUS.unlink(missing_ok=True)
