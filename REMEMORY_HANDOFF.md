# 리메모리 → videoroastery.com/rememory 편입 핸드오프

> 작성: for-canada 세션(리메모리 리브랜딩 담당) → 인수: `vr` 세션(VR 레포 소유)
> 결정: **리메모리를 VR 산하 서비스로 흡수** (유저 확정). 경로 = `videoroastery.com/rememory/`

## 완성 입력물 (창작은 끝났음 — 그대로 편입만)
- **완성본 랜딩:** `~/dev/remind-wedding/index.html`
  - 디자인 = "손편지·앨범과 실물"(keepsake) 리브랜딩 완료. **라이트/다크 두 테마 브라우저 검증 끝.**
  - 아이덴티티: 사진코너(브라스 삼각)+워시테이프+손글씨(Nanum Pen Script) 주석, 우표 모티프, **실물 액자·앨범 전용 섹션**.
  - 팔레트: 로즈우드 `#8C4A44` + 브라스 `#A9803F` on 웜 리넨 `#F3EBDF` / 매트 `#FCF8F1` / 세피아잉크 `#2C2521`. 폰트: Nanum Myeongjo(헤딩)/Pretendard(본문)/Nanum Pen Script(손글씨). 종이 grain 오버레이, 스크롤 리빌, reduced-motion 대응, 푸터 두 테마 다크 고정.
  - SEO 완비: meta/OG/Twitter + JSON-LD(Organization·Service·FAQPage). **전부 보존할 것.**
- **영문 랜딩(있음):** `~/dev/remind-wedding/en/index.html` — 아직 구(舊)디자인일 수 있음. 편입 시 keepsake로 통일 권장.
- **에셋:** `~/dev/remind-wedding/assets/`(instagram 카드만). favicon/og.jpg/logo.png는 JSON-LD·meta에서 참조하나 실제 파일 확인·생성 필요.

## VR 레포 편입 작업
1. **라우트 생성:** `/wedding/` `/drone/` 관례대로 `/rememory/index.html` 생성. ⚠️ `scripts/generate_route_html.py`가 라우트를 생성/관리하는지 먼저 확인 — 생성기 소유면 생성기 경유, 아니면 독립 페이지 허용.
2. **URL 재배선(중요, SEO):** 완성본의 canonical/og:url/twitter/JSON-LD url·logo를 `https://rememory.kr/` → `https://videoroastery.com/rememory/`로 전부 교체. 서브디렉토리 깊이에 맞게 상대 에셋 경로(favicon 등) 보정.
3. **홈 네비 추가:** `index.html`의 서비스 목록(현재 `wedding/` 링크 근처, 약 44행)에 리메모리 추가.
   - ⚠️ **라벨을 "옛 사진 복원·리마인드 앨범"으로.** 기존 `/wedding/`(웨딩스냅·영상 *촬영*)과 반드시 구분 — 리메모리는 *옛 사진 복원*이라 혼선나면 둘 다 죽음.
4. **sitemap.xml:** `<url><loc>https://videoroastery.com/rememory/</loc>...</url>` 추가(priority 0.8).
5. **다국어:** en/zh/zh-hant에 리메모리 엔트리 필요한지 판단. en은 `~/dev/remind-wedding/en/` 재활용 가능.
6. **소속 표시:** 리메모리 페이지 상단에 얇은 "← Video Roastery 전체 서비스" 링크(산하 관계). **단, keepsake 비주얼 아이덴티티는 유지**(VR 크롬 강제 이식 금지 — 자녀 구매층 감정 몰입이 이 디자인의 전환 무기).

## 이 편입의 리스크 (방어하며 진행)
- **국내 SEO 약화:** rememory.kr 도메인 정조준을 잃음 → canonical/hreflang 정확히, 리메모리 페이지에 "옛날 결혼사진 복원" 키워드 밀도 유지.
- **/wedding 충돌:** 위 3번 라벨 구분으로 방어.
- (참고) 하이브리드(rememory.kr 독립 + 상호링크)를 추천했었으나 유저가 흡수 선택. rememory.kr 도메인 보유 시 301 리다이렉트로 살려도 됨.

## 검증
- 편입 후 라이트/다크 both, 모바일 폭, 링크·폼·sticky CTA 동작, JSON-LD 유효성 확인.
