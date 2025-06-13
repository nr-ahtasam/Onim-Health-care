"use client";
import DoctorChambers from "@/components/doctor-chambers/doctor-chambers";
import DoctorProfile from "@/components/doctor-profile/DoctorProfile";
import AboutUsSection from "@/components/shared/AboutUs";
import DividerLine from "@/components/shared/DividerLine";
import DoctorTabs from "@/components/shared/DoctorTabs";
import HealthCare from "@/components/shared/HealthCare";
import MedicalConditionGrid from "@/components/shared/MedicalConditionGrid";
import { singleDoctorQuery } from "@/lib/graphql";
import Loader from "@/lib/Loader";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Page() {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(singleDoctorQuery, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error || !data || !data.doctor) {
    return <p className="text-center py-10">Doctor profile not found.</p>;
  }

  const doctor = data.doctor; // Define doctor here explicitly

  return (
    <>
      <DoctorProfile singleDoctor={data} />
      <div className="py-16 relative overflow-hidden">
        <div>
          <Image
            src="/images/red-ecllipse.png"
            width={0}
            height={0}
            alt="Red ellipse"
            sizes="100vw"
            priority
            className="absolute top-0 left-0 w-auto h-full"
          />
          <Image
            src="/images/green-ecllipse-right.png"
            width={0}
            height={0}
            alt="Green ellipse"
            sizes="100vw"
            priority
            className="absolute top-50 right-0 w-auto h-full"
          />
        </div>
        <MedicalConditionGrid />
        <DoctorTabs singleDoctor={data} />
      </div>
      <DoctorChambers singleDoctor={data} />
      {/* <ServicesGrid singleDoctor={data} /> */}
      <HealthCare />
      <div className="py-16 relative overflow-hidden">
        <div>
          <Image
            src="/images/red-ecllipse.png"
            width={0}
            height={0}
            alt="Red ellipse"
            sizes="100vw"
            priority
            className="absolute top-0 left-0 w-auto h-full"
          />
          <Image
            src="/images/green-ecllipse-right.png"
            width={0}
            height={0}
            alt="Green ellipse"
            sizes="100vw"
            priority
            className="absolute top-50 right-0 w-auto h-full"
          />
        </div>
      </div>
      <DividerLine />
      <AboutUsSection />
    </>
  );
}
