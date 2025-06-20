"use client";
import AppointmentForm from "@/components/form/AppointmentForm";
import BestTreatmentSection from "@/components/services/BestTreatmentSection";
import DoctorProfileSection from "@/components/services/DoctorProfileSection";
import FAQSection from "@/components/services/FAQSection";
import MedicalServices from "@/components/services/MedicalServices";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import { singleServiceQuery } from "@/lib/graphql";
import LoadingSkeleton from "@/lib/LoadingSkeleton";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

export default function ServiceContent() {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(singleServiceQuery, {
    variables: { slug },
  });
  if (loading) return <LoadingSkeleton />;

  return (
    <>
      <ServicePageHeader singleService={data} />
      <BestTreatmentSection singleService={data} />
      <div className={"block md:hidden"}>
        <AppointmentForm />
      </div>
      <DoctorProfileSection singleService={data} />
      <MedicalServices singleService={data} />
      <FAQSection singleService={data} />
    </>
  );
}