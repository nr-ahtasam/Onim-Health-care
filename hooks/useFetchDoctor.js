import { useEffect, useState } from "react";
import { fetchDoctorById } from "@/lib/fetchers";

export function useFetchDoctor(doctorId) {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!doctorId) return;

    setLoading(true);
    setError(null);

    fetchDoctorById(doctorId)
      .then(setDoctor)
      .catch((err) => {
        console.error("Doctor fetch error:", err);
        setError(err.message || "Unknown error");
      })
      .finally(() => setLoading(false));
  }, [doctorId]);

  return { doctor, loading, error };
}
