"use client";

import { useState } from "react";
import AppointmentsTableSkeleton from "@/lib/AppointmentsTableSkeleton";
import AppointmentTable from "@/components/patient-portal/AppointmentTable";
import AppointmentCardList from "@/components/patient-portal/AppointmentCardList";
import AppointmentsPagination from "@/components/patient-portal/AppointmentsPagination";
import { useBookings } from "@/hooks/useBookings";
import { useLookupMaps } from "@/hooks/useLookupMaps";
import AppointmentModal from "./AppoinmentModal";
import ErrorModal from "@/lib/ErrorModal";

const Schedule = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const { doctorMap, locationMap, chamberMap } = useLookupMaps();
  const { appointments, isLoading, error, refetch } = useBookings(currentPage, 10, {
    doctorMap,
    locationMap,
    chamberMap,
  });

  const handlePageChange = (newPage) => {
    const safePage = Math.max(1, Math.min(totalPages, newPage));
    setCurrentPage(safePage);
  };

  if (isLoading) return <AppointmentsTableSkeleton />;

  if (error) return <ErrorModal message={error.message}/>;

  return (
    <div className="mx-[5%] min-h-screen bg-gray-50">
      <div className="p-4 md:p-6 lg:p-8">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 md:p-6">
            <div className="font-semibold text-lg md:text-xl text-gray-800 mb-4">
              Appointments
            </div>

            <div className="md:hidden space-y-4">
              <AppointmentCardList
                appointments={appointments}
                onSelect={setSelectedAppointment}
              />
            </div>

            <div className="hidden md:block">
              <AppointmentTable
                appointments={appointments}
                onSelect={setSelectedAppointment}
              />
            </div>

            <div className="mt-12 flex justify-center">
              <AppointmentsPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>

        <AppointmentModal
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
        />

        <div className="mt-8 text-xs text-gray-400 text-center">
          © Omni Health Care's Patient Portal Version 1.0. Made by Rubytech
        </div>
      </div>
    </div>
  );
};

export default Schedule;
