import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  try {
    const id = await params.id;

    const USER = process.env.WP_API_USER;
    const PASS = process.env.WP_API_PASS;
    const AUTH = Buffer.from(`${USER}:${PASS}`).toString("base64");

    const res = await fetch(
      `https://omni.fmmethod.online/wp-json/wp/v2/media/${id}`,
      {
        headers: {
          Authorization: `Basic ${AUTH}`,
        },
      }
    );

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Fetch failed");

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
