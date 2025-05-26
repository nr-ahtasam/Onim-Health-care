import { useEffect, useState } from "react";
import { getStoredPatient } from "@/lib/storage"; // Assumes localStorage/session getter

export function useFetchBookings({ page = 1, perPage = 10 } = {}) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const patient = getStoredPatient();
    const patientId = patient?.user_id;    

    if (!patientId) {
      setError("Patient ID not found");
      return;
    }

    const fetchBookings = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `/api/booking?patient=${patientId}&page=${page}&per_page=${perPage}`
        );
        if (!res.ok) throw new Error("Failed to fetch bookings");
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error("Fetch bookings error:", err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [page, perPage]);

  return { bookings, loading, error };
}
