#!/usr/bin/env python3
"""사례 페이지 생성 — scripts/cases_data.json(+ cases_i18n.json) → /cases/<slug>/ 와 /en·/zh·/zh-hant/cases/<slug>/
(목록은 app.js workPage·i18nWorkPage — 데이터 바꾸면 app.js projectCases·projectCasesI18n도 같이 갱신)

app.js 셸이 아닌 자체 정적 페이지(privacy·jeju와 같은 방식)라 prerender.py 대상이 아니다.
카톡으로 링크 하나 보내면 폰에서 바로 열리도록 모바일 우선, 외부 스크립트는 분석 태그만.
번체(hant)는 간체(hans)에서 변환해 cases_i18n.json에 저장해 둔 값이다.
  사용: python3 scripts/gen_cases.py
"""
import json
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = json.loads((ROOT / "scripts/cases_data.json").read_text(encoding="utf-8"))
I18N = json.loads((ROOT / "scripts/cases_i18n.json").read_text(encoding="utf-8"))
SITE = "https://videoroastery.com"
KAKAO = "https://open.kakao.com/o/sqp6y8Bi"
VER = "20261113b"
CAT_KEYS = ["sns", "print", "video", "class"]

# 언어별 화면 글자 — 제목·머리말은 전부 짧은 명사형(설명 문장 금지)
LANGS = {
    "ko": dict(prefix="", html="ko", hreflang="ko", og="ko_KR", inl="ko-KR", name="한국어", brand=" | 비디오 로스터리",
               cats=["SNS 운영", "상세페이지·인쇄물", "영상", "수업"], top="문의하기", back="← 전체 작업 사례",
               sum=["과제", "한 일", "결과물"], sum_aria="요약", gal_aria="결과물 이미지", deliver="산출물",
               cta="문의", prev="이전 사례", next="다음 사례", pn_aria="다른 사례", work="작업 사례", home="홈",
               privacy="개인정보처리방침", foot="© Video Roastery · 제주", alt="결과물", sep=". ", gap=" "),
    "en": dict(prefix="/en", html="en", hreflang="en", og="en_US", inl="en", name="EN", brand=" — Video Roastery",
               cats=["Social Media", "Detail Pages · Print", "Video", "Classes"], top="Get a quote", back="← All project cases",
               sum=["Brief", "What we did", "Output"], sum_aria="Summary", gal_aria="Output images", deliver="Deliverables",
               cta="Contact", prev="Previous case", next="Next case", pn_aria="Other cases", work="Project cases", home="Home",
               quote="Get a quote ↗", allwork="All project cases", foot="© Video Roastery · Jeju, Korea", alt="output", sep=". ", gap=" "),
    "hans": dict(prefix="/zh", html="zh-Hans", hreflang="zh-Hans", og="zh_CN", inl="zh-Hans", name="简体", brand=" — Video Roastery",
                 cats=["社交媒体运营", "详情页 · 印刷品", "视频", "课程"], top="获取报价", back="← 全部项目案例",
                 sum=["课题", "工作内容", "成果"], sum_aria="摘要", gal_aria="成果图片", deliver="交付物",
                 cta="咨询", prev="上一个案例", next="下一个案例", pn_aria="其他案例", work="项目案例", home="首页",
                 quote="获取报价 ↗", allwork="全部项目案例", foot="© Video Roastery · 韩国济州岛", alt="成果", sep="。", gap=""),
    "hant": dict(prefix="/zh-hant", html="zh-Hant", hreflang="zh-Hant", og="zh_TW", inl="zh-Hant", name="繁體", brand=" — Video Roastery",
                 cats=["社群媒體營運", "商品頁 · 印刷品", "影片", "課程"], top="取得報價", back="← 全部專案案例",
                 sum=["課題", "工作內容", "成果"], sum_aria="摘要", gal_aria="成果圖片", deliver="交付物",
                 cta="諮詢", prev="上一個案例", next="下一個案例", pn_aria="其他案例", work="專案案例", home="首頁",
                 quote="取得報價 ↗", allwork="全部專案案例", foot="© Video Roastery · 韓國濟州島", alt="成果", sep="。", gap=""),
}

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


