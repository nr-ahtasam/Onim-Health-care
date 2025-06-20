"use client";

import { featureDoctorsQuery } from "@/lib/graphql";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export function useSearchDoctors({
  locationSearch,
  doctorSearch,
  diseases,
  locations,
  diseaseSearch,
  currentPage,
  perPage,
}) {
  const [doctors, setDoctors] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const getLocationIdByName = (name) =>
    locations.find((loc) => loc?.title?.rendered === name)?.id;

  const getDiseaseIdByName = (name) =>
    diseases?.find((diseas) => diseas.name === name)?.id;

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      const fetchDoctors = async () => {
        setLoading(true);
        try {
          const locationId = getLocationIdByName(locationSearch);
          const diseaseId = getDiseaseIdByName(diseaseSearch);

          const params = new URLSearchParams();
          if (locationId) params.append("location", locationId);
          if (diseaseId) params.append("disease", diseaseId);
          if (doctorSearch) params.append("search", doctorSearch);
          if (currentPage) params.append("page", currentPage);
          if (perPage) params.append("per_page", perPage);

          const response = await fetch(`/api/doctor?${params.toString()}`);
          if (!response.ok) throw new Error("Failed to fetch doctors");

          const data = await response.json();
          console.log(data);
          
          const formattedDoctors = (data?.data || []).map((doctor) => ({
            id: doctor.id,
            slug: doctor.link?.split("/")?.slice(-2, -1)[0],
            name: doctor.title,
            specialty: doctor.acf?.specialities?.map((s) => s.name).join(", ") || '',
            rating: `${doctor.acf.rating}/5.00`,
            experience: `${doctor.acf.experience}+ Years Experience`,
            consultationFees: doctor.acf.consultation_fees || 1000,
            hospital: doctor.acf.location?.[0]?.post_title || "N/A",
            image: doctor.image || "/images/doctor_placeholder.jpg",
          }));

          setDoctors(formattedDoctors);
          setTotalPages(data?.pagination?.total_pages || 1);
        } catch (error) {
          console.error("Error fetching doctors:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchDoctors();
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [locationSearch, doctorSearch, diseaseSearch, currentPage]);

  return { doctors, totalPages, loading };
}
