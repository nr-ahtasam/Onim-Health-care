async function handleApiResponse(res) {
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.message || "Failed to fetch data");
  }
  return data;
}

// Individual fetchers
export const fetchBookingById = async (id) =>
  handleApiResponse(await fetch(`/api/booking/${id}`));

export const fetchDoctorById = async (id) =>
  handleApiResponse(await fetch(`/api/doctor/${id}`));

export const fetchLocationById = async (id) =>
  handleApiResponse(await fetch(`/api/location/${id}`));

export const fetchChamberById = async (id) =>
  handleApiResponse(await fetch(`/api/chamber/${id}`));

// Bulk fetchers
export const fetchBookings = async (patient, page = 1, perPage = 10) =>
  handleApiResponse(await fetch(`/api/booking?patient=${patient}&page=${page}&per_page=${perPage}`));

export const fetchDoctors = async (page = 1, perPage = 10) =>
  handleApiResponse(await fetch(`/api/doctor/v2?page=${page}&per_page=${perPage}`));

export const fetchLocations = async (page = 1, perPage = 10) =>
  handleApiResponse(await fetch(`/api/location?page=${page}&per_page=${perPage}`));

export const fetchChambers = async (page = 1, perPage = 10) =>
  handleApiResponse(await fetch(`/api/chamber?page=${page}&per_page=${perPage}`));