def text(lang, c):
    """그 언어의 사례 글 — ko는 원본, 나머지는 번역본에 원본의 분류·이미지를 합친다."""
    if lang == "ko":
        return c
    return {**c, **I18N[lang][c["slug"]]}


def case_path(lang, slug):
    return f"{LANGS[lang]['prefix']}/cases/{slug}/"


def work_path(lang):
    return f"{LANGS[lang]['prefix']}/work/"


def head(lang, title, desc, slug, og_img, extra_ld):
    L = LANGS[lang]
    url = SITE + case_path(lang, slug)
    alts = "\n".join(
        f'<link rel="alternate" hreflang="{LANGS[k]["hreflang"]}" href="{SITE}{case_path(k, slug)}" />' for k in LANGS
    ) + f'\n<link rel="alternate" hreflang="x-default" href="{SITE}{case_path("ko", slug)}" />'
    return f"""<!doctype html>
<html lang="{L['html']}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="{url}" />
{alts}
<meta name="theme-color" content="#fbfaf5" />
<meta property="og:site_name" content="Video Roastery" />
<meta property="og:locale" content="{L['og']}" />
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


def topbar(lang):
    L = LANGS[lang]
    home = L["prefix"] + "/"
    cta = (f'<a class="cs-top-cta" href="{KAKAO}" target="_blank" rel="noopener" data-cta="kakao_top">{L["top"]}</a>' if lang == "ko"
           else f'<a class="cs-top-cta" href="{L["prefix"]}/estimate/" data-cta="quote_top">{L["top"]}</a>')
    return f"""<header class="cs-top">
  <a class="cs-brand" href="{home}"><img src="/assets/symbol.png" alt="" width="28" height="28" /><span>Video Roastery</span></a>
  {cta}
</header>"""


def lang_switch(lang, slug):
    links = "".join(
        f'<a href="{case_path(k, slug)}" hreflang="{LANGS[k]["hreflang"]}" lang="{LANGS[k]["html"]}">{LANGS[k]["name"]}</a>'
        for k in LANGS if k != lang
    )
    return f'<span class="cs-lang" role="group" aria-label="Language">{links}</span>'


def cta_block(lang):
    L = LANGS[lang]
    if lang == "ko":
        row = f"""<a class="cs-btn primary" href="{KAKAO}" target="_blank" rel="noopener" data-cta="kakao">카카오톡으로 문의</a>
    <a class="cs-btn" href="/#contact" data-cta="form">문의 남기기</a>"""
    else:
        row = f"""<a class="cs-btn primary" href="{L['prefix']}/estimate/" data-cta="quote">{L['quote']}</a>
    <a class="cs-btn" href="{work_path(lang)}#cases" data-cta="work">{L['allwork']}</a>"""
    return f"""<section class="cs-cta">
  <h2>{L['cta']}</h2>
  <div class="cs-cta-row">
    {row}
  </div>
</section>"""


def footer(lang):
    L = LANGS[lang]
    privacy = f'<a href="/privacy/">{L["privacy"]}</a>' if lang == "ko" else ""
    return f"""<footer class="cs-foot">
  <a href="{work_path(lang)}#cases">{L['work']}</a><a href="{L['prefix']}/">{L['home']}</a>{privacy}
  <p>{L['foot']}</p>
