import { Button } from "@/components/ui/button";
import { BriefcaseMedical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUsSection() {
  return (
    <div className=" relative overflow-hidden">
      <div>
        <Image
          src="/images/red-ecllipse.png"
          width={0}
          height={0}
          alt={"Asdf"}
          sizes={"100vw"}
          priority
          className={"absolute top-40 left-0 w-auto h-full"}
        />
        <Image
          src="/images/green-ecllipse-right.png"
          width={0}
          height={0}
          alt={"Asdf"}
          sizes={"100vw"}
          priority
          className={"absolute top-0 right-0 w-auto h-full"}
        />
      </div>
      <section className="mx-auto container overflow-hidden px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[45%_60%] md:h-[830px] ">
          {/* Left side - Blue background with content */}
          <div className="flex flex-col justify-center rounded-tl-[100px] bg-blue-600 p-8 text-white md:p-12">
            <div className="mb-6">
              <div className="mb-4 inline-block ">
                <BriefcaseMedical size={120} className={"text-[#FF937B]"} />
              </div>
              <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
                Why Choose
                <br />
                Omni Health
                <br />
                Care?
              </h2>
              <div className="text-blue-100 max-w-[470px]">
                <ul>
                  <li>
                    1. <b>Expert Doctors:</b> Board-certified specialists across
                    30+ treatments.
                    <br />
                  </li>
                  <li>
                    <br />
                    2. <b>Advanced Procedures:</b> Latest technology and
                    minimally invasive techniques.
                  </li>
                  <li>
                    <br />
                    3. <b>Personalized Care:</b> Dedicated medical coordinators
                    at every step.
                  </li>
                  <li>
                    <br />
                    4. <b>Seamless Process:</b> Consultation, surgery, insurance
                    — all handled for you.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <Link href={"/book-appointment"}>
                <Button className="rounded-full bg-black px-6 py-6 text-white hover:bg-black/80">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - Doctor image */}
          <div className="relative h-[300px] md:h-auto">
            <Image
              src="/images/why-choose-us.jpeg"
              alt="Doctor with stethoscope"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
