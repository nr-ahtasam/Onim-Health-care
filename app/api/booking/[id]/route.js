import { NextResponse } from "next/server";
import { getAuthHeaders } from '@/lib/wpAuth';

export async function GET(_, { params }) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ message: "Missing booking ID" }, { status: 400 });
    }
    
    const { baseUrl, headers } = getAuthHeaders();
    const res = await fetch(`${baseUrl}/wp/v2/booking/${id}`, { headers });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ message: data.message || "Failed to fetch booking" }, { status: res.status });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("Booking fetch error:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export async function PATCH(req, { params }) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ message: "Missing booking ID" }, { status: 400 });
    }

    const payload = await req.json();
    const { baseUrl, headers } = getAuthHeaders();

    const res = await fetch(`${baseUrl}/wp/v2/booking/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ message: data.message || "Failed to update booking" }, { status: res.status });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("Booking update error:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}