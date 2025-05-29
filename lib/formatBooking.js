import { formatDateTime } from "./formatDateTime";
import { capitalize, parseId } from "@/lib/utils";

export const formatBooking = (booking, doctorMap, locationMap, chamberMap) => {
  const acf = booking.acf || {};
  const doctorId = parseId(acf?.doctor);
  const locationId = parseId(acf?.location);
  const chamberId = parseId(acf?.chamber);
  const { date, time } = formatDateTime(acf?.["date_&_time"]);
  const bookingType = (acf?.appointment_type || "").split(":")?.[1]?.trim() || "N/A";

  return {
    bookingId: booking.id,
    fileId: parseId(acf?.file),
    type: bookingType,
    date,
    time,
    location: chamberMap[chamberId] || "N/A",
    city: locationMap[locationId] || "N/A",
    doctorId,
    doctor: doctorMap[doctorId] || "N/A",
    status: capitalize(acf?.status) || "Pending",
    virtualMeetLink: acf?.virtual_meet_link,
  };
};
