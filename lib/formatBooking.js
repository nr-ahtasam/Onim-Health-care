import { fetchDoctorById, fetchLocationById, fetchChamberById } from "@/lib/fetchers";
import { capitalize } from "@/lib/utils";

export async function formatBooking(booking) {
  const acf = booking.acf || {};

  const doctorId = acf?.doctor?.[0];
  const locationId = acf?.location?.[0];
  const chamberId = acf?.chamber?.[0];

  let doctorName = "N/A";
  let locationName = "N/A";
  let chamberName = "N/A";

  try {
    if (doctorId) {
      const doctorData = await fetchDoctorById(doctorId);
      doctorName = doctorData?.title?.rendered || doctorName;
    }
  } catch (err) {
    console.error(`Failed to fetch doctor ${doctorId}`, err);
  }

  try {
    if (locationId) {
      const locationData = await fetchLocationById(locationId);
      locationName = locationData?.title?.rendered || locationName;
    }
  } catch (err) {
    console.error(`Failed to fetch location ${locationId}`, err);
  }

  try {
    if (chamberId) {
      const chamberData = await fetchChamberById(chamberId);
      chamberName = chamberData?.title?.rendered || chamberName;
    }
  } catch (err) {
    console.error(`Failed to fetch chamber ${chamberId}`, err);
  }

  const fullDate = acf?.["date_&_time"] || "";
  const [date, time] = fullDate.split(" ");
  const bookingType = (acf?.appointment_type || "").split(":")?.[1] || "N/A";

  return {
    bookingId: booking.id,
    type: bookingType,
    date: date || "N/A",
    time: time || "N/A",
    location: chamberName,
    city: locationName,
    doctorId: doctorId,
    doctor: doctorName,
    status: capitalize(acf?.status) || "Pending",
    virtualMeetLink: acf?.virtual_meet_link || "N/A",
  };
}
