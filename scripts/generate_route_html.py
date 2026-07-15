import json
from html import escape
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
DOMAIN = "https://videoroastery.com"
ASSETS = ROOT / "assets"
FONT = "/System/Library/Fonts/AppleSDGothicNeo.ttc"

PAGES = [
    {
        "slug": "",
        "title": "비디오 로스터리 Video Roastery | 제주 영상제작·홈페이지·드론·AI 숏폼",
        "description": "제주 촬영부터 전국 온라인 제작까지 — 홈페이지·영상·드론·AI 숏폼·콘텐츠를 실제 작업물 기준으로 상담하고, 보고 바로 문의로 이어지게 만듭니다.",
        "service": "포트폴리오 기반 제작 상담",
        "image": "logo.png",
        "og": "og_main.jpg",
        "video": "live_hero.mp4",
        "url": "/",
    },
    {
        "slug": "homepage",
        "title": "비디오 로스터리 | 홈페이지 제작·랜딩페이지 제작",
        "description": "첫 방문자가 업종을 이해하고 화면 예시 확인과 상담 요청까지 자연스럽게 이어지도록 홈페이지를 설계합니다.",
        "service": "홈페이지 제작 상담",
        "image": "portfolio_automation_homepage_flow.jpg",
        "og": "og_homepage.jpg",
        "video": "live_hero.mp4",
        "url": "/homepage/",
    },
    {
        "slug": "inquiry-agent",
        "title": "비디오 로스터리 | 문의 자동화·고객응대 시스템",
        "description": "폼, 메일, 카카오, 시트, 알림을 엮어 고객 요청과 답장 초안이 먼저 정리되는 상담 흐름을 만듭니다.",
        "service": "문의 자동화 상담",
        "image": "portfolio_automation_examples.jpg",
        "og": "og_inquiry_agent.jpg",
        "video": "live_hero.mp4",
        "url": "/inquiry-agent/",
    },
    {
        "slug": "ai-shortform",
        "title": "비디오 로스터리 | AI 영상제작·AI 숏폼·릴스 광고",
        "description": "제품 사진과 콘셉트, 문구를 바탕으로 쇼츠·릴스·틱톡용 세로 광고 영상을 구성합니다.",
        "service": "AI 숏폼 제작 상담",
        "image": "card_ai_shortform_photo.jpg",
        "og": "og_ai_shortform.jpg",
        "video": "ai_shortform_hero_web.mp4",
        "url": "/ai-shortform/",
    },
    {
        "slug": "brand-film",
        "title": "비디오 로스터리 | 기업 홍보영상·브랜드필름 제작",
        "description": "기업 소개, 브랜드 메시지, ESG, 서비스 설명을 장면 흐름으로 정리해 설득력 있는 영상으로 만듭니다.",
        "service": "기업 홍보영상 제작 상담",
        "image": "portfolio_video_industrial_brand.jpg",
        "og": "og_brand_film.jpg",
        "video": "brand_film_hero_web.mp4",
        "url": "/brand-film/",
    },
    {
        "slug": "drone",
        "title": "비디오 로스터리 | 제주 드론촬영·항공영상",
        "description": "숙소, 시설, 관광지, 농장, 외관까지 목적에 맞는 와이드 컷과 야간 외관 컷을 함께 제안합니다.",
        "service": "드론 항공촬영 상담",
        "image": "portfolio_drone_night_exterior_clean.jpg",
        "og": "og_drone.jpg",
        "video": "drone_hero_web.mp4",
        "url": "/drone/",
    },
    {
        "slug": "wedding",
        "title": "비디오 로스터리 | 제주 웨딩 스냅·영상 촬영",
        "description": "스냅과 영상 분위기를 먼저 확인하고 얼굴 노출 부담을 낮춘 디테일·분위기 중심의 웨딩 기록을 제안합니다.",
        "service": "웨딩스냅·영상 상담",
        "image": "portfolio_wedding_studio_mood.jpg",
        "og": "og_wedding.jpg",
        "video": "wedding_hero.mp4",
        "url": "/wedding/",
    },
    {
        "slug": "content",
        "title": "비디오 로스터리 | 상세페이지·카드뉴스·릴스 제작",
        "description": "홍보 문구, 화면 순서, 카드뉴스, 릴스 소재를 한 번에 재활용되도록 구성합니다.",
        "service": "카드뉴스·콘텐츠 제작 상담",
        "image": "portfolio_content_reels_page.jpg",
        "og": "og_content.jpg",
        "video": "content_hero.mp4",
        "url": "/content/",
    },
    {
        "slug": "consulting",
        "title": "비디오 로스터리 | AI 활용 컨설팅·자동화",
        "description": "반복되는 업무를 진단하고 노션, 시트, 폼, 메일, AI 도구를 실제 업무 흐름에 맞게 연결합니다.",
        "service": "AI 활용 컨설팅 상담",
        "image": "ai_service_landing.png",
        "og": "og_consulting.jpg",
        "video": "live_hero.mp4",
        "url": "/consulting/",
    },
]

