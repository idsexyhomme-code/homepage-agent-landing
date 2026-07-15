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
// 코어(VR 상업 영상·웹 제작 정체성) / 운영 지원 / 기록·추억(웨딩·리마인드=그 외 서비스)
const coreServiceSlugs = [
  "homepage",
  "brand-film",
  "ai-shortform",
  "drone",
  "content",
  "inquiry-agent"
];
const opsServiceSlugs = [
  "consulting"
];
const alsoServiceSlugs = [
  "wedding"
];
const serviceOrder = [
  ...coreServiceSlugs,
  ...opsServiceSlugs,
  ...alsoServiceSlugs
];
const displayRoutes = serviceOrder.map((slug) => routeBySlug[slug]).filter(Boolean);
const coreRoutes = coreServiceSlugs.map((slug) => routeBySlug[slug]).filter(Boolean);
const opsRoutes = opsServiceSlugs.map((slug) => routeBySlug[slug]).filter(Boolean);
const alsoRoutes = alsoServiceSlugs.map((slug) => routeBySlug[slug]).filter(Boolean);
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
  ["portfolio_covers/beauty.jpg", "video", "AD", "뷰티 브랜드 광고", "brand-film"],
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
  ["견적 안내", "estimate"],
  ["회사소개", "about"]
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

const imgMeta = {"card_wedding.jpg":[1080,1080],"portfolio_video_esg_brand.jpg":[1200,750],"og_main.jpg":[1200,630],"portfolio_drone_wedding_wide.jpg":[960,540],"portfolio_drone_coast_cliff.jpg":[1100,619],"portfolio_wedding_beach_privacy.jpg":[960,540],"portfolio_automation_examples.jpg":[1200,750],"portfolio_drone_farm_terrace.jpg":[1280,720],"portfolio_content_reels_page.jpg":[540,960],"portfolio_automation_task_flow.jpg":[1200,750],"profile_symbol.png":[428,428],"portfolio_video_corporate_main.jpg":[1200,750],"card_ai_shortform_photo.jpg":[1200,1200],"portfolio_drone_coast_field.jpg":[1100,619],"portfolio_wedding_bouquet_lens.jpg":[1200,750],"muscle_booster.png":[1710,875],"portfolio_drone_grid_supplement.jpg":[960,540],"portfolio_automation_homepage_flow.jpg":[1200,750],"portfolio_drone_night_exterior_clean.jpg":[1200,750],"apple-touch-icon.png":[180,180],"videoroastery.png":[1710,875],"card_inquiry_agent_photo.jpg":[1200,1200],"danggeun_ad_homepage_ai_1080.jpg":[1080,1080],"portfolio_drone_topdown_garden.jpg":[960,540],"portfolio_drone_coastal_overview_clean.jpg":[960,600],"portfolio_content_request_form.jpg":[1200,750],"card_homepage.jpg":[1080,1080],"card_rememory.jpg":[1080,1080],"portfolio_covers/ai_nadaum_case.webp":[720,470],"rememory_before.jpg":[780,1045],"rememory_after.jpg":[780,1045],"rememory_scene.jpg":[1600,1073],"og_brand_film.jpg":[1200,630],"portfolio_drone_coastal_overview.jpg":[1200,750],"logo.png":[512,512],"ai_service_landing.png":[1710,875],"route_plan_system.jpg":[1280,1024],"portfolio_wedding_studio_mood.jpg":[1280,720],"og_content.jpg":[1200,630],"portfolio_web_product_drop.png":[1710,875],"portfolio_web_shortform_a.png":[1710,875],"vr_canada.png":[1710,875],"portfolio_drone_farm_field.jpg":[960,540],"vibecoding_1.png":[1710,875],"portfolio_wedding_detail_sixcut.jpg":[960,540],"portfolio_automation_scope.jpg":[1200,750],"portfolio_web_shortform_b.png":[1710,875],"og_inquiry_agent.jpg":[1200,630],"card_consulting_photo.jpg":[1200,1200],"pawshare_landing.png":[1710,875],"vibecoding_2.png":[1710,875],"portfolio_drone_village_overview.jpg":[1100,619],"portfolio_drone_museum_exterior.jpg":[1200,750],"favicon.png":[64,64],"route_plan_mockups.jpg":[1280,1280],"og_drone.jpg":[1200,630],"og_ai_shortform.jpg":[1200,630],"og_homepage.jpg":[1200,630],"og_consulting.jpg":[1200,630],"portfolio_drone_facility_route_clean.jpg":[1200,470],"card_brand_film_photo.jpg":[1200,1200],"vibecoding_3.png":[1710,875],"portfolio_video_industrial_brand.jpg":[1200,750],"portfolio_content_product.jpg":[1200,750],"portfolio_drone_facility_route.jpg":[960,540],"portfolio_video_product_style.jpg":[1280,720],"symbol.png":[256,256],"portfolio_content_context.jpg":[1200,750],"portfolio_drone_resort_facility.jpg":[1200,750],"portfolio_video_shortform_main.jpg":[720,1280],"portfolio_content_ai_video.jpg":[1200,750],"portfolio_automation_portfolio.jpg":[1200,750],"portfolio_wedding_ring_detail.jpg":[1200,750],"portfolio_web_video_dark_v2.png":[1280,720],"og_wedding.jpg":[1200,630],"portfolio_web_ai_ops.png":[1710,875],"route_plan_actual.jpg":[1280,1252],"portfolio_automation_main.jpg":[1200,750],"portfolio_content_review.jpg":[1200,750],"route_plan_mobile.jpg":[789,1280],"portfolio_drone_night_exterior.jpg":[1200,750],"portfolio_web_beamish.png":[1710,875],"portfolio_web_regional_brand.png":[1710,875],"card_drone.jpg":[1080,1080],"portfolio_wedding_flower_detail.jpg":[1200,750],"portfolio_covers/drone_06.jpg":[1100,619],"portfolio_covers/beauty.jpg":[1280,720],"portfolio_covers/ai_aesop.jpg":[720,1290],"portfolio_covers/ai_kombucha.jpg":[640,1138],"portfolio_covers/automation_01.jpg":[1200,900],"portfolio_covers/content_05.jpg":[1280,720],"portfolio_covers/corp_03.jpg":[1280,720],"portfolio_covers/web_02.jpg":[1200,900],"portfolio_covers/video_04.jpg":[405,720],"portfolio_covers/wedding_06.jpg":[1200,900],"portfolio_covers/web_03.jpg":[1200,900],"portfolio_covers/video_05.jpg":[540,960],"portfolio_covers/ai_saemangeum.jpg":[640,1138],"portfolio_covers/corp_02.jpg":[1280,720],"portfolio_covers/content_04.jpg":[720,1280],"portfolio_covers/corp_09.jpg":[1280,720],"portfolio_covers/content_03.jpg":[1280,720],"portfolio_covers/corp_05.jpg":[1280,720],"portfolio_covers/site_sanjiro.jpg":[1280,720],"portfolio_covers/ai_lemondiet.jpg":[640,1138],"portfolio_covers/web_04.jpg":[1200,900],"portfolio_covers/web_05.jpg":[1200,900],"portfolio_covers/ai_01.jpg":[1280,720],"portfolio_covers/video_03.jpg":[540,960],"portfolio_covers/corp_04.jpg":[1280,720],"portfolio_covers/automation_06.jpg":[1200,900],"portfolio_covers/content_02.jpg":[1280,720],"portfolio_covers/drone_01.jpg":[960,540],"portfolio_covers/wedding_01.jpg":[1280,720],"portfolio_covers/corp_08.jpg":[1280,720],"portfolio_covers/wedding_indoor.jpg":[1280,720],"portfolio_covers/wedding_02.jpg":[1200,900],"portfolio_covers/web_06.jpg":[1200,900],"portfolio_covers/corp_07.jpg":[1280,720],"portfolio_covers/content_01.jpg":[720,1280],"portfolio_covers/automation_05.jpg":[1200,900],"portfolio_covers/drone_02.jpg":[1100,619],"portfolio_covers/automation_04.jpg":[1200,900],"portfolio_covers/ai_esg_wind.jpg":[640,1138],"portfolio_covers/ai_soil.jpg":[720,1290],"portfolio_covers/corp_06.jpg":[1280,720],"portfolio_covers/site_artist.jpg":[1280,720],"portfolio_covers/video_01.jpg":[1280,720],"portfolio_covers/ai_03.jpg":[1280,720],"portfolio_covers/wedding_03.jpg":[1200,900],"portfolio_covers/video_06.jpg":[960,540],"portfolio_covers/wedding_jeju_snap.jpg":[1280,720],"portfolio_covers/corp_01.jpg":[1280,720],"portfolio_covers/automation_03.jpg":[1200,900],"portfolio_covers/ai_game_ua.jpg":[405,720],"portfolio_covers/drone_04.jpg":[960,540],"portfolio_covers/wedding_04.jpg":[1200,900],"portfolio_covers/ai_superwater.jpg":[640,1138],"portfolio_covers/ai_nadaum.jpg":[640,1138],"portfolio_covers/ai_esg_future.jpg":[640,1138],"portfolio_covers/wedding_05.jpg":[1200,900],"portfolio_covers/drone_05.jpg":[1100,619],"portfolio_covers/content_06.jpg":[1200,900],"portfolio_covers/site_muscle.jpg":[1280,720],"portfolio_covers/automation_02.jpg":[1200,900],"portfolio_covers/ai_05.jpg":[1280,720],"portfolio_covers/web_01.jpg":[1280,675],"logos/lg_uplus.png":[500,138],"logos/lions.png":[500,467],"logos/make_a_wish.png":[500,136]};
function pic(name, opts) {
  opts = opts || {};
  var meta = imgMeta[name];
  var alt = opts.alt || "";
  var loading = opts.loading || "lazy";
  // 프리미엄 로드 페이드인 — lazy 콘텐츠 이미지만(eager=브랜드로고·히어로·above-fold는 즉시노출).
  var classes = opts.cls || "";
  if (loading !== "eager") classes += (classes ? " " : "") + "pic-fade";
  var cls = classes ? ' class="' + classes + '"' : "";
  var sizes = opts.sizes ? ' sizes="' + opts.sizes + '"' : "";
  var wh = meta ? ' width="' + meta[0] + '" height="' + meta[1] + '"' : "";
  var img = '<img' + cls + ' src="' + asset(name) + '"' + wh + ' alt="' + alt + '" loading="' + loading + '" decoding="async"' + sizes + ' />';
  if (!meta) return img;
  var webp = asset(name.replace(/\.(jpe?g|png)$/i, ".webp"));
  return '<picture><source type="image/webp" srcset="' + webp + '" />' + img + '</picture>';
}

