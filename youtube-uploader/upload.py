#!/usr/bin/env python3
"""
Video Roastery 포트폴리오 영상 → 유튜브 '비공개(초안)' 자동 업로드.
- metadata.json 의 제목·설명·태그로 업로드. privacyStatus=private(초안).
- state.json 으로 이미 올린 영상 추적 → 다시 실행해도 중복 업로드 안 함('계속' 이어올리기).
- 하루 할당량(업로드 1건≈1600, 일 10000) 고려해 실행당 기본 5개까지만.
- 대표가 유튜브 스튜디오에서 확인 후 '공개'만 누르면 끝.

준비물(1회): client_secret.json (Google Cloud OAuth 데스크톱 클라이언트). README.md 참고.
실행:
  python3 upload.py --max 5          # 비공개로 최대 5개 업로드
  python3 upload.py --dry-run        # 실제 업로드 없이 무엇이 올라갈지 미리보기
  python3 upload.py --max 5 --privacy unlisted   # 일부공개로 올리고 싶을 때
"""
import argparse
import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[0]
VIDEO_DIR = ROOT / "assets" / "portfolio_videos"
META = HERE / "metadata.json"
STATE = HERE / "state.json"
CLIENT_SECRET = HERE / "client_secret.json"
TOKEN = HERE / "token.json"
SCOPES = ["https://www.googleapis.com/auth/youtube.upload"]
CATEGORY_ID = "22"  # People & Blogs


def die(msg):
    print("ERROR:", msg, file=sys.stderr)
    sys.exit(1)


def load_json(path, default):
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return default


def get_service():
    try:
        from google.auth.transport.requests import Request
        from google.oauth2.credentials import Credentials
        from google_auth_oauthlib.flow import InstalledAppFlow
        from googleapiclient.discovery import build
    except ImportError:
        die("의존성 미설치. 먼저:  pip3 install -r requirements.txt")

    creds = None
    if TOKEN.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN), SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not CLIENT_SECRET.exists():
                die(f"{CLIENT_SECRET.name} 없음. README.md의 1회 설정(구글 클라우드 OAuth)을 먼저 하세요.")
            flow = InstalledAppFlow.from_client_secrets_file(str(CLIENT_SECRET), SCOPES)
            # 브라우저가 열리고 대표가 Video Roastery 채널로 동의 → 1회만.
            creds = flow.run_local_server(port=0)
        TOKEN.write_text(creds.to_json(), encoding="utf-8")
    from googleapiclient.discovery import build
    return build("youtube", "v3", credentials=creds)


def upload_one(youtube, item, privacy):
    from googleapiclient.http import MediaFileUpload
    path = VIDEO_DIR / item["file"]
    if not path.exists():
        print(f"  ! 파일 없음, 건너뜀: {item['file']}")
        return None
    body = {
        "snippet": {
            "title": item["title"],
            "description": item["description"],
            "tags": item.get("tags", []),
            "categoryId": CATEGORY_ID,
        },
        "status": {
            "privacyStatus": privacy,
            "selfDeclaredMadeForKids": False,
        },
    }
    media = MediaFileUpload(str(path), chunksize=-1, resumable=True, mimetype="video/mp4")
    req = youtube.videos().insert(part="snippet,status", body=body, media_body=media)
    response = None
    while response is None:
        status, response = req.next_chunk()
    return response["id"]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--max", type=int, default=5, help="이번 실행에서 올릴 최대 개수(할당량 보호)")
    ap.add_argument("--privacy", default="private", choices=["private", "unlisted", "public"],
                    help="공개 범위(기본 private=초안). public은 구글 API 심사 전엔 비공개로 잠길 수 있음")
    ap.add_argument("--dry-run", action="store_true", help="실제 업로드 없이 미리보기")
    args = ap.parse_args()

    metadata = load_json(META, [])
    if not metadata:
        die("metadata.json 없음/비어있음. 먼저:  python3 generate_metadata.py")
    state = load_json(STATE, {"uploaded": {}})
    uploaded = state.setdefault("uploaded", {})

    pending = [m for m in metadata if m["file"] not in uploaded]
    print(f"총 {len(metadata)}개 중 업로드됨 {len(uploaded)} / 남음 {len(pending)}")
    if not pending:
        print("모두 업로드됨. 새 영상을 assets/portfolio_videos/ 에 추가하고 generate_metadata.py 재실행하세요.")
        return
    batch = pending[: args.max]
    print(f"이번 실행: {len(batch)}개 ({args.privacy})\n")

    if args.dry_run:
        for m in batch:
            print(f"[미리보기] {m['file']}\n  제목: {m['title']}\n  태그: {', '.join(m['tags'][:6])}...\n")
        print("(--dry-run 이므로 실제 업로드 안 함)")
        return

    youtube = get_service()
    ok = 0
    for m in batch:
        print(f"업로드 중: {m['file']} → \"{m['title']}\"")
        try:
            vid = upload_one(youtube, m, args.privacy)
        except Exception as e:
            print(f"  ! 실패: {e}")
            if "quota" in str(e).lower():
                print("  할당량 소진 추정 — 내일 다시 실행하세요.")
                break
            continue
        if vid:
            uploaded[m["file"]] = {"id": vid, "title": m["title"], "privacy": args.privacy}
            STATE.write_text(json.dumps(state, ensure_ascii=False, indent=2), encoding="utf-8")
            print(f"  ✓ 완료(비공개): https://studio.youtube.com/video/{vid}/edit")
            ok += 1
    print(f"\n{ok}개 업로드 완료. 유튜브 스튜디오에서 확인 후 '공개'로 바꾸시면 됩니다.")
    print("남은 영상은 내일 다시 `python3 upload.py` 실행하면 이어서 올라갑니다.")


if __name__ == "__main__":
    main()
