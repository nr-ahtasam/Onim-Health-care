export function getFutureAppointmentDates(bookings = []) {
  const now = new Date();

  return bookings
    .map((booking) => {
      const raw = booking.acf?.["date_&_time"];
      if (!raw) return null;

      const parsed = new Date(raw.replace(" ", "T"));
      return isNaN(parsed.getTime()) || parsed <= now ? null : parsed;
    })
    .filter(Boolean)
    .sort((a, b) => a - b); // sorted future dates
}
