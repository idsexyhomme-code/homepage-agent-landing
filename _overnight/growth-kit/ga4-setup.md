# GA4 설치 — 준비 완료(대표님 측정ID만 주시면 즉시 반영)

**왜 최우선**: 지금 사이트에 **분석 도구가 전혀 없어** 방문 수·유입 경로·문의 전환을 측정할 수 없습니다. "홍보"의 성패를 볼 눈이 없는 상태예요. GA4가 그 눈입니다.

## 대표님이 할 일 (5분)
1. [analytics.google.com](https://analytics.google.com) → 계정/속성 만들기(웹) → URL `videoroastery.com`
2. **측정 ID `G-XXXXXXXXXX`** 복사해서 저에게 주세요 → 제가 아래 코드 넣고 배포.

## 제가 넣을 코드 (측정ID 받으면 index.html + 생성기 template `<head>`에 삽입)
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
</script>
```

## 전환 이벤트 (문의 = 매출 신호) — app.js에 추가 준비됨
문의 버튼/폼이 실제로 "전환"으로 잡히게 이벤트를 붙입니다:
- **메일 문의 클릭** (`mailto:` 버튼) → `gtag('event','generate_lead',{method:'email'})`
- **견적폼 제출** → `gtag('event','generate_lead',{method:'quote_form'})`
- **카카오톡 열기** → `gtag('event','contact',{method:'kakao'})`
→ GA4에서 이 3개를 "핵심 이벤트(전환)"로 표시하면, **어느 유입(당근·네이버·유튜브·직접)이 실제 문의를 만드는지** 한눈에 보입니다. (사이트에 이미 UTM 추적이 있어 시너지)

## 개인정보 참고
- `anonymize_ip` 적용(IP 익명화). 개인정보처리방침에 "방문 분석을 위해 Google Analytics 사용" 한 줄 추가 권장(제가 초안 넣어드릴 수 있음).
- 쿠키 동의 배너: 한국은 분석 쿠키에 필수는 아니나, 해외(EU) 트래픽까지 고려하면 나중에 간단한 동의 배너 추가 가능(선택).

## 대안(선택): 쿠키리스 분석
쿠키·동의배너가 부담되면 **Plausible/Umami** 같은 쿠키리스 분석도 가능(개인정보 부담 최소, 가벼움). 원하시면 비교해 드릴게요. 다만 대부분은 무료+범용성의 GA4로 시작하면 충분합니다.

**→ 측정 ID(G-…)만 주시면 코드+전환이벤트까지 넣고 배포합니다.**
