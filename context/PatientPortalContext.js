"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getStoredPatient, setStoredPatient, removeStoredPatient } from "@/lib/storage";

const PatientPortalContext = createContext();

export const PatientPortalProvider = ({ children }) => {
  const [patient, setPatientState] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("Overview");

  useEffect(() => {
    const stored = getStoredPatient();
    if (stored) setPatientState(stored);
  }, []);

  const setPatient = (data) => {
    setPatientState(data);
    data ? setStoredPatient(data) : removeStoredPatient();
  };

  return (
    <PatientPortalContext.Provider
      value={{ patient, setPatient, selectedMenu, setSelectedMenu }}
    >
      {children}
    </PatientPortalContext.Provider>
  );
};

export const usePatientPortal = () => useContext(PatientPortalContext);
