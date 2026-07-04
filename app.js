const routes = [
  {
    slug: "homepage",
    nav: "홈페이지",
    badge: "videoroastery.com/homepage",
    title: "홈페이지 제작부터 문의 연결까지",
    lead: "첫 화면에서 무엇을 파는지 바로 보이고, 포트폴리오와 문의 양식까지 자연스럽게 이어지도록 정리합니다.",
    heroVideo: "live_hero.mp4",
    heroImage: "portfolio_automation_homepage_flow.jpg",
    cta: "홈페이지 첫 화면 진단·견적 받기",
    proof: [
      ["첫 화면 설계", "방문자가 첫 화면만 보고도 무엇을 파는지 알게 만듭니다."],
      ["상담 동선", "화면 예시 보기, 제작 범위 확인, 문의 양식이 끊기지 않게 이어집니다."],
      ["포트폴리오 연결", "기존 작업물을 서비스별 신뢰 자료로 재배치합니다."]
    ]
  },
  {
    slug: "inquiry-agent",
    nav: "문의자동화",
    badge: "videoroastery.com/inquiry-agent",
    title: "문의가 오면 답변할 내용부터 정리합니다",
    lead: "홈페이지, 폼, 메일, 메신저 문의를 모아 요청 내용과 확인 항목, 답장 초안을 빠르게 준비합니다.",
    heroVideo: "live_hero.mp4",
    heroImage: "portfolio_automation_examples.jpg",
    cta: "문의 자동정리 흐름 상담받기",
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
    lead: "제품 사진과 콘셉트만 있어도, 첫 3초에 시선을 잡는 릴스·쇼츠·틱톡 광고 영상으로 구성합니다.",
    heroVideo: "ai_shortform_hero_web.mp4",
    heroImage: "card_ai_shortform_photo.jpg",
    cta: "제품 사진으로 숏폼 견적 받기",
    proof: [
      ["촬영 부담 감소", "제품 사진만 있어도 홍보용 숏폼 소재를 만들 수 있습니다."],
      ["첫 3초 후킹", "처음 3초에 시선을 끌고, 제품과 메시지가 자연스럽게 이어지게 만듭니다."],
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
    cta: "기업 홍보영상 구성 상담받기",
    proof: [
      ["메시지 정리", "회사 소개를 단순 나열이 아니라 영상 흐름으로 바꿉니다."],
      ["제안서 활용", "영업, 투자, 채용, 입점 제안에 같이 쓸 수 있게 만듭니다."],
      ["확인 기준", "톤, 문구, 화면 순서를 먼저 맞춘 뒤 제작합니다."]
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
    cta: "드론 촬영 가능 일정·견적 묻기",
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
    cta: "웨딩 촬영 일정 상담받기",
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
    cta: "카드뉴스·릴스 운영 상담받기",
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
    title: "제작 상담을 빠르게 시작하는 사전 질문지",
    lead: "홈페이지·영상·드론·콘텐츠 중 필요한 제작을 적어주시면 가능 범위와 다음 단계를 회신합니다.",
    heroVideo: "live_hero.mp4",
    heroImage: "ai_service_landing.png",
    cta: "10분 사전진단 보내기",
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

// 패키지 구성 — 금액은 홈에 노출하지 않음(자료 확인 후 견적서로 발송)
const pricingGroups = [
  { name: "AI 숏폼", slug: "ai-shortform", tiers: [
    { tier: "테스트 1건", inc: "제품 사진 기반 숏폼 1편 · 세로 릴스/쇼츠 · 기본 문구 · 1회 수정" },
    { tier: "월간 소재팩", inc: "월 정기 제작 · 소재 변형 · 첫 3초 후킹 문구 · 다회 수정" },
    { tier: "광고 확장팩", inc: "물량 확대 · 콘셉트 2~3방향 · 썸네일/카피 변형 · 성과 소재 분리" }
  ]},
  { name: "기업영상", slug: "brand-film", tiers: [
    { tier: "메시지형", inc: "기존 자료 기반 소개영상 · 자막/음악 · 1회 수정" },
    { tier: "촬영형", inc: "기획 구성안 · 현장 촬영 · 인터뷰/공간/제품 컷 · 다회 수정" },
    { tier: "캠페인형", inc: "공익·기관·브랜드 캠페인 · 촬영+편집+오디오 · 버전 분리 협의" }
  ]},
  { name: "드론 촬영", slug: "drone", tiers: [
    { tier: "드론 애드온", inc: "기존 제작에 항공 컷 3~5개 추가 · 비행 가능 사전 확인" },
    { tier: "단독 촬영", inc: "제주 현장 드론 · 와이드/동선 컷 · 기본 색보정" },
    { tier: "시설·관광지", inc: "숙소/시설/농장/관광지 · 낮·야간/복수 동선 협의" }
  ]},
  { name: "홈페이지", slug: "homepage", tiers: [
    { tier: "영상만 제작", inc: "홈페이지용 대표 영상/숏폼 · 삽입 파일 납품 · 기본 썸네일" },
    { tier: "상담형 홈페이지", inc: "첫 화면 문구 · 포트폴리오/서비스/문의 동선 · 모바일 최적화" },
    { tier: "홈+영상 패키지", inc: "상담형 홈페이지 + 대표 영상/AI 숏폼 · 문의폼·카카오 연결" }
  ]}
];

// 후기 — 크몽 실거래 리뷰 발췌(AI 숏폼 서비스 ★4.5/7건 등). 원문 그대로, 이름은 크몽 공개 표기 기준 업종·유형으로 표기
const testimonials = [
  { quote: "너무 세심하게 작업 잘해주시고 퀄도 좋습니다.", who: "재구매 고객", svc: "AI 숏폼", repeat: true },
  { quote: "빠른 응대에 디테일한 요구까지 들어주시고 퀄리티 대박입니다.", who: "뷰티·미용 기업", svc: "AI 숏폼", repeat: true },
  { quote: "알아서 깔끔하게 잘해주세요. 작업 감사합니다.", who: "기업 고객", svc: "AI 숏폼" },
  { quote: "수고하셨습니다. 재구매중입니다.", who: "학원·교육 기업", svc: "AI 숏폼", repeat: true }
];

// 케이스스터디 — 실제 납품 프로젝트 (자연스러운 서술형)
const caseStudies = [
  {
    client: "작심랩", tag: "AI 숏폼 · 제품광고", cover: "portfolio_covers/ai_kombucha.jpg", slug: "ai-shortform", hook: "촬영 없이, 제품 사진만으로 만든 광고 숏폼"
  },
  {
    client: "LG U+", tag: "AI 브랜드 캠페인", cover: "portfolio_covers/ai_nadaum_case.webp", slug: "ai-shortform", hook: "브랜드 무드까지 담은 AI 세로 캠페인"
  },
  {
    client: "대한결핵협회", tag: "공익 캠페인 · 기업영상", cover: "portfolio_covers/corp_01.jpg", slug: "brand-film", hook: "공익 메시지를 40초 홍보영상으로"
  }
];
const portfolioWallItems = [
  // WEB → homepage 서비스 페이지
  ["portfolio_web_regional_brand.png", "web", "WEB", "지역 브랜드형 화면", "homepage", "wide"],
  ["portfolio_drone_night_exterior_clean.jpg", "drone", "DRONE", "야간 외관 촬영", "drone", "large"],
  ["portfolio_content_reels_page.jpg", "content", "CONTENT", "릴스 포트폴리오", "content", "wide"],
  ["portfolio_automation_examples.jpg", "system", "SYSTEM", "문의 자동정리", "inquiry-agent"],
  ["portfolio_web_beamish.png", "web", "WEB", "영상 광고 분석 페이지", "homepage"],
  ["portfolio_web_shortform_a.png", "web", "WEB", "숏폼 제작 페이지", "homepage"],
  ["portfolio_web_ai_ops.png", "web", "WEB", "AI 마케팅 비서", "homepage"],
  ["portfolio_covers/web_01.jpg", "web", "WEB", "pawshare 앱 화면", "homepage"],
  ["portfolio_covers/web_03.jpg", "web", "WEB", "브랜드 제품 화면", "homepage"],
  ["pawshare_landing.png", "web", "WEB", "pawshare 후원 페이지", "homepage"],
  ["portfolio_covers/site_artist.jpg", "web", "WEB", "아티스트 음악 페이지", "homepage"],
  ["portfolio_covers/site_sanjiro.jpg", "web", "WEB", "농장 결제 플랫폼", "homepage"],
  ["portfolio_covers/site_muscle.jpg", "web", "WEB", "피트니스 운동 앱", "homepage"],
  // AI FILM → ai-shortform / brand-film
  ["portfolio_video_corporate_main.jpg", "ai", "BRAND", "감귤 브랜드 영상", "brand-film"],
  ["portfolio_video_industrial_brand.jpg", "ai", "BRAND", "감귤 건강식품 영상", "brand-film"],
  ["portfolio_video_esg_brand.jpg", "ai", "BRAND", "ESG 메시지 영상", "brand-film"],
  ["portfolio_covers/ai_03.jpg", "ai", "AI FILM", "AI 제품 광고 숏폼", "ai-shortform"],
  ["portfolio_covers/ai_kombucha.jpg", "ai", "AI FILM", "AI 콤부차 제품 릴스", "ai-shortform"],
  ["portfolio_covers/ai_nadaum.jpg", "ai", "AI FILM", "AI 브랜드 캠페인", "ai-shortform"],
  ["portfolio_covers/ai_esg_wind.jpg", "ai", "AI FILM", "AI ESG 캠페인", "ai-shortform"],
  ["portfolio_covers/ai_game_ua.jpg", "ai", "AI FILM", "AI 게임 광고 영상", "ai-shortform"],
  ["portfolio_covers/ai_saemangeum.jpg", "ai", "AI FILM", "AI 재생에너지 영상", "ai-shortform"],
  ["portfolio_covers/ai_esg_future.jpg", "ai", "AI FILM", "AI ESG 메시지 영상", "ai-shortform"],
  ["portfolio_covers/ai_superwater.jpg", "ai", "AI FILM", "AI 건강음료 숏폼", "ai-shortform"],
  ["portfolio_covers/ai_lemondiet.jpg", "ai", "AI FILM", "AI 다이어트 보충제 숏폼", "ai-shortform"],
  ["portfolio_covers/ai_soil.jpg", "ai", "AI VISUAL", "AI 에너지 브랜드 비주얼", "ai-shortform"],
  ["portfolio_covers/ai_aesop.jpg", "ai", "AI VISUAL", "AI 핸드크림 제품 비주얼", "ai-shortform"],
  ["portfolio_covers/video_03.jpg", "ai", "AI FILM", "AI ESG 바다 메시지", "ai-shortform"],
  ["portfolio_covers/video_04.jpg", "ai", "AI FILM", "AI 기업 홍보 컷", "ai-shortform"],
  ["portfolio_covers/corp_01.jpg", "ai", "BRAND", "공익 캠페인 영상", "brand-film"],
  ["portfolio_covers/corp_02.jpg", "ai", "BRAND", "IT 서비스 영상", "brand-film"],
  ["portfolio_covers/corp_03.jpg", "ai", "BRAND", "비영리·행사 영상", "brand-film"],
  ["portfolio_covers/corp_04.jpg", "ai", "BRAND", "공공기관 캠페인", "brand-film"],
  ["portfolio_covers/corp_05.jpg", "ai", "BRAND", "행사 스케치 영상", "brand-film"],
  ["portfolio_covers/corp_06.jpg", "ai", "BRAND", "기업 인터뷰 영상", "brand-film"],
  ["portfolio_covers/corp_07.jpg", "ai", "BRAND", "포럼·네트워킹 영상", "brand-film"],
  ["portfolio_covers/corp_08.jpg", "ai", "BRAND", "농장 브랜드 영상", "brand-film"],
  ["portfolio_covers/corp_09.jpg", "ai", "BRAND", "기념관 홍보영상", "brand-film"],
  ["portfolio_covers/video_05.jpg", "content", "CONTENT", "제품 릴스 컷", "content"],
  ["portfolio_covers/video_06.jpg", "content", "CONTENT", "NETIA 제품 광고 컷", "content"],
  // DRONE → drone (정적컷은 월 후순위로 정렬됨 → 앞에 둬도 무방)
  ["portfolio_drone_coastal_overview_clean.jpg", "drone", "DRONE", "해안 와이드 컷", "drone"],
  ["portfolio_drone_resort_facility.jpg", "drone", "DRONE", "ICC 컨벤션센터 항공 컷", "drone"],
  // 영상 연결 — 앞 3개가 상세 오버뷰(대표/설명/활용 컷) → 강한 컷 우선
  ["portfolio_covers/drone_06.jpg", "drone", "DRONE", "풍차해안 석양 항공 컷", "drone"],
  ["portfolio_drone_village_overview.jpg", "drone", "DRONE", "마을 전경 컷", "drone"],
  ["portfolio_covers/drone_05.jpg", "drone", "DRONE", "와이드 항공 컷", "drone"],
  ["portfolio_covers/drone_02.jpg", "drone", "DRONE", "태양광 시설 항공 컷", "drone"],
  ["portfolio_drone_coast_cliff.jpg", "drone", "DRONE", "해안 절경 컷", "drone"],
  ["portfolio_drone_coast_field.jpg", "drone", "DRONE", "해안 포구 항공 컷", "drone"],
  ["portfolio_drone_facility_route.jpg", "drone", "DRONE", "해안 시설 항공 컷", "drone"],
  ["portfolio_drone_facility_route_clean.jpg", "drone", "DRONE", "시설 동선 컷", "drone"],
  ["portfolio_drone_grid_supplement.jpg", "drone", "DRONE", "박물관 항공 컷", "drone"],
  ["portfolio_drone_museum_exterior.jpg", "drone", "DRONE", "기관 외관 컷", "drone"],
  ["portfolio_drone_farm_field.jpg", "drone", "DRONE", "농장 전경 컷", "drone"],
  ["portfolio_covers/drone_04.jpg", "drone", "DRONE", "농장 항공 컷", "drone"],
  ["portfolio_drone_farm_terrace.jpg", "drone", "DRONE", "농업 방제 드론 컷", "drone"],
  ["portfolio_drone_topdown_garden.jpg", "drone", "DRONE", "해안 공원 항공 컷", "drone"],
  ["portfolio_covers/drone_01.jpg", "drone", "DRONE", "항공 영상 컷", "drone"],
  // CONTENT → content
  ["portfolio_content_product.jpg", "content", "CONTENT", "제품 카드뉴스 소재", "content"],
  ["portfolio_content_ai_video.jpg", "content", "CONTENT", "AI 영상 카드", "content"],
  ["portfolio_content_context.jpg", "content", "CONTENT", "참고 자료 정리 화면", "content"],
  ["portfolio_content_request_form.jpg", "content", "CONTENT", "요청서 화면", "content"],
  ["portfolio_content_review.jpg", "content", "CONTENT", "검수 흐름 화면", "content"],
  ["portfolio_covers/content_01.jpg", "content", "CONTENT", "제품 상세 컷", "content"],
  ["portfolio_covers/content_02.jpg", "content", "CONTENT", "제품 과정 컷", "content"],
  ["portfolio_covers/content_03.jpg", "content", "CONTENT", "음식 브랜드 릴스", "content"],
  ["portfolio_covers/content_04.jpg", "content", "CONTENT", "숏폼 소재 컷", "content"],
  ["portfolio_covers/content_05.jpg", "content", "CONTENT", "식당 홍보 릴스", "content"],
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
  ["route_plan_actual.jpg", "system", "SYSTEM", "실제 화면 설계", "consulting"],
  ["route_plan_mobile.jpg", "system", "SYSTEM", "모바일 동선 설계", "consulting"],
  ["route_plan_mockups.jpg", "system", "SYSTEM", "화면 예시 비교", "consulting"],
  ["route_plan_system.jpg", "system", "SYSTEM", "문의 시스템 설계", "consulting"],
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
  ["portfolio_covers/wedding_01.jpg", "wedding", "WEDDING", "제주 웨딩 스냅", "wedding"],
].map(([image, category, label, title, slug, size = ""]) => ({
  image,
  category,
  label,
  title,
  slug,
  size
}));
const routeDetails = {
  homepage: {
    kicker: "Website",
    title: "처음부터 믿고 문의하게",
    lead: "무엇을 하는 곳인지, 어떤 작업을 해왔는지, 어떻게 문의하면 되는지 첫 화면에서 분명하게 전합니다. 방문자는 오래 헤매지 않고 신뢰할 이유를 먼저 만납니다.",
    windows: [
      ["01", "첫 화면", "브랜드명과 제작 범위를 한 문장으로 정리"],
      ["02", "화면 예시 보기", "업종별 화면 예시와 포트폴리오를 먼저 보여드립니다."],
      ["03", "문의 연결", "문의 양식, 메일, 필요한 자료 안내를 같은 흐름에 배치"]
    ],
    checkpoints: ["모바일 첫 화면", "대표 이미지", "포트폴리오 순서", "문의 양식 연결"],
    related: ["inquiry-agent", "content", "ai-shortform"]
  },
  "inquiry-agent": {
    kicker: "Inquiry System",
    title: "문의, 하나도 놓치지 않게",
    lead: "폼·메일·메신저로 흩어진 문의를 한곳에 모아, 먼저 확인할 것과 답장 초안까지 바로 준비되게 합니다.",
    windows: [
      ["01", "문의 접수", "고객 요청, 예산, 일정, 참고 링크를 한 번에 수집"],
      ["02", "자동 정리", "확인해야 할 항목과 누락된 자료를 먼저 분류"],
      ["03", "답장 초안", "반복 안내 문구와 다음 단계를 빠르게 준비"]
    ],
    checkpoints: ["문의폼 문항", "메일 제목", "시트 저장", "답장 템플릿"],
    related: ["homepage", "content", "consulting"]
  },
  "ai-shortform": {
    kicker: "AI Shortform",
    title: "제품 사진만으로, 광고가 되는 숏폼",
    lead: "촬영 없이 제품 이미지와 콘셉트만으로, 첫 3초에 시선을 잡고 구매까지 이어지는 숏폼을 만듭니다.",
    windows: [
      ["01", "제품 이미지", "실제 사진과 패키지 이미지를 먼저 확인"],
      ["02", "톤앤매너", "차분한 고급 톤, 설명 중심, 빠른 비교용 중 원하는 방향을 고릅니다."],
      ["03", "업로드 채널", "릴스, 쇼츠, 틱톡, 당근 광고에 맞게 길이와 화면을 나눕니다."]
    ],
    checkpoints: ["제품 사진", "핵심 문구", "사용 채널", "참고 영상"],
    related: ["brand-film", "content", "homepage"]
  },
  "brand-film": {
    kicker: "Brand Film",
    title: "회사 소개가 한 번에 이해되는 영상",
    lead: "기업·기관·서비스 소개를 보는 사람이 이해하는 순서로 풀어, 한 번 보면 무엇을 하는 곳인지 또렷이 남게 합니다.",
    windows: [
      ["01", "핵심 메시지", "한 문장으로 기억될 소개 문구를 먼저 정리"],
      ["02", "장면 구성", "공간, 사람, 제품, 서비스 장면의 순서를 설계"],
      ["03", "쓸 곳", "영업 제안, 채용, 입점 제안, SNS 게시용으로 필요한 버전을 나눕니다."]
    ],
    checkpoints: ["회사 소개 자료", "참고 영상", "사용 목적", "노출 채널"],
    related: ["ai-shortform", "content", "homepage"]
  },
  drone: {
    kicker: "Aerial Video",
    title: "공간의 크기와 분위기가 한눈에",
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
    kicker: "Wedding Film",
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
    kicker: "Content",
    title: "광고와 상담에 바로 쓰이는 콘텐츠",
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
    kicker: "AI Ops",
    title: "반복되는 손일을 덜어내는 자동화",
    lead: "지금 반복되는 입력·정리·답장 업무를 보고 폼, 시트, 메일, 문서, 알림을 필요한 만큼만 연결합니다.",
    windows: [
      ["01", "업무 확인", "매일 반복되는 입력, 정리, 답장 업무를 찾음"],
      ["02", "작게 연결", "시트, 폼, 메일, AI 도구를 필요한 만큼만 연결"],
      ["03", "운영 기준", "혼자서도 유지할 수 있게 문서로 정리합니다."]
    ],
    checkpoints: ["반복 업무", "쓰는 도구", "저장 위치", "알림 방식"],
    related: ["inquiry-agent", "homepage", "content"]
  }
};
const basePath = detectBasePath();
const mainNavItems = [
  ["포트폴리오", "portfolio-hub"],
  ["서비스", "services"],
  ["견적 안내", "estimate"]
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

const imgMeta = {"card_wedding.jpg":[1080,1080],"portfolio_video_esg_brand.jpg":[1200,750],"og_main.jpg":[1200,630],"portfolio_drone_wedding_wide.jpg":[960,540],"portfolio_drone_coast_cliff.jpg":[1100,619],"portfolio_wedding_beach_privacy.jpg":[960,540],"portfolio_automation_examples.jpg":[1200,750],"portfolio_drone_farm_terrace.jpg":[1280,720],"portfolio_content_reels_page.jpg":[540,960],"portfolio_automation_task_flow.jpg":[1200,750],"profile_symbol.png":[428,428],"portfolio_video_corporate_main.jpg":[1200,750],"card_ai_shortform_photo.jpg":[1200,1200],"portfolio_drone_coast_field.jpg":[1100,619],"portfolio_wedding_bouquet_lens.jpg":[1200,750],"muscle_booster.png":[1710,875],"portfolio_drone_grid_supplement.jpg":[960,540],"portfolio_automation_homepage_flow.jpg":[1200,750],"portfolio_drone_night_exterior_clean.jpg":[1200,750],"apple-touch-icon.png":[180,180],"videoroastery.png":[1710,875],"card_inquiry_agent_photo.jpg":[1200,1200],"danggeun_ad_homepage_ai_1080.jpg":[1080,1080],"portfolio_drone_topdown_garden.jpg":[960,540],"portfolio_drone_coastal_overview_clean.jpg":[960,600],"portfolio_content_request_form.jpg":[1200,750],"card_homepage.jpg":[1080,1080],"og_brand_film.jpg":[1200,630],"portfolio_drone_coastal_overview.jpg":[1200,750],"logo.png":[512,512],"ai_service_landing.png":[1710,875],"route_plan_system.jpg":[1280,1024],"portfolio_wedding_studio_mood.jpg":[1280,720],"og_content.jpg":[1200,630],"portfolio_web_product_drop.png":[1710,875],"portfolio_web_shortform_a.png":[1710,875],"vr_canada.png":[1710,875],"portfolio_drone_farm_field.jpg":[960,540],"vibecoding_1.png":[1710,875],"portfolio_wedding_detail_sixcut.jpg":[960,540],"portfolio_automation_scope.jpg":[1200,750],"portfolio_web_shortform_b.png":[1710,875],"og_inquiry_agent.jpg":[1200,630],"card_consulting_photo.jpg":[1200,1200],"pawshare_landing.png":[1710,875],"vibecoding_2.png":[1710,875],"portfolio_drone_village_overview.jpg":[1100,619],"portfolio_drone_museum_exterior.jpg":[1200,750],"favicon.png":[64,64],"route_plan_mockups.jpg":[1280,1280],"og_drone.jpg":[1200,630],"og_ai_shortform.jpg":[1200,630],"og_homepage.jpg":[1200,630],"og_consulting.jpg":[1200,630],"portfolio_drone_facility_route_clean.jpg":[1200,470],"card_brand_film_photo.jpg":[1200,1200],"vibecoding_3.png":[1710,875],"portfolio_video_industrial_brand.jpg":[1200,750],"portfolio_content_product.jpg":[1200,750],"portfolio_drone_facility_route.jpg":[960,540],"portfolio_video_product_style.jpg":[1280,720],"symbol.png":[256,256],"portfolio_content_context.jpg":[1200,750],"portfolio_drone_resort_facility.jpg":[1200,750],"portfolio_video_shortform_main.jpg":[720,1280],"portfolio_content_ai_video.jpg":[1200,750],"portfolio_automation_portfolio.jpg":[1200,750],"portfolio_wedding_ring_detail.jpg":[1200,750],"portfolio_web_video_dark_v2.png":[1280,720],"og_wedding.jpg":[1200,630],"portfolio_web_ai_ops.png":[1710,875],"route_plan_actual.jpg":[1280,1252],"portfolio_automation_main.jpg":[1200,750],"portfolio_content_review.jpg":[1200,750],"route_plan_mobile.jpg":[789,1280],"portfolio_drone_night_exterior.jpg":[1200,750],"portfolio_web_beamish.png":[1710,875],"portfolio_web_regional_brand.png":[1710,875],"card_drone.jpg":[1080,1080],"portfolio_wedding_flower_detail.jpg":[1200,750],"portfolio_covers/drone_06.jpg":[1100,619],"portfolio_covers/ai_aesop.jpg":[720,1290],"portfolio_covers/ai_kombucha.jpg":[640,1138],"portfolio_covers/automation_01.jpg":[1200,900],"portfolio_covers/content_05.jpg":[1280,720],"portfolio_covers/corp_03.jpg":[1280,720],"portfolio_covers/web_02.jpg":[1200,900],"portfolio_covers/video_04.jpg":[405,720],"portfolio_covers/wedding_06.jpg":[1200,900],"portfolio_covers/web_03.jpg":[1200,900],"portfolio_covers/video_05.jpg":[540,960],"portfolio_covers/ai_saemangeum.jpg":[640,1138],"portfolio_covers/corp_02.jpg":[1280,720],"portfolio_covers/content_04.jpg":[720,1280],"portfolio_covers/corp_09.jpg":[1280,720],"portfolio_covers/content_03.jpg":[1280,720],"portfolio_covers/corp_05.jpg":[1280,720],"portfolio_covers/site_sanjiro.jpg":[1280,720],"portfolio_covers/ai_lemondiet.jpg":[640,1138],"portfolio_covers/web_04.jpg":[1200,900],"portfolio_covers/web_05.jpg":[1200,900],"portfolio_covers/ai_01.jpg":[1280,720],"portfolio_covers/video_03.jpg":[540,960],"portfolio_covers/corp_04.jpg":[1280,720],"portfolio_covers/automation_06.jpg":[1200,900],"portfolio_covers/content_02.jpg":[1280,720],"portfolio_covers/drone_01.jpg":[960,540],"portfolio_covers/wedding_01.jpg":[1280,720],"portfolio_covers/corp_08.jpg":[1280,720],"portfolio_covers/wedding_indoor.jpg":[1280,720],"portfolio_covers/wedding_02.jpg":[1200,900],"portfolio_covers/web_06.jpg":[1200,900],"portfolio_covers/corp_07.jpg":[1280,720],"portfolio_covers/content_01.jpg":[720,1280],"portfolio_covers/automation_05.jpg":[1200,900],"portfolio_covers/drone_02.jpg":[1100,619],"portfolio_covers/automation_04.jpg":[1200,900],"portfolio_covers/ai_esg_wind.jpg":[640,1138],"portfolio_covers/ai_soil.jpg":[720,1290],"portfolio_covers/corp_06.jpg":[1280,720],"portfolio_covers/site_artist.jpg":[1280,720],"portfolio_covers/video_01.jpg":[1280,720],"portfolio_covers/ai_03.jpg":[1280,720],"portfolio_covers/wedding_03.jpg":[1200,900],"portfolio_covers/video_06.jpg":[960,540],"portfolio_covers/wedding_jeju_snap.jpg":[1280,720],"portfolio_covers/corp_01.jpg":[1280,720],"portfolio_covers/automation_03.jpg":[1200,900],"portfolio_covers/ai_game_ua.jpg":[405,720],"portfolio_covers/drone_04.jpg":[960,540],"portfolio_covers/wedding_04.jpg":[1200,900],"portfolio_covers/ai_superwater.jpg":[640,1138],"portfolio_covers/ai_nadaum.jpg":[640,1138],"portfolio_covers/ai_esg_future.jpg":[640,1138],"portfolio_covers/wedding_05.jpg":[1200,900],"portfolio_covers/drone_05.jpg":[1100,619],"portfolio_covers/content_06.jpg":[1200,900],"portfolio_covers/site_muscle.jpg":[1280,720],"portfolio_covers/automation_02.jpg":[1200,900],"portfolio_covers/ai_05.jpg":[1280,720],"portfolio_covers/web_01.jpg":[1280,675],"logos/lg_uplus.png":[500,138],"logos/lions.png":[500,467],"logos/make_a_wish.png":[500,136]};
function pic(name, opts) {
  opts = opts || {};
  var meta = imgMeta[name];
  var cls = opts.cls ? ' class="' + opts.cls + '"' : "";
  var alt = opts.alt || "";
  var loading = opts.loading || "lazy";
  var sizes = opts.sizes ? ' sizes="' + opts.sizes + '"' : "";
  var wh = meta ? ' width="' + meta[0] + '" height="' + meta[1] + '"' : "";
  var img = '<img' + cls + ' src="' + asset(name) + '"' + wh + ' alt="' + alt + '" loading="' + loading + '" decoding="async"' + sizes + ' />';
  if (!meta) return img;
  var webp = asset(name.replace(/\.(jpe?g|png)$/i, ".webp"));
  return '<picture><source type="image/webp" srcset="' + webp + '" />' + img + '</picture>';
}

function nav() {
  const items = mainNavItems
    .map(([label, id]) => `<a href="${id === "estimate" ? routeHref("estimate") : sectionHref(id)}">${label}</a>`)
    .join("");
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <header class="topbar">
      <a class="brand" href="${routeHref()}">
        ${pic("symbol.png", { alt: "Video Roastery", loading: "eager" })}
        <span>Video Roastery</span>
      </a>
      <nav class="nav" aria-label="서비스 메뉴">${items}</nav>
    </header>
  `;
}

function hero(route) {
  const primaryHref = route.primaryHref === "estimate" ? routeHref("estimate") : (route.primaryHref || "#contact");
  const secondaryHref = route.secondaryHref || "#portfolio";
  const secondaryCta = route.secondaryCta || "사례 먼저 보기";
  const trustItems = route.trustItems || ["실제 작업물 중심", "서비스별 별도 상담", "작업 가능 범위 먼저 확인"];
  const isEditorial = route.layout === "editorial";
  // 히어로 A/B 비교용 변형(대표님 검토용): ?hero=mood / ?hero=hybrid. 기본값(파라미터 없음)=현재 그대로.
  const heroVariant = isEditorial && typeof location !== "undefined" ? new URLSearchParams(location.search).get("hero") : null;
  const isMood = heroVariant === "mood";
  const isHybrid = heroVariant === "hybrid";
  const variantClass = isMood ? " hero-mood" : isHybrid ? " hero-hybrid" : "";

  // 메인 전용: 포트폴리오-퍼스트 히어로 — 어두운 2줄 마퀴 영상월(대부분 정지컷, 보이는 소수만 무음 루프)
  // + 좌하단 작은 포지셔닝 한 줄 + 우하단 골드 견적 CTA. reduced-motion/모바일은 setupHeroWall에서 재생 억제.
  if (route.heroGallery) {
    // 배경이미지로 렌더(<img> 아님) — transform 애니메이션 레이어에서 <img>가 검게 남는
    // 크롬 버그를, 요소와 함께 래스터되는 background-image로 근본 회피.
    const tileHtml = ([image, label, video]) => `
        <figure class="hw-tile${video ? " hw-tile--video" : ""}"${video ? ` data-loop="${asset(video)}"` : ""} role="img" aria-label="${label} 작업 사례" style="background-image:url('${asset(image)}')">
          ${video ? `<video muted loop playsinline preload="none" aria-hidden="true"></video>` : ""}
          <figcaption>${label}</figcaption>
        </figure>`;
    // 타일은 JS가 각각 절대위치로 이동·재활용(캐러셀). 복제본/넓은 트랙 없음 → 컨테이너가
    // 뷰포트 크기라 화면 밖 이미지가 검게 렌더되는 크롬 레이어 버그를 근본 회피.
    const rowHtml = (tiles, dir) =>
      `<div class="hw-row hw-row--${dir}">${tiles.map(tileHtml).join("")}</div>`;
    const rows = route.wallRows || [];
    return `
    <section class="hero hero-wall" aria-label="대표 작업 사례">
      <h1 class="sr-only">${(route.title || "").replace(/<br\s*\/?>/gi, " ")}</h1>
      <div class="hero-wall__rows">
        ${rowHtml(rows[0] || [], "left")}
        ${rowHtml(rows[1] || [], "right")}
      </div>
      <div class="hero-wall__cta">
        <a class="hero-wall__more" href="${secondaryHref}">작업 사례 전체 보기</a>
        <a class="btn primary" href="${primaryHref}">${route.cta}</a>
      </div>
    </section>`;
  }

  return `
    <section class="hero${isEditorial ? " editorial" : ""}${variantClass}">
      <video autoplay muted loop playsinline preload="metadata" poster="${asset(route.heroImage)}">
        <source src="${asset(route.heroVideo)}" type="video/mp4" />
      </video>
      ${(isEditorial && !isMood) ? `
        <div class="hero-showcase" aria-label="대표 작업 사례">
          ${(route.showcase || []).map(([image, label]) => `
            <figure>
              ${pic(image, { alt: label + " 작업 사례", loading: "eager" })}
              <figcaption>${label}</figcaption>
            </figure>
          `).join("")}
        </div>
      ` : ""}
      <div class="hero-inner">
        ${isEditorial ? `
          <p class="hero-kicker${route.heroRich ? " hero-kicker--home" : ""}">${route.kicker}</p>
          ${(route.intro && !isMood) ? `<p class="hero-intro">${route.intro}</p>` : ""}
          ${(route.prefix && !isMood) ? `<p class="hero-prefix">${route.prefix}</p>` : ""}
        ` : `<span class="route-pill">${route.badge}</span>`}
        <h1>${route.title}</h1>
        ${!(isMood || isHybrid) ? `<p class="hero-lead">${route.lead}</p>` : ""}
        ${isEditorial ? `
          <div class="hero-actions editorial-actions">
            <a class="btn primary" href="${primaryHref}">${route.cta}</a>
            ${(route.heroRich || isMood || isHybrid) ? `<a class="btn secondary" href="${secondaryHref}">${secondaryCta}</a>` : ""}
          </div>
          ${route.heroRich ? `<div class="hero-trust" aria-label="신뢰 확인 정보">${trustItems.map((item) => `<span>${item}</span>`).join("")}</div>` : ""}
          ${(isMood || isHybrid) ? `<p class="hero-scrollhint" aria-hidden="true">제주 현장촬영 · 전국 AI 숏폼 · 맞춤 견적 ↓</p>` : ""}
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

function testimonialsSection() {
  return `
      <section class="section tight" id="testimonials">
        <div class="section-head">
          <div>
            <span class="section-statement" aria-hidden="true">REVIEWS</span>
            <h2 class="h2-en">Client Reviews</h2>
            <p class="section-sub">크몽에서 실제로 거래한 고객이 남긴 후기입니다.</p>
          </div>
        </div>
        <div class="review-stats">
          <div class="review-stat"><strong>★ 4.5</strong><span>크몽 서비스 평점</span></div>
          <div class="review-stat"><strong>7건+</strong><span>실거래 후기</span></div>
          <div class="review-stat"><strong>재구매 다수</strong><span>다시 찾는 고객</span></div>
          <a class="review-source" href="https://kmong.com/gig/687384" target="_blank" rel="noopener">크몽에서 실제 후기 보기 ↗</a>
        </div>
        <ul class="testimonial-grid" aria-label="고객 후기">
          ${testimonials.map((t) => `<li class="testimonial"><p class="stars"><span aria-hidden="true">★★★★★</span><span class="sr-only">별점 5점 만점</span></p><blockquote>&ldquo;${t.quote}&rdquo;</blockquote><div class="testimonial-foot"><cite>${t.who}</cite><span class="tm-tags">${t.repeat ? `<em class="tm-repeat">재구매</em>` : ""}<em class="tm-svc">${t.svc}</em></span></div></li>`).join("")}
        </ul>
      </section>
  `;
}

// 견적 안내 전용 페이지 (독립 라우트 /estimate/)
function estimateSlip(i) {
  const svcs = ["AI 숏폼", "기업영상", "드론 촬영", "홈페이지", "브랜드필름", "콘텐츠", "웨딩"];
  const svc = svcs[i % svcs.length];
  const rows = 2 + (i % 3);
  const lines = Array.from({ length: rows }, () => `<span class="est-line"></span>`).join("");
  return `<div class="est-slip"><div class="est-slip-top"><span class="est-badge">견적서</span><em>${svc}</em></div>${lines}<div class="est-slip-total"><span class="est-line short"></span><b class="est-amount"></b></div></div>`;
}

function estimatePage() {
  const wall = Array.from({ length: 160 }, (_, i) => estimateSlip(i)).join("");
  const steps = [
    ["01", "자료 보내기", "보유한 제품컷·로고·참고 영상과 원하는 결과물을 보내주세요. 촬영 없이 사진만 있어도 됩니다."],
    ["02", "범위 확인", "받은 자료로 필요한 제작 범위와 일정을 정리합니다. 궁금한 점은 카톡·메일로 먼저 여쭤봐요."],
    ["03", "맞춤 견적서 회신", "프로젝트에 맞춘 구성·범위·일정이 담긴 견적서를 보내드립니다. 고정가가 아니라 딱 필요한 만큼."],
    ["04", "제작 시작", "확정되면 바로 제작에 들어갑니다. 수정도 협의된 횟수 안에서 함께 맞춰갑니다."]
  ].map(([n, t, d]) => `<li class="estimate-step"><span class="estimate-step-no">${n}</span><div><strong>${t}</strong><p>${d}</p></div></li>`).join("");
  const factors = [
    ["제작 범위", "편수·길이·버전(자막/무자막/채널별 리사이즈) 수에 따라 달라집니다."],
    ["촬영 여부", "제주 현장 촬영·드론이 필요한지, 보유 자료만으로 가능한지에 따라 나뉩니다."],
    ["기획 깊이", "단순 편집인지, 콘셉트·시나리오 기획부터인지에 따라 구성이 달라집니다."],
    ["납기", "일반 일정인지 급한 일정인지에 따라 조정될 수 있습니다."],
    ["수정 횟수", "필요한 수정 라운드 수를 미리 협의해 반영합니다."],
    ["사용 범위", "SNS·광고·상업적 사용 범위에 따라 안내가 달라질 수 있습니다."]
  ].map(([t, d]) => `<div class="estimate-factor"><strong>${t}</strong><p>${d}</p></div>`).join("");
  return `
    ${nav()}
    <main id="main" class="estimate-page">
      <section class="section estimate-hero">
        <div class="estimate-hero-inner">
          <span class="section-statement" aria-hidden="true">QUOTE</span>
          <p class="section-kicker">견적 안내</p>
          <h1>맞춤 견적서로 회신드립니다</h1>
          <p class="estimate-lead">홈페이지에 고정 가격을 적어두지 않습니다. 보유 자료와 원하는 결과물만 보내주시면, 필요한 제작 범위를 확인해 프로젝트에 딱 맞는 견적서를 보내드립니다.</p>
          <div class="estimate-cta-row">
            <a class="btn primary" href="#estimate-form">견적 요청하기</a>
            ${kakaoUrl ? `<a class="btn secondary dark" href="${kakaoUrl}" target="_blank" rel="noopener">카카오톡으로 먼저 물어보기</a>` : ""}
          </div>
          <p class="estimate-trust">평균 1시간 내 응답 · 중간 수수료 없이 직접 거래 · 견적 무료</p>
        </div>
      </section>

      <section class="section estimate-proof">
        <div class="section-head"><div>
          <p class="section-kicker">Estimates</p>
          <h2>규모·업종별로, 맞춤 견적서를 드립니다</h2>
          <p class="section-sub">개인 소상공인부터 기관·기업까지 — 프로젝트마다 범위가 달라 정찰가 대신 맞춤 견적으로 안내합니다. 실제 견적서는 고객 정보 보호를 위해 흐리게 표시했습니다.</p>
        </div></div>
        <div class="estimate-wall-frame">
          <div class="estimate-wall" aria-hidden="true">${wall}</div>
          <div class="estimate-wall-cta"><a class="btn primary" href="#estimate-form">내 프로젝트 견적 받기</a></div>
        </div>
      </section>

      <section class="section estimate-how">
        <div class="section-head"><div>
          <p class="section-kicker">How it works</p>
          <h2>견적, 이렇게 나갑니다</h2>
        </div></div>
        <ol class="estimate-steps">${steps}</ol>
      </section>

      <section class="section estimate-factors-sec">
        <div class="section-head"><div>
          <p class="section-kicker">What affects the quote</p>
          <h2>견적에 영향을 주는 것</h2>
          <p class="section-sub">아래 조건에 따라 구성과 견적이 달라집니다. 자료 주시면 이 기준으로 정리해 드려요.</p>
        </div></div>
        <div class="estimate-factor-grid">${factors}</div>
      </section>

      <section class="section tight" id="estimate-form">
        <div class="cta-band has-form">
          <h2>견적 요청하기</h2>
          <p class="cta-note">보유 자료와 원하는 결과물만 적어주시면, 제작 범위·일정을 확인해 맞춤 견적서로 회신드립니다.</p>
          <p class="contact-trust">평균 1시간 내 응답 · 중간 수수료 없이 직접 거래 · 40+ 실제 제작 영상</p>
          ${quoteForm()}
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <a class="brand" href="${routeHref()}">${pic("symbol.png", { alt: "Video Roastery", loading: "lazy" })}<span>Video Roastery</span></a>
      <p>제주 촬영 중심 · 온라인 제작 전국 상담 · 문의 양식 우선 접수</p>
      <a href="${routeHref("privacy")}">개인정보처리방침</a>
    </footer>
  `;
}

function mainPage() {
  const main = {
    layout: "editorial",
    heroRich: true,
    heroGallery: true,
    // 2줄 마퀴 월 — 시네마틱 컷만. 항공 4개(22%)만: loop_01(마을드론)·drone_02(시설)·corp_08(팜)·loop_05(풍차해안).
    // Codex 반영: ai_05·video_01·loop_04 제외(항공 중복), 8/7 비대칭 길이로 반복주기 깸,
    // 항공 하위타입 분산 + 항공끼리 인접/정렬 회피 + wrap 끝단 비항공, 둘째줄 반칸 stagger.
    wallRows: [
      [
        ["hero_loops/loop_01.webp", "제주 드론", "hero_loops/loop_01.mp4"],
        ["hero_loops/loop_06.webp", "제품·푸드", "hero_loops/loop_06.mp4"],
        ["portfolio_covers/drone_02.webp", "시설 항공"],
        ["portfolio_covers/content_05.webp", "제품 컷"],
        ["hero_loops/loop_07.webp", "제품 광고", "hero_loops/loop_07.mp4"],
        ["hero_loops/loop_05.webp", "해안 항공", "hero_loops/loop_05.mp4"],
        ["hero_loops/loop_08.webp", "시네마틱", "hero_loops/loop_08.mp4"]
      ],
      [
        ["hero_loops/loop_02.webp", "웨딩 영상", "hero_loops/loop_02.mp4"],
        ["portfolio_covers/corp_03.webp", "기업 영상"],
        ["portfolio_covers/wedding_01.webp", "웨딩"],
        ["hero_loops/loop_03.webp", "기업 영상", "hero_loops/loop_03.mp4"],
        ["portfolio_covers/wedding_03.webp", "웨딩"],
        ["portfolio_covers/ai_nadaum_case.webp", "AI 캠페인"],
        ["portfolio_covers/wedding_02.webp", "웨딩"]
      ]
    ],
    badge: "Video Roastery",
    kicker: "제주 영상제작 · 전국 AI 숏폼",
    title: "보기만 하던 방문자를,<br>문의로 바꿉니다.",
    lead: "작업물을 먼저 보고, 필요한 제작만 고르세요. 제주는 현장 촬영·드론으로, 전국은 촬영 없이 AI 숏폼으로 — 자료만 보내주시면 맞춤 견적서로 회신드립니다.",
    heroVideo: "live_hero.mp4",
    heroImage: "logo.png",
    cta: "견적 문의",
    primaryHref: "estimate",
    secondaryCta: "작업 사례 보기",
    secondaryHref: "#portfolio-hub",
    trustItems: ["제주 현장 촬영 가능", "전국 온라인 제작 상담", "작업 범위 확인 후 진행"],
    showcase: [
      ["portfolio_drone_night_exterior_clean.jpg", "야간 외관"],
      ["portfolio_web_regional_brand.png", "브랜드 화면"],
      ["portfolio_drone_resort_facility.jpg", "공간 촬영"],
      ["portfolio_content_reels_page.jpg", "릴스 영상"],
      ["portfolio_content_product.jpg", "제품 콘텐츠"],
      ["portfolio_automation_homepage_flow.jpg", "상담형 홈페이지"]
    ]
  };
  const mainInquiryHref = mailtoHref({ slug: "main", nav: "전체 제작 상담" });
  // 홈은 '맛보기' — 엄선 12장 단일 쇼케이스. 두 개로 나뉘어 중복되던 포트폴리오 월을 하나로 통합.
  // 전체 카탈로그는 각 서비스 상세페이지에 그대로 있음(손실 없음).
  // 랜딩 쇼케이스: 썸네일·영상이 전부 고유하고 모두 재생되는 실제 작업물 12개를 명시적으로 큐레이션
  // (이전엔 first 12라 비슷한 웹 목업 썸네일이 중복돼 보였음 → 신뢰도 위해 고유 작업물로 교체)
  const homeFeatured = [
    "portfolio_covers/drone_06.jpg",          // 풍차해안 석양 항공(시그니처 드론)
    "portfolio_covers/ai_nadaum.jpg",         // LG U+ 나다움(AI 브랜드 캠페인)
    "portfolio_covers/content_04.jpg",        // 벨롱벨롱 디저트카페 릴스
    "portfolio_covers/video_03.jpg",          // ESG 바다 메시지(돌고래 브랜드필름)
    "portfolio_covers/ai_saemangeum.jpg",     // 새만금 시네마틱
    "portfolio_covers/corp_08.jpg",           // 모루농장 브랜드영상
    "portfolio_drone_village_overview.jpg",   // 제주 마을 전경 항공
    "portfolio_covers/ai_kombucha.jpg",       // 작심랩 콤부차 DTC
    "portfolio_covers/corp_07.jpg",           // 지역상생 RISE 포럼
    "portfolio_covers/drone_02.jpg",          // 태양광 시설 석양 항공
    "portfolio_covers/corp_02.jpg",           // 마크애니 TOSS(IT 서비스)
    "portfolio_covers/ai_game_ua.jpg"         // 블라이트워 게임 UA
  ];
  const homeWallItems = homeFeatured
    .map((img) => portfolioWallItems.find((item) => item.image === img))
    .filter(Boolean);
  // 위계: 시그니처 대표작을 2x2 피처 타일로(그리드 덤프 → 편집형 쇼케이스)
  if (homeWallItems[0]) homeWallItems[0] = { ...homeWallItems[0], size: "large" };
  return `
    ${nav()}
    ${hero(main)}
    <main id="main">
      <section class="section" id="portfolio-hub">
        <div class="section-head">
          <div>
            <span class="section-statement" aria-hidden="true">WORK</span>
            <h2 class="h2-en">Selected Work</h2>
          </div>
        </div>
        <ul class="proof-bar" aria-label="실적 요약">
          <li><strong>40+</strong><span>실제 제작 영상</span></li>
          <li><strong>10곳</strong><span>운영 중 라이브 사이트</span></li>
          <li><strong>8</strong><span>제작 분야</span></li>
          <li><strong>전국</strong><span>온라인 제작 상담</span></li>
        </ul>
        ${portfolioWall(homeWallItems, "featured-wall")}
      </section>
      <section class="section" id="cases">
        <div class="section-head">
          <div>
            <span class="section-statement" aria-hidden="true">STORY</span>
            <h2 class="h2-en">Case Studies</h2>
          </div>
        </div>
        <div class="case-modern">
          ${caseStudies.map((c) => `
            <article class="case-m">
              <a class="case-m-media" href="${routeHref(c.slug)}">
                ${pic(c.cover, { cls: "case-m-img", alt: "" })}
                <span class="case-m-name">${c.client}</span>
              </a>
              <div class="case-m-cap">
                <span class="case-m-tag">${c.tag}</span>
                <p class="case-m-line">${c.hook}</p>
                <a class="case-m-more" href="${routeHref(c.slug)}">See More <span aria-hidden="true">→</span></a>
              </div>
            </article>`).join("")}
        </div>
      </section>
      <section class="section tight" id="clients">
        <div class="section-head">
          <div>
            <span class="section-statement" aria-hidden="true">CLIENTS</span>
            <h2 class="h2-en">Clients &amp; Partners</h2>
            <p class="section-sub">실제 촬영·영상·웹 제작으로 함께한 곳들입니다.</p>
          </div>
        </div>
        <ul class="client-logos" aria-label="대표 협력 로고">
          <li>${pic("logos/lg_uplus.png", { alt: "LG U+" })}</li>
          <li>${pic("logos/make_a_wish.png", { alt: "Make-A-Wish" })}</li>
          <li>${pic("logos/lions.png", { alt: "국제라이온스클럽" })}</li>
        </ul>
        <ul class="client-strip" aria-label="함께한 클라이언트">
          ${["LG U+","대한결핵협회","마크애니","Make-A-Wish","제주특별자치도교육청","국제라이온스클럽","라이즈센터 RISE","한국마사회 렛츠런파크","리치디바인","모루농장","토버스 SUMBI","삼대국수회관","벨롱벨롱","페를로","작심랩","산지로","pawshare"].map((c) => `<li>${c}</li>`).join("")}
        </ul>
        <p class="client-sub-label">AI 브랜드 필름 작업 (참고용)</p>
        <ul class="client-strip ai-brands" aria-label="AI 브랜드 작업">
          ${["KINETIA","그린로하스","블라이트워","새만금","MOTONICA","AURELIA LUNA","S-OIL 에너지"].map((c) => `<li>${c}</li>`).join("")}
        </ul>
        <ul class="trust-badges" aria-label="제작 신뢰 지표">
          ${["실제 제작 영상 40+","운영 중 라이브 사이트 10곳","대기업·기관 협업","공공기관·공익 캠페인","제주 현장 촬영·4K 드론","AI 숏폼·브랜드필름","홈페이지 기획·개발","전국 온라인 제작"].map((b) => `<li>${b}</li>`).join("")}
        </ul>
        <p class="client-note">* 로고는 각 브랜드 상표이며, 실제 제작·납품 프로젝트 및 AI 브랜드 필름 작업 기준으로 표기했습니다.</p>
      </section>
      <section class="section" id="services">
        <div class="section-head">
          <div>
            <span class="section-statement" aria-hidden="true">SERVICES</span>
            <h2 class="h2-en">Services</h2>
          </div>
        </div>
        <div class="route-grid core-grid">
          ${coreRoutes.map(routeCard).join("")}
        </div>
        <div class="support-grid" aria-label="추가 상담 가능 분야">
          ${supportRoutes.map((route) => `
            <a class="support-card" href="${routeHref(route.slug)}">
              ${pic(routeCardImages[route.slug] || route.heroImage, { alt: route.nav + " 추가 사례" })}
              <span>${routeLabels[route.slug]?.[1] || route.nav}</span>
            </a>
          `).join("")}
        </div>
      </section>
      <section class="section" id="pricing">
        <div class="section-head">
          <div>
            <span class="section-statement" aria-hidden="true">PRICING</span>
            <h2 class="h2-en">Packages</h2>
            <p class="section-sub">보유 자료와 제작 범위에 따라 구성을 조합합니다. 자료만 보내주시면 범위를 확인해 견적서로 안내합니다.</p>
          </div>
        </div>
        <div class="pricing-grid">
          ${pricingGroups.map((g) => `
            <div class="price-card">
              <div class="price-card-media">${pic(routeCardImages[g.slug] || (routeBySlug[g.slug] && routeBySlug[g.slug].heroImage), { cls: "price-card-img", alt: "" })}</div>
              <div class="price-card-body">
                <h3>${g.name}</h3>
                <ul>
                  ${g.tiers.map((t) => `<li><span class="tier">${t.tier}</span><span class="inc">${t.inc}</span></li>`).join("")}
                </ul>
                <a class="price-link" href="${routeHref(g.slug)}">${g.name} 사례·견적 요청 →</a>
              </div>
            </div>`).join("")}
        </div>
        <p class="client-note">* 정확한 견적은 보유 자료·제작 범위를 확인한 뒤 견적서로 보내드립니다.</p>
      </section>
      ${faqSection(main)}
      <section class="section tight" id="contact">
        <div class="cta-band">
          <h2 class="h2-en">Get a Quote</h2>
          <p class="cta-note">보유 자료와 원하는 결과물만 보내주시면, 제작 범위를 확인해 맞춤 견적서로 회신드립니다. 고정가는 없습니다.</p>
          <div class="contact-actions single">
            <a class="btn primary" href="${routeHref("estimate")}">견적 안내 보기</a>
            ${kakaoUrl ? `<a class="btn kakao-btn" href="${kakaoUrl}" target="_blank" rel="noopener">💬 카카오톡 문의</a>` : ""}
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
      ${pic(cardImage, { alt: route.nav + " 대표 이미지" })}
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
  // 영상/사이트가 연결된 칸을 앞으로 정렬 → 상단 오버뷰 3칸이 항상 재생/클릭되는 사례가 되도록
  return portfolioWallItems
    .filter((item) => item.slug === route.slug)
    .sort((a, b) => (portfolioMedia[b.image] ? 1 : 0) - (portfolioMedia[a.image] ? 1 : 0));
}

function portfolioWall(items, className = "", staticMode = false) {
  const wallClass = ["portfolio-wall", className].filter(Boolean).join(" ");
  return `
    <div class="${wallClass}">
      ${items.map((item) => portfolioCard(item, staticMode)).join("")}
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
  // 13. NETIA 제품 광고 컷 — 실제 VR 제품 광고(NETIA 코스메틱, 창가 연출) 웹최적화(30s, 16:9)
  "portfolio_covers/video_06.jpg": "portfolio_videos/product_board_reel_13.mp4",
  // 14. 푸드 브랜드 영상 — 외장하드 페를로(PERLO) 파스타 음식 프로모 재편집(22s, 16:9, 오디오)
  // 15. 정원 탑뷰 컷 — 실제 제주 해안 정원 항공(wind1947, 회전 transpose 보정) 웹최적화(28s, 16:9)
  "portfolio_drone_topdown_garden.jpg": "portfolio_videos/garden_reel_15.mp4",
  // 16. 시설 동선 컷 — 실제 제주 항공(농장·시설 도로 + 리조트 시설) 다른 구간 2컷(16s, 16:9)
  "portfolio_drone_facility_route_clean.jpg": "portfolio_videos/facility_route_reel_16.mp4",
  // 17. 농장 전경 컷 — 외장하드 '농약' 프로젝트 실제 제주 농장 항공(서귀포 비닐하우스 단지, 4K) 웹최적화(23s, 16:9)
  "portfolio_drone_farm_field.jpg": "portfolio_videos/farm_field_reel_17.mp4",
  // 18. 해안 들녘 컷 — 외장하드 '농약' 제주 해안·들녘·풍력 4K 항공(해안+농지+마을이 보여 '해안 들녘'에 적합) 웹최적화(13s, 16:9)
  "portfolio_drone_coast_field.jpg": "portfolio_videos/coast_field_reel_18.mp4",
  // 19. 건물 외관 컷 — 외장하드 '국립제주교육박물관' 옥외정원 영상(건물·정원 항공, 인물無, VR 자체작) 재편집(18s, 16:9)
  "portfolio_drone_grid_supplement.jpg": "portfolio_videos/building_reel_19.mp4",
  // 20. 시설 진입 항공 컷 — 외장하드 '라온힐조' 협재해변 리조트·해안마을 4K 항공(시설+진입로) 재편집(20s, 16:9)
  "portfolio_drone_facility_route.jpg": "portfolio_videos/resort_reel_20.mp4",
  // 21. 항공 영상 컷 — 외장하드 '수망' 가을 숲·계곡 드론 2컷(기존 해안/농장과 다른 분위기) 재편집(18s, 16:9)
  "portfolio_covers/drone_01.jpg": "portfolio_videos/aerial_reel_21.mp4",
  // 22. 와이드 항공 컷 — 외장하드 '제주외고' 해안 establishing 4K 항공(긴 백사장 와이드) 재편집(22s, 16:9)
  "portfolio_covers/drone_05.jpg": "portfolio_videos/wide_aerial_reel_22.mp4",
  // 23. 농장 항공 컷 — 외장하드 '제주우유' 목초지·젖소 5K 항공(녹색 목장이 '농장 항공'에 적합) 재편집(20s, 16:9)
  "portfolio_covers/drone_04.jpg": "portfolio_videos/farm_pasture_reel_23.mp4",
  // 24. 시설 항공 컷 — 외장하드 '모비' 태양광 발전시설 석양 항공(대규모 시설이 '시설 항공'에 적합) 재편집(20s, 16:9)
  "portfolio_covers/drone_02.jpg": "portfolio_videos/facility_solar_reel_24.mp4",
  // 25. 영상 썸네일 컷 — 외장하드 '모비' 제주 신창 풍차해안 석양 시네마틱 항공(시네마틱 컷이라 '영상 썸네일'에 적합) 재편집(20s, 16:9)
  "portfolio_covers/drone_06.jpg": "portfolio_videos/cinematic_reel_25.mp4",
  // 26~28. 기업영상 칸 신규 추가(외장하드 납품본) — brand-film 페이지에 더 보여주기
  "portfolio_covers/corp_01.jpg": "portfolio_videos/corp_reel_26.mp4",  // 대한결핵협회 공익 캠페인(40s 홍보영상, 오디오)
  "portfolio_covers/corp_02.jpg": "portfolio_videos/corp_reel_27.mp4",  // 마크애니 TOSS 시연(IT 서비스, 오디오)
  "portfolio_covers/corp_03.jpg": "portfolio_videos/corp_reel_28.mp4",  // 메이크어위시(비영리·행사, 오디오)
  // 29~31. 기업영상 칸 추가(2차)
  "portfolio_covers/corp_04.jpg": "portfolio_videos/corp_reel_29.mp4",  // 도교육청 청렴릴레이(공공기관 캠페인)
  "portfolio_covers/corp_05.jpg": "portfolio_videos/corp_reel_30.mp4",  // 라이온스클럽 행사 스케치
  "portfolio_covers/corp_06.jpg": "portfolio_videos/corp_reel_31.mp4",  // 리치디바인 기업 인터뷰
  // 32~34. 기업영상 칸 추가(3차)
  "portfolio_covers/corp_07.jpg": "portfolio_videos/corp_reel_32.mp4",  // 라이즈센터 RISE 포럼 스케치
  "portfolio_covers/corp_08.jpg": "portfolio_videos/corp_reel_33.mp4",  // 모루농장 브랜드영상(제주 오름/농장)
  "portfolio_covers/corp_09.jpg": "portfolio_videos/corp_reel_34.mp4",  // 렛츠런파크 레클리스 기념관(세로)
  // ===== 홈페이지 포폴 칸 → 실제 라이브 사이트 연결(클릭 시 새 탭) =====
  "portfolio_web_regional_brand.png": "https://shimmering-sunburst-27f1cd.netlify.app",      // 지역 브랜드형 → 제주 로컬 브랜드 30일 런치
  "portfolio_web_beamish.png": "https://beamish-mooncake-b11a21.netlify.app",                // 영상 제작 랜딩 → 품질엘리베이터(당신의 영상을)
  "portfolio_web_shortform_a.png": "https://vr-canada.netlify.app",                          // 숏폼 제작 → VR Shortform Vancouver
  "portfolio_web_ai_ops.png": "https://tourmaline-dodol-4f6381.netlify.app",                  // AI 업무 → 품질엘리베이터(오늘 뭐 올리지)
  "portfolio_covers/web_01.jpg": "https://pawshare-app.vercel.app",                          // 서비스 소개 → pawshare 앱
  "portfolio_covers/web_03.jpg": "https://fascinating-duckanoo-906886.netlify.app",         // 브랜드 제품 → From a Single Drop
  "pawshare_landing.png": "https://pawshare-landing.vercel.app",                             // 커뮤니티 → pawshare 랜딩
  // 미사용 실제 사이트 신규 칸(메인컷 대신 스크롤 구간 캡처)
  "portfolio_covers/site_artist.jpg": "https://seo-hyeong-artist.netlify.app",                // 아티스트 음악 페이지
  "portfolio_covers/site_sanjiro.jpg": "https://sanjiroweb.vercel.app",                       // 농장 결제 플랫폼
  "portfolio_covers/site_muscle.jpg": "https://muscle-booster.vercel.app",                    // 피트니스 운동 앱
  // 보완: 콘텐츠 페이지 칸 → 어울리는 영상 연결
  "portfolio_covers/content_04.jpg": "portfolio_videos/content_reel_36.mp4",                   // 숏폼 소재 컷 → 벨롱벨롱 디저트카페 세로 몽타주
  "portfolio_covers/content_01.jpg": "portfolio_videos/content_reel_37.mp4",                   // 제품 상세 컷 → 토버스 SUMBI Mist 화장품 숏폼(4K세로)
  "portfolio_covers/content_03.jpg": "portfolio_videos/food_promo_reel_35.mp4",                // 음식 브랜드 릴스 → 페를로 파스타(콘텐츠로 이동)
  "portfolio_covers/content_05.jpg": "portfolio_videos/shortform_reel_40.mp4",                 // 식당 홍보 릴스 → 태백산 고깃집(콘텐츠로 이동)
  "portfolio_covers/ai_03.jpg": "portfolio_videos/ai_reel_47.mp4",                            // AI 제품 광고 숏폼(KINETIA supplement)
  "portfolio_covers/ai_esg_future.jpg": "portfolio_videos/ai_esg_future_reel.mp4",            // AI ESG 메시지 영상(그린로하스 미래세대 ESG, 곶자왈 유리돌고래)
  "portfolio_covers/ai_superwater.jpg": "portfolio_videos/ai_superwater_reel.mp4",            // AI 건강음료 숏폼(작심랩 슈퍼워터 키네틱, 크몽 납품)
  "portfolio_covers/ai_lemondiet.jpg": "portfolio_videos/ai_lemondiet_reel.mp4",              // AI 다이어트 보충제 숏폼(알파레몬샷 NUTRICWELL, 크몽 납품)
  "portfolio_covers/ai_kombucha.jpg": "portfolio_videos/ai_kombucha_reel.mp4",                // AI 콤부차 제품 릴스(작심랩 콤부차 DTC, 클린본)
  "portfolio_covers/ai_game_ua.jpg": "portfolio_videos/ai_game_ua_reel.mp4",                  // AI 게임 광고(블라이트워 게임 UA, 히든몬스터)
  "portfolio_covers/ai_nadaum.jpg": "portfolio_videos/ai_nadaum_reel.mp4",                    // AI 브랜드 캠페인(유쓰쇼츠 나다움, LG U+)
  "portfolio_covers/ai_saemangeum.jpg": "portfolio_videos/ai_saemangeum_reel.mp4",            // AI 재생에너지 영상(새만금 공모전)
  "portfolio_covers/ai_esg_wind.jpg": "portfolio_videos/ai_esg_wind_reel.mp4",                // AI ESG 캠페인(그린로하스 ESG 공모전, PlasticToWind)
  "portfolio_wedding_studio_mood.jpg": "portfolio_videos/wedding_reel_42.mp4",                 // 실내 무드 컷 → 웨딩 무드(드레스·스튜디오·꽃·귀걸이, 초상권안전)
  "portfolio_covers/wedding_01.jpg": "portfolio_videos/wedding_reel_43.mp4",                   // 제주 웨딩 스냅 → 해변·드론(초상권안전)
  "portfolio_covers/content_02.jpg": "portfolio_videos/content_reel_38.mp4",                   // 제품 과정 컷 → 삼대국수(三代국수회관) 조리 과정(실제 납품본)
  "portfolio_drone_farm_terrace.jpg": "portfolio_videos/drone_reel_41.mp4"                      // 농업 방제 드론 컷 → 농약 아그로드론 옥수수밭 방제(4K)
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

function portfolioCard(item, staticMode = false) {
  const link = portfolioLink(item);
  const sizeClass = item.size ? ` is-${item.size}` : "";
  let href = item.slug ? routeHref(item.slug) : "#portfolio-hub";
  let linkAttr = "";
  let extraAttr = "";
  let badge = "";
  if (link && link.type === "video") {
    linkAttr = ` data-video="${link.src}" aria-haspopup="dialog"`;
    badge = `<span class="portfolio-play" aria-hidden="true"></span>`;
  } else if (link && link.type === "site") {
    href = link.href; // 실제 라이브 사이트로 직접(가운데클릭·링크복사·JS-off·스크린리더 정상)
    linkAttr = ` data-site="${link.href}"`;
    extraAttr = ` target="_blank" rel="noopener"`;
    badge = `<span class="portfolio-open">사이트 열기 ↗</span>`;
  }
  const inner = `
      ${pic(item.image, { alt: "Video Roastery " + item.label + " 제작 사례 — " + item.title })}
      ${badge}
      <span class="portfolio-meta">
        <small>${item.label}</small>
        <strong>${item.title}</strong>
      </span>`;
  // 연결된 영상/사이트가 없고 정적 모드(전부 화면 예시인 페이지)면 클릭 안 되는 figure로 렌더(오해 방지)
  if (staticMode && !link) {
    return `<figure class="portfolio-item is-static${sizeClass}" data-category="${item.category}">${inner}</figure>`;
  }
  return `
    <a class="portfolio-item${sizeClass}" href="${href}"${extraAttr} data-category="${item.category}"${linkAttr}>${inner}</a>
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
          <h2 class="h2-en">${detail.kicker}</h2>
          <p class="detail-lead-title">${detail.title}</p>
          <p>${detail.lead}</p>
        </div>
        <div class="detail-window-grid" aria-label="${route.nav} 세부 창 구성">
          ${detail.windows.map(([num, title, body], index) => {
            const visual = overviewImages[index];
            return `
            <article class="detail-window">
              ${visual ? (() => {
                const vImg = pic(visual.image, { cls: "detail-window-visual", alt: visual.title });
                const vLink = portfolioLink(visual);
                if (vLink && vLink.type === "site") {
                  return `<a class="detail-window-link" href="${vLink.href}" target="_blank" rel="noopener">${vImg}<span class="portfolio-open" aria-hidden="true">사이트 열기 ↗</span></a>`;
                }
                if (vLink && vLink.type === "video") {
                  return `<button type="button" class="detail-window-link detail-window-video" data-video="${vLink.src}" aria-label="${visual.title} 영상 재생">${vImg}<span class="portfolio-play" aria-hidden="true"></span></button>`;
                }
                return vImg;
              })() : ""}
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
          <h2 class="h2-en">Project Check</h2>
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
          <h2 class="h2-en">Related Work</h2>
        </div>
      </div>
      <div class="related-strip">
        ${related.map((item) => `
          <a class="related-card" href="${routeHref(item.slug)}">
            ${pic(routeCardImages[item.slug] || item.heroImage, { alt: item.nav + " 관련 작업" })}
            <span>${routeLabels[item.slug]?.[1] || item.nav}</span>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

// 컨설팅 페이지 전용 사전 질문지(10문항). 제출 시 작성 내용이 담긴 메일이 열림(기존 메일 문의 방식과 동일).
const consultEmail = "kiwee1223@gmail.com";
// 카카오 채널 상담 URL — 채널 주소 넣으면 견적폼 옆 '카톡 문의' 버튼이 자동 노출됨 (예: https://pf.kakao.com/_xxxx/chat)
const kakaoUrl = "https://open.kakao.com/o/sqp6y8Bi";
// 5번째 값 true = 필수 항목(빈 제출 방지)
const consultQuestions = [
  ["q1", "1. 현재 운영 중인 홈페이지/SNS 주소 (없으면 비워두세요)", "url", "https://"],
  ["q2", "2. 운영 중인 SNS 주소 (인스타·블로그·유튜브 등)", "text", "@계정 또는 링크"],
  ["q3", "3. 현재 가장 집중해서 판매하고 싶은 서비스", "text", "", true],
  ["q4", "4. 주요 고객층과 자주 들어오는 문의 내용", "textarea", ""],
  ["q5", "5. 지금까지 진행했던 홍보·마케팅 방식", "textarea", ""],
  ["q6", "6. 현재 마케팅에서 가장 고민되는 부분", "textarea", "", true],
  ["q7", "7. 반복적으로 시간이 많이 소요되는 업무", "textarea", ""],
  ["q8", "8. 참고하고 싶은 경쟁업체·홈페이지가 있다면 주소", "text", ""],
  ["q9", "9. 최근 문의량·유입 경로·광고 운영 여부 등", "textarea", ""],
  ["q10", "10. 회사·서비스 소개자료가 있다면 (링크 남기거나 메일에 파일 첨부)", "text", "링크 또는 '메일에 첨부 예정'"]
];

function consultForm() {
  const fields = consultQuestions.map(([name, label, type, placeholder, required]) => {
    const req = required ? " required" : "";
    const star = required ? ` <span class="req" aria-hidden="true">*</span>` : "";
    const control = type === "textarea"
      ? `<textarea id="${name}" name="${name}" rows="2" placeholder="${placeholder}"${req}></textarea>`
      : `<input id="${name}" type="${type === "url" ? "url" : "text"}" name="${name}" placeholder="${placeholder}"${req} />`;
    return `<div class="consult-field"><label for="${name}">${label}${star}</label>${control}</div>`;
  }).join("");
  return `
    <div class="consult-quick">
      <p><b>바쁘시면 3가지만 보내주세요</b> — 업종 · 지금 가장 큰 고민 · 희망 일정. 아래 자세한 질문지는 선택입니다.</p>
      <button type="button" class="btn secondary consult-quick-btn">3가지만으로 먼저 상담 메일 보내기</button>
    </div>
    <form class="consult-form" id="consult-form" aria-label="제작 상담 사전 질문지">
      ${fields}
      <button type="submit" class="btn primary">작성 내용으로 상담 메일 보내기</button>
      <button type="button" class="btn secondary consult-copy">메일이 안 열리면 내용 복사하기</button>
      <p class="consult-hint">제출하면 메일 앱이 열리고 작성 내용이 자동으로 담깁니다. 메일 앱이 없으면 ‘내용 복사하기’ 후 <b>${consultEmail}</b> 으로 보내주세요.</p>
    </form>
  `;
}

function setupConsultForm() {
  const form = document.querySelector("#consult-form");
  if (!form) return;
  const buildBody = () => {
    const lines = ["안녕하세요. AI 활용 컨설팅 사전 질문지 작성해 보냅니다.", ""];
    consultQuestions.forEach(([name, label]) => {
      const field = form.elements[name];
      const value = ((field && field.value) || "").trim();
      lines.push(label, `→ ${value || "(미작성)"}`, "");
    });
    lines.push(`작성 페이지: ${currentPageUrl({ slug: "consulting" })}`);
    return lines.join("\n");
  };
  const subject = "[Video Roastery] AI 활용 컨설팅 사전 질문지";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = `mailto:${consultEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildBody())}`;
  });
  // 메일 앱이 없는 환경 폴백: 작성 내용 클립보드 복사
  const copyBtn = form.querySelector(".consult-copy");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const text = `받는 사람: ${consultEmail}\n제목: ${subject}\n\n${buildBody()}`;
      const done = () => { copyBtn.textContent = "복사됨 ✓ — 메일에 붙여넣어 보내주세요"; };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => { window.prompt("아래 내용을 복사해 보내주세요:", text); });
      } else {
        window.prompt("아래 내용을 복사해 보내주세요:", text);
      }
    });
  }
  // 빠른 상담(3문항) — 짧은 본문으로 바로 메일
  const quickBtn = document.querySelector(".consult-quick-btn");
  if (quickBtn) {
    quickBtn.addEventListener("click", () => {
      const body = [
        "안녕하세요. 빠른 상담 문의드립니다.",
        "",
        "1. 업종 / 서비스:",
        "2. 지금 가장 큰 고민:",
        "3. 희망 일정:",
        "",
        `작성 페이지: ${currentPageUrl({ slug: "consulting" })}`
      ].join("\n");
      window.location.href = `mailto:${consultEmail}?subject=${encodeURIComponent("[Video Roastery] 빠른 상담 문의")}&body=${encodeURIComponent(body)}`;
    });
  }
}

// 견적 요청 폼 — 자료·범위 받아 맞춤 견적서 발송 흐름(금액 미노출)
const quoteQuestions = [
  ["qn_name", "이름 / 업체명", "text", "김민지 / 제주 ○○카페", true],
  ["qn_contact", "연락처 (전화 또는 이메일)", "text", "010-0000-0000 또는 email@example.com", true],
  ["qn_service", "필요한 제작", "text", "AI 숏폼 / 드론 / 기업영상 / 홈페이지 등", true],
  ["qn_reference", "참고 영상 링크 (있으면 견적이 빨라져요)", "text", "예: 유튜브·릴스 URL, 원하는 스타일 영상"],
  ["qn_assets", "보유 자료", "text", "제품 사진 있음 / 기존 영상 있음 / 자료 없음"],
  ["qn_plan", "희망 일정 · 예산대", "text", "예: 8월 초 납품 / 예산 100만원대·미정"],
  ["qn_message", "문의 내용", "textarea", "예: 제품 사진으로 릴스 4편 제작 가능할까요?", true]
];

function quoteForm() {
  const fields = quoteQuestions.map(([name, label, type, placeholder, required]) => {
    const req = required ? " required" : "";
    const star = required ? ` <span class="req" aria-hidden="true">*</span>` : "";
    const control = type === "textarea"
      ? `<textarea id="${name}" name="${name}" rows="2" placeholder="${placeholder}"${req}></textarea>`
      : `<input id="${name}" type="text" name="${name}" placeholder="${placeholder}"${req} />`;
    return `<div class="consult-field"><label for="${name}">${label}${star}</label>${control}</div>`;
  }).join("");
  return `
    <form class="consult-form quote-form" id="quote-form" aria-label="제작 견적 요청">
      ${fields}
      <button type="submit" class="btn primary">견적 요청 보내기</button>
      <button type="button" class="btn secondary quote-copy">메일이 안 열리면 내용 복사하기</button>
      <p class="consult-hint">제출하면 메일 앱이 열리고 작성 내용이 자동으로 담깁니다. 보유 자료(사진·영상)는 메일에 첨부하거나 링크로 보내주세요. 확인 후 맞춤 견적서로 회신드립니다.</p>
    </form>
  `;
}

function setupQuoteForm() {
  const form = document.querySelector("#quote-form");
  if (!form) return;
  const buildBody = () => {
    const lines = ["안녕하세요. 제작 견적 요청드립니다.", ""];
    quoteQuestions.forEach(([name, label]) => {
      const field = form.elements[name];
      const value = ((field && field.value) || "").trim();
      lines.push(label, `→ ${value || "(미작성)"}`, "");
    });
    // 유입 경로 요약(일반 mailto와 동일하게) — 어느 페이지·경로에서 온 문의인지 파악용
    lines.push("──────────", `페이지: ${currentPageUrl({ slug: "main" })}`);
    const tracking = trackingSummary();
    if (tracking) lines.push(`유입: ${tracking}`);
    return lines.join("\n");
  };
  const subject = "[Video Roastery] 제작 견적 요청";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = `mailto:${consultEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildBody())}`;
  });
  const copyBtn = form.querySelector(".quote-copy");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const text = `받는 사람: ${consultEmail}\n제목: ${subject}\n\n${buildBody()}`;
      const done = () => { copyBtn.textContent = "복사됨 ✓ — 메일에 붙여넣어 보내주세요"; };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => { window.prompt("아래 내용을 복사해 보내주세요:", text); });
      } else {
        window.prompt("아래 내용을 복사해 보내주세요:", text);
      }
    });
  }
}

