const routes = [
  {
    slug: "homepage",
    nav: "홈페이지",
    badge: "videoroastery.com/homepage",
    title: "홈페이지 제작부터 문의 연결까지",
    lead: "첫 화면에서 무엇을 파는지 바로 보이고, 포트폴리오와 상담 폼까지 자연스럽게 이어지도록 정리합니다.",
    heroVideo: "live_hero.mp4",
    heroImage: "portfolio_automation_homepage_flow.jpg",
    cta: "홈페이지 제작 상담받기",
    proof: [
      ["첫 화면 설계", "방문자가 첫 화면만 보고도 무엇을 파는지 알게 만듭니다."],
      ["상담 동선", "시안 보기, 제작 범위 확인, 상담 폼이 끊기지 않게 이어집니다."],
      ["포트폴리오 연결", "기존 작업물을 서비스별 신뢰 자료로 재배치합니다."]
    ]
  },
  {
    slug: "inquiry-agent",
    nav: "문의자동화",
    badge: "videoroastery.com/inquiry-agent",
    title: "문의가 오면 답변할 내용부터 정리합니다",
    lead: "홈페이지, 폼, 메일, 카카오 문의를 모아 요청 내용과 확인 항목, 답장 초안을 빠르게 준비합니다.",
    heroVideo: "live_hero.mp4",
    heroImage: "portfolio_automation_examples.jpg",
    cta: "문의 자동화 상담받기",
    proof: [
      ["문의 누락 방지", "고객이 남긴 요청을 한 곳에 모읍니다."],
      ["답장 초안", "반복되는 안내 문구를 빠르게 준비합니다."],
      ["운영 연결", "시트, 알림, 메일을 실제 업무 방식에 맞춥니다."]
    ]
  },
  {
    slug: "ai-shortform",
    nav: "AI숏폼",
    badge: "videoroastery.com/ai-shortform",
    title: "제품 사진을 숏폼 광고 소재로 바꿉니다",
    lead: "제품 사진과 콘셉트만 있어도 릴스, 쇼츠, 틱톡에 맞는 짧은 광고 영상 흐름으로 구성합니다.",
    heroVideo: "ai_shortform_hero_web.mp4",
    heroImage: "portfolio_video_product_reels_ad.jpg",
    cta: "AI 숏폼 상담받기",
    proof: [
      ["촬영 부담 감소", "제품 사진만 있어도 홍보용 숏폼 소재를 만들 수 있습니다."],
      ["숏폼 문법", "첫 3초, 제품 노출, 메시지 흐름을 짧은 영상에 맞게 잡습니다."],
      ["소재 확장", "여러 방향의 영상 소재를 빠르게 바꿔볼 수 있게 설계합니다."]
    ]
  },
  {
    slug: "brand-film",
    nav: "기업영상",
    badge: "videoroastery.com/brand-film",
    title: "회사 소개를 영상으로 선명하게 정리합니다",
    lead: "브랜드 메시지, 서비스 설명, 행사·기관 소개를 장면 흐름으로 잡아 제안서처럼 이해되게 만듭니다.",
    heroVideo: "brand_film_hero_web.mp4",
    heroImage: "portfolio_video_industrial_brand.jpg",
    cta: "기업 영상 상담받기",
    proof: [
      ["메시지 정리", "회사 소개를 단순 나열이 아니라 영상 흐름으로 바꿉니다."],
      ["제안서 활용", "영업, 투자, 채용, 입점 제안에 같이 쓸 수 있게 만듭니다."],
      ["검수 기준", "톤, 문구, 화면 순서를 먼저 잡고 제작합니다."]
    ]
  },
  {
    slug: "drone",
    nav: "드론",
    badge: "videoroastery.com/drone",
    title: "공간의 크기와 동선이 보이는 항공 촬영",
    lead: "숙소, 시설, 관광지, 농장, 야간 외관까지 목적에 맞는 와이드 컷과 설명용 항공 컷을 제안합니다.",
    heroVideo: "drone_hero_web.mp4",
    heroImage: "portfolio_drone_night_exterior_clean.jpg",
    cta: "드론 촬영 상담받기",
    proof: [
      ["목적별 컷", "숙소, 농장, 관광지, 시설마다 필요한 구도가 다릅니다."],
      ["야간 외관", "낮 컷만으로 부족한 공간 분위기를 보완합니다."],
      ["콘텐츠 활용", "촬영 후 홈페이지, 숏폼, 카드뉴스 소재로 재활용합니다."]
    ]
  },
  {
    slug: "wedding",
    nav: "웨딩",
    badge: "videoroastery.com/wedding",
    title: "웨딩 기록은 자연스럽게, 공개 부담은 낮게",
    lead: "스냅과 영상의 분위기를 먼저 확인하고, 얼굴 노출이 부담스러운 컷은 디테일과 분위기 중심으로 제안합니다.",
    heroVideo: "wedding_hero.mp4",
    heroImage: "portfolio_wedding_studio_mood.jpg",
    cta: "웨딩 촬영 상담받기",
    proof: [
      ["초상권 배려", "공개용 포트폴리오는 얼굴 노출 부담을 낮춥니다."],
      ["디테일", "사람보다 분위기, 움직임, 공간을 중심으로 보여줍니다."],
      ["영상 활용", "본식 전후 하이라이트와 SNS용 컷으로 나눌 수 있습니다."]
    ]
  },
  {
    slug: "content",
    nav: "콘텐츠",
    badge: "videoroastery.com/content",
    title: "카드뉴스와 릴스를 상담까지 이어지게 만듭니다",
    lead: "홍보 문구, 화면 순서, 카드뉴스, 릴스 소재를 흩어두지 않고 광고와 상담에 함께 쓰이도록 구성합니다.",
    heroVideo: "content_hero.mp4",
    heroImage: "portfolio_content_reels_page.jpg",
    cta: "콘텐츠 제작 상담받기",
    proof: [
      ["소재 재활용", "한 번 만든 메시지를 홈페이지, SNS, 광고에 함께 씁니다."],
      ["운영 속도", "매번 새로 생각하지 않도록 템플릿을 잡습니다."],
      ["문의 연결", "콘텐츠가 단순 노출에서 상담 요청으로 이어지게 만듭니다."]
    ]
  },
  {
    slug: "consulting",
    nav: "컨설팅",
    badge: "videoroastery.com/consulting",
    title: "AI 도구를 실제 업무에 붙이는 상담",
    lead: "지금 반복되는 업무를 먼저 보고, 시트, 폼, 메일, 노션, AI 도구를 작게 연결해 바로 쓰는 방식으로 시작합니다.",
    heroVideo: "live_hero.mp4",
    heroImage: "ai_service_landing.png",
    cta: "AI 업무 상담받기",
    proof: [
      ["작게 시작", "큰 시스템보다 바로 줄일 수 있는 반복 업무부터 봅니다."],
      ["도구 연결", "노션, 시트, 폼, 메일, AI 도구를 실제 방식에 맞춥니다."],
      ["운영 문서", "혼자서도 이어갈 수 있도록 기준과 템플릿을 남깁니다."]
    ]
  }
];

