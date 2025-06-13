"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MedicalServices({ singleService }) {
  // Use API data for overviewsData, default to empty array if no data
  const overviews = singleService?.service?.serviceOverviews?.nodes || [];
  const overviewsData = overviews.map((node, index) => ({
    name: node.name,
    description: node.description,
    active: index === 0, // Set the first item as active by default
  }));

  // State to track the active specialty, default to first item after data loads
  const [activeSpecialty, setActiveSpecialty] = useState(
    overviews.length > 0 ? overviews[0].name : ""
  );

  // Update activeSpecialty when data loads (to ensure it’s the first item)
  useEffect(() => {
    if (overviews.length > 0 && !activeSpecialty) {
      setActiveSpecialty(overviews[0].name);
    }
  }, [overviews, activeSpecialty]);

  // Opening hours data (static for now)
  const openingHours = [
    { day: "Mon - Fri", hours: "08:00 - 06:00 PM" },
    { day: "Sat", hours: "08:00 - 03:00 PM" },
    { day: "Sun", hours: "08:00 - 01:00 PM" },
  ];
  const featuredImageUrl =
    singleService?.service?.featuredImage?.node?.mediaItemUrl ||
    "/images/doctors.jpeg";
    const diagnosisTreatment =
    singleService?.service?.serviceFields?.diagnosisTreatment || "";
  
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
            {/* Left sidebar - overviewsData */}
            <div className="md:border-r border-[#05132080]">
              <ul className="divide-y text-[18px] font-semibold text-[#656E77]">
                {overviewsData.map((specialty, index) => (
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
                <div className="overflow-hidden rounded-tl-[50px]">
                  <Image
                    src={featuredImageUrl}
                    alt="Brain scan"
                    width={500}
                    height={200}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden hidden md:block rounded-tr-[50px] absolute bottom-[-67px] right-[100px] h-[200px]">
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
              <div className="mb-8 border-b pb-8 ">
                {/* Check if overviewsData exist */}
                {overviewsData && overviewsData.length > 0 ? (
                  overviewsData.some(
                    (overview) => overview.name === activeSpecialty
                  ) ? (
                    overviewsData.map((overview) =>
                      overview.name === activeSpecialty ? (
                        <div key={overview.name}>
                          <h2 className="mb-4 text-3xl font-bold text-black">Overview</h2>

                          <div className="pr-2 text-[#656E77] max-h-[300px] overflow-y-auto">
                            <ul className="list-disc pl-5 text-sm sm:text-base leading-relaxed text-gray-700 mb-4">
                              {overview?.description
                                ?.split(/\r?\n/) // Handles both \r\n and \n
                                ?.filter(line => line.trim() !== '') // Skip empty lines
                                ?.map((line, index) => (
                                  <li key={index}>{line}</li>
                                ))}
                            </ul>

                            {/* Divider */}
                            <div className="my-4 border-t border-gray-400" />

                            {/* Diagnosis & Treatment section (render raw HTML) */}
                            <div
                              className="diagnosis-treatment text-sm sm:text-base leading-relaxed text-justify"
                              dangerouslySetInnerHTML={{ __html: diagnosisTreatment }}
                            />
                          </div>
                        </div>

                      ) : null
                    )
                  ) : (
                    // When no match found
                    <p className="text-gray-500 italic">
                      No data found for the selected overview.
                    </p>
                  )
                ) : (
                  // When overviewsData list is empty or undefined
                  <p className="text-gray-500 italic">
                    No overviews available at the moment.
                  </p>
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
              <Link href="/book-appointment">
                <Button className="mt-4 w-full rounded-md bg-gray-900 py-6 text-white hover:bg-black">
                  Book appointment
                </Button>
              </Link>
            </div>
            {/* Emergency Cases */}
            <div className={"md:p-6"}>
              <h3 className="mb-3 text-xl font-semibold">Emergency Cases</h3>
              <p className="mb-3 text-gray-600">
               For urgent medical emergencies, please call at this number
              </p>
              <p className="text-xl font-bold">01711-997401, 01711-997402</p>
            </div>

            {/* Doctors Timetable */}
            <div className={"md:p-6"}>
              <h3 className="mb-3 text-xl font-semibold">Doctors Timetable</h3>
              <p className="mb-3 text-gray-600">
                For consultation timetable, check respective doctor's page
              </p>
              <Button className="rounded-full bg-blue-600 px-6 hover:bg-blue-700">
                View Doctors
              </Button>
            </div>

            {/* Opening Hours */}
            <div className={"md:p-6"}>
              <h3 className="mb-3 text-xl font-semibold">Opening Hours</h3>
              <ul className="space-y-2">
                {openingHours.map((item, index) => (
                  <li key={index} className="text-gray-600 border-b pb-2">
                    {item.day}:{" "}
                    <span className="font-medium">{item.hours}</span>
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
