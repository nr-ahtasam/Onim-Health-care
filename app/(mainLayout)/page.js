import AboutUsSection from "@/components/shared/AboutUs";
import { CallUs } from "@/components/shared/CallUs";
import DividerLine from "@/components/shared/DividerLine";
import MedicalCondition from "@/components/shared/MedicalCondition";
import WhyChooseUsSection from "@/components/shared/WhyChooseUs";
import ShowcaseSection from "@/components/showcase/ShowcaseSection";
import Link from "next/link";
export default async function Home() {
  return (
    <>
      <ShowcaseSection />
      <MedicalCondition />
      <DividerLine />
      <WhyChooseUsSection />
      <AboutUsSection />

      {/* Bottom Buttons Section - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 z-50">
        <div className="w-[100%] flex gap-4 p-2">
          <div className="w-1/2">
            <CallUs />
          </div>
          <Link
            href="/book-appointment"
            className="w-[50%] inline-flex items-center justify-center text-[15px] text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
}
