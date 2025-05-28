"use client";
import { createContext, useContext, useState } from "react";

const PatientPanelContext = createContext();

export const PatientPanelProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState("Overview");

  return (
    <PatientPanelContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {children}
    </PatientPanelContext.Provider>
  );
};

export const usePatientPanel = () => useContext(PatientPanelContext);
