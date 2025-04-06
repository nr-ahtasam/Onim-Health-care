"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MedicalServices({ singleService }) {
  // Use API data for specialties, default to empty array if no data
  const specialtiesData = singleService?.service?.serviceOverviews?.nodes || [];
  const specialties = specialtiesData.map((node, index) => ({
    name: node.name,
    active: index === 0, // Set the first item as active by default
  }));

  // State to track the active specialty, default to first item after data loads
  const [activeSpecialty, setActiveSpecialty] = useState(
      specialtiesData.length > 0 ? specialtiesData[0].name : ""
  );

  // Update activeSpecialty when data loads (to ensure it’s the first item)
  useEffect(() => {
    if (specialtiesData.length > 0 && !activeSpecialty) {
      setActiveSpecialty(specialtiesData[0].name);
    }
  }, [specialtiesData, activeSpecialty]);

  // Opening hours data (static for now)
  const openingHours = [
    { day: "Mon - Fri", hours: "08:00 - 06:00 PM" },
    { day: "Sat", hours: "08:00 - 03:00 PM" },
    { day: "Sun", hours: "08:00 - 01:00 PM" },
  ];
    const featuredImageUrl = singleService?.service?.featuredImage?.node?.mediaItemUrl || "/images/doctors.jpeg";
  return (
      <div className="py-16 relative overflow-hidden">
        <div>
          <Image
              src="/images/red-ecllipse.png"
              width={0}
              height={0}
              alt={"Asdf"}
              sizes={"100vw"}
              priority
              className={"absolute top-0 left-0 w-auto h-full"}
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
        <section className="w-full px-4 py-12 md:px-8 relative z-10">
          <div className="mx-auto max-w-7xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[350px_1fr]">
              {/* Left sidebar - Specialties */}
              <div className="md:border-r border-[#05132080]">
                <ul className="divide-y text-[18px] font-semibold text-[#656E77]">
                  {specialties.map((specialty, index) => (
                      <li key={index}>
                        <button
                            className={`w-full px-6 py-2 text-left transition-colors border-b border-[#05132080] ${
                                specialty.name === activeSpecialty
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : ""
                            }`}
                            onClick={() => setActiveSpecialty(specialty.name)}
                        >
                          {specialty.name}
                        </button>
                      </li>
                  ))}
                </ul>
              </div>

              {/* Main content area */}
              <div className="p-6 md:p-12">
                {/* Medical images */}
                <div className="mb-8 grid gap-4 md:grid-cols-2 relative">
                  <div className="overflow-hidden rounded-tl-[75px]">
                    <Image
                        src={featuredImageUrl}
                        alt="Brain scan"
                        width={300}
                        height={200}
                        className="h-auto w-full object-cover"
                    />
                  </div>
                  <div
                      className="overflow-hidden hidden md:block rounded-tr-[50px] absolute bottom-[-67px] right-[100px] h-[200px]"
                  >
                    <Image
                        src="/images/doctors.jpeg"
                        alt="Doctor reviewing scans"
                        width={300}
                        height={200}
                        className="h-auto w-full object-cover"
                    />
                  </div>
                </div>

                {/* Overview Section Content */}
                <div className="mb-8 border-b pb-8">
                  {specialties.map((specialty) =>
                      specialty.name === activeSpecialty ? (
                          <div key={specialty.name}>
                            <h2 className="mb-4 text-3xl font-bold">{specialty.name}</h2>
                            <div className={"text-[#656E77]"}>
                              <p className="mb-4 text-gray-700">
                                {singleService?.service?.serviceOverviews?.nodes.find(
                                    (node) => node.name === activeSpecialty
                                )?.description || "No description available."}
                              </p>
                              <p className="mb-4 text-gray-700">Orci ultricies vulputate est quis non. Nam imperdiet felis orci bibendum. Eu semper montes faucibus nisi dui sit mauris orci. Dui nibh eget interdum potenti elit elementum. Odio sit nulla molestie urna elit. Sit tortor consequat bibendum tristique amet erat. Quisque viverra mauris integer diam. <br /> Feugiat purus a eget nunc aliquam. Porta tincidunt eu imperdiet sit pulvinar neque nam. Sed amet magna et enim quam morbi nulla mauris. In nam lectus suspendisse vitae nulla rhoncus. Adipiscing facilisi massa feugiat vitae vitae. Tortor iaculis sed ut maecenas. At erat tellus leo tellus maecenas pulvinar eu. Nam facilisis augue pretium morbi.</p>
                            </div>
                          </div>
                      ) : null
                  )}
                </div>
              </div>
            </div>

            {/* Three columns section */}
            <div className="grid gap-8 md:grid-cols-4 bg-white p-6 md:p-12 rounded-tl-[30px] md:rounded-tl-[75px] relative">
              {/* 24/7 Availability Section */}
              <div className="relative md:p-6">
                <div className="mb-4 overflow-hidden md:absolute md:-top-[190px] left-0 rounded-tr-[75px]">
                  <Image
                      src="/images/doctors.jpeg"
                      alt="Doctors available 24/7"
                      width={550}
                      height={550}
                      className="h-auto w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-2xl font-bold">
                  We are available 24/7 round the clock
                </h3>
                <Button className="mt-4 w-full rounded-md bg-gray-900 py-6 text-white hover:bg-black">
                  Book an appointment
                </Button>
              </div>
              {/* Emergency Cases */}
              <div className={"md:p-6"}>
                <h3 className="mb-3 text-xl font-semibold">Emergency Cases</h3>
                <p className="mb-3 text-gray-600">
                  Ornare nunc tellus quis eget ullamcorper arcu ullamcorper. Etem
                  semblier lacinia sed cursus.
                </p>
                <p className="text-xl font-bold">0123456789</p>
              </div>

              {/* Doctors Timetable */}
              <div className={"md:p-6"}>
                <h3 className="mb-3 text-xl font-semibold">Doctors Timetable</h3>
                <p className="mb-3 text-gray-600">
                  Fames interdum ut tellus pellentesque amet. Velit ut in egestas
                  consectetur. Amet et.
                </p>
                <Button className="rounded-full bg-blue-600 px-6 hover:bg-blue-700">
                  View timetable
                </Button>
              </div>

              {/* Opening Hours */}
              <div className={"md:p-6"}>
                <h3 className="mb-3 text-xl font-semibold">Opening Hours</h3>
                <ul className="space-y-2">
                  {openingHours.map((item, index) => (
                      <li key={index} className="text-gray-600 border-b pb-2">
                        {item.day}: <span className="font-medium">{item.hours}</span>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}