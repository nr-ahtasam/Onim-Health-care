"use client";

import AuthPortal from "@/components/patient-portal/AuthPortal";
import SidePanel from "@/components/patient-portal/SidePanel";
import Loader from "@/lib/Loader";
import { getStoredPatient } from "@/lib/storage";
import { useEffect, useState } from "react";
export default function PatientPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const patient = getStoredPatient();
    setIsAuthenticated(!!patient?.token);
    setLoading(false);
  }, []);

  if (loading) return <Loader />;

  return isAuthenticated ? <SidePanel /> : <AuthPortal />;
}
