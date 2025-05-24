"use client";

import AuthPortal from "@/components/patient-portal/AuthPortal";
import Loader from "@/lib/Loader";
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
