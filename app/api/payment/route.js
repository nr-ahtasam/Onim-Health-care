import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  const { amount, customer } = await request.json();

  const bodyData = {
    store_id: process.env.SSLC_STORE_ID,
    store_passwd: process.env.SSLC_STORE_PASS,
    total_amount: amount,
    currency: "BDT",
    cus_name: customer?.name || '',
    cus_email: customer?.email || '',
    cus_phone: customer?.phone || '',
    cus_add1: '',
    cus_city: '',
    cus_country: "Bangladesh",
    shipping_method: "NO",
    product_name: 'Healthcare Service',
    product_category: "Subscription",
    product_profile: "general",
    tran_id: `TXN_${Date.now()}${Math.floor(Math.random() * 1000000)}`,
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/payment/success`,
    fail_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/payment/fail`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/payment/cancel`,
    ipn_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/payment/ipn`,
  };

  const urlEncodedBody = new URLSearchParams(bodyData).toString();

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: urlEncodedBody,
    redirect: "follow",
  };

  try {
    const url = process.env.SSLC_SANDBOX === 'true'
      ? process.env.SSLC_SANDBOX_URL
      : process.env.SSLC_PRODUCTION_URL;

    if (!url) {
      throw new Error("SSLCommerz URL is not defined in environment variables");
    }

    new URL(url); // Validate URL

    const response = await fetch(url, requestOptions);
    const result = await response.json();

    if (result.status === "SUCCESS") {
      return NextResponse.json({ GatewayPageURL: result.GatewayPageURL });
    } else {
      throw new Error(result.failedreason || "Payment initiation failed");
    }
  } catch (error) {
    console.error("SSLCommerz Error:", error.message);
    return NextResponse.json({ error: error.message || "Payment initiation failed" }, { status: 500 });
  }
}