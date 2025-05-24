"use client";
import { setStoredPatient } from "@/lib/storage";
import { toast } from 'sonner';

export const useAuth = () => {
  const login = async ({ identifier, password }) => {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ identifier, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");
    setStoredPatient(data);
    return data;
  };

  const register = async ({ email, phone, password }) => {
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, phone, password, role: "patient" }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Registration failed");
    toast.success('Registration Successful', {
      className: 'bg-green-500 text-white border-none shadow-lg',
      action: { label: 'X', onClick: () => toast.clear() },
    });
    return data;
  };

  return { login, register };
};