function langSwitch(cur) {
  const links = [];
  if (cur !== "ko") links.push(`<a href="${routeHref()}" hreflang="ko">한국어</a>`);
  if (cur !== "en") links.push(`<a href="${routeHref("en")}" hreflang="en">EN</a>`);
  if (cur !== "hans") links.push(`<a href="${routeHref("zh")}" hreflang="zh-Hans">简体</a>`);
  if (cur !== "hant") links.push(`<a href="${routeHref("zh-hant")}" hreflang="zh-Hant">繁體</a>`);
  return `<span class="lang-switch" role="group" aria-label="Language">${links.join("")}</span>`;
}

function nav(variant) {
  const items = mainNavItems
    .map(([label, id]) => `<a href="${id === "estimate" || id === "about" ? routeHref(id) : sectionHref(id)}">${label}</a>`)
    .join("");
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <header class="topbar${variant === "wall" ? " topbar--wall" : ""}">
      <a class="brand" href="${routeHref()}">
        ${pic("symbol.png", { alt: "Video Roastery", loading: "eager" })}
        <span>Video Roastery</span>
      </a>
      <nav class="nav" aria-label="서비스 메뉴">${items}${langSwitch("ko")}</nav>
    </header>
  `;
}

// 상세페이지 히어로 고스트 텍스트(en/zh/estimate 톤과 통일 — 짧은 영문 한 단어).
const heroStatements = {
  homepage: "WEBSITE",
  "inquiry-agent": "INQUIRY",
  "ai-shortform": "SHORTFORM",
  "brand-film": "FILM",
  drone: "AERIAL",
  wedding: "WEDDING",
  content: "CONTENT",
  consulting: "CONSULTING"
};

// 히어로 영상월 — 줄마다 '완전히 다른' 큐레이션 컷(줄 간 중복 0)으로 반복감 제거. 검증된 hero_wall/loops webp.
const heroWallRows = [
  ["hero_loops/loop_01.webp","hero_wall/hw_07.webp","hero_wall/food_meat_clean.webp","hero_wall/hw_29.webp","hero_wall/corp_tower_clean.webp","hero_wall/hw_03.webp","hero_wall/product_ingredients.webp","hero_wall/hw_24.webp","hero_wall/hw_26.webp"],
  ["hero_wall/hw_10.webp","hero_wall/hw_18.webp","hero_loops/loop_06.webp","hero_wall/hw_04.webp","hero_wall/hw_05_clean.webp","hero_wall/hw_11.webp","hero_loops/loop_08.webp","hero_wall/hw_23.webp","hero_wall/hw_02.webp"],
  ["hero_wall/hw_30.webp","hero_wall/hw_20.webp","hero_wall/hw_08.webp","hero_loops/loop_05.webp","hero_wall/hw_21.webp","hero_loops/loop_02.webp","hero_wall/hw_06.webp","hero_loops/loop_03.webp","hero_loops/loop_07.webp"]
];
function heroWallHtml() {
  const tile = (pth, primary) => `<img class="en-tile" src="${asset(pth)}" alt="" loading="eager" decoding="async"${primary ? ' fetchpriority="high"' : ""} width="480" height="270" />`;
  // 첫 행 첫 타일만 fetchpriority=high — head의 preload와 짝지어 LCP 조기 발견.
  const row = (arr, first) => `<div class="en-wall-row">${arr.map((p, i) => tile(p, first && i === 0)).join("")}${arr.map((p) => tile(p)).join("")}</div>`;
  return `<div class="en-hero-wall" aria-hidden="true">${heroWallRows.map((r, i) => row(r, i === 0)).join("")}</div>`;
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
        ${rows.map((r, i) => rowHtml(r, i % 2 === 0 ? "left" : "right")).join("")}
      </div>
      <div class="hero-wall__reel-wrap">
        <a class="reel-cta reel-cta--light" href="${secondaryHref}" data-reel-open="ko" aria-haspopup="dialog">WATCH<br>REEL ▶</a>
      </div>
      <div class="hero-wall__cta">
        <a class="hero-wall__more" href="${secondaryHref}">작업 사례 전체 보기</a>
        <a class="btn primary" href="${primaryHref}">${route.cta}</a>
      </div>
    </section>`;
  }

  // 서비스 상세페이지(비 editorial) — /en//zh//estimate 와 통일된 클린 타이포 히어로(.estimate-hero 재사용,
  // 신규 CSS 0). 사진/영상 배경·URL 알약·칩을 걷어내고 고스트텍스트+골드키커+대형 h1+CTA+신뢰줄로 통일.
  if (!isEditorial) {
    const detailKicker = (routeDetails[route.slug] && routeDetails[route.slug].kicker) || route.nav;
    const statement = heroStatements[route.slug] || String(detailKicker).toUpperCase();
    return `
    <section class="section estimate-hero">
      <div class="estimate-hero-inner">
        <span class="section-statement" aria-hidden="true">${statement}</span>
        <p class="section-kicker">${detailKicker}</p>
        <h1>${route.title}</h1>
        <p class="estimate-lead">${route.lead}</p>
        <div class="estimate-cta-row">
          <a class="btn primary" href="${primaryHref}">${route.cta}</a>
          <a class="btn secondary dark" href="${secondaryHref}">${secondaryCta}</a>
        </div>
        <p class="estimate-trust">${trustItems.join(" · ")}</p>
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
            <p class="section-sub">실제로 거래한 고객이 남긴 후기입니다.</p>
          </div>
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
  const steps = [
    ["01", "자료 보내기", "보유한 제품컷·로고·참고 영상과 원하는 결과물을 보내주세요. 촬영 없이 사진만 있어도 됩니다."],
    ["02", "범위 확인", "받은 자료로 필요한 제작 범위와 일정을 정리합니다. 궁금한 점은 카톡·메일로 먼저 여쭤봐요."],
    ["03", "맞춤 견적서 회신", "프로젝트에 맞춘 구성·범위·일정이 담긴 견적서를 보내드립니다. 고정가가 아니라 딱 필요한 만큼."],
    ["04", "제작 시작", "확정되면 바로 제작에 들어갑니다. 수정도 협의된 횟수 안에서 함께 맞춰갑니다."]
  ].map(([n, t, d]) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${n}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span></div>`).join("");
  const factors = [
    ["제작 범위", "편수·길이·버전(자막/무자막/채널별 리사이즈) 수에 따라 달라집니다."],
    ["촬영 여부", "제주 현장 촬영·드론이 필요한지, 보유 자료만으로 가능한지에 따라 나뉩니다."],
    ["기획 깊이", "단순 편집인지, 콘셉트·시나리오 기획부터인지에 따라 구성이 달라집니다."],
    ["납기", "일반 일정인지 급한 일정인지에 따라 조정될 수 있습니다."],
    ["수정 횟수", "필요한 수정 라운드 수를 미리 협의해 반영합니다."],
    ["사용 범위", "SNS·광고·상업적 사용 범위에 따라 안내가 달라질 수 있습니다."]
  ].map(([t, d], i) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span></div>`).join("");
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <div class="en-page basic-ko">
      <header class="en-bar en-bar--ink">
        <a class="en-wm" href="${routeHref()}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="메뉴"><a href="${routeHref()}">홈</a><a href="#estimate-form">견적 요청</a><a href="${routeHref("about")}">회사소개</a><span class="en-lang">${langSwitch("ko")}</span></nav>
      </header>
      <main id="main">
        <section class="en-detail-hero">
          <p class="en-eyebrow">견적 안내</p>
          <h1 class="en-detail-h1">맞춤 견적서로 회신드립니다</h1>
          <p class="en-detail-lead">홈페이지에 고정 가격을 적어두지 않습니다. 보유 자료와 원하는 결과물만 보내주시면, 필요한 제작 범위를 확인해 프로젝트에 딱 맞는 견적서를 보내드립니다.</p>
          <div class="en-detail-actions">
            <a class="en-cta-btn" href="#estimate-form">견적 요청하기 ↗</a>
            ${kakaoUrl ? `<a class="en-detail-link" href="${kakaoUrl}" target="_blank" rel="noopener">카카오톡으로 먼저 물어보기</a>` : ""}
          </div>
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>견적 절차</span><span>(04)</span></div>
          <div class="en-svc-list">${steps}</div>
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>견적에 영향을 주는 것</span><span>(06)</span></div>
          <div class="en-svc-list">${factors}</div>
        </section>

        <section class="section tight en-form-sec" id="estimate-form">
          <div class="cta-band has-form">
            <h2>견적 요청하기</h2>
            <p class="cta-note">보유 자료와 원하는 결과물만 적어주시면, 제작 범위·일정을 확인해 맞춤 견적서로 회신드립니다.</p>
            <p class="contact-trust">평균 1시간 내 응답 · 중간 수수료 없이 직접 거래 · 40+ 실제 제작 영상</p>
            ${quoteForm()}
          </div>
        </section>
      </main>
      <footer class="en-footer">
        <span>VIDEO ROASTERY® — 제주, 대한민국 · 전국 온라인</span>
        <a href="${routeHref("en")}">EN ↗</a>
      </footer>
    </div>
  `;
}

