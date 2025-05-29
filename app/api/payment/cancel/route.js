import { NextResponse } from "next/server";

export async function POST() {
  console.log("Payment Cancelled Callback Received");
  return NextResponse.redirect(new URL("/?status=cancelled", process.env.NEXT_PUBLIC_SITE_URL), 302);
}