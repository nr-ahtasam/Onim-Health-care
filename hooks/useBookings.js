import { useQuery } from "@tanstack/react-query";
import { getStoredPatient } from "@/lib/storage";
import { fetchBookings } from "@/lib/fetchers";
import { formatBooking } from "@/lib/formatBooking";

export const useBookings = (page = 1, perPage = 10, maps = {}) => {
  const patient = getStoredPatient();

  const { data, ...rest } = useQuery({
    queryKey: ["bookings", patient?.user_id, page],
    queryFn: () => fetchBookings(patient.user_id, page, perPage),
    enabled: !!patient?.user_id,
    staleTime: 1000 * 60 * 2,
    keepPreviousData: true,
  });

  const { doctorMap = {}, locationMap = {}, chamberMap = {} } = maps;

  const appointments = Array.isArray(data)
    ? data.map((booking) =>
        formatBooking(booking, doctorMap, locationMap, chamberMap)
      )
    : [];

  return {
    ...rest,
    appointments,
  };
};
