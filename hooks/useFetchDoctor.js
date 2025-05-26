import { useEffect, useState } from "react";

export function useFetchDoctor(doctorId) {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!doctorId) return;

    const fetchDoctor = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/doctor/${doctorId}`);
        if (!res.ok) throw new Error("Failed to fetch doctor");
        const data = await res.json();
        setDoctor(data);
      } catch (err) {
        console.error("Doctor fetch error:", err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [doctorId]);

  return { doctor, loading, error };
}
