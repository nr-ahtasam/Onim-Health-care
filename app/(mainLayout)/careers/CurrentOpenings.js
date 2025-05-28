// components/CurrentOpenings.js
"use client";
import { GET_JOB_NOTICES } from "@/lib/graphql";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const CurrentOpenings = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const { loading, error, data } = useQuery(GET_JOB_NOTICES);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  if (loading) {
    return (
      <div className="py-16 relative overflow-hidden z-1">
        <div className="container w-[80%] mx-auto mt-10 z-5 bg-transparent p-6 mb-8 flex flex-col justify-center items-center">
          <div className="animate-pulse space-y-4 w-[70%]">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 relative overflow-hidden z-1">
        <div className="container w-[80%] mx-auto mt-10 z-5 bg-transparent p-6 mb-8 flex flex-col justify-center items-center">
          <div className="text-red-500">
            Error loading job notices: {error.message}
          </div>
        </div>
      </div>
    );
  }

  const jobNotices = data?.jobNotices?.nodes || [];

  return (
    <div className="py-16 relative overflow-hidden z-1">
      <div className="container w-[80%] mx-auto mt-10 z-5 bg-transparent p-6 mb-8 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Current Openings
        </h1>

        <div className="space-y-4 w-[70%]">
          {jobNotices.map((job, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-xl font-semibold text-gray-700">
                  {job.title}
                </h2>
                {openAccordion === index ? (
                  <FiChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {openAccordion === index && (
                <div className="px-6 py-4 bg-white">
                  <div
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: job.content }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Image
          src="/images/red-ecllipse.png"
          width={0}
          height={0}
          alt="Red ellipse"
          sizes="100vw"
          priority
          className="absolute top-0 left-0 w-auto h-full"
        />
        <Image
          src="/images/green-ecllipse-right.png"
          width={0}
          height={0}
          alt="Green ellipse"
          sizes="100vw"
          priority
          className="absolute top-50 right-0 w-auto h-full"
        />
      </div>
    </div>
  );
};

export default CurrentOpenings;
