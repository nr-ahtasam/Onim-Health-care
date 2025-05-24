"use client";

import { useEffect, useState } from "react";
import SidePanel from "@/components/patient-portal/SidePanel";
import AuthPortal from "@/components/patient-portal/AuthPortal";
import Loader from "@/lib/Loader";
export default function PatientPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
    setLoading(false);
  }, []);

  if (loading) return <Loader />;

  return isAuthenticated ? <SidePanel /> : <AuthPortal />;
}
