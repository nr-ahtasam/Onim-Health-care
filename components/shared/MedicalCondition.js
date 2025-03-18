// components/MedicalConditionsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import HealthCare from "@/components/shared/HealthCare";

// Define the medical conditions data
const medicalConditions = [
  {
    name: "Hernia",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
  },
  {
    name: "Circumcision",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14m-7-7v14"
        />
      </svg>
    ),
  },
  {
    name: "Pilonidal Sinus",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
      </svg>
    ),
  },
  {
    name: "Kidney Stones",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
  },
  {
    name: "Varicocele",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14m-7-7v14"
        />
      </svg>
    ),
  },
  {
    name: "Anal Fissure",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
      </svg>
    ),
  },
];

export default function MedicalCondition() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div>
        <Image src="/images/red-ecllipse.png"
               width={0}
               height={0}
               alt={"Asdf"}
               sizes={"100vw"}
               priority
               className={"absolute top-40 left-0 w-auto h-full"}
        />
        <Image src="/images/green-ecllipse-right.png"
               width={0}
               height={0}
               alt={"Asdf"}
               sizes={"100vw"}
               priority
               className={"absolute top-0 right-0 w-auto h-full"}
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-20">
          {medicalConditions.map((condition, index) => (
            <div className={"text-center"} key={index}>
              <div className={"bg-white border border-blue-500 rounded-[20px] flex justify-center items-center p-6"}>
                <Image
                  src="/images/Vector.png"
                  alt="Healthcare professionals"
                  width={50}
                  height={50}
                  className=" object-cover"
                  priority
                  sizes={"100vw"}
                />
              </div>
              <p className={"text-[16px]"}>{condition.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button className="bg-[#FF937B] text-white hover:bg-[#FF937B]/80">
            View All
          </Button>
        </div>
        <HealthCare/>
      </div>
    </section>
  );
}