const routeBySlug = Object.fromEntries(routes.map((route) => [route.slug, route]));
const coreServiceSlugs = [
  "homepage",
  "ai-shortform",
  "drone",
  "content",
  "inquiry-agent"
];
const supportServiceSlugs = [
  "brand-film",
  "consulting",
  "wedding"
];
const serviceOrder = [
  ...coreServiceSlugs,
  ...supportServiceSlugs
];
const displayRoutes = serviceOrder.map((slug) => routeBySlug[slug]).filter(Boolean);
const coreRoutes = coreServiceSlugs.map((slug) => routeBySlug[slug]).filter(Boolean);
const supportRoutes = supportServiceSlugs.map((slug) => routeBySlug[slug]).filter(Boolean);
const routeLabels = {
  homepage: ["WEB", "홈페이지 제작"],
  drone: ["DRONE", "드론 항공촬영"],
  "ai-shortform": ["AI FILM", "AI 영상·숏폼"],
  "brand-film": ["BRAND", "기업 홍보영상"],
  "inquiry-agent": ["SYSTEM", "문의 자동정리"],
  wedding: ["WEDDING", "웨딩 스냅·영상"],
  content: ["CONTENT", "카드뉴스·릴스"],
  consulting: ["AI OPS", "AI 활용 상담"]
};
const routeCardImages = {
  homepage: "card_homepage.jpg",
  drone: "card_drone.jpg",
  "ai-shortform": "card_ai_shortform_photo.jpg",
  "brand-film": "card_brand_film_photo.jpg",
  "inquiry-agent": "card_inquiry_agent_photo.jpg",
  wedding: "card_wedding.jpg",
  content: "portfolio_content_product.jpg",
  consulting: "card_consulting_photo.jpg"
};
const portfolioWallItems = [
  // WEB → homepage 서비스 페이지
  ["portfolio_automation_homepage_flow.jpg", "web", "WEB", "상담형 첫 화면", "homepage", "large"],
  ["portfolio_web_regional_brand.png", "web", "WEB", "지역 브랜드형 화면", "homepage", "wide"],
  ["portfolio_drone_night_exterior_clean.jpg", "drone", "DRONE", "야간 외관 촬영", "drone", "large"],
  ["portfolio_video_product_reels_ad.jpg", "ai", "AI FILM", "제품 숏폼 광고", "ai-shortform", "wide"],
  ["portfolio_content_reels_page.jpg", "content", "CONTENT", "릴스 포트폴리오", "content", "wide"],
  ["portfolio_automation_examples.jpg", "system", "SYSTEM", "문의 자동정리", "inquiry-agent"],
  ["portfolio_automation_portfolio.jpg", "web", "WEB", "포트폴리오 연결 화면", "homepage"],
  ["portfolio_web_beamish.png", "web", "WEB", "영상 제작 랜딩", "homepage"],
  ["portfolio_web_product_drop.png", "web", "WEB", "제품 브랜드 페이지", "homepage"],
  ["portfolio_web_video_dark.png", "web", "WEB", "다크 톤 영상 페이지", "homepage"],
  ["portfolio_web_shortform_a.png", "web", "WEB", "숏폼 제작 페이지", "homepage"],
  ["portfolio_web_ai_ops.png", "web", "WEB", "AI 업무 페이지", "homepage"],
  ["portfolio_covers/web_01.jpg", "web", "WEB", "서비스 소개 화면", "homepage"],
  ["portfolio_covers/web_02.jpg", "web", "WEB", "기업형 메인 화면", "homepage"],
  ["portfolio_covers/web_03.jpg", "web", "WEB", "브랜드 제품 화면", "homepage"],
  ["portfolio_covers/web_04.jpg", "web", "WEB", "영상 서비스 화면", "homepage"],
  ["portfolio_covers/web_05.jpg", "web", "WEB", "신청형 랜딩 화면", "homepage"],
  ["portfolio_covers/web_06.jpg", "web", "WEB", "클래스형 화면", "homepage"],
  ["pawshare_landing.png", "web", "WEB", "커뮤니티 서비스 화면", "homepage"],
  ["regional_brand_landing.png", "web", "WEB", "지역 브랜드 랜딩", "homepage"],
  ["portfolio_web_shortform_b.png", "web", "WEB", "숏폼 랜딩 화면 B", "homepage"],
  ["portfolio_web_shortform_c.png", "web", "WEB", "숏폼 랜딩 화면 C", "homepage"],
  // AI FILM → ai-shortform / brand-film
  ["portfolio_video_shortform_main.jpg", "ai", "AI FILM", "세로 숏폼 화면", "ai-shortform"],
  ["portfolio_video_product_style.jpg", "ai", "AI FILM", "제품 스타일 컷", "ai-shortform"],
  ["portfolio_video_corporate_main.jpg", "ai", "BRAND", "기업 홍보영상", "brand-film"],
  ["portfolio_video_industrial_brand.jpg", "ai", "BRAND", "산업 브랜드필름", "brand-film"],
  ["portfolio_video_esg_brand.jpg", "ai", "BRAND", "ESG 메시지 영상", "brand-film"],
  ["portfolio_covers/video_01.jpg", "ai", "AI FILM", "영상 포트폴리오 컷", "ai-shortform"],
  ["portfolio_covers/video_02.jpg", "ai", "AI FILM", "브랜드필름 컷", "brand-film"],
  ["portfolio_covers/video_03.jpg", "ai", "AI FILM", "메시지 영상 컷", "brand-film"],
  ["portfolio_covers/video_04.jpg", "ai", "AI FILM", "기업 홍보 컷", "brand-film"],
  ["portfolio_covers/video_05.jpg", "ai", "AI FILM", "제품 릴스 컷", "ai-shortform"],
  ["portfolio_covers/video_06.jpg", "ai", "AI FILM", "제품 보드 컷", "ai-shortform"],
  // DRONE → drone
  ["portfolio_drone_coastal_overview_clean.jpg", "drone", "DRONE", "해안 와이드 컷", "drone"],
  ["portfolio_drone_resort_facility.jpg", "drone", "DRONE", "숙소 시설 컷", "drone"],
  ["portfolio_drone_facility_route_clean.jpg", "drone", "DRONE", "시설 동선 컷", "drone"],
  ["portfolio_drone_village_overview.jpg", "drone", "DRONE", "마을 전경 컷", "drone"],
  ["portfolio_drone_topdown_garden.jpg", "drone", "DRONE", "정원 탑뷰 컷", "drone"],
  ["portfolio_drone_night_aerial.jpg", "drone", "DRONE", "야간 도심 항공 컷", "drone"],
  ["portfolio_drone_facility_route.jpg", "drone", "DRONE", "시설 진입 항공 컷", "drone"],
  ["portfolio_drone_museum_exterior.jpg", "drone", "DRONE", "기관 외관 컷", "drone"],
  ["portfolio_drone_grid_supplement.jpg", "drone", "DRONE", "건물 외관 컷", "drone"],
  ["portfolio_drone_farm_field.jpg", "drone", "DRONE", "농장 전경 컷", "drone"],
  ["portfolio_drone_farm_terrace.jpg", "drone", "DRONE", "밭·농지 항공 컷", "drone"],
  ["portfolio_drone_coast_field.jpg", "drone", "DRONE", "해안 들녘 컷", "drone"],
  ["portfolio_drone_coast_cliff.jpg", "drone", "DRONE", "해안 절경 컷", "drone"],
  ["portfolio_covers/drone_01.jpg", "drone", "DRONE", "항공 영상 컷", "drone"],
  ["portfolio_covers/drone_02.jpg", "drone", "DRONE", "시설 항공 컷", "drone"],
  ["portfolio_covers/drone_03.jpg", "drone", "DRONE", "마을 항공 컷", "drone"],
  ["portfolio_covers/drone_04.jpg", "drone", "DRONE", "농장 항공 컷", "drone"],
  ["portfolio_covers/drone_05.jpg", "drone", "DRONE", "와이드 항공 컷", "drone"],
  ["portfolio_covers/drone_06.jpg", "drone", "DRONE", "영상 썸네일 컷", "drone"],
  // CONTENT → content
  ["portfolio_content_product.jpg", "content", "CONTENT", "제품 카드뉴스 소재", "content"],
  ["portfolio_content_ai_video.jpg", "content", "CONTENT", "AI 영상 카드", "content"],
  ["portfolio_content_context.jpg", "content", "CONTENT", "레퍼런스 정리 화면", "content"],
  ["portfolio_content_request_form.jpg", "content", "CONTENT", "요청서 화면", "content"],
  ["portfolio_content_review.jpg", "content", "CONTENT", "검수 흐름 화면", "content"],
  ["portfolio_covers/content_01.jpg", "content", "CONTENT", "제품 상세 컷", "content"],
  ["portfolio_covers/content_02.jpg", "content", "CONTENT", "제품 과정 컷", "content"],
  ["portfolio_covers/content_03.jpg", "content", "CONTENT", "카드뉴스 컷", "content"],
  ["portfolio_covers/content_04.jpg", "content", "CONTENT", "숏폼 소재 컷", "content"],
  ["portfolio_covers/content_05.jpg", "content", "CONTENT", "콘텐츠 보드 컷", "content"],
  ["portfolio_covers/content_06.jpg", "content", "CONTENT", "운영 화면 컷", "content"],
  // SYSTEM → inquiry-agent (문의 자동화)
  ["portfolio_automation_main.jpg", "system", "SYSTEM", "자동화 대표 화면", "inquiry-agent"],
  ["portfolio_automation_task_flow.jpg", "system", "SYSTEM", "문의 흐름 화면", "inquiry-agent"],
  ["portfolio_automation_scope.jpg", "system", "SYSTEM", "진행 범위 화면", "inquiry-agent"],
  ["portfolio_covers/automation_01.jpg", "system", "SYSTEM", "자동화 화면 컷", "inquiry-agent"],
  ["portfolio_covers/automation_02.jpg", "system", "SYSTEM", "문의 정리 컷", "inquiry-agent"],
  ["portfolio_covers/automation_03.jpg", "system", "SYSTEM", "답장 초안 컷", "inquiry-agent"],
  ["portfolio_covers/automation_04.jpg", "system", "SYSTEM", "연결 흐름 컷", "inquiry-agent"],
  // SYSTEM → consulting (AI 활용 상담, 전용 배정)
  ["route_plan_actual.png", "system", "SYSTEM", "실제 화면 설계", "consulting"],
  ["route_plan_mobile.png", "system", "SYSTEM", "모바일 동선 설계", "consulting"],
  ["route_plan_mockups.png", "system", "SYSTEM", "시안 비교 화면", "consulting"],
  ["route_plan_system.png", "system", "SYSTEM", "문의 시스템 설계", "consulting"],
  ["portfolio_covers/automation_05.jpg", "system", "SYSTEM", "포트폴리오 흐름 컷", "consulting"],
  ["portfolio_covers/automation_06.jpg", "system", "SYSTEM", "체크리스트 컷", "consulting"],
  // WEDDING → wedding (covers + 드론 웨딩 신규 투입)
  ["portfolio_wedding_ring_detail.jpg", "wedding", "WEDDING", "반지 디테일", "wedding"],
  ["portfolio_wedding_bouquet_lens.jpg", "wedding", "WEDDING", "부케 디테일", "wedding"],
  ["portfolio_wedding_flower_detail.jpg", "wedding", "WEDDING", "꽃 디테일", "wedding"],
  ["portfolio_wedding_studio_mood.jpg", "wedding", "WEDDING", "실내 무드 컷", "wedding"],
  ["portfolio_wedding_beach_privacy.jpg", "wedding", "WEDDING", "해변 무드 컷", "wedding"],
  ["portfolio_wedding_detail_sixcut.jpg", "wedding", "WEDDING", "디테일 모음", "wedding"],
  ["portfolio_drone_wedding_wide.jpg", "wedding", "WEDDING", "웨딩 항공 와이드", "wedding"],
  ["portfolio_covers/wedding_01.jpg", "wedding", "WEDDING", "웨딩 스냅 컷 01", "wedding"],
  ["portfolio_covers/wedding_02.jpg", "wedding", "WEDDING", "웨딩 스냅 컷 02", "wedding"],
  ["portfolio_covers/wedding_03.jpg", "wedding", "WEDDING", "웨딩 스냅 컷 03", "wedding"],
  ["portfolio_covers/wedding_04.jpg", "wedding", "WEDDING", "웨딩 스냅 컷 04", "wedding"],
  ["portfolio_covers/wedding_05.jpg", "wedding", "WEDDING", "웨딩 스냅 컷 05", "wedding"],
  ["portfolio_covers/wedding_06.jpg", "wedding", "WEDDING", "웨딩 스냅 컷 06", "wedding"]
].map(([image, category, label, title, slug, size = ""]) => ({
  image,
  category,
  label,
  title,
  slug,
  size
}));
const portfolioFilters = [
  ["all", "전체"],
  ["web", "홈페이지"],
  ["ai", "AI영상"],
  ["drone", "드론"],
  ["content", "콘텐츠"],
  ["system", "자동화"],
  ["wedding", "웨딩"]
];
const routeDetails = {
  homepage: {
    kicker: "WEB LANDING",
    title: "첫 화면에서 업종, 작업물, 문의 동선이 바로 보이게",
    lead: "광고나 검색으로 들어온 사람이 길게 설명을 읽기 전에 무엇을 제작하는지, 어떤 사례가 있는지, 어디로 문의하면 되는지 한 화면 흐름으로 판단하게 만듭니다.",
    windows: [
      ["01", "첫 화면", "브랜드명과 제작 범위를 한 문장으로 정리"],
      ["02", "시안 선택", "업종별 화면 예시와 포트폴리오를 먼저 노출"],
      ["03", "문의 연결", "상담폼, 메일, 필요한 자료 안내를 같은 흐름에 배치"]
    ],
    checkpoints: ["모바일 첫 화면", "대표 이미지", "포트폴리오 순서", "상담폼 연결"],
    related: ["inquiry-agent", "content", "ai-shortform"]
  },
  "inquiry-agent": {
    kicker: "SYSTEM",
    title: "문의가 들어온 뒤 놓치는 정보를 줄이는 구조",
    lead: "고객 문의를 폼, 메일, 시트로 모으고 제작자가 바로 확인해야 할 항목과 답장 초안을 빠르게 정리하는 업무 흐름을 잡습니다.",
    windows: [
      ["01", "문의 접수", "고객 요청, 예산, 일정, 참고 링크를 한 번에 수집"],
      ["02", "자동 정리", "확인해야 할 항목과 누락된 자료를 먼저 분류"],
      ["03", "답장 초안", "반복 안내 문구와 다음 단계를 빠르게 준비"]
    ],
    checkpoints: ["문의폼 문항", "메일 제목", "시트 저장", "답장 템플릿"],
    related: ["homepage", "content", "consulting"]
  },
  "ai-shortform": {
    kicker: "AI SHORTFORM",
    title: "제품 사진을 광고용 짧은 영상 흐름으로 바꾸는 페이지",
    lead: "촬영이 없어도 제품 이미지와 콘셉트를 바탕으로 첫 3초, 제품 노출, 메시지 흐름이 보이는 숏폼 방향을 제안합니다.",
    windows: [
      ["01", "제품 이미지", "실제 사진과 패키지 이미지를 먼저 확인"],
      ["02", "광고 톤", "고급형, 정보형, 빠른 테스트형 중 방향 선택"],
      ["03", "활용 채널", "릴스, 쇼츠, 틱톡, 당근 광고용 소재로 분리"]
    ],
    checkpoints: ["제품 사진", "핵심 문구", "사용 채널", "참고 영상"],
    related: ["brand-film", "content", "homepage"]
  },
  "brand-film": {
    kicker: "BRAND FILM",
    title: "회사 소개를 장면과 메시지로 이해시키는 구성",
    lead: "기업 소개, 기관 홍보, 서비스 설명을 단순 문장 나열이 아니라 보는 사람이 이해하는 순서의 장면 흐름으로 정리합니다.",
    windows: [
      ["01", "핵심 메시지", "한 문장으로 기억될 소개 문구를 먼저 정리"],
      ["02", "장면 구성", "공간, 사람, 제품, 서비스 장면의 순서를 설계"],
      ["03", "활용처", "제안서, 채용, 입점, SNS용 버전으로 나눔"]
    ],
    checkpoints: ["회사 소개 자료", "참고 영상", "사용 목적", "노출 채널"],
    related: ["ai-shortform", "content", "homepage"]
  },
  drone: {
    kicker: "DRONE",
    title: "공간의 크기와 분위기가 바로 보이는 항공 컷 중심",
    lead: "숙소, 시설, 관광지, 농장처럼 현장감이 중요한 공간을 낮 컷, 야간 외관, 동선 설명 컷으로 나눠 보여줍니다.",
    windows: [
      ["01", "대표 컷", "공간 규모와 첫 인상을 보여주는 와이드 컷"],
      ["02", "설명 컷", "진입 동선, 주변 환경, 시설 배치를 보여주는 컷"],
      ["03", "활용 컷", "홈페이지, 광고, 카드뉴스, 숏폼용으로 재구성"]
    ],
    checkpoints: ["촬영 장소", "허가 필요 여부", "낮·야간 여부", "활용 목적"],
    related: ["homepage", "brand-film", "content"]
  },
  wedding: {
    kicker: "WEDDING",
    title: "인물보다 분위기와 디테일을 먼저 보여주는 웨딩 기록",
    lead: "공개 포트폴리오에서는 얼굴 노출 부담을 줄이고 반지, 부케, 드레스 라인, 공간 무드처럼 상담에 도움이 되는 컷을 중심으로 보여줍니다.",
    windows: [
      ["01", "디테일", "반지, 부케, 손, 드레스처럼 부담 없는 컷"],
      ["02", "무드", "공간 조명과 움직임이 보이는 장면"],
      ["03", "활용", "스냅, 하이라이트 영상, SNS용 컷으로 분리"]
    ],
    checkpoints: ["촬영 일정", "장소", "얼굴 공개 범위", "원하는 톤"],
    related: ["drone", "content", "homepage"]
  },
  content: {
    kicker: "CONTENT",
    title: "카드뉴스와 릴스를 홍보 흐름 안에서 정리",
    lead: "콘텐츠가 따로 놀지 않도록 카드뉴스, 릴스, 제품 이미지, 안내 문구를 광고와 상담 페이지에서 함께 쓰이는 형태로 구성합니다.",
    windows: [
      ["01", "메시지", "한 콘텐츠에서 전달할 핵심 문장 정리"],
      ["02", "이미지", "제품, 공간, 화면 캡처 등 실제 자료 선별"],
      ["03", "운영", "인스타, 유튜브, 홈페이지에 재활용할 구조"]
    ],
    checkpoints: ["브랜드 톤", "사진 자료", "업로드 채널", "게시 주기"],
    related: ["ai-shortform", "brand-film", "homepage"]
  },
  consulting: {
    kicker: "AI OPS",
    title: "도구 설명보다 반복 업무를 줄이는 실행 흐름",
    lead: "AI 도구 자체를 팔기보다 지금 반복되는 업무를 보고 폼, 시트, 메일, 문서, 알림을 작게 연결해 바로 쓰는 구조를 만듭니다.",
    windows: [
      ["01", "업무 확인", "매일 반복되는 입력, 정리, 답장 업무를 찾음"],
      ["02", "작게 연결", "시트, 폼, 메일, AI 도구를 필요한 만큼만 연결"],
      ["03", "운영 기준", "혼자서도 유지할 수 있는 문서와 템플릿 정리"]
    ],
    checkpoints: ["반복 업무", "쓰는 도구", "저장 위치", "알림 방식"],
    related: ["inquiry-agent", "homepage", "content"]
  }
};
const basePath = detectBasePath();
const mainNavItems = [
  ["포트폴리오", "portfolio-hub"],
  ["서비스", "services"],
  ["견적문의", "contact"]
];

