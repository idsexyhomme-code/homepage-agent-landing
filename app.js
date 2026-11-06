// ── 유입 분석 (Vercel Web Analytics + Microsoft Clarity) — 프로덕션 도메인에서만 수집 ──
(function initAnalytics() {
  const host = location.hostname;
  if (host !== "videoroastery.com" && host !== "www.videoroastery.com") return;
  // Vercel Web Analytics — 방문자·페이지뷰·이탈률·유입경로
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  const vs = document.createElement("script");
  vs.defer = true;
  vs.src = "/_vercel/insights/script.js";
  document.head.appendChild(vs);
  // Microsoft Clarity — 세션 녹화·히트맵 (project: xo3gh5bnxm)
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", "xo3gh5bnxm");
})();

// ── 검색광고 전환 추적 (네이버 검색광고 프리미엄 로그분석 + Google Ads) ──
// 광고 계정 개설 후 아래 ID만 채우면 활성화. 비어 있으면 아무 스크립트도 주입하지 않음.
// 프로덕션 도메인 게이트는 initAnalytics와 동일(로컬·프리뷰에서 전환이 잡히지 않도록).
const AD_TRACKING = {
  naverWa: "",      // 네이버 검색광고 > 도구 > 프리미엄 로그분석 > 공통 스크립트의 wcs_add["wa"] 값 (예: "s_1a2b3c4d5e")
  googleAw: "",     // Google Ads 전환 ID (예: "AW-123456789")
  googleLabel: ""   // Google Ads 전환 라벨 (예: "AbCdEfGhIj-1234567890")
};
// 광고 유입 파라미터 — UTM + 네이버 검색광고 자동 추적 파라미터(n_*) + Google gclid.
// 첫 착지에서 sessionStorage에 보관해, 다른 페이지로 이동한 뒤 문의해도 "어느 키워드·광고에서 왔는지"가 메일에 남도록.
const AD_PARAM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "n_media", "n_query", "n_keyword", "n_match", "n_rank", "n_ad_group", "n_ad", "gclid"];
const AD_PARAM_STORE = "vr_ad_params";
function isProductionHost() {
  const host = location.hostname;
  return host === "videoroastery.com" || host === "www.videoroastery.com";
}
function rememberAdParams() {
  try {
    const p = new URLSearchParams(location.search);
    const found = {};
    AD_PARAM_KEYS.forEach((k) => { const v = p.get(k); if (v) found[k] = v; });
    if (Object.keys(found).length) sessionStorage.setItem(AD_PARAM_STORE, JSON.stringify(found));
  } catch (e) { /* 저장 불가 환경(시크릿 등)은 무시 */ }
}
function storedAdParams() {
  try { return JSON.parse(sessionStorage.getItem(AD_PARAM_STORE) || "{}") || {}; } catch (e) { return {}; }
}
(function initAdTracking() {
  rememberAdParams();
  if (!isProductionHost()) return;
  if (AD_TRACKING.naverWa) {
    // 네이버 공통 스크립트 — 로드 완료 후 wcs_do()로 방문 기록 (SPA라 페이지 전환 시 adTrackPageview()가 재호출)
    window.wcs_add = window.wcs_add || {};
    window.wcs_add.wa = AD_TRACKING.naverWa;
    const ns = document.createElement("script");
    ns.async = true;
    ns.src = "https://wcs.naver.net/wcslog.js";
    ns.onload = () => { try { if (window.wcs && typeof window.wcs_do === "function") window.wcs_do(); } catch (e) { /* 무시 */ } };
    document.head.appendChild(ns);
  }
  if (AD_TRACKING.googleAw) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    const gs = document.createElement("script");
    gs.async = true;
    gs.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(AD_TRACKING.googleAw);
    document.head.appendChild(gs);
    window.gtag("js", new Date());
    window.gtag("config", AD_TRACKING.googleAw);
  }
})();
// SPA 페이지 전환마다 네이버 로그분석에 방문 1건 추가(최초 로드는 스크립트 onload에서 처리)
function adTrackPageview() {
  try {
    if (!isProductionHost() || !AD_TRACKING.naverWa) return;
    if (window.__adFirstRender === undefined) { window.__adFirstRender = false; return; }
    if (window.wcs && typeof window.wcs_do === "function") window.wcs_do();
  } catch (e) { /* 무시 */ }
}
// 문의 폼 전송 성공(*_sent) 시 두 광고 플랫폼에 "전환 1건" 보고 — 광고 성과·자동입찰의 근거가 됨
function fireAdConversion(eventName) {
  try {
    if (!isProductionHost()) return;
    if (AD_TRACKING.naverWa && window.wcs && typeof window.wcs.cnv === "function" && typeof window.wcs_do === "function") {
      const nasa = {};
      nasa.cnv = window.wcs.cnv("4", "0"); // 전환유형 4 = 신청/예약(문의), 전환가치 미지정
      window.wcs_do(nasa);
    }
    if (AD_TRACKING.googleAw && AD_TRACKING.googleLabel && typeof window.gtag === "function") {
      window.gtag("event", "conversion", { send_to: AD_TRACKING.googleAw + "/" + AD_TRACKING.googleLabel, event_category: eventName });
    }
  } catch (e) { /* 계측 실패가 사용자 흐름을 막지 않도록 무시 */ }
}

// ── 전환 계측 — 문의/견적 제출·CTA 클릭을 Clarity 커스텀 이벤트 + Vercel 이벤트로 기록 ──
// (방문/이탈만 잡던 분석에 "몇 명이 실제 문의로 전환됐나"를 더함. 프로덕션에서만 초기화됨=분석과 동일 게이트)
function trackEvent(name, meta) {
  if (/_sent$/.test(name)) fireAdConversion(name);
  try {
    if (typeof window.clarity === "function") {
      window.clarity("event", name);
      if (meta && meta.from) window.clarity("set", "conv_from", String(meta.from));
    }
    if (typeof window.va === "function") window.va("event", { name, ...(meta || {}) });
  } catch (e) { /* 계측 실패가 사용자 흐름을 막지 않도록 무시 */ }
}

// 전역 위임 클릭 리스너 1회 설치 — 페이지 전환(SPA 재렌더)과 무관하게 지속.
// mailto CTA(서비스 상세·리메모리·en/zh·업종 랜딩)와 무료/견적 유도 링크를 한 곳에서 포착.
function setupConversionTracking() {
  if (window.__convTrackInstalled) return;
  window.__convTrackInstalled = true;
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    const from = location.pathname;
    if (href.startsWith("mailto:")) trackEvent("inquiry_mailto", { from });
    else if (/\/free(\/|\?|$)/.test(href)) trackEvent("cta_free", { from });
    else if (/\/estimate(\/|\?|$)/.test(href)) trackEvent("cta_estimate", { from });
  }, true);
}

