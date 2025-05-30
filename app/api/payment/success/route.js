import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.formData();
  const formDataObject = {};
  for (let [key, value] of data.entries()) {
    formDataObject[key] = value;
  }

  const url = new URL("/book-appointment", process.env.NEXT_PUBLIC_SITE_URL);
  url.searchParams.set("status", formDataObject.status);
  url.searchParams.set("amount", formDataObject.amount);
  url.searchParams.set("tran_id", formDataObject.tran_id);

  return NextResponse.redirect(url, 302);
}