// 자주 묻는 질문(전 서비스 공통) — 예산/기간/리스크 답을 먼저 줘 문의 망설임을 줄임
const faqItems = [
  ["제작 기간은 얼마나 걸리나요?", "분량과 범위에 따라 보통 1~4주입니다. 보유 자료를 확인한 뒤 정확한 일정을 먼저 안내드립니다."],
  ["비용은 어떻게 책정되나요?", "홈페이지에 금액을 일괄 표기하지 않고, 보유 자료와 제작 범위를 확인한 뒤 맞춤 견적서로 안내합니다. 예산 범위를 알려주시면 가능한 구성과 제외할 항목을 함께 정리해 회신합니다."],
  ["영상 상업적 사용권은 어떻게 되나요?", "납품 영상은 상담 때 정한 범위 안에서 광고·홈페이지·SNS 등에 사용할 수 있게 안내합니다. 음악·스톡·AI 생성물의 사용 범위가 있으면 계약 전에 먼저 확인합니다."],
  ["촬영 없이 AI 숏폼만 제작 가능한가요?", "가능합니다. 제품 사진·기존 영상·로고·핵심 문구만 있어도 릴스·쇼츠용 AI 숏폼으로 구성합니다. 자료가 부족하면 필요한 사진 기준을 먼저 안내드립니다."],
  ["수정은 가능한가요?", "합의된 범위 안에서 수정이 포함됩니다. 톤·문구·구성을 먼저 확정하고 제작해 큰 수정이 생기지 않도록 진행합니다."],
  ["어떻게 시작하나요?", "원하는 결과물, 보유 자료, 희망 일정만 적어 보내주시면 작업 가능 범위와 다음 단계를 회신드립니다. 계약 전 상담은 부담 없습니다."],
  ["제주 외 지역도 가능한가요?", "홈페이지·영상·콘텐츠 제작은 전국 온라인으로 진행합니다. 현장 촬영·드론은 일정과 지역을 협의해 진행합니다."]
];

