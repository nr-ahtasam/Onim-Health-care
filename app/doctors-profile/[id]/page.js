import DoctorProfile from "@/components/doctor-profile/DoctorProfile";
import PageHeader from "@/components/header/PageHeader";
import MedicalConditionGrid from "@/components/shared/MedicalConditionGrid";
import DoctorTabs from "@/components/shared/DoctorTabs";
import ServicesGrid from "@/components/doctor-profile/ServicesGrid";
import Image from "next/image";
import HealthCare from "@/components/shared/HealthCare";
import DividerLine from "@/components/shared/DividerLine";
import AboutUsSection from "@/components/shared/AboutUs";
import DoctorChambers from "@/components/doctor-chambers/doctor-chambers";
import {getDoctorById, getFeaturedDoctors, getFeatureServices} from "@/lib/graphql";

export default async  function page({params}) {
    const {id} = await params;
    const singleDoctor = await getDoctorById(id);
    const featureServices = await getFeatureServices();
    const featureDoctors = await getFeaturedDoctors();

    const doctorName = "Dr. Mohammad Shah Alam";
    const specialties = [
        {
            id: "1",
            name: "Cardiology",
            image: "https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg",
            description: "Specializing in heart conditions and treatments.",
        },
        {
            id: "2",
            name: "Neurology",
            image: "https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg",
            description: "Expert in brain and nervous system disorders.",
        },
        {
            id: "3",
            name: "Orthopedics",
            image: "https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg",
            description: "Focused on bones and joint health.",
        },
        {
            id: "4",
            name: "Orthopedics",
            image: "https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg",
            description: "Focused on bones and joint health.",
        },
    ];
  return (
      <>
          <DoctorProfile singleDoctor={singleDoctor}/>
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
              <MedicalConditionGrid featureServices={featureServices}/>
              <DoctorTabs/>
          </div>
          <ServicesGrid/>
          <HealthCare featureDoctors={featureDoctors}/>
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
              <DoctorChambers doctorName={doctorName} specialties={specialties}/>
          </div>
          <DividerLine/>
          <AboutUsSection/>
      </>
  )
}