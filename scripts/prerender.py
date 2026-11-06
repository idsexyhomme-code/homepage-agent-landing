#!/usr/bin/env python3
"""정적 프리렌더 — 검색로봇(네이버 Yeti 등)이 본문을 읽을 수 있게 app.js가 그리는 #app 마크업을 각 index.html에 박는다.

동작
  1) 레포 루트를 로컬 정적 서버로 띄운다.
  2) <div id="app"> 셸을 가진 페이지마다 헤드리스 크로미움으로 연다.
  3) app.js가 #app에 '처음 대입하는' innerHTML(런타임 클래스·애니메이션 붙기 전 원본)을 가로챈다.
  4) 그 마크업을 index.html의 <div id="app">…</div> 안에 넣는다. (noscript 대체문은 본문과 중복되므로 제거)

브라우저에서는 app.js가 같은 마크업으로 #app을 다시 덮어쓰므로 화면·동작은 그대로다.
generate_route_html.py가 index.html을 다시 만들면 프리렌더가 지워지므로 반드시 이어서 실행한다.
  사용: python3 scripts/prerender.py            (전체)
        python3 scripts/prerender.py video about (일부)
"""
import functools
import http.server
import re
import socketserver
import sys
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
SKIP_DIRS = {".git", "_overnight", "node_modules", "scripts", "assets", ".vercel", ".claude"}
APP_RE = re.compile(r'<div id="app"(?: data-prerendered="1")?>.*?</div>\s*(?=<script src="[^"]*app\.js[^"]*")', re.S)
NOSCRIPT_RE = re.compile(r"\s*<noscript><section class=\"noscript-fallback\">.*?</noscript>", re.S)

CAPTURE_JS = """
(() => {
  const desc = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
  window.__vrFirst = null;
  Object.defineProperty(Element.prototype, 'innerHTML', {
    configurable: true,
    get() { return desc.get.call(this); },
    set(v) {
      if (this.id === 'app' && window.__vrFirst === null) window.__vrFirst = String(v);
      return desc.set.call(this, v);
    },
  });
})();
"""


def shell_pages(only):
    pages = []
    for f in sorted(ROOT.rglob("index.html")):
        rel = f.relative_to(ROOT)
        if rel.parts[0] in SKIP_DIRS:
            continue
        html = f.read_text(encoding="utf-8")
        if not APP_RE.search(html):
            continue  # 자체 정적 페이지(jeju·privacy 등)는 대상 아님
        slug = "/".join(rel.parts[:-1])
        if only and slug not in only:
            continue
        pages.append((slug, f))
    return pages


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass


def main():
    only = set(sys.argv[1:])
    pages = shell_pages(only)
    handler = functools.partial(QuietHandler, directory=str(ROOT))
    with socketserver.TCPServer(("127.0.0.1", 0), handler) as srv:
        port = srv.server_address[1]
        threading.Thread(target=srv.serve_forever, daemon=True).start()
        origin = f"http://127.0.0.1:{port}"
        ok = fail = 0
        with sync_playwright() as p:
            browser = p.chromium.launch()
            ctx = browser.new_context(locale="ko-KR", viewport={"width": 1280, "height": 900})
            ctx.add_init_script(CAPTURE_JS)
            # 영상·폰트 등 무거운 리소스는 받을 필요 없음
            ctx.route(re.compile(r".*\.(mp4|webm|mov|woff2?|jpg|jpeg|png|webp|gif|svg)(\?.*)?$"), lambda r: r.abort())
            page = ctx.new_page()
            for slug, f in pages:
                url = f"{origin}/{slug + '/' if slug else ''}"
                try:
                    page.goto(url, wait_until="domcontentloaded", timeout=30000)
                    page.wait_for_function("window.__vrFirst !== null", timeout=15000)
                    markup = page.evaluate("window.__vrFirst")
                except Exception as e:  # noqa: BLE001
                    print(f"  ✗ /{slug} 렌더 실패: {e}")
                    fail += 1
                    continue
                markup = markup.replace(origin, "").strip()
                # 영상·iframe은 app.js가 곧 같은 DOM으로 덮어쓰므로 프리렌더본에서 미리 받지 않게 src를 죽인다(이중 다운로드 방지).
                markup = re.sub(r"<(video|source|iframe)\b([^>]*?)\s(src|poster)=", r"<\1\2 data-pr-\3=", markup)
                markup = re.sub(r"<(video|source|iframe)\b([^>]*?)\s(src|poster)=", r"<\1\2 data-pr-\3=", markup)
                markup = re.sub(r"(<video\b[^>]*?)\s(autoplay|preload=\"[^\"]*\")", r"\1", markup)
                if "127.0.0.1" in markup or len(markup) < 500:
                    print(f"  ✗ /{slug} 마크업 이상({len(markup)}자) — 건너뜀")
                    fail += 1
                    continue
                html = f.read_text(encoding="utf-8")
                html = NOSCRIPT_RE.sub("", html)
                new = APP_RE.sub(lambda m: f'<div id="app" data-prerendered="1">{markup}</div>\n    ', html, count=1)
                f.write_text(new, encoding="utf-8")
                text = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", "", markup))).strip()
                print(f"  ✓ /{slug:<40} 본문 {len(text):>5}자")
                ok += 1
            browser.close()
        srv.shutdown()
    print(f"\n프리렌더 완료: 성공 {ok} · 실패 {fail} (대상 {len(pages)})")
    sys.exit(1 if fail else 0)


if __name__ == "__main__":
    main()