const routes = [
  {
    slug: "homepage",
    nav: "홈페이지",
    badge: "videoroastery.com/homepage",
    title: "홈페이지 제작부터 문의 연결까지",
    lead: "첫 화면에서 무엇을 파는지 바로 보이고, 포트폴리오와 문의 양식까지 자연스럽게 이어지도록 정리합니다.",
    metaDesc: "처음 들어온 사람이 무슨 일을 하는 곳인지 3초 만에 알고, 그 자리에서 문의를 남깁니다. 업종별 화면 예시를 먼저 보고 결정하세요. 제주 현장·전국 온라인 상담.",
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
    metaDesc: "문의가 와 있는지 몰라 놓치는 일이 없어집니다. 고객 요청과 답장 초안이 먼저 정리돼 도착합니다. 폼·메일·카카오·시트·알림까지 한 흐름으로.",
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
    metaDesc: "촬영 없이 가진 제품 사진만으로 쇼츠·릴스·틱톡 세로 광고를 받아보세요. 모델도 스튜디오도 필요 없습니다. 실제 결과물을 먼저 확인하고 시작하세요.",
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
    metaDesc: "회사 이야기가 순서대로 전달되면 설득이 쉬워집니다. 기업 소개·브랜드 메시지·ESG·서비스 안내 영상, 실제 납품 사례를 먼저 보고 상담하세요. 제주 현장·전국 온라인.",
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
    metaDesc: "숙소·시설·관광지·농장의 규모와 동선이 한 컷에 들어옵니다. 제주 드론 항공촬영, 야간 외관까지. 실제 촬영본을 먼저 보고 가능한 일정과 견적을 확인하세요.",
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
    slug: "content",
    nav: "콘텐츠",
    badge: "videoroastery.com/content",
    title: "카드뉴스와 릴스를 상담까지 이어지게 만듭니다",
    lead: "홍보 문구, 화면 순서, 카드뉴스, 릴스 소재를 흩어두지 않고 광고와 상담에 함께 쓰이도록 구성합니다.",
    metaDesc: "한 번 만든 소재가 상세페이지·카드뉴스·릴스로 계속 쓰입니다. 매번 새로 찍지 않아도 됩니다. 실제 사례를 보고 필요한 만큼만 상담하세요.",
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
    metaDesc: "반복되는 손일이 줄고, 사람이 해야 할 일에 시간이 남습니다. 노션·시트·폼·메일·AI 도구 — 지금 쓰는 방식 그대로. 무엇부터 줄일지 먼저 확인하세요.",
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
  "content",
  "inquiry-agent"
];
// drone은 2026-09-03 홈 서비스 목록에서 제외(형 판단: 촬영 기본기라 전면 어필 불필요).
// routeBySlug·/drone/ 상세페이지·영문 SEO 랜딩(en/korea-drone-filming)은 그대로 유지 — 검색 유입 계속 받음.
const opsServiceSlugs = [
  "consulting"
];
const alsoServiceSlugs = [];
const serviceOrder = [
  ...coreServiceSlugs,
  ...opsServiceSlugs,
  ...alsoServiceSlugs
];
const displayRoutes = serviceOrder.map((slug) => routeBySlug[slug]).filter(Boolean);
const coreRoutes = coreServiceSlugs.map((slug) => routeBySlug[slug]).filter(Boolean);
const opsRoutes = opsServiceSlugs.map((slug) => routeBySlug[slug]).filter(Boolean);
const routeLabels = {
  homepage: ["WEB", "홈페이지 제작"],
  drone: ["DRONE", "드론 항공촬영"],
  "ai-shortform": ["AI FILM", "AI 영상·숏폼"],
  "brand-film": ["BRAND", "기업 홍보영상"],
  "inquiry-agent": ["SYSTEM", "n8n AI 업무자동화 — 문의 분류·초안"],
  content: ["CONTENT", "카드뉴스·릴스"],
  consulting: ["AI OPS", "AI 활용 상담"]
};
const routeCardImages = {
  homepage: "card_homepage.jpg",
  drone: "card_drone.jpg",
  "ai-shortform": "card_ai_shortform_photo.jpg",
  "brand-film": "card_brand_film_photo.jpg",
  "inquiry-agent": "card_inquiry_agent_photo.jpg",
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

// 후기 — 크몽 실거래 리뷰 발췌. 원문 그대로, 이름은 크몽 공개 표기 기준 업종·유형으로 표기
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
  // 2026-09-02 교체 — 아이허브·「다음 획」·「馬, 시대를 잇다」는 프로토타입 미완본이라 전량 내리고(형 지시),
  //   아래 완성본 3편으로 대체. 〈귀양풀이〉도 완성 전이라 계속 비노출.
  ["portfolio_covers/ad_barojuyu.jpg", "ai", "AD", "GS칼텍스 바로주유 AI 광고 — 자체 기획", "ai-shortform", "wide"],
  // WEB → homepage 서비스 페이지
  // 2026-09 추가 — 라이브 운영 중인 자체·의뢰 서비스
  // 2026-10 자연인 글램핑 예약 홈페이지(의뢰, 라이브) — 계약상 포트폴리오 활용 가능
  ["portfolio_covers/site_jayeonin.jpg", "web", "WEB", "자연인 글램핑 — 예약 홈페이지 (제주시)", "homepage", "wide"],
  ["portfolio_covers/site_vrsub_v3.jpg", "web", "WEB", "VR 영상 구독 — 월정액 브랜드 영상팀", "homepage", "wide"],
  ["portfolio_covers/site_workradar_ko_v3.jpg", "web", "WEB", "WorkRadar — 직업별 AI 리스크 진단", "homepage", "wide"],
  ["portfolio_covers/site_workradar_en_v3.jpg", "web", "WEB", "WorkRadar EN — 영문판", "homepage", "wide"],
  ["portfolio_covers/site_regional_v3.jpg", "web", "WEB", "제주 로컬 브랜드 30일 런치", "homepage", "wide"],
  ["portfolio_content_reels_page.jpg", "content", "CONTENT", "릴스 포트폴리오", "content", "wide"],
  ["portfolio_automation_examples.jpg", "system", "SYSTEM", "문의 자동정리", "inquiry-agent"],
  ["portfolio_covers/site_beamish_v3.jpg", "web", "WEB", "품질 엘리베이터 — AI 광고 분석", "homepage"],
  ["portfolio_covers/site_aiops_v3.jpg", "web", "WEB", "품질 엘리베이터 — 소상공인 AI 비서", "homepage"],
  ["portfolio_covers/web_01.jpg", "web", "WEB", "포쉐어 — 유기견 봉사 앱", "homepage"],
  ["portfolio_covers/site_mimi_v3.jpg", "web", "WEB", "MIMI-GRAPHICS 갤러리 필름", "homepage"],
  ["portfolio_covers/site_pawshare_v3.jpg", "web", "WEB", "포쉐어 — 후원 랜딩", "homepage"],
  ["portfolio_covers/site_artist_v3.jpg", "web", "WEB", "아티스트 공식 사이트 — 앰비언트 R&B", "homepage"],
  ["portfolio_covers/site_sanjiro.jpg", "web", "WEB", "산지로 — 주문 수집·송장 자동화 (iOS·Android)", "homepage"],
  ["portfolio_covers/site_muscle.jpg", "web", "WEB", "머슬부스터 — 운동 기록 앱", "homepage"],
  // AI FILM → ai-shortform / brand-film
  ["portfolio_covers/ad_kombucha.jpg", "ai", "AD", "콤부차 제품 광고", "ai-shortform"],
  ["portfolio_covers/ad_beauty_ugc.jpg", "ai", "AD", "뷰티 UGC 광고", "ai-shortform"],
  ["portfolio_video_corporate_main.jpg", "ai", "BRAND", "감귤 브랜드 영상", "brand-film"],
  ["portfolio_video_industrial_brand.jpg", "ai", "BRAND", "감귤 건강식품 영상", "brand-film"],
  ["portfolio_video_esg_brand.jpg", "ai", "BRAND", "ESG 메시지 영상", "brand-film"],
  ["portfolio_covers/ai_03.jpg", "ai", "AI FILM", "AI 제품 광고 영상", "ai-shortform"],
  ["portfolio_covers/ai_kombucha.jpg", "ai", "AI FILM", "AI 콤부차 제품 릴스", "ai-shortform"],
  ["portfolio_covers/ai_nadaum.jpg", "ai", "AI FILM", "AI 브랜드 캠페인", "ai-shortform"],
  ["portfolio_covers/ai_esg_wind.jpg", "ai", "AI FILM", "AI ESG 캠페인", "ai-shortform"],
  ["portfolio_covers/ai_game_ua.jpg", "ai", "AI FILM", "AI 게임 광고 영상", "ai-shortform"],
  ["portfolio_covers/ai_saemangeum.jpg", "ai", "AI FILM", "AI 재생에너지 영상", "ai-shortform"],
  ["portfolio_covers/ai_esg_future.jpg", "ai", "AI FILM", "AI ESG 메시지 영상", "ai-shortform"],
  ["portfolio_covers/ai_superwater.jpg", "ai", "AI FILM", "AI 건강음료 숏폼", "ai-shortform"],
  ["portfolio_covers/ai_lemondiet.jpg", "ai", "AI FILM", "AI 다이어트 보충제 숏폼", "ai-shortform"],
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
  ["portfolio_covers/video_06.jpg", "ai", "AD", "NETIA 제품 광고 컷", "content"],
  // DRONE → drone (정적컷은 월 후순위로 정렬됨 → 앞에 둬도 무방)
  // 영상 연결 — 앞 3개가 상세 오버뷰(대표/설명/활용 컷) → 강한 컷 우선
  // CONTENT → content
  // 2026-10 추가 — 9~10월 실납품·자체운영
  ["portfolio_covers/jeju_jayeonin.jpg", "content", "CONTENT", "자연인 글램핑 — 추석·축구 중계 캠페인 (제주시)", "content", "wide"],
  ["portfolio_covers/jeju_1min.jpg", "content", "CONTENT", "1분제주 — 직접 운영하는 제주 정보 채널", "content"],
  ["portfolio_covers/gaebyeok_shorts.jpg", "content", "CONTENT", "개벽선원 — 유튜브 쇼츠·롱폼 채널 운영", "content"],
  ["portfolio_content_product.jpg", "content", "CONTENT", "제품 카드뉴스 소재", "content"],
  ["portfolio_content_ai_video.jpg", "content", "CONTENT", "AI 영상 카드", "content"],
  ["portfolio_covers/content_01.jpg", "content", "CONTENT", "제품 상세 컷", "content"],
  ["portfolio_covers/content_02.jpg", "content", "CONTENT", "주방 조리 과정 컷", "content"],
  ["portfolio_covers/content_03.jpg", "content", "CONTENT", "음식 브랜드 영상", "content"],
  ["portfolio_covers/content_04.jpg", "content", "CONTENT", "숏폼 소재 컷", "content"],
  ["portfolio_covers/content_05.jpg", "content", "CONTENT", "식당 홍보영상", "content"],
  // SYSTEM → inquiry-agent (문의 자동화)
  ["portfolio_automation_main.jpg", "system", "SYSTEM", "홈페이지 이후 업무 자동화", "inquiry-agent"],
  ["portfolio_automation_task_flow.jpg", "system", "SYSTEM", "문의폼 → 자동 정리 워크플로", "inquiry-agent"],
  ["portfolio_automation_scope.jpg", "system", "SYSTEM", "홈페이지 제작 범위 정의서", "inquiry-agent"],
  ["portfolio_covers/automation_01.jpg", "system", "SYSTEM", "n8n 챗봇 구축 설계도", "inquiry-agent"],
  ["portfolio_covers/automation_02.jpg", "system", "SYSTEM", "챗봇 상담 화면 (모바일)", "inquiry-agent"],
  ["portfolio_covers/automation_03.jpg", "system", "SYSTEM", "AI 답장 초안 화면", "inquiry-agent"],
  ["portfolio_covers/automation_04.jpg", "system", "SYSTEM", "챗봇 대화 흐름 UI", "inquiry-agent"],
  // SYSTEM → consulting (AI 활용 상담, 전용 배정)
  ["route_plan_actual.jpg", "system", "SYSTEM", "업종별 전용 랜딩 9종", "consulting"],
  ["route_plan_mobile.jpg", "system", "SYSTEM", "광고 클릭 후 첫 화면 설계", "consulting"],
  ["route_plan_mockups.jpg", "system", "SYSTEM", "전용 랜딩 구성 규격", "consulting"],
  ["route_plan_system.jpg", "system", "SYSTEM", "대표 홈 1 + 광고 랜딩 8 구조", "consulting"],
  ["portfolio_covers/automation_05.jpg", "system", "SYSTEM", "챗봇 UI 세트", "consulting"],
  ["portfolio_covers/automation_06.jpg", "system", "SYSTEM", "자동화 워크플로 점검", "consulting"],
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

const imgMeta = {"card_wedding.jpg":[1080,1080],"portfolio_video_esg_brand.jpg":[1200,750],"og_main.jpg":[1200,630],"portfolio_drone_wedding_wide.jpg":[960,540],"portfolio_drone_coast_cliff.jpg":[1100,619],"portfolio_wedding_beach_privacy.jpg":[960,540],"portfolio_automation_examples.jpg":[1200,750],"portfolio_drone_farm_terrace.jpg":[1280,720],"portfolio_content_reels_page.jpg":[540,960],"portfolio_automation_task_flow.jpg":[1200,750],"profile_symbol.png":[428,428],"portfolio_video_corporate_main.jpg":[1200,750],"card_ai_shortform_photo.jpg":[1200,1200],"portfolio_drone_coast_field.jpg":[1100,619],"portfolio_wedding_bouquet_lens.jpg":[1200,750],"muscle_booster.png":[1710,875],"portfolio_drone_grid_supplement.jpg":[960,540],"portfolio_automation_homepage_flow.jpg":[1200,750],"portfolio_drone_night_exterior_clean.jpg":[1200,750],"apple-touch-icon.png":[180,180],"videoroastery.png":[1710,875],"card_inquiry_agent_photo.jpg":[1200,1200],"danggeun_ad_homepage_ai_1080.jpg":[1080,1080],"portfolio_drone_topdown_garden.jpg":[960,540],"portfolio_drone_coastal_overview_clean.jpg":[960,600],"portfolio_content_request_form.jpg":[1200,750],"card_homepage.jpg":[1080,1080],"card_rememory.jpg":[1080,1080],"portfolio_covers/ai_nadaum_case.webp":[720,470],"rememory_before.jpg":[780,1045],"rememory_after.jpg":[780,1045],"rememory_scene.jpg":[1600,1073],"og_brand_film.jpg":[1200,630],"portfolio_drone_coastal_overview.jpg":[1200,750],"logo.png":[512,512],"ai_service_landing.png":[1710,875],"route_plan_system.jpg":[1280,1024],"portfolio_wedding_studio_mood.jpg":[1280,720],"og_content.jpg":[1200,630],"portfolio_web_product_drop.png":[1710,875],"portfolio_web_shortform_a.png":[1710,875],"vr_canada.png":[1710,875],"portfolio_drone_farm_field.jpg":[960,540],"vibecoding_1.png":[1710,875],"portfolio_wedding_detail_sixcut.jpg":[960,540],"portfolio_automation_scope.jpg":[1200,750],"portfolio_web_shortform_b.png":[1710,875],"og_inquiry_agent.jpg":[1200,630],"card_consulting_photo.jpg":[1200,1200],"pawshare_landing.png":[1710,875],"vibecoding_2.png":[1710,875],"portfolio_drone_village_overview.jpg":[1100,619],"portfolio_drone_museum_exterior.jpg":[1200,750],"favicon.png":[64,64],"route_plan_mockups.jpg":[1280,1280],"og_drone.jpg":[1200,630],"og_ai_shortform.jpg":[1200,630],"og_homepage.jpg":[1200,630],"og_consulting.jpg":[1200,630],"portfolio_drone_facility_route_clean.jpg":[1200,470],"card_brand_film_photo.jpg":[1200,1200],"vibecoding_3.png":[1710,875],"portfolio_video_industrial_brand.jpg":[1200,750],"portfolio_content_product.jpg":[1200,750],"portfolio_drone_facility_route.jpg":[960,540],"portfolio_video_product_style.jpg":[1280,720],"symbol.png":[256,256],"portfolio_content_context.jpg":[1200,750],"portfolio_drone_resort_facility.jpg":[1200,750],"portfolio_video_shortform_main.jpg":[720,1280],"portfolio_content_ai_video.jpg":[1200,750],"portfolio_automation_portfolio.jpg":[1200,750],"portfolio_wedding_ring_detail.jpg":[1200,750],"portfolio_web_video_dark_v2.png":[1280,720],"og_wedding.jpg":[1200,630],"portfolio_web_ai_ops.png":[1710,875],"route_plan_actual.jpg":[1280,1252],"portfolio_automation_main.jpg":[1200,750],"portfolio_content_review.jpg":[1200,750],"route_plan_mobile.jpg":[789,1280],"portfolio_drone_night_exterior.jpg":[1200,750],"portfolio_web_beamish.png":[1710,875],"portfolio_web_regional_brand.png":[1710,875],"card_drone.jpg":[1080,1080],"portfolio_wedding_flower_detail.jpg":[1200,750],"portfolio_covers/drone_06.jpg":[1100,619],"portfolio_covers/beauty.jpg":[1280,720],"portfolio_covers/ai_kombucha.jpg":[640,1138],"portfolio_covers/automation_01.jpg":[1200,900],"portfolio_covers/content_05.jpg":[1280,720],"portfolio_covers/corp_03.jpg":[1280,720],"portfolio_covers/web_02.jpg":[1200,900],"portfolio_covers/video_04.jpg":[405,720],"portfolio_covers/wedding_06.jpg":[1200,900],"portfolio_covers/web_03.jpg":[1200,900],"portfolio_covers/video_05.jpg":[540,960],"portfolio_covers/ai_saemangeum.jpg":[640,1138],"portfolio_covers/corp_02.jpg":[1280,720],"portfolio_covers/content_04.jpg":[720,1280],"portfolio_covers/corp_09.jpg":[1280,720],"portfolio_covers/content_03.jpg":[1280,720],"portfolio_covers/corp_05.jpg":[1280,720],"portfolio_covers/site_sanjiro.jpg":[1280,720],"portfolio_covers/ai_lemondiet.jpg":[640,1138],"portfolio_covers/web_04.jpg":[1200,900],"portfolio_covers/web_05.jpg":[1200,900],"portfolio_covers/ai_01.jpg":[1280,720],"portfolio_covers/corp_04.jpg":[1280,720],"portfolio_covers/automation_06.jpg":[1200,900],"portfolio_covers/content_02.jpg":[1280,720],"portfolio_covers/drone_01.jpg":[960,540],"portfolio_covers/wedding_01.jpg":[1280,720],"portfolio_covers/corp_08.jpg":[1280,720],"portfolio_covers/wedding_indoor.jpg":[1280,720],"portfolio_covers/wedding_02.jpg":[1200,900],"portfolio_covers/web_06.jpg":[1200,900],"portfolio_covers/corp_07.jpg":[1280,720],"portfolio_covers/content_01.jpg":[720,1280],"portfolio_covers/automation_05.jpg":[1200,900],"portfolio_covers/drone_02.jpg":[1100,619],"portfolio_covers/automation_04.jpg":[1200,900],"portfolio_covers/ai_esg_wind.jpg":[640,1138],"portfolio_covers/corp_06.jpg":[1280,720],"portfolio_covers/site_artist.jpg":[1280,720],"portfolio_covers/video_01.jpg":[1280,720],"portfolio_covers/ai_03.jpg":[1280,720],"portfolio_covers/wedding_03.jpg":[1200,900],"portfolio_covers/video_06.jpg":[960,540],"portfolio_covers/wedding_jeju_snap.jpg":[1280,720],"portfolio_covers/corp_01.jpg":[1280,720],"portfolio_covers/automation_03.jpg":[1200,900],"portfolio_covers/ai_game_ua.jpg":[405,720],"portfolio_covers/drone_04.jpg":[960,540],"portfolio_covers/wedding_04.jpg":[1200,900],"portfolio_covers/ai_superwater.jpg":[640,1138],"portfolio_covers/ai_nadaum.jpg":[640,1138],"portfolio_covers/ai_esg_future.jpg":[640,1138],"portfolio_covers/wedding_05.jpg":[1200,900],"portfolio_covers/drone_05.jpg":[1100,619],"portfolio_covers/content_06.jpg":[1200,900],"portfolio_covers/site_muscle.jpg":[1280,720],"portfolio_covers/site_vrsub.jpg":[1280,800],"portfolio_covers/site_workradar_ko.jpg":[1280,800],"portfolio_covers/site_workradar_en.jpg":[1280,800],"portfolio_covers/automation_02.jpg":[1200,900],"portfolio_covers/ai_05.jpg":[1280,720],"portfolio_covers/web_01.jpg":[1280,675],"logos/lg_uplus.png":[500,138],"logos/lions.png":[500,467],"logos/make_a_wish.png":[500,136],"portfolio_covers/ad_kombucha.jpg":[1080,1920],"portfolio_covers/ad_beauty_ugc.jpg":[720,1280],"portfolio_covers/ad_barojuyu.jpg":[720,1280],"portfolio_covers/jeju_jayeonin.jpg":[1200,900],"portfolio_covers/jeju_1min.jpg":[1200,900],"portfolio_covers/gaebyeok_shorts.jpg":[720,1280],"portfolio_covers/site_jayeonin.jpg":[1280,800],"portfolio_covers/site_vrsub_v2.jpg":[1280,800],"portfolio_covers/site_workradar_ko_v2.jpg":[1280,800],"portfolio_covers/site_workradar_en_v2.jpg":[1280,800],"portfolio_covers/site_regional_v2.jpg":[1280,800],"portfolio_covers/site_beamish_v2.jpg":[1280,800],"portfolio_covers/site_aiops_v2.jpg":[1280,800],"portfolio_covers/site_mimi_v2.jpg":[1280,800],"portfolio_covers/site_pawshare_v2.jpg":[1280,800],"portfolio_covers/site_artist_v2.jpg":[1280,800],"portfolio_covers/site_vrsub_v3.jpg":[1280,800],"portfolio_covers/site_workradar_ko_v3.jpg":[1280,800],"portfolio_covers/site_workradar_en_v3.jpg":[1280,800],"portfolio_covers/site_regional_v3.jpg":[1280,800],"portfolio_covers/site_beamish_v3.jpg":[1280,800],"portfolio_covers/site_aiops_v3.jpg":[1280,800],"portfolio_covers/site_mimi_v3.jpg":[1280,800],"portfolio_covers/site_pawshare_v3.jpg":[1280,800],"portfolio_covers/site_artist_v3.jpg":[1280,800]};
// 섹션 헤더의 항목 수 표기 — 목록이 늘거나 줄면 표기도 따라간다(웨딩 제거 후 (06)이 남아 5개를 6개로 표기했던 자리).
function secCount(listHtml) {
  var n = (String(listHtml).match(/class="en-svc[ "]/g) || []).length;
  return "(" + String(n).padStart(2, "0") + ")";
}

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


// ── 한글 페이지 공통 상단 메뉴·푸터 (2026-10 재기획: 어느 페이지든 같은 메뉴) ──
const koDoors = [
  ["management", "월 관리", "제주 가게 사장님", "한 달에 한 번 찾아가 찍고, 그 촬영본으로 릴스·카드뉴스·소식을 한 달 동안 올립니다.", "portfolio_covers/content_05.jpg"],
  ["video", "영상 제작", "기업·기관 담당자", "홍보영상·행사 영상, 사진으로 만드는 AI 영상, 드론 촬영.", "portfolio_covers/corp_07.jpg"],
  ["homepage", "홈페이지·앱", "예약·문의가 필요한 곳", "예약과 문의가 들어오는 홈페이지, 주문과 업무를 줄여 주는 앱.", "portfolio_covers/site_jayeonin.jpg"]
];
const jejuIndustryLinks = [
  ["jeju-food-video", "음식점"], ["jeju-restaurant-menu-video", "메뉴 영상"], ["jeju-cafe-reels", "카페"], ["jeju-pension-video", "펜션·숙소"],
  ["jeju-hotel-promo", "호텔·리조트"], ["jeju-camping-video", "캠핑·글램핑"], ["jeju-activity-video", "체험·투어"], ["jeju-farm-video", "농장"],
  ["jeju-clinic-video", "병원·한의원"], ["jeju-beauty-video", "뷰티샵"], ["jeju-fitness-video", "헬스·필라테스"], ["jeju-academy-video", "학원"],
  ["jeju-real-estate-video", "부동산·토지"], ["jeju-homepage", "홈페이지"]
];
function koBar(ink = true) {
  return `<header class="en-bar${ink ? " en-bar--ink" : ""}">
        <a class="en-wm" href="${routeHref()}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="메뉴"><a href="${routeHref("work")}">작업</a><a href="${sectionHref("services")}">서비스</a><a href="${routeHref("about")}">회사소개</a><a href="${routeHref("estimate")}">문의</a><span class="en-lang">${langSwitch("ko")}</span></nav>
      </header>`;
}
function koFooter() {
  const doors = koDoors.map(([slug, t]) => `<a href="${routeHref(slug)}">${t}</a>`).join("");
  const jeju = jejuIndustryLinks.map(([slug, t]) => `<a href="${routeHref(slug)}">${t}</a>`).join("");
  return `<footer class="en-footer ko-foot">
        <div class="ko-foot-grid">
          <div class="ko-foot-brand"><strong>VIDEO ROASTERY®</strong><span>제주 촬영 · 전국 온라인 · 캐나다 원격 편집</span></div>
          <nav aria-label="서비스"><b>서비스</b>${doors}</nav>
          <nav class="ko-foot-jeju" aria-label="제주 업종별 안내"><b>제주 업종별</b><span>${jeju}</span></nav>
          <nav aria-label="더보기"><b>더보기</b><a href="${routeHref("work")}">작업 사례</a><a href="${routeHref("about")}">회사소개</a><a href="${routeHref("estimate")}">문의</a><a href="${routeHref("rememory")}">옛 사진 복원</a><a href="${routeHref("privacy")}">개인정보처리방침</a><a href="${routeHref("en")}">English</a></nav>
        </div>
      </footer>`;
}
function koDoorCards() {
  return koDoors.map(([slug, t, who, d, img]) => `<a class="en-jeju-card" href="${routeHref(slug)}">${pic(img, { alt: t })}<span class="en-jeju-k">${who}</span><strong>${t}</strong><span class="en-jeju-d">${d}</span></a>`).join("");
}
function koCta(h = "가진 자료만 주세요.<br>딱 맞는 범위로 회신합니다.") {
  return `<section class="en-cta" id="contact">
          <p class="en-eyebrow">문의</p>
          <h2 class="en-cta-h">${h}</h2>
          <div class="en-detail-actions">
            <a class="en-cta-btn" href="${routeHref("estimate")}">문의하기 ↗</a>
            <a class="en-detail-link" href="${kakaoUrl}" target="_blank" rel="noopener">카카오톡으로 물어보기</a>
          </div>
        </section>`;
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
  content: "CONTENT",
  consulting: "CONSULTING"
};

// 히어로 영상월 — 줄마다 '완전히 다른' 큐레이션 컷(줄 간 중복 0)으로 반복감 제거. 검증된 hero_wall/loops webp.
const heroWallRows = [
  ["hero_wall/hw_07.webp","hero_wall/food_meat_clean.webp","hero_wall/hw_29.webp","hero_wall/corp_tower_clean.webp","hero_wall/hw_03.webp","hero_wall/product_ingredients.webp","hero_wall/hw_24.webp","hero_wall/hw_26.webp"],
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
  const svcs = ["AI 숏폼", "기업영상", "드론 촬영", "홈페이지", "브랜드필름", "콘텐츠", "AI 시네마틱"];
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
      ${koBar()}
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
      ${koFooter()}
    </div>
  `;
}

// ── 영/중 견적 페이지 — 한국어 /estimate 와 대칭(견적 절차·요인 안내 + 문의 폼) ──
// slug: "en/estimate" · "zh/estimate" · "zh-hant/estimate" (경로 기반 라우팅이 하위경로 자동 지원)
const i18nEstimateRoutes = { "en/estimate": "en", "zh/estimate": "hans", "zh-hant/estimate": "hant" };
const i18nEstimateCopy = {
  en: {
    title: "Get a Quote — Video Roastery", url: "https://videoroastery.com/en/estimate/",
    desc: "No fixed price list. Send what you have and the result you want — we confirm the scope and reply with a tailored quote. Jeju on-site, remote worldwide.",
    navHome: "Home", navQuote: "Get a quote", skip: "Skip to content",
    eyebrow: "Estimate", h1: "We reply with a tailored quote.",
    lead: "We don't post fixed prices. Send us what you have and the result you want — we confirm the scope and send a quote built for your project.",
    cta: "Request a quote ↗", stepsHead: "How it works", factorsHead: "What shapes the quote",
    steps: [
      ["01", "Send your materials", "Send the product shots, logo and reference videos you have, plus the result you want. Photos alone are fine — no shoot required."],
      ["02", "We confirm the scope", "We organize the production scope and timeline from what you sent. Ask us anything by email first."],
      ["03", "Tailored quote", "We reply with a quote — scope, structure and timeline built for your project. Only what you actually need, not a fixed price."],
      ["04", "Production starts", "Once confirmed, we begin right away. Revisions are agreed up front and worked through together."]
    ],
    factors: [
      ["Scope", "Number of videos, length, and versions — subtitled / clean / per-channel resizes."],
      ["Shoot or not", "Whether on-site Jeju filming or drone is needed, or your existing materials are enough."],
      ["Planning depth", "Simple editing, or concept and script from the ground up."],
      ["Timeline", "A standard schedule or a rush deadline."],
      ["Revisions", "The number of revision rounds, agreed in advance."],
      ["Usage", "Social, ads, or broader commercial usage."]
    ],
    formHead: "Contact", formH: "Request a quote",
    formNote: "Tell us what you have and the result you want — we'll confirm the scope and reply with a tailored quote.",
    footer: "Jeju, South Korea · Remote worldwide"
  },
  hans: {
    title: "获取报价 — Video Roastery", url: "https://videoroastery.com/zh/estimate/",
    desc: "我们不标注固定价格。告诉我们您有什么、想要什么结果——确认制作范围后回复量身定制的报价。济州现场，全球远程。",
    navHome: "首页", navQuote: "获取报价", skip: "跳到正文",
    eyebrow: "报价说明", h1: "我们回复量身定制的报价。",
    lead: "我们不标注固定价格。告诉我们您有什么、想要什么结果——我们确认制作范围后，回复为您项目量身打造的报价。",
    cta: "索取报价 ↗", stepsHead: "报价流程", factorsHead: "影响报价的因素",
    steps: [
      ["01", "发送素材", "发送您现有的产品照片、logo、参考视频，以及想要的成品。只有照片也可以——无需拍摄。"],
      ["02", "确认范围", "根据您发送的素材，我们梳理制作范围与时间。有疑问可先邮件咨询。"],
      ["03", "定制报价", "我们回复一份报价——为您项目量身打造的范围、构成与时间。只做真正需要的，而非固定价。"],
      ["04", "开始制作", "确认后立即开始。修改次数事先约定，一起打磨完成。"]
    ],
    factors: [
      ["制作范围", "条数、时长与版本——带字幕／无字幕／各渠道尺寸。"],
      ["是否拍摄", "是否需要济州现场拍摄或无人机，还是仅用现有素材即可。"],
      ["策划深度", "是简单剪辑，还是从概念与脚本做起。"],
      ["交期", "常规时间还是加急。"],
      ["修改次数", "事先约定的修改轮数。"],
      ["使用范围", "社交媒体、广告或更广的商业使用。"]
    ],
    formHead: "联系", formH: "索取报价",
    formNote: "告诉我们您有什么、想要什么结果——我们确认范围后回复量身定制的报价。",
    footer: "韩国济州岛 · 全球远程"
  },
  hant: {
    title: "取得報價 — Video Roastery", url: "https://videoroastery.com/zh-hant/estimate/",
    desc: "我們不標示固定價格。告訴我們您有什麼、想要什麼成果——確認製作範圍後回覆量身打造的報價。濟州現場，全球遠端。",
    navHome: "首頁", navQuote: "取得報價", skip: "跳到正文",
    eyebrow: "報價說明", h1: "我們回覆量身打造的報價。",
    lead: "我們不標示固定價格。告訴我們您有什麼、想要什麼成果——我們確認製作範圍後，回覆為您專案量身打造的報價。",
    cta: "索取報價 ↗", stepsHead: "報價流程", factorsHead: "影響報價的因素",
    steps: [
      ["01", "傳送素材", "傳送您現有的產品照片、logo、參考影片，以及想要的成品。只有照片也可以——無需拍攝。"],
      ["02", "確認範圍", "根據您傳送的素材，我們整理製作範圍與時程。有疑問可先以電子郵件詢問。"],
      ["03", "客製報價", "我們回覆一份報價——為您專案量身打造的範圍、架構與時程。只做真正需要的，而非固定價。"],
      ["04", "開始製作", "確認後立即開始。修改次數事先協議，一起打磨完成。"]
    ],
    factors: [
      ["製作範圍", "支數、長度與版本——含字幕／無字幕／各平台尺寸。"],
      ["是否拍攝", "是否需要濟州現場拍攝或空拍，還是僅用現有素材即可。"],
      ["企劃深度", "是單純剪輯，還是從概念與腳本做起。"],
      ["交期", "一般時程或急件。"],
      ["修改次數", "事先協議的修改輪數。"],
      ["使用範圍", "社群、廣告或更廣的商業使用。"]
    ],
    formHead: "聯絡", formH: "索取報價",
    formNote: "告訴我們您有什麼、想要什麼成果——我們確認範圍後回覆量身打造的報價。",
    footer: "韓國濟州島 · 全球遠端"
  }
};

function i18nEstimatePage(lang) {
  const c = i18nEstimateCopy[lang];
  const fc = i18nFormCopy[lang];
  const homeSlug = { en: "en", hans: "zh", hant: "zh-hant" }[lang];
  const basic = lang === "en" ? "" : " basic-zh";
  const mail = `mailto:${consultEmail}?subject=${encodeURIComponent(fc.subject)}`;
  const steps = c.steps.map(([n, t, d]) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${n}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span></div>`).join("");
  const factors = c.factors.map(([t, d], i) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span></div>`).join("");
  return `
    <a class="skip-link" href="#main">${c.skip}</a>
    <div class="en-page${basic}">
      <header class="en-bar en-bar--ink">
        <a class="en-wm" href="${routeHref(homeSlug)}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="menu"><a href="${routeHref(homeSlug)}">${c.navHome}</a><a href="#estimate-form">${c.navQuote}</a><span class="en-lang">${langSwitch(lang)}</span></nav>
      </header>
      <main id="main">
        <section class="en-detail-hero">
          <p class="en-eyebrow">${c.eyebrow}</p>
          <h1 class="en-detail-h1">${c.h1}</h1>
          <p class="en-detail-lead">${c.lead}</p>
          <div class="en-detail-actions">
            <a class="en-cta-btn" href="#estimate-form">${c.cta}</a>
          </div>
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>${c.stepsHead}</span><span>(04)</span></div>
          <div class="en-svc-list">${steps}</div>
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>${c.factorsHead}</span><span>(06)</span></div>
          <div class="en-svc-list">${factors}</div>
        </section>

        <section class="en-cta" id="estimate-form">
          <p class="en-eyebrow">${c.formHead}</p>
          <h2 class="en-cta-h">${c.formH}</h2>
          <p class="en-cta-note" style="margin-top:14px">${c.formNote}</p>
          ${i18nQuoteForm(lang)}
        </section>
      </main>
      <footer class="en-footer">
        <span>VIDEO ROASTERY® — ${c.footer}</span>
        <a href="${routeHref()}">한국어 ↗</a>
      </footer>
    </div>
  `;
}

// ── 영/중 서비스 상세 페이지 — 한국어 detailPage 와 대칭(히어로+구성+작업사례+FAQ+CTA) ──
// 서비스 슬러그는 한국어 라우트와 동일(homepage/ai-shortform/brand-film/drone/content) → 포트폴리오 미디어 재사용.
const i18nDetailUI = {
  en:   { home: "Home", work: "Work", contact: "Contact", comp: "What's included", workOn: "Selected work", workOff: "Screens", play: "▶ tap to play", faq: "FAQ", ctaH: "Just send what you have.<br>We reply with the right scope.", ctaNote: "Send us what you have and the result you want — we'll confirm the scope and reply honestly.", seeWork: "See work ↓", skip: "Skip to content", footer: "Jeju, South Korea · Remote worldwide" },
  hans: { home: "首页", work: "作品", contact: "联系", comp: "服务构成", workOn: "精选作品", workOff: "示例画面", play: "▶ 点击播放", faq: "常见问题", ctaH: "把您现有的发给我们，<br>我们回复合适的范围。", ctaNote: "告诉我们您有什么、想要什么结果——我们确认范围后如实回复。", seeWork: "查看作品 ↓", skip: "跳到正文", footer: "韩国济州岛 · 全球远程" },
  hant: { home: "首頁", work: "作品", contact: "聯絡", comp: "服務構成", workOn: "精選作品", workOff: "示例畫面", play: "▶ 點擊播放", faq: "常見問題", ctaH: "把您現有的傳給我們，<br>我們回覆合適的範圍。", ctaNote: "告訴我們您有什麼、想要什麼成果——我們確認範圍後如實回覆。", seeWork: "查看作品 ↓", skip: "跳到正文", footer: "韓國濟州島 · 全球遠端" }
};

// 공통 FAQ(7) — hans/hant는 파일 하단 i18nDetailZh 병합으로 채움
const i18nCommonFaq = {
  en: [
    ["How long does production take?", "Usually 1–4 weeks depending on length and scope. We confirm your materials, then give an exact schedule first."],
    ["How is pricing decided?", "We don't post fixed prices; after checking your materials and scope, we reply with a tailored quote. Tell us your budget range and we'll organize what's possible and what to leave out."],
    ["What about commercial usage rights?", "Delivered videos can be used for ads, websites, social and more within the scope agreed at the consult. If music, stock or AI-generated assets have usage limits, we confirm those before the contract."],
    ["Can you make AI short-form without a shoot?", "Yes. Product photos, existing footage, a logo and key lines are enough to build Reels and Shorts AI short-form. If materials are short, we'll guide you on the photos needed."],
    ["Are revisions possible?", "Revisions are included within the agreed scope. We lock tone, copy and structure first so big revisions don't come up."],
    ["How do we start?", "Just send the result you want, what you have, and your preferred timeline — we'll reply with what's possible and the next step. Pre-contract consults are no-pressure."],
    ["Do you work outside Jeju?", "Websites, video and content are produced online nationwide and worldwide. On-site filming and drone are arranged by schedule and region."]
  ],
  hans: [], hant: []
};

// 서비스 상세 콘텐츠 — en 채움, hans/hant는 하단 i18nDetailZh 병합으로 채움
const enLandingPages = {
  "en/jeju-video-production": {
    kicker: "Jeju Video Production",
    h1: "Video production in Jeju, Korea — for brands, hotels &amp; tours",
    lead: "Shooting a project in Jeju, or need Jeju footage from afar? We're a Jeju-based studio producing brand films, drone &amp; aerial, and short-form ads — on location here, and remote for teams worldwide. Send the goal and what you have; we reply with scope and a quote.",
    title: "Jeju Video Production — Brand Film, Drone & AI Video | Video Roastery",
    desc: "Jeju-based video production for brands, hotels and tours — brand films, drone and aerial, AI short-form ads. On location in Jeju, remote worldwide.",
    portfolio: "brand-film",
    windows: [
      ["01", "On location in Jeju", "Full crew and drone on the ground in Jeju — resorts, coastline, farms, events."],
      ["02", "Remote worldwide", "No shoot needed? We build from your footage and photos and deliver online."],
      ["03", "Where it's used", "Recut for ads, website, social and pitch decks — vertical, square and wide."]
    ],
    faq: [
      ["Can you shoot on location in Jeju?", "Yes — full video and drone crew based in Jeju. Tell us the dates and location and we'll confirm scope and a schedule."],
      ["Do you work with overseas teams remotely?", "Yes. We work with brands worldwide over email and shared drives; on-site filming in Jeju and Korea is arranged by schedule."]
    ]
  },
  "en/korea-drone-filming": {
    kicker: "Drone &amp; Aerial Filming in Korea",
    h1: "Drone filming in Korea — travel, real estate &amp; brand projects",
    lead: "Aerial footage that shows scale and place — Jeju coastline, resorts, facilities, city and countryside. Licensed drone work on the ground in Korea, delivered ready for ads, listings and brand films.",
    title: "Korea Drone Filming — Aerial Video in Jeju & Korea | Video Roastery",
    desc: "Licensed drone and aerial filming in Korea and Jeju — travel, real estate, resorts and brands. Hero aerials delivered for ads and web. Get a quote.",
    portfolio: "drone",
    windows: [
      ["01", "Licensed &amp; safe", "We check flight zones and permits in advance and shoot within the rules."],
      ["02", "Scale &amp; flow", "Hero wide shots plus explanatory aerials — approach, layout and surroundings."],
      ["03", "Ready to use", "Recut for website, ads and social in vertical, square and wide."]
    ],
    faq: [
      ["How do permits and flight zones work?", "We check permitted zones and clearances in advance and shoot within safety rules. Region and dates are reviewed together during the consult."],
      ["Can you film outside Jeju?", "Yes — Jeju is our base, and we arrange aerial shoots elsewhere in Korea by schedule and region."]
    ]
  },
  "en/jeju-tourism-video": {
    kicker: "Jeju Tourism &amp; Hospitality Video",
    h1: "Jeju tourism videos for hotels, tours &amp; destinations",
    lead: "Make guests want to book before they arrive. We turn Jeju's coastline, stays and experiences — ocean views, rooms, activities — into videos that convert on booking sites, OTAs and social.",
    title: "Jeju Tourism Video — Hotels, Tours & Destinations | Video Roastery",
    desc: "Tourism & hospitality video in Jeju — hotels, resorts, tours and destinations. Drone and mood footage that drives bookings on OTAs and social. Get a quote.",
    portfolio: "drone",
    windows: [
      ["01", "First-screen booking", "The first 3 seconds on an OTA or Instagram decide the booking. We build for that."],
      ["02", "Scale by drone", "Ocean views, grounds and pools shown from the air — a different level from stills."],
      ["03", "Ready before season", "One video before peak season lifts reach and conversion across channels."]
    ],
    faq: [
      ["Do you work with hotels and tour operators?", "Yes — resorts, hotels, pensions, tours and activities. We tailor the cut for OTAs, your own site and social."],
      ["Can you deliver without a shoot?", "Yes — we can build from your existing photos and footage; on-site filming and drone in Jeju are arranged by schedule."]
    ]
  },
  "en/vancouver-korea-video-production": {
    kicker: "Korea Video Production for Vancouver Brands",
    h1: "Korea-based video production for Vancouver &amp; North American brands",
    lead: "Need video shot in Korea, or a Korea-based team you can brief in English? We produce brand films, product and short-form for North American brands — filmed in Jeju and Korea, delivered online on your timezone.",
    title: "Korea Video Production for Vancouver Brands | Video Roastery",
    desc: "Korea-based video production for Vancouver and North American brands — brand films, product video, AI short-form. Briefed in English, delivered online.",
    portfolio: "brand-film",
    windows: [
      ["01", "Briefed in English", "Send the goal and references in English; we reply with scope, timeline and a quote."],
      ["02", "Filmed in Korea", "On-the-ground crew and drone in Jeju and Korea — footage you can't get from abroad."],
      ["03", "Delivered online", "Files delivered over shared drives, cut for ads, web and social."]
    ],
    faq: [
      ["I'm not in Korea — can we still work together?", "Yes. Most of the process is online — you brief us in English, we produce in Korea and deliver files. On-site filming is arranged by schedule."],
      ["Can you match our timezone for calls?", "We schedule calls to fit North American hours and keep the rest async over email and shared drives."]
    ]
  },
  // 2026-10 — 밴쿠버 리얼터 월 릴스 편집(실고객 진행 중). 고객명·영상은 사전 동의 전이라 익명 표기만(계약 4항).
  "en/real-estate-video-editing": {
    kicker: "Listing Reels · Greater Vancouver",
    h1: "Send a listing. Get a reel plan by morning.",
    lead: "We write the hook, the shot list and your voiceover. You film on your phone in ten minutes. We edit it ready to post.",
    title: "Listing Reels for Vancouver Realtors — Reel Plan by Morning | Video Roastery",
    desc: "Send a listing and get a one-page reel plan by your next morning — hook, shot list, voiceover and caption. Film on your phone, we edit it ready to post. For Greater Vancouver realtors, in English or Korean.",
    portfolio: "content",
    faqOnly: true,
    faq: [
      ["What do I need to send?", "The MLS link or address, a few phone photos, the price and what stands out. That is enough for us to write the plan."],
      ["When do I get the plan?", "By your next morning, Vancouver time. Send it in the evening and the plan is in your inbox when you start your day."],
      ["Do I need a camera?", "No. A phone filming vertically is enough. The shot list tells you where to stand and how long to hold each shot."],
      ["How fast is the edited reel?", "First cut in 48–72 business hours after we receive your clips. Two rounds of revisions are included."],
      ["Can I request in Korean?", "Yes. Send the request and get the plan in English or Korean — by email or KakaoTalk."],
      ["Is there a monthly option?", "Yes. A monthly plan covers four reels and two carousels, with a reel plan for each. Tell us how often you post and we'll quote it."]
    ]
  },
  "en/korea-product-video": {
    kicker: "Product Video &amp; AI Short-form",
    h1: "Product videos &amp; AI short-form ads for e-commerce brands",
    lead: "Turn product photos into ads that stop the scroll. With just your product shots and a concept, we build Reels, Shorts and TikTok ads that catch the eye in the first 3 seconds — no shoot, no models.",
    title: "Korea Product Video & AI Short-form Ads | Video Roastery",
    desc: "Product video and AI short-form ads for e-commerce brands — Reels, Shorts and TikTok built from your product photos. No shoot needed. Get a quote.",
    portfolio: "ai-shortform",
    windows: [
      ["01", "From your photos", "We start from your real product shots and packaging — no shoot required."],
      ["02", "Tone &amp; hook", "Calm-premium, explanatory or fast-compare — built to hook in 3 seconds."],
      ["03", "Every channel", "Length and framing split for Reels, Shorts, TikTok and product pages."]
    ],
    faq: [
      ["Can you really work from photos only?", "Yes — product photos, existing footage or a concept are enough to build short-form ad material. If extra assets are needed we'll let you know."],
      ["What about usage rights for music and assets?", "Delivered videos can be used for ads and social within the agreed scope; if music or stock has limits we confirm those before the contract."]
    ]
  }
};

const i18nDetailContent = {
  "brand-film": { en: {
    kicker: "Brand Film", title: "Your company, told clearly on screen.",
    lead: "We shape your brand message, services and events into a scene flow that reads like a well-made pitch — clear, in order, easy to follow.",
    cta: "Plan a brand film",
    windows: [["01", "Core message", "The one line people should remember, set first."], ["02", "Scene flow", "The order of space, people, product and service shots, designed."], ["03", "Where it's used", "Versions split for sales, hiring, listings and social."]],
    faq: [["Can you work from existing materials only?", "Yes. We can build from your existing footage, photos and logo; if on-site filming is needed, we'll agree on a schedule."]]
  } },
  "drone": { en: {
    kicker: "Aerial Video", title: "Aerial footage that shows scale and flow.",
    lead: "Resorts, facilities, attractions, farms, night exteriors — we propose the wide shots and explanatory aerials that fit your purpose.",
    cta: "Ask about aerial dates & quote",
    windows: [["01", "Hero shot", "A wide shot that shows the scale and first impression."], ["02", "Explanatory shot", "Approach, surroundings and layout, made clear."], ["03", "Reuse shot", "Recut for website, ads, card news and short-form."]],
    faq: [["How do you handle drone permits & safety?", "We check flight zones and permits in advance and shoot within safety rules. Region and dates are reviewed together during the consult."]]
  } },
  "ai-shortform": { en: {
    kicker: "AI Shortform", title: "Turn product photos into short-form ads.",
    lead: "With just product photos and a concept, we build Reels, Shorts and TikTok ads that catch the eye in the first 3 seconds.",
    cta: "Get a short-form quote",
    windows: [["01", "Product images", "We start from your real photos and packaging."], ["02", "Tone & manner", "Choose calm-premium, explanatory, or fast-compare."], ["03", "Upload channels", "Length and framing split for Reels, Shorts and TikTok."]],
    faq: [["Can you work from existing materials only, no shoot?", "Yes. Product photos, existing footage or a concept are enough to build short-form ad material; if extra filming is needed we'll let you know."]]
  } },
  "homepage": { en: {
    kicker: "Website", title: "Websites that turn visitors into inquiries.",
    lead: "Clear on the first screen about what you offer, with portfolio and an inquiry form that flow naturally into contact.",
    cta: "Get a website quote",
    windows: [["01", "First screen", "Brand name and scope, summed up in one line."], ["02", "See examples", "We show industry examples and portfolio first."], ["03", "Inquiry flow", "Form, email and required-materials guidance in one flow."]],
    faq: [["Can you handle edits & upkeep after launch?", "Yes. We keep helping with copy and image edits and light upkeep after launch. The scope of upkeep is agreed during the consult."]]
  } },
  "content": { en: {
    kicker: "Content", title: "Card news and Reels that lead to inquiries.",
    lead: "Copy, screen order, card news and Reels material — kept together so they work across ads and consults, not scattered.",
    cta: "Ask about content & ops",
    windows: [["01", "Message", "The core line one piece of content should deliver."], ["02", "Images", "Real materials chosen — product, space, screen captures."], ["03", "Operations", "A structure to reuse across Instagram, YouTube and your site."]],
    faq: []
  } }
};

function enLandingPage(key) {
  const c = enLandingPages[key];
  const ui = i18nDetailUI.en;
  const estHref = routeHref("en/estimate");
  const koRoute = routeBySlug[c.portfolio];
  const items = c.pick ? c.pick.map((img) => portfolioWallItems.find((i) => i.image === img)).filter(Boolean) : portfolioItemsForRoute(koRoute);
  if (items[0]) items[0] = { ...items[0], size: "large" };
  const hasMedia = items.some((i) => portfolioLink(i));
  const windows = (c.windows || []).map(([n, t, b]) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${n}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${b}</span></span></div>`).join("");
  const faqAll = (c.faqOnly ? [] : i18nCommonFaq.en).concat(c.faq || []);
  const faq = faqAll.map(([q, a]) => `<details class="en-faq-item"><summary><span>${q}</span><span class="en-faq-mk" aria-hidden="true">+</span></summary><p>${a}</p></details>`).join("");
  return `
    <a class="skip-link" href="#main">${ui.skip}</a>
    <div class="en-page">
      <header class="en-bar en-bar--ink">
        <a class="en-wm" href="${routeHref("en")}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="menu"><a href="${routeHref("en")}">${ui.home}</a><a href="${estHref}">QUOTE</a><a href="#contact">${ui.contact}</a><span class="en-lang">${langSwitch("en")}</span></nav>
      </header>
      <main id="main">
        <section class="en-detail-hero">
          <p class="en-eyebrow">${c.kicker}</p>
          <h1 class="en-detail-h1">${c.h1}</h1>
          <p class="en-detail-lead">${c.lead}</p>
          <div class="en-detail-actions">
            <a class="en-cta-btn" href="${estHref}">Get a quote ↗</a>
            ${items.length ? `<a class="en-detail-link" href="#work">${ui.seeWork}</a>` : ""}
          </div>
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>${ui.comp}</span><span>(0${(c.windows || []).length})</span></div>
          <div class="en-svc-list">${windows}</div>
        </section>
${c.extra || ""}
        ${items.length ? `<section class="en-services" id="work">
          <div class="en-sec-head"><span>${hasMedia ? ui.workOn : ui.workOff}</span><span>${hasMedia ? ui.play : ""}</span></div>
          ${portfolioWall(items, "detail-wall", !hasMedia)}
        </section>` : ""}

        <section class="en-services" id="faq">
          <div class="en-sec-head"><span>${ui.faq}</span><span>FAQ</span></div>
          <div class="en-faq">${faq}</div>
        </section>

        <section class="en-cta" id="contact">
          <p class="en-eyebrow">${ui.contact}</p>
          <h2 class="en-cta-h">${ui.ctaH}</h2>
          <a class="en-cta-btn" href="${estHref}">Get a quote ↗</a>
          <p class="en-cta-note">${ui.ctaNote}</p>
        </section>
      </main>
      <footer class="en-footer">
        <span>VIDEO ROASTERY® — ${ui.footer}</span>
        <a href="${routeHref()}">한국어 ↗</a>
      </footer>
    </div>
  `;
}

