// Vercel Edge Function — 접속 IP의 국가 코드(ISO2)를 반환. 언어 자동 라우팅의 2차 신호로 사용.
// 개인정보 저장 없음: Vercel이 엣지에서 채워주는 국가 헤더만 그대로 회신(no-store).
export const config = { runtime: "edge" };

export default function handler(req) {
  const country =
    req.headers.get("x-vercel-ip-country") ||
    (req.geo && req.geo.country) ||
    "";
  return new Response(JSON.stringify({ country }), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}
