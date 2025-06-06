import { getAuthHeaders } from "@/lib/wpAuth";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ message: "Missing doctor ID" }, { status: 400 });
    }

    const { baseUrl, headers } = getAuthHeaders();
    const url = `${baseUrl}/wp/v2/doctor/${id}`;

    const wpResponse = await fetch(url, {
      method: "GET",
      headers,
    });

    const data = await wpResponse.json();

    if (!wpResponse.ok) {
      return NextResponse.json(
        { message: data.message || "Failed to fetch doctor" },
        { status: wpResponse.status }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("API doctor [id] route error:", error);
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
