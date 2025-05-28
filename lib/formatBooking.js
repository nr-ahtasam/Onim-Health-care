import { fetchDoctorById, fetchLocationById, fetchChamberById } from "@/lib/fetchers";
import { capitalize, formatTo12Hour, parseId } from "@/lib/utils";
import { formatDateTime } from "./formatDateTime";

export const formatBooking = async (booking) => {
  const acf = booking.acf || {};

  const doctorId = parseId(acf?.doctor);
  const locationId = parseId(acf?.location);
  const chamberId = parseId(acf?.chamber);

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

  const {date, time} = formatDateTime(acf?.["date_&_time"]);
  const bookingType = (acf?.appointment_type || "").split(":")?.[1]?.trim() || "N/A";

  return {
    bookingId: booking.id,
    historyId: parseId(acf?.history),
    mediaId: parseId(acf?.file),
    type: bookingType,
    date: date,
    time: time,
    location: chamberName,
    city: locationName,
    doctorId: doctorId,
    doctor: doctorName,
    status: capitalize(acf?.status) || "Pending",
    virtualMeetLink: acf?.virtual_meet_link || "N/A",
  };
}
