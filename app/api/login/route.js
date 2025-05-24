export async function POST(req) {
  const body = await req.json();

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_REST_URL}/custom-auth/v1/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await response.json();  
  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
