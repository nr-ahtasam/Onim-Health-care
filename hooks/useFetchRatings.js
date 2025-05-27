import { useEffect, useState } from "react";
import { getStoredPatient } from "@/lib/storage"; // Assumes localStorage/session getter

export function useFetchRatings({ page = 1, perPage = 10, key } = {}) {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const patient = getStoredPatient();
    const patientId = patient?.user_id;    

    if (!patientId) {
      setError("Patient ID not found");
      return;
    }

    const fetchRatings = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `/api/rating?patient=${patientId}&page=${page}&per_page=${perPage}`
        );
        if (!res.ok) throw new Error("Failed to fetch Ratings");
        const data = await res.json();
        setRatings(data);
      } catch (err) {
        console.error("Fetch Ratings error:", err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchRatings();
  }, [page, perPage, key]);

  return { ratings, loading, error };
}
