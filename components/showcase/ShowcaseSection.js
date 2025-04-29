"use client";

import AppointmentForm from "@/components/form/AppointmentForm";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function ShowcaseSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div>
        <Image
          src="/images/green-ecllipse.png"
          width={0}
          height={0}
          alt={"Asdf"}
          sizes={"100vw"}
          priority
          className={"absolute top-0 left-0 w-auto h-full"}
        />
        <Image
          src="/images/red-ecllipse.png"
          width={0}
          height={0}
          alt={"Asdf"}
          sizes={"100vw"}
          priority
          className={"absolute top-20 left-0 w-auto h-full"}
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
        <Image
          src="/images/red-ecllipse-right.png"
          width={0}
          height={0}
          alt={"Asdf"}
          sizes={"100vw"}
          priority
          className={"absolute top-20 right-0 w-auto h-full "}
        />
      </div>
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="relative">
          {/* Left side - Image and content */}
          <div className="relative md:flex justify-center">
            <div className="relative md:w-1/2 flex justify-end">
              <Image
                src="/images/doctors.jpeg"
                alt="Healthcare professionals"
                width={0}
                height={0}
                className="rounded-tl-[200px] relative z-10  max-w-[600px] w-full h-full object-cover"
                priority
                sizes={"100vw"}
              />

              {/* Blue banner */}
              <div className="absolute bottom-0 left-0 right-0 h-54 md:h-86 bg-blue-500 z-0" />
            </div>

            {/* 24/7 Badge */}
            {/* <div className="hidden flex justify-center my-10 md:my-0 md:absolute top-1/2 right-1/2 transform md:translate-x-1/2 z-20">
              <div className="bg-white rounded-full outline outline-offset-10 outline-[#051320] p-4 shadow-lg w-36 h-36 flex flex-col items-center justify-center text-center">
                <p className="text-sm font-medium text-gray-900">
                  We are available 24/7 round the clock
                </p>
              </div>
            </div> */}
            <div className="hidden md:flex justify-center my-10 md:my-0 md:absolute top-1/2 right-1/2 transform md:translate-x-1/2 z-20">
              <div className="bg-white rounded-full outline outline-offset-10 outline-[#051320] p-4 shadow-lg w-36 h-36 flex flex-col items-center justify-center text-center">
                <p className="text-sm font-medium text-gray-900">
                  We are available 24/7 round the clock
                </p>
              </div>
            </div>

            <div className="relative z-10 md:w-1/2">
              <div className="absolute bottom-0 left-0 right-0 h-54 md:h-86 rounded-tr-[75px] bg-blue-500 z-0" />

              <div className="space-y-6 md:p-12 max-w-[600px] text-center md:text-start">
                <h2 className="text-3xl md:text-[50px] font-bold text-gray-900 leading-tight ">
                Welcome to Omni Health Care
                </h2>

                <p className="text-gray-700 text-xl border-t border-black/40 py-4">
                Your Trusted Partner in Specialized Medical Care <br/> <b>Book Appointments | Get Second Opinions | Experience Seamless Surgeries</b>
                </p>
              </div>
              <div className={"md:flex items-end relative md:-mb-14"}>
                {/* Emergency contact */}
                <div className=" bg-white rounded-bl-[50px] p-8 relative  my-8 md:mb-0">
                  <div className="flex items-start gap-3">
                    <div className=" md:absolute -top-5 -left-5 bg-[#FF937B] rounded-full p-4 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        For medical emergency
                      </p>
                      <p className="text-sm text-gray-700">call us on</p>
                      <p className="text-xl font-bold text-[#FF937B]">
                      01711-997401
                      </p>
                    </div>
                  </div>
                </div>
                {/* Form */}
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