// 서비스별 추가 FAQ — 각 페이지의 핵심 구매 불안을 직접 해소
const routeFaqExtra = {
  homepage: [["제작 후 수정과 관리도 가능한가요?", "런칭 후에도 문구·이미지 수정과 간단한 운영 관리를 이어서 도와드립니다. 관리 범위는 상담 때 함께 정합니다."]],
  "ai-shortform": [["촬영 없이 보유 자료만으로도 가능한가요?", "네. 제품 사진·기존 영상·콘셉트만 있어도 숏폼 광고 소재로 구성합니다. 추가 촬영이 필요하면 따로 안내드립니다."]],
  "brand-film": [["촬영 없이 보유 자료만으로도 가능한가요?", "네. 기존 영상·사진·로고 자료로도 구성 가능하며, 현장 촬영이 필요하면 일정을 협의합니다."]],
  drone: [["드론 촬영 허가·안전은 어떻게 처리하나요?", "비행 가능 구역과 허가 여부를 사전에 확인하고 안전 규정에 맞춰 촬영합니다. 지역·일정은 상담 때 함께 점검합니다."]],
  wedding: [["얼굴 노출이 부담스러운데 괜찮나요?", "디테일·실루엣·뒷모습 중심의 무드 편집으로 진행할 수 있습니다. 공개 범위를 먼저 협의합니다."]],
  content: [["꾸준한 콘텐츠 운영도 도와주나요?", "단건 제작뿐 아니라 카드뉴스·릴스 정기 운영 구성도 상담 가능합니다."]]
};

