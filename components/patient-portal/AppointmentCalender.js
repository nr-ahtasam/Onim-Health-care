"use client";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getFutureAppointmentDates } from "@/lib/getFutureBooking";
import { useFetchBookings } from "@/hooks/useFetchBookings";
import { FiCalendar } from "react-icons/fi";
import CalendarSkeleton from "@/lib/CalenderSkeleton";

const AppointmentCalendar = () => {
  const { bookings, loading, error } = useFetchBookings();
  const [futureDates, setFutureDates] = useState([]);
  const [earliestDate, setEarliestDate] = useState(null);

  useEffect(() => {
    if (!loading && bookings?.length) {
      const future = getFutureAppointmentDates(bookings);
      setFutureDates(future);
      setEarliestDate(future[0] || null);
    }
  }, [bookings, loading]);

  if (loading) return <CalendarSkeleton />;
  if (error) return <div className="p-6 text-red-600">Error: {error.message}</div>;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 w-full lg:max-w-[520px] border border-gray-100">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
         <FiCalendar className="text-teal-800" />
         Upcoming Appointments
        </h2>

        <Calendar
          className="border border-gray-100 rounded-xl w-full cursor-default custom-calendar bg-gradient-to-b from-gray-50 to-white p-4"
          tileClassName={({ date: d }) => {
            const isEarliest =
              earliestDate && d.toDateString() === earliestDate.toDateString();
            const isFuture = futureDates.some(
              (fd) => fd.toDateString() === d.toDateString()
            );

            if (isEarliest) return "next_date rounded-full";
            if (isFuture) return "future_dates rounded-full";
            return "";
          }}
        />
      </div>
      {/* Legend */}
      <div className="flex flex-row mt-4 text-sm justify-between">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_4px_rgba(255,213,79,0.5)]"></span>
          <span className="text-gray-700 font-medium">Today</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 bg-teal-800 rounded-full shadow-[0_0_4px_rgba(0,105,92,0.3)]"></span>
          <span className="text-gray-700 font-medium">Next Appointment</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 bg-teal-100 border border-teal-400 rounded-full shadow-[0_0_4px_rgba(0,105,92,0.1)]"></span>
          <span className="text-gray-700 font-medium">Future Appointments</span>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCalendar;
