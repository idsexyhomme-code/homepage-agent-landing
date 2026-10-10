// jeju.videoroastery.com 루트를 1분제주 링크페이지로.
// vercel.json rewrites는 정적 파일(/index.html)보다 늦게 적용돼서 루트에선 홈이 나온다 → 미들웨어는 파일보다 먼저 돈다.
export const config = { matcher: "/" };

export default function middleware(request) {
  const url = new URL(request.url);
  if (url.hostname !== "jeju.videoroastery.com") return;
  url.pathname = "/jeju/";
  return new Response(null, { headers: { "x-middleware-rewrite": url.toString() } });
}
