import { useQuery } from "@tanstack/react-query";
import {
  fetchDoctors,
  fetchLocations,
  fetchChambers,
} from "@/lib/fetchers";
import { buildLookupMap } from "@/lib/utils";

export const useLookupMaps = () => {
  const { data: doctorsRes } = useQuery({
    queryKey: ["doctors"],
    queryFn: () => fetchDoctors(1, 100),
    staleTime: 5 * 60 * 1000,
  });

  const { data: locationsRes } = useQuery({
    queryKey: ["locations"],
    queryFn: () => fetchLocations(1, 100),
    staleTime: 5 * 60 * 1000,
  });

  const { data: chambersRes } = useQuery({
    queryKey: ["chambers"],
    queryFn: () => fetchChambers(1, 100),
    staleTime: 5 * 60 * 1000,
  });

  const doctorMap = buildLookupMap(doctorsRes);
  const locationMap = buildLookupMap(locationsRes);
  const chamberMap = buildLookupMap(chambersRes);

  return { doctorMap, locationMap, chamberMap };
};
