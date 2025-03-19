import DoctorProfile from "@/components/doctor-profile/DoctorProfile";
import PageHeader from "@/components/header/PageHeader";
import MedicalConditionGrid from "@/components/shared/MedicalConditionGrid";
import DoctorTabs from "@/components/shared/DoctorTabs";
import ServicesGrid from "@/components/doctor-profile/ServicesGrid";
import Image from "next/image";
import HealthCare from "@/components/shared/HealthCare";
import DividerLine from "@/components/shared/DividerLine";
import AboutUsSection from "@/components/shared/AboutUs";

export default function page() {
  return (
    <>
      <PageHeader/>
      <DoctorProfile/>
      <div className="py-16 relative overflow-hidden">
        <div>
          <Image src="/images/red-ecllipse.png"
                 width={0}
                 height={0}
                 alt={"Asdf"}
                 sizes={"100vw"}
                 priority
                 className={"absolute top-0 left-0 w-auto h-full"}
          />
          <Image src="/images/green-ecllipse-right.png"
                 width={0}
                 height={0}
                 alt={"Asdf"}
                 sizes={"100vw"}
                 priority
                 className={"absolute top-50 right-0 w-auto h-full"}
          />
        </div>
        <MedicalConditionGrid/>
        <DoctorTabs/>
      </div>
      <ServicesGrid/>
      <HealthCare/>
      <DividerLine/>
      <AboutUsSection/>
    </>
  )
}