HTML = """<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <meta name="description" content="{description}" />
    <link rel="canonical" href="{canonical}" />
    <meta property="og:site_name" content="Video Roastery" />
    <meta property="og:locale" content="ko_KR" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="{description}" />
    <meta property="og:url" content="{canonical}" />
    <meta property="og:image" content="{og_image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{title}" />
    <meta name="twitter:description" content="{description}" />
    <meta name="twitter:image" content="{og_image}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="theme-color" content="#0f7f62" />
    <link rel="icon" href="{asset_prefix}assets/symbol.png" />
    <link rel="apple-touch-icon" href="{asset_prefix}assets/profile_symbol.png" />
    <link rel="manifest" href="{asset_prefix}manifest.webmanifest" />
    <link rel="preload" href="{asset_prefix}assets/fonts/PretendardVariable.subset.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="stylesheet" href="{asset_prefix}style.css" />
    <script type="application/ld+json">{schema_json}</script>
  </head>
  <body>
    <noscript>{fallback_html}</noscript>
    <div id="app"></div>
    <script src="{asset_prefix}app.js"></script>
  </body>
</html>
"""


def write_page(page):
    target = ROOT / page["slug"] / "index.html" if page["slug"] else ROOT / "index.html"
    asset_prefix = "../" if page["slug"] else ""
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(
        HTML.format(
            title=page["title"],
            description=page["description"],
            canonical=f"{DOMAIN}{page['url']}",
            og_image=f"{DOMAIN}/assets/{page['og']}",
            hero_video=page["video"],
            asset_prefix=asset_prefix,
            schema_json=schema_for(page),
            fallback_html=fallback_for(page, asset_prefix),
        ),
        encoding="utf-8",
    )


