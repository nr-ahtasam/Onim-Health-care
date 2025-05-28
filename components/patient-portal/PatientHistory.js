"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import AppointmentsTableSkeleton from "@/lib/AppointmentsTableSkeleton";
import { formatBooking } from "@/lib/formatBooking";
import { useEffect, useState } from "react";
import AppointmentModal from "./AppoinmentModal";
import Header from "./Header";
import { useFetchBookings } from "@/hooks/useFetchBookings";

export default function PatientHistory() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(100);
  const [isProcessing, setIsProcessing] = useState(false);

  const [appointments, setAppointments] = useState([]);
  const { bookings, loading, error } = useFetchBookings({
    page: currentPage,
    perPage: perPage,
  });

    useEffect(() => {
    if (!bookings || bookings.length === 0) return;

    const prepareAppointments = async () => {
      setIsProcessing(true);
      try {
        const results = await Promise.all(bookings.map(formatBooking));
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
        Error loading history: {error.message}
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
                    {/* <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full">
                      {appointment.status}
                    </span> */}

                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full
                        ${
                          appointment.status === "Pending"
                            ? "text-yellow-700 bg-yellow-100"
                            : appointment.status === "Confirmed"
                            ? "text-blue-700 bg-blue-100"
                            : appointment.status === "Completed"
                            ? "text-green-700 bg-green-100"
                            : "text-gray-600 bg-gray-100"
                        }
                      `}
                    >
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

                  <div className="flex gap-2 pt-2">
                    <button
                      className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition cursor-pointer"
                      onClick={() => setSelectedAppointment(appointment)}
                    >
                      Upload
                    </button>
                    <button
                      className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition cursor-pointer"
                      onClick={() => setSelectedAppointment(appointment)}
                    >
                      View
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
                        Type
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
                          {/* <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full">
                            {appointment.status}
                          </span> */}


                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full
                              ${
                                appointment.status === "Pending"
                                  ? "text-yellow-700 bg-yellow-100"
                                  : appointment.status === "Confirmed"
                                  ? "text-blue-700 bg-blue-100"
                                  : appointment.status === "Completed"
                                  ? "text-green-700 bg-green-100"
                                  : "text-gray-600 bg-gray-100"
                              }
                            `}
                          >
                            {appointment.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          <div className="flex gap-2">
                            {appointment.status === "Completed" ? (
                              <button
                                className="bg-blue-500 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-blue-600 transition cursor-pointer"
                                onClick={() => setSelectedAppointment(appointment)}
                              >
                                Upload
                              </button>
                            ) : (
                              <button
                                className="bg-blue-500 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-blue-600 transition cursor-pointer"
                                onClick={() => setSelectedAppointment(appointment)}
                              >
                                View
                              </button>
                            )}
                          </div>
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
          showFileActions={true}
        />

        {/* Footer */}
        <div className="mt-8 text-xs text-gray-400 text-center">
          © Omni Health Care's Patient Portal Version 1.0. Made by Rubytech
        </div>
      </div>
    </div>
  );
}
