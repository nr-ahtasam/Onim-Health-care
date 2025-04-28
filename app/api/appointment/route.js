// app/api/appointment/route.js
import { NextResponse } from 'next/server';

// pull in your WP Basic‐Auth credentials from env
const WP_API_USER = process.env.WP_API_USER;
const WP_API_PASS = process.env.WP_API_PASS;
if (!WP_API_USER || !WP_API_PASS) {
  throw new Error('Missing WP API credentials in environment');
}

export async function POST(request) {

  try {
    
    const basicAuth = Buffer
      .from(`${WP_API_USER}:${WP_API_PASS}`)
      .toString('base64');

    // parse the incoming JSON body
    const body = await request.json();
    const {
      title,
      name,
      email,
      phone,
      service,
      doctor,
      description,
      date,
      location,
      chamber,
    } = body;

    // build URLSearchParams for form‐urlencoded payload
    const form = new URLSearchParams();
    form.append('title', title || `Appointment - ${name || 'New Patient'}`);
    form.append('status', 'draft');

    // ACF fields
    if (name)        form.append('acf[patient_name]', name);
    if (email)       form.append('acf[patient_email]', email);
    if (phone)       form.append('acf[patient_phone]', phone);
    if (description) form.append('acf[description]', description);
    if (date)        form.append('acf[date]', date);
    if (location)    form.append('acf[location]', location);
    if (chamber)     form.append('acf[chamber]', chamber);

    // service can be single or array → always index it
    if (service != null) {
      const arr = Array.isArray(service) ? service : [service];
      arr.forEach((s, i) => {
        form.append(`acf[service][${i}]`, s.toString());
      });
    }

    // same for doctor
    if (doctor != null) {
      const arr = Array.isArray(doctor) ? doctor : [doctor];
      arr.forEach((d, i) => {
        form.append(`acf[doctor][${i}]`, d.toString());
      });
    }

    // proxy the request to WP
    const wpRes = await fetch(
      'https://omni.fmmethod.online/wp-json/wp/v2/appointment',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${basicAuth}`,
        },
        body: form.toString(),
      }
    );

    const data = await wpRes.json();
    if (!wpRes.ok) {
      // console.log(`${WP_API_USER}:${WP_API_PASS}`, 'credentials');
      return NextResponse.json(
        { message: data.message || data.data || `${WP_API_USER}:${WP_API_PASS}` },
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
