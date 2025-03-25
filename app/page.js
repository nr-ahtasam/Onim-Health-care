import ShowcaseSection from "@/components/showcase/ShowcaseSection";
import MedicalCondition from "@/components/shared/MedicalCondition";
import WhyChooseUsSection from "@/components/shared/WhyChooseUs";
import AboutUsSection from "@/components/shared/AboutUs";
import DividerLine from "@/components/shared/DividerLine";
import {Suspense} from "react";
import Loader from "@/lib/Loader";

export default async function Home() {
  return (
      <>
        <ShowcaseSection />
          <Suspense fallback={<Loader/>}>
            <MedicalCondition/>
          </Suspense>
        <DividerLine/>
        <WhyChooseUsSection />
        <AboutUsSection />
      </>
  );
}
