import { NextResponse } from "next/server";

import { getAuthHeaders } from '@/lib/wpAuth';
export async function GET(req) {
  try {
    const { baseUrl, headers } = getAuthHeaders();
    const { searchParams } = new URL(req.url);
    const patient = searchParams.get("patient");
    const page = searchParams.get("page") || 1;
    const per_page = searchParams.get("per_page") || 10;

    const url = `${baseUrl}/wp/v2/patient-history?patient=${patient}&page=${page}&per_page=${per_page}`;

    const res = await fetch(url, {
      headers
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Fetch failed");

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const payload = await req.json();
    const { baseUrl, headers } = getAuthHeaders();
    const res = await fetch(`${baseUrl}/wp/v2/patient-history`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Update failed");

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}


