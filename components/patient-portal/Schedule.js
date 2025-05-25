"use client";

import { useState } from "react";
import AppointmentModal from "./AppoinmentModal";
import Header from "./Header";

export default function AppointmentsTable() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Example data
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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="p-4 md:p-6 lg:p-8">
        {/* Appointments Table */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 md:p-6">
            <div className="font-semibold text-lg md:text-xl text-gray-800 mb-4">
              Appointments
            </div>

            {/* Mobile View - Cards */}
            <div className="md:hidden space-y-4">
              {appointments.map((appointment, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-lg p-4 space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-gray-900">
                        {appointment.type}
                      </div>
                      <div className="text-xs text-gray-500">
                        {appointment.date} at {appointment.time}
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full">
                      {appointment.status}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <span className="text-gray-500 w-20">Location:</span>
                      <span className="text-gray-900">
                        {appointment.location}, {appointment.city}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-gray-500 w-20">Doctor:</span>
                      <span className="text-gray-900">
                        {appointment.doctor}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition"
                      onClick={() => setSelectedAppointment(appointment)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View - Table */}
            <div className="hidden md:block">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Appointment Type
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Doctor
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {appointments.map((appointment, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {appointment.type}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {appointment.date}
                          </div>
                          <div className="text-sm text-gray-500">
                            {appointment.time}
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {appointment.location}
                          </div>
                          <div className="text-sm text-gray-500">
                            {appointment.city}
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {appointment.doctor}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full">
                            {appointment.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          <button
                            className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-600 transition"
                            onClick={() => setSelectedAppointment(appointment)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-500">
                Viewing {appointments.length} of {appointments.length}
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
                  disabled
                >
                  Previous
                </button>
                <button className="px-3 py-1.5 text-sm bg-gray-900 text-white rounded-lg">
                  1
                </button>
                <button className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700">
                  2
                </button>
                <button className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700">
                  3
                </button>
                <span className="text-gray-500">...</span>
                <button className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700">
                  67
                </button>
                <button className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <AppointmentModal
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
        />

        {/* Footer */}
        <div className="mt-8 text-xs text-gray-400 text-center">
          © Omni Health Care's Patient Portal Version 1.0. Made by Rubytech
        </div>
      </div>
    </div>
  );
}