function faqSection(route) {
  return `
    <section class="section faq-section" id="faq" aria-label="${(route && route.nav) || "제작"} 자주 묻는 질문">
      <div class="section-head">
        <div>
          <h2 class="h2-en">FAQ</h2>
        </div>
      </div>
      <div class="faq-list">
        ${faqItems.concat((route && routeFaqExtra[route.slug]) || []).map(([q, a]) => `
          <details class="faq-item">
            <summary>${q}</summary>
            <p>${a}</p>
          </details>
        `).join("")}
      </div>
    </section>
  `;
}

function detailPage(route) {
  const inquiryHref = mailtoHref(route);
  // overview가 앞 3장을 쓰므로 포폴월은 그 다음 장부터 → 같은 페이지 내 중복 방지
  // 앞 3장은 오버뷰가 쓰므로 그 다음부터 전부 노출(상한 제거 → 타일 조용히 잘리지 않음)
  const routePortfolioItems = portfolioItemsForRoute(route).slice(3);
  if (routePortfolioItems[0]) routePortfolioItems[0] = { ...routePortfolioItems[0], size: "large" };
  // 이 페이지에 연결된 영상/사이트가 하나라도 있나(없으면 '화면 예시'로, 타일은 클릭 안 되는 정적 figure)
  const routeHasMedia = portfolioItemsForRoute(route).some((item) => portfolioLink(item));
  const detail = routeDetails[route.slug] || {
    kicker: route.nav.toUpperCase(),
    title: route.title,
    lead: route.lead,
    windows: route.proof.map(([title, body], index) => [String(index + 1).padStart(2, "0"), title, body]),
    checkpoints: route.proof.map(([title]) => title),
    related: displayRoutes.filter((item) => item.slug !== route.slug).slice(0, 3).map((item) => item.slug)
  };
  return `
    ${nav()}
    ${hero(route)}
    ${detailNavigation(route)}
    <main id="main">
      ${detailOverview(route, detail)}
      <section class="section" id="portfolio">
        <div class="section-head">
          <div>
            <h2 class="h2-en">${routeHasMedia ? "Selected Work" : "Preview"}</h2>
            <p class="section-sub">${routeHasMedia ? "▶ 영상은 바로 재생, 웹 작업은 실제 사이트로 열립니다." : "실제 진행 시 제작하는 화면 구성 예시입니다."}</p>
          </div>
        </div>
        ${portfolioWall(routePortfolioItems, "detail-wall", !routeHasMedia)}
      </section>
      ${route.slug === "ai-shortform" ? testimonialsSection() : ""}
      ${detailScope(route, detail)}
      ${relatedServices(route, detail)}
      ${faqSection(route)}
      <section class="section tight" id="contact">
        <div class="cta-band${route.slug === "consulting" ? " has-form" : " cta-dark"}">
          <h2 class="h2-en">Get in Touch</h2>
          ${route.slug === "consulting" ? `
          <p class="cta-note">아래 사전 질문지를 작성해 주시면, 제출 시 작성 내용이 담긴 메일이 열립니다. 보내주시면 검토 후 회신드립니다.</p>
          <p class="contact-trust">40+ 실제 제작 영상 · 10곳 운영 중 라이브 사이트 · 제주 현장 촬영 · 전국 온라인 상담</p>
          ${consultForm()}
          ` : `
          <p class="cta-note">원하는 결과물과 보유 자료만 적어주시면 제작 범위·일정을 회신합니다.</p>
          <p class="contact-trust">40+ 실제 제작 영상 · 10곳 운영 중 라이브 사이트 · 제주 현장 촬영 · 전국 온라인 상담</p>
          <div class="contact-actions single">
            <a class="btn primary" href="${inquiryHref}">${route.cta}</a>
          </div>
          <p class="contact-fallback">버튼을 눌러도 메일 앱이 안 열리면 <b>kiwee1223@gmail.com</b> 으로 <b>업종 · 원하는 결과물 · 희망 일정 · 예산 범위</b>만 보내주세요.</p>
          <a class="cta-textlink" href="#portfolio">사례를 확인하셨다면 지금 보유 자료만 보내주세요 →</a>
          `}
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
  const label = route.stickyLabel || "상담 메일 작성";
  const body = route.stickyBody || "보유 자료만 보내도 됩니다 · 가능 범위 먼저 회신";
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
    "1. 업종 / 서비스:",
    "2. 원하는 결과물:",
    "3. 목표 (문의 증가 / 예약 / 홍보 / 판매):",
    "4. 보유 자료:",
    "5. 희망 일정:",
    "6. 예산 범위:",
    "7. 참고 링크:",
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
    // 추적 파라미터(utm·fbclid 등) 제거 → 메일에 깔끔한 주소만(유입 경로는 별도 줄에 요약)
    return `${window.location.origin}${window.location.pathname}`;
  }
  return route.slug === "main" ? "https://videoroastery.com/" : `https://videoroastery.com/${route.slug}/`;
}