# 실제 페이지에 렌더되는 FAQ와 1:1로 일치해야 함(app.js의 faqItems / routeFaqExtra와 동기화).
# 구조화데이터 FAQPage는 화면에 보이는 문답과 반드시 동일해야 유효(Google 가이드라인).
COMMON_FAQ = [
    {
        "q": "제작 기간은 얼마나 걸리나요?",
        "a": "분량과 범위에 따라 보통 1~4주입니다. 보유 자료를 확인한 뒤 정확한 일정을 먼저 안내드립니다.",
    },
    {
        "q": "비용은 어떻게 책정되나요?",
        "a": "홈페이지에 금액을 일괄 표기하지 않고, 보유 자료와 제작 범위를 확인한 뒤 맞춤 견적서로 안내합니다. 예산 범위를 알려주시면 가능한 구성과 제외할 항목을 함께 정리해 회신합니다.",
    },
    {
        "q": "영상 상업적 사용권은 어떻게 되나요?",
        "a": "납품 영상은 상담 때 정한 범위 안에서 광고·홈페이지·SNS 등에 사용할 수 있게 안내합니다. 음악·스톡·AI 생성물의 사용 범위가 있으면 계약 전에 먼저 확인합니다.",
    },
    {
        "q": "촬영 없이 AI 숏폼만 제작 가능한가요?",
        "a": "가능합니다. 제품 사진·기존 영상·로고·핵심 문구만 있어도 릴스·쇼츠용 AI 숏폼으로 구성합니다. 자료가 부족하면 필요한 사진 기준을 먼저 안내드립니다.",
    },
    {
        "q": "수정은 가능한가요?",
        "a": "합의된 범위 안에서 수정이 포함됩니다. 톤·문구·구성을 먼저 확정하고 제작해 큰 수정이 생기지 않도록 진행합니다.",
    },
    {
        "q": "어떻게 시작하나요?",
        "a": "원하는 결과물, 보유 자료, 희망 일정만 적어 보내주시면 작업 가능 범위와 다음 단계를 회신드립니다. 계약 전 상담은 부담 없습니다.",
    },
    {
        "q": "제주 외 지역도 가능한가요?",
        "a": "홈페이지·영상·콘텐츠 제작은 전국 온라인으로 진행합니다. 현장 촬영·드론은 일정과 지역을 협의해 진행합니다.",
    },
]

ROUTE_FAQ_EXTRA = {
    "homepage": [
        {
            "q": "제작 후 수정과 관리도 가능한가요?",
            "a": "런칭 후에도 문구·이미지 수정과 간단한 운영 관리를 이어서 도와드립니다. 관리 범위는 상담 때 함께 정합니다.",
        }
    ],
    "ai-shortform": [
        {
            "q": "촬영 없이 보유 자료만으로도 가능한가요?",
            "a": "네. 제품 사진·기존 영상·콘셉트만 있어도 숏폼 광고 소재로 구성합니다. 추가 촬영이 필요하면 따로 안내드립니다.",
        }
    ],
    "brand-film": [
        {
            "q": "촬영 없이 보유 자료만으로도 가능한가요?",
            "a": "네. 기존 영상·사진·로고 자료로도 구성 가능하며, 현장 촬영이 필요하면 일정을 협의합니다.",
        }
    ],
    "drone": [
        {
            "q": "드론 촬영 허가·안전은 어떻게 처리하나요?",
            "a": "비행 가능 구역과 허가 여부를 사전에 확인하고 안전 규정에 맞춰 촬영합니다. 지역·일정은 상담 때 함께 점검합니다.",
        }
    ],
    "wedding": [
        {
            "q": "얼굴 노출이 부담스러운데 괜찮나요?",
            "a": "디테일·실루엣·뒷모습 중심의 무드 편집으로 진행할 수 있습니다. 공개 범위를 먼저 협의합니다.",
        }
    ],
    "content": [
        {
            "q": "꾸준한 콘텐츠 운영도 도와주나요?",
            "a": "단건 제작뿐 아니라 카드뉴스·릴스 정기 운영 구성도 상담 가능합니다.",
        }
    ],
}


def faq_items(page):
    return COMMON_FAQ + ROUTE_FAQ_EXTRA.get(page["slug"], [])


def fallback_for(page, asset_prefix):
    links = "\n".join(
        f'<li><a href="{asset_prefix}{item["slug"]}/">{escape(item["service"])}</a></li>'
        for item in PAGES
        if item["slug"]
    )
    service_links = f"<ul>{links}</ul>" if not page["slug"] else f'<p><a href="{asset_prefix}">전체 서비스 보기</a></p>'
    return (
        '<section class="noscript-fallback">'
        f'<img src="{asset_prefix}assets/symbol.png" alt="Video Roastery" />'
        f'<h1>{escape(page["title"])}</h1>'
        f'<p>{escape(page["description"])}</p>'
        f'{service_links}'
        '<p><a class="btn primary" href="mailto:kiwee1223@gmail.com">상담 메일 보내기</a></p>'
        "</section>"
    )


