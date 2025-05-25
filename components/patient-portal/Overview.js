"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import { FiUser } from "react-icons/fi";
import Header from "./Header";

export default function Overview() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="lg:p-4 w-full   sm:p-6 bg-white min-h-screen  overflow-x-hidden">
      {/* Top bar */}
      <Header />

      {/* Main content */}
      <div className="flex flex-col lg:flex-row w-[100%] gap-4 lg:gap-8">
        {/* Profile Card */}
        <div className="w-full lg:w-[60%] bg-white rounded-xl shadow p-4 lg:p-8 flex flex-col items-center">
          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
            <FiUser className="text-4xl lg:text-5xl text-gray-400" />
          </div>
          <div className="font-semibold text-base lg:text-lg mb-1">
            Lurch Schpellchek
          </div>
          <div className="text-gray-400 text-xs lg:text-sm mb-4 lg:mb-6">
            reply@email.com
          </div>
          <div className="bg-[#F3F8FB] rounded-lg w-full py-3 lg:py-4 px-2 grid grid-cols-2 gap-y-3 lg:gap-y-4 text-center">
            <div>
              <div className="font-bold text-base lg:text-lg">26 Years</div>
              <div className="text-xs text-gray-400">Age</div>
            </div>
            <div>
              <div className="font-bold text-base lg:text-lg">0 +</div>
              <div className="text-xs text-gray-400">Blood Group</div>
            </div>
            <div>
              <div className="font-bold text-base lg:text-lg">1.56</div>
              <div className="text-xs text-gray-400">Height (m)</div>
            </div>
            <div>
              <div className="font-bold text-base lg:text-lg">58</div>
              <div className="text-xs text-gray-400">Weight (kg)</div>
            </div>
          </div>
        </div>

        {/* Right side cards */}
        <div className="w-full lg:w-[40%] flex flex-col gap-3 lg:gap-4">
          <div className="flex flex-col grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
            <ActionCard
              color="bg-[#4DC6F6]"
              title="Appointments"
              subtitle="Dr. Hans Down"
              time="10:00 - 11:00AM"
              icon={<FiUser />}
            />
            <ActionCard
              color="bg-[#5DD1C6]"
              title="View History"
              subtitle="Penny Tool"
              time="Patient Files"
              icon={<FiUser />}
            />
            <ActionCard
              color="bg-[#2B7BDB]"
              title="Rate Doctors"
              subtitle="Eric Widget"
              time="Completed Appointments"
              icon={<FiUser />}
            />
            <ActionCard
              color="bg-[#1CB5C9]"
              title="Request Update"
              subtitle="Justin Case"
              time="Profile Update"
              icon={<FiUser />}
            />
          </div>
        </div>
      </div>

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

// ActionCard component
function ActionCard({ color, title, subtitle, time, icon }) {
  return (
    <div
      className={`rounded-lg ${color} p-3 lg:p-4 flex items-center gap-3 lg:gap-4 shadow hover:shadow-lg transition-shadow duration-200`}
    >
      <div className="bg-white bg-opacity-30 rounded-full p-2 text-white text-xl lg:text-2xl flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-white text-sm lg:text-base truncate">
          {title}
        </div>
        <div className="text-white text-xs truncate">{subtitle}</div>
        <div className="text-white text-xs truncate">{time}</div>
      </div>
      <div className="ml-auto text-white text-xl lg:text-2xl flex-shrink-0">
        →
      </div>
    </div>
  );
}
