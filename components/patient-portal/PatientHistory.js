"use client";

import { useState } from "react";
import AppointmentModal from "./AppoinmentModal";
import Header from "./Header";

export default function PatientHistory() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const appointments = [
    {
      type: "Offline",
      date: "13/05/2025",
      time: "7:00 pm",
      location: "York Hospital",
      city: "Dhaka",
      doctor: "Ataur Rahman",
      status: "Confirmed",
    },
    {
      type: "Offline",
      date: "13/05/2025",
      time: "7:00 pm",
      location: "York Hospital",
      city: "Dhaka",
      doctor: "Ataur Rahman",
      status: "Confirmed",
    },
    {
      type: "Offline",
      date: "13/05/2025",
      time: "7:00 pm",
      location: "York Hospital",
      city: "Dhaka",
      doctor: "Ataur Rahman",
      status: "Confirmed",
    },
    {
      type: "Offline",
      date: "13/05/2025",
      time: "7:00 pm",
      location: "York Hospital",
      city: "Dhaka",
      doctor: "Ataur Rahman",
      status: "Confirmed",
    },
  ];

  return (
    <div className="p-4 sm:p-8 bg-[#FAFBFC] min-h-screen mx-auto ">
      {/* Top bar */}
      <Header />

      {/* Appointments Table */}
      <div className="bg-white rounded-xl shadow p-2 sm:p-6">
        <div className="font-semibold text-base sm:text-xl mb-3 sm:mb-4 px-2 sm:px-0">
          Appointments
        </div>
        <div className="relative">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full text-sm text-left table-fixed">
                  <thead className="bg-[#F3F8FB]">
                    <tr className="text-gray-500">
                      <th className="py-2 sm:py-3 px-2 sm:px-4 font-medium w-[80px] sm:w-[100px]">
                        Type
                      </th>
                      <th className="py-2 sm:py-3 px-2 sm:px-4 font-medium w-[120px] sm:w-[150px]">
                        Date & Time
                      </th>
                      <th className="py-2 sm:py-3 px-2 sm:px-4 font-medium hidden sm:table-cell w-[180px] sm:w-[200px]">
                        Location
                      </th>
                      <th className="py-2 sm:py-3 px-2 sm:px-4 font-medium hidden md:table-cell w-[120px] sm:w-[150px]">
                        Doctor
                      </th>
                      <th className="py-2 sm:py-3 px-2 sm:px-4 font-medium w-[80px] sm:w-[100px]">
                        Status
                      </th>
                      <th className="py-2 sm:py-3 px-2 sm:px-4 font-medium w-[160px] sm:w-[200px]">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((a, i) => (
                      <tr key={i} className="border-b last:border-b-0">
                        <td className="py-2 sm:py-4 px-2 sm:px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <span className="sm:hidden text-xs text-gray-500">
                              Type:
                            </span>
                            <span className="font-medium text-xs sm:text-sm">
                              {a.type}
                            </span>
                          </div>
                        </td>
                        <td className="py-2 sm:py-4 px-2 sm:px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <span className="sm:hidden text-xs text-gray-500">
                              Date & Time:
                            </span>
                            <div>
                              <div className="font-medium text-xs sm:text-sm">
                                {a.date}
                              </div>
                              <div className="text-[10px] sm:text-xs text-gray-400">
                                {a.time}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-2 sm:py-4 px-2 sm:px-4 hidden sm:table-cell whitespace-nowrap">
                          <div>
                            <div className="font-medium text-xs sm:text-sm">
                              {a.location}
                            </div>
                            <div className="text-[10px] sm:text-xs text-gray-400">
                              {a.city}
                            </div>
                          </div>
                        </td>
                        <td className="py-2 sm:py-4 px-2 sm:px-4 hidden md:table-cell whitespace-nowrap">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <span className="sm:hidden text-xs text-gray-500">
                              Doctor:
                            </span>
                            <span className="font-medium text-xs sm:text-sm">
                              {a.doctor}
                            </span>
                          </div>
                        </td>
                        <td className="py-2 sm:py-4 px-2 sm:px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <span className="sm:hidden text-xs text-gray-500">
                              Status:
                            </span>
                            <span className="text-green-500 font-medium text-xs sm:text-sm">
                              {a.status}
                            </span>
                          </div>
                        </td>
                        <td className="py-2 sm:py-4 px-2 sm:px-4 whitespace-nowrap">
                          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                            <button
                              className="bg-blue-500 text-white px-2 sm:px-4 py-1 sm:py-1.5 rounded-lg font-medium hover:bg-blue-600 transition text-[10px] sm:text-sm w-full sm:w-auto"
                              onClick={() => setSelectedAppointment(a)}
                            >
                              upload
                            </button>
                            <button
                              className="bg-blue-500 text-white px-2 sm:px-4 py-1 sm:py-1.5 rounded-lg font-medium hover:bg-blue-600 transition text-[10px] sm:text-sm w-full sm:w-auto"
                              onClick={() => setSelectedAppointment(a)}
                            >
                              View
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Modal */}
          <AppointmentModal
            appointment={selectedAppointment}
            onClose={() => setSelectedAppointment(null)}
            showFileActions={true}
          />
        </div>

        {/* Pagination */}
        <div className="hidden sm:flex flex-col items-center mt-6 gap-4 sm:flex-row sm:justify-between sm:items-center">
          <div className="bg-[#F3F8FB] px-3 py-2 rounded text-gray-500 text-xs sm:text-sm text-center w-full sm:w-auto sm:text-left mb-4 sm:mb-0">
            Viewing 10 of 11
          </div>
          <div className="flex items-center gap-1 flex-wrap justify-center w-full sm:w-auto sm:gap-2 sm:justify-start">
            <button
              className="text-gray-400 px-2 py-1 rounded text-xs sm:text-sm"
              disabled
            >
              &larr; Previous
            </button>
            <button className="bg-gray-900 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm">
              1
            </button>
            <button className="text-gray-500 px-2 py-1 rounded text-xs sm:text-sm">
              2
            </button>
            <button className="text-gray-500 px-2 py-1 rounded text-xs sm:text-sm">
              3
            </button>
            <span className="text-gray-400 text-xs sm:text-sm">...</span>
            <button className="text-gray-500 px-2 py-1 rounded text-xs sm:text-sm">
              67
            </button>
            <button className="text-gray-500 px-2 py-1 rounded text-xs sm:text-sm">
              68
            </button>
            <button className="text-gray-400 px-2 py-1 rounded text-xs sm:text-sm">
              Next &rarr;
            </button>
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