def schema_for(page):
    canonical = f"{DOMAIN}{page['url']}"
    org = {
        "@type": "Organization",
        "@id": f"{DOMAIN}/#organization",
        "name": "Video Roastery",
        "alternateName": "비디오 로스터리",
        "url": DOMAIN,
        "logo": f"{DOMAIN}/assets/symbol.png",
        "sameAs": ["https://www.youtube.com/@VideoRoastery-m9g", "https://www.instagram.com/1minute_jeju","https://kmong.com/@%EB%B9%84%EB%94%94%EC%98%A4%EB%A1%9C%EC%8A%A4%ED%84%B0%EB%A6%AC"],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "kiwee1223@gmail.com",
            "availableLanguage": ["ko"],
        },
    }
    web_page = {
        "@type": "WebPage",
        "@id": f"{canonical}#webpage",
        "url": canonical,
        "name": page["title"],
        "description": page["description"],
        "inLanguage": "ko-KR",
        "isPartOf": {"@id": f"{DOMAIN}/#website"},
        "publisher": {"@id": f"{DOMAIN}/#organization"},
        "image": f"{DOMAIN}/assets/{page['og']}",
    }
    graph = [
        org,
        {
            "@type": "WebSite",
            "@id": f"{DOMAIN}/#website",
            "url": DOMAIN,
            "name": "Video Roastery",
            "publisher": {"@id": f"{DOMAIN}/#organization"},
            "inLanguage": "ko-KR",
        },
        web_page,
    ]
    if page["slug"]:
        graph.append(
            {
                "@type": "Service",
                "@id": f"{canonical}#service",
                "name": page["service"],
                "description": page["description"],
                "provider": {"@id": f"{DOMAIN}/#organization"},
                "areaServed": {"@type": "Country", "name": "KR"},
                "url": canonical,
                "image": f"{DOMAIN}/assets/{page['og']}",
            }
        )
        graph.append(
            {
                "@type": "BreadcrumbList",
                "@id": f"{canonical}#breadcrumb",
                "itemListElement": [
                    {"@type": "ListItem", "position": 1, "name": "홈", "item": f"{DOMAIN}/"},
                    {"@type": "ListItem", "position": 2, "name": page["service"], "item": canonical},
                ],
            }
        )
        graph.append(
            {
                "@type": "FAQPage",
                "@id": f"{canonical}#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": item["q"],
                        "acceptedAnswer": {"@type": "Answer", "text": item["a"]},
                    }
                    for item in faq_items(page)
                ],
            }
        )
    return json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False, separators=(",", ":"))

def font(size, index=8):
    return ImageFont.truetype(FONT, size, index=index)


def cover(path, size):
    image = Image.open(path).convert("RGB")
    return ImageOps.fit(image, size, method=Image.Resampling.LANCZOS)


def wrap(draw, text, fnt, width):
    words = text.split()
    lines, current = [], ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if not current or draw.textbbox((0, 0), candidate, font=fnt)[2] <= width:
            current = candidate
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def write_og(page):
    W, H = 1200, 630
    ink = (16, 21, 27)
    green = (15, 127, 98)
    paper = (251, 250, 245)
    white = (255, 253, 248)
    muted = (210, 220, 222)
    canvas = Image.new("RGB", (W, H), ink)
    draw = ImageDraw.Draw(canvas)

    source = ASSETS / page["image"]
    photo = cover(source, (W, H))
    canvas.paste(photo, (0, 0))

    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.rectangle([0, 0, W, H], fill=(8, 15, 22, 145))
    od.rectangle([0, 0, 670, H], fill=(8, 15, 22, 102))
    canvas = Image.alpha_composite(canvas.convert("RGBA"), overlay).convert("RGB")
    draw = ImageDraw.Draw(canvas)

    symbol = Image.open(ASSETS / "symbol.png").convert("RGBA").resize((58, 58), Image.Resampling.LANCZOS)
    canvas.paste(symbol, (72, 62), symbol)
    draw.text((146, 72), "Video Roastery", font=font(31, 8), fill=white)

    pill = f"videoroastery.com{page['url'] if page['url'] != '/' else ''}"
    draw.rounded_rectangle([72, 166, 72 + min(520, 34 + len(pill) * 15), 210], radius=20, fill=(255, 255, 255, 36), outline=(255, 255, 255, 72), width=1)
    draw.text((94, 176), pill, font=font(21, 8), fill=white)

    y = 248
    for line in wrap(draw, page["title"].split(" | ", 1)[-1], font(56, 8), 720)[:2]:
        draw.text((72, y), line, font=font(56, 8), fill=white)
        y += 68

    y += 10
    for line in wrap(draw, page["description"], font(25, 4), 750)[:2]:
        draw.text((74, y), line, font=font(25, 4), fill=muted)
        y += 38

    draw.rounded_rectangle([72, 520, 286, 574], radius=8, fill=green)
    draw.text((112, 536), "상담하기", font=font(25, 8), fill=white)

    canvas.save(ASSETS / page["og"], quality=92)