// ── 2026-10 리얼터 전용: "매물을 보내면 → 아침에 릴스 기획안 → 폰으로 찍으면 → 편집 납품" ──
const reIcon = {
  door: '<path d="M7 3h10v18H7z"/><circle cx="14.5" cy="12" r=".9"/>',
  sofa: '<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M3 12h18v5H3z"/><path d="M5 17v2M19 17v2"/>',
  kitchen: '<path d="M4 10h16v10H4z"/><path d="M4 14h16"/><path d="M8 6c0-1 1-2 2-2M12 6c0-1 1-2 2-2"/>',
  desk: '<path d="M3 10h18"/><path d="M5 10v9M19 10v9"/><path d="M9 10V6h6v4"/>',
  bed: '<path d="M3 18v-7h18v7"/><path d="M3 14h18"/><path d="M6 11V8h5v3"/>',
  view: '<circle cx="12" cy="9" r="3"/><path d="M3 20l6-6 4 4 3-3 5 5"/>',
  you: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c1-4 4-6 7-6s6 2 7 6"/>'
};
function realEstatePage() {
  const c = enLandingPages["en/real-estate-video-editing"];
  const ic = (k) => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${reIcon[k]}</svg>`;
  const shots = [
    ["door", "Walk in from the front door", "5s", "Start outside, one smooth step in."],
    ["sofa", "Living room, wide", "4s", "Stand in the corner, phone at chest height."],
    ["kitchen", "Kitchen details", "4s", "Counter, then one slow pan to the appliances."],
    ["desk", "The den", "4s", "Show a chair at the desk so it reads as an office."],
    ["bed", "Primary bedroom", "4s", "From the doorway, toward the window."],
    ["view", "Balcony and view", "5s", "End on the view and hold for three seconds."],
    ["you", "You, to camera", "5s", "One line: the price and how to book a showing."]
  ].map(([k, t, sec, tip], i) => `<li><span class="re-sh-n">${String(i + 1).padStart(2, "0")}</span><span class="re-sh-ic">${ic(k)}</span><span class="re-sh-b"><b>${t}</b><span>${tip}</span></span><span class="re-sh-s">${sec}</span></li>`).join("");
  const steps = [
    ["Send the listing", "MLS link or address, a few phone photos, the price and what stands out."],
    ["Get your reel plan", "By your next morning: three hook options, a shot list in filming order, a voiceover script and a caption."],
    ["Film in ten minutes", "Follow the shot list on your phone. Vertical, any order — we sort it out."],
    ["Post the reel", "First cut in 48–72 business hours. Two rounds of revisions included."]
  ].map(([t, d], i) => `<li><span class="re-step-n">${String(i + 1).padStart(2, "0")}</span><h3>${t}</h3><p>${d}</p></li>`).join("");
  const faq = c.faq.map(([q, a]) => `<details class="en-faq-item"><summary><span>${q}</span><span class="en-faq-mk" aria-hidden="true">+</span></summary><p>${a}</p></details>`).join("");
  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="en-page re-page">
      <header class="en-bar re-bar">
        <a class="en-wm" href="${routeHref("en")}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="menu"><a href="#how">HOW IT WORKS</a><a href="#sample">SAMPLE PLAN</a><a href="#request">REQUEST</a><span class="en-lang">${langSwitch("en")}</span></nav>
      </header>
      <main id="main">
        <section class="re-hero">
          ${pic("portfolio_drone_night_exterior_clean.jpg", { cls: "re-hero-img", alt: "", loading: "eager" })}
          <div class="re-hero-scrim" aria-hidden="true"></div>
          <div class="re-hero-in">
            <p class="re-eye">FOR GREATER VANCOUVER REALTORS</p>
            <h1 class="re-h1">Send a listing.<br>Get a reel plan<br>by morning.</h1>
            <p class="re-lead">We write the hook, the shot list and your voiceover. You film on your phone in ten minutes. We edit it ready to post.</p>
            <div class="re-cta"><a class="re-btn" href="#request">Request a reel plan ↗</a><a class="re-btn line" href="#sample">See a sample plan</a></div>
            <p class="re-note">English or Korean · 한국어로도 요청하실 수 있어요</p>
          </div>
        </section>

        <section class="re-sec" id="how">
          <div class="en-sec-head"><span>How a request works</span><span>(04)</span></div>
          <ol class="re-steps">${steps}</ol>
        </section>

        <section class="re-sec re-sample" id="sample">
          <div class="en-sec-head"><span>This is what lands in your inbox</span><span>(SAMPLE)</span></div>
          <article class="re-plan" aria-label="Sample reel plan">
            <header class="re-plan-top">
              <div><p class="re-plan-k">REEL PLAN · SAMPLE</p><h2 class="re-plan-t">2 Bed + Den Condo · Burnaby</h2></div>
              <div class="re-chips"><span>30–40 sec</span><span>Vertical 9:16</span><span>Your voiceover</span></div>
            </header>
            <div class="re-plan-grid">
              <div class="re-plan-col">
                <h3 class="re-plan-h">Hook — pick one</h3>
                <ol class="re-hooks"><li><b>A</b>This Burnaby two-bed has a den you'd actually work in.</li><li><b>B</b>Under $900K with this view? Let's walk through it.</li><li><b>C</b>Three things buyers ask about this building, answered in 30 seconds.</li></ol>
                <h3 class="re-plan-h">Voiceover</h3>
                <p class="re-vo">"Two bedrooms, a real den, and a kitchen that opens straight onto the living room. Out here, the balcony faces north, so the light stays soft all afternoon. Message me to book a showing this weekend."</p>
                <h3 class="re-plan-h">Caption</h3>
                <p class="re-cap">2 bed + den in Burnaby, minutes from the SkyTrain. DM to book a showing.<br><span>#burnabyrealestate #vancouverrealtor #condotour #justlisted</span></p>
              </div>
              <div class="re-plan-col">
                <h3 class="re-plan-h">Shot list — film in this order</h3>
                <ol class="re-shots">${shots}</ol>
              </div>
            </div>
            <p class="re-plan-foot">Sample only. Every plan is written for your listing.</p>
          </article>
        </section>

        <section class="re-sec">
          <div class="en-sec-head"><span>Pick how often</span><span>(02)</span></div>
          <div class="re-offers">
            <div class="re-offer"><p class="re-offer-k">ONE LISTING</p><h3>A plan and one reel</h3><p>Send one listing, get the plan by morning and one edited reel after you film.</p></div>
            <div class="re-offer dark"><p class="re-offer-k">MONTHLY</p><h3>Four reels and two carousels</h3><p>A plan for every listing or neighbourhood guide, plus feed carousels for just listed and sold.</p></div>
          </div>
          <p class="re-offers-note">We reply with a quote within a day.</p>
        </section>

        <section class="re-sec re-req" id="request">
          <div class="re-req-l">
            <p class="re-eye dark">REQUEST A REEL PLAN</p>
            <h2 class="re-req-h">Send one listing.<br>See the plan tomorrow.</h2>
            <ul class="re-check"><li>MLS link or address</li><li>A few phone photos</li><li>Price and what stands out</li><li>When you can film</li></ul>
            <p class="re-note dark">Prefer KakaoTalk? Leave your ID in the contact field.</p>
          </div>
          <div class="re-req-r">${i18nQuoteForm("re")}</div>
        </section>

        <section class="re-sec" id="faq">
          <div class="en-sec-head"><span>Questions</span><span>FAQ</span></div>
          <div class="en-faq">${faq}</div>
        </section>
      </main>
      <footer class="en-footer">
        <span>VIDEO ROASTERY® — Jeju, Korea · Working with Greater Vancouver realtors</span>
        <a href="${routeHref("en")}">Video Roastery ↗</a>
      </footer>
    </div>
  `;
}

const i18nDetailSvcOrder = ["brand-film", "drone", "ai-shortform", "homepage", "content"];
const i18nDetailRoutes = {};
[["en", "en"], ["zh", "hans"], ["zh-hant", "hant"]].forEach(([prefix, lang]) => {
  i18nDetailSvcOrder.forEach((svc) => { i18nDetailRoutes[`${prefix}/${svc}`] = { lang, svc }; });
});

