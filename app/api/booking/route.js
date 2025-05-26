import { NextResponse } from 'next/server';
import { getAuthHeaders } from '@/lib/wpAuth';

export async function POST(request) {
  try {
    const body = await request.json();
    const { baseUrl, headers } = getAuthHeaders();

    const wpRes = await fetch(
      `${baseUrl}/wp/v2/booking`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      }
    );

    const data = await wpRes.json();
    if (!wpRes.ok) {
      console.error('WP error:', data);
      return NextResponse.json(
        { message: data.message || 'Failed to create appointment' },
        { status: wpRes.status }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error('Appointment creation error:', err);
    return NextResponse.json(
      { message: err.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const { baseUrl, headers } = getAuthHeaders();
    const { searchParams } = new URL(req.url);

    const patient = searchParams.get("patient");
    const page = searchParams.get("page") || 1;
    const per_page = searchParams.get("per_page") || 10;

    if (!patient) {
      return NextResponse.json(
        { message: "Missing patient ID" },
        { status: 400 }
      );
    }

    const wpRes = await fetch(
      `${baseUrl}/wp/v2/booking?patient=${patient}&page=${page}&per_page=${per_page}`,
      {
        method: 'GET',
        headers,
      }
    );

    const data = await wpRes.json();

    if (!wpRes.ok) {
      console.error('WP fetch error:', data);
      return NextResponse.json(
        { message: data.message || 'Failed to fetch bookings' },
        { status: wpRes.status }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error('Booking fetch error:', err);
    return NextResponse.json(
      { message: err.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}