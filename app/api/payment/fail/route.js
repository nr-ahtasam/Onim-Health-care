import { NextResponse } from "next/server";

export async function POST() {
  console.log("Payment Failed Callback Received");
  return NextResponse.redirect(new URL("/book-appointment?status=Failed", process.env.NEXT_PUBLIC_SITE_URL), 302);
}