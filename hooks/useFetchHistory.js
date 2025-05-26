import { useEffect, useState } from "react";
import { getStoredPatient } from "@/lib/storage"; // Assumes localStorage/session getter

export function useFetchHistory({ page = 1, perPage = 10 } = {}) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const patient = getStoredPatient();
    const patientId = patient?.user_id;    

    if (!patientId) {
      setError("Patient ID not found");
      return;
    }

    const fetchHistory = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `/api/patient-history?patient=${9}&page=${page}&per_page=${perPage}`
        );
        if (!res.ok) throw new Error("Failed to fetch History");
        const data = await res.json();
        setHistory(data);
      } catch (err) {
        console.error("Fetch History error:", err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [page, perPage]);

  return { history, loading, error };
}
