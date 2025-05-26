import { NextResponse } from "next/server";
import { getAuthHeaders } from '@/lib/wpAuth';

export async function GET(_, { params }) {
  try {
    const id = params.id;
    const { baseUrl, headers } = getAuthHeaders();
    const res = await fetch(
      `${baseUrl}/wp/v2/patient-history/${id}`,
      {
        headers,
      }
    );

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Fetch failed");

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