function detectBasePath() {
  const projectPath = "/homepage-agent-landing";
  return window.location.pathname === projectPath || window.location.pathname.startsWith(`${projectPath}/`) ? projectPath : "";
}

function routeHref(slug = "") {
  return `${basePath}/${slug ? `${slug}/` : ""}` || "/";
}

function sectionHref(id) {
  return `${routeHref()}#${id}`;
}

function currentSlug() {
  const pathname = basePath && window.location.pathname.startsWith(basePath)
    ? window.location.pathname.slice(basePath.length)
    : window.location.pathname;
  const path = pathname.replace(/^\/|\/$/g, "");
  return path || "main";
}

function asset(name) {
  return `${basePath}/assets/${name}`;
}

function nav(activeSlug) {
  const items = mainNavItems
    .map(([label, id]) => `<a href="${sectionHref(id)}">${label}</a>`)
    .join("");
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <header class="topbar">
      <a class="brand" href="${routeHref()}">
        <img src="${asset("symbol.png")}" alt="Video Roastery" />
        <span>Video Roastery</span>
      </a>
      <nav class="nav" aria-label="서비스 메뉴">${items}</nav>
    </header>
  `;
}

function hero(route) {
  const primaryHref = route.primaryHref || "#contact";
  const secondaryHref = route.secondaryHref || "#portfolio";
  const secondaryCta = route.secondaryCta || "사례 먼저 보기";
  const trustItems = route.trustItems || ["실제 작업물 중심", "서비스별 별도 상담", "작업 가능 범위 먼저 확인"];
  const isEditorial = route.layout === "editorial";
  return `
    <section class="hero${isEditorial ? " editorial" : ""}">
      <video autoplay muted loop playsinline preload="metadata" poster="${asset(route.heroImage)}">
        <source src="${asset(route.heroVideo)}" type="video/mp4" />
      </video>
      ${isEditorial ? `
        <div class="hero-showcase" aria-label="대표 작업 사례">
          ${(route.showcase || []).map(([image, label]) => `
            <figure>
              <img src="${asset(image)}" alt="${label} 작업 사례" />
              <figcaption>${label}</figcaption>
            </figure>
          `).join("")}
        </div>
      ` : ""}
      <div class="hero-inner">
        ${isEditorial ? `
          <p class="hero-kicker">${route.kicker}</p>
          <p class="hero-intro">${route.intro}</p>
          ${route.prefix ? `<p class="hero-prefix">${route.prefix}</p>` : ""}
        ` : `<span class="route-pill">${route.badge}</span>`}
        <h1>${route.title}</h1>
        <p class="hero-lead">${route.lead}</p>
        ${isEditorial ? `
          <div class="hero-actions editorial-actions">
            <a class="btn primary" href="${primaryHref}">${route.cta}</a>
            ${route.heroRich ? `<a class="btn secondary" href="${secondaryHref}">${secondaryCta}</a>` : ""}
          </div>
          ${route.heroRich ? `<div class="hero-trust" aria-label="신뢰 확인 정보">${trustItems.map((item) => `<span>${item}</span>`).join("")}</div>` : ""}
        ` : `
          <div class="hero-actions">
            <a class="btn primary" href="${primaryHref}">${route.cta}</a>
            <a class="btn secondary" href="${secondaryHref}">${secondaryCta}</a>
          </div>
          <div class="hero-trust" aria-label="신뢰 확인 정보">
            ${trustItems.map((item) => `<span>${item}</span>`).join("")}
          </div>
        `}
      </div>
    </section>
  `;
}

function mainPage() {
  const main = {
    layout: "editorial",
    heroRich: true,
    badge: "Video Roastery",
    kicker: "V I D E O   R O A S T E R Y   S T U D I O",
    intro: "작업물을 먼저 보고,<br>필요한 제작만 고릅니다.",
    prefix: "저희는,",
    title: "온라인에 필요한 제작을<br>기획하고, 실행하고, 관리합니다.",
    lead: "홈페이지·영상·드론·SNS 콘텐츠를 실제 작업물 기준으로 상담합니다.",
    heroVideo: "live_hero.mp4",
    heroImage: "logo.png",
    cta: "견적 문의",
    primaryHref: "#contact",
    secondaryCta: "작업 사례 보기",
    secondaryHref: "#services",
    trustItems: ["제주 현장 촬영 가능", "전국 온라인 제작 상담", "작업 범위 확인 후 진행"],
    showcase: [
      ["portfolio_drone_night_exterior_clean.jpg", "야간 외관"],
      ["portfolio_web_regional_brand.png", "브랜드 화면"],
      ["portfolio_drone_resort_facility.jpg", "공간 촬영"],
      ["portfolio_video_product_reels_ad.jpg", "제품 영상"],
      ["portfolio_content_product.jpg", "제품 콘텐츠"],
      ["portfolio_automation_homepage_flow.jpg", "상담형 홈페이지"]
    ]
  };
  const mainInquiryHref = mailtoHref({ slug: "main", nav: "전체 제작 상담" });
  // 홈은 '맛보기' — 엄선 12장 단일 쇼케이스. 두 개로 나뉘어 중복되던 포트폴리오 월을 하나로 통합.
  // 전체 카탈로그는 각 서비스 상세페이지에 그대로 있음(손실 없음).
  const homeWallItems = portfolioWallItems.filter((item) => item.category !== "wedding").slice(0, 12);
  return `
    ${nav("main")}
    ${hero(main)}
    <main id="main">
      <section class="section" id="portfolio-hub">
        <div class="section-head">
          <div>
            <p class="section-kicker">Selected Work</p>
            <h2>작업 이미지부터 보여드립니다</h2>
          </div>
        </div>
        ${portfolioWall(homeWallItems, "featured-wall")}
      </section>
      <section class="section" id="services">
        <div class="section-head">
          <div>
            <p class="section-kicker">Services</p>
            <h2>필요한 제작만 선택</h2>
          </div>
        </div>
        <div class="route-grid core-grid">
          ${coreRoutes.map(routeCard).join("")}
        </div>
        <div class="support-grid" aria-label="추가 상담 가능 분야">
          ${supportRoutes.map((route) => `
            <a class="support-card" href="${routeHref(route.slug)}">
              <img src="${asset(routeCardImages[route.slug] || route.heroImage)}" alt="${route.nav} 추가 사례" />
              <span>${routeLabels[route.slug]?.[1] || route.nav}</span>
            </a>
          `).join("")}
        </div>
      </section>
      <section class="section tight" id="contact">
        <div class="cta-band">
          <h2>자료만 보내주세요. 가능 범위부터 보겠습니다.</h2>
          <p class="cta-note">아래 버튼으로 메일 주시면 제작 범위와 다음 단계를 회신합니다.</p>
          <div class="contact-actions">
            <a class="btn primary" href="${mainInquiryHref}">메일로 문의하기</a>
            <a class="btn secondary" href="#services">서비스별 사례 보기</a>
          </div>
          <p class="privacy-note">메일 내용은 상담 확인 목적에만 사용합니다. <a href="${routeHref("privacy")}">개인정보처리방침</a></p>
        </div>
      </section>
    </main>
    ${sticky({
      nav: "견적 문의",
      badge: "Video Roastery",
      stickyTarget: mainInquiryHref,
      stickyLabel: "메일 문의",
      stickyBody: "버튼 누르면 메일이 열립니다"
    })}
    ${footer()}
  `;
}

function routeCard(route) {
  const [eyebrow, title] = routeLabels[route.slug] || [route.slug.toUpperCase(), route.nav];
  const cardImage = routeCardImages[route.slug] || route.heroImage;
  return `
    <a class="service-card" href="${routeHref(route.slug)}">
      <img src="${asset(cardImage)}" alt="${route.nav} 대표 이미지" />
      <div class="service-card-body">
        <span class="path">${eyebrow}</span>
        <h3>${title}</h3>
        <strong>사례 보기</strong>
      </div>
    </a>
  `;
}

function portfolioItemsForRoute(route) {
  // 각 작업 이미지는 자신에게 배정된 한 페이지(slug)에서만 노출 → 페이지 간 중복 0
  return portfolioWallItems.filter((item) => item.slug === route.slug);
}

function portfolioWall(items, className = "") {
  const wallClass = ["portfolio-wall", className].filter(Boolean).join(" ");
  return `
    <div class="${wallClass}">
      ${items.map(portfolioCard).join("")}
    </div>
  `;
}

// 포트폴리오 칸 → 실제 영상/라이브사이트 연결.
// portfolioMedia[image] 에 항목별 실제 링크(영상 파일명 또는 https URL)를 넣으면 그게 우선.
// 없으면 slug 기준 대표 영상으로 폴백 → 모든 칸이 '누르면 볼 수 있게'.
const slugVideo = {
  homepage: "live_hero.mp4",
  "inquiry-agent": "live_hero.mp4",
  "ai-shortform": "ai_shortform_hero_web.mp4",
  "brand-film": "brand_film_hero_web.mp4",
  drone: "drone_hero_web.mp4",
  wedding: "wedding_hero.mp4",
  content: "content_hero.mp4",
  consulting: "live_hero.mp4"
};
// 항목별 실제 연결(가장 정확). key=이미지 경로, value=영상 파일명(assets 내) / 영상 URL(.mp4 등) / 라이브사이트 URL.
// 24시간 동안 한 칸씩 정성껏 채워나가는 중 — 매칭 또는 30초 재편집 영상.
const portfolioMedia = {
  // 01. 제품 숏폼 광고 — 건강기능식품 micro-3D 4컷 재편집(16s)
  "portfolio_video_product_reels_ad.jpg": "portfolio_videos/product_reel_01.mp4",
  // 02. 브랜드필름 컷 — 실제 클라이언트 브랜드필름 'THE QUIET RETURN' 5컷 시네마틱 재편집(26s, 16:9)
  //     (corporate_main은 overview 정적이미지라 클릭 불가 → 클릭 타일인 video_02에 연결)
  "portfolio_covers/video_02.jpg": "portfolio_videos/brandfilm_reel_02.mp4",
  // 03. 마을 전경 컷 — 실제 제주 항공 드론(해안마을+리조트+농장) 3컷 재편집(24s, 16:9)
  "portfolio_drone_village_overview.jpg": "portfolio_videos/drone_jeju_reel_03.mp4",
  // 04. 해변 무드 컷 — 실제 제주 웨딩(드론+해변 뒷모습+스튜디오 와이드+꽃/귀걸이 디테일) 재편집(23.5s, 16:9)
  //     초상권 배려: 얼굴 드러나는 컷 제외, privacy-safe·뒷모습·와이드만 사용
  "portfolio_wedding_beach_privacy.jpg": "portfolio_videos/wedding_jeju_reel_04.mp4",
  // 05. 웨딩 항공 와이드 — 실제 제주 웨딩 항공 하이라이트(김녕해수욕장) 웹최적화(24s, 16:9)
  "portfolio_drone_wedding_wide.jpg": "portfolio_videos/wedding_aerial_reel_05.mp4",
  // 06. 릴스 포트폴리오 — 실제 VR 콘텐츠 작업물(자매작업실 제주 수공예 모빌 릴, 오디오 포함) 웹최적화(21.6s, 세로)
  "portfolio_content_reels_page.jpg": "portfolio_videos/content_reel_06.mp4",
  // 07. 기업 홍보 컷 — 실제 VR 기업 홍보영상(주식 커뮤니티 핀테크 홍보, 오디오 포함) 웹최적화(31s, 세로)
  "portfolio_covers/video_04.jpg": "portfolio_videos/corporate_reel_07.mp4",
  // 08. 기관 외관 컷 — 실제 제주 항공(기관 건물 establishing + 시설 overview) 2컷 재편집(16s, 16:9)
  "portfolio_drone_museum_exterior.jpg": "portfolio_videos/drone_facility_reel_08.mp4",
  // 09. 디테일 모음 — 실제 제주 웨딩 6컷(귀걸이·드레스·해변 뒷모습, 얼굴 블러) + 꽃 디테일 재편집(15s, 16:9)
  "portfolio_wedding_detail_sixcut.jpg": "portfolio_videos/wedding_detail_reel_09.mp4",
  // 10. 메시지 영상 컷 — 실제 VR ESG 시네마틱 브랜드필름(바다·지속가능성·해상풍력, 오디오) 트림(28s, 세로)
  "portfolio_covers/video_03.jpg": "portfolio_videos/esg_brandfilm_reel_10.mp4",
  // 11. 제품 릴스 컷 — 실제 VR AI 제품영상(zaksim 콤부차, 나레이션 포함) 웹최적화(30s, 세로)
  "portfolio_covers/video_05.jpg": "portfolio_videos/kombucha_reel_11.mp4",
  // 12. 해안 절경 컷 — 실제 제주 해안 항공(김녕해수욕장 드론 하이라이트) 웹최적화(28s, 16:9)
  "portfolio_drone_coast_cliff.jpg": "portfolio_videos/coast_reel_12.mp4",
  // 13. 제품 보드 컷 — 실제 VR 제품 광고(KINETIA 보충제 보드샷) 웹최적화(30s, 16:9)
  "portfolio_covers/video_06.jpg": "portfolio_videos/product_board_reel_13.mp4",
  // 14. 영상 포트폴리오 컷 — 실제 VR 산업·도시 시네마틱 브랜드필름(새만금, 오디오 포함) 트림(28s, 세로)
  "portfolio_covers/video_01.jpg": "portfolio_videos/industrial_reel_14.mp4",
  // 15. 정원 탑뷰 컷 — 실제 제주 해안 정원 항공(wind1947, 회전 transpose 보정) 웹최적화(28s, 16:9)
  "portfolio_drone_topdown_garden.jpg": "portfolio_videos/garden_reel_15.mp4",
  // 16. 시설 동선 컷 — 실제 제주 항공(농장·시설 도로 + 리조트 시설) 다른 구간 2컷(16s, 16:9)
  "portfolio_drone_facility_route_clean.jpg": "portfolio_videos/facility_route_reel_16.mp4",
  // 17. 농장 전경 컷 — 외장하드 '농약' 프로젝트 실제 제주 농장 항공(서귀포 비닐하우스 단지, 4K) 웹최적화(23s, 16:9)
  "portfolio_drone_farm_field.jpg": "portfolio_videos/farm_field_reel_17.mp4",
  // 18. 해안 들녘 컷 — 외장하드 '농약' 제주 해안·들녘·풍력 4K 항공(해안+농지+마을이 보여 '해안 들녘'에 적합) 웹최적화(13s, 16:9)
  "portfolio_drone_coast_field.jpg": "portfolio_videos/coast_field_reel_18.mp4"
};

// 해당 항목이 눌렀을 때 열어야 할 실제 미디어를 돌려준다(영상 src 또는 외부 URL). 없으면 null.
function portfolioLink(item) {
  const explicit = portfolioMedia[item.image];
  if (explicit) {
    if (/^https?:\/\//.test(explicit)) {
      // 영상 파일 URL이면 라이트박스 재생, 그 외 URL은 라이브사이트로 새 탭
      return /\.(mp4|webm|mov|m3u8)(\?|$)/i.test(explicit)
        ? { type: "video", src: explicit }
        : { type: "site", href: explicit };
    }
    return { type: "video", src: asset(explicit) };
  }
  // 폴백 제거: 명시적으로 연결된 칸만 영상 재생(▶배지). 미연결 칸은 같은 영상 중복 없이 상세페이지로.
  return null;
}

function portfolioCard(item) {
  const href = item.slug ? routeHref(item.slug) : "#portfolio-hub";
  const sizeClass = item.size ? ` is-${item.size}` : "";
  const link = portfolioLink(item);
  let linkAttr = "";
  let badge = "";
  if (link && link.type === "video") {
    linkAttr = ` data-video="${link.src}"`;
    badge = `<span class="portfolio-play" aria-hidden="true"></span>`;
  } else if (link && link.type === "site") {
    linkAttr = ` data-site="${link.href}"`;
    badge = `<span class="portfolio-open" aria-hidden="true">사이트 열기 ↗</span>`;
  }
  return `
    <a class="portfolio-item${sizeClass}" href="${href}" data-category="${item.category}"${linkAttr}>
      <img src="${asset(item.image)}" alt="${item.title}" loading="lazy" />
      ${badge}
      <span class="portfolio-meta">
        <small>${item.label}</small>
        <strong>${item.title}</strong>
      </span>
    </a>
  `;
}

function detailNavigation(route) {
  return `
    <div class="detail-jump" aria-label="${route.nav} 페이지 구성">
      <div class="detail-jump-inner">
        <strong>${route.nav} 세부 구성</strong>
        <nav>
          <a href="#overview">구성</a>
          <a href="#portfolio">작업 이미지</a>
          <a href="#scope">진행 기준</a>
          <a href="#contact">문의</a>
        </nav>
      </div>
    </div>
  `;
}

function detailOverview(route, detail) {
  const overviewImages = portfolioItemsForRoute(route).slice(0, 3);
  return `
    <section class="detail-overview" id="overview">
      <div class="detail-shell">
        <div class="detail-copy">
          <p class="section-kicker">${detail.kicker}</p>
          <h2>${detail.title}</h2>
          <p>${detail.lead}</p>
        </div>
        <div class="detail-window-grid" aria-label="${route.nav} 세부 창 구성">
          ${detail.windows.map(([num, title, body], index) => {
            const visual = overviewImages[index];
            return `
            <article class="detail-window">
              ${visual ? `<img class="detail-window-visual" src="${asset(visual.image)}" alt="${visual.title}" loading="lazy" />` : ""}
              <span>${num}</span>
              <h3>${title}</h3>
              <p>${body}</p>
            </article>
          `;
          }).join("")}
        </div>
      </div>
    </section>
  `;
}

function detailScope(route, detail) {
  return `
    <section class="section detail-scope" id="scope">
      <div class="scope-layout">
        <div>
          <p class="section-kicker">Project Check</p>
          <h2>진행 전에 확인할 것</h2>
        </div>
        <div class="scope-checks" aria-label="상담 전 확인 항목">
          ${detail.checkpoints.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
      <div class="proof-grid">
        ${route.proof.map(([title, body], index) => `
          <article class="proof-item">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <h3>${title}</h3>
            <p>${body}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function relatedServices(route, detail) {
  const related = (detail.related || [])
    .map((slug) => routeBySlug[slug])
    .filter((item) => item && item.slug !== route.slug);
  if (!related.length) return "";
  return `
    <section class="section tight" id="related">
      <div class="section-head">
        <div>
          <p class="section-kicker">Related</p>
          <h2>함께 볼 수 있는 제작</h2>
        </div>
      </div>
      <div class="related-strip">
        ${related.map((item) => `
          <a class="related-card" href="${routeHref(item.slug)}">
            <img src="${asset(routeCardImages[item.slug] || item.heroImage)}" alt="${item.nav} 관련 작업" />
            <span>${routeLabels[item.slug]?.[1] || item.nav}</span>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function detailPage(route) {
  const inquiryHref = mailtoHref(route);
  // overview가 앞 3장을 쓰므로 포폴월은 그 다음 장부터 → 같은 페이지 내 중복 방지
  const routePortfolioItems = portfolioItemsForRoute(route).slice(3, route.slug === "homepage" ? 27 : 21);
  const detail = routeDetails[route.slug] || {
    kicker: route.nav.toUpperCase(),
    title: route.title,
    lead: route.lead,
    windows: route.proof.map(([title, body], index) => [String(index + 1).padStart(2, "0"), title, body]),
    checkpoints: route.proof.map(([title]) => title),
    related: displayRoutes.filter((item) => item.slug !== route.slug).slice(0, 3).map((item) => item.slug)
  };
  return `
    ${nav(route.slug)}
    ${hero(route)}
    ${detailNavigation(route)}
    <main id="main">
      ${detailOverview(route, detail)}
      <section class="section" id="portfolio">
        <div class="section-head">
          <div>
            <p class="section-kicker">Portfolio</p>
            <h2>${route.nav} 작업 이미지</h2>
          </div>
        </div>
        ${portfolioWall(routePortfolioItems, "detail-wall")}
      </section>
      ${detailScope(route, detail)}
      ${relatedServices(route, detail)}
      <section class="section tight" id="contact">
        <div class="cta-band">
          <h2>${route.nav} 문의하기</h2>
          <p class="cta-note">원하는 결과물과 보유 자료만 적어 메일로 보내주세요.</p>
          <div class="contact-actions">
            <a class="btn primary" href="${inquiryHref}">메일로 문의하기</a>
            <a class="btn secondary" href="#portfolio">작업 이미지 다시 보기</a>
          </div>
          <p class="privacy-note">메일 내용은 상담 확인 목적에만 사용합니다. <a href="${routeHref("privacy")}">개인정보처리방침</a></p>
        </div>
      </section>
    </main>
    ${sticky(route)}
    ${footer()}
  `;
}

function sticky(route) {
  const target = route.stickyTarget || mailtoHref(route);
  const label = route.stickyLabel || "메일 문의";
  const body = route.stickyBody || route.badge;
  return `
    <aside class="sticky">
      <div>
        <b>${route.nav} 상담</b>
        <span>${body}</span>
      </div>
      <a class="btn primary" href="${target}">${label}</a>
    </aside>
  `;
}

function mailtoHref(route) {
  const subject = `[Video Roastery] ${route.nav} 상담 요청`;
  const currentUrl = currentPageUrl(route);
  const tracking = trackingSummary();
  const body = [
    `안녕하세요. ${route.nav} 상담 문의드립니다.`,
    "",
    "1. 원하는 결과물:",
    "2. 현재 가지고 있는 자료:",
    "3. 희망 일정:",
    "4. 참고 링크 또는 업종:",
    "",
    `확인한 페이지: ${currentUrl}`,
    tracking ? `유입 경로: ${tracking}` : ""
  ].join("\n");
  return `mailto:kiwee1223@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function trackingEntries() {
  const source = new URLSearchParams(window.location.search);
  return ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
    .map((key) => [key, source.get(key)])
    .filter(([, value]) => value);
}

function trackingSummary() {
  return trackingEntries().map(([key, value]) => `${key}=${value}`).join(", ");
}

function currentPageUrl(route) {
  if (window.location.origin.startsWith("http")) {
    return window.location.href;
  }
  return `https://videoroastery.com/${route.slug}/`;
}

function footer() {
  return `
    <footer>
      <strong>Video Roastery</strong>
      <span>홈페이지·영상·촬영·자동화 제작 상담</span>
      <span>제주 촬영 중심 · 온라인 제작 전국 상담 · 상담폼 우선 접수</span>
      <a href="${routeHref("privacy")}">개인정보처리방침</a>
    </footer>
  `;
}

function render() {
  const slug = currentSlug();
  const route = routeBySlug[slug];
  const pageTitle = route ? `${route.nav} | Video Roastery` : "홈페이지와 영상을 기획하고 제작하고 연결합니다 | Video Roastery";
  const pageDesc = route ? route.lead : "홈페이지, 영상, 촬영, 콘텐츠, 문의자동화까지 실제 작업물을 기준으로 브랜드에 필요한 제작을 연결하는 상담 페이지입니다.";
  document.title = pageTitle;
  for (const [selector, value] of [
    ['meta[name="description"]', pageDesc],
    ['meta[property="og:title"]', pageTitle],
    ['meta[property="og:description"]', pageDesc]
  ]) {
    const el = document.querySelector(selector);
    if (el) el.setAttribute("content", value);
  }
  document.querySelector("#app").innerHTML = route ? detailPage(route) : mainPage();
  setupStickyCta();
  setupPortfolioFilters();
  setupPortfolioLightbox();
  setupScrollReveal();
}

// 포트폴리오 칸 클릭 → 실제 영상 라이트박스 재생 / 라이브 사이트 새 탭 열기
function setupPortfolioLightbox() {
  const tiles = document.querySelectorAll(".portfolio-item[data-video], .portfolio-item[data-site]");
  if (!tiles.length) return;
  let box = document.querySelector("#vr-lightbox");
  if (!box) {
    box = document.createElement("div");
    box.id = "vr-lightbox";
    box.className = "vr-lightbox";
    box.innerHTML = `
      <button class="vr-lightbox-close" type="button" aria-label="닫기">✕</button>
      <figure class="vr-lightbox-stage">
        <video controls playsinline preload="none"></video>
        <figcaption class="vr-lightbox-caption"><span class="vr-cap-label"></span><strong class="vr-cap-title"></strong></figcaption>
      </figure>`;
    document.body.appendChild(box);
    const close = () => {
      box.classList.remove("is-open");
      const v = box.querySelector("video");
      v.pause();
      v.removeAttribute("src");
      v.removeAttribute("poster");
      v.load();
    };
    box.addEventListener("click", (e) => {
      if (e.target === box || e.target.closest(".vr-lightbox-close")) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && box.classList.contains("is-open")) close();
    });
    box.__close = close;
  }
  tiles.forEach((tile) => {
    if (tile.__wired) return;
    tile.__wired = true;
    tile.addEventListener("click", (e) => {
      const site = tile.dataset.site;
      const video = tile.dataset.video;
      if (site) {
        e.preventDefault();
        window.open(site, "_blank", "noopener");
        return;
      }
      if (video) {
        e.preventDefault();
        const v = box.querySelector("video");
        const img = tile.querySelector("img");
        if (img && img.src) v.setAttribute("poster", img.src);
        else v.removeAttribute("poster");
        box.querySelector(".vr-cap-label").textContent = tile.querySelector(".portfolio-meta small")?.textContent || "";
        box.querySelector(".vr-cap-title").textContent = tile.querySelector(".portfolio-meta strong")?.textContent || "";
        v.src = video;
        box.classList.add("is-open");
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      }
    });
  });
}

function setupScrollReveal() {
  const targets = document.querySelectorAll("#app .section, #app .detail-overview");
  if (!targets.length) return;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
    return;
  }
  targets.forEach((el) => el.classList.add("vr-reveal"));
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  targets.forEach((el) => observer.observe(el));
  // Safety net: ensure nothing stays hidden even if the observer never fires.
  window.setTimeout(() => targets.forEach((el) => el.classList.add("is-in")), 1500);
}

function setupStickyCta() {
  const sticky = document.querySelector(".sticky");
  const topbar = document.querySelector(".topbar");
  const contact = document.querySelector("#contact");
  const update = () => {
    const contactVisible = contact && contact.getBoundingClientRect().top < window.innerHeight - 80;
    if (sticky) sticky.classList.toggle("is-visible", window.scrollY > 260 && !contactVisible);
    if (topbar) topbar.classList.toggle("is-scrolled", window.scrollY > 80);
  };
  update();
  window.removeEventListener("scroll", window.__vrStickyUpdate);
  window.__vrStickyUpdate = update;
  window.addEventListener("scroll", update, { passive: true });
}

function setupPortfolioFilters() {
  const hub = document.querySelector("#portfolio-hub");
  const filters = hub ? hub.querySelectorAll("[data-filter]") : [];
  const items = hub ? hub.querySelectorAll(".portfolio-item[data-category]") : [];
  if (!filters.length || !items.length) return;
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const active = button.dataset.filter;
      filters.forEach((filter) => filter.setAttribute("aria-pressed", String(filter === button)));
      items.forEach((item) => {
        const isVisible = active === "all" || item.dataset.category === active;
        item.classList.toggle("is-hidden", !isVisible);
      });
    });
  });
}

render();