def write_sitemap():
    # 홈(ko)·en·zh·zh-hant는 서로의 언어 대안 → 각 URL에 hreflang alternate 5종 상호 명시. x-default=홈.
    i18n_alt = "".join(
        f'<xhtml:link rel="alternate" hreflang="{lang}" href="{DOMAIN}{path}"/>'
        for lang, path in (
            ("ko", "/"), ("en", "/en/"), ("zh-Hans", "/zh/"),
            ("zh-Hant", "/zh-hant/"), ("x-default", "/"),
        )
    )

    def url_entry(loc, changefreq, priority, i18n=False):
        return (
            f"  <url><loc>{loc}</loc><changefreq>{changefreq}</changefreq>"
            f"<priority>{priority}</priority>{i18n_alt if i18n else ''}</url>"
        )

    page_urls = [
        url_entry(f"{DOMAIN}{page['url']}", "weekly", "1.0" if page["slug"] == "" else "0.8", i18n=(page["slug"] == ""))
        for page in PAGES
    ]
    page_urls.append(url_entry(f"{DOMAIN}/estimate/", "weekly", "0.8"))
    page_urls.append(url_entry(f"{DOMAIN}/about/", "monthly", "0.7"))
    page_urls.append(url_entry(f"{DOMAIN}/en/", "monthly", "0.6", i18n=True))
    page_urls.append(url_entry(f"{DOMAIN}/zh/", "monthly", "0.6", i18n=True))
    page_urls.append(url_entry(f"{DOMAIN}/zh-hant/", "monthly", "0.6", i18n=True))
    page_urls.append(url_entry(f"{DOMAIN}/rememory/", "monthly", "0.8"))
    page_urls.append(url_entry(f"{DOMAIN}/privacy/", "monthly", "0.3"))
    urls = "\n".join(page_urls)
    (ROOT / "sitemap.xml").write_text(
        f'<?xml version="1.0" encoding="UTF-8"?>\n'
        f'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
        f'xmlns:xhtml="http://www.w3.org/1999/xhtml">\n{urls}\n</urlset>\n',
        encoding="utf-8",
    )


def write_robots():
    (ROOT / "robots.txt").write_text(
        "User-agent: *\nAllow: /\nSitemap: https://videoroastery.com/sitemap.xml\n",
        encoding="utf-8",
    )


def main():
    # 루트(slug="") index.html은 수기 강화본(리치 Org 스키마·og:image 치수·?v 캐시버스팅)이라
    # 템플릿에 없는 내용이 소실된다 → 생성기는 절대 루트를 쓰지 않는다. 서브페이지만 생성.
    written = 0
    for page in PAGES:
        if not page["slug"]:
            continue
        write_og(page)
        write_page(page)
        written += 1
    write_sitemap()
    write_robots()
    print(f"generated {written} subpages (root index.html skipped — hand-maintained)")


if __name__ == "__main__":
    main()
