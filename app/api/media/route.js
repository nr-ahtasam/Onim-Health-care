import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ message: "No file provided" }, { status: 400 });
    }

    const USER = process.env.WP_API_USER;
    const PASS = process.env.WP_API_PASS;
    const AUTH = Buffer.from(`${USER}:${PASS}`).toString("base64");

    const res = await fetch("https://hub.omnihealthcare.com.bd/wp-json/wp/v2/media", {
      method: "POST",
      headers: {
        Authorization: `Basic ${AUTH}`,
        "Content-Disposition": `attachment; filename="${file.name}"`,
        "Content-Type": file.type,
      },
      body: file.stream(),
      duplex: "half",
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Upload failed");

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
