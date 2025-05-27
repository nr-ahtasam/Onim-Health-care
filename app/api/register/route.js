import { getAuthHeaders } from "@/lib/wpAuth";

export async function POST(req) {
  const body = await req.json();
  const { baseUrl, headers } = getAuthHeaders();

  const response = await fetch(`${baseUrl}/custom-auth/v1/register`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
