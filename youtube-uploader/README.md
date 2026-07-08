# Video Roastery 유튜브 자동 업로드 (비공개 초안)

포트폴리오 영상 48개를 **비공개(초안)로 자동 업로드** → 대표님이 스튜디오에서 확인하고 **'공개'만** 누르면 끝.
각 영상 설명에 `videoroastery.com` 링크가 들어가 **유튜브→사이트 백링크**(브랜드검색에 도움)도 생깁니다.

## 왜 '비공개 초안' 방식인가
- 유튜브 API로 자동 업로드한 영상은 구글 심사 전까지 **어차피 비공개로 잠깁니다**(스팸방지 정책). 그래서 처음부터 초안으로 올리는 게 자연스럽고, 잘못 공개될 위험도 0.
- 대표님이 예전에 정하신 **"건별 승인"** 원칙과도 맞습니다.

---

## 딱 한 번만: 유튜브 계정 연결(OAuth) — 약 10분, 대표님이 하셔야 함
제가 비밀번호·동의를 대신 못 하는 부분입니다. 화면 보며 같이 진행하면 금방이에요.

1. **Google Cloud 프로젝트 만들기** — https://console.cloud.google.com  (idsexyhomme 계정) → 상단 프로젝트 선택 → "새 프로젝트" → 이름 `video-roastery-uploader` → 만들기.
2. **YouTube Data API v3 켜기** — 좌측 "API 및 서비스" → "라이브러리" → `YouTube Data API v3` 검색 → **사용 설정**.
3. **OAuth 동의 화면** — "API 및 서비스" → "OAuth 동의 화면" → User Type **외부** → 앱 이름 `Video Roastery Uploader`, 지원 이메일 본인 → 저장. "테스트 사용자"에 **idsexyhomme@gmail.com 추가**(중요). (게시 안 해도 테스트 사용자면 동작)
4. **사용자 인증 정보 만들기** — "사용자 인증 정보" → "사용자 인증 정보 만들기" → **OAuth 클라이언트 ID** → 애플리케이션 유형 **데스크톱 앱** → 만들기 → **JSON 다운로드**.
5. 내려받은 JSON 파일을 이 폴더에 **`client_secret.json`** 이름으로 저장:
   `youtube-uploader/client_secret.json`

> ⚠️ `client_secret.json` 과 `token.json` 은 비밀키라 git/배포에 절대 안 올라갑니다(.gitignore 처리됨).

---

## 실행

```bash
cd youtube-uploader
pip3 install -r requirements.txt        # 처음 1회

python3 upload.py --dry-run             # 무엇이 올라갈지 미리보기(업로드 안 함)
python3 upload.py --max 5               # 비공개로 5개 업로드 (첫 실행 시 브라우저 열려 1회 동의)
```

- 첫 `upload.py` 실행 때 **브라우저가 열립니다** → **반드시 "Video Roastery" 채널**로 로그인/선택해 동의(다른 채널 아님!). 이후엔 자동.
- 하루 할당량상 **한 번에 5~6개**가 안전. 다음날 `python3 upload.py` 다시 실행하면 **안 올린 것부터 이어서** 올라갑니다(중복 없음).
- 48개 다 올리려면 대략 8~10일에 걸쳐 나눠 올리거나, 할당량 증설 신청하면 더 빨리 가능.

## 업로드 후
- https://studio.youtube.com → 콘텐츠 → 비공개 영상들 확인.
- 제목·썸네일 보고 좋으면 **공개**로 변경. (고객사 실명을 넣고 싶으면 이때 추가 — 자동 생성엔 넣지 않았습니다.)

## 제목·설명 바꾸고 싶으면
`metadata.json` 을 열어 원하는 영상의 `title`/`description`/`tags` 를 수정 후 다시 `upload.py`.
(아직 안 올린 영상에만 반영됩니다. 이미 올린 건 스튜디오에서 직접 수정.)

## '계속' 자동으로 (선택)
새 제작 영상을 `assets/portfolio_videos/` 에 넣고 →
```bash
python3 generate_metadata.py   # 새 영상 메타데이터 추가 생성
python3 upload.py --max 5       # 새 것만 비공개 업로드
```
원하시면 이걸 매일 자동 실행(launchd/cron)하도록도 세팅해 드릴 수 있어요. 말씀만 주세요.
