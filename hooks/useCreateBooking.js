import { useState, useCallback } from 'react';
import { toast } from 'sonner';

export function useCreateBooking() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createBooking = useCallback(
    async ({ name, email, phone, service, doctor, description, date }) => {
      setLoading(true);
      setError(null);

      try {
        const payload = {
          title: `${name}'s Appointment`,
          status: 'publish', 
          acf: {
            status: 'pending',
            appointment_type: 'online: Online',
            name: name,
            email: email,
            phone: phone,
            service: service
              ? Array.isArray(service)
                ? service.map((v) => Number(v))
                : [Number(service)]
              : [],
            doctor: doctor
              ? Array.isArray(doctor)
                ? doctor.map((v) => Number(v))
                : [Number(doctor)]
              : [],
            description: description || '',
            "date_&_time": date || '',
          },
        };

        const res = await fetch('/api/booking', {
          method: 'POST',
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => null);
          console.error('WP error:', errData);
          throw new Error(errData?.message || 'Failed to create appointment');
        }

        const data = await res.json();
        toast.success('Appointment booked', {
          description: 'Someone from Omni Health will contact you',
          className: 'bg-green-500 text-white border-none shadow-lg',
          action: { label: 'X', onClick: () => toast.clear() },
        });

        return data;
      } catch (err) {
        console.error('createBooking error:', err);
        setError(err);
        toast.error('Something went wrong. Please try again.');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { createBooking, loading, error };
}
