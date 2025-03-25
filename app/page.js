import ShowcaseSection from "@/components/showcase/ShowcaseSection";
import MedicalCondition from "@/components/shared/MedicalCondition";
import WhyChooseUsSection from "@/components/shared/WhyChooseUs";
import AboutUsSection from "@/components/shared/AboutUs";
import DividerLine from "@/components/shared/DividerLine";

export default async function Home() {
    return (
        <>
            <ShowcaseSection/>
            {/*<MedicalCondition/>*/}
            <DividerLine/>
            <WhyChooseUsSection/>
            <AboutUsSection/>
        </>
    );
}
