"use client";

import { usePatientPortal } from "@/context/PatientPortalContext";
import { removeStoredPatient } from "@/lib/storage";

export const useAuth = () => {
  const { setPatient } = usePatientPortal();
  const login = async ({ identifier, password }) => {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ identifier, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");

    setPatient(data);
    return data;
  };

  const register = async ({ email, phone, password }) => {
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, phone, password, role: "patient" }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Registration failed");

    return data;
  };

  const logout = async () => {
    removeStoredPatient();
  }

  return { login, register, logout };
};
