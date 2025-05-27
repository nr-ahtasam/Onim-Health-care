"use client";
import { getStoredPatient } from "@/lib/storage";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import Header from "./Header";

export default function Overview() {
  const patient = getStoredPatient();
  const { display_name, email, user_id, acf_fields } = patient || {};
  const { age, blood_group, height_m, weight_kg, profile_picture_url } =
    acf_fields || {};
  const [date, setDate] = useState(new Date());
  return (
    <div className="lg:p-4 w-full   sm:p-6 bg-white min-h-screen  overflow-x-hidden">
      {/* Top bar */}
      <Header />

      {/* Main content */}
      <UserInfo />
      {/* Calendar and Appointments */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-8">
        <div className="bg-white rounded-xl shadow p-4 lg:p-6 w-full lg:max-w-[520px]">
          <div className="font-semibold mb-2">Upcoming Appointments</div>
          <Calendar
            // Remove value/onChange to make it read-only
            className="border-2 w-full cursor-default custom-calendar"
            tileClassName={({ date: d }) => {
              const isEarliest =
                earliestDate &&
                d.toDateString() === earliestDate.toDateString();
              const isFuture = futureDates.some(
                (fd) => fd.toDateString() === d.toDateString()
              );

              if (isEarliest)
                return "bg-blue-500 text-white rounded-full !important";
              if (isFuture)
                return "bg-green-200 text-black font-semibold rounded-full";
              return "";
            }}
          />

          {/* Color Legend */}
          <div className="mt-4 text-sm flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span>Yellow = Today</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
              <span>Blue = Next Appointment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-green-200 rounded-full"></span>
              <span>Green = Future Appointments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-xs text-gray-400 text-center">
        © Omni Health Care's Patient Portal Version 1.0. Made by Rubytech
      </div>
    </div>
  );
}