function footer() {
  return `
    <footer>
      <strong>Video Roastery</strong>
      <span>홈페이지·영상·촬영·자동화 제작 상담</span>
      <span>제주 촬영 중심 · 온라인 제작 전국 상담 · 문의 양식 우선 접수</span>
      <a href="${routeHref("privacy")}">개인정보처리방침</a>
    </footer>
  `;
}

function render() {
  const slug = currentSlug();
  const route = routeBySlug[slug];
  // 메인(no route) title/desc는 정적 index.html과 동일하게 유지(크롤러가 정적↔JS 불일치 보는 것 방지)
  const pageTitle = slug === "estimate" ? "견적 안내 | Video Roastery" : (route ? `${route.nav} | Video Roastery` : "문의로 이어지는 홈페이지·영상·콘텐츠 제작 | Video Roastery");
  const pageDesc = slug === "estimate" ? "고정 가격 대신 맞춤 견적서로 안내합니다. 보유 자료와 원하는 결과물만 보내주시면 제작 범위를 확인해 견적서를 회신합니다." : (route ? route.lead : "제주 촬영부터 전국 온라인 제작까지 — 홈페이지·영상·드론·AI 숏폼·콘텐츠를 실제 작업물 기준으로 상담하고, 보고 바로 문의로 이어지게 만듭니다.");
  const pageUrl = slug === "estimate" ? "https://videoroastery.com/estimate/" : (route ? `https://videoroastery.com/${route.slug}/` : "https://videoroastery.com/");
  document.title = pageTitle;
  for (const [selector, value] of [
    ['meta[name="description"]', pageDesc],
    ['meta[property="og:title"]', pageTitle],
    ['meta[property="og:description"]', pageDesc],
    ['meta[property="og:url"]', pageUrl],
    ['meta[name="twitter:title"]', pageTitle],
    ['meta[name="twitter:description"]', pageDesc]
  ]) {
    const el = document.querySelector(selector);
    if (el) el.setAttribute("content", value);
  }
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", pageUrl);
  document.querySelector("#app").innerHTML = slug === "estimate" ? estimatePage() : (route ? detailPage(route) : mainPage());
  setupStickyCta();
  setupPortfolioLightbox();
  setupConsultForm();
  setupQuoteForm();
  setupScrollReveal();
  setupHeroMotion();
  setupHeroWall();
}