function aboutPage() {
  const ways = [
    ["실제 작업물로 이야기합니다", "말보다 만든 결과물을 먼저 보여드려요. 포트폴리오를 보고 판단하실 수 있습니다."],
    ["고정가를 붙이지 않습니다", "필요한 것만 골라 딱 맞는 견적을 드려요. 예산을 알려주시면 그 안에서 맞춰드립니다."],
    ["끝까지 함께합니다", "제주 현장은 직접 찾아가고, 전국은 온라인으로. 만들고 끝이 아니라 문의가 도착하는 데까지 챙깁니다."]
  ].map(([t, d], i) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span></div>`).join("");
  const services = displayRoutes
    .map((r, i) => `<a class="en-svc" href="${routeHref(r.slug)}"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${r.nav}</span><span class="en-svc-d">${r.title}</span></span><span class="en-svc-x" aria-hidden="true">↗</span></a>`)
    .join("");
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <div class="en-page basic-ko">
      <header class="en-bar en-bar--ink">
        <a class="en-wm" href="${routeHref()}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="메뉴"><a href="${routeHref()}">홈</a><a href="#services">서비스</a><a href="#contact">문의</a><span class="en-lang">${langSwitch("ko")}</span></nav>
      </header>
      <main id="main">
        <section class="en-detail-hero">
          <p class="en-eyebrow">회사소개</p>
          <h1 class="en-detail-h1">비디오 로스터리, 이런 회사예요</h1>
          <p class="en-detail-lead">제주에서 시작한 영상·홈페이지 제작 스튜디오입니다. 가게는 좋은데 온라인에서는 그 매력이 다 안 보이는 곳이 많아요. 사장님이 가진 이야기와 자료를, 손님이 믿고 문의하고 싶은 형태로 바꿔드립니다.</p>
          <div class="en-detail-actions">
            <a class="en-cta-btn" href="${routeHref("estimate")}">견적 문의하기 ↗</a>
            <a class="en-detail-link" href="${routeHref()}#work">작업 사례 보기</a>
          </div>
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>일하는 방식</span><span>(03)</span></div>
          <div class="en-svc-list">${ways}</div>
        </section>

        <section class="en-services" id="services">
          <div class="en-sec-head"><span>무엇을 만드나요</span></div>
          <div class="en-svc-list">${services}</div>
        </section>

        <section class="en-cta" id="contact">
          <p class="en-eyebrow">문의</p>
          <h2 class="en-cta-h">제작이 필요하시면, 편하게 말 거세요.</h2>
          <a class="en-cta-btn" href="${routeHref("estimate")}">견적 문의하기 ↗</a>
          <p class="en-cta-note">보유 자료와 원하는 결과물만 알려주시면, 딱 맞는 범위와 견적으로 정직하게 회신드립니다.</p>
        </section>
      </main>
      <footer class="en-footer">
        <span>VIDEO ROASTERY® — 제주, 대한민국 · 전국 온라인</span>
        <a href="${routeHref("en")}">EN ↗</a>
      </footer>
    </div>
  `;
}

// 리메모리 — 옛 사진 복원·리마인드 앨범(비디오 로스터리 산하 서비스). VR 디자인 시스템 재사용(신규 CSS 0).
function rememoryPage() {
  const svc = (arr) => arr.map(([t, d], i) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span></div>`).join("");
  const occasions = svc([
    ["금혼식·회혼례", "50·60년을 함께하신 두 분께, 그날의 결혼사진을 되살려 드립니다."],
    ["칠순·회갑·생신", "빛바랜 젊은 날의 사진 한 장이, 가장 따뜻한 선물이 됩니다."],
    ["영정·추억 복원", "돌아가신 분의 사진도 인상과 표정을 그대로 지켜 조심스럽게 복원합니다."]
  ]);
  const steps = svc([
    ["사진 보내기", "스튜디오 방문·촬영 없이, 가진 옛 사진을 휴대폰으로 찍거나 스캔해 보내주시면 됩니다. 거동이 불편하신 부모님도 부담 없어요."],
    ["복원 + 사람 검수", "스크래치·찢김·얼룩·흐림·변색을 복원하고, 흑백사진은 자연스러운 컬러로. 사람이 한 장씩 원본의 닮음을 지켜 검수합니다."],
    ["파일 또는 실물로", "고해상도 디지털 파일로, 또는 고급 인화 액자·미니 앨범 실물로 받아보세요."]
  ]);
  const plans = svc([
    ["기본 복원 · ₩19,000/장", "흐림·스크래치·찢김·얼룩·변색 복원과 화질 선명화. 고해상도 디지털 파일로 드립니다."],
    ["컬러 복원 + 리마인드 · ₩49,000 · 가장 인기", "기본 복원 전체 + 흑백→자연스러운 컬러 복원 + 얼굴 선명 복원(닮음 검수) + 예복 리마인드 재현 컷 1종(옵션)."],
    ["선물 패키지(실물) · ₩99,000~", "금혼식·칠순 선물용. 3~5장 컬러 복원 + 고급 인화 액자 또는 미니 앨범 + 선물 포장·택배 배송 + 기념 문구 삽입(옵션)."]
  ]);
  const faqData = [
    ["촬영을 다시 해야 하나요?", "아니요. 스튜디오 방문·촬영 없이, 가지고 계신 옛 사진을 휴대폰으로 찍거나 스캔해 보내주시면 됩니다. 거동이 불편하신 부모님도 부담이 없습니다."],
    ["많이 손상되고 빛바랜 사진도 복원되나요?", "네. 스크래치·찢김·얼룩·흐림·변색을 복원하고, 흑백사진은 자연스러운 컬러로 되살립니다. 상태가 심한 사진은 먼저 무료로 확인 후 가능 여부를 알려드립니다."],
    ["AI 무료 앱이랑 뭐가 다른가요?", "무료 앱은 얼굴을 임의로 바꿔 ‘다른 사람’처럼 되는 경우가 많습니다. 리메모리는 원본 인물의 닮음을 지키는 것을 원칙으로, 사람이 한 장 한 장 검수합니다."],
    ["돌아가신 부모님·조부모님 사진도 되나요?", "네. 영정사진 복원·제작도 조심스럽게 도와드립니다. 원본의 인상과 표정을 최대한 그대로 지켜 복원합니다."],
    ["액자나 앨범 실물로도 받을 수 있나요?", "네. 복원한 사진을 고급 인화 액자·미니 앨범으로 제작해 택배로 보내드립니다. 금혼식·칠순·어버이날 선물로 많이 찾으십니다."],
    ["얼마나 걸리나요?", "디지털 복원본은 보통 2~3일 내, 액자·앨범 실물은 제작·배송 포함 5~7일 내 받으실 수 있습니다."]
  ];
  const faqs = faqData.map(([q, a]) => `<details class="en-faq-item"><summary><span>${q}</span><span class="en-faq-mk" aria-hidden="true">+</span></summary><p>${a}</p></details>`).join("");
  const mailHref = `mailto:${consultEmail}?subject=${encodeURIComponent("리메모리 사진 복원 문의 — Video Roastery")}`;

  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <div class="en-page basic-ko">
      <header class="en-bar en-bar--ink">
        <a class="en-wm" href="${routeHref()}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="메뉴"><a href="${routeHref()}">홈</a><a href="#plans">가격</a><a href="#contact">문의</a><span class="en-lang">${langSwitch("ko")}</span></nav>
      </header>
      <main id="main">
        <section class="en-detail-hero">
          <p class="en-eyebrow">리메모리 · 옛 사진 복원</p>
          <h1 class="en-detail-h1">빛바랜 그날의 사진을, 다시 손에 쥐어 드립니다</h1>
          <p class="en-detail-lead">촬영 없이 사진만 보내주세요. 스크래치·흐림·변색을 복원하고, 흑백사진은 자연스러운 컬러로 되살립니다. 무료 앱과 달리 사람이 한 장씩 검수해 원본의 닮음을 지킵니다. 금혼식·칠순·어버이날, 부모님께 드리는 가장 따뜻한 선물.</p>
          <div class="en-detail-actions">
            <a class="en-cta-btn" href="${mailHref}">무료로 복원 확인받기 ↗</a>
            <a class="en-detail-link" href="#plans">가격 보기</a>
          </div>
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>복원 전 / 후</span></div>
          <div class="rememory-ba">
            <figure class="ba-item"><span class="ba-tag">복원 전</span>${pic("rememory_before.jpg", { alt: "복원 전 — 빛바랜 옛 가족사진 예시" })}</figure>
            <figure class="ba-item"><span class="ba-tag ba-tag--after">복원 후</span>${pic("rememory_after.jpg", { alt: "복원 후 — 자연스러운 컬러로 되살린 가족사진 예시" })}</figure>
          </div>
          <p class="ba-note">복원 예시 이미지입니다 · 실제 결과는 원본 사진의 상태에 따라 달라집니다.</p>
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>이런 날에</span><span>(03)</span></div>
          <div class="en-svc-list">${occasions}</div>
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>진행 방법</span><span>(03)</span></div>
          <div class="en-svc-list">${steps}</div>
        </section>

        <section class="en-services">
          <div class="rememory-scene-wrap">${pic("rememory_scene.jpg", { alt: "복원한 사진을 담은 액자와 리마인드 앨범, 따뜻한 실물 결과물" })}</div>
        </section>

        <section class="en-services" id="plans">
          <div class="en-sec-head"><span>가격 안내</span><span>(03)</span></div>
          <div class="en-svc-list">${plans}</div>
          <p class="en-cta-note" style="margin-top:16px;max-width:60ch;text-align:left">먼저 무료로 복원 가능 여부를 확인해 드려요. 결과가 마음에 드실 때만 결제하세요. 가격은 예시이며 사진 상태·수량·실물 옵션에 따라 조정됩니다.</p>
        </section>

        <section class="en-services" id="faq">
          <div class="en-sec-head"><span>자주 묻는 질문</span><span>FAQ</span></div>
          <div class="en-faq">${faqs}</div>
        </section>

        <section class="en-cta" id="contact">
          <p class="en-eyebrow">문의</p>
          <h2 class="en-cta-h">먼저, 사진 한 장 보여주세요.</h2>
          <a class="en-cta-btn" href="${mailHref}">무료로 복원 확인받기 ↗</a>
          <p class="en-cta-note">복원 가능 여부와 예상 결과를 무료로 확인해 드립니다. 옛 사진을 휴대폰으로 찍어 보내주시면 됩니다.</p>
        </section>
      </main>
      <footer class="en-footer">
        <span>VIDEO ROASTERY® — 리메모리 · 옛 사진 복원·리마인드 앨범</span>
        <a href="${routeHref("en")}">EN ↗</a>
      </footer>
    </div>
  `;
}

// 영문/해외(캐나다)용 페이지 — BASIC/DEPT 스타일(모노크롬·그로테스크·여백·영상 히어로). 스코프 CSS는 .en-*.
function enPage() {
  const services = [
    ["Brand & Corporate Film", "Company and brand stories, told in the order people actually understand them."],
    ["Drone & Aerial", "The scale, flow and mood of a place — resorts, farms, facilities, coastline."],
    ["AI Short-form Ads", "Reels & shorts built from product photos. No shoot, no models needed."],
    ["Websites & Landing Pages", "Sites that turn visitors into inquiries — clear on the first screen, built to convert."],
    ["Wedding Film", "Natural, detail-first records, with a light touch on privacy."],
    ["Content & Automation", "Card news, reels and inquiry automation that keep working after launch."]
  ].map(([t, d], i) => `<a class="en-svc" href="#contact"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span><span class="en-svc-x" aria-hidden="true">↗</span></a>`).join("");
  const mail = `mailto:${consultEmail}?subject=${encodeURIComponent("Project inquiry — Video Roastery")}`;
  // 히어로 배경: 대표 작업물 썸네일이 빠르게 흐르는 영상월(BASIC식). webp 스틸이라 초경량·안정(raw video 다수는 모바일 프리징).
  const wall = heroWallHtml();
  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="en-page">
      <header class="en-bar">
        <a class="en-wm" href="${routeHref("en")}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="menu"><a href="#work">WORK</a><a href="#services">SERVICES</a><a href="#contact">CONTACT</a><span class="en-lang">${langSwitch("en")}</span></nav>
      </header>
      <main id="main">
        <section class="en-hero" id="work">
          ${wall}
          <div class="en-hero-scrim" aria-hidden="true"></div>
          <div class="en-hero-center">
            <a class="en-reel" href="#work" data-reel-open="en" aria-haspopup="dialog">WATCH<br>REEL ▶</a>
            <p class="en-reel-label">Video Roastery® · Showreel · Jeju 2019—</p>
          </div>
        </section>

        <section class="en-statement">
          <div class="en-rule"></div>
          <div class="en-statement-grid">
            <p class="en-statement-copy">Video Roastery is a Jeju-based studio building brand films, drone &amp; aerial, AI short-form ads, and conversion-focused websites — on location in Jeju, South Korea, and remote worldwide.</p>
            <div class="en-bigmark" aria-hidden="true">VR<sup>®</sup></div>
          </div>
        </section>

        <section class="en-services" id="services">
          <div class="en-sec-head"><span>Services</span><span>(06)</span></div>
          <div class="en-svc-list">${services}</div>
        </section>

        <section class="en-clients">
          <div class="en-sec-head"><span>Selected Clients</span></div>
          <p class="en-clients-list">LG U+ &nbsp;·&nbsp; Korea Racing Authority &nbsp;·&nbsp; S-OIL &nbsp;·&nbsp; Korean Anti-Tuberculosis Association &nbsp;·&nbsp; Jaksim Lab</p>
        </section>

        <section class="en-cta" id="contact">
          <p class="en-eyebrow">Start a project</p>
          <h2 class="en-cta-h">Tell us what you have.<br>We reply with a scope.</h2>
          <a class="en-cta-btn" href="${mail}">Email us ↗</a>
        </section>
      </main>
      <footer class="en-footer">
        <span>VIDEO ROASTERY® — Jeju, South Korea · Remote worldwide</span>
        <a href="${routeHref()}">한국어 ↗</a>
      </footer>
    </div>
  `;
}

function zhPage(variant) {
  const hant = variant === "hant";
  const T = hant ? {
    home: routeHref("zh-hant"), cur: "hant", skip: "跳到正文", work: "作品", contact: "聯絡",
    kicker: "韓國 · 濟州島", h1: "影像 · 短片 · 網站，源自濟州島。",
    lead: "Video Roastery 是一家位於韓國濟州島的製作工作室，專注品牌短片、無人機空拍、AI 短影音廣告，以及以轉換為核心的網站設計——始終以真實作品為基礎溝通，絕不套用範本。",
    seeWork: "查看作品", start: "開始專案",
    trust: "網站 · 影像 · 無人機 · AI 短影音 · 濟州島現場 + 全球遠端",
    servicesH: "服務內容", whyH: "為什麼選擇我們",
    services: [
      ["網站與著陸頁", "讓訪客轉換為諮詢的網站——第一屏就說清楚，為轉換而建。"],
      ["品牌與企業短片", "把公司與品牌故事，依觀眾真正能理解的順序講述。"],
      ["無人機空拍", "呈現空間的規模、動線與氛圍——度假村、農場、設施、海岸線。"],
      ["AI 短影音廣告", "僅用您的產品照片製作 Reels 與短影音——無需拍攝、無需模特兒。"],
      ["婚禮影像", "自然、注重細節的記錄，兼顧隱私。"],
      ["內容與自動化", "卡片新聞、Reels 與諮詢自動化，上線後持續發揮作用。"]
    ],
    why: [
      ["先展示，再溝通", "我們以真實作品說話——您先看到，再決定需要什麼。"],
      ["依需求客製", "沒有固定標價。我們根據專案的實際需要來客製報價。"],
      ["濟州現場，全球遠端", "在韓國濟州島現場拍攝——也可在任何地方遠端製作。"]
    ],
    contactH: "有專案想法嗎？",
    contactNote: "告訴我們您有什麼、想要什麼——我們會回覆為您量身打造的方案與報價。",
    contactTrust: "Kmong 平台 ★4.5 真實評價 · 韓國濟州島現場 · 全球遠端",
    emailBtn: "郵件聯絡我們", emailSubj: "專案諮詢 — Video Roastery",
    footer: "韓國濟州島 · 影像、短片與網站製作 · 全球遠端"
  } : {
    home: routeHref("zh"), cur: "hans", skip: "跳到正文", work: "作品", contact: "联系",
    kicker: "韩国 · 济州岛", h1: "影像 · 短片 · 网站，源自济州岛。",
    lead: "Video Roastery 是一家位于韩国济州岛的制作工作室，专注品牌短片、无人机航拍、AI 短视频广告，以及以转化为核心的网站设计——始终以真实作品为基础沟通，绝不套用模板。",
    seeWork: "查看作品", start: "开始项目",
    trust: "网站 · 影像 · 无人机 · AI 短视频 · 济州岛现场 + 全球远程",
    servicesH: "服务内容", whyH: "为什么选择我们",
    services: [
      ["网站与落地页", "让访客转化为咨询的网站——第一屏就说清楚，为转化而建。"],
      ["品牌与企业短片", "把公司与品牌故事，按观众真正能理解的顺序讲述。"],
      ["无人机航拍", "呈现空间的规模、动线与氛围——度假村、农场、设施、海岸线。"],
      ["AI 短视频广告", "仅用您的产品照片制作 Reels 与短视频——无需拍摄、无需模特。"],
      ["婚礼影像", "自然、注重细节的记录，兼顾隐私。"],
      ["内容与自动化", "卡片新闻、Reels 与咨询自动化，上线后持续发挥作用。"]
    ],
    why: [
      ["先展示，再沟通", "我们以真实作品说话——您先看到，再决定需要什么。"],
      ["按需定制", "没有固定标价。我们根据项目的实际需要来定制报价。"],
      ["济州现场，全球远程", "在韩国济州岛现场拍摄——也可在任何地方远程制作。"]
    ],
    contactH: "有项目想法吗？",
    contactNote: "告诉我们您有什么、想要什么——我们会回复为您量身定制的方案与报价。",
    contactTrust: "Kmong 平台 ★4.5 真实评价 · 韩国济州岛现场 · 全球远程",
    emailBtn: "邮件联系我们", emailSubj: "项目咨询 — Video Roastery",
    footer: "韩国济州岛 · 影像、短片与网站制作 · 全球远程"
  };
  const services = T.services.map(([t, d], i) => `<a class="en-svc" href="#contact"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span><span class="en-svc-x" aria-hidden="true">↗</span></a>`).join("");
  const why = T.why.map(([t, d], i) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span></div>`).join("");
  const wall = heroWallHtml();
  const mail = `mailto:${consultEmail}?subject=${encodeURIComponent(T.emailSubj)}`;
  return `
    <a class="skip-link" href="#main">${T.skip}</a>
    <div class="en-page basic-zh">
      <header class="en-bar">
        <a class="en-wm" href="${T.home}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="menu"><a href="#work">${T.work}</a><a href="#services">${T.servicesH}</a><a href="#contact">${T.contact}</a><span class="en-lang">${langSwitch(T.cur)}</span></nav>
      </header>
      <main id="main">
        <section class="en-hero" id="work">
          <h1 class="sr-only">${T.h1}</h1>
          ${wall}
          <div class="en-hero-scrim" aria-hidden="true"></div>
          <div class="en-hero-center">
            <a class="en-reel" href="#work" data-reel-open="${T.cur}" aria-haspopup="dialog">WATCH<br>REEL ▶</a>
          </div>
        </section>

        <section class="en-statement">
          <div class="en-rule"></div>
          <div class="en-statement-grid">
            <p class="en-statement-copy">${T.lead}</p>
            <div class="en-bigmark" aria-hidden="true">VR<sup>®</sup></div>
          </div>
        </section>

        <section class="en-services" id="services">
          <div class="en-sec-head"><span>${T.servicesH}</span><span>(06)</span></div>
          <div class="en-svc-list">${services}</div>
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>${T.whyH}</span><span>(03)</span></div>
          <div class="en-svc-list">${why}</div>
        </section>

        <section class="en-cta" id="contact">
          <p class="en-eyebrow">${T.contact}</p>
          <h2 class="en-cta-h">${T.contactH}</h2>
          <a class="en-cta-btn" href="${mail}">${T.emailBtn} ↗</a>
          <p class="en-cta-note">${T.contactNote}</p>
        </section>
      </main>
      <footer class="en-footer">
        <span>VIDEO ROASTERY® — ${T.footer}</span>
        <a href="${routeHref()}">한국어 ↗</a>
      </footer>
    </div>
  `;
}

// 무료 30초 샘플 랜딩 — 모든 채널(크몽·인스타·당근·SEO·아웃리치)의 착지점. BASIC 스타일 + quoteForm(UTM 자동 귀속).
function freePage() {
  const steps = [
    ["사진 보내기", "가게·제품·공간 사진 3~5장과 업종만 알려주세요. 촬영도, 방문도 필요 없어요."],
    ["무료 샘플 제작", "AI로 30초 세로 홍보영상 샘플을 만들어 보여드립니다. 릴스·쇼츠·매장 TV·네이버플레이스 어디든 바로 사용."],
    ["마음에 들면 진행", "샘플이 좋으면 편수·버전만 정해 진행합니다. 아니면 전혀 부담 없이 안 하셔도 됩니다."]
  ].map(([t, d], i) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span></div>`).join("");
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <div class="en-page basic-ko">
      <header class="en-bar en-bar--ink">
        <a class="en-wm" href="${routeHref()}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="메뉴"><a href="${routeHref()}">홈</a><a href="#how">진행 방법</a><a href="#free-form">신청</a><span class="en-lang">${langSwitch("ko")}</span></nav>
      </header>
      <main id="main">
        <section class="en-detail-hero">
          <p class="en-eyebrow">무료 30초 샘플 · 이번 달 선착순</p>
          <h1 class="en-detail-h1">제주 사장님, 무료로 30초 홍보영상 만들어 드립니다</h1>
          <p class="en-detail-lead">촬영도 방문도 없이, 가게·제품 사진만 보내주세요. AI로 30초 홍보영상 샘플을 만들어 먼저 보여드려요. 마음에 들 때만 진행하시면 됩니다.</p>
          <div class="en-detail-actions">
            <a class="en-cta-btn" href="#free-form">무료 샘플 신청하기 ↗</a>
            <a class="en-detail-link" href="#work" data-reel-open="ko" aria-haspopup="dialog">실제 작업 보기</a>
          </div>
        </section>

        <section class="en-services" id="how">
          <div class="en-sec-head"><span>이렇게 진행돼요</span><span>(03)</span></div>
          <div class="en-svc-list">${steps}</div>
        </section>

        <section class="en-cta">
          <p class="en-eyebrow">왜 무료로 해드리나요</p>
          <h2 class="en-cta-h">말보다, 결과물을 먼저 보여드립니다.</h2>
          <p class="en-cta-note">크몽 실거래 ★4.5 · 40+ 실제 제작 영상 · 촬영 없이 사진만으로. 백 마디 설명보다 사장님 가게가 영상이 된 걸 직접 보시는 게 빠르니까요.</p>
        </section>

        <section class="section tight en-form-sec" id="free-form">
          <div class="cta-band has-form">
            <h2>무료 샘플 신청</h2>
            <p class="cta-note">업종과 제품/공간 사진(링크 또는 설명)만 남겨주세요. 확인 후 무료 30초 샘플을 만들어 연락드립니다.</p>
            <p class="contact-trust">이번 달 선착순 · 평균 1시간 내 응답 · 마음에 들 때만 진행</p>
            ${quoteForm()}
          </div>
        </section>
      </main>
      <footer class="en-footer">
        <span>VIDEO ROASTERY® — 제주, 대한민국 · 전국 온라인</span>
        <a href="${routeHref("en")}">EN ↗</a>
      </footer>
    </div>
  `;
}

// 업종별 SEO 랜딩 — "제주 [업종] 홍보영상" 검색 유입 → /free 무료오퍼. 구조 공유(1함수+데이터맵).
const industryPages = {
  "jeju-food-video": {
    kicker: "제주 음식점·맛집 홍보영상",
    h1: "제주 맛집 사장님, 손님이 오고 싶게 만드는 30초",
    lead: "메뉴 사진은 예쁜데 영상이 없어 SNS·네이버플레이스에서 밀리는 가게가 많아요. 촬영 없이 보유 사진만으로, 군침 도는 30초 릴스를 만들어 드립니다.",
    title: "제주 음식점 홍보영상·맛집 릴스 제작 | 비디오 로스터리",
    desc: "제주 맛집·음식점 홍보영상, 촬영 없이 사진만으로 30초 릴스 제작. 무료 샘플 먼저 확인하세요. 크몽 ★4.5.",
    why: [
      ["릴스가 사진을 이긴다", "인스타·네이버플레이스에서 영상은 사진보다 훨씬 많이 노출됩니다. 첫 3초에 군침 돌게."],
      ["촬영·방문 없이", "가진 메뉴 사진 몇 장만 보내주세요. AI로 세로 숏폼을 만들어 드립니다."],
      ["어디든 바로", "릴스·쇼츠·매장 TV·네이버플레이스·배달앱 어디든 바로 쓰실 수 있어요."]
    ]
  },
  "jeju-pension-video": {
    kicker: "제주 펜션·숙소 홍보영상·드론",
    h1: "제주 펜션, 예약을 부르는 영상과 드론컷",
    lead: "숙소는 좋은데 온라인에선 그 분위기가 다 안 보이죠. 공간의 규모·오션뷰·동선을 드론과 무드컷으로 담아, 예약으로 이어지는 영상을 만듭니다.",
    title: "제주 펜션·숙소 홍보영상·드론촬영 | 비디오 로스터리",
    desc: "제주 펜션·독채·풀빌라 홍보영상과 드론 항공컷. 예약을 부르는 30초. 무료 샘플 먼저 확인. 크몽 ★4.5.",
    why: [
      ["첫인상이 예약을 만든다", "예약 사이트·인스타 첫 화면에서 '가고 싶다'가 3초에 결정됩니다."],
      ["드론으로 규모·뷰를", "오션뷰·독채·수영장을 항공컷으로 담으면 사진과 차원이 달라져요."],
      ["성수기 전에", "예약 시즌 전에 영상 하나면 노출·전환이 확 올라갑니다."]
    ]
  },
  "jeju-cafe-reels": {
    kicker: "제주 카페 릴스·감성 영상",
    h1: "제주 카페, 감성이 도는 릴스 한 편",
    lead: "감성 좋은 카페일수록 릴스가 손님을 부릅니다. 시그니처 메뉴·공간·창밖 풍경을 무드 있게 담아, 저장·공유되는 릴스를 만들어 드립니다.",
    title: "제주 카페 릴스·감성 홍보영상 제작 | 비디오 로스터리",
    desc: "제주 감성 카페 릴스·홍보영상, 촬영 없이 사진만으로. 저장·공유되는 30초. 무료 샘플 먼저. 크몽 ★4.5.",
    why: [
      ["카페는 릴스로 뜬다", "'제주 감성 카페' 검색·인스타 탐색에서 릴스가 발견을 만듭니다."],
      ["무드가 전부", "시그니처 컷·창밖·라떼아트를 감성 톤으로. 사진만으로도 가능해요."],
      ["저장·공유 유도", "'가보고 싶다' 저장되는 릴스가 방문으로 이어져요."]
    ]
  },
  "jeju-farm-video": {
    kicker: "제주 농장·체험 홍보영상",
    h1: "제주 농장·체험, 신뢰를 주는 소개 영상",
    lead: "귤밭·목장·체험 프로그램은 '어떤 곳인지' 보여줄 때 신뢰가 생깁니다. 현장 드론과 소개컷으로, 예약·구매로 이어지는 영상을 만들어 드립니다.",
    title: "제주 농장·체험·귤밭 홍보영상 제작 | 비디오 로스터리",
    desc: "제주 농장·귤밭·체험 프로그램 홍보영상과 드론. 신뢰를 주는 소개 영상. 무료 샘플 먼저. 크몽 ★4.5.",
    why: [
      ["보여주면 믿는다", "체험·농장은 '실제 모습'을 영상으로 보여줄 때 예약률이 오릅니다."],
      ["드론으로 규모를", "귤밭·목장의 스케일과 제주 풍경을 항공컷으로 담아요."],
      ["온라인 판매까지", "스마트스토어·예약페이지에 영상 하나면 전환이 달라집니다."]
    ]
  }
};

function industryPage(key) {
  const d = industryPages[key];
  const why = d.why.map(([t, dd], i) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${dd}</span></span></div>`).join("");
  const mail = `mailto:${consultEmail}?subject=${encodeURIComponent(d.kicker + " 문의 — Video Roastery")}`;
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <div class="en-page basic-ko">
      <header class="en-bar en-bar--ink">
        <a class="en-wm" href="${routeHref()}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="메뉴"><a href="${routeHref()}">홈</a><a href="${routeHref("free")}">무료 샘플</a><a href="#contact">문의</a><span class="en-lang">${langSwitch("ko")}</span></nav>
      </header>
      <main id="main">
        <section class="en-detail-hero">
          <p class="en-eyebrow">${d.kicker}</p>
          <h1 class="en-detail-h1">${d.h1}</h1>
          <p class="en-detail-lead">${d.lead}</p>
          <div class="en-detail-actions">
            <a class="en-cta-btn" href="${routeHref("free")}">무료 30초 샘플 받기 ↗</a>
            <a class="en-detail-link" href="#work" data-reel-open="ko" aria-haspopup="dialog">실제 작업 보기</a>
          </div>
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>왜 필요할까요</span><span>(03)</span></div>
          <div class="en-svc-list">${why}</div>
        </section>

        <a class="en-offer" href="${routeHref("free")}">
          <span class="en-offer-k">이번 달 선착순 · 무료</span>
          <span class="en-offer-t">사진만 보내면 30초 홍보영상 샘플을 무료로 만들어 드려요</span>
          <span class="en-offer-x" aria-hidden="true">무료 샘플 받기 ↗</span>
        </a>

        <section class="en-cta" id="contact">
          <p class="en-eyebrow">문의</p>
          <h2 class="en-cta-h">먼저 무료 샘플로 확인하세요.</h2>
          <a class="en-cta-btn" href="${mail}">문의하기 ↗</a>
          <p class="en-cta-note">업종과 사진(링크 또는 설명)만 보내주시면, 무료 샘플과 함께 범위·견적을 회신드립니다. 크몽 실거래 ★4.5 · 40+ 실제 제작 영상.</p>
        </section>
      </main>
      <footer class="en-footer">
        <span>VIDEO ROASTERY® — 제주, 대한민국 · 전국 온라인</span>
        <a href="${routeHref("en")}">EN ↗</a>
      </footer>
    </div>
  `;
}

function mainPage() {
  // BASIC/DEPT 한글 홈 — /en/ 디자인 시스템(.en-*) 그대로 + Pretendard(.basic-ko). 다크 마퀴 히어로 → 라이트 웜페이퍼 본문.
  const wall = heroWallHtml();
  const services = [
    ["브랜드·기업 영상", "회사와 브랜드 이야기를, 보는 사람이 이해하는 순서로 풀어냅니다.", "brand-film"],
    ["드론·항공", "숙소·시설·관광지·농장 — 공간의 규모와 동선, 분위기를 한눈에.", "drone"],
    ["AI 숏폼 광고", "제품 사진만으로, 촬영 없이 첫 3초에 시선을 잡는 릴스·쇼츠.", "ai-shortform"],
    ["홈페이지·랜딩", "첫 화면에서 신뢰를 주고, 방문자가 문의로 이어지게 만듭니다.", "homepage"],
    ["웨딩 필름", "자연스럽고 디테일 중심의 기록 — 초상권은 조심스럽게 다룹니다.", "wedding"],
    ["콘텐츠·자동화", "카드뉴스·릴스·문의 자동정리까지, 런칭 후에도 계속 작동합니다.", "content"]
  ].map(([t, d, slug], i) => `<a class="en-svc" href="${routeHref(slug)}"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span><span class="en-svc-x" aria-hidden="true">↗</span></a>`).join("");
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <div class="en-page basic-ko">
      <header class="en-bar">
        <a class="en-wm" href="${routeHref()}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="메뉴"><a href="#work">작업</a><a href="#services">서비스</a><a href="#contact">문의</a><span class="en-lang">${langSwitch("ko")}</span></nav>
      </header>
      <main id="main">
        <section class="en-hero" id="work">
          <h1 class="sr-only">비디오 로스터리 — 제주 영상·필름·웹 제작 스튜디오</h1>
          ${wall}
          <div class="en-hero-scrim" aria-hidden="true"></div>
          <div class="en-hero-center">
            <a class="en-reel" href="#work" data-reel-open="ko" aria-haspopup="dialog">WATCH<br>REEL ▶</a>
          </div>
        </section>

        <section class="en-statement">
          <div class="en-rule"></div>
          <div class="en-statement-grid">
            <p class="en-statement-copy">제주에서 시작한 영상·필름·웹 스튜디오. 브랜드필름, 드론·항공, AI 숏폼, 전환 중심 홈페이지까지 — 현장에서 찍고, 필요한 것만 골라 맞춤 견적으로 회신합니다.</p>
            <div class="en-bigmark" aria-hidden="true">VR<sup>®</sup></div>
          </div>
        </section>

        <a class="en-offer" href="${routeHref("free")}">
          <span class="en-offer-k">이번 달 선착순 · 무료</span>
          <span class="en-offer-t">사진만 보내면, 30초 홍보영상 샘플을 무료로 만들어 드려요</span>
          <span class="en-offer-x" aria-hidden="true">무료 샘플 받기 ↗</span>
        </a>

        <section class="en-services" id="services">
          <div class="en-sec-head"><span>서비스</span><span>(06)</span></div>
          <div class="en-svc-list">${services}</div>
        </section>

        <section class="en-clients">
          <div class="en-sec-head"><span>주요 클라이언트</span></div>
          <p class="en-clients-list">LG U+ &nbsp;·&nbsp; 한국마사회 &nbsp;·&nbsp; S-OIL &nbsp;·&nbsp; 대한결핵협회 &nbsp;·&nbsp; 작심랩</p>
        </section>

        <section class="en-cta" id="contact">
          <p class="en-eyebrow">프로젝트 시작</p>
          <h2 class="en-cta-h">가진 자료만 주세요.<br>딱 맞는 범위로 회신합니다.</h2>
          <a class="en-cta-btn" href="${routeHref("estimate")}">견적 문의하기 ↗</a>
        </section>
      </main>
      <footer class="en-footer">
        <span>VIDEO ROASTERY® — 제주, 대한민국 · 전국 온라인</span>
        <a href="${routeHref("en")}">EN ↗</a>
      </footer>
    </div>
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

function supportCard(route) {
  return `
    <a class="support-card" href="${routeHref(route.slug)}">
      ${pic(routeCardImages[route.slug] || route.heroImage, { alt: route.nav + " 서비스" })}
      <span>${routeLabels[route.slug]?.[1] || route.nav}</span>
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
  "portfolio_covers/beauty.jpg": "portfolio_videos/beauty_full.mp4",  // 뷰티 브랜드 광고(대표작)
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
  // 오버뷰가 앞 3장(구성 이미지)을 쓰던 로직 제거 — BASIC은 '구성'을 텍스트 넘버드로, '작업 사례'는 전체 노출.
  const routePortfolioItems = portfolioItemsForRoute(route);
  if (routePortfolioItems[0]) routePortfolioItems[0] = { ...routePortfolioItems[0], size: "large" };
  const routeHasMedia = routePortfolioItems.some((item) => portfolioLink(item));
  const detail = routeDetails[route.slug] || {
    kicker: route.nav.toUpperCase(),
    title: route.title,
    lead: route.lead,
    windows: route.proof.map(([title, body], index) => [String(index + 1).padStart(2, "0"), title, body])
  };
  const windows = (detail.windows || [])
    .map(([n, t, b]) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${n}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${b}</span></span></div>`)
    .join("");
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <div class="en-page basic-ko">
      <header class="en-bar en-bar--ink">
        <a class="en-wm" href="${routeHref()}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="메뉴"><a href="${routeHref()}">홈</a><a href="#work">작업</a><a href="#contact">문의</a><span class="en-lang">${langSwitch("ko")}</span></nav>
      </header>
      <main id="main">
        <section class="en-detail-hero">
          <p class="en-eyebrow">${detail.kicker || route.nav}</p>
          <h1 class="en-detail-h1">${route.title}</h1>
          <p class="en-detail-lead">${route.lead}</p>
          <div class="en-detail-actions">
            <a class="en-cta-btn" href="${inquiryHref}">${route.cta} ↗</a>
            <a class="en-detail-link" href="#work">작업 사례 보기</a>
          </div>
        </section>

        <a class="en-offer" href="${routeHref("free")}">
          <span class="en-offer-k">이번 달 선착순 · 무료</span>
          <span class="en-offer-t">사진만 보내면 30초 홍보영상 샘플을 무료로 만들어 드려요</span>
          <span class="en-offer-x" aria-hidden="true">무료 샘플 받기 ↗</span>
        </a>

        <section class="en-services">
          <div class="en-sec-head"><span>구성</span><span>(0${(detail.windows || []).length})</span></div>
          <div class="en-svc-list">${windows}</div>
        </section>

        <section class="en-services" id="work">
          <div class="en-sec-head"><span>${routeHasMedia ? "작업 사례" : "화면 예시"}</span><span>${routeHasMedia ? "▶ 눌러서 재생" : ""}</span></div>
          ${portfolioWall(routePortfolioItems, "detail-wall", !routeHasMedia)}
        </section>

        <section class="en-services" id="faq">
          <div class="en-sec-head"><span>자주 묻는 질문</span><span>FAQ</span></div>
          <div class="en-faq">${faqItems.concat(routeFaqExtra[route.slug] || []).map(([q, a]) => `<details class="en-faq-item"><summary><span>${q}</span><span class="en-faq-mk" aria-hidden="true">+</span></summary><p>${a}</p></details>`).join("")}</div>
        </section>

        <section class="en-cta" id="contact">
          <p class="en-eyebrow">문의</p>
          <h2 class="en-cta-h">가진 자료만 주세요.<br>딱 맞는 범위로 회신합니다.</h2>
          <a class="en-cta-btn" href="${inquiryHref}">${route.cta} ↗</a>
          <p class="en-cta-note">보유 자료와 원하는 결과물만 보내주시면 제작 범위·일정을 정직하게 회신드립니다.</p>
        </section>
      </main>
      <footer class="en-footer">
        <span>VIDEO ROASTERY® — 제주, 대한민국 · 전국 온라인</span>
        <a href="${routeHref("en")}">EN ↗</a>
      </footer>
    </div>
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
  // SEO 제목: 브랜드(비디오 로스터리) 앞 + 검색 키워드 나열. 정적 HTML(generate_route_html.py)과 동일 유지 → 크롤러 불일치 방지.
  const seoTitles = {
    main: "비디오 로스터리 Video Roastery | 제주 영상제작·홈페이지·드론·AI 숏폼",
    estimate: "비디오 로스터리 | 제작 견적 안내·맞춤 견적서",
    homepage: "비디오 로스터리 | 홈페이지 제작·랜딩페이지 제작",
    "inquiry-agent": "비디오 로스터리 | 문의 자동화·고객응대 시스템",
    "ai-shortform": "비디오 로스터리 | AI 영상제작·AI 숏폼·릴스 광고",
    "brand-film": "비디오 로스터리 | 기업 홍보영상·브랜드필름 제작",
    drone: "비디오 로스터리 | 제주 드론촬영·항공영상",
    wedding: "비디오 로스터리 | 제주 웨딩 스냅·영상 촬영",
    content: "비디오 로스터리 | 상세페이지·카드뉴스·릴스 제작",
    consulting: "비디오 로스터리 | AI 활용 컨설팅·자동화",
    about: "비디오 로스터리 회사소개 | 제주 영상·홈페이지 제작 스튜디오",
    en: "Video Roastery — Video, Film & Web Studio in Jeju, Korea",
    zh: "Video Roastery — 韩国济州岛影像 · 短片 · 网站制作工作室",
    "zh-hant": "Video Roastery — 韓國濟州島影像 · 短片 · 網站製作工作室",
    rememory: "리메모리 | 옛날 결혼사진 복원·부모님 리마인드 웨딩 앨범",
    free: "무료 30초 홍보영상 샘플 — 제주 소상공인 | 비디오 로스터리",
  };
  const pageTitle = (industryPages[slug] && industryPages[slug].title) || seoTitles[slug] || (route ? `${route.nav} | Video Roastery` : seoTitles.main);
  const pageDesc = industryPages[slug] ? industryPages[slug].desc : slug === "estimate" ? "고정 가격 대신 맞춤 견적서로 안내합니다. 보유 자료와 원하는 결과물만 보내주시면 제작 범위를 확인해 견적서를 회신합니다."
    : slug === "about" ? "비디오 로스터리(Video Roastery)는 제주에서 시작한 영상·홈페이지 제작 스튜디오입니다. 홈페이지·영상·드론·AI 숏폼·콘텐츠를 실제 작업물 기준으로 상담합니다."
    : slug === "en" ? "Jeju-based studio for brand films, drone & aerial, AI short-form ads, and conversion-focused websites. On-site in Jeju, remote worldwide."
    : slug === "zh" ? "位于韩国济州岛的制作工作室：品牌短片、无人机航拍、AI 短视频广告与以转化为核心的网站设计。济州现场，全球远程。"
    : slug === "zh-hant" ? "位於韓國濟州島的製作工作室：品牌短片、無人機空拍、AI 短影音廣告與以轉換為核心的網站設計。濟州現場，全球遠端。"
    : slug === "rememory" ? "촬영 없이 옛 사진만 보내면, 빛바랜 결혼사진을 사람이 직접 복원합니다. 흑백 컬러 복원부터 금혼식·칠순 리마인드 웨딩 앨범·액자 제작까지. 부모님께 드리는 가장 따뜻한 선물, 리메모리."
    : slug === "free" ? "제주 사장님, 촬영 없이 사진만 보내면 무료로 30초 홍보영상 샘플을 만들어 드립니다. 마음에 들 때만 진행하시면 됩니다. 이번 달 선착순."
    : (route ? route.lead : "제주 촬영부터 전국 온라인 제작까지 — 홈페이지·영상·드론·AI 숏폼·콘텐츠를 실제 작업물 기준으로 상담하고, 보고 바로 문의로 이어지게 만듭니다.");
  const pageUrl = industryPages[slug] ? `https://videoroastery.com/${slug}/` : slug === "estimate" ? "https://videoroastery.com/estimate/" : slug === "about" ? "https://videoroastery.com/about/" : slug === "en" ? "https://videoroastery.com/en/" : slug === "zh" ? "https://videoroastery.com/zh/" : slug === "zh-hant" ? "https://videoroastery.com/zh-hant/" : slug === "rememory" ? "https://videoroastery.com/rememory/" : slug === "free" ? "https://videoroastery.com/free/" : (route ? `https://videoroastery.com/${route.slug}/` : "https://videoroastery.com/");
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
  document.querySelector("#app").innerHTML = industryPages[slug] ? industryPage(slug) : slug === "estimate" ? estimatePage() : slug === "about" ? aboutPage() : slug === "en" ? enPage() : slug === "zh" ? zhPage("hans") : slug === "zh-hant" ? zhPage("hant") : slug === "rememory" ? rememoryPage() : slug === "free" ? freePage() : (route ? detailPage(route) : mainPage());
  setupStickyCta();
  setupPortfolioLightbox();
  setupReelGallery();
  setupConsultForm();
  setupQuoteForm();
  setupScrollReveal();
  setupHeroMotion();
  setupHeroWall();
  setupImageFade();
}

// 프리미엄 이미지 페이드인 — 안전설계: CSS 기본 opacity:1(무JS·미처리 시 항상 보임).
// JS가 능동적으로만 pic-pending(숨김)을 붙이고, 모든 대상에 load+error 리스너로 반드시 노출.
// → 캐시(complete)·깨진 이미지·JS 실패 어떤 경우에도 이미지가 안 보이는 사고 원천 차단.
function setupImageFade() {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return; // 모션 최소화: 즉시 노출(기본 opacity:1)
  var imgs = document.querySelectorAll("img.pic-fade");
  Array.prototype.slice.call(imgs).forEach(function (img) {
    if (img.classList.contains("pic-bound")) return;
    img.classList.add("pic-bound");
    if (img.complete && img.naturalWidth > 0) return; // 이미 로드됨(캐시) → 그대로 노출
    img.classList.add("pic-pending");
    var reveal = function () { img.classList.remove("pic-pending"); };
    img.addEventListener("load", reveal, { once: true });
    img.addEventListener("error", reveal, { once: true }); // 깨진 이미지도 반드시 노출
  });
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
  const GAP = -1; // 타일 1px 겹침 → 서브픽셀 검은 이음새까지 제거(완전 무이음 영상월)
  if (reduce) {
    // 모션 최소화 사용자: 마퀴·클론 없이 타일을 정지 상태로 가로 배열.
    // (절대배치 타일은 CSS만으로는 전부 left:0에 겹쳐 쌓이므로 JS에서 정적 위치 지정이 필요.)
    Array.prototype.slice.call(wall.querySelectorAll(".hw-row")).forEach((row) => {
      const tiles = Array.prototype.slice.call(row.querySelectorAll(".hw-tile"));
      if (!tiles.length) return;
      // 정적 경로도 타일폭이 로드 후 바뀌면 간격이 벌어지므로, 폭 변화 시 재배치(마퀴 경로와 동일한 근본대응).
      const place = () => {
        const tw = tiles[0].getBoundingClientRect().width + GAP;
        tiles.forEach((t, i) => { t.style.transform = "translateX(" + (i * tw).toFixed(2) + "px)"; });
      };
      place();
      if (typeof ResizeObserver !== "undefined") new ResizeObserver(place).observe(tiles[0]);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(place).catch(() => {});
      window.addEventListener("resize", place, { passive: true });
    });
  } else {
    const SPEED = 13; // px/s (Codex 권장 12~14, 더 시네마틱하게 하향)
    // 트랙폭 계산에 쓸 최대 뷰포트(현재폭·화면폭 중 큰 값) — 창을 넓혀도 빈틈 안 나게 여유 확보
    const maxVW = Math.max(window.innerWidth || 0, (window.screen && window.screen.width) || 0, 1024);
    const setups = Array.prototype.slice.call(wall.querySelectorAll(".hw-row")).map((row, ri) => {
      const dir = ri % 2 === 0 ? -1 : 1; // 홀짝 줄 반대방향
      const tiles = Array.prototype.slice.call(row.querySelectorAll(".hw-tile"));
      const baseCount = tiles.length;
      const twOf = () => tiles[0].getBoundingClientRect().width + GAP;
      let tw = twOf();
      // 재활용 밴드(=타일 합 폭 total) < 뷰포트면 오른쪽에 세로 검은 틈이 주기적으로 생긴다.
      // 타일 세트를 통째 복제해 total ≥ 뷰포트×2 + 타일1개를 보장 → 어떤 화면폭에서도 빈틈 0.
      let guard = 0;
      while (tiles.length * tw < maxVW * 2 + tw && guard < 8) {
        for (let i = 0; i < baseCount; i++) {
          const clone = tiles[i].cloneNode(true);
          clone.setAttribute("aria-hidden", "true"); // 복제본은 접근성 트리에서 제외(중복 낭독 방지)
          row.appendChild(clone);
          tiles.push(clone);
        }
        guard++;
      }
      const n = tiles.length;
      let total = tw * n;
      let stagger = (ri % 4) * (tw / 4); // 줄마다 ¼타일씩 밀어 4줄이 세로로 안 겹치게(벽돌쌓기)
      const xs = tiles.map((t, i) => i * tw + stagger);
      const normalize = () => { // total-tw를 넘는 타일을 왼쪽(-tw쪽)으로 감아 좌측 끝 빈틈(컷 튐) 방지
        for (let i = 0; i < n; i++) {
          while (xs[i] >= total - tw) xs[i] -= total;
          while (xs[i] < -tw) xs[i] += total;
        }
      };
      normalize();
      const apply = () => { for (let i = 0; i < n; i++) tiles[i].style.transform = "translateX(" + xs[i].toFixed(2) + "px)"; };
      apply();
      // ── 근본수정(검은 줄 재발의 진짜 원인): 타일 실측폭은 폰트로드·이미지 디코드·vh 확정·스크롤바·리사이즈로
      //    로드 직후 바뀔 수 있는데, tw를 로드 시 1회만 재서 고정하면 실제 타일폭과 어긋나 6px여야 할 간격이
      //    수십 px 검은 줄로 벌어진다. tw 변화 감지 시 xs를 새 tw 격자로 재배치(re-snap)해 항상 정확한 간격 유지. ──
      const relayout = () => {
        const ntw = twOf();
        if (!ntw || Math.abs(ntw - tw) < 0.5) return; // 변화 없으면 스킵(ResizeObserver 무한루프 방지)
        const scale = ntw / tw; // 비율 스케일: 간격·스태거·애니 위상 모두 보존, 새 간격이 정확히 GAP(6px)
        for (let i = 0; i < n; i++) xs[i] *= scale;
        tw = ntw; total = tw * n;
        normalize(); apply();
      };
      if (typeof ResizeObserver !== "undefined") new ResizeObserver(relayout).observe(tiles[0]);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout).catch(() => {});
      window.addEventListener("resize", relayout, { passive: true });
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
// ===== 릴/작업 갤러리 — WATCH REEL(원형 버튼) 클릭 시 전체 작업을 한곳에 모아보기 =====
// 영상이 연결된 포폴 항목만 모아 그리드로 보여주고, 타일 클릭은 기존 라이트박스(vr-lightbox)로 재생.
// data-video 만 세팅하면 setupPortfolioLightbox가 그대로 연결해준다(신규 재생 로직 0).
function reelGalleryVideoItems() {
  return portfolioWallItems
    .map((item) => ({ item, link: portfolioLink(item) }))
    .filter((x) => x.link && x.link.type === "video");
}

const reelGalleryCopy = {
  ko: { kicker: "Video Roastery® · 쇼릴", title: "우리가 만든 것", sub: "제주 현장 촬영·드론부터 AI 숏폼·브랜드필름까지. 눌러서 바로 재생해 보세요.", close: "닫기" },
  en: { kicker: "Video Roastery® · Showreel", title: "Selected Work", sub: "Drone, brand film, AI short-form — all shot & cut in Jeju. Tap any clip to play.", close: "Close" },
  hans: { kicker: "Video Roastery® · 展示卷", title: "精选作品", sub: "从济州岛现场航拍到 AI 短视频与品牌短片。点击任意作品即可播放。", close: "关闭" },
  hant: { kicker: "Video Roastery® · 展示卷", title: "精選作品", sub: "從濟州島現場空拍到 AI 短影音與品牌短片。點擊任一作品即可播放。", close: "關閉" }
};
// 비한국어 갤러리 타일 제목 — 한글 설명 대신 언어별 카테고리 명칭(라이트박스 캡션에도 사용).
const reelCatNames = {
  en: { web: "Website", drone: "Drone & Aerial", content: "Content", system: "Automation", ai: "AI Short-form", wedding: "Wedding Film" },
  hans: { web: "网站", drone: "无人机航拍", content: "内容", system: "自动化", ai: "AI 短视频", wedding: "婚礼影像" },
  hant: { web: "網站", drone: "無人機空拍", content: "內容", system: "自動化", ai: "AI 短影音", wedding: "婚禮影像" }
};

function reelGalleryMarkup(lang) {
  const c = reelGalleryCopy[lang] || reelGalleryCopy.ko;
  const ko = lang === "ko";
  const names = reelCatNames[lang];
  const tiles = reelGalleryVideoItems().map(({ item, link }) => {
    const title = ko ? item.title : (names && names[item.category]) || item.label;
    return `
      <button class="reel-tile" type="button" data-video="${link.src}" aria-haspopup="dialog">
        <img src="${asset(item.image)}" alt="${title}" loading="lazy" decoding="async" />
        <span class="portfolio-play" aria-hidden="true"></span>
        <span class="portfolio-meta"><small>${item.label}</small><strong>${title}</strong></span>
      </button>`;
  }).join("");
  return `
    <div class="reel-gallery-inner">
      <div class="reel-gallery-head">
        <div class="reel-gallery-heading">
          <p class="reel-gallery-kicker">${c.kicker}</p>
          <h2 class="reel-gallery-title">${c.title}</h2>
          <p class="reel-gallery-sub">${c.sub}</p>
        </div>
        <button class="reel-gallery-close" type="button" aria-label="${c.close}">✕</button>
      </div>
      <div class="reel-gallery-grid">${tiles}</div>
    </div>`;
}

function setupReelGallery() {
  const triggers = document.querySelectorAll("[data-reel-open]");
  if (!triggers.length) return;
  let box = document.querySelector("#reel-gallery");
  if (!box) {
    box = document.createElement("div");
    box.id = "reel-gallery";
    box.className = "reel-gallery";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "작업 갤러리");
    document.body.appendChild(box);
    const close = () => {
      box.classList.remove("is-open");
      document.documentElement.style.removeProperty("overflow");
      if (box.__trigger && box.__trigger.focus) box.__trigger.focus();
      box.__trigger = null;
    };
    box.addEventListener("click", (e) => {
      if (e.target === box || e.target.closest(".reel-gallery-close")) close();
    });
    document.addEventListener("keydown", (e) => {
      if (!box.classList.contains("is-open")) return;
      const lb = document.querySelector("#vr-lightbox");
      const lbOpen = lb && lb.classList.contains("is-open");
      if (e.key === "Escape") {
        // 영상 라이트박스가 위에 열려 있으면, Esc는 그것만 닫고 갤러리는 유지(그리드로 복귀).
        if (lbOpen) return;
        close();
        return;
      }
      // 포커스 트랩: 라이트박스가 위에 없을 때만 갤러리 안에서 Tab 순환(모달 밖으로 포커스 이탈 방지).
      if (e.key === "Tab" && !lbOpen) {
        const f = box.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    box.__close = close;
  }
  triggers.forEach((t) => {
    if (t.__reelWired) return;
    t.__reelWired = true;
    t.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = t.getAttribute("data-reel-open") || "ko";
      box.innerHTML = reelGalleryMarkup(lang);
      box.__trigger = t;
      box.classList.add("is-open");
      document.documentElement.style.overflow = "hidden";
      box.scrollTop = 0;
      // 타일(data-video) → 기존 라이트박스 재생 연결(중복 연결은 __wired 가드로 방지)
      setupPortfolioLightbox();
      const closeBtn = box.querySelector(".reel-gallery-close");
      if (closeBtn) closeBtn.focus();
    });
  });
}

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
      // 릴 갤러리 위에 이 라이트박스가 열려 있을 때, Esc가 문서 레벨의 갤러리 핸들러까지
      // 도달해 갤러리째 닫히는 것을 방지(등록 순서 무관). → Esc는 영상만 닫고 그리드로 복귀.
      if (e.key === "Escape") { e.stopImmediatePropagation(); close(); return; }
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
  // 첫 섹션은 로드 시 항상 화면에 있으므로 reveal 숨김 없이 즉시 노출(콜드로드 빈 히어로 방지).
  targets.forEach((el, i) => { if (i > 0) el.classList.add("vr-reveal"); });
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

// 위로 가기 버튼 — body에 1회 생성(SPA 렌더와 무관 지속), 스크롤 시 노출, 클릭 시 맨 위로.
function setupBackToTop() {
  if (document.querySelector(".back-to-top")) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "back-to-top";
  btn.setAttribute("aria-label", "맨 위로 이동");
  btn.innerHTML = '<span aria-hidden="true">↑</span>';
  document.body.appendChild(btn);
  btn.addEventListener("click", () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });
  const toggle = () => btn.classList.toggle("is-visible", window.scrollY > 600);
  window.addEventListener("scroll", toggle, { passive: true });
  toggle();
}

render();
setupBackToTop();