function i18nDetailPage(lang, svc) {
  const c = (i18nDetailContent[svc] && i18nDetailContent[svc][lang]) || i18nDetailContent[svc].en;
  const ui = i18nDetailUI[lang];
  const koRoute = routeBySlug[svc];
  const homeSlug = { en: "en", hans: "zh", hant: "zh-hant" }[lang];
  const estHref = routeHref(homeSlug + "/estimate");
  const basic = lang === "en" ? "" : " basic-zh";
  const items = portfolioItemsForRoute(koRoute);
  if (items[0]) items[0] = { ...items[0], size: "large" };
  const hasMedia = items.some((i) => portfolioLink(i));
  const windows = (c.windows || []).map(([n, t, b]) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${n}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${b}</span></span></div>`).join("");
  const faqAll = i18nCommonFaq[lang].concat(c.faq || []);
  const faq = faqAll.map(([q, a]) => `<details class="en-faq-item"><summary><span>${q}</span><span class="en-faq-mk" aria-hidden="true">+</span></summary><p>${a}</p></details>`).join("");
  return `
    <a class="skip-link" href="#main">${ui.skip}</a>
    <div class="en-page${basic}">
      <header class="en-bar en-bar--ink">
        <a class="en-wm" href="${routeHref(homeSlug)}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="menu"><a href="${routeHref(homeSlug)}">${ui.home}</a><a href="#work">${ui.work}</a><a href="#contact">${ui.contact}</a><span class="en-lang">${langSwitch(lang)}</span></nav>
      </header>
      <main id="main">
        <section class="en-detail-hero">
          <p class="en-eyebrow">${c.kicker}</p>
          <h1 class="en-detail-h1">${c.title}</h1>
          <p class="en-detail-lead">${c.lead}</p>
          <div class="en-detail-actions">
            <a class="en-cta-btn" href="${estHref}">${c.cta} ↗</a>
            <a class="en-detail-link" href="#work">${ui.seeWork}</a>
          </div>
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>${ui.comp}</span><span>(0${(c.windows || []).length})</span></div>
          <div class="en-svc-list">${windows}</div>
        </section>

        <section class="en-services" id="work">
          <div class="en-sec-head"><span>${hasMedia ? ui.workOn : ui.workOff}</span><span>${hasMedia ? ui.play : ""}</span></div>
          ${portfolioWall(items, "detail-wall", !hasMedia)}
        </section>

        <section class="en-services" id="faq">
          <div class="en-sec-head"><span>${ui.faq}</span><span>FAQ</span></div>
          <div class="en-faq">${faq}</div>
        </section>

        <section class="en-cta" id="contact">
          <p class="en-eyebrow">${ui.contact}</p>
          <h2 class="en-cta-h">${ui.ctaH}</h2>
          <a class="en-cta-btn" href="${estHref}">${c.cta} ↗</a>
          <p class="en-cta-note">${ui.ctaNote}</p>
        </section>
      </main>
      <footer class="en-footer">
        <span>VIDEO ROASTERY® — ${ui.footer}</span>
        <a href="${routeHref()}">한국어 ↗</a>
      </footer>
    </div>
  `;
}

// 중문(간체·번체) 서비스 상세 콘텐츠 — i18nDetailContent 에 병합(원어민 검토 권장)
const i18nDetailZh = {
  "brand-film": {
    hans: { kicker: "品牌短片", title: "用影像，把公司讲清楚", lead: "我们把品牌信息、服务介绍和活动内容编排成有节奏的画面流程，像一份出色的提案——清晰、有序、一看就懂。", cta: "咨询企业宣传片方案", windows: [["01", "核心信息", "先确定一句让人记住的介绍语。"], ["02", "画面编排", "设计空间、人物、产品和服务镜头的先后顺序。"], ["03", "用在哪", "按销售提案、招聘、入驻提案和社交发布分成不同版本。"]], faq: [["不拍摄，只用现有素材也可以吗？", "可以。用现有的影像、照片和logo素材也能编排；如果需要现场拍摄，我们再一起商定日程。"]] },
    hant: { kicker: "品牌短片", title: "用影像，把公司說清楚", lead: "我們把品牌訊息、服務介紹與活動內容編排成有節奏的畫面流程，像一份出色的提案——清晰、有序、一看就懂。", cta: "諮詢企業宣傳片方案", windows: [["01", "核心訊息", "先確定一句讓人記住的介紹語。"], ["02", "畫面編排", "設計空間、人物、產品與服務鏡頭的先後順序。"], ["03", "用在哪", "依銷售提案、招募、進駐提案與社群發佈分成不同版本。"]], faq: [["不拍攝，只用現有素材也可以嗎？", "可以。用現有的影音、照片與logo素材也能編排；若需要現場拍攝，我們再一起商定日程。"]] }
  },
  "drone": {
    hans: { kicker: "无人机航拍", title: "看得见空间大小与动线的航拍", lead: "从住宿、设施、景点、农场到夜景外观，我们按用途提供合适的大场景镜头和用于说明的航拍镜头。", cta: "咨询无人机航拍日程与报价", windows: [["01", "主镜头", "展现空间规模和第一印象的大场景镜头。"], ["02", "说明镜头", "呈现进入动线、周边环境和设施布局的镜头。"], ["03", "复用镜头", "重新剪辑用于官网、广告、图文和短视频。"]], faq: [["无人机航拍的许可和安全怎么处理？", "我们会事先确认可飞行区域和许可情况，并按安全规定拍摄。地区和日程会在咨询时一起核对。"]] },
    hant: { kicker: "無人機空拍", title: "看得見空間大小與動線的空拍", lead: "從住宿、設施、景點、農場到夜景外觀，我們依用途提供合適的大場景鏡頭與用於說明的空拍鏡頭。", cta: "諮詢無人機空拍日程與報價", windows: [["01", "主鏡頭", "展現空間規模與第一印象的大場景鏡頭。"], ["02", "說明鏡頭", "呈現進入動線、周邊環境與設施配置的鏡頭。"], ["03", "複用鏡頭", "重新剪輯用於官網、廣告、圖文與短影音。"]], faq: [["無人機空拍的許可與安全怎麼處理？", "我們會事先確認可飛行區域與許可狀況，並依安全規定拍攝。地區與日程會在諮詢時一起確認。"]] }
  },
  "ai-shortform": {
    hans: { kicker: "AI短视频", title: "把产品照片变成短视频广告素材", lead: "只要有产品照片和概念，我们就能做出在前3秒抓住眼球的Reels、Shorts和TikTok广告。", cta: "用产品照片获取短视频报价", windows: [["01", "产品图片", "先确认你的实拍照片和包装图。"], ["02", "调性风格", "在沉稳高级、以说明为主、快速对比中选一个方向。"], ["03", "上传渠道", "按Reels、Shorts和TikTok调整时长和画面。"]], faq: [["不拍摄，只用现有素材也可以吗？", "可以。只要有产品照片、现有影像或概念，就能编排成短视频广告素材。如果需要补拍，我们会另行说明。"]] },
    hant: { kicker: "AI短影音", title: "把產品照片變成短影音廣告素材", lead: "只要有產品照片與概念，我們就能做出在前3秒抓住眼球的Reels、Shorts與TikTok廣告。", cta: "用產品照片取得短影音報價", windows: [["01", "產品圖片", "先確認你的實拍照片與包裝圖。"], ["02", "調性風格", "在沉穩高級、以說明為主、快速比較中選一個方向。"], ["03", "上傳頻道", "依Reels、Shorts與TikTok調整長度與畫面。"]], faq: [["不拍攝，只用現有素材也可以嗎？", "可以。只要有產品照片、現有影音或概念，就能編排成短影音廣告素材。若需要補拍，我們會另行說明。"]] }
  },
  "homepage": {
    hans: { kicker: "网站建设", title: "让访客变成咨询的网站", lead: "首屏就让人一眼看出你卖什么，作品集和咨询表单也自然衔接到联系。", cta: "获取网站首屏诊断与报价", windows: [["01", "首屏", "用一句话概括品牌名和业务范围。"], ["02", "查看范例", "先给你看分行业的页面范例和作品集。"], ["03", "咨询衔接", "把咨询表单、邮箱和所需资料指引放在同一个流程里。"]], faq: [["制作后还能修改和维护吗？", "上线后我们会继续帮你修改文案、图片和做简单的运营维护。维护范围在咨询时一起确定。"]] },
    hant: { kicker: "網站建置", title: "讓訪客變成諮詢的網站", lead: "首屏就讓人一眼看出你賣什麼，作品集與諮詢表單也自然銜接到聯絡。", cta: "取得網站首屏診斷與報價", windows: [["01", "首屏", "用一句話概括品牌名與業務範圍。"], ["02", "查看範例", "先給你看分行業的頁面範例與作品集。"], ["03", "諮詢銜接", "把諮詢表單、信箱與所需資料指引放在同一個流程裡。"]], faq: [["製作後還能修改與維護嗎？", "上線後我們會繼續幫你修改文案、圖片與做簡單的營運維護。維護範圍在諮詢時一起確定。"]] }
  },
  "content": {
    hans: { kicker: "内容运营", title: "让图文和Reels一路引导到咨询", lead: "宣传文案、画面顺序、图文和Reels素材不再零散摆放，而是编排成能同时用于广告和咨询。", cta: "咨询图文与Reels运营", windows: [["01", "信息", "确定一条内容要传达的核心句子。"], ["02", "图片", "从产品、空间、页面截图等实际素材中挑选。"], ["03", "运营", "可在Instagram、YouTube和官网复用的结构。"]], faq: [] },
    hant: { kicker: "內容營運", title: "讓圖文與Reels一路引導到諮詢", lead: "宣傳文案、畫面順序、圖文與Reels素材不再零散擺放，而是編排成能同時用於廣告與諮詢。", cta: "諮詢圖文與Reels營運", windows: [["01", "訊息", "確定一則內容要傳達的核心句子。"], ["02", "圖片", "從產品、空間、頁面截圖等實際素材中挑選。"], ["03", "營運", "可在Instagram、YouTube與官網複用的結構。"]], faq: [] }
  }
};
Object.keys(i18nDetailZh).forEach((svc) => { i18nDetailContent[svc] = Object.assign(i18nDetailContent[svc] || {}, i18nDetailZh[svc]); });
i18nCommonFaq.hans = [
  ["制作周期大概多久？", "视分量和范围通常为1~4周。我们会先确认你的现有素材，再给出准确的日程。"],
  ["费用怎么定？", "我们不在网站上统一标价，而是在确认你的现有素材和制作范围后，用定制报价单说明。告诉我们预算范围，我们会一起梳理可行的方案和可以省略的项目再回复。"],
  ["影片的商业使用权怎么算？", "交付的影片可以在咨询时约定的范围内用于广告、官网、社交等。如果音乐、素材库或AI生成物有使用范围限制，我们会在签约前先确认。"],
  ["不拍摄，只做AI短视频可以吗？", "可以。只要有产品照片、现有影像、logo和核心文案，就能做成Reels、Shorts用的AI短视频。素材不足时，我们会先告诉你所需照片的标准。"],
  ["可以修改吗？", "在约定范围内包含修改。我们会先确定调性、文案和结构再制作，避免出现大改。"],
  ["怎么开始？", "只要写下你想要的成品、现有素材和期望日程发给我们，我们就会回复可行范围和下一步。签约前咨询没有压力。"],
  ["济州以外的地区也可以吗？", "网站、影片和内容制作在全国乃至全球线上进行。现场拍摄和无人机航拍会商定日程和地区后进行。"]
];
i18nCommonFaq.hant = [
  ["製作週期大概多久？", "視分量與範圍通常為1~4週。我們會先確認你的現有素材，再給出準確的日程。"],
  ["費用怎麼定？", "我們不在網站上統一標價，而是在確認你的現有素材與製作範圍後，用客製報價單說明。告訴我們預算範圍，我們會一起梳理可行的方案與可以省略的項目再回覆。"],
  ["影片的商業使用權怎麼算？", "交付的影片可以在諮詢時約定的範圍內用於廣告、官網、社群等。若音樂、素材庫或AI生成物有使用範圍限制，我們會在簽約前先確認。"],
  ["不拍攝，只做AI短影音可以嗎？", "可以。只要有產品照片、現有影音、logo與核心文案，就能做成Reels、Shorts用的AI短影音。素材不足時，我們會先告訴你所需照片的標準。"],
  ["可以修改嗎？", "在約定範圍內包含修改。我們會先確定調性、文案與結構再製作，避免出現大改。"],
  ["怎麼開始？", "只要寫下你想要的成品、現有素材與期望日程寄給我們，我們就會回覆可行範圍與下一步。簽約前諮詢沒有壓力。"],
  ["濟州以外的地區也可以嗎？", "網站、影片與內容製作在全國乃至全球線上進行。現場拍攝與無人機空拍會商定日程與地區後進行。"]
];

function aboutPage() {
  const ways = [
    ["실제 작업물로 이야기합니다", "말보다 만든 결과물을 먼저 보여드려요. 포트폴리오를 보고 판단하실 수 있습니다."],
    ["고정가를 붙이지 않습니다", "필요한 것만 골라 딱 맞는 견적을 드려요. 예산을 알려주시면 그 안에서 맞춰드립니다."],
    ["끝까지 함께합니다", "제주 현장은 직접 찾아가고, 전국은 온라인으로. 만들고 끝이 아니라 문의가 도착하는 데까지 챙깁니다."]
  ].map(([t, d], i) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span></div>`).join("");
  const services = koDoors
    .map(([slug, t, who, d], i) => `<a class="en-svc" href="${routeHref(slug)}"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span><span class="en-svc-x" aria-hidden="true">↗</span></a>`)
    .join("");
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <div class="en-page basic-ko">
      ${koBar()}
      <main id="main">
        <section class="en-detail-hero">
          <p class="en-eyebrow">회사소개</p>
          <h1 class="en-detail-h1">비디오 로스터리, 이런 회사예요</h1>
          <p class="en-detail-lead">방송국에서 12년 동안 PD로 일한 대표가 제주에서 운영하는 영상·홈페이지 제작 스튜디오입니다. 공공기관·기업·비영리 단체에 140건 넘게 납품했고, 기획부터 촬영·편집까지 직접 합니다. 가게는 좋은데 온라인에서는 그 매력이 다 안 보이는 곳이 많아요. 사장님이 가진 이야기와 자료를, 손님이 믿고 문의하고 싶은 형태로 바꿔드립니다.</p>
          <div class="en-detail-actions">
            <a class="en-cta-btn" href="${routeHref("estimate")}">견적 문의하기 ↗</a>
            <a class="en-detail-link" href="${routeHref("work")}">작업 사례 보기</a>
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
      ${koFooter()}
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
      ${koBar()}
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
    ["Real Estate Listing Reels", "For Vancouver realtors — send a listing, get a reel plan by morning, film on your phone, we edit.", "real-estate-video-editing"],
    ["Brand & Corporate Film", "Company and brand stories, told in the order people actually understand them.", "brand-film"],
    ["AI Short-form Ads", "Reels & shorts built from product photos. No shoot, no models needed.", "ai-shortform"],
    ["Websites & Landing Pages", "Sites that turn visitors into inquiries — clear on the first screen, built to convert.", "homepage"],
    ["Content & Automation", "Card news, reels and inquiry automation that keep working after launch.", "content"],
    ["Filming in Korea for North American Brands", "Need footage from Korea? Brief us in English — we shoot here and deliver online.", "vancouver-korea-video-production"]
  ].map(([t, d, slug], i) => `<a class="en-svc" href="${routeHref("en/" + slug)}"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span><span class="en-svc-x" aria-hidden="true">↗</span></a>`).join("");
  const mail = `mailto:${consultEmail}?subject=${encodeURIComponent("Project inquiry — Video Roastery")}`;
  // 히어로 배경: 대표 작업물 썸네일이 빠르게 흐르는 영상월(BASIC식). webp 스틸이라 초경량·안정(raw video 다수는 모바일 프리징).
  const wall = heroWallHtml();
  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="en-page">
      <header class="en-bar">
        <a class="en-wm" href="${routeHref("en")}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="menu"><a href="#work" data-reel-open="en" aria-haspopup="dialog">WORK</a><a href="#services">SERVICES</a><a href="#remote">REALTORS</a><a href="${routeHref("en/estimate")}">QUOTE</a><a href="#contact">CONTACT</a><span class="en-lang">${langSwitch("en")}</span></nav>
      </header>
      <main id="main">
        <section class="en-hero" id="work">
          <h1 class="sr-only">Video Roastery — Video, Film &amp; Web Studio in Jeju, Korea</h1>
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
            <p class="en-statement-copy">Video Roastery is a video studio in Jeju, Korea. We plan and edit listing reels for Vancouver realtors, and shoot brand films, drone and websites on the ground in Korea.</p>
            <div class="en-bigmark" aria-hidden="true">VR<sup>®</sup></div>
          </div>
        </section>

        <section class="en-services" id="services">
          <div class="en-sec-head"><span>Services</span><span>${secCount(services)}</span></div>
          <div class="en-svc-list">${services}</div>
        </section>

        <section class="en-services en-remote" id="remote" aria-label="For Vancouver realtors">
          <div class="en-sec-head"><span>For Vancouver realtors</span><span>(LISTING REELS)</span></div>
          <h2 class="en-remote-h">Send a listing. Get a reel plan by morning.</h2>
          <ol class="en-remote-steps">
            <li><span class="en-remote-t">Send the listing</span><span class="en-remote-d">MLS link, a few phone photos, the price and what stands out.</span></li>
            <li><span class="en-remote-t">Get your reel plan</span><span class="en-remote-d">Hook options, a shot list in filming order, a voiceover script and a caption.</span></li>
            <li><span class="en-remote-t">Film, we edit</span><span class="en-remote-d">Ten minutes on your phone. First cut in 48–72 business hours.</span></li>
          </ol>
          <p class="en-remote-note">Now working monthly with a Greater Vancouver REALTOR®. <a href="${routeHref("en/real-estate-video-editing")}">See a sample plan ↗</a></p>
        </section>

        <section class="en-proof" aria-label="Track record">
          <div class="en-sec-head"><span>Proof, not promises</span><span>(RESULTS)</span></div>
          <div class="en-proof-grid">
            <div class="en-proof-item"><strong>140+</strong><span>projects delivered — government,<br>tourism, education, healthcare, F&amp;B, IT</span></div>
            <div class="en-proof-item"><strong>10yr</strong><span>a decade with one institution —<br>repeat contracts, public &amp; corporate</span></div>
            <div class="en-proof-item"><strong>2×</strong><span>YouTube subscribers doubled<br>in one year of channel management</span></div>
          </div>
        </section>

        <section class="en-clients">
          <div class="en-sec-head"><span>Selected Clients</span></div>
          <p class="en-clients-list">LG U+ &nbsp;·&nbsp; S-OIL &nbsp;·&nbsp; Korean Anti-Tuberculosis Association &nbsp;·&nbsp; Nexon Computer Museum &nbsp;·&nbsp; MarkAny &nbsp;·&nbsp; Next Challenge &nbsp;·&nbsp; InCruises &nbsp;·&nbsp; Samjung Corp.</p>
        </section>

        <section class="en-cta" id="contact">
          <p class="en-eyebrow">Start a project</p>
          <h2 class="en-cta-h">Tell us what you have.<br>We reply with a scope.</h2>
          <a class="en-cta-btn" href="${routeHref("en/estimate")}">Get a quote ↗</a>
          <p class="en-cta-note">Send us what you have and the result you want — we'll confirm the scope and reply with a tailored quote.</p>
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
      ["網站與著陸頁", "讓訪客轉換為諮詢的網站——第一屏就說清楚，為轉換而建。", "homepage"],
      ["品牌與企業短片", "把公司與品牌故事，依觀眾真正能理解的順序講述。", "brand-film"],
      ["AI 短影音廣告", "僅用您的產品照片製作 Reels 與短影音——無需拍攝、無需模特兒。", "ai-shortform"],
      ["內容與自動化", "卡片新聞、Reels 與諮詢自動化，上線後持續發揮作用。", "content"]
    ],
    why: [
      ["先展示，再溝通", "我們以真實作品說話——您先看到，再決定需要什麼。"],
      ["依需求客製", "沒有固定標價。我們根據專案的實際需要來客製報價。"],
      ["濟州現場，全球遠端", "在韓國濟州島現場拍攝——也可在任何地方遠端製作。"]
    ],
    contactH: "有專案想法嗎？",
    contactNote: "告訴我們您有什麼、想要什麼——我們會回覆為您量身打造的方案與報價。",
    contactTrust: "韓國濟州島現場 · 全球遠端",
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
      ["网站与落地页", "让访客转化为咨询的网站——第一屏就说清楚，为转化而建。", "homepage"],
      ["品牌与企业短片", "把公司与品牌故事，按观众真正能理解的顺序讲述。", "brand-film"],
      ["AI 短视频广告", "仅用您的产品照片制作 Reels 与短视频——无需拍摄、无需模特。", "ai-shortform"],
      ["内容与自动化", "卡片新闻、Reels 与咨询自动化，上线后持续发挥作用。", "content"]
    ],
    why: [
      ["先展示，再沟通", "我们以真实作品说话——您先看到，再决定需要什么。"],
      ["按需定制", "没有固定标价。我们根据项目的实际需要来定制报价。"],
      ["济州现场，全球远程", "在韩国济州岛现场拍摄——也可在任何地方远程制作。"]
    ],
    contactH: "有项目想法吗？",
    contactNote: "告诉我们您有什么、想要什么——我们会回复为您量身定制的方案与报价。",
    contactTrust: "韩国济州岛现场 · 全球远程",
    emailBtn: "邮件联系我们", emailSubj: "项目咨询 — Video Roastery",
    footer: "韩国济州岛 · 影像、短片与网站制作 · 全球远程"
  };
  const zhPrefix = T.cur === "hant" ? "zh-hant" : "zh";
  // 슬러그는 각 항목이 직접 들고 있음(별도 배열 인덱스 매핑 금지 — 항목 증감 시 어긋나 죽은 링크가 났던 자리).
  const services = T.services.map(([t, d, slug], i) => `<a class="en-svc" href="${routeHref(zhPrefix + "/" + slug)}"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span><span class="en-svc-x" aria-hidden="true">↗</span></a>`).join("");
  const why = T.why.map(([t, d], i) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span></div>`).join("");
  const wall = heroWallHtml();
  const mail = `mailto:${consultEmail}?subject=${encodeURIComponent(T.emailSubj)}`;
  return `
    <a class="skip-link" href="#main">${T.skip}</a>
    <div class="en-page basic-zh">
      <header class="en-bar">
        <a class="en-wm" href="${T.home}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="menu"><a href="#work" data-reel-open="${T.cur}" aria-haspopup="dialog">${T.work}</a><a href="#services">${T.servicesH}</a><a href="${routeHref((T.cur === "hant" ? "zh-hant" : "zh") + "/estimate")}">${i18nEstimateCopy[T.cur].navQuote}</a><a href="#contact">${T.contact}</a><span class="en-lang">${langSwitch(T.cur)}</span></nav>
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
          <div class="en-sec-head"><span>${T.servicesH}</span><span>${secCount(services)}</span></div>
          <div class="en-svc-list">${services}</div>
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>${T.whyH}</span><span>(03)</span></div>
          <div class="en-svc-list">${why}</div>
        </section>

        <section class="en-cta" id="contact">
          <p class="en-eyebrow">${T.contact}</p>
          <h2 class="en-cta-h">${T.contactH}</h2>
          <p class="en-cta-note" style="margin-top:14px">${T.contactNote}</p>
          <a class="en-cta-btn" href="${routeHref((T.cur === "hant" ? "zh-hant" : "zh") + "/estimate")}">${i18nEstimateCopy[T.cur].navQuote} ↗</a>
        </section>
      </main>
      <footer class="en-footer">
        <span>VIDEO ROASTERY® — ${T.footer}</span>
        <a href="${routeHref()}">한국어 ↗</a>
      </footer>
    </div>
  `;
}

// 무료 샘플 컷 3장 랜딩 — 모든 채널(크몽·인스타·당근·SEO·아웃리치)의 착지점. BASIC 스타일 + quoteForm(UTM 자동 귀속).
function freePage() {
  const steps = [
    ["사진 보내기", "가게·제품·공간 사진 3~5장과 업종만 알려주세요. 촬영도, 방문도 필요 없어요."],
    ["무료 샘플 컷 제작", "AI로 샘플 컷 3장을 만들어 보여드립니다. 마음에 들면 그 컷 그대로 릴스·영상으로 제작해요."],
    ["마음에 들면 진행", "컷이 좋으면 그 컷 그대로 릴스·영상으로 제작합니다. 아니면 전혀 부담 없이 안 하셔도 됩니다."]
  ].map(([t, d], i) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span></div>`).join("");
  const industryLinks = [
    ["jeju-food-video", "음식점·맛집", "군침 도는 30초 릴스"],
    ["jeju-cafe-reels", "카페", "저장·공유되는 감성 릴스"],
    ["jeju-pension-video", "펜션·숙소", "예약을 부르는 드론컷"],
    ["jeju-farm-video", "농장·귤밭·체험", "신뢰를 주는 소개 영상"],
    ["jeju-clinic-video", "병원·의원", "환자가 믿고 찾는 소개"],
    ["jeju-beauty-video", "미용실·네일·뷰티", "비포애프터 감성 릴스"],
    ["jeju-fitness-video", "헬스장·필라테스", "등록을 부르는 공간 영상"],
    ["jeju-academy-video", "학원·교습소", "학부모 신뢰 소개 영상"],
    ["jeju-activity-video", "체험·액티비티·투어", "여행객 예약 부르는 현장"],
    ["jeju-homepage", "홈페이지 제작", "문의로 이어지는 가게 사이트"],
    ["jeju-hotel-promo", "호텔·리조트", "예약 부르는 드론 홍보영상"],
    ["jeju-real-estate-video", "부동산·매물·토지", "한눈에 보이는 매물 영상"],
    ["jeju-restaurant-menu-video", "식당 메뉴 영상", "군침 도는 메뉴 릴스"],
    ["jeju-camping-video", "캠핑장·글램핑", "감성 예약 영상"]
  ].map(([slug, t, d], i) => `<a class="en-svc" href="${routeHref(slug)}"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span><span class="en-svc-x" aria-hidden="true">↗</span></a>`).join("");
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <div class="en-page basic-ko">
      ${koBar()}
      <main id="main">
        <section class="en-detail-hero">
          <p class="en-eyebrow">무료 샘플 컷 3장 · 이번 달 선착순 5팀</p>
          <h1 class="en-detail-h1">제주 사장님, 무료로 샘플 컷 3장 먼저 만들어 드립니다</h1>
          <p class="en-detail-lead">촬영도 방문도 없이, 가게·제품 사진만 보내주세요. 영상에 그대로 들어갈 샘플 컷 3장을 무료로 먼저 만들어 드려요. 마음에 들면 그 컷 그대로 릴스·영상으로 제작합니다.</p>
          <div class="en-detail-actions">
            <a class="en-cta-btn" href="#free-form">무료 샘플 컷 신청하기 ↗</a>
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
          <p class="en-cta-note">40+ 실제 제작 영상 · 촬영 없이 사진만으로. 백 마디 설명보다 사장님 가게가 영상이 된 걸 직접 보시는 게 빠르니까요.</p>
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>업종·서비스별 맞춤 제안</span><span>(14)</span></div>
          <div class="en-svc-list">${industryLinks}</div>
        </section>

        <section class="section tight en-form-sec" id="free-form">
          <div class="cta-band has-form">
            <h2>무료 샘플 컷 신청</h2>
            <p class="cta-note">업종과 제품/공간 사진(링크 또는 설명)만 남겨주세요. 확인 후 무료 샘플 컷 3장을 만들어 연락드립니다.</p>
            <p class="contact-trust">이번 달 선착순 5팀 · 평균 1시간 내 응답 · 마음에 들 때만 진행</p>
            ${quoteForm()}
          </div>
        </section>
      </main>
      ${koFooter()}
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
    desc: "제주 맛집·음식점 홍보영상, 촬영 없이 사진만으로 30초 릴스 제작. 무료 샘플 컷 먼저 확인하세요. 40+ 실제 제작 영상.",
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
    desc: "제주 펜션·독채·풀빌라 홍보영상과 드론 항공컷. 예약을 부르는 30초. 무료 샘플 컷 먼저 확인. 40+ 실제 제작 영상.",
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
    desc: "제주 감성 카페 릴스·홍보영상, 촬영 없이 사진만으로. 저장·공유되는 30초. 무료 샘플 컷 먼저. 40+ 실제 제작 영상.",
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
    desc: "제주 농장·귤밭·체험 프로그램 홍보영상과 드론. 신뢰를 주는 소개 영상. 무료 샘플 컷 먼저. 40+ 실제 제작 영상.",
    why: [
      ["보여주면 믿는다", "체험·농장은 '실제 모습'을 영상으로 보여줄 때 예약률이 오릅니다."],
      ["드론으로 규모를", "귤밭·목장의 스케일과 제주 풍경을 항공컷으로 담아요."],
      ["온라인 판매까지", "스마트스토어·예약페이지에 영상 하나면 전환이 달라집니다."]
    ]
  },
  "jeju-clinic-video": {
    kicker: "제주 병원·의원·한의원 홍보영상",
    h1: "제주 병원·의원, 환자가 믿고 찾아오는 소개 영상",
    lead: "진료는 좋은데 온라인에선 '어떤 곳인지' 안 보여 첫 방문이 망설여지죠. 공간과 진료 분위기를 신뢰감 있게 담아, 검색하고 찾아온 환자가 예약으로 이어지게 만듭니다.",
    title: "제주 병원·의원·한의원 홍보영상 제작 | 비디오 로스터리",
    desc: "제주 병원·의원·치과·한의원 홍보영상. 신뢰를 주는 소개 영상으로 첫 방문을 예약으로. 무료 샘플 컷 먼저 확인. 40+ 실제 제작 영상.",
    why: [
      ["믿음이 예약을 만든다", "병원은 '믿을 만한 곳'이라는 인상이 첫 방문을 결정합니다. 공간과 진료 분위기를 차분하게 보여주세요."],
      ["검색에서 눈에 띄게", "네이버플레이스·홈페이지 첫 화면의 영상 하나가 근처 다른 곳과 다르게 보이게 합니다."],
      ["과장 없이 담백하게", "의료광고 기준을 고려해 과장 없이, 공간과 강점만 신뢰감 있게 담습니다."]
    ]
  },
  "jeju-beauty-video": {
    kicker: "제주 미용실·네일·뷰티샵 릴스",
    h1: "제주 미용실·뷰티샵, 예약을 부르는 감성 릴스",
    lead: "시술 결과는 좋은데 그 감각이 온라인에 다 드러나지 않죠. 비포애프터와 공간 무드를 감성 있게 담아, 저장되고 예약으로 이어지는 릴스를 만듭니다.",
    title: "제주 미용실·네일·속눈썹 뷰티 홍보영상 제작 | 비디오 로스터리",
    desc: "제주 미용실·네일샵·속눈썹·왁싱 릴스, 촬영 없이 사진만으로. 비포애프터로 예약을 부르는 30초. 무료 샘플 컷 먼저. 40+ 실제 제작 영상.",
    why: [
      ["비포애프터가 예약을 만든다", "뷰티는 '결과'를 보여줄 때 예약이 옵니다. 비포애프터 한 컷이 열 마디 설명보다 강해요."],
      ["인스타 탐색에서 발견되게", "'제주 미용실·네일' 탐색과 해시태그에서 릴스가 새 손님을 데려옵니다."],
      ["촬영 없이 사진만", "가진 시술 사진 몇 장이면 됩니다. 감성 톤 세로 릴스로 만들어 드려요."]
    ]
  },
  "jeju-fitness-video": {
    kicker: "제주 헬스장·필라테스·요가 홍보영상",
    h1: "제주 헬스장·필라테스, 등록을 부르는 공간 영상",
    lead: "시설과 프로그램은 좋은데 온라인에선 규모와 분위기가 안 느껴지죠. 운동 공간·기구·수업 분위기를 역동적으로 담아, 상담·등록으로 이어지는 영상을 만듭니다.",
    title: "제주 헬스장·필라테스·요가 홍보영상 제작 | 비디오 로스터리",
    desc: "제주 헬스장·필라테스·요가·크로스핏 홍보영상. 공간과 분위기로 등록을 부르는 영상. 무료 샘플 컷 먼저. 40+ 실제 제작 영상.",
    why: [
      ["공간이 등록을 만든다", "운동은 '여기서 하고 싶다'가 등록을 결정합니다. 넓은 공간·깨끗한 기구·수업 열기를 보여주세요."],
      ["신규 이벤트와 함께", "오픈·신규 회원 이벤트 시즌에 릴스 하나면 상담 문의가 확 늘어납니다."],
      ["역동적인 30초", "운동의 에너지가 느껴지는 세로 숏폼으로, 인스타·네이버플레이스 어디든."]
    ]
  },
  "jeju-academy-video": {
    kicker: "제주 학원·교습소 홍보영상",
    h1: "제주 학원, 학부모가 믿고 등록하는 소개 영상",
    lead: "커리큘럼은 탄탄한데 온라인에선 그 강점이 안 보여 상담이 망설여지죠. 강의실·수업 분위기를 신뢰감 있게 담아, 학부모 상담으로 이어지게 만듭니다.",
    title: "제주 학원·교습소·공부방 홍보영상 제작 | 비디오 로스터리",
    desc: "제주 학원·교습소·공부방 홍보영상. 학부모 신뢰를 주는 소개 영상으로 상담·등록을. 무료 샘플 컷 먼저. 40+ 실제 제작 영상.",
    why: [
      ["믿음이 등록을 만든다", "학원은 학부모의 신뢰가 등록을 결정합니다. 공간과 수업 분위기를 차분하게 보여주세요."],
      ["신학기 전에 노출을", "설명회·신학기 시즌 전 영상 하나면 블로그·맘카페·네이버플레이스에서 눈에 띕니다."],
      ["촬영 없이 사진만", "학원 사진과 소개 자료만 보내주세요. 신뢰감 있는 소개 영상으로 만들어 드립니다."]
    ]
  },
  "jeju-activity-video": {
    kicker: "제주 체험·액티비티·투어 홍보영상",
    h1: "제주 체험·액티비티, 예약을 부르는 현장 영상",
    lead: "액티비티는 직접 해보면 좋은데 온라인에선 그 재미가 안 느껴지죠. 현장의 생생함과 제주 풍경을 드론과 함께 담아, 여행객이 바로 예약하게 만듭니다.",
    title: "제주 체험·액티비티·투어·레저 홍보영상 제작 | 비디오 로스터리",
    desc: "제주 체험·액티비티·투어·레저 홍보영상과 드론. 생생한 현장으로 여행객 예약을. 무료 샘플 컷 먼저. 40+ 실제 제작 영상.",
    why: [
      ["보여주면 예약한다", "체험은 '재미있어 보인다'가 예약을 만듭니다. 현장의 생생한 순간을 담아요."],
      ["드론으로 제주를", "바다·오름·현장 스케일을 항공컷으로 담으면 여행 기대감이 확 올라갑니다."],
      ["예약 플랫폼에 바로", "네이버·여행 플랫폼·인스타 어디든 바로 쓰는 세로·가로 영상."]
    ]
  },
  "jeju-homepage": {
    kicker: "제주 소상공인 홈페이지 제작",
    h1: "제주 사장님, 검색하고 찾아온 손님이 딴 데 안 가는 홈페이지",
    lead: "네이버·인스타에서 발견돼도, 홈페이지 첫 화면이 허술하면 손님은 그냥 떠납니다. 첫 화면에서 '여기 믿을 만하다'가 느껴지고, 바로 문의·예약으로 이어지는 홈페이지를 만듭니다.",
    title: "제주 소상공인·자영업 홈페이지 제작 | 비디오 로스터리",
    desc: "제주 소상공인·자영업·매장 홈페이지 제작. 첫 화면에서 신뢰를 주고 문의로 이어지는 사이트. 무료 진단 먼저. 40+ 실제 제작 영상.",
    why: [
      ["첫 화면이 신뢰를 만든다", "손님은 3초 안에 '믿을 만한 곳인지' 판단합니다. 첫 화면을 그렇게 설계합니다."],
      ["문의로 이어지게", "예쁘기만 한 사이트가 아니라, 방문자가 문의·예약 버튼을 누르게 만드는 구조로 만듭니다."],
      ["영상까지 한 번에", "홈페이지 안에 들어갈 홍보영상·릴스까지 함께 만들 수 있어요."]
    ],
    offer: {
      heroCta: "무료로 첫 화면 진단받기 ↗",
      hrefSlug: "estimate",
      k: "무료 진단 · 이번 달 선착순",
      t: "지금 쓰는 홈페이지·인스타, 손님 눈엔 어떻게 보일까요? 무료로 봐드려요",
      x: "무료 진단 받기 ↗",
      ctaH: "먼저 무료 진단으로 확인하세요.",
      note: "지금 쓰시는 홈페이지·SNS 주소만 보내주시면, 좋은 점·아쉬운 점·바꾸면 좋을 것을 무료로 짚어 드립니다. 40+ 실제 제작."
    },
    faqItems: [
      ["홈페이지 제작 비용은 얼마인가요?", "고정가 대신 필요한 페이지·기능에 맞춰 견적을 드립니다. 무료 진단으로 먼저 방향을 잡고, 필요한 만큼만 정하시면 됩니다."],
      ["제작 기간은 얼마나 걸리나요?", "규모에 따라 다르지만 소상공인 홈페이지는 대부분 짧은 기간에 오픈하실 수 있습니다. 자료가 준비되면 더 빨라져요."],
      ["모바일에서도 잘 보이나요?", "네. 요즘은 손님 대부분이 휴대폰으로 봅니다. 모바일 화면을 기준으로, 작은 화면에서도 첫인상과 문의 버튼이 살아있게 만듭니다."],
      ["도메인·호스팅도 해주시나요?", "네. 도메인 연결부터 배포까지 함께 도와드립니다. 이미 갖고 계신 게 있으면 그대로 연결해 드려요."],
      ["기존 홈페이지를 고치는 것도 되나요?", "네. 새로 만드는 것뿐 아니라 지금 사이트의 첫 화면·문의 흐름만 손봐 성과를 올리는 것도 가능합니다. 무료 진단에서 방향을 알려드려요."],
      ["영상이나 사진도 같이 되나요?", "네. 홈페이지에 들어갈 홍보영상·릴스·사진 보정까지 한 번에 진행할 수 있습니다."]
    ]
  },
  "jeju-hotel-promo": {
    kicker: "제주 호텔·리조트 홍보영상·드론",
    h1: "제주 호텔·리조트, 예약을 부르는 홍보영상과 드론컷",
    lead: "객실은 좋은데 온라인에선 그 규모와 뷰가 다 안 보이죠. 오션뷰·부대시설·객실 동선을 드론과 무드컷으로 담아, 예약 사이트 첫 화면에서 '여기 묵고 싶다'가 바로 오게 만듭니다.",
    title: "제주 호텔·리조트 홍보영상·드론촬영 제작 | 비디오 로스터리",
    desc: "제주 호텔·리조트 홍보영상과 드론 항공촬영. 오션뷰·시설·객실을 담아 예약을 부르는 영상. 무료 샘플 컷 먼저. 40+ 실제 제작 영상.",
    why: [
      ["첫 화면이 예약을 만든다", "예약 사이트·인스타 첫 컷에서 '묵고 싶다'가 3초에 결정됩니다. 그 3초를 위해 설계합니다."],
      ["드론으로 규모·오션뷰를", "리조트 스케일과 바다뷰를 항공컷으로 담으면 객실 사진과 차원이 달라져요."],
      ["성수기 전에 노출을", "예약 시즌 전에 영상 하나면 OTA·인스타·자사 예약페이지 전환이 확 올라갑니다."]
    ]
  },
  "jeju-real-estate-video": {
    kicker: "제주 부동산·매물·토지 영상",
    h1: "제주 부동산, 매물이 한눈에 들어오는 영상과 항공컷",
    lead: "사진 몇 장으론 매물의 위치·규모·주변 환경이 안 잡히죠. 토지·건물·상가를 드론과 현장컷으로 담아, 매수자가 직접 가보기 전에 '가치'가 먼저 보이게 만듭니다.",
    title: "제주 부동산 매물·토지 드론촬영·영상 제작 | 비디오 로스터리",
    desc: "제주 부동산 매물·토지·상가 영상과 드론 항공촬영. 위치·규모·주변을 한눈에. 무료 샘플 컷 먼저. 40+ 실제 제작 영상.",
    why: [
      ["보여주면 문의가 온다", "토지·건물은 '실제 모습과 위치'를 영상으로 보여줄 때 매수 문의가 늘어납니다."],
      ["드론으로 위치·규모를", "경계·진입로·주변 환경과 오션뷰를 항공컷으로 담아 가치를 한눈에 전달해요."],
      ["매물 플랫폼에 바로", "네이버 부동산·유튜브·자사 매물페이지 어디든 바로 쓰는 세로·가로 영상."]
    ]
  },
  "jeju-restaurant-menu-video": {
    kicker: "제주 식당 메뉴 영상·배달앱 메뉴 컷",
    h1: "제주 식당, 메뉴 하나하나가 팔리는 영상이 됩니다",
    lead: "메뉴 사진은 있는데 배달앱 썸네일·메뉴판이 밋밋해 주문으로 안 이어지죠. 가진 메뉴 사진만으로, 메뉴별로 먹고 싶어지는 짧은 컷을 만들어 배달앱·메뉴판·플레이스에 바로 얹어 드립니다.",
    title: "제주 식당 메뉴 영상·배달앱 메뉴 컷 제작 | 비디오 로스터리",
    desc: "제주 식당 메뉴 영상, 촬영 없이 메뉴 사진만으로 배달앱 썸네일·메뉴판·메뉴별 클립 제작. 주문으로 잇는 30초. 무료 샘플 컷 먼저. 40+ 실제 제작.",
    why: [
      ["메뉴별로 팔린다", "배달앱·메뉴판에서 각 메뉴가 움직이는 컷이 되면 대표 메뉴부터 주문이 몰려요."],
      ["촬영·방문 없이", "가진 메뉴 사진 몇 장만 보내주세요. 메뉴별 세로 숏폼으로 만들어 드립니다."],
      ["배달앱·메뉴판에 바로", "배민·쿠팡이츠 썸네일, 매장 메뉴판 TV, 네이버플레이스 어디든 바로 얹어요."]
    ]
  },
  "jeju-camping-video": {
    kicker: "제주 캠핑장·글램핑 홍보영상",
    h1: "제주 캠핑장·글램핑, 예약을 부르는 감성 영상과 드론",
    lead: "자연 속 분위기가 강점인데 사진으론 그 감성이 다 안 담기죠. 사이트 전경·노을·불멍·부대시설을 드론과 무드컷으로 담아, 보자마자 예약하고 싶은 영상을 만듭니다.",
    title: "제주 캠핑장·글램핑 홍보영상·드론촬영 제작 | 비디오 로스터리",
    desc: "제주 캠핑장·글램핑·오토캠핑 홍보영상과 드론. 자연 감성으로 예약을 부르는 30초. 무료 샘플 컷 먼저. 40+ 실제 제작 영상.",
    why: [
      ["감성이 예약을 만든다", "캠핑·글램핑은 '그 분위기에 있고 싶다'가 예약을 결정합니다. 노을·불멍·전경을 감성 톤으로 담아요."],
      ["드론으로 자연을", "숲·바다·사이트 배치를 항공컷으로 담으면 규모와 뷰가 사진과 차원이 달라져요."],
      ["예약 플랫폼에 바로", "인스타·네이버·여행 플랫폼 어디든 바로 쓰는 세로·가로 영상."]
    ]
  }
};

