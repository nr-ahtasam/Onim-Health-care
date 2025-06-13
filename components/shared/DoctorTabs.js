"use client";

import { fetchLocations, fetchRatings } from "@/lib/fetchers";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DoctorTabs({ singleDoctor }) {
  const doctor = singleDoctor?.doctor;
  const [ratings, setRatings] = useState([]);

  const loadRatings = async () => {
    try {
      const ratingsData = await fetchRatings(doctor.doctorId);
      setRatings(ratingsData);
    } catch (err) {
      console.error("Failed to fetch ratings", err);
    }
  }

  useEffect(() => {
    loadRatings();
  }, []);

  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "certification", label: "Certification" },
    { id: "reviews", label: "Reviews" },
  ];

  const descriptionContent = [
    {
      id: 1,
      text: "MBBS, BCS (Health), MS (Orthopaedics): These are foundational qualifications in general medicine, public health service, and specialized surgery in orthopaedics, providing a solid base for diagnosing and treating musculoskeletal conditions.",
    },
    {
      id: 2,
      text: "FACS (USA): Fellowship of the American College of Surgeons, denoting advanced surgical expertise and recognition within the USA's medical community.",
    },
    {
      id: 3,
      text: "FIGR (Calcutta), FASM (Bangalore): Fellowships from prestigious Indian medical institutions, demonstrating specialized training and recognition in regional medical communities.",
    },
    {
      id: 4,
      text: "AO Trauma (Basic, Advanced) & AO Trauma Spine Basic: Specialized training in trauma management and spine surgery techniques, following the internationally recognized AO principles.",
    },
  ];

  // const certificationContent = [
  //   {
  //     id: 1,
  //     text: "Board Certified in Orthopaedic Surgery with specialization in Arthroscopy and Arthroplasty procedures.",
  //   },
  //   {
  //     id: 2,
  //     text: "Certified by the National Medical Commission for advanced surgical procedures.",
  //   },
  //   {
  //     id: 3,
  //     text: "International certification in Joint Replacement Surgery from the International Society of Orthopaedic Surgery.",
  //   },
  // ];

  const reviewsContent = [
    {
      id: 1,
      author: "Ahmed K.",
      rating: 5,
      text: "Dr. Alam performed my knee replacement surgery with exceptional skill. I was walking without pain within weeks. His expertise and patient care are outstanding.",
    },
    {
      id: 2,
      author: "Fatima R.",
      rating: 5,
      text: "After suffering from chronic hip pain for years, Dr. Alam's diagnosis and treatment plan gave me my life back. His attention to detail and clear explanations made a complex procedure feel manageable.",
    },
    {
      id: 3,
      author: "Mohammad S.",
      rating: 4,
      text: "Very knowledgeable doctor with excellent bedside manner. The only reason for 4 stars instead of 5 is the long waiting time at his clinic.",
    },
  ];

  return (
    <section className="w-full px-4 py-8 md:px-8 relative z-10">
      <div className="mx-auto container">
        {/* Tabs */}
        <div className="flex gap-2 w-100 md:w-200  md:gap-4 flex-wrap">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-2 py-1 md:px-8 md:py-3 text-center font-medium transition-colors cursor-pointer",
                index === 0 && "rounded-tl-[30px]",
                activeTab === tab.id
                  ? "bg-[#FF937B] text-white"
                  : "bg-blue-700 text-white"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] bg-white/80 p-6  md:p-8">
          {activeTab === "description" && (
            <div className="space-y-6">
              <div
                className="mb-8 text-justify diagnosis-treatment"
                dangerouslySetInnerHTML={{
                  __html: doctor.doctorField.longDescription,
                }}
              />
            </div>
          )}

          {activeTab === "certification" && (
            <div className="flex gap-3 flex-wrap">
              {doctor?.doctorField?.certification?.nodes?.length > 0 ? (
                doctor.doctorField.certification.nodes.map((cert, index) => (
                  <div key={index} className="overflow-hidden rounded-[10px]">
                    <Image
                      src={cert.mediaItemUrl}
                      alt={`Certification ${index + 1}`}
                      width={150}
                      height={100}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No certifications found.</p>
              )}
            </div>
          )}
          {/* {activeTab === "certification" && (
            <div className="space-y-6">
              {certificationContent.map((item) => (
                <div key={item.id} className="space-y-1">
                  <p className="text-gray-900">
                    <span className="font-semibold">{item.id}. </span>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          )} */}

          {activeTab === "reviews" && (
            <div className="space-y-6">
              {ratings.length === 0 && (
                <p className="text-gray-500">No reviews found.</p>
              )}
              {ratings.map((review) => (
                <div key={review.id} className="rounded-lg bg-gray-50 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-medium">{review.acf?.patient}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.acf?.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">{review.acf?.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
