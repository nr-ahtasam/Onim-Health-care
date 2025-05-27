"use client";
import { getStoredPatient } from "@/lib/storage";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import Header from "./Header";
import UserInfo from "./Overview/UserInfo";

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
            onChange={setDate}
            value={date}
            className="border-2 w-full"
            tileClassName={({ date: d }) =>
              d.toDateString() === date.toDateString()
                ? "bg-blue-500 text-white rounded-full"
                : ""
            }
          />
          <div className="mt-4 text-sm text-gray-500">
            Selected date: {date.toDateString()}
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
