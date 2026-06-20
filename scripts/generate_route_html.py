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
        "title": "실제 사례로 보는 홈페이지·영상·촬영 상담 | Video Roastery",
        "description": "홈페이지, AI 숏폼, 홍보영상, 촬영, 문의 자동화까지 실제 포트폴리오와 작업 범위를 먼저 확인하는 상담 페이지입니다.",
        "service": "포트폴리오 기반 제작 상담",
        "image": "logo.png",
        "og": "og_main.jpg",
        "video": "live_hero.mp4",
        "url": "/",
    },
    {
        "slug": "homepage",
        "title": "홈페이지 제작 상담 | Video Roastery",
        "description": "첫 방문자가 업종을 이해하고 시안 확인과 상담 요청까지 자연스럽게 이어지도록 홈페이지를 설계합니다.",
        "service": "홈페이지 제작 상담",
        "image": "portfolio_automation_homepage_flow.jpg",
        "og": "og_homepage.jpg",
        "video": "live_hero.mp4",
        "url": "/homepage/",
    },
    {
        "slug": "inquiry-agent",
        "title": "문의 자동화 상담 | Video Roastery",
        "description": "폼, 메일, 카카오, 시트, 알림을 엮어 고객 요청과 답장 초안이 먼저 정리되는 상담 흐름을 만듭니다.",
        "service": "문의 자동화 상담",
        "image": "portfolio_automation_examples.jpg",
        "og": "og_inquiry_agent.jpg",
        "video": "live_hero.mp4",
        "url": "/inquiry-agent/",
    },
    {
        "slug": "ai-shortform",
        "title": "AI 숏폼 제작 상담 | Video Roastery",
        "description": "제품 사진과 콘셉트, 문구를 바탕으로 쇼츠·릴스·틱톡용 세로 광고 영상을 구성합니다.",
        "service": "AI 숏폼 제작 상담",
        "image": "portfolio_video_product_reels_ad.jpg",
        "og": "og_ai_shortform.jpg",
        "video": "ai_shortform_hero_web.mp4",
        "url": "/ai-shortform/",
    },
    {
        "slug": "brand-film",
        "title": "기업 홍보영상 제작 상담 | Video Roastery",
        "description": "기업 소개, 브랜드 메시지, ESG, 서비스 설명을 장면 흐름으로 정리해 설득력 있는 영상으로 만듭니다.",
        "service": "기업 홍보영상 제작 상담",
        "image": "portfolio_video_corporate_main.jpg",
        "og": "og_brand_film.jpg",
        "video": "brand_film_hero_web.mp4",
        "url": "/brand-film/",
    },
    {
        "slug": "drone",
        "title": "드론 항공촬영 상담 | Video Roastery",
        "description": "숙소, 시설, 관광지, 농장, 외관까지 목적에 맞는 와이드 컷과 야간 외관 컷을 함께 제안합니다.",
        "service": "드론 항공촬영 상담",
        "image": "portfolio_drone_night_exterior_clean.jpg",
        "og": "og_drone.jpg",
        "video": "drone_hero_web.mp4",
        "url": "/drone/",
    },
    {
        "slug": "wedding",
        "title": "웨딩스냅·영상 상담 | Video Roastery",
        "description": "스냅과 영상 분위기를 먼저 확인하고 얼굴 노출 부담을 낮춘 디테일·분위기 중심의 웨딩 기록을 제안합니다.",
        "service": "웨딩스냅·영상 상담",
        "image": "portfolio_wedding_studio_mood.jpg",
        "og": "og_wedding.jpg",
        "video": "wedding_hero.mp4",
        "url": "/wedding/",
    },
    {
        "slug": "content",
        "title": "카드뉴스·콘텐츠 제작 상담 | Video Roastery",
        "description": "홍보 문구, 화면 순서, 카드뉴스, 릴스 소재를 한 번에 재활용되도록 구성합니다.",
        "service": "카드뉴스·콘텐츠 제작 상담",
        "image": "portfolio_content_reels_page.jpg",
        "og": "og_content.jpg",
        "video": "content_hero.mp4",
        "url": "/content/",
    },
    {
        "slug": "consulting",
        "title": "AI 활용 컨설팅 상담 | Video Roastery",
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
    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
    <link rel="preload" href="{asset_prefix}assets/{hero_video}" as="video" type="video/mp4" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
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


def faq_items(page):
    service = page["service"]
    return [
        {
            "q": "자료가 부족해도 상담할 수 있나요?",
            "a": f"가능합니다. {service}에 필요한 사진, 링크, 문구, 참고 사례가 부족해도 현재 가진 자료를 기준으로 먼저 범위를 정리합니다.",
        },
        {
            "q": "처음 문의할 때 무엇을 보내면 좋나요?",
            "a": "원하는 결과물, 현재 가지고 있는 자료, 희망 일정, 참고 링크나 업종 정보만 보내주시면 됩니다.",
        },
        {
            "q": "제작 범위는 어떻게 정하나요?",
            "a": "상담 후 필요한 결과물과 우선순위를 먼저 나누고, 실제 제작에 필요한 범위와 진행 순서를 정리합니다.",
        },
    ]


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
        "url": DOMAIN,
        "logo": f"{DOMAIN}/assets/symbol.png",
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
    for line in wrap(draw, page["title"].replace(" | Video Roastery", ""), font(56, 8), 720)[:2]:
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
    page_urls = [
        f"  <url><loc>{DOMAIN}{page['url']}</loc><changefreq>weekly</changefreq><priority>{'1.0' if page['slug'] == '' else '0.8'}</priority></url>"
        for page in PAGES
    ]
    page_urls.append(f"  <url><loc>{DOMAIN}/privacy/</loc><changefreq>monthly</changefreq><priority>0.3</priority></url>")
    urls = "\n".join(page_urls)
    (ROOT / "sitemap.xml").write_text(
        f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{urls}\n</urlset>\n',
        encoding="utf-8",
    )


def write_robots():
    (ROOT / "robots.txt").write_text(
        "User-agent: *\nAllow: /\nSitemap: https://videoroastery.com/sitemap.xml\n",
        encoding="utf-8",
    )


def main():
    for page in PAGES:
        write_og(page)
        write_page(page)
    write_sitemap()
    write_robots()
    print(f"generated {len(PAGES)} pages")


if __name__ == "__main__":
    main()