const industryFaqItems = [
  ["정말 촬영 없이 사진만으로 되나요?", "네. 가지고 계신 가게·제품·공간 사진 3~5장이면 충분합니다. 촬영이나 방문 없이 세로 30초 홍보영상을 만들어 드립니다. 사진이 부족하면 어떤 컷이 필요한지 먼저 알려드려요."],
  ["무료 샘플은 정말 무료인가요? 조건이 있나요?", "네, 무료입니다. 먼저 영상에 그대로 들어갈 샘플 컷 3장을 만들어 보여드려요. 마음에 들면 그 컷 그대로 릴스·영상으로 제작하고, 아니면 전혀 부담 없습니다. 이번 달 선착순 5팀으로 받고 있어요."],
  ["제작 기간은 얼마나 걸리나요?", "무료 샘플 컷은 보통 문의 후 며칠 안에 보여드립니다. 본 제작은 편수와 구성에 따라 다르지만 대부분 짧은 기간에 받아보실 수 있어요."],
  ["만든 영상은 어디에 쓸 수 있나요?", "인스타 릴스·유튜브 쇼츠·네이버플레이스·매장 TV·배달앱 등 어디든 바로 쓰실 수 있습니다. 쓰실 곳에 맞춰 화면비(세로·정사각·가로)를 맞춰 드려요."],
  ["제주가 아니어도 되나요?", "네. 사진만 주고받으면 되기 때문에 전국 어디든 온라인으로 진행됩니다. 제주는 현장 촬영·드론도 가능하고, 그 외 지역은 온라인 제작으로 도와드려요."],
  ["비용은 어떻게 되나요?", "고정가 대신 원하는 편수·구성에 맞춰 견적을 드립니다. 무료 샘플 컷을 먼저 보신 뒤 필요한 만큼만 정하시면 됩니다. 실제 제작 사례로 검증된 합리적인 견적이에요."]
];

