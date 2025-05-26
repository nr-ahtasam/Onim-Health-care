import AboutUsSection from "@/components/shared/AboutUs";
import DividerLine from "@/components/shared/DividerLine";
import MedicalCondition from "@/components/shared/MedicalCondition";
import WhyChooseUsSection from "@/components/shared/WhyChooseUs";
import ShowcaseSection from "@/components/showcase/ShowcaseSection";

export default async function Home() {
  return (
    <>
      <ShowcaseSection />
      <MedicalCondition />
      <DividerLine />
      <WhyChooseUsSection />
      <AboutUsSection />
    </>
  );
}
