export async function GET(request: Request) {
  return Response.json({ count: 100, method: "GET" });
}

export async function POST(request: Request) {
  return Response.json({ count: 100, method: "POST" });
}