function industryPage(key) {
  const d = industryPages[key];
  const why = d.why.map(([t, dd], i) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${dd}</span></span></div>`).join("");
  const faq = (d.faqItems || industryFaqItems).map(([q, a]) => `<details class="en-faq-item"><summary><span>${q}</span><span class="en-faq-mk" aria-hidden="true">+</span></summary><p>${a}</p></details>`).join("");
  const mail = `mailto:${consultEmail}?subject=${encodeURIComponent(d.kicker + " 문의 — Video Roastery")}`;
  const off = d.offer || {};
  const heroCta = off.heroCta || "무료 샘플 컷 3장 받기 ↗";
  const ctaHref = routeHref(off.hrefSlug || "free");
  const offK = off.k || "이번 달 선착순 5팀 · 무료";
  const offT = off.t || "사진 보내주시면 샘플 컷 3장을 무료로 먼저 만들어 드려요";
  const offX = off.x || "무료 샘플 컷 받기 ↗";
  const ctaH = off.ctaH || "먼저 무료 샘플 컷으로 확인하세요.";
  const ctaNote = off.note || "업종과 사진(링크 또는 설명)만 보내주시면, 무료 샘플 컷 3장과 함께 범위·견적을 회신드립니다. 40+ 실제 제작 영상.";
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <div class="en-page basic-ko">
      ${koBar()}
      <main id="main">
        <section class="en-detail-hero">
          <p class="en-eyebrow">${d.kicker}</p>
          <h1 class="en-detail-h1">${d.h1}</h1>
          <p class="en-detail-lead">${d.lead}</p>
          <div class="en-detail-actions">
            <a class="en-cta-btn" href="${ctaHref}">${heroCta}</a>
            <a class="en-detail-link" href="#work" data-reel-open="ko" aria-haspopup="dialog">실제 작업 보기</a>
          </div>
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>왜 필요할까요</span><span>(03)</span></div>
          <div class="en-svc-list">${why}</div>
        </section>

        <a class="en-offer" href="${ctaHref}">
          <span class="en-offer-k">${offK}</span>
          <span class="en-offer-t">${offT}</span>
          <span class="en-offer-x" aria-hidden="true">${offX}</span>
        </a>

        <section class="en-services">
          <div class="en-sec-head"><span>자주 묻는 질문</span><span>(FAQ)</span></div>
          <div class="en-faq">${faq}</div>
        </section>

        <section class="en-cta" id="contact">
          <p class="en-eyebrow">문의</p>
          <h2 class="en-cta-h">${ctaH}</h2>
          <a class="en-cta-btn" href="${mail}">문의하기 ↗</a>
          <p class="en-cta-note">${ctaNote}</p>
        </section>
      </main>
      ${koFooter()}
    </div>
  `;
}

// ── 검색광고 전용 랜딩 — 광고 클릭(네이버 파워링크·구글 검색광고) 착지점 ──
// 원칙: 광고 문구=H1(메시지 일치), 이탈 링크 최소, 실제 제작 사례를 먼저, 문의 폼은 같은 페이지 안에(이동 0회).
// 데이터맵 1개 + 렌더 함수 1개 — 키워드 그룹별 랜딩을 늘릴 때는 항목만 추가(셸·sitemap 동반).
const adLandingPages = {
  "ai-video": {
    kicker: "AI 영상제작 · 촬영 없이 사진만으로",
    h1: "AI 영상제작, 사진만 보내주세요",
    lead: "제품·매장·서비스 사진과 원하는 방향만 알려주시면, 광고·홍보에 바로 쓰는 AI 영상을 만들어 드립니다. 촬영도 모델도 스튜디오도 필요 없습니다.",
    title: "AI 영상제작 업체 | 촬영 없이 사진만으로 광고·홍보영상 — 비디오 로스터리",
    desc: "AI 영상제작 전문. 촬영 없이 제품·매장 사진만으로 광고·홍보 영상을 만듭니다. 실제 제작 사례를 먼저 보고, 무료 샘플 컷 3장으로 시작하세요. 제주 스튜디오 · 전국 온라인.",
    cta: "AI 영상 견적 받기",
    portfolioSlug: "ai-shortform",
    prefillService: "AI 영상제작",
    formats: [
      ["제품 광고 숏폼", "제품 사진만으로 릴스·쇼츠·틱톡 세로 광고. 첫 3초에 시선을 잡는 구성."],
      ["브랜드·캠페인 영상", "브랜드 무드와 메시지를 담은 캠페인 영상. 실사 촬영이 어려운 장면도 AI로."],
      ["기업·기관 홍보 영상", "사업·정책·서비스 소개를 이해되는 순서로. 공공·기업 캠페인 제작 경험."],
      ["AI 시네마틱 필름", "촬영으로는 비용이 커지는 장면을 시네마틱 AI 영상으로. 광고·전시·발표용."]
    ],
    steps: [
      ["자료 보내기", "제품·매장·서비스 사진 몇 장과 쓰실 곳(릴스·유튜브·매장 TV·광고)만 알려주세요."],
      ["샘플 컷 무료 확인", "본 제작 전에 영상에 들어갈 샘플 컷 3장을 무료로 먼저 보여드립니다. 방향이 맞는지 여기서 확인."],
      ["본 제작·납품", "확정된 방향으로 영상을 완성해 채널별 화면비(세로·정사각·가로)로 납품합니다."]
    ],
    faq: [
      ["정말 촬영 없이 되나요?", "네. 제품·매장·서비스 사진 3~5장과 원하는 방향만 있으면 됩니다. 사진 상태에 따라 어떤 컷이 더 필요한지 먼저 알려드려요."],
      ["AI 영상은 어색하지 않나요?", "이 페이지의 실제 제작 사례를 먼저 보시길 권해요. 제품·브랜드 톤에 맞춰 컷을 고르고, 편집·보정·사운드는 사람이 마무리합니다. 어색한 컷은 납품 전에 걸러냅니다."],
      ["무료 샘플 컷은 조건이 있나요?", "없습니다. 영상에 그대로 들어갈 샘플 컷 3장을 먼저 만들어 보여드리고, 마음에 들 때만 진행합니다. 이번 달 선착순 5팀으로 받고 있어요."],
      ["제작 기간은 얼마나 걸리나요?", "샘플 컷은 보통 문의 후 며칠 안에 보여드립니다. 본 제작은 편수와 구성에 따라 다르지만 대부분 짧은 기간에 받아보실 수 있어요."],
      ["만든 영상은 어디에 쓸 수 있나요?", "인스타 릴스·유튜브·틱톡·네이버플레이스·매장 TV·온라인 광고 등 상담 때 정한 범위 안에서 자유롭게 쓰실 수 있습니다. 쓰실 곳에 맞춰 화면비를 맞춰 드려요."],
      ["비용은 어떻게 되나요?", "고정가 대신 편수·구성에 맞춰 견적을 드립니다. 테스트 1건부터 월간 소재팩·광고 확장팩까지, 무료 샘플 컷을 보신 뒤 필요한 만큼만 정하시면 됩니다."],
      ["제주가 아니어도 되나요?", "네. 사진만 주고받으면 되기 때문에 전국 어디든 온라인으로 진행됩니다."]
    ]
  }
};

function adLandingPage(key) {
  const d = adLandingPages[key];
  const list = (rows) => rows.map(([t, dd], i) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${dd}</span></span></div>`).join("");
  const formats = list(d.formats);
  const steps = list(d.steps);
  const faq = d.faq.map(([q, a]) => `<details class="en-faq-item"><summary><span>${q}</span><span class="en-faq-mk" aria-hidden="true">+</span></summary><p>${a}</p></details>`).join("");
  // 실제 제작 사례 — 서비스 상세와 같은 칸(영상 연결 칸 우선). 광고 착지에서 "말보다 결과물"을 먼저.
  const items = portfolioItemsForRoute({ slug: d.portfolioSlug }).slice(0, 9); // 모바일 세로 스크롤 과다 방지 — 폼까지 빨리 닿게
  if (items[0]) items[0] = { ...items[0], size: "large" };
  const hasMedia = items.some((item) => portfolioLink(item));
  const tiers = (pricingGroups.find((g) => g.slug === d.portfolioSlug) || { tiers: [] }).tiers
    .map((t, i) => `<div class="en-svc en-svc--static"><span class="en-svc-n">${String(i + 1).padStart(2, "0")}</span><span class="en-svc-b"><span class="en-svc-t">${t.tier}</span><span class="en-svc-d">${t.inc}</span></span></div>`).join("");
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <div class="en-page basic-ko">
      <header class="en-bar en-bar--ink">
        <a class="en-wm" href="${routeHref()}">VIDEO ROASTERY<sup>®</sup></a>
        <nav class="en-nav" aria-label="메뉴"><a href="#work">제작 사례</a><a href="#how">진행 방법</a><a href="#contact">견적 문의</a></nav>
      </header>
      <main id="main">
        <section class="en-detail-hero">
          <p class="en-eyebrow">${d.kicker}</p>
          <h1 class="en-detail-h1">${d.h1}</h1>
          <p class="en-detail-lead">${d.lead}</p>
          <div class="en-detail-actions">
            <a class="en-cta-btn" href="#contact">${d.cta} ↗</a>
            <a class="en-detail-link" href="#work">실제 제작 사례 보기</a>
          </div>
        </section>

        <section class="en-proof" aria-label="작업 성과">
          <div class="en-sec-head"><span>숫자로 보는 비디오 로스터리</span><span>(03)</span></div>
          <div class="en-proof-grid">
            <div class="en-proof-item"><strong>140+</strong><span>누적 프로젝트 —<br>기업·공공·교육·의료·식품·IT까지</span></div>
            <div class="en-proof-item"><strong>10년</strong><span>한 기관과 이어온 다년 작업 —<br>공공·기업 반복 계약으로 검증된 신뢰</span></div>
            <div class="en-proof-item"><strong>3장</strong><span>무료 샘플 컷 먼저 —<br>마음에 들 때만 본 제작 진행</span></div>
          </div>
        </section>

        <section class="en-services" id="work">
          <div class="en-sec-head"><span>실제 AI 제작 사례</span><span>${hasMedia ? "▶ 눌러서 재생" : ""}</span></div>
          ${portfolioWall(items, "detail-wall ad-wall", !hasMedia)}
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>무엇을 만들 수 있나요</span><span>${secCount(formats)}</span></div>
          <div class="en-svc-list">${formats}</div>
        </section>

        <section class="en-services" id="how">
          <div class="en-sec-head"><span>이렇게 진행돼요</span><span>${secCount(steps)}</span></div>
          <div class="en-svc-list">${steps}</div>
        </section>

        <a class="en-offer" href="#contact">
          <span class="en-offer-k">이번 달 선착순 5팀 · 무료</span>
          <span class="en-offer-t">사진 보내주시면 샘플 컷 3장을 무료로 먼저 만들어 드려요</span>
          <span class="en-offer-x" aria-hidden="true">무료 샘플 컷 받기 ↗</span>
        </a>

        <section class="en-services">
          <div class="en-sec-head"><span>진행 방식</span><span>${secCount(tiers)}</span></div>
          <div class="en-svc-list">${tiers}</div>
        </section>

        <section class="en-services" id="faq">
          <div class="en-sec-head"><span>자주 묻는 질문</span><span>FAQ</span></div>
          <div class="en-faq">${faq}</div>
        </section>

        <section class="section tight en-form-sec" id="contact">
          <div class="cta-band has-form">
            <h2>AI 영상 견적 문의</h2>
            <p class="cta-note">사진과 쓰실 곳만 알려주세요. 확인 후 무료 샘플 컷 3장과 함께 제작 범위·견적을 회신드립니다.</p>
            <p class="contact-trust">평균 1시간 내 응답 · 촬영·방문 없이 · 마음에 들 때만 진행</p>
            ${quoteForm()}
          </div>
        </section>
      </main>
      <footer class="en-footer">
        <span>VIDEO ROASTERY® — 제주, 대한민국 · 전국 온라인</span>
        <a href="${routeHref("privacy")}">개인정보처리방침</a>
      </footer>
    </div>
  `;
}

function mainPage() {
  // 2026-10 재기획 — 홈 5칸: ① 한 줄 소개+작업 영상 ② 서비스 문 3개 ③ 최근 작업 9칸 ④ 실적 ⑤ 문의.
  //   무료 샘플 띠·제주 업종 버튼·밴쿠버 섹션은 월 관리 페이지·푸터·실적 한 줄로 옮김.
  const wall = heroWallHtml();
  const recent = homeRecentWork.map((img) => portfolioWallItems.find((it) => it.image === img)).filter(Boolean).map((it) => ({ ...it, size: "" }));
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <div class="en-page basic-ko">
      ${koBar(false)}
      <main id="main">
        <section class="en-hero" id="reel">
          <h1 class="sr-only">비디오 로스터리 — 제주 영상·필름·웹 제작 스튜디오</h1>
          ${wall}
          <div class="en-hero-scrim" aria-hidden="true"></div>
          <div class="en-hero-center">
            <a class="en-reel" href="#reel" data-reel-open="ko" aria-haspopup="dialog">WATCH<br>REEL ▶</a>
          </div>
        </section>

        <section class="en-statement">
          <div class="en-rule"></div>
          <div class="en-statement-grid">
            <p class="en-statement-copy">제주 가게의 촬영·릴스·홈페이지를 매달 맡고, 기업과 기관의 홍보영상·웹사이트를 만듭니다.</p>
            <div class="en-bigmark" aria-hidden="true">VR<sup>®</sup></div>
          </div>
        </section>

        <section class="en-jeju" id="services">
          <div class="en-sec-head"><span>서비스</span><span>(03)</span></div>
          <div class="en-jeju-grid">${koDoorCards()}</div>
        </section>

        <section class="en-services" id="work">
          <div class="en-sec-head"><span>최근 작업</span><a class="en-sec-more" href="${routeHref("work")}">전체 작업 보기 ↗</a></div>
          ${portfolioWall(recent, "detail-wall home-recent")}
        </section>

        <section class="en-proof" aria-label="작업 성과">
          <div class="en-sec-head"><span>실적</span><span>(PROOF)</span></div>
          <div class="en-proof-grid">
            <div class="en-proof-item"><strong>140+</strong><span>누적 프로젝트 —<br>기업·공공·교육·의료·식품·IT까지</span></div>
            <div class="en-proof-item"><strong>10년</strong><span>한 기관과 이어온 다년 작업 —<br>공공·기업 반복 계약</span></div>
            <div class="en-proof-item"><strong>2×</strong><span>브랜드 채널 1년 운영,<br>유튜브 구독자 두 배</span></div>
          </div>
          <p class="en-clients-list ko-clients">LG U+ &nbsp;·&nbsp; S-OIL &nbsp;·&nbsp; 대한결핵협회 &nbsp;·&nbsp; 넥슨컴퓨터박물관 &nbsp;·&nbsp; 마크애니 &nbsp;·&nbsp; 넥스트챌린지 &nbsp;·&nbsp; 인크루즈 &nbsp;·&nbsp; 삼정물산</p>
          <p class="en-remote-note">밴쿠버 부동산 중개인 매물 릴스 — 매물 정보를 받으면 다음 날 아침 촬영 기획안부터 보내 드립니다. <a href="${routeHref("en/real-estate-video-editing")}">기획안 샘플 보기 ↗</a></p>
        </section>

        ${koCta()}
      </main>
      ${koFooter()}
    </div>
  `;
}

// 홈 '최근 작업' 9칸 — 누르면 영상이 재생되거나 실제 사이트가 열리는 칸만.
const homeRecentWork = [
  "portfolio_covers/site_jayeonin.jpg", "portfolio_covers/jeju_1min.jpg", "portfolio_covers/content_03.jpg",
  "portfolio_covers/corp_03.jpg", "portfolio_covers/ad_barojuyu.jpg", "portfolio_covers/site_sanjiro.jpg",
  "portfolio_covers/corp_05.jpg", "portfolio_covers/beauty.jpg", "portfolio_covers/site_vrsub_v3.jpg"
];

// ── 서비스 문 3개 중 새 페이지 2개 + 작업 사례 전체 ──
function koDetailShell({ kicker, h1, lead, actions, body }) {
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <div class="en-page basic-ko">
      ${koBar()}
      <main id="main">
        <section class="en-detail-hero">
          <p class="en-eyebrow">${kicker}</p>
          <h1 class="en-detail-h1">${h1}</h1>
          <p class="en-detail-lead">${lead}</p>
          <div class="en-detail-actions">${actions}</div>
        </section>
${body}
      </main>
      ${koFooter()}
    </div>
  `;
}
const koSvcList = (rows, link) => rows.map(([n, t, d, slug]) => slug
  ? `<a class="en-svc" href="${routeHref(slug)}"><span class="en-svc-n">${n}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span><span class="en-svc-x" aria-hidden="true">↗</span></a>`
  : `<div class="en-svc en-svc--static"><span class="en-svc-n">${n}</span><span class="en-svc-b"><span class="en-svc-t">${t}</span><span class="en-svc-d">${d}</span></span></div>`).join("");
const koFaqHtml = (rows) => `<div class="en-faq">${rows.map(([q, a]) => `<details class="en-faq-item"><summary><span>${q}</span><span class="en-faq-mk" aria-hidden="true">+</span></summary><p>${a}</p></details>`).join("")}</div>`;

const managementFaq = [
  ["촬영은 한 달에 몇 번인가요?", "기본은 월 1회입니다. 메뉴가 바뀌거나 행사가 있으면 추가 촬영을 따로 잡습니다."],
  ["계약 기간은 어떻게 되나요?", "보통 3개월 단위로 진행하고, 끝나기 전에 연장 여부를 정합니다."],
  ["게시는 누가 하나요?", "저희가 올려 드리거나, 파일로 드려 직접 올리실 수 있습니다. 계정과 비밀번호는 가게 명의로 두고 사장님이 갖고 계십니다."],
  ["비용은 얼마인가요?", "가게마다 필요한 범위가 달라 맞춤 견적으로 안내합니다. 하고 싶은 것과 예산을 알려주시면 가능한 구성으로 회신드립니다."],
  ["제주 밖 가게도 되나요?", "찾아가 촬영하는 월 관리는 제주 중심입니다. 가진 사진·영상으로 만드는 콘텐츠는 전국 어디든 가능합니다."]
];
function managementPage() {
  const items = portfolioWallItems.filter((it) => it.slug === "content").sort((a, b) => (portfolioMedia[b.image] ? 1 : 0) - (portfolioMedia[a.image] ? 1 : 0));
  if (items[0]) items[0] = { ...items[0], size: "large" };
  const jeju = jejuIndustryLinks.map(([slug, label]) => `<a href="${routeHref(slug)}">${label}</a>`).join("");
  const body = `
        <section class="en-services">
          <div class="en-sec-head"><span>매달 하는 일</span><span>(04)</span></div>
          <div class="en-svc-list">${koSvcList([
            ["01", "월 1회 촬영", "가게에 찾아가 메뉴·공간·사람을 한 번에 찍습니다."],
            ["02", "릴스·카드뉴스", "그 촬영본으로 인스타그램·당근에 올릴 릴스와 카드뉴스를 만듭니다."],
            ["03", "게시와 기록", "계정 세팅부터 게시까지 맡고, 월말에 조회·저장·문의 기록을 정리해 드립니다."],
            ["04", "필요할 때 더", "예약 홈페이지, 중국인 관광객용 샤오홍슈 노트, 메뉴판·스티커 같은 인쇄물도 함께 맡습니다."]
          ])}</div>
        </section>

        <section class="en-services en-remote" id="how">
          <div class="en-sec-head"><span>시작하는 순서</span><span>(03)</span></div>
          <ol class="en-remote-steps">
            <li><span class="en-remote-t">무료 샘플 컷 3장</span><span class="en-remote-d">가게 사진을 보내주시면 샘플 컷 3장을 먼저 만들어 드립니다.</span></li>
            <li><span class="en-remote-t">첫 달 촬영</span><span class="en-remote-d">날짜를 잡아 찾아가 촬영하고, 첫 콘텐츠를 올립니다.</span></li>
            <li><span class="en-remote-t">매달 반복</span><span class="en-remote-d">같은 흐름으로 3개월 단위로 진행합니다.</span></li>
          </ol>
        </section>

        <a class="en-offer" href="${routeHref("free")}">
          <span class="en-offer-k">이번 달 선착순 5팀 · 무료</span>
          <span class="en-offer-t">사진 보내주시면 샘플 컷 3장을 무료로 먼저 만들어 드려요</span>
          <span class="en-offer-x" aria-hidden="true">무료 샘플 컷 받기 ↗</span>
        </a>

        <section class="en-services">
          <div class="en-sec-head"><span>1분제주에도 소개</span><span>(JEJU)</span></div>
          <p class="ko-sec-lead">저희가 운영하는 제주 정보 채널 1분제주(게시물 47편)에 맡겨 주신 가게를 소개합니다. <a href="https://jeju.videoroastery.com/" target="_blank" rel="noopener">1분제주 보기 ↗</a></p>
        </section>

        <section class="en-services" id="work">
          <div class="en-sec-head"><span>작업 사례</span><span>▶ 눌러서 재생</span></div>
          ${portfolioWall(items, "detail-wall")}
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>제주 업종별 안내</span><span>(14)</span></div>
          <nav class="en-jeju-chips" aria-label="제주 업종별 안내">${jeju}</nav>
        </section>

        <section class="en-services" id="faq">
          <div class="en-sec-head"><span>자주 묻는 질문</span><span>FAQ</span></div>
          ${koFaqHtml(managementFaq)}
        </section>

        ${koCta()}`;
  return koDetailShell({
    kicker: "월 관리 · 제주 가게",
    h1: "제주 가게의 촬영과 SNS를 매달 맡습니다.",
    lead: "한 달에 한 번 가게에 찾아가 찍고, 그 촬영본으로 릴스와 카드뉴스를 만들어 한 달 동안 올립니다. 필요하면 예약 홈페이지와 샤오홍슈까지 함께 맡습니다.",
    actions: `<a class="en-cta-btn" href="${routeHref("estimate")}">문의하기 ↗</a><a class="en-detail-link" href="${routeHref("free")}">무료 샘플 컷 받기</a>`,
    body
  });
}

const videoFaq = [
  ["제작 기간은 얼마나 걸리나요?", "분량과 범위에 따라 보통 1~4주입니다. 보유 자료를 확인한 뒤 일정을 먼저 안내드립니다."],
  ["촬영 없이도 만들 수 있나요?", "네. 제품 사진·기존 영상·로고만으로 AI 영상과 숏폼을 만듭니다. 자료가 부족하면 필요한 사진을 먼저 알려 드립니다."],
  ["드론 촬영은 어디까지 가능한가요?", "제주와 국내 현장 촬영을 일정에 맞춰 진행합니다. 비행 가능 구역과 허가는 미리 확인합니다."],
  ["사용 범위는 어떻게 되나요?", "납품 영상은 상담 때 정한 범위 안에서 광고·홈페이지·SNS 등에 쓸 수 있습니다. 음악·스톡 사용 범위는 계약 전에 확인합니다."],
  ["비용은 어떻게 정하나요?", "보유 자료와 제작 범위를 확인한 뒤 맞춤 견적서로 안내합니다."]
];
function videoPage() {
  const pick = (slug) => portfolioWallItems.filter((it) => it.slug === slug).sort((a, b) => (portfolioMedia[b.image] ? 1 : 0) - (portfolioMedia[a.image] ? 1 : 0));
  const brand = pick("brand-film"); if (brand[0]) brand[0] = { ...brand[0], size: "large" };
  const ai = pick("ai-shortform");
  const body = `
        <section class="en-services">
          <div class="en-sec-head"><span>무엇을 만드나요</span><span>(03)</span></div>
          <div class="en-svc-list">${koSvcList([
            ["01", "기업·기관 홍보영상", "회사·기관 소개, 행사, 캠페인, 인터뷰 영상.", "brand-film"],
            ["02", "AI 영상·숏폼", "제품 사진으로 만드는 광고 영상과 릴스·쇼츠.", "ai-shortform"],
            ["03", "드론 촬영", "시설·리조트·행사장 항공 촬영.", "drone"]
          ])}</div>
        </section>

        <section class="en-services" id="work">
          <div class="en-sec-head"><span>기업·기관 홍보영상</span><span>▶ 눌러서 재생</span></div>
          ${portfolioWall(brand, "detail-wall")}
        </section>

        <section class="en-services">
          <div class="en-sec-head"><span>AI 영상·숏폼</span><span>▶ 눌러서 재생</span></div>
          ${portfolioWall(ai, "detail-wall")}
        </section>

        <section class="en-clients">
          <div class="en-sec-head"><span>주요 클라이언트</span></div>
          <p class="en-clients-list">LG U+ &nbsp;·&nbsp; S-OIL &nbsp;·&nbsp; 대한결핵협회 &nbsp;·&nbsp; 넥슨컴퓨터박물관 &nbsp;·&nbsp; 마크애니 &nbsp;·&nbsp; 넥스트챌린지 &nbsp;·&nbsp; 인크루즈 &nbsp;·&nbsp; 삼정물산</p>
        </section>

        <section class="en-services" id="faq">
          <div class="en-sec-head"><span>자주 묻는 질문</span><span>FAQ</span></div>
          ${koFaqHtml(videoFaq)}
        </section>

        ${koCta()}`;
  return koDetailShell({
    kicker: "영상 제작",
    h1: "기업·기관 홍보영상, AI 영상, 드론 촬영",
    lead: "회사·기관·제품 이야기를 영상으로 만듭니다. 공공기관·기업·비영리 단체에 140건 넘게 납품했고, 촬영 없이 사진만으로 만드는 AI 영상도 제작합니다.",
    actions: `<a class="en-cta-btn" href="${routeHref("estimate")}">문의하기 ↗</a><a class="en-detail-link" href="#work">작업 사례 보기</a>`,
    body
  });
}

function workPage() {
  const by = (slugs) => portfolioWallItems.filter((it) => slugs.includes(it.slug)).sort((a, b) => (portfolioMedia[b.image] ? 1 : 0) - (portfolioMedia[a.image] ? 1 : 0));
  const groups = [
    ["w-management", "월 관리·콘텐츠", ["content"], "management"],
    ["w-video", "영상 제작", ["brand-film", "ai-shortform"], "video"],
    ["w-web", "홈페이지·앱", ["homepage", "inquiry-agent"], "homepage"]
  ];
  const chips = groups.map(([id, t]) => `<a href="#${id}">${t}</a>`).join("");
  const body = `
        <section class="en-services">
          <nav class="en-jeju-chips ko-work-chips" aria-label="분야별 보기">${chips}</nav>
        </section>
${groups.map(([id, t, slugs, door]) => { const items = by(slugs); if (items[0]) items[0] = { ...items[0], size: "large" }; return `
        <section class="en-services" id="${id}">
          <div class="en-sec-head"><span>${t}</span><a class="en-sec-more" href="${routeHref(door)}">서비스 보기 ↗</a></div>
          ${portfolioWall(items, "detail-wall")}
        </section>`; }).join("")}

        ${koCta()}`;
  return koDetailShell({
    kicker: "작업 사례",
    h1: "실제로 납품하고 운영 중인 작업",
    lead: "누르면 영상이 재생되거나 실제 사이트가 열립니다.",
    actions: `<a class="en-cta-btn" href="${routeHref("estimate")}">문의하기 ↗</a>`,
    body
  });
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
  content: "content_hero.mp4",
  consulting: "live_hero.mp4"
};
// 항목별 실제 연결(가장 정확). key=이미지 경로, value=영상 파일명(assets 내) / 영상 URL(.mp4 등) / 라이브사이트 URL.
// 24시간 동안 한 칸씩 정성껏 채워나가는 중 — 매칭 또는 30초 재편집 영상.
const portfolioMedia = {
  "portfolio_covers/jeju_1min.jpg": "https://jeju.videoroastery.com/",
  "portfolio_covers/site_jayeonin.jpg": "https://jayeonin-glamping.vercel.app/",
  "portfolio_covers/site_vrsub_v3.jpg": "https://vr-video-subscription.vercel.app",
  "portfolio_covers/site_workradar_ko_v3.jpg": "https://upsight-blue.vercel.app",
  "portfolio_covers/site_workradar_en_v3.jpg": "https://en-blush.vercel.app",
  // 2026-09 완성본 3편 — 자체 제작 마스터에서 웹최적화(720x1280, 오디오 포함)
  "portfolio_covers/ad_barojuyu.jpg": "portfolio_videos/ad_barojuyu.mp4",       // GS칼텍스 바로주유(30.3s) — v42 고화질 본편 + v43 energy plus 엔딩
  "portfolio_covers/ad_kombucha.jpg": "portfolio_videos/ad_kombucha.mp4",
  "portfolio_covers/ad_beauty_ugc.jpg": "portfolio_videos/ad_beauty_ugc.mp4",
  "portfolio_covers/beauty.jpg": "portfolio_videos/beauty_full.mp4",  // 뷰티 브랜드 광고(대표작)
  // 01. 제품 숏폼 광고 — 건강기능식품 micro-3D 4컷 재편집(16s)
  // 03. 마을 전경 컷 — 실제 제주 항공 드론(해안마을+리조트+농장) 3컷 재편집(24s, 16:9)
  // 04. 해변 무드 컷 — 실제 제주 웨딩(드론+해변 뒷모습+스튜디오 와이드+꽃/귀걸이 디테일) 재편집(23.5s, 16:9)
  //     초상권 배려: 얼굴 드러나는 컷 제외, privacy-safe·뒷모습·와이드만 사용
  // 05. 웨딩 항공 와이드 — 실제 제주 웨딩 항공 하이라이트(김녕해수욕장) 웹최적화(24s, 16:9)
  // 06. 릴스 포트폴리오 — 실제 VR 콘텐츠 작업물(자매작업실 제주 수공예 모빌 릴, 오디오 포함) 웹최적화(21.6s, 세로)
  "portfolio_content_reels_page.jpg": "portfolio_videos/content_reel_06.mp4",
  // 07. 기업 홍보 컷 — 실제 VR 기업 홍보영상(주식 커뮤니티 핀테크 홍보, 오디오 포함) 웹최적화(31s, 세로)
  "portfolio_covers/video_04.jpg": "portfolio_videos/corporate_reel_07.mp4",
  // 08. 기관 외관 컷 — 실제 제주 항공(기관 건물 establishing + 시설 overview) 2컷 재편집(16s, 16:9)
  // 09. 디테일 모음 — 실제 제주 웨딩 6컷(귀걸이·드레스·해변 뒷모습, 얼굴 블러) + 꽃 디테일 재편집(15s, 16:9)
  // 10. 메시지 영상 컷 — 실제 VR ESG 시네마틱 브랜드필름(바다·지속가능성·해상풍력, 오디오) 트림(28s, 세로)
  // 11. 제품 릴스 컷 — 실제 VR AI 제품영상(zaksim 콤부차, 나레이션 포함) 웹최적화(30s, 세로)
  "portfolio_covers/video_05.jpg": "portfolio_videos/kombucha_reel_11.mp4",
  // 12. 해안 절경 컷 — 실제 제주 해안 항공(김녕해수욕장 드론 하이라이트) 웹최적화(28s, 16:9)
  // 13. NETIA 제품 광고 컷 — 실제 VR 제품 광고(NETIA 코스메틱, 창가 연출) 웹최적화(30s, 16:9)
  "portfolio_covers/video_06.jpg": "portfolio_videos/product_board_reel_13.mp4",
  // 14. 음식 브랜드 영상 — 파스타 전문점 프로모 재편집(22s, 16:9, 오디오)
  // 15. 정원 탑뷰 컷 — 실제 제주 해안 정원 항공(wind1947, 회전 transpose 보정) 웹최적화(28s, 16:9)
  // 16. 시설 동선 컷 — 실제 제주 항공(농장·시설 도로 + 리조트 시설) 다른 구간 2컷(16s, 16:9)
  // 17. 농장 전경 컷 — 외장하드 '농약' 프로젝트 실제 제주 농장 항공(서귀포 비닐하우스 단지, 4K) 웹최적화(23s, 16:9)
  // 18. 해안 들녘 컷 — 외장하드 '농약' 제주 해안·들녘·풍력 4K 항공(해안+농지+마을이 보여 '해안 들녘'에 적합) 웹최적화(13s, 16:9)
  // 19. 건물 외관 컷 — 외장하드 '국립제주교육박물관' 옥외정원 영상(건물·정원 항공, 인물無, VR 자체작) 재편집(18s, 16:9)
  // 20. 시설 진입 항공 컷 — 외장하드 '라온힐조' 협재해변 리조트·해안마을 4K 항공(시설+진입로) 재편집(20s, 16:9)
  // 21. 항공 영상 컷 — 외장하드 '수망' 가을 숲·계곡 드론 2컷(기존 해안/농장과 다른 분위기) 재편집(18s, 16:9)
  // 22. 와이드 항공 컷 — 외장하드 '제주외고' 해안 establishing 4K 항공(긴 백사장 와이드) 재편집(22s, 16:9)
  // 23. 농장 항공 컷 — 외장하드 '제주우유' 목초지·젖소 5K 항공(녹색 목장이 '농장 항공'에 적합) 재편집(20s, 16:9)
  // 24. 시설 항공 컷 — 외장하드 '모비' 태양광 발전시설 석양 항공(대규모 시설이 '시설 항공'에 적합) 재편집(20s, 16:9)
  // 25. 영상 썸네일 컷 — 외장하드 '모비' 제주 신창 풍차해안 석양 시네마틱 항공(시네마틱 컷이라 '영상 썸네일'에 적합) 재편집(20s, 16:9)
  // 26~28. 기업영상 칸 신규 추가(외장하드 납품본) — brand-film 페이지에 더 보여주기
  "portfolio_covers/corp_01.jpg": "portfolio_videos/corp_reel_26.mp4",  // 대한결핵협회 공익 캠페인 홍보영상 완성본(40s, 오디오)
  "portfolio_covers/corp_02.jpg": "portfolio_videos/corp_reel_27.mp4",  // 마크애니 TOSS 시연 영상 완성본(100s, 오디오)
  "portfolio_covers/corp_03.jpg": "portfolio_videos/corp_reel_28.mp4",  // 메이크어위시 프로젝트 완성본(316s, 오디오)
  // 29~31. 기업영상 칸 추가(2차)
  "portfolio_covers/corp_04.jpg": "portfolio_videos/corp_reel_29.mp4",  // 도교육청 청렴릴레이 완성본(54s)
  "portfolio_covers/corp_05.jpg": "portfolio_videos/corp_reel_30.mp4",  // 라이온스클럽 헌장의 밤 스케치 완성본(189s)
  "portfolio_covers/corp_06.jpg": "portfolio_videos/corp_reel_31.mp4",  // 리치디바인 제주 워크샵 완성본(236s)
  // 32~34. 기업영상 칸 추가(3차)
  "portfolio_covers/corp_07.jpg": "portfolio_videos/corp_reel_32.mp4",  // 제주 라이즈 성과포럼 완성본(236s)
  "portfolio_covers/corp_08.jpg": "portfolio_videos/corp_reel_33.mp4",  // 모루농장 브랜드영상 완성본(78s)
  "portfolio_covers/corp_09.jpg": "portfolio_videos/corp_reel_34.mp4",  // 렛츠런파크 레클리스 기념관 완성본(54s)
  // ===== 홈페이지 포폴 칸 → 실제 라이브 사이트 연결(클릭 시 새 탭) =====
  "portfolio_covers/site_regional_v3.jpg": "https://shimmering-sunburst-27f1cd.netlify.app",      // 지역 브랜드형 → 제주 로컬 브랜드 30일 런치
  "portfolio_covers/site_beamish_v3.jpg": "https://beamish-mooncake-b11a21.netlify.app",                // 영상 제작 랜딩 → 품질엘리베이터(당신의 영상을)
  "portfolio_web_shortform_a.png": "https://vr-canada.netlify.app",                          // 숏폼 제작 → VR Shortform Vancouver
  "portfolio_covers/site_aiops_v3.jpg": "https://tourmaline-dodol-4f6381.netlify.app",                  // AI 업무 → 품질엘리베이터(오늘 뭐 올리지)
  "portfolio_covers/web_01.jpg": "https://pawshare-app.vercel.app",                          // 서비스 소개 → pawshare 앱
  "portfolio_covers/site_mimi_v3.jpg": "https://fascinating-duckanoo-906886.netlify.app",         // 브랜드 제품 → From a Single Drop
  "portfolio_covers/site_pawshare_v3.jpg": "https://pawshare-landing.vercel.app",                             // 커뮤니티 → pawshare 랜딩
  // 미사용 실제 사이트 신규 칸(메인컷 대신 스크롤 구간 캡처)
  "portfolio_covers/site_artist_v3.jpg": "https://seo-hyeong-artist.vercel.app",                // 아티스트 음악 페이지
  "portfolio_covers/site_sanjiro.jpg": "https://www.sanjiro.kr",                       // 산지로 — 실서비스 www.sanjiro.kr (iOS·Android 배포)
  "portfolio_covers/site_muscle.jpg": "https://muscle-booster.vercel.app",                    // 머슬부스터 — 운동 기록 앱
  // 보완: 콘텐츠 페이지 칸 → 어울리는 영상 연결
  "portfolio_covers/content_01.jpg": "portfolio_videos/content_reel_37.mp4",                   // 제품 상세 컷 → 토버스 SUMBI Mist 화장품 숏폼(4K세로)
  "portfolio_covers/content_03.jpg": "portfolio_videos/food_promo_reel_35.mp4",                // 음식 브랜드 영상 — 파스타 전문점 홍보영상 완성본(78.4s, 로고 엔딩 포함)
  "portfolio_covers/content_05.jpg": "portfolio_videos/shortform_reel_40.mp4",                  // 식당 홍보영상 — 고깃집 광고 완성본(30.1s, 로고 엔딩 포함)
  "portfolio_covers/ai_03.jpg": "portfolio_videos/ai_reel_47.mp4",                            // AI 제품 광고 영상 — KINETIA(가로 16:9)
  "portfolio_covers/ai_esg_future.jpg": "portfolio_videos/ai_esg_future_reel.mp4",            // AI ESG 메시지 영상(그린로하스 미래세대 ESG, 곶자왈 유리돌고래)
  "portfolio_covers/ai_superwater.jpg": "portfolio_videos/ai_superwater_reel.mp4",            // AI 건강음료 숏폼(작심랩 슈퍼워터 키네틱, 크몽 납품)
  "portfolio_covers/ai_lemondiet.jpg": "portfolio_videos/ai_lemondiet_reel.mp4",              // AI 다이어트 보충제 숏폼(알파레몬샷 NUTRICWELL, 크몽 납품)
  "portfolio_covers/ai_kombucha.jpg": "portfolio_videos/ai_kombucha_reel.mp4?v=2",             // AI 콤부차 제품 릴스(작심랩 콤부차 DTC, 크몽 최종납품본 자막+BGM)
  "portfolio_covers/ai_game_ua.jpg": "portfolio_videos/ai_game_ua_reel.mp4",                  // AI 게임 광고(블라이트워 게임 UA, 히든몬스터)
  "portfolio_covers/ai_nadaum.jpg": "portfolio_videos/ai_nadaum_reel.mp4",                    // AI 브랜드 캠페인(유쓰쇼츠 나다움, LG U+)
  "portfolio_covers/ai_saemangeum.jpg": "portfolio_videos/ai_saemangeum_reel.mp4",            // AI 재생에너지 영상(새만금 공모전)
  "portfolio_covers/ai_esg_wind.jpg": "portfolio_videos/ai_esg_wind_reel.mp4",                // AI ESG 캠페인(그린로하스 ESG 공모전, PlasticToWind)
  "portfolio_covers/content_02.jpg": "portfolio_videos/content_reel_38.mp4",                   // 주방 조리 과정 컷 — 국수 전문점 홍보영상 완성본(78.8s, 로고 엔딩 포함)
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

// 영문 페이지 타일 제목 — 영문 페이지에 한글 제목이 그대로 보이던 문제(2026-10) 수정. 없는 키는 slug 명칭 → 한글 순으로 폴백.
const portfolioTitleI18n = {
  en: {
    "portfolio_covers/ad_barojuyu.jpg": "GS Caltex Baro Fuel — AI ad (self-initiated)",
    "portfolio_covers/site_jayeonin.jpg": "Jayeonin Glamping — booking website (Jeju)",
    "portfolio_covers/site_vrsub_v3.jpg": "VR Video Subscription — a monthly brand video team",
    "portfolio_covers/site_workradar_ko_v3.jpg": "WorkRadar — AI risk check by job",
    "portfolio_covers/site_workradar_en_v3.jpg": "WorkRadar — English edition",
    "portfolio_covers/site_regional_v3.jpg": "Jeju local brand — 30-day launch",
    "portfolio_content_reels_page.jpg": "Reels portfolio",
    "portfolio_automation_examples.jpg": "Inquiry auto-sorting",
    "portfolio_covers/site_beamish_v3.jpg": "Quality Elevator — AI ad analysis",
    "portfolio_web_shortform_a.png": "Video Roastery — Vancouver landing page",
    "portfolio_covers/site_aiops_v3.jpg": "Quality Elevator — AI assistant for small businesses",
    "portfolio_covers/web_01.jpg": "PawShare — shelter volunteer app",
    "portfolio_covers/site_mimi_v3.jpg": "MIMI-GRAPHICS gallery film",
    "portfolio_covers/site_pawshare_v3.jpg": "PawShare — donation landing page",
    "portfolio_covers/site_artist_v3.jpg": "Official artist site — ambient R&B",
    "portfolio_covers/site_sanjiro.jpg": "Sanjiro — order & shipping automation (iOS · Android)",
    "portfolio_covers/site_muscle.jpg": "Muscle Booster — workout log app",
    "portfolio_covers/ad_kombucha.jpg": "Kombucha product ad",
    "portfolio_covers/ad_beauty_ugc.jpg": "Beauty UGC ad",
    "portfolio_video_corporate_main.jpg": "Jeju tangerine brand film",
    "portfolio_video_industrial_brand.jpg": "Tangerine health food film",
    "portfolio_video_esg_brand.jpg": "ESG message film",
    "portfolio_covers/ai_03.jpg": "AI product ad",
    "portfolio_covers/ai_kombucha.jpg": "AI kombucha product reel",
    "portfolio_covers/ai_nadaum.jpg": "AI brand campaign",
    "portfolio_covers/ai_esg_wind.jpg": "AI ESG campaign",
    "portfolio_covers/ai_game_ua.jpg": "AI game ad",
    "portfolio_covers/ai_saemangeum.jpg": "AI renewable energy film",
    "portfolio_covers/ai_esg_future.jpg": "AI ESG message film",
    "portfolio_covers/ai_superwater.jpg": "AI wellness drink short",
    "portfolio_covers/ai_lemondiet.jpg": "AI diet supplement short",
    "portfolio_covers/video_04.jpg": "AI corporate promo",
    "portfolio_covers/corp_01.jpg": "Public health campaign",
    "portfolio_covers/corp_02.jpg": "IT service film",
    "portfolio_covers/corp_03.jpg": "Non-profit event film",
    "portfolio_covers/corp_04.jpg": "Public agency campaign",
    "portfolio_covers/corp_05.jpg": "Event highlight film",
    "portfolio_covers/corp_06.jpg": "Corporate interview film",
    "portfolio_covers/corp_07.jpg": "Forum & networking film",
    "portfolio_covers/corp_08.jpg": "Farm brand film",
    "portfolio_covers/corp_09.jpg": "Memorial hall promo",
    "portfolio_covers/video_05.jpg": "Product reel",
    "portfolio_covers/video_06.jpg": "NETIA product ad",
    "portfolio_covers/jeju_jayeonin.jpg": "Jayeonin Glamping — holiday & live-match campaign (Jeju)",
    "portfolio_covers/jeju_1min.jpg": "1-Minute Jeju — the Jeju guide channel we run",
    "portfolio_covers/gaebyeok_shorts.jpg": "Gaebyeok Seonwon — YouTube Shorts & long-form channel",
    "portfolio_content_product.jpg": "Product card news",
    "portfolio_content_ai_video.jpg": "AI video card",
    "portfolio_content_context.jpg": "Reference board",
    "portfolio_content_request_form.jpg": "Request form screen",
    "portfolio_content_review.jpg": "Review workflow screen",
    "portfolio_covers/content_01.jpg": "Product detail reel",
    "portfolio_covers/content_02.jpg": "Kitchen process reel",
    "portfolio_covers/content_03.jpg": "Food brand film",
    "portfolio_covers/content_04.jpg": "Short-form clips",
    "portfolio_covers/content_05.jpg": "Restaurant promo",
    "portfolio_covers/content_06.jpg": "Operations screen",
    "portfolio_automation_main.jpg": "Post-launch workflow automation",
    "portfolio_automation_task_flow.jpg": "Inquiry form → auto-sort workflow",
    "portfolio_automation_scope.jpg": "Website scope document",
    "portfolio_covers/automation_01.jpg": "n8n chatbot blueprint",
    "portfolio_covers/automation_02.jpg": "Chatbot screen (mobile)",
    "portfolio_covers/automation_03.jpg": "AI reply draft screen",
    "portfolio_covers/automation_04.jpg": "Chatbot conversation UI",
    "route_plan_actual.jpg": "Nine industry landing pages",
    "route_plan_mobile.jpg": "First screen after an ad click",
    "route_plan_mockups.jpg": "Landing page spec",
    "route_plan_system.jpg": "One home + eight ad landings",
    "portfolio_covers/automation_05.jpg": "Chatbot UI set",
    "portfolio_covers/automation_06.jpg": "Workflow audit",
    "portfolio_covers/beauty.jpg": "Beauty brand ad"
  }
};

function portfolioCard(item, staticMode = false) {
  const link = portfolioLink(item);
  const lk = docLangKey();
  const title = lk === "ko" ? item.title : ((portfolioTitleI18n[lk] || {})[item.image] || (reelSlugNames[lk] || {})[item.slug] || item.title);
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
    badge = `<span class="portfolio-open">${{ ko: "사이트 열기", en: "Open site", hans: "打开网站", hant: "開啟網站" }[lk]} ↗</span>`;
  }
  const inner = `
      ${pic(item.image, { alt: lk === "ko" ? "Video Roastery " + item.label + " 제작 사례 — " + item.title : "Video Roastery " + item.label + " — " + title })}
      ${badge}
      <span class="portfolio-meta">
        <small>${item.label}</small>
        <strong>${title}</strong>
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
      <p class="consult-hint">제출하면 바로 접수됩니다. 확인 후 회신드립니다. (전송이 안 되면 ‘내용 복사하기’ 후 <b>${consultEmail}</b> 으로 보내주세요.)</p>
    </form>
  `;
}

// ── 서버리스 문의 전송(Web3Forms) — 제출 시 메일이 자동 발송되고 리드가 서버에 남음 ──
// 액세스 키는 web3forms.com에서 대표 이메일로 무료 발급(무계정, 250건/월). 아래에 붙여넣으면 활성화.
// 비어 있으면 서버리스 비활성 → 기존 mailto 방식 그대로 동작(안전한 기본값).
const INQUIRY_FORM_KEY = "7996b1d4-cae4-4184-af39-b9022fb22f3a";

// 폼에서 발신자 이름·회신 이메일을 추출(견적폼 qn_name/qn_contact 우선, 없으면 첫 입력·이메일형 값)
function extractContact(form) {
  const vals = [...form.elements].map((el) => ((el && el.value) || "").trim()).filter(Boolean);
  const email = vals.find((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
  const name = (form.elements.qn_name && form.elements.qn_name.value.trim()) || vals[0] || "홈페이지 문의";
  return { name, replyto: email || "" };
}

// Web3Forms로 POST. 성공 시 true(→ 인라인 확인), 실패·키미설정 시 false(→ mailto 폴백).
async function submitInquiry({ subject, body, name, replyto }) {
  if (!INQUIRY_FORM_KEY) return false;
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: INQUIRY_FORM_KEY,
        subject,
        from_name: name || "홈페이지 문의",
        replyto: replyto || undefined,
        message: body,
        botcheck: ""
      })
    });
    const data = await res.json().catch(() => ({}));
    return !!(res.ok && data && data.success);
  } catch (e) {
    return false;
  }
}