// 메인 마퀴 영상월: 화면에 보이는 타일만, 동시재생 상한 내에서 무음 루프 재생.
// reduced-motion/Save-Data/모바일에서는 재생 억제(마퀴 정지는 CSS가 담당).
function setupHeroWall() {
  const wall = document.querySelector(".hero-wall");
  if (!wall) return;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 각 타일 이미지가 로드/디코드된 뒤 1회 리페인트 넛지. transform으로만 움직이는 합성 레이어는
  // 이미지가 늦게 로드돼도 크롬이 재래스터하지 않아 타일이 검게 남는다 → opacity 토글로 강제.
  // ── 마퀴(캐러셀): 타일을 각각 translateX로 이동하고, 화면 밖으로 나가면 반대편 끝으로 재배치.
  //    컨테이너(.hw-row)는 뷰포트 폭 + overflow:hidden이라 페인트 레이어가 작게 유지됨
  //    → 넓은 트랙을 통째로 움직일 때 화면 밖 이미지가 검게 렌더되는 크롬 버그를 근본 회피. ──
  if (!reduce) {
    const GAP = 10;
    const SPEED = 13; // px/s (Codex 권장 12~14, 더 시네마틱하게 하향)
    const setups = Array.prototype.slice.call(wall.querySelectorAll(".hw-row")).map((row) => {
      const dir = row.classList.contains("hw-row--right") ? 1 : -1; // 첫줄 좌로 흐름, 둘째줄 우로
      const tiles = Array.prototype.slice.call(row.querySelectorAll(".hw-tile"));
      const n = tiles.length;
      const measure = () => {
        const tw = tiles[0].getBoundingClientRect().width + GAP;
        return { tw, total: tw * n };
      };
      let { tw, total } = measure();
      const stagger = dir > 0 ? tw / 2 : 0; // 둘째줄만 반칸 밀어 벽돌쌓기 → 위아래 세로 컬럼 정렬 방지
      const xs = tiles.map((t, i) => i * tw + stagger);
      // 초기 위치 정규화: total-tw를 넘는 타일을 미리 왼쪽(-tw쪽)으로 감아, 로드 순간 좌측 끝 빈틈(컷 튐) 방지
      for (let i = 0; i < n; i++) {
        while (xs[i] >= total - tw) xs[i] -= total;
        while (xs[i] < -tw) xs[i] += total;
      }
      const apply = () => { for (let i = 0; i < n; i++) tiles[i].style.transform = "translateX(" + xs[i].toFixed(2) + "px)"; };
      apply();
      // 리사이즈 시 폭 재측정
      window.addEventListener("resize", () => { const m = measure(); tw = m.tw; total = m.total; }, { passive: true });
      return { tiles, n, xs, dir, apply, tw: () => tw, total: () => total };
    });
    let last = null;
    const frame = (ts) => {
      if (last == null) last = ts;
      const dt = Math.min((ts - last) / 1000, 0.05); last = ts;
      setups.forEach((s) => {
        const d = s.dir * SPEED * dt, total = s.total(), tw = s.tw();
        for (let i = 0; i < s.n; i++) {
          let x = s.xs[i] + d;
          if (x <= -tw) x += total;         // 왼쪽으로 완전히 나감 → 오른쪽 끝으로
          else if (x >= total - tw) x -= total; // 오른쪽으로 나감 → 왼쪽 끝으로
          s.xs[i] = x;
        }
        s.apply();
      });
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  const conn = navigator.connection || {};
  const saveData = !!conn.saveData;
  const w = window.innerWidth || 1024;
  let cap = w >= 1024 ? 4 : (w >= 640 ? 2 : 1);
  if (reduce || saveData) cap = 0;
  const tiles = Array.prototype.slice.call(wall.querySelectorAll("[data-loop]"));
  if (!cap || !tiles.length || !("IntersectionObserver" in window)) return;

  const active = new Set();
  const visible = new Set();
  const start = (fig) => {
    if (active.has(fig) || active.size >= cap) return;
    const v = fig.querySelector("video");
    if (!v) return;
    if (!v.getAttribute("src")) v.setAttribute("src", fig.dataset.loop);
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
    fig.classList.add("is-playing");
    active.add(fig);
  };
  const stop = (fig) => {
    if (!active.has(fig)) return;
    const v = fig.querySelector("video");
    if (v && v.pause) v.pause();
    fig.classList.remove("is-playing");
    active.delete(fig);
  };
  const fill = () => { visible.forEach((fig) => { if (active.size < cap) start(fig); }); };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) visible.add(e.target);
      else { visible.delete(e.target); stop(e.target); }
    });
    fill();
  }, { root: null, threshold: 0.6 });
  tiles.forEach((t) => io.observe(t));

  // 탭이 백그라운드였다가 다시 보일 때, 재생 중이던(active) 타일 영상 재개
  // (브라우저가 hidden 탭의 muted 영상을 일시정지 → 복귀 시 자동으로 안 살아나는 문제 대응)
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) return;
    active.forEach((fig) => {
      const v = fig.querySelector("video");
      if (v && v.paused) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
    });
  });
}

