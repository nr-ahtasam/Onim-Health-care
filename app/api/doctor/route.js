import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const location = searchParams.get("location");
    const disease = searchParams.get("disease");
    const search = searchParams.get("search");
    // const page = searchParams.get("page") || 1;
    const page = searchParams.get("page");
    const perPage = searchParams.get("per_page");
    const user = process.env.WP_API_USER;
    const pass = process.env.WP_API_PASS;
    const basicAuth = Buffer.from(`${user}:${pass}`).toString("base64");

    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (disease) params.append("disease", disease);
    if (search) params.append("search", search);
    if (page) params.append("page", page);
    if (perPage) params.append("per_page", perPage);

    const url = `https://omni.fmmethod.online/wp-json/doctor-finder/v1/doctors?${params.toString()}`;

    const wpResponse = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/json",
      },
    });

    const data = await wpResponse.json();

    if (!wpResponse.ok) {
      return NextResponse.json(
        { message: data.message || "Failed to fetch doctors" },
        { status: wpResponse.status }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("API doctor route error:", error);
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
