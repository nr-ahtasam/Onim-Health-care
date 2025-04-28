// hooks/useCreateAppointment.js
import { useState, useCallback } from 'react';
import { toast } from 'sonner';

export function useCreateAppointment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createAppointment = useCallback(
    async ({ name, email, phone, service, doctor, description, date }) => {
      setLoading(true);
      setError(null);

      try {
        // Build your WP REST API payload
        const payload = {
          title: `Appointment - ${name}`,
          status: 'publish', 
          acf: {
            patient_name: name,
            patient_email: email,
            patient_phone: phone,
            // ACF expects arrays of IDs for these repeater/relationship fields:
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
            date: date || '',
          },
        };

        const res = await fetch('/api/appointment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          // grab WP’s error message if there is one
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
        console.error('createAppointment error:', err);
        setError(err);
        toast.error('Something went wrong. Please try again.');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { createAppointment, loading, error };
}
