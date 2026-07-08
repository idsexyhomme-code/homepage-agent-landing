#!/usr/bin/env python3
"""
포트폴리오 영상 48개 → 유튜브 업로드용 메타데이터(제목·설명·태그) 자동 생성.
- 파일명 토큰으로 카테고리/설명을 분류(고객사 실명은 넣지 않음 — 검토 후 대표가 추가).
- 브랜드 톤 + 제주/서비스 키워드 + videoroastery.com 백링크 포함.
- 결과: metadata.json (대표가 업로드 전 자유롭게 수정 가능).
실행: python3 generate_metadata.py
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VIDEO_DIR = ROOT / "assets" / "portfolio_videos"
OUT = Path(__file__).resolve().parent / "metadata.json"

SITE = "https://videoroastery.com"
EMAIL = "kiwee1223@gmail.com"

# 파일명 토큰(우선순위 순) → (카테고리, 한글 설명어, 추가 해시태그/태그)
# 위에서부터 먼저 매칭되는 규칙을 사용.
RULES = [
    ("wedding_aerial", "웨딩", "제주 웨딩 항공 하이라이트", ["웨딩영상", "웨딩드론", "제주웨딩"]),
    ("wedding_detail", "웨딩", "웨딩 디테일 무드 영상", ["웨딩영상", "웨딩스냅", "제주웨딩"]),
    ("wedding_jeju", "웨딩", "제주 웨딩 하이라이트", ["웨딩영상", "제주웨딩", "웨딩스냅"]),
    ("wedding", "웨딩", "제주 웨딩 영상", ["웨딩영상", "제주웨딩", "웨딩스냅"]),
    ("ai_esg", "AI 숏폼", "ESG·지속가능 AI 영상", ["AI영상", "ESG영상", "브랜드필름"]),
    ("ai_kombucha", "AI 숏폼", "제품 AI 숏폼 광고", ["AI영상", "제품광고", "숏폼"]),
    ("ai_lemondiet", "AI 숏폼", "제품 AI 숏폼 광고", ["AI영상", "제품광고", "숏폼"]),
    ("ai_superwater", "AI 숏폼", "제품 AI 숏폼 광고", ["AI영상", "제품광고", "숏폼"]),
    ("ai_nadaum", "AI 숏폼", "브랜드 AI 숏폼", ["AI영상", "브랜드영상", "숏폼"]),
    ("ai_saemangeum", "AI 숏폼", "AI 홍보영상", ["AI영상", "홍보영상", "숏폼"]),
    ("ai_game", "AI 숏폼", "게임 AI 숏폼 광고", ["AI영상", "게임광고", "숏폼"]),
    ("ai", "AI 숏폼", "AI 숏폼 광고 영상", ["AI영상", "AI영상제작", "숏폼", "릴스"]),
    ("esg_brandfilm", "기업영상", "ESG 브랜드필름", ["브랜드필름", "ESG영상", "기업영상"]),
    ("corp", "기업영상", "기업 홍보영상", ["기업영상", "홍보영상", "브랜드필름"]),
    ("corporate", "기업영상", "기업 홍보영상", ["기업영상", "홍보영상", "브랜드필름"]),
    ("content", "콘텐츠", "콘텐츠·릴스", ["릴스", "숏폼", "콘텐츠제작"]),
    ("food_promo", "제품·푸드", "푸드 광고영상", ["푸드영상", "제품광고", "홍보영상"]),
    ("product_board", "제품·푸드", "제품 광고영상", ["제품영상", "제품광고", "홍보영상"]),
    ("kombucha", "제품·푸드", "제품 광고영상", ["제품영상", "제품광고", "홍보영상"]),
    ("shortform", "숏폼", "숏폼 광고 영상", ["숏폼", "릴스", "숏폼광고"]),
    ("wedding_beach", "웨딩", "해변 웨딩 영상", ["웨딩영상", "제주웨딩"]),
    ("coast_field", "드론", "제주 해안 들녘 항공촬영", ["드론촬영", "항공촬영", "제주드론"]),
    ("coast", "드론", "제주 해안 항공촬영", ["드론촬영", "항공촬영", "제주드론"]),
    ("farm_field", "드론", "제주 농장 항공촬영", ["드론촬영", "항공촬영", "농장영상"]),
    ("farm_pasture", "드론", "제주 목장 항공촬영", ["드론촬영", "항공촬영", "목장영상"]),
    ("garden", "드론", "제주 정원 항공촬영", ["드론촬영", "항공촬영", "제주드론"]),
    ("facility_route", "드론", "시설 동선 항공촬영", ["드론촬영", "항공촬영", "시설영상"]),
    ("facility_solar", "드론", "태양광 시설 항공촬영", ["드론촬영", "항공촬영", "시설영상"]),
    ("facility", "드론", "시설 항공촬영", ["드론촬영", "항공촬영", "시설영상"]),
    ("building", "드론", "건물 외관 항공촬영", ["드론촬영", "항공촬영", "건물외관"]),
    ("resort", "드론", "리조트·숙소 항공촬영", ["드론촬영", "항공촬영", "숙소영상"]),
    ("cinematic", "드론", "시네마틱 해안 항공촬영", ["드론촬영", "항공촬영", "시네마틱"]),
    ("wide_aerial", "드론", "제주 해안 와이드 항공촬영", ["드론촬영", "항공촬영", "제주드론"]),
    ("aerial", "드론", "제주 항공촬영", ["드론촬영", "항공촬영", "제주드론"]),
    ("drone_jeju", "드론", "제주 마을 전경 항공촬영", ["드론촬영", "항공촬영", "제주드론"]),
    ("drone_facility", "드론", "기관·시설 항공촬영", ["드론촬영", "항공촬영", "시설영상"]),
    ("drone", "드론", "제주 드론 항공촬영", ["드론촬영", "항공촬영", "제주드론"]),
]

BASE_TAGS = ["비디오 로스터리", "Video Roastery", "제주 영상제작", "영상제작", "제주"]


def classify(stem):
    for token, category, descriptor, extra in RULES:
        if token in stem:
            return category, descriptor, extra
    return "영상", "영상 제작 사례", ["영상제작", "제주"]


def seq(stem):
    m = re.search(r"(\d+)$", stem)
    return f" #{m.group(1)}" if m else ""


def build(stem):
    category, descriptor, extra = classify(stem)
    title = f"{descriptor}{seq(stem)} | 비디오 로스터리 Video Roastery"
    # 유튜브 제목 100자 제한
    title = title[:100]
    hashtags = " ".join("#" + t.replace(" ", "") for t in (["비디오로스터리", "제주영상제작"] + extra))
    description = (
        f"{descriptor} 작업 사례입니다.\n\n"
        "비디오 로스터리(Video Roastery)는 제주에서 시작한 영상·홈페이지 제작 스튜디오입니다.\n"
        "홈페이지·영상·드론·AI 숏폼·콘텐츠를 실제 작업물 기준으로 상담합니다.\n\n"
        f"▶ 제작 문의: {SITE}\n"
        f"▶ 이메일: {EMAIL}\n\n"
        f"{hashtags}"
    )
    tags = BASE_TAGS + extra
    # 중복 제거(순서 유지), 유튜브 태그 총 500자 제한 고려
    seen, uniq = set(), []
    for t in tags:
        if t not in seen:
            seen.add(t); uniq.append(t)
    return {
        "file": stem + ".mp4",
        "category": category,
        "title": title,
        "description": description,
        "tags": uniq,
        "privacyStatus": "private",  # 초안: 대표 검토 후 공개
    }


def main():
    files = sorted(VIDEO_DIR.glob("*.mp4"))
    items = [build(f.stem) for f in files]
    OUT.write_text(json.dumps(items, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"generated {len(items)} entries -> {OUT}")
    # 카테고리 요약
    from collections import Counter
    c = Counter(i["category"] for i in items)
    for k, v in c.most_common():
        print(f"  {k}: {v}")


if __name__ == "__main__":
    main()
