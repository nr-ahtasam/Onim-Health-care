"use client"
import MedicalServices from "@/components/services/MedicalServices";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import BestTreatmentSection from "@/components/services/BestTreatmentSection";
import AppointmentForm from "@/components/form/AppointmentForm";
import DoctorProfileSection from "@/components/services/DoctorProfileSection";
import FAQSection from "@/components/services/FAQSection";
import {singleServiceQuery} from "@/lib/graphql";
import {useParams} from "next/navigation";
import {useQuery} from "@apollo/client";
import Loader from "@/lib/Loader";

export default function Service() {
    const {id} =  useParams();
    const {data, loading, error} = useQuery(singleServiceQuery, {
        variables: { id },
    });
    if (loading) return <Loader/>;

    return (
        <>
            <ServicePageHeader singleService={data} />
            <BestTreatmentSection singleService={data} />
            <div className={"block md:hidden"}>
                <AppointmentForm />
            </div>
            <DoctorProfileSection />
            <MedicalServices singleService={data} />
            <FAQSection singleService={data} />
        </>
    );
}