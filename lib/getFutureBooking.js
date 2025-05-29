export const getFutureAppointmentDates = (bookings = []) => {
  const now = new Date();

  return bookings
    .map(({ date, time }) => {
      const dateTimeStr = date && time ? `${date} ${time}` : null;
      const parsed = dateTimeStr ? new Date(dateTimeStr) : null;
      return parsed && parsed > now ? parsed : null;
    })
    .filter(Boolean)
    .sort((a, b) => a - b);
};
