import { getAuthHeaders } from "@/lib/wpAuth";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const patient = searchParams.get("patient");
    const doctor = searchParams.get("doctor");
    const page = searchParams.get("page") || 1;
    const per_page = searchParams.get("per_page") || 10;

    const queryParams = new URLSearchParams({
      page,
      per_page,
    });

    if (patient) queryParams.append("patient", patient);
    if (doctor) queryParams.append("doctor", doctor);

    const { baseUrl, headers } = getAuthHeaders();
    const res = await fetch(`${baseUrl}/wp/v2/rating?${queryParams.toString()}`, {
      headers,
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ message: data.message || "Failed to fetch ratings" }, { status: res.status });
    }
    
    return NextResponse.json(data);
  } catch (err) {
    console.error("GET /rating error:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const payload = await req.json();

    const { baseUrl, headers } = getAuthHeaders();
    const res = await fetch(`${baseUrl}/wp/v2/rating`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ message: data.message || "Failed to submit rating" }, { status: res.status });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error("POST /rating error:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
