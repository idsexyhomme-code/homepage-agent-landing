# 구조화 데이터(Schema) 성장 플랜 — 2026-07-07

> 검색 노출을 키우는 기술 SEO. **눈에 보이는 문구·키워드는 바꾸지 않음** — 검색엔진이 읽는 마크업만 추가/수정합니다.
> ✅ = 오늘 밤 이미 반영(스테이징, 배포 대기) · 🟡 = 코드 준비됨, 대표 승인 후 적용 · 🔴 = 대표 정보/판단 필요

---

## ✅ 오늘 밤 반영(배포 대기) — 이미 검증 완료

### 1. FAQ 구조화데이터를 실제 화면 FAQ와 일치시킴 (버그 수정)
- **문제였던 것**: 8개 서비스 페이지의 `FAQPage` 마크업에 들어있던 질문 3개("자료가 부족해도 상담할 수 있나요?" 등)가 **실제 페이지에 안 보이는 질문**이었음. 화면에는 "제작 기간/비용/사용권/수정/시작 방법…" 13개가 뜨는데 마크업은 딴 내용 → **구글 가이드라인 위반(마크업 = 화면 내용 일치 필수)**. 서치콘솔에서 오류로 잡히고 리치결과에서 무시될 수 있었음.
- **고친 것**: 생성기(`scripts/generate_route_html.py`)의 FAQ 데이터를 `app.js`가 실제로 렌더하는 문답(공통 7 + 서비스별 1)과 1:1로 동기화. 8개 페이지 재생성.
- **부수 효과(좋음)**: 서브페이지 `Organization`에 `alternateName: "비디오 로스터리"`가 빠져 있던 것도 이번에 루트와 동일하게 채워짐(한글 브랜드 인식).
- 검증: 8개 파일 JSON 유효성 OK, FAQ 개수 일치(homepage 8·inquiry/consulting 7·나머지 8), 제목/설명/캐노니컬 변경 0.

### 2. `/estimate/`(견적 안내) sitemap 누락 수정
- 견적 페이지는 실제 색인 대상(`index,follow`)이고 메인 내비에 연결돼 있는데 **sitemap에 빠져 크롤러에 안 보였음**. 추가함(생성기 `write_sitemap()`도 함께 고쳐 재발 방지).

### 3. 생성기 최신화(재발 방지)
- 생성기가 오래돼서, 다시 돌리면 **라이브의 좋은 문구를 옛날 문구로 되돌릴** 위험이 있었음(홈페이지 "화면 예시"→"시안" 등). 생성기의 root·homepage 설명과 brand-film 이미지를 라이브 기준으로 맞춰, 앞으로 생성기를 돌려도 안전하게 함.

> **배포 방법**: 루트에서 `npx -y vercel@latest --prod --yes` (스테이징된 변경은 `git diff`로 확인 가능, 백업 패치: `_overnight/safe-changeset-2026-07-07.patch`). 되돌리려면 `git checkout -- .`

---

## 🟡 준비됨 — 승인 후 적용(코드 포함)

### 4. BreadcrumbList (서비스 페이지) — 안전·추천
검색결과에서 `홈 > 드론 항공촬영` 형태의 이동경로가 노출돼 클릭률↑. 화면 문구 변화 없음.
`scripts/generate_route_html.py`의 `schema_for()`에서 서비스 페이지(`if page["slug"]`) 그래프에 아래를 추가하면 됩니다:

```python
graph.append({
    "@type": "BreadcrumbList",
    "@id": f"{canonical}#breadcrumb",
    "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "홈", "item": f"{DOMAIN}/"},
        {"@type": "ListItem", "position": 2, "name": page["service"], "item": canonical},
    ],
})
```
적용: 위 추가 → `python3 scripts/generate_route_html.py`는 OG·root까지 다시 만들므로 **서브페이지만** 재생성하는 방식(오늘 밤 쓴 방식) 권장. 원하시면 제가 아침에 안전하게 넣어드리겠습니다.

### 5. 포트폴리오 영상 VideoObject — 중간 난이도, 잠재가치 큼
구글 동영상 검색/리치결과 대상이 됩니다(영상 48편 보유 = 큰 자산). 다만 영상마다 `name·description·thumbnailUrl·uploadDate·contentUrl·duration`이 필요해 메타데이터 작업이 있습니다. **2단계 과제**로 추천 — 대표가 각 영상 한 줄 설명/업로드일만 정리해주시면 제가 자동 생성기로 붙일 수 있습니다.

---

## 🔴 대표 정보/판단 필요

### 6. Organization `sameAs` — 실제 프로필 URL 필요
크몽 기그·인스타그램·네이버 블로그/플레이스 **실제 URL**을 알려주시면 `Organization`에 연결해 브랜드 엔터티 인식을 높입니다(검색에서 "비디오 로스터리" 지식패널 가능성↑). 예:
```json
"sameAs": ["https://kmong.com/...", "https://instagram.com/...", "https://blog.naver.com/..."]
```

### 7. LocalBusiness / 지역 SEO — 공개 사업장 주소 여부 확인
지역 로컬팩(지도) 노출은 `LocalBusiness`+실제 주소·좌표가 있어야 유효합니다. **없는 주소를 지어내면 안 됩니다.** 공개 가능한 제주 사업장 주소가 있으면 추가해 로컬 노출 자격을 얻을 수 있습니다. 없다면 현행(`areaServed: 제주+전국`) 유지가 정직하고 안전합니다.

### 8. 리뷰 별점 스니펫(AggregateRating) — 신중
크몽 실거래 ★4.5는 사실이라 강점이지만, **자사 사이트에 자기 별점을 다는 AggregateRating은 구글이 "self-serving"으로 무시/제재**할 수 있습니다(리뷰 출처가 제3자여야 함). 현재 사이트는 크몽 리뷰를 화면에 표시 중이니, 넣는다면 출처(크몽)를 명확히 한 `Review` 형태로 제한적으로 — **리스크가 있어 대표 판단 필요**. 개인적으론 보류 권장.

---

### 참고: 네이버 vs 구글
위 스키마는 주로 **구글**용입니다. 대표 고객 다수가 쓰는 **네이버**는 스키마보다 **블로그·플레이스·서치어드바이저 등록**이 핵심 → `_overnight/lead-gen/naver-blog-drafts.md` 참고.