// 전송 성공 시 폼을 감사 메시지로 대체(SPA 재렌더 전까지 유지)
function showInquirySuccess(form) {
  // 전환 계측 가시화 — 문의 성공 시 가상 페이지뷰(/…/sent/) 1회를 발생시켜, 커스텀 이벤트가 안 보이는
  // 무료 Vercel(Hobby)에서도 '전환 수'를 페이지뷰로 카운트. URL은 즉시 원복 → 새로고침·공유 시 404 방지.
  // (Clarity는 *_sent 커스텀 이벤트로 별도 집계 중 → 이중 보장.) 실패는 조용히 무시.
  try {
    const orig = location.pathname + location.search;
    const base = location.pathname.endsWith("/") ? location.pathname : location.pathname + "/";
    history.pushState({}, "", base + "sent/"); // Vercel insights 스크립트가 pushState를 페이지뷰로 자동 집계
    history.replaceState({}, "", orig);
  } catch (e) { /* 계측 실패가 성공 UI를 막지 않도록 무시 */ }
  const box = document.createElement("div");
  box.className = "consult-sent";
  box.setAttribute("role", "status");
  box.innerHTML =
    "<strong>접수됐습니다 ✓</strong><br>확인 후 회신드릴게요. 평균 1시간 내 응답 · 마음에 들 때만 진행합니다.";
  form.replaceWith(box);
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
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    trackEvent("inquiry_consult", { from: location.pathname });
    const submitBtn = form.querySelector('button[type="submit"]');
    if (INQUIRY_FORM_KEY && submitBtn) { submitBtn.dataset.label = submitBtn.textContent; submitBtn.disabled = true; submitBtn.textContent = "보내는 중…"; }
    const c = extractContact(form);
    const sent = await submitInquiry({ subject, body: buildBody(), name: c.name, replyto: c.replyto });
    if (sent) { trackEvent("inquiry_consult_sent", { from: location.pathname }); showInquirySuccess(form); return; }
    if (submitBtn && submitBtn.dataset.label) { submitBtn.disabled = false; submitBtn.textContent = submitBtn.dataset.label; }
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
      trackEvent("inquiry_consult_quick", { from: location.pathname });
      window.location.href = `mailto:${consultEmail}?subject=${encodeURIComponent("[Video Roastery] 빠른 상담 문의")}&body=${encodeURIComponent(body)}`;
    });
  }
}

// 견적 요청 폼 — 자료·범위 받아 맞춤 견적서 발송 흐름(금액 미노출)
const quoteQuestions = [
  ["qn_name", "이름 / 업체명", "text", "김민지 / 제주 ○○카페", true],
  ["qn_contact", "연락처 (전화 또는 이메일)", "text", "010-0000-0000 또는 email@example.com", true],
  ["qn_service", "필요한 제작", "text", "AI 숏폼 / 드론 / 기업영상 / 홈페이지 등", true],
  ["qn_goal", "이 영상으로 이루고 싶은 것 · 어디에 쓸지", "text", "예: 인스타 릴스로 신메뉴 홍보 / 네이버플레이스 방문 늘리기", true],
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
      <p class="consult-hint">제출하면 바로 접수됩니다. 보유 자료(사진·영상)는 링크로 함께 남겨주세요. 확인 후 맞춤 견적서로 회신드립니다. (전송이 안 되면 ‘내용 복사하기’로 보내주세요.)</p>
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
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    trackEvent("inquiry_quote", { from: location.pathname });
    const submitBtn = form.querySelector('button[type="submit"]');
    if (INQUIRY_FORM_KEY && submitBtn) { submitBtn.dataset.label = submitBtn.textContent; submitBtn.disabled = true; submitBtn.textContent = "보내는 중…"; }
    const c = extractContact(form);
    const sent = await submitInquiry({ subject, body: buildBody(), name: c.name, replyto: c.replyto });
    if (sent) { trackEvent("inquiry_quote_sent", { from: location.pathname }); showInquirySuccess(form); return; }
    if (submitBtn && submitBtn.dataset.label) { submitBtn.disabled = false; submitBtn.textContent = submitBtn.dataset.label; }
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

// ── 다국어(영/중) 견적 문의 폼 — 한국어 quoteForm 과 동일한 상세 8필드(번역) + 서버리스 자동 접수(+mailto 폴백) ──
// 밴쿠버 등 해외 고객이 메일 앱 없이도 문의 남기게. 연락처가 이메일형이면 replyto로 들어가 대표가 바로 답장 가능.
const i18nFormCopy = {
  re:   { submit: "Request my reel plan", sending: "Sending…", sentT: "Received ✓", sentB: "Thanks — your reel plan will be in your inbox by your next morning, Vancouver time.", orEmail: "or email the listing to us ↗", subject: "Reel plan request — Video Roastery", intro: "New listing reel plan request (realtor page).", hint: "The MLS link and a few phone photos are enough. We reply with a one-page plan: hook, shot list, voiceover and caption." },
  en:   { submit: "Send request", sending: "Sending…", sentT: "Received ✓", sentB: "Thanks — we'll get back to you shortly with a tailored quote.", orEmail: "or email us directly ↗", subject: "Project inquiry — Video Roastery", intro: "New project / quote request from the website.", hint: "Send us what you have — attach photos or videos to the email, or share a link. We'll confirm the scope and reply with a tailored quote." },
  hans: { submit: "发送请求", sending: "发送中…", sentT: "已收到 ✓", sentB: "谢谢，我们会尽快回复量身定制的报价。", orEmail: "或直接邮件联系我们 ↗", subject: "项目咨询 — Video Roastery", intro: "来自网站的新项目／报价咨询。", hint: "把您现有的素材发给我们——照片或影片可附在邮件，或用链接分享。我们确认范围后回复量身定制的报价。" },
  hant: { submit: "發送請求", sending: "發送中…", sentT: "已收到 ✓", sentB: "謝謝，我們會盡快回覆量身打造的報價。", orEmail: "或直接郵件聯絡我們 ↗", subject: "專案諮詢 — Video Roastery", intro: "來自網站的新專案／報價諮詢。", hint: "把您現有的素材傳給我們——照片或影片可附在郵件，或用連結分享。我們確認範圍後回覆量身打造的報價。" }
};

// 8필드 [name, label, placeholder, type, required] — 한국어 quoteQuestions 대칭
const i18nQuoteQuestions = {
  re: [
    ["qn_name", "Your name / brokerage", "e.g. Jane Kim, Sutton Group", "text", true],
    ["qn_contact", "Email or phone (KakaoTalk is fine)", "e.g. you@example.com", "text", true],
    ["qn_listing", "Listing link or address", "MLS / realtor.ca link, or the address", "text", true],
    ["qn_details", "Price, beds/baths and what stands out", "e.g. $879K · 2 bed + den · north-facing view", "text", false],
    ["qn_dates", "When can you film, and when do you want to post?", "e.g. film Sat, post Mon", "text", false],
    ["qn_voice", "Voiceover", "my voice / captions only / not sure", "text", false],
    ["qn_note", "Anything else", "style you like, English or Korean, a reel you want to match", "textarea", false]
  ],
  en: [
    ["qn_name", "Name / Company", "e.g. Jane Kim / ABC Cafe", "text", true],
    ["qn_contact", "Contact (email or phone)", "e.g. you@example.com", "text", true],
    ["qn_service", "What you need", "AI short-form / drone / brand film / website…", "text", true],
    ["qn_goal", "Your goal & where you'll use it", "e.g. Instagram Reels for a new menu / more bookings", "text", true],
    ["qn_reference", "Reference links (optional — speeds up the quote)", "YouTube / Reels URLs, styles you like", "text", false],
    ["qn_assets", "What you have", "product photos / existing footage / nothing yet", "text", false],
    ["qn_plan", "Timeline & budget range", "e.g. deliver early Aug / budget ~$1,000, flexible", "text", false],
    ["qn_message", "Message", "e.g. Can you make 4 reels from product photos?", "textarea", true]
  ],
  hans: [
    ["qn_name", "姓名 / 公司", "例：张三 / 济州○○咖啡", "text", true],
    ["qn_contact", "联系方式（邮箱或电话）", "例：you@example.com", "text", true],
    ["qn_service", "需要的制作", "AI短视频 / 无人机 / 品牌短片 / 网站…", "text", true],
    ["qn_goal", "想达成的目标·用在哪里", "例：用于Instagram Reels推广新品 / 增加预订", "text", true],
    ["qn_reference", "参考链接（选填，报价更快）", "YouTube／Reels链接、喜欢的风格", "text", false],
    ["qn_assets", "现有素材", "产品照片 / 已有影片 / 暂无", "text", false],
    ["qn_plan", "期望时间·预算范围", "例：8月初交付 / 预算约1000美元、可议", "text", false],
    ["qn_message", "咨询内容", "例：能否用产品照片制作4条Reels？", "textarea", true]
  ],
  hant: [
    ["qn_name", "姓名 / 公司", "例：張三 / 濟州○○咖啡", "text", true],
    ["qn_contact", "聯絡方式（電子郵件或電話）", "例：you@example.com", "text", true],
    ["qn_service", "需要的製作", "AI短影音 / 空拍 / 品牌短片 / 網站…", "text", true],
    ["qn_goal", "想達成的目標·用在哪裡", "例：用於Instagram Reels推廣新品 / 增加預約", "text", true],
    ["qn_reference", "參考連結（選填，報價更快）", "YouTube／Reels連結、喜歡的風格", "text", false],
    ["qn_assets", "現有素材", "產品照片 / 已有影片 / 暫無", "text", false],
    ["qn_plan", "期望時程·預算範圍", "例：8月初交付 / 預算約1000美元、可議", "text", false],
    ["qn_message", "諮詢內容", "例：能否用產品照片製作4支Reels？", "textarea", true]
  ]
};

function i18nQuoteForm(lang) {
  const c = i18nFormCopy[lang] || i18nFormCopy.en;
  const qs = i18nQuoteQuestions[lang] || i18nQuoteQuestions.en;
  const mail = `mailto:${consultEmail}?subject=${encodeURIComponent(c.subject)}`;
  const fields = qs.map(([name, label, ph, type, req]) => {
    const star = req ? ` <span class="req" aria-hidden="true">*</span>` : "";
    const control = type === "textarea"
      ? `<textarea id="${name}" class="en-form-in" name="${name}" rows="3" placeholder="${ph}"${req ? " required" : ""}></textarea>`
      : `<input id="${name}" class="en-form-in" type="text" name="${name}" placeholder="${ph}"${req ? " required" : ""} />`;
    return `<div class="en-form-field"><label for="${name}">${label}${star}</label>${control}</div>`;
  }).join("");
  return `
    <form class="en-form en-form--quote" id="i18n-quote-form" data-lang="${lang}" aria-label="${c.subject}">
      ${fields}
      <p class="en-form-hint">${c.hint}</p>
      <button type="submit" class="en-cta-btn en-form-btn">${c.submit} ↗</button>
      <a class="en-form-alt" href="${mail}">${c.orEmail}</a>
    </form>
  `;
}

function setupI18nForm() {
  const form = document.querySelector("#i18n-quote-form");
  if (!form) return;
  const lang = form.dataset.lang || "en";
  const c = i18nFormCopy[lang] || i18nFormCopy.en;
  const qs = i18nQuoteQuestions[lang] || i18nQuoteQuestions.en;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const val = (n) => ((form.elements[n] && form.elements[n].value) || "").trim();
  const buildBody = () => {
    const lines = [c.intro, ""];
    qs.forEach(([name, label]) => lines.push(`${label.replace(/\s*\(.*\)\s*$/, "")}: ${val(name) || "-"}`));
    lines.push("", `Page: ${location.origin}${location.pathname}`);
    return lines.join("\n");
  };
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    trackEvent("inquiry_i18n", { from: location.pathname });
    const btn = form.querySelector('button[type="submit"]');
    if (INQUIRY_FORM_KEY && btn) { btn.dataset.label = btn.textContent; btn.disabled = true; btn.textContent = c.sending; }
    const cv = val("qn_contact");
    const sent = await submitInquiry({ subject: c.subject, body: buildBody(), name: val("qn_name") || "Website inquiry", replyto: emailRe.test(cv) ? cv : "" });
    if (sent) {
      trackEvent("inquiry_i18n_sent", { from: location.pathname });
      const box = document.createElement("div");
      box.className = "consult-sent en-form-sent";
      box.setAttribute("role", "status");
      box.innerHTML = `<strong>${c.sentT}</strong><br>${c.sentB}`;
      form.replaceWith(box);
      return;
    }
    if (btn && btn.dataset.label) { btn.disabled = false; btn.textContent = btn.dataset.label; }
    const alt = form.querySelector(".en-form-alt");
    window.location.href = alt ? alt.href : `mailto:${consultEmail}`;
  });
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
  content: [["꾸준한 콘텐츠 운영도 도와주나요?", "단건 제작뿐 아니라 카드뉴스·릴스 정기 운영 구성도 상담 가능합니다."]]
};

