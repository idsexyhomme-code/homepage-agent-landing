# 기술 백로그 — 감사에서 나온 SAFE 개선 (2026-07-07)

전체 라이브 QA + 코드/SEO 감사 결과, **사이트는 전반적으로 매우 건강**합니다(전 페이지 렌더 정상, 콘솔 에러 0, 깨진 이미지 0, 링크·폼 정상, 가로 오버플로 0, 이미지 alt·width/height 완비, CLS 이슈 없음). 아래는 남은 소소한 개선점 — 급하지 않고, 각각 승인/판단 후 적용 권장.

---

## 1. 🟡 골드 텍스트 명암비(WCAG AA) — 라이트 배경 한정, 검증한 것만
`--gold(#c6924e)`를 **밝은 배경 위 텍스트**로 쓰면 2.71:1로 AA(4.5:1) 미달. 대표가 이미 8곳은 `#a07820`(AA 통과)으로 손수 바꿔둔 패턴이 있어, 그 패턴을 **밝은 배경으로 확인된 곳에만** 이어주면 됩니다.

**✅ 내가 배경까지 확인해 '밝은 배경 텍스트'로 확정한 3곳(적용 안전):**
- `style.css` `.testimonial .stars` — 후기 카드(`background: var(--white)`) 위 별점 → `color: #a07820`
- `style.css` `.estimate-step-no` — 견적 스텝 카드(`background: var(--white)`) 위 번호 → `color: #a07820`
- `style.css` `.contact-trust`(기본 규칙, ~2492줄) — 홈·견적의 밝은 contact 섹션 위. **다크 CTA 밴드(`.cta-dark`)에서는 이미 흰색으로 override(2738줄)되므로** 기본색만 `#a07820`으로 바꿔도 어두운 밴드 쪽엔 영향 없음. 안전.

**⛔ 바꾸면 안 되는 곳(어두운 배경이라 골드가 정상, 감사도구가 오판했던 것):**
- `.review-stat strong` — `.review-stats`는 `background: var(--ink)`(다크 스트립). 골드-온-다크 정상.
- 히어로 `.hero-kicker--home` 계열 — 어두운 영상월 위. 정상.
- `.cta-band.cta-dark`, 포커스 아웃라인 등 — 어두운 배경/비텍스트. 정상.

> 이 색은 대표가 요소별로 직접 고른 흔적이 있어(일부러 밝은 골드를 둔 곳이 있을 수 있음) **일괄 치환은 지양**하고, 위 3곳만 반영 권장. 원하시면 아침에 넣어드립니다.

---

## 2. 🟡 서브페이지 캐시버스팅(선택)
- 루트 `index.html`은 `style.css?v=…`·`app.js?v=…`로 캐시버스팅하지만, **9개 서브라우트 + estimate/privacy는 `?v` 없이** `../style.css`·`../app.js`를 로드.
- `vercel.json`은 `immutable` 캐시를 **`/assets/`에만** 적용하고 CSS/JS는 루트라 기본 재검증(ETag) → 실제 stale 위험은 낮음. 다만 배포 후 서브라우트 방문자가 옛 CSS/JS를 받을 **가능성**은 있음.
- **권장**: 생성기 템플릿(`generate_route_html.py`의 `style.css`/`app.js` 줄)에 `?v={VERSION}` 변수를 넣고 배포마다 bump. estimate/privacy는 수기 관리라 함께 수정. 급하진 않음.

## 3. 🟢 `.png`인데 실제 JPEG 바이트인 파일 14개(외형만 이상)
`ai_service_landing.png`, `portfolio_web_*.png`, `vibecoding_1~3.png`, `vr_canada.png`, `pawshare_landing.png`, `muscle_booster.png`, `videoroastery.png` 등. **브라우저가 알아서 렌더 + webp 대체본이 먼저 서빙되어 사용자 영향 0**. 정리하려면 진짜 PNG로 재인코딩하거나 `.jpg`로 rename+참조 갱신(단순 rename은 참조 깨짐). **우선순위 낮음.**

## 4. 🟢 미참조(고아) 에셋 17개 ≈ 230KB
`assets/hero_wall/`: `hw_01,05,14,15,16,17,19,22,24,25,27`(11개) · `assets/hero_loops/`: `loop_03,04,07`의 `.mp4/.webp`(6개). 어디에서도 참조 안 됨(감사에서 확인). 삭제해도 안전하지만 용량 이득 작음 → **급하지 않음.** `landing-plan/index.html`은 `noindex`라 유출 위험 없음(내부 스크래치).

---

## 5. 🔴 대표 문구 결정 필요(감사에서 발견, 손대지 않음)
- **estimate 페이지 타이틀 불일치**: 정적 `estimate/index.html`은 `견적 안내 | Video Roastery`인데, `app.js`가 런타임에 `비디오 로스터리 | 제작 견적 안내·맞춤 견적서`로 덮어씀 → 크롤러가 보는 정적 타이틀과 실제가 다름. **보이는 타이틀 문구라 대표 결정 사항.** 정적/JS 중 하나로 통일 권장.
- estimate 페이지 설명(description)이 3곳(정적 meta·JS·JSON-LD)에서 조금씩 다름 — 하나로 통일 권장(문구 선택은 대표).
