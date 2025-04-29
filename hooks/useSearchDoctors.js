"use client";

import { useState, useEffect } from "react";
import { LOCATIONS } from "@/constants/locations";

export function useSearchDoctors({ locationSearch, doctorSearch, diseases, diseaseSearch, currentPage }) {
  const [doctors, setDoctors] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const getLocationIdByName = (name) =>
    LOCATIONS.find((loc) => loc.name === name)?.id;

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

          const response = await fetch(`/api/doctor?${params.toString()}`);
          if (!response.ok) throw new Error("Failed to fetch doctors");

          const data = await response.json();

          const formattedDoctors = (data?.data || []).map((doctor) => ({
            id: doctor.id,
            name: doctor.title,
            specialty: "Arthroscopy & Arthroplasty Surgeon",
            rating: `${doctor.acf.rating}/5.00`,
            experience: `${doctor.acf.experience}+ Years Experience`,
            consultationFees: [
              { method: "Cash", amount: `${doctor.acf.consultation_fees} Taka` },
              { method: "Bkash", amount: `${doctor.acf.consultation_fees_online} Taka` },
            ],
            hospital: doctor.acf.chamber?.[0]?.post_title || "Unknown Hospital",
            image: doctor.acf.image_gallery?.[0] || "/images/doctor_placeholder.jpg",
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