</footer>"""


def breadcrumb(items):
    return {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": i + 1, "name": n, "item": SITE + p}
            for i, (n, p) in enumerate(items)
        ],
    }


def build_case(lang, i):
    L = LANGS[lang]
    c = text(lang, DATA[i])
    cat_name = dict(zip(CAT_KEYS, L["cats"]))[c["cat"]]
    path = case_path(lang, c["slug"])
    title = f"{c['seo']}{L['brand']}"
    desc = f"{c['sub']}{L['sep']}{c['task']}{L['gap']}{c['did']}"
    if len(desc) > 155:
        cut = desc[:154]
        if lang == "en":
            cut = cut.rsplit(" ", 1)[0]
        desc = cut.rstrip(" ,·") + "…"
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
                "inLanguage": L["inl"],
                "image": [SITE + p for p in imgs],
                "creator": {"@id": SITE + "/#organization"},
                "isPartOf": {"@id": SITE + "/#website"},
                "genre": cat_name,
            },
            breadcrumb([(L["home"], L["prefix"] + "/"), (L["work"], work_path(lang)), (c["title"], path)]),
        ],
    }
    hi, lazy = 'fetchpriority="high"', 'loading="lazy"'
    gallery = "\n".join(
        f'<figure><img src="{p}" width="1200" height="900" alt="{e(c["title"])} {L["alt"]} {k + 1}" '
        f'{hi if k == 0 else lazy} decoding="async" /></figure>'
        for k, p in enumerate(imgs)
    )
    blocks = "\n".join(
        '<div class="cs-step">' + (f"<h3>{e(h)}</h3>" if h else "") + f"<p>{e(t)}</p></div>"
        for h, t in c["blocks"]
    )
    deliver = "".join(f"<li>{e(d)}</li>" for d in c["deliver"])
    pn = ""
    if i > 0:
        pc = text(lang, DATA[i - 1])
        pn += f'<a class="cs-pn prev" href="{case_path(lang, pc["slug"])}"><small>{L["prev"]}</small><span>{e(pc["title"])}</span></a>'
    if i < len(DATA) - 1:
        nc = text(lang, DATA[i + 1])
        pn += f'<a class="cs-pn next" href="{case_path(lang, nc["slug"])}"><small>{L["next"]}</small><span>{e(nc["title"])}</span></a>'
    client = f"{e(c['client'])} · " if c["client"] else ""
    s1, s2, s3 = L["sum"]
    html = head(lang, title, desc, c["slug"], imgs[0], ld) + f"""<body>
{topbar(lang)}
<main class="cs-main cs-detail">
  <div class="cs-toprow"><a class="cs-back" href="{work_path(lang)}#c-{c['cat']}">{L['back']}</a>{lang_switch(lang, c['slug'])}</div>
  <header class="cs-head">
    <p class="cs-kicker">{e(cat_name)}</p>
    <h1>{e(c['title'])}</h1>
    <p class="cs-sub">{client}{e(c['sub'])}</p>
    <p class="cs-period">{e(c['period'])}</p>
  </header>
  <section class="cs-sum" aria-label="{L['sum_aria']}">
    <div><h2>{s1}</h2><p>{e(c['task'])}</p></div>
    <div><h2>{s2}</h2><p>{e(c['did'])}</p></div>
    <div><h2>{s3}</h2><p>{e(c['result'])}</p></div>
  </section>
  <section class="cs-gallery" aria-label="{L['gal_aria']}">
{gallery}
  </section>
  <section class="cs-body">
{blocks}
    <div class="cs-deliver"><h3>{L['deliver']}</h3><ul>{deliver}</ul></div>
  </section>
{cta_block(lang)}
  <nav class="cs-pns" aria-label="{L['pn_aria']}">{pn}</nav>
</main>
{footer(lang)}
</body>
</html>
"""
    out = ROOT / path.strip("/") / "index.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html, encoding="utf-8")


if __name__ == "__main__":
    for lang in LANGS:
        for i in range(len(DATA)):
            build_case(lang, i)
    print(f"cases: {len(DATA)} × {len(LANGS)}개 언어 = {len(DATA) * len(LANGS)} pages (목록은 각 언어 /work/ 프로젝트 사례 구역)")