// 모션 최소화 선호 시 히어로 배경영상 자동재생 중지(접근성·배터리)
function setupHeroMotion() {
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) return;
  document.querySelectorAll(".hero video").forEach((v) => {
    v.removeAttribute("autoplay");
    if (v.pause) v.pause();
  });
}

// 포트폴리오 칸 클릭 → 실제 영상 라이트박스 재생 (사이트 타일은 네이티브 <a target=_blank>로 동작)
function setupPortfolioLightbox() {
  // 포폴 타일 + 오버뷰 영상 버튼(detail-window-video) 모두 포함
  const tiles = document.querySelectorAll("[data-video]");
  if (!tiles.length) return;
  let box = document.querySelector("#vr-lightbox");
  if (!box) {
    box = document.createElement("div");
    box.id = "vr-lightbox";
    box.className = "vr-lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "영상 미리보기");
    box.innerHTML = `
      <button class="vr-lightbox-close" type="button" aria-label="닫기">✕</button>
      <figure class="vr-lightbox-stage">
        <video controls playsinline preload="none"></video>
        <span class="vr-lightbox-spinner" aria-hidden="true"></span>
        <figcaption class="vr-lightbox-caption"><span class="vr-cap-label"></span><strong class="vr-cap-title"></strong></figcaption>
        <a class="vr-lightbox-fallback" target="_blank" rel="noopener" hidden>영상이 바로 안 열리면 새 창에서 보기 ↗</a>
      </figure>`;
    document.body.appendChild(box);
    const vEl = box.querySelector("video");
    const spinner = box.querySelector(".vr-lightbox-spinner");
    const fallback = box.querySelector(".vr-lightbox-fallback");
    vEl.addEventListener("waiting", () => box.classList.add("is-loading"));
    vEl.addEventListener("playing", () => box.classList.remove("is-loading"));
    vEl.addEventListener("canplay", () => box.classList.remove("is-loading"));
    vEl.addEventListener("error", () => { box.classList.remove("is-loading"); fallback.hidden = false; });
    const close = () => {
      box.classList.remove("is-open");
      const v = box.querySelector("video");
      v.pause();
      v.removeAttribute("src");
      v.removeAttribute("poster");
      v.load();
      // 포커스를 열었던 타일로 복원
      if (box.__trigger && box.__trigger.focus) box.__trigger.focus();
      box.__trigger = null;
    };
    box.addEventListener("click", (e) => {
      if (e.target === box || e.target.closest(".vr-lightbox-close")) close();
    });
    document.addEventListener("keydown", (e) => {
      if (!box.classList.contains("is-open")) return;
      if (e.key === "Escape") { close(); return; }
      // 포커스 트랩: 모달 안에서만 Tab 순환
      if (e.key === "Tab") {
        const focusable = box.querySelectorAll('button, video, [href], [tabindex]:not([tabindex="-1"])');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    box.__close = close;
  }
  tiles.forEach((tile) => {
    if (tile.__wired) return;
    tile.__wired = true;
    tile.addEventListener("click", (e) => {
      const video = tile.dataset.video;
      if (!video) return;
      e.preventDefault();
      box.__trigger = tile;
      const v = box.querySelector("video");
      const img = tile.querySelector("img");
      if (img && img.src) v.setAttribute("poster", img.src);
      else v.removeAttribute("poster");
      box.querySelector(".vr-cap-label").textContent = tile.querySelector(".portfolio-meta small")?.textContent || "";
      box.querySelector(".vr-cap-title").textContent = tile.querySelector(".portfolio-meta strong")?.textContent || (img && img.alt) || "";
      // 로딩/에러 폴백 상태 초기화 + 새 창 폴백 링크 설정
      const fb = box.querySelector(".vr-lightbox-fallback");
      if (fb) { fb.hidden = true; fb.href = video; }
      box.classList.add("is-open", "is-loading");
      v.src = video;
      // 모달 열리면 닫기 버튼으로 포커스 이동
      box.querySelector(".vr-lightbox-close").focus();
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
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

render();
