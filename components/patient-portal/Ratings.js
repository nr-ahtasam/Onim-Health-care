"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useFetchBookings } from "@/hooks/useFetchBookings";
import AppointmentsTableSkeleton from "@/lib/AppointmentsTableSkeleton";
import { formatBooking } from "@/lib/formatBooking";
import { useEffect, useState } from "react";
import AppointmentModal from "./AppoinmentModal";
import Header from "./Header";
import RateDoctorModal from "./RateDoctorModal";

export default function Ratings() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedAppointmentToRate, setSelectedAppointmentToRate] =
    useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(100);
  const [isProcessing, setIsProcessing] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
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
  const handleRatingSubmit = () => {
    setSelectedAppointmentToRate(null);
    setRefreshKey((prev) => prev + 1); // trigger re-fetch
  };

  if (loading || isProcessing) return <AppointmentsTableSkeleton />;
  if (error)
    return (
      <div className="p-4 text-red-600">
        Error loading ratings: {error.message}
      </div>
    );
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-[#FAFBFC] min-h-screen">
      {/* Top bar */}
      <Header />

      {/* Appointments Table */}
      <div className="bg-white rounded-xl shadow p-4 md:p-6 max-w-5xl mx-auto">
        <div className="font-semibold text-lg md:text-xl mb-4">
          Doctor's Rating
        </div>

        {/* Mobile View - Cards */}
        <div className="md:hidden space-y-4">
          {appointments.map((a, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-lg p-4 space-y-3"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="text-sm font-medium text-gray-900">
                    {a.type}
                  </div>
                  <div className="text-xs text-gray-500">
                    {a.date} at {a.time}
                  </div>
                </div>
                {/* <span className="text-green-500 font-medium text-sm">
                  {a.status}
                </span> */}

                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full
                    ${
                      a.status === "Pending"
                        ? "text-yellow-700 bg-yellow-100"
                        : a.status === "Confirmed"
                        ? "text-blue-700 bg-blue-100"
                        : a.status === "Completed"
                        ? "text-green-700 bg-green-100"
                        : "text-gray-600 bg-gray-100"
                    }
                  `}
                >
                  {a.status}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <span className="text-gray-500 w-20">Location:</span>
                  <span className="text-gray-900">
                    {a.location}, {a.city}
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-gray-500 w-20">Doctor:</span>
                  <span className="text-gray-900">{a.doctor}</span>
                </div>
              </div>

              <div className="pt-2">
                {a.status === "Completed" ? (
                  <button
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition cursor-pointer"
                    onClick={() => setSelectedAppointmentToRate(a)}
                  >
                    Rate Doctor
                  </button>
                ) : a.status === "Pending" ? (
                  <button
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition cursor-pointer"
                    onClick={() => setSelectedAppointment(a)}
                  >
                    View
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Table */}
        <div className="hidden md:block">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-[#F3F8FB] text-gray-500">
                  <th className="py-3 px-4 font-medium">Appointment Type</th>
                  <th className="py-3 px-4 font-medium">Date & Time</th>
                  <th className="py-3 px-4 font-medium">Location</th>
                  <th className="py-3 px-4 font-medium">Doctor</th>
                  <th className="py-3 px-4 font-medium">Status</th>
                  <th className="py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="py-4 px-4">{a.type}</td>
                    <td className="py-4 px-4">
                      <div>{a.date}</div>
                      <div className="text-xs text-gray-400">{a.time}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div>{a.location}</div>
                      <div className="text-xs text-gray-400">{a.city}</div>
                    </td>
                    <td className="py-4 px-4">{a.doctor}</td>
                    <td className="py-4 px-4">
                      {/* <span className="text-green-500 font-medium">
                        {a.status}
                      </span> */}

                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full
                          ${
                            a.status === "Pending"
                              ? "text-yellow-700 bg-yellow-100"
                              : a.status === "Confirmed"
                              ? "text-blue-700 bg-blue-100"
                              : a.status === "Completed"
                              ? "text-green-700 bg-green-100"
                              : "text-gray-600 bg-gray-100"
                          }
                        `}
                      >
                        {a.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      {a.status === "Completed" ? (
                        <button
                          className="bg-blue-500 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-blue-600 transition cursor-pointer"
                          onClick={() => setSelectedAppointmentToRate(a)}
                        >
                          Rate Doctor
                        </button>
                      ) : (
                        <button
                          className="bg-blue-500 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-blue-600 transition cursor-pointer"
                          onClick={() => setSelectedAppointment(a)}
                        >
                          View
                        </button>
                      )}
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

        {/* Modal */}
        <AppointmentModal
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
        />
        <RateDoctorModal
          appointment={selectedAppointmentToRate}
          onClose={() => setSelectedAppointmentToRate(null)}
          onSubmit={handleRatingSubmit}
        />
      </div>

      {/* Footer */}
      <div className="mt-8 text-xs text-gray-400 text-center">
        © Omni Health Care's Patient Portal Version 1.0. Made by Rubytech
      </div>
    </div>
  );
}
