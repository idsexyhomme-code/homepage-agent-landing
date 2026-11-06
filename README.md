# Video Roastery Landing Hub

`videoroastery.com`과 GitHub Pages 광고 링크에서 함께 사용할 수 있는 제작 상담 허브입니다.

브랜드 슬로건: `문의가 들어오는 가게로 세팅합니다.`

브랜드 약속: 고객이 이해하고 문의하게 만드는 디지털 제작소.

- 전체 메인: `/`
- 홈페이지 제작 상담: `/homepage/`
- 드론 항공촬영 상담: `/drone/`
- AI 숏폼 제작 상담: `/ai-shortform/`
- 기업 홍보영상 상담: `/brand-film/`
- 문의 자동화 상담: `/inquiry-agent/`
- 웨딩스냅·영상 상담: `/wedding/`
- 카드뉴스·콘텐츠 상담: `/content/`
- AI 활용 컨설팅 상담: `/consulting/`
- 랜딩 구조 점검: `/landing-plan/` (`noindex`, 광고 세팅 확인용)

각 서비스 페이지는 광고 클릭 후 바로 이해될 수 있도록 영상 배경, 포트폴리오 6컷, 상담 흐름, FAQ, 메일/상담 폼 CTA로 구성합니다.

## 검색 노출용 정적 프리렌더 (2026-11-07)

모든 페이지 본문을 `app.js`가 그리기 때문에 JS를 안 돌리는 검색로봇(네이버 Yeti 등)에게는 제목만 보였다(네이버·구글 색인 0건).
`scripts/prerender.py`가 각 페이지를 헤드리스 크로미움으로 열어 `app.js`가 `#app`에 처음 넣는 마크업을 `index.html`에 박는다. 브라우저에서는 `app.js`가 같은 마크업으로 덮어쓰므로 화면은 그대로다.

- `app.js`나 페이지 문구를 고친 뒤에는 **배포 전에 반드시** `python3 scripts/prerender.py` (또는 `npm run site:build` = generate + prerender (⚠️ 이름을 `build`로 하면 Vercel이 클라우드에서 돌리다 실패)).
- `generate_route_html.py`를 돌리면 프리렌더가 지워진다 → 이어서 prerender.
- `scripts/predeploy_check.sh` 7번 항목이 프리렌더 누락을 잡는다.
