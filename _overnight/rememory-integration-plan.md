# 리메모리 → videoroastery.com/rememory/ 편입 실행 플랜

> 스코핑 완료: 2026-07-08 밤샘(vr 세션). 소스 정밀 스캔 기반. **대표 결정 3건**만 정해지면 30분 내 편입·배포 가능.
> 출처: `REMEMORY_HANDOFF.md`(for-canada 세션 → vr 세션), 소스 = `~/dev/remind-wedding/`

## 왜 아직 자동으로 안 밀었나 (밤샘에 라이브 배포 보류한 이유)
1. **대외 신규 서비스 페이지 + 브랜드 결정** — 자는 동안 라이브로 밀면 깨져 보일 위험. Codex 게이트로도 "브랜드 판단"은 못 함.
2. **에셋 3종 결손** — 소스가 참조하는 `assets/og.jpg · logo.png · favicon.png`가 실제로 없음(assets엔 instagram 카드 6장만). 만들어야 함.
3. **편입 확정이 2차 출처** — 다른 세션 핸드오프가 "유저 확정"이라 기록. vr 세션에서 대표 직접 확인 필요.

## 대표 결정 필요 3건
- **[결정 1] 편입 확정?** 리메모리(옛 사진 복원·리마인드 앨범)를 videoroastery.com/rememory/ 하위 서비스로 편입 확정하나? (핸드오프엔 확정으로 기록)
- **[결정 2] 홈 네비 노출?** 홈 index.html 서비스 목록에 "리메모리(옛 사진 복원·리마인드 앨범)" 링크를 넣을지. ⚠️ 기존 `/wedding/`(웨딩 *촬영*)과 라벨 확실히 구분해야 혼선 없음.
- **[결정 3] 에셋 처리?** og.jpg/logo.png/favicon.png를 (a) 기존 instagram 카드(card1~6.png, keepsake 디자인)에서 파생 생성 / (b) 새로 제작 / (c) VR 공용 심볼 임시 사용 중 무엇으로?

## 소스 현황 (정밀 스캔 결과)
- `~/dev/remind-wedding/index.html` (692줄) — **자체완결**: 인라인 `<style>` 1개 + 인라인 `<script>` 4개, 외부 .js 의존 0.
- 외부 의존: pretendard CDN(jsdelivr) + Google Fonts(Nanum Myeongjo/Nanum Pen Script). ※VR은 셀프호스트 서브셋 → 편입 시 폰트 셀프호스트 전환은 후속 최적화(초기엔 CDN 유지해도 동작).
- `en/index.html` 있음(구 디자인 가능성 — keepsake 통일 권장).
- 에셋: `assets/instagram/card1~6.{html,png}` + `card.css`만 존재. **og/logo/favicon 없음.**
- `_redirects`(Cloudflare/Netlify 포맷) — Vercel 미적용. `/link`·`/bio`→linkinbio 301은 필요 시 vercel.json redirects로 이식.

## 편입 실행 절차 (결정 후)
1. **배치**: `~/dev/remind-wedding/index.html` → `videoroastery.com/rememory/index.html`. (생성기 `generate_route_html.py` PAGES엔 안 넣음 — 리메모리는 독립 디자인이라 템플릿 대상 아님. 수기 페이지로.)
2. **URL 재배선(SEO 핵심)** — `rememory.kr` → `videoroastery.com/rememory` 전량 치환:
   - `<link rel="canonical">` `https://rememory.kr/` → `https://videoroastery.com/rememory/`
   - `og:url` 동일 치환
   - JSON-LD `url` / `logo`(`https://rememory.kr/assets/logo.png`) / `og.jpg` 절대경로 치환
3. **에셋 경로 보정**: 서브디렉토리 깊이(`/rememory/`) 기준으로 상대경로 `assets/…` → `assets/…`(같은 깊이면 유지) 확인. favicon 상대경로 동작 검증.
4. **에셋 생성**(결정 3): og.jpg(1200×630)·logo.png·favicon.png 만들어 `rememory/assets/`에 배치.
5. **홈 네비**(결정 2): `index.html` 서비스 목록에 리메모리 추가 + `app.js` 라우팅/nav 반영 여부 결정(독립 페이지면 nav 링크만).
6. **sitemap.xml**: `<url><loc>https://videoroastery.com/rememory/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>` 추가(생성기 write_sitemap에도 반영).
7. **리다이렉트**(필요 시): `_redirects` 대신 vercel.json redirects로 `/link`·`/bio` 이식.
8. **검증**: 로컬 렌더(라이트/다크 테마)·깨진 이미지 0·링크·JSON-LD 유효 → Codex GO/NO-GO → 배포.

## 예상 소요
- 결정 3건 확정 시: 편입+재배선+에셋+검증 ≈ 30~45분. 폰트 셀프호스트·en 페이지 keepsake 통일은 후속.
