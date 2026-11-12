#!/usr/bin/env python3
"""사례 페이지 생성 — scripts/cases_data.json → /cases/index.html + /cases/<slug>/index.html

app.js 셸이 아닌 자체 정적 페이지(privacy·jeju와 같은 방식)라 prerender.py 대상이 아니다.
카톡으로 링크 하나 보내면 폰에서 바로 열리도록 모바일 우선, 외부 스크립트는 분석 태그만.
  사용: python3 scripts/gen_cases.py
"""
import json
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = json.loads((ROOT / "scripts/cases_data.json").read_text(encoding="utf-8"))
SITE = "https://videoroastery.com"
KAKAO = "https://open.kakao.com/o/sqp6y8Bi"
VER = "20261112c"
CATS = [
    ("sns", "SNS 운영"),
    ("print", "상세페이지·인쇄물"),
    ("video", "영상"),
    ("class", "수업"),
]
CAT_NAME = dict(CATS)

ANALYTICS = """<script>
(function(){var h=location.hostname;if(h!=="videoroastery.com"&&h!=="www.videoroastery.com")return;
window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};
var s=document.createElement("script");s.defer=true;s.src="/_vercel/insights/script.js";document.head.appendChild(s);
(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","xo3gh5bnxm");
document.addEventListener("click",function(e){var a=e.target.closest("[data-cta]");if(!a)return;
try{window.va&&window.va("event",{name:"case_cta",data:{type:a.dataset.cta,page:location.pathname}})}catch(_){}
try{window.clarity&&window.clarity("event","case_cta_"+a.dataset.cta)}catch(_){}});
})();
</script>"""


def e(s):
    return escape(s, quote=True)


def head(title, desc, path, og_img, extra_ld):
    url = SITE + path
    return f"""<!doctype html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="{url}" />
<meta name="theme-color" content="#fbfaf5" />
<meta property="og:site_name" content="Video Roastery" />
<meta property="og:locale" content="ko_KR" />
<meta property="og:type" content="article" />
<meta property="og:title" content="{e(title)}" />
<meta property="og:description" content="{e(desc)}" />
<meta property="og:url" content="{url}" />
<meta property="og:image" content="{SITE}{og_img}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="900" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" href="/assets/symbol.png" />
<link rel="apple-touch-icon" href="/assets/profile_symbol.png" />
<link rel="preload" href="/assets/fonts/PretendardVariable.subset.woff2" as="font" type="font/woff2" crossorigin />
<link rel="stylesheet" href="/cases/cases.css?v={VER}" />
<script type="application/ld+json">{json.dumps(extra_ld, ensure_ascii=False)}</script>
{ANALYTICS}
</head>
"""


def topbar():
    return f"""<header class="cs-top">
  <a class="cs-brand" href="/"><img src="/assets/symbol.png" alt="" width="28" height="28" /><span>Video Roastery</span></a>
  <a class="cs-top-cta" href="{KAKAO}" target="_blank" rel="noopener" data-cta="kakao_top">문의하기</a>
</header>"""


def cta_block():
    return f"""<section class="cs-cta">
  <h2>비슷한 일이 필요하신가요?</h2>
  <p>지금 운영 중인 채널이나 자료 링크만 보내 주시면, 어디부터 손대면 좋을지 먼저 정리해 드립니다.</p>
  <div class="cs-cta-row">
    <a class="cs-btn primary" href="{KAKAO}" target="_blank" rel="noopener" data-cta="kakao">카카오톡으로 문의</a>
    <a class="cs-btn" href="/#contact" data-cta="form">문의 남기기</a>
  </div>
</section>"""


def footer():
    return """<footer class="cs-foot">
  <a href="/cases/">전체 사례</a><a href="/">홈</a><a href="/privacy/">개인정보처리방침</a>
  <p>© Video Roastery · 제주</p>
</footer>"""


def breadcrumb(items):
    return {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": i + 1, "name": n, "item": SITE + p}
            for i, (n, p) in enumerate(items)
        ],
    }


def card(c, eager=False):
    img = f"/assets/cases/{c['slug']}/01.jpg"
    load = 'fetchpriority="high"' if eager else 'loading="lazy"'
    client = f"<small>{e(c['client'])}</small>" if c["client"] else ""
    return f"""<a class="cs-card" href="/cases/{c['slug']}/">
  <img src="{img}" width="1200" height="900" alt="{e(c['title'])} 사례 대표 이미지" {load} decoding="async" />
  <span class="cs-card-meta">{client}<strong>{e(c['title'])}</strong><em>{e(c['sub'])}</em></span>
</a>"""


