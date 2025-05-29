import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  console.log("IPN Received:", data);

  if (data.status === "VALID") {
    console.log("Payment Validated Successfully");
    // Update booking status in your database here
  } else {
    console.log("Payment Validation Failed");
  }

  return NextResponse.json({ status: "received" }, { status: 200 });
}