import DoctorProfile from "@/components/doctor-profile/DoctorProfile";
import PageHeader from "@/components/header/PageHeader";
import MedicalConditionGrid from "@/components/shared/MedicalConditionGrid";
import DoctorTabs from "@/components/shared/DoctorTabs";

export default function page(){
  return(
    <>
      <PageHeader/>
      <DoctorProfile/>
      <MedicalConditionGrid/>
      <DoctorTabs/>
    </>
  )
}