import MedicalServices from "@/components/services/MedicalServices";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import BestTreatmentSection from "@/components/services/BestTreatmentSection";
import AppointmentForm from "@/components/form/AppointmentForm";
import DoctorProfileSection from "@/components/services/DoctorProfileSection";
import FAQSection from "@/components/services/FAQSection";
import {getSingleService} from "@/lib/graphql";

export default async function Service({params}) {
    const {id} = await params;
    const singleService = await getSingleService(id);
    return (
        <>
            <ServicePageHeader singleService={singleService} />
            <BestTreatmentSection singleService={singleService} />
            <div className={"block md:hidden"}>
                <AppointmentForm />
            </div>
            <DoctorProfileSection />
            <MedicalServices singleService={singleService} />
            <FAQSection singleService={singleService} />
        </>
    );
}