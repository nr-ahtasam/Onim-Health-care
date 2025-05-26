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


export async function PATCH(req, { params }) {
  try {
    const { id } = params;
    const payload = await req.json();

    if (!id) {
      return NextResponse.json({ message: "Missing patient history ID" }, { status: 400 });
    }

    const USER = process.env.WP_API_USER;
    const PASS = process.env.WP_API_PASS;
    const AUTH = Buffer.from(`${USER}:${PASS}`).toString("base64");

    const res = await fetch(
      `https://omni.fmmethod.online/wp-json/wp/v2/patient-history/${id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Basic ${AUTH}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();
    if (!res.ok) {
      console.error("Failed to patch patient-history", data);
      return NextResponse.json({ message: data.message || "Update failed" }, { status: res.status });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error("PATCH /api/patient-history/[id] error:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}