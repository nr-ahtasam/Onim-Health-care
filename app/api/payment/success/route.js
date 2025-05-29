import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.formData();
  const formDataObject = {};
  for (let [key, value] of data.entries()) {
    formDataObject[key] = value;
  }
  console.log("Payment Success Callback Received:", formDataObject);

  // Example: Log specific fields
  console.log("Transaction ID:", formDataObject.tran_id);
  console.log("Validation ID:", formDataObject.val_id);
  console.log("Amount:", formDataObject.amount);
  console.log("Status:", formDataObject.status);

  return NextResponse.redirect(new URL("/?status=success", process.env.NEXT_PUBLIC_SITE_URL), 302);
}