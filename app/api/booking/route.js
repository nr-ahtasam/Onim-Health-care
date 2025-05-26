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