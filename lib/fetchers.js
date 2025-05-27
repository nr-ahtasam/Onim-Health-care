async function handleApiResponse(res) {
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.message || "Failed to fetch data");
  }
  return data;
}

export async function fetchBookingById(id) {
  const res = await fetch(`/api/booking/${id}`);
  return handleApiResponse(res);
}

export async function fetchDoctorById(id) {
  const res = await fetch(`/api/doctor/${id}`);
  return handleApiResponse(res);
}

export async function fetchLocationById(id) {
  const res = await fetch(`/api/location/${id}`);
  return handleApiResponse(res);
}

export async function fetchChamberById(id) {
  const res = await fetch(`/api/chamber/${id}`);
  return handleApiResponse(res);
}
