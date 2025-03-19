import MedicalServices from "@/components/services/MedicalServices";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import BestTreatmentSection from "@/components/services/BestTreatmentSection";
import AppointmentForm from "@/components/form/AppointmentForm";
import DoctorProfileSection from "@/components/services/DoctorProfileSection";

export default function Service(){
  return (
    <>
      <ServicePageHeader/>
      <BestTreatmentSection/>
      <div className={"block md:hidden"}>
        <AppointmentForm/>
      </div>
      <DoctorProfileSection/>
      <MedicalServices/>
    </>
  )
}