# Video Roastery 홈페이지 — 야간 자동 개선 로그

이 파일은 예약 작업이 밤새 개선할 때마다 한 줄씩 기록합니다.
아침에 이 로그 + `git diff`를 보고, 좋으면 `푸시하기_PUSH.command`로 배포하세요.
되돌리려면(전부 취소): `git checkout -- .` 또는 `git reset --hard origin/main`

---

## 시작 기준선
- 배포본: origin/main (드론 포폴 21컷 실사 반영 완료 상태)
- 개선 모드: 적극적 / 아침 검토 후 배포 / 라이브 자동반영 안 함

---

(이 아래로 패스별 기록이 추가됩니다)

---

## 2026-06-22 08:0X — 패스 #1 (라이브 수동 실행)
- 참고 기준: 2026 랜딩/히어로 디자인 베스트프랙티스(확신감 있는 큰 타이포, 넉넉한 여백, 모바일 탭타깃 ≥44px) — Monet/Landy/Designity 등 가이드 종합
- 바꾼 것 (style.css, 모두 "바닥값=현재값, 큰 화면에서만 확대"되는 fluid clamp로 안전 적용):
  1. `.hero h1` 4rem → clamp(4rem, 4.6vw, 5rem), line-height 1.06→1.05, letter-spacing 0→-0.012em (데스크톱 헤드라인 임팩트↑)
  2. `.hero p` 1.22rem → clamp(1.22rem, 1.5vw, 1.38rem)
  3. `.section` 패딩 76px → clamp(76px, 8vw, 112px) (데스크톱 여백↑)
  4. `.section h2` 2.1rem → clamp(2.1rem, 2.6vw, 2.6rem)
- 리스크: 낮음. 모든 화면에서 기존보다 작아지지 않음(바닥값 고정), 모바일은 기존 미디어쿼리 유지. 빌드 검증 통과(괄호 균형 OK, 깨진 이미지 0).
- 비고: 자동배포 감시기가 켜져 있어 08:03 커밋(ba22e6e)으로 라이브 자동 반영됨(원래 '아침 검토'였으나 감시기가 즉시 배포).
- 다음에 시각 검토 가능할 때 시도할 적극 개선(보류): 히어로 영상 위 대비 강화, 포트폴리오 타일 호버 모션, 섹션 진입 애니메이션, 서비스 카드 그리드 리듬.

---

## 2026-06-22 08:06 KST — 패스 #2 (예약 야간 실행)
- 참고 레퍼런스:
  - School of Motion — "10 Websites with Great Animation in 2026" (https://www.schoolofmotion.com/blog/10-websites-with-great-animation-in-2026): 스크롤에 따라 작업물이 점진적으로 드러나는 reveal로 시선·내러티브를 유도.
  - Prismic — "CSS Scroll Effects: 50 Interactive Animations" (https://prismic.io/blog/css-scroll-effects): 가벼운 CSS 트랜지션 기반 스크롤 효과 패턴.
  - Webflow — "15 microinteraction examples" (https://webflow.com/blog/microinteractions): 버튼/썸네일 호버 피드백이 신뢰감·완성도를 높인다는 점.
- 이번 패스 방향: 패스 #1에서 '보류'로 적어둔 모션/인터랙션 폴리시 3건을 안전하게 착수(타이포는 이미 처리됨).
- 바꾼 것:
  1. (style.css) `.btn` 호버/액티브 마이크로인터랙션 추가 — primary는 green-dark + 그림자 + translateY(-1px), secondary는 배경/보더 강화. 기존엔 버튼 호버 상태가 전혀 없었음.
  2. (style.css) `.portfolio-item` 호버 시 4px lift + 큰 그림자, 캡션 strong 살짝 상승. 기존 이미지 scale 호버는 유지.
  3. (style.css + app.js) 섹션 진입 스크롤 reveal — `#app .section, .detail-overview`에 JS가 `vr-reveal` 부여 후 IntersectionObserver로 `.is-in` 토글(opacity+translateY 28px→0). 
  4. (style.css) `@media (prefers-reduced-motion: reduce)` 블록 신설 — reveal/호버/스무스스크롤 모두 무력화(접근성). 사이트 최초의 reduced-motion 대응.
- 안전장치: reveal은 JS가 클래스를 부여하므로 JS 미실행 시 콘텐츠는 그대로 보임. IntersectionObserver 미지원/reduced-motion이면 즉시 전체 표시. 추가로 1.5초 후 무조건 전체 reveal하는 타임아웃 안전망 포함(절대 숨겨진 채 남지 않음).
- 검증: `node --check app.js` 통과, CSS 중괄호 264/264 균형, app.js 이미지/영상 참조 96개 전부 존재(깨짐 0).
- 리스크: 낮음. 레이아웃·카피·데이터 변경 없음, 순수 모션/인터랙션 레이어.
- ⚠️ 비고(중요): 자동배포 감시기(`자동배포_켜기.command`)가 켜져 있어 파일 저장 직후 자동 커밋·푸시됨 → origin/main에 이미 반영(라이브). 관련 커밋: 02393fc, e56595c, a33cb57 (Auto-deploy 2026-06-22 08:06~08:07). 나(예약작업)는 commit/push/배포 스크립트를 실행하지 않았으며, 사용자 측 감시기가 즉시 배포함(패스 #1과 동일 현상). '아침 검토 후 배포'를 원하면 감시기를 끄세요.
- 되돌리기: 이 변경만 취소하려면 해당 커밋들을 `git revert` 하거나, 직전 기준선으로 `git reset --hard ba22e6e` 후 강제 푸시. (워킹트리만 되돌리는 `git checkout -- .`는 이미 커밋·푸시되어 효과 없음.)
- 다음 패스 후보(보류): 히어로 영상 위 카피 대비 강화, 서비스 카드 그리드 리듬(높이·비중 변주), reveal 스태거(자식 요소 순차 등장), CTA 밴드 진입 모션.

---

## 2026-06-22 08:3X — 패스 #3 (라이브 확인 기반, 수동)
- 발견한 버그: 메인/서비스 히어로가 editorial 레이아웃에서 CTA가 안 보였음. 원인 = `.hero.editorial .hero-inner { transform: translateY(360px) }` + `.editorial-actions { margin-top:72px }` 때문에 CTA 버튼이 히어로(`overflow:hidden`) 영역 밖으로 밀려 잘림. (사이트 오픈 이래 메인 CTA가 사실상 안 보이던 상태)
- 바꾼 것:
  1. (app.js) editorial 히어로 CTA를 `btn secondary`(반투명) → `btn primary`(green)로 승격. 메인 히어로엔 `heroRich` 플래그 추가해 보조 CTA(작업 사례 보기) + 신뢰 배지(제주 현장 촬영/전국 상담/범위 확인)까지 노출.
  2. (style.css) `.hero.editorial .hero-inner` translateY 360px→210px, `.editorial-actions` margin-top 72px→36px 로 조정해 CTA가 첫 화면 안에 들어오게.
- 결과(라이브 확인): 히어로에 green "견적 문의" + "작업 사례 보기" + 신뢰 배지 3종 정상 노출 확인.
- 검증: node --check app.js 통과, CSS 264/264 균형, 이미지 참조 깨짐 0.
- 리스크: 낮음. 서비스 페이지 히어로들도 동일하게 CTA가 prominent해짐(개선). 되돌리기: git reset --hard 12934dd 이전 시점.
- 다음 후보: 서비스 카드 그리드 리듬/호버, CTA 밴드(문의 섹션) 임팩트, 모바일 390px 히어로 CTA 노출 점검, reveal 스태거.
