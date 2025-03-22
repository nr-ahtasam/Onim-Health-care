"use client"; // Client-side rendering for Apollo
import MedicalServices from "@/components/services/MedicalServices";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import BestTreatmentSection from "@/components/services/BestTreatmentSection";
import AppointmentForm from "@/components/form/AppointmentForm";
import DoctorProfileSection from "@/components/services/DoctorProfileSection";
import FAQSection from "@/components/services/FAQSection";
import { useParams } from "next/navigation"; // For App Router

export default function Service() {
    const params = useParams(); // Get dynamic route params
    const serviceId = params.id; // e.g., "74"

    return (
        <>
            <ServicePageHeader serviceId={serviceId} /> {/* Pass serviceId as prop */}
            <BestTreatmentSection serviceId={serviceId} />
            <div className={"block md:hidden"}>
                <AppointmentForm />
            </div>
            <DoctorProfileSection />
            <MedicalServices serviceId={serviceId} />
            <FAQSection serviceId={serviceId} />
        </>
    );
}