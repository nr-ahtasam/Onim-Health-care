"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { LOCATIONS } from "@/constants/locations";
import { useFetchBookings } from "@/hooks/useFetchBookings";
import AppointmentsTableSkeleton from "@/lib/AppointmentsTableSkeleton";
import { useEffect, useState } from "react";
import AppointmentModal from "./AppoinmentModal";
import Header from "./Header";

export default function AppointmentsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(100);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { bookings, loading, error } = useFetchBookings({
    page: currentPage,
    perPage: perPage,
  });
  const capitalize = (str) =>
    str[0]?.toUpperCase() + str.slice(1).toLowerCase();
  const getLocationNameById = (id) =>
    LOCATIONS.find((loc) => loc.id === id)?.name;
  useEffect(() => {
    if (!bookings || bookings.length === 0) return;

    const prepareAppointments = async () => {
      setIsProcessing(true);
      try {
        const results = await Promise.all(
          bookings.map(async (booking) => {
            const doctorId = booking.acf?.doctor?.[0];

            let doctorName = "N/A";

            if (doctorId) {
              try {
                const res = await fetch(`/api/doctor/${doctorId}`);
                const doctorData = await res.json();
                doctorName = doctorData?.title?.rendered || doctorName;
              } catch (err) {
                console.error(`Failed to fetch doctor ${doctorId}`, err);
              }
            }

            // Format date and time
            const fullDate = booking.acf?.["date_&_time"] || "";
            const appointmentType =
              String(booking.acf?.appointment_type || "").split(":")?.[1] ||
              "N/A";
            const [date, time] = fullDate.split(" ");

            return {
              type: appointmentType,
              date: date || "N/A",
              time: time || "N/A",
              location:
                getLocationNameById(booking.acf?.location?.[0]) || "N/A",
              city: getLocationNameById(booking.acf?.location?.[0]) || "N/A",
              doctor: doctorName,
              status: capitalize(booking.acf?.status) || "Pending",
            };
          })
        );

        setAppointments(results);
      } finally {
        setIsProcessing(false);
      }
    };

    prepareAppointments();
  }, [bookings]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading || isProcessing) return <AppointmentsTableSkeleton />;
  if (error)
    return (
      <div className="p-4 text-red-600">
        Error loading services: {error.message}
      </div>
    );
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
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(currentPage - 1)}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationNext
                      onClick={() => handlePageChange(currentPage + 1)}
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
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
