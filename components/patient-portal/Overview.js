"use client";
import "react-calendar/dist/Calendar.css"; // Import default styles
import Header from "./Header";
import UserInfo from "./Overview/UserInfo";
import AppointmentCalendar from "./AppointmentCalender";

export default function Overview() {
  return (
    <div className="lg:p-4 w-full   sm:p-6 bg-white min-h-screen  overflow-x-hidden">
      {/* Top bar */}
      <Header />

      {/* Main content */}
      <UserInfo />
      {/* Calendar and Appointments */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-8 ml-[5%]">
        <AppointmentCalendar />
      </div>

      {/* Footer */}
      <div className="mt-8 text-xs text-gray-400 text-center">
        © Omni Health Care's Patient Portal Version 1.0. Made by Rubytech
      </div>
    </div>
  );
}
