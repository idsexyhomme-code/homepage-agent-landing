#!/usr/bin/env python3
"""
홈 Selected Work의 재생 영상들 → VideoObject 구조화데이터(JSON-LD) 생성.
구글 동영상 검색/리치결과 자격을 얻기 위함. 고객사 실명 미포함(generic), 실제 파일·정확한 duration만 사용.
출력: scripts/videoobjects.jsonld  (index.html에 별도 <script> 블록으로 삽입)
"""
import re, json, subprocess, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1]
DOMAIN = "https://videoroastery.com"
app = (ROOT / "app.js").read_text(encoding="utf-8")

# portfolioMedia: "cover": "portfolio_videos/xxx.mp4"
media = {}
for m in re.finditer(r'"([^"]+\.(?:jpg|png|webp))"\s*:\s*"(portfolio_videos/[^"]+\.mp4)"', app):
    media[m.group(1)] = m.group(2)

# portfolioWallItems: ["image","cat","LABEL","title","slug", ...] → title
titles = {}
for m in re.finditer(r'\["([^"]+)",\s*"[^"]*",\s*"[^"]*",\s*"([^"]+)",\s*"[^"]*"', app):
    titles.setdefault(m.group(1), m.group(2))

# homeFeatured order (the on-page Selected Work set)
hf = re.search(r'const homeFeatured = \[(.*?)\];', app, re.S).group(1)
covers = re.findall(r'"([^"]+)"', hf)

def dur_iso(path):
    try:
        d = float(subprocess.check_output(
            ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)]
        ).decode().strip())
        return "PT%dS" % round(d) if d > 0 else None
    except Exception:
        return None

objs, skipped = [], []
for cover in covers:
    vid = media.get(cover)
    if not vid:
        skipped.append((cover, "no video map")); continue
    vpath = ROOT / "assets" / vid
    if not vpath.exists():
        skipped.append((cover, "video file missing")); continue
    if not (ROOT / "assets" / cover).exists():
        skipped.append((cover, "cover missing")); continue
    title = titles.get(cover, "제작 영상")
    obj = {
        "@type": "VideoObject",
        "name": f"{title} | 비디오 로스터리 Video Roastery",
        "description": f"비디오 로스터리(Video Roastery)의 {title} 작업 사례입니다. 제주 기반 영상·홈페이지 제작 스튜디오.",
        "thumbnailUrl": f"{DOMAIN}/assets/{cover}",
        "uploadDate": "2026-06-01",
        "contentUrl": f"{DOMAIN}/assets/{vid}",
        "url": f"{DOMAIN}/#portfolio-hub",
        "publisher": {"@id": f"{DOMAIN}/#organization"},
    }
    d = dur_iso(vpath)
    if d:
        obj["duration"] = d
    objs.append(obj)

block = json.dumps({"@context": "https://schema.org", "@graph": objs}, ensure_ascii=False, separators=(",", ":"))
(ROOT / "scripts" / "videoobjects.jsonld").write_text(block, encoding="utf-8")
print(f"generated {len(objs)} VideoObjects")
for c, why in skipped:
    print(f"  skipped {c}: {why}")