def build_index():
    title = "작업 사례 — 제주 SNS 운영·상세페이지·영상·수업 | 비디오 로스터리"
    desc = "제주·서귀포 식당, 글램핑, 분양, 농업 법인, 유튜브 채널과 함께한 SNS 운영·상세페이지·인쇄물·영상·수업 사례 12건. 과제와 한 일, 결과물을 실제 이미지로 보여 드립니다."
    ld = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "name": "작업 사례",
                "url": SITE + "/cases/",
                "inLanguage": "ko-KR",
                "isPartOf": {"@id": SITE + "/#website"},
                "hasPart": [{"@type": "CreativeWork", "name": c["title"], "url": f"{SITE}/cases/{c['slug']}/"} for c in DATA],
            },
            breadcrumb([("홈", "/"), ("작업 사례", "/cases/")]),
        ],
    }
    first = True
    secs = []
    nav = []
    for key, name in CATS:
        items = [c for c in DATA if c["cat"] == key]
        cards = []
        for c in items:
            cards.append(card(c, eager=first))
            first = False
        nav.append(f'<a href="#{key}">{e(name)} <span>{len(items)}</span></a>')
        secs.append(f"""<section class="cs-group" id="{key}">
  <h2>{e(name)}</h2>
  <div class="cs-grid">
{chr(10).join(cards)}
  </div>
</section>""")
    html = head(title, desc, "/cases/", f"/assets/cases/{DATA[0]['slug']}/01.jpg", ld) + f"""<body>
{topbar()}
<main class="cs-main">
  <section class="cs-hero">
    <p class="cs-kicker">CASES</p>
    <h1>작업 사례</h1>
    <p class="cs-lead">제주의 식당·숙소·분양·농업 법인과 함께한 운영·제작·수업 기록입니다. 사례마다 처음 과제, 한 일, 남긴 결과물을 정리했습니다.</p>
    <nav class="cs-tabs" aria-label="분류">{''.join(nav)}</nav>
  </section>
{chr(10).join(secs)}
{cta_block()}
</main>
{footer()}
</body>
</html>
"""
    out = ROOT / "cases/index.html"
    out.parent.mkdir(exist_ok=True)
    out.write_text(html, encoding="utf-8")


def build_case(i, c):
    path = f"/cases/{c['slug']}/"
    title = f"{c['seo']} | 비디오 로스터리"
    desc = f"{c['sub']}. {c['task']} {c['did']}"
    if len(desc) > 155:
        desc = desc[:154].rstrip() + "…"
    imgs = [f"/assets/cases/{c['slug']}/{n}" for n in c["images"]]
    ld = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CreativeWork",
                "name": c["title"],
                "headline": c["seo"],
                "description": desc,
                "url": SITE + path,
                "inLanguage": "ko-KR",
                "image": [SITE + p for p in imgs],
                "creator": {"@id": SITE + "/#organization"},
                "isPartOf": {"@id": SITE + "/#website"},
                "genre": CAT_NAME[c["cat"]],
            },
            breadcrumb([("홈", "/"), ("작업 사례", "/cases/"), (c["title"], path)]),
        ],
    }
    hi, lazy = 'fetchpriority="high"', 'loading="lazy"'
    gallery = "\n".join(
        f'<figure><img src="{p}" width="1200" height="900" alt="{e(c["title"])} 결과물 {k + 1}" '
        f'{hi if k == 0 else lazy} decoding="async" /></figure>'
        for k, p in enumerate(imgs)
    )
    blocks = "\n".join(
        '<div class="cs-step">' + (f"<h3>{e(h)}</h3>" if h else "") + f"<p>{e(t)}</p></div>"
        for h, t in c["blocks"]
    )
    deliver = "".join(f"<li>{e(d)}</li>" for d in c["deliver"])
    prev_c = DATA[i - 1] if i > 0 else None
    next_c = DATA[i + 1] if i < len(DATA) - 1 else None
    pn = ""
    if prev_c:
        pn += f'<a class="cs-pn prev" href="/cases/{prev_c["slug"]}/"><small>이전 사례</small><span>{e(prev_c["title"])}</span></a>'
    if next_c:
        pn += f'<a class="cs-pn next" href="/cases/{next_c["slug"]}/"><small>다음 사례</small><span>{e(next_c["title"])}</span></a>'
    client = f"{e(c['client'])} · " if c["client"] else ""
    html = head(title, desc, path, imgs[0], ld) + f"""<body>
{topbar()}
<main class="cs-main cs-detail">
  <a class="cs-back" href="/cases/#{c['cat']}">← 전체 사례</a>
  <header class="cs-head">
    <p class="cs-kicker">{e(CAT_NAME[c['cat']])}</p>
    <h1>{e(c['title'])}</h1>
    <p class="cs-sub">{client}{e(c['sub'])}</p>
    <p class="cs-period">{e(c['period'])}</p>
  </header>
  <section class="cs-sum" aria-label="요약">
    <div><h2>과제</h2><p>{e(c['task'])}</p></div>
    <div><h2>한 일</h2><p>{e(c['did'])}</p></div>
    <div><h2>결과물</h2><p>{e(c['result'])}</p></div>
  </section>
  <section class="cs-gallery" aria-label="결과물 이미지">
{gallery}
  </section>
  <section class="cs-body">
    <p class="cs-intro">{e(c['intro'])}</p>
{blocks}
    <div class="cs-deliver"><h3>산출물</h3><ul>{deliver}</ul></div>
  </section>
{cta_block()}
  <nav class="cs-pns" aria-label="다른 사례">{pn}</nav>
</main>
{footer()}
</body>
</html>
"""
    out = ROOT / "cases" / c["slug"] / "index.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html, encoding="utf-8")


if __name__ == "__main__":
    build_index()
    for i, c in enumerate(DATA):
        build_case(i, c)
    print(f"cases: index + {len(DATA)} pages")
