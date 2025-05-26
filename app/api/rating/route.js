import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const payload = await req.json();

    const USER = process.env.WP_API_USER;
    const PASS = process.env.WP_API_PASS;
    const AUTH = Buffer.from(`${USER}:${PASS}`).toString("base64");

    const res = await fetch("https://omni.fmmethod.online/wp-json/wp/v2/rating", {
      method: "POST",
      headers: {
        Authorization: `Basic ${AUTH}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (res.ok) {
      console.log("Rating submitted successfully:", data);
    }

    if (!res.ok) {
      console.error("Rating submission failed:", data);
      return NextResponse.json(
        { message: data.message || "Failed to submit rating" },
        { status: res.status }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error("Rating route error:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