function detailPage(route) {
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
      ${koBar()}
      <main id="main">
        <section class="en-detail-hero">
          <p class="en-eyebrow">${detail.kicker || route.nav}</p>
          <h1 class="en-detail-h1">${route.title}</h1>
          <p class="en-detail-lead">${route.lead}</p>
          <div class="en-detail-actions">
            <a class="en-cta-btn" href="#contact">${route.cta} ↗</a>
            <a class="en-detail-link" href="#work">작업 사례 보기</a>
          </div>
        </section>

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

        <section class="section tight en-form-sec" id="contact">
          <div class="cta-band has-form">
            <h2>${route.nav} 문의</h2>
            <p class="cta-note">가진 자료만 주세요. 보유 자료와 원하는 결과물만 보내주시면 제작 범위·일정을 정직하게 회신드립니다.</p>
            <p class="contact-trust">평균 1시간 내 응답 · 보유 자료만 있어도 가능</p>
            ${quoteForm()}
          </div>
        </section>
      </main>
      ${koFooter()}
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
  // 현재 URL 파라미터 우선, 없으면 첫 착지 때 저장해 둔 광고 파라미터(다른 페이지로 이동한 뒤 문의해도 유입 키워드가 남도록)
  const source = new URLSearchParams(window.location.search);
  const stored = storedAdParams();
  return AD_PARAM_KEYS
    .map((key) => [key, source.get(key) || stored[key]])
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

// FAQPage 구조화 데이터 동기화 — 화면에 실제 FAQ가 렌더되지만 정적 셸에 FAQPage가 없는
// 페이지(업종 랜딩 10 · 영/중 서비스 상세 18)에 한해 런타임 주입해 FAQ 리치결과를 확보.
// 정적 셸에 이미 FAQPage가 있으면(한국어 서비스·리메모리) 건너뛰어 @id 중복·충돌을 방지.
function syncFaqJsonLd(items, pageUrl) {
  const prev = document.querySelector('script[type="application/ld+json"][data-faq-dyn]');
  if (prev) prev.remove();
  const staticLd = document.querySelectorAll('script[type="application/ld+json"]:not([data-faq-dyn])');
  for (const s of staticLd) { if (s.textContent && s.textContent.indexOf('"FAQPage"') !== -1) return; }
  if (!items || !items.length) return;
  const strip = (t) => String(t).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const node = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": pageUrl + "#faq",
    "mainEntity": items.map(([q, a]) => ({
      "@type": "Question",
      "name": strip(q),
      "acceptedAnswer": { "@type": "Answer", "text": strip(a) }
    }))
  };
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.setAttribute("data-faq-dyn", "");
  el.textContent = JSON.stringify(node);
  document.head.appendChild(el);
}

function render() {
  const slug = currentSlug();
  const route = routeBySlug[slug];
  const i18nEst = i18nEstimateRoutes[slug]; // 영/중 견적 페이지("en/estimate" 등) 언어 키
  const i18nDet = i18nDetailRoutes[slug]; // 영/중 서비스 상세("en/brand-film" 등) {lang,svc}
  const i18nDetC = i18nDet ? (i18nDetailContent[i18nDet.svc][i18nDet.lang] || i18nDetailContent[i18nDet.svc].en) : null;
  const enLand = enLandingPages[slug]; // 영문 해외 인텐트 SEO 랜딩("en/jeju-video-production" 등)
  const adLand = adLandingPages[slug]; // 검색광고 전용 랜딩("ai-video" 등)
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
    content: "비디오 로스터리 | 상세페이지·카드뉴스·릴스 제작",
    consulting: "비디오 로스터리 | AI 활용 컨설팅·자동화",
    about: "비디오 로스터리 회사소개 | 제주 영상·홈페이지 제작 스튜디오",
    en: "Video Roastery — Video, Film & Web Studio in Jeju, Korea",
    zh: "Video Roastery — 韩国济州岛影像 · 短片 · 网站制作工作室",
    "zh-hant": "Video Roastery — 韓國濟州島影像 · 短片 · 網站製作工作室",
    rememory: "리메모리 | 옛날 결혼사진 복원·부모님 리마인드 웨딩 앨범",
    free: "무료 홍보영상 샘플 컷 3장 — 제주 소상공인 | 비디오 로스터리",
    work: "비디오 로스터리 | 작업 사례 — 영상·홈페이지·SNS 운영",
    management: "비디오 로스터리 | 제주 가게 월 관리·SNS 운영·릴스 제작",
    video: "비디오 로스터리 | 기업 홍보영상·AI 영상·드론 촬영",
  };
  const pageTitle = adLand ? adLand.title : enLand ? enLand.title : i18nDet ? `${i18nDetC.title} — Video Roastery` : i18nEst ? i18nEstimateCopy[i18nEst].title : (industryPages[slug] && industryPages[slug].title) || seoTitles[slug] || (route ? `${route.nav} | Video Roastery` : seoTitles.main);
  const pageDesc = adLand ? adLand.desc : enLand ? enLand.desc : i18nDet ? i18nDetC.lead : i18nEst ? i18nEstimateCopy[i18nEst].desc : industryPages[slug] ? industryPages[slug].desc : slug === "estimate" ? "고정 가격 대신 맞춤 견적서로 안내합니다. 보유 자료와 원하는 결과물만 보내주시면 제작 범위를 확인해 견적서를 회신합니다."
    : slug === "about" ? "비디오 로스터리(Video Roastery)는 방송국 PD 12년 경력의 대표가 운영하는 제주 영상·홈페이지 제작 스튜디오입니다. 공공기관·기업·비영리 단체에 140건 넘게 납품했고, 기획부터 촬영·편집까지 직접 합니다."
    : slug === "en" ? "Video studio in Jeju, Korea — listing reel plans and edits for Vancouver realtors, plus brand films, drone and websites shot in Korea."
    : slug === "zh" ? "位于韩国济州岛的制作工作室：品牌短片、无人机航拍、AI 短视频广告与以转化为核心的网站设计。济州现场，全球远程。"
    : slug === "zh-hant" ? "位於韓國濟州島的製作工作室：品牌短片、無人機空拍、AI 短影音廣告與以轉換為核心的網站設計。濟州現場，全球遠端。"
    : slug === "rememory" ? "촬영 없이 옛 사진만 보내면, 빛바랜 결혼사진을 사람이 직접 복원합니다. 흑백 컬러 복원부터 금혼식·칠순 리마인드 웨딩 앨범·액자 제작까지. 부모님께 드리는 가장 따뜻한 선물, 리메모리."
    : slug === "free" ? "제주 사장님, 촬영 없이 사진만 보내주시면, 무료로 샘플 컷 3장을 먼저 만들어 드립니다. 마음에 들면 그 컷 그대로 릴스·영상으로 제작. 이번 달 선착순 5팀."
    : slug === "work" ? "비디오 로스터리가 실제로 납품하고 운영 중인 작업 — 제주 가게 월 관리, 기업·기관 홍보영상, AI 영상, 홈페이지·앱. 누르면 영상이 재생되거나 사이트가 열립니다."
    : slug === "management" ? "제주 가게 월 관리 — 한 달에 한 번 찾아가 촬영하고, 릴스·카드뉴스를 만들어 인스타그램·당근에 한 달 동안 올립니다. 예약 홈페이지·샤오홍슈까지."
    : slug === "video" ? "기업·기관 홍보영상, 사진으로 만드는 AI 영상, 드론 촬영. 공공기관·기업·비영리 단체에 140건 넘게 납품한 제주 영상 제작 스튜디오."
    : (route ? (route.metaDesc || route.lead) : "제주 촬영부터 전국 온라인 제작까지 — 홈페이지·영상·드론·AI 숏폼·콘텐츠를 실제 작업물 기준으로 상담하고, 보고 바로 문의로 이어지게 만듭니다.");
  const pageUrl = adLand ? `https://videoroastery.com/${slug}/` : enLand ? `https://videoroastery.com/${slug}/` : i18nDet ? `https://videoroastery.com/${slug}/` : i18nEst ? i18nEstimateCopy[i18nEst].url : industryPages[slug] ? `https://videoroastery.com/${slug}/` : slug === "estimate" ? "https://videoroastery.com/estimate/" : slug === "about" ? "https://videoroastery.com/about/" : slug === "en" ? "https://videoroastery.com/en/" : slug === "zh" ? "https://videoroastery.com/zh/" : slug === "zh-hant" ? "https://videoroastery.com/zh-hant/" : slug === "rememory" ? "https://videoroastery.com/rememory/" : slug === "free" ? "https://videoroastery.com/free/" : ["work", "management", "video"].includes(slug) ? `https://videoroastery.com/${slug}/` : (route ? `https://videoroastery.com/${route.slug}/` : "https://videoroastery.com/");
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
  // 이 페이지가 렌더하는 FAQ와 동일한 내용으로 FAQPage 스키마 주입(정적 FAQPage 없는 페이지 한정)
  const pageFaq = adLand ? adLand.faq
    : enLand ? (enLand.faqOnly ? [] : i18nCommonFaq.en).concat(enLand.faq || [])
    : i18nDet ? i18nCommonFaq[i18nDet.lang].concat((i18nDetC && i18nDetC.faq) || [])
    : industryPages[slug] ? (industryPages[slug].faqItems || industryFaqItems)
    : slug === "management" ? managementFaq
    : slug === "video" ? videoFaq
    : null;
  syncFaqJsonLd(pageFaq, pageUrl);
  document.querySelector("#app").innerHTML = adLand ? adLandingPage(slug) : enLand ? (slug === "en/real-estate-video-editing" ? realEstatePage() : enLandingPage(slug)) : i18nDet ? i18nDetailPage(i18nDet.lang, i18nDet.svc) : i18nEst ? i18nEstimatePage(i18nEst) : industryPages[slug] ? industryPage(slug) : slug === "estimate" ? estimatePage() : slug === "about" ? aboutPage() : slug === "en" ? enPage() : slug === "zh" ? zhPage("hans") : slug === "zh-hant" ? zhPage("hant") : slug === "rememory" ? rememoryPage() : slug === "free" ? freePage() : slug === "work" ? workPage() : slug === "management" ? managementPage() : slug === "video" ? videoPage() : (route ? detailPage(route) : mainPage());
  setupStickyCta();
  setupPortfolioLightbox();
  setupReelGallery();
  setupConsultForm();
  setupQuoteForm();
  if (adLand && adLand.prefillService) { const f = document.querySelector('#quote-form [name="qn_service"]'); if (f && !f.value) f.value = adLand.prefillService; }
  setupI18nForm();
  setupScrollReveal();
  setupHeroMotion();
  setupHeroWall();
  setupImageFade();
  adTrackPageview();
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
  // 모달(작업 갤러리·영상 라이트박스)이 열리면 히어로월 재생을 멈춘다.
  // 히어로월은 모달에 '가려질' 뿐 DOM에서 사라지지 않아 IntersectionObserver가 계속 교차로 보고,
  // 그대로 두면 라이트박스 영상과 대역폭·디코더를 나눠 써 재생이 중간에 끊긴다.
  let suspended = false;
  const fill = () => { if (suspended) return; visible.forEach((fig) => { if (active.size < cap) start(fig); }); };
  window.__vrHeroWall = {
    pause() { suspended = true; Array.prototype.slice.call(active).forEach(stop); },
    resume() { suspended = false; fill(); }
  };
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
// 모달이 열려 있는 동안 히어로월 영상을 멈춰 라이트박스가 대역폭·디코더를 독점하게 한다.
function vrSyncHeroWall() {
  const hw = window.__vrHeroWall;
  if (!hw) return;
  const g = document.querySelector("#reel-gallery");
  const lb = document.querySelector("#vr-lightbox");
  const open = (g && g.classList.contains("is-open")) || (lb && lb.classList.contains("is-open"));
  if (open) hw.pause(); else hw.resume();
}

function reelGalleryVideoItems() {
  return portfolioWallItems
    .map((item) => ({ item, link: portfolioLink(item) }))
    .filter((x) => x.link && x.link.type === "video");
}

const reelGalleryCopy = {
  ko: { kicker: "Video Roastery® · 쇼릴", title: "우리가 만든 것", sub: "실제 납품한 브랜드필름·기업영상·AI 숏폼. 눌러서 바로 재생해 보세요.", close: "닫기", dialogLabel: "작업 갤러리" },
  en: { kicker: "Video Roastery® · Showreel", title: "Selected Work", sub: "Delivered brand films, corporate videos and AI short-form. Tap any clip to play.", close: "Close", dialogLabel: "Work gallery" },
  hans: { kicker: "Video Roastery® · 展示卷", title: "精选作品", sub: "已交付的品牌短片、企业影片与 AI 短视频。点击任意作品即可播放。", close: "关闭", dialogLabel: "作品集" },
  hant: { kicker: "Video Roastery® · 展示卷", title: "精選作品", sub: "已交付的品牌短片、企業影片與 AI 短影音。點擊任一作品即可播放。", close: "關閉", dialogLabel: "作品集" }
};
// 비한국어 갤러리 타일 제목 — slug 기준 언어별 명칭(brand-film·ai-shortform 정확 구분). 라이트박스 캡션에도 사용.
const reelSlugNames = {
  en: { homepage: "Website", drone: "Drone & Aerial", content: "Content", "inquiry-agent": "Automation", "brand-film": "Brand Film", "ai-shortform": "AI Short-form" },
  hans: { homepage: "网站", drone: "无人机航拍", content: "内容", "inquiry-agent": "自动化", "brand-film": "品牌短片", "ai-shortform": "AI 短视频" },
  hant: { homepage: "網站", drone: "無人機空拍", content: "內容", "inquiry-agent": "自動化", "brand-film": "品牌短片", "ai-shortform": "AI 短影音" }
};
// 타일 소문자 라벨칩 현지화(en은 영문 태그 유지, 중문만 번역).
const reelLabelNames = {
  hans: { WEB: "网站", DRONE: "航拍", CONTENT: "内容", SYSTEM: "自动化", BRAND: "品牌", "AI FILM": "AI 短片", "AI VISUAL": "AI 视觉", WEDDING: "婚礼", AD: "广告" },
  hant: { WEB: "網站", DRONE: "空拍", CONTENT: "內容", SYSTEM: "自動化", BRAND: "品牌", "AI FILM": "AI 短片", "AI VISUAL": "AI 視覺", WEDDING: "婚禮", AD: "廣告" }
};

// 문서 언어 → 카피 키(ko/en/hans/hant). 라이트박스는 전역 공유라 페이지 lang을 출처로 삼는다.
function docLangKey() {
  const l = (document.documentElement.lang || "ko").toLowerCase();
  if (l.indexOf("zh") === 0) return l.indexOf("hant") >= 0 ? "hant" : "hans";
  if (l.indexOf("en") === 0) return "en";
  return "ko";
}
const lightboxCopy = {
  ko: { aria: "영상 미리보기", close: "닫기", fallback: "영상이 바로 안 열리면 새 창에서 보기 ↗" },
  en: { aria: "Video preview", close: "Close", fallback: "If the video doesn't play, open in a new tab ↗" },
  hans: { aria: "视频预览", close: "关闭", fallback: "如果视频无法播放，请在新窗口打开 ↗" },
  hant: { aria: "影片預覽", close: "關閉", fallback: "如果影片無法播放，請在新視窗開啟 ↗" }
};

function reelGalleryMarkup(lang) {
  const c = reelGalleryCopy[lang] || reelGalleryCopy.ko;
  const ko = lang === "ko";
  const slugMap = reelSlugNames[lang];
  const labelMap = reelLabelNames[lang];
  const tiles = reelGalleryVideoItems().map(({ item, link }) => {
    const title = ko ? item.title : (slugMap && slugMap[item.slug]) || item.label;
    const label = ko ? item.label : (labelMap && labelMap[item.label]) || item.label;
    return `
      <button class="reel-tile" type="button" data-video="${link.src}" aria-haspopup="dialog">
        <img src="${asset(item.image)}" alt="${title}" loading="lazy" decoding="async" />
        <span class="portfolio-play" aria-hidden="true"></span>
        <span class="portfolio-meta"><small>${label}</small><strong>${title}</strong></span>
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
      vrSyncHeroWall();
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
      box.setAttribute("aria-label", (reelGalleryCopy[lang] || reelGalleryCopy.ko).dialogLabel);
      box.innerHTML = reelGalleryMarkup(lang);
      box.__trigger = t;
      box.classList.add("is-open");
      document.documentElement.style.overflow = "hidden";
      vrSyncHeroWall();
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
    const L = lightboxCopy[docLangKey()] || lightboxCopy.ko;
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", L.aria);
    box.innerHTML = `
      <button class="vr-lightbox-close" type="button" aria-label="${L.close}">✕</button>
      <figure class="vr-lightbox-stage">
        <video controls playsinline preload="auto"></video>
        <span class="vr-lightbox-spinner" aria-hidden="true"></span>
        <figcaption class="vr-lightbox-caption"><span class="vr-cap-label"></span><strong class="vr-cap-title"></strong></figcaption>
        <a class="vr-lightbox-fallback" target="_blank" rel="noopener" hidden>${L.fallback}</a>
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
      vrSyncHeroWall();
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
      vrSyncHeroWall();
      v.src = video;
      // 모달 열리면 닫기 버튼으로 포커스 이동
      box.querySelector(".vr-lightbox-close").focus();
      v.muted = false;
      // 소리 있는 영상은 브라우저가 '무음 아닌 자동재생'을 막아 첫 프레임에 멈출 수 있음(=사진처럼 보임).
      // 재생이 막히면 음소거로라도 재생해 항상 '움직이게' 하고, 노출된 컨트롤로 소리를 켤 수 있게 한다.
      const p = v.play();
      if (p && p.catch) p.catch(() => {
        v.muted = true;
        const p2 = v.play();
        if (p2 && p2.catch) p2.catch(() => {});
      });
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

// ── 해외 방문자 언어 자동 안내 ──
// 1차 신호 = 브라우저 언어(언어 선택엔 국가 IP보다 정확 — 교포·여행자 케이스). 2차 신호 = 접속 국가
// (Vercel 1st-party 엣지 함수 /api/geo). 메인(/)에 처음 온 비한국어 방문자를 각 언어 홈으로 1회 자동
// 이동. 강제 아님: 한 번만, 수동 선택 우선, 검색 크롤러 제외(각 URL 그대로 색인), ?nolang 이스케이프.
// 한국어 브라우저는 IP와 무관하게 유지(미국 거주 교포가 튕기지 않도록). 실패 시 조용히 미동작.
function pickAutoLang(primary) {
  primary = String(primary || "").toLowerCase();
  if (primary.indexOf("ko") === 0) return null; // 한국어 → 그대로
  if (primary.indexOf("zh") === 0) return /(hant|tw|hk|mo)/.test(primary) ? "zh-hant" : "zh";
  if (primary.indexOf("en") === 0) return "en";
  if (!primary) return null; // 언어 미상 → IP 보조판정으로 넘김
  return "en"; // 그 외 비한국어 → 국제 기본값 영어
}

// 접속 국가(ISO2 대문자)로 언어 보정: 중화권 간/번체 판별 + 언어 미상 시 폴백
function langByCountry(country) {
  country = String(country || "").toUpperCase();
  if (/^(TW|HK|MO)$/.test(country)) return "zh-hant";
  if (/^(CN|SG)$/.test(country)) return "zh";
  if (/^(KR)$/.test(country)) return null; // 한국 접속인데 언어정보 없음 → 한국어 유지
  if (country) return "en"; // 그 외 국가 → 영어(국제 기본)
  return null;
}

async function fetchCountry() {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 600); // 지연 상한 — 넘으면 브라우저 언어만으로 진행
    const res = await fetch("/api/geo/", { signal: ctrl.signal, cache: "no-store" }); // 트레일링 슬래시 = 리다이렉트 홉 회피
    clearTimeout(timer);
    if (!res.ok) return "";
    const data = await res.json();
    return (data && data.country) || "";
  } catch (e) { return ""; }
}

async function maybeAutoLanguageRedirect() {
  try {
    if (currentSlug() !== "main") return false; // 메인(/)에서만 — 딥링크된 한국어 랜딩은 맥락 보존
    if (new URLSearchParams(window.location.search).has("nolang")) return false;
    if (localStorage.getItem("vr_lang_choice")) return false; // 이미 자동이동/수동선택함
    const ua = (navigator.userAgent || "").toLowerCase();
    if (/bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|google|yandex|baiduspider|duckduck/.test(ua)) return false;
    const langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    const primary = String(langs[0] || "").toLowerCase();
    if (primary.indexOf("ko") === 0) return false; // 한국어 브라우저 → 유지(IP 무시)
    let target = pickAutoLang(primary);
    // IP(국가)를 보조 신호로: ⑴브라우저가 지역 없는 "zh"로만 올 때 간/번체 보정 ⑵언어 미상일 때 폴백
    const genericZh = primary.indexOf("zh") === 0 && !/(hant|hans|tw|hk|mo|cn|sg)/.test(primary);
    if (!primary || genericZh) {
      const byCountry = langByCountry(await fetchCountry());
      if (genericZh) {
        // 중국어 브라우저는 계속 중국어 — 국가는 간/번체 판별에만 사용(영어로 뒤집지 않음), 불명이면 간체
        target = byCountry === "zh" || byCountry === "zh-hant" ? byCountry : "zh";
      } else {
        target = byCountry; // 언어 미상: 국가로만 판정(불명이면 null=유지)
      }
    }
    if (!target) return false;
    localStorage.setItem("vr_lang_choice", "auto:" + target);
    window.location.replace(routeHref(target));
    return true;
  } catch (e) { return false; }
}

// 수동 언어 선택은 항상 우선 — 한 번이라도 언어 스위처를 누르면 이후 자동 이동을 막음(왕복 방지)
function setupLangChoiceMemory() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest(".lang-switch a");
    if (a) { try { localStorage.setItem("vr_lang_choice", "manual"); } catch (_) { /* noop */ } }
  }, true);
}

maybeAutoLanguageRedirect().then((redirecting) => {
  if (redirecting) return; // 리다이렉트 중이면 렌더 생략(깜빡임 최소화)
  render();
  setupBackToTop();
  setupConversionTracking();
  setupLangChoiceMemory();
});
