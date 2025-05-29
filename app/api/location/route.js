import { getAuthHeaders } from "@/lib/wpAuth";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const { baseUrl, headers } = getAuthHeaders();
    const res = await fetch(`${baseUrl}/wp/v2/location`, { headers });
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);
    return NextResponse.json(data);
  } catch (err) {
    console.error("Fetch locations failed:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
