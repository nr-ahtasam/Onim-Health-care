"use client";
import PageHeader from "@/components/header/PageHeader";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AppointmentForm from "../form/AppointmentForm";
import { CallUs } from "../shared/CallUs";

export default function DoctorProfile({ singleDoctor }) {
  const doctor = singleDoctor?.doctor;
  const formatContent = (content) => {
    return content
      ?.replace(/^<p>|<\/p>$/g, '')
      ?.split(/<br[^>]*>/)
      ?.map(i => i.replace(/<[^>]*>/g, '').trim())
      ?.filter(line => line.length > 0);
  };

  const defaultImage =
    doctor.featuredImage?.node?.mediaItemUrl || "/images/doctor.jpeg";

  const imageGallery = [
    defaultImage,
    ...(doctor.doctorField?.imageGallery?.nodes?.map(
      (img) => img.mediaItemUrl
    ) || []),
  ];

  const [selectedImage, setSelectedImage] = useState(defaultImage);

  return (
    <>
      <PageHeader doctor={doctor} />
      <div className="  relative overflow-hidden">
        {/* Background Decorative Images */}
        <div>
          <Image
            src="/images/green-ecllipse.png"
            width={0}
            height={0}
            alt="Background decoration"
            sizes="100vw"
            priority
            className="absolute top-0 left-0 w-auto h-full"
          />
          <Image
            src="/images/red-ecllipse.png"
            width={0}
            height={0}
            alt="Background decoration"
            sizes="100vw"
            priority
            className="absolute top-30 left-0 w-auto h-full transform"
          />
          <Image
            src="/images/green-ecllipse-right.png"
            width={0}
            height={0}
            alt="Background decoration"
            sizes="100vw"
            priority
            className="absolute top-0 right-0 w-auto h-full"
          />
          <Image
            src="/images/red-ecllipse-right.png"
            width={0}
            height={0}
            alt="Background decoration"
            sizes="100vw"
            priority
            className="absolute top-50 right-0 w-auto h-full"
          />
        </div>

        <section className="w-full px-4 py-12 md:px-8 relative z-10">
          <div className="mx-auto container">
            <div className="w-[100%] flex flex-col md:flex-row gap-12 ">
              {/* Left Column - Doctor Images */}
              <div className="flex flex-col w-[30%] gap-4">
                {/* Main Image */}
                <div className="relative  md:w-full h-50 w-80  md:h-70 rounded-3xl md:rounded-[50px] overflow-hidden">
                  <Image
                    src={selectedImage}
                    alt={doctor.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                {/* Image Thumbnails */}
                <div className="hidden md:block  ">
                  {imageGallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`rounded-[10px] gap-2 overflow-hidden border-2 ${
                        selectedImage === img
                          ? "border-blue-500 shadow-md"
                          : "border-transparent"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Image ${index + 1}`}
                        width={150}
                        height={100}
                        className="h-[100px] w-[100px] flex object-cover gap-6"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column - Doctor Information */}
              <div className="flex flex-col justify-start w-[40%]">
                <h1 className="w-full mb-4 text-2xl font-bold md:text-4xl">
                  {doctor.title}
                </h1>

                {doctor.specialities?.nodes?.length > 0 && (
                  <p className="mb-4 w-80 text-xl font-medium text-blue-600">
                    {doctor.specialities?.nodes
                      .map((speciality) => speciality.name)
                      .join(", ")}
                  </p>
                )}

                {/* Rating and Experience */}
                <div className="mb-4 flex flex-wrap items-center">
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="font-medium">
                        {doctor.doctorField.rating.toFixed(1)}/5
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="5"
                        width="16"
                        height="16"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M16 3V7M8 3V7M4 11H20M9 16H12M12 16H15M12 16V19M12 16V13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="font-medium w-[200px]">
                      {doctor.doctorField.experience}{" "}
                      {doctor.doctorField.experience === 1 ? "Year" : "Years"}{" "}
                      Experience
                    </span>
                    </div>
                  </div>
                </div>

                {/* Doctor's content */}
                <div className="flex flex-col gap-2 mb-10">
                  {formatContent(doctor.content).map((line, index) => (
                    <div key={index} className="flex items-start gap-2">
                      {/* SVG icon */}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-1 flex-shrink-0"
                      >
                        <g clipPath="url(#clip0_18_218)">
                          <path
                            d="M22.9166 11.5417V12.5C22.9153 14.7463 22.1879 16.932 20.843 18.7311C19.498 20.5302 17.6075 21.8464 15.4534 22.4833C13.2993 23.1201 10.9971 23.0437 8.88999 22.2652C6.78292 21.4868 4.98393 20.048 3.76134 18.1636C2.53874 16.2792 1.95803 14.0501 2.10583 11.8087C2.25363 9.56728 3.12201 7.43369 4.58146 5.72614C6.04091 4.01858 8.01324 2.82854 10.2043 2.33351C12.3953 1.83847 14.6877 2.06496 16.7395 2.97919M22.9166 4.16669L12.4999 14.5938L9.37492 11.4688"
                            stroke="#0068F9"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_18_218">
                            <rect width="25" height="25" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      {/* Text line */}
                      <div 
                        className="w-full break-words"
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 max-w-md">
                  <CallUs />
                  <Link href={"/book-appointment"}>
                    <Button className="h-12 rounded-md bg-[#0068F9] text-base hover:bg-blue-700">
                      Book Appointment
                    </Button>
                  </Link>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-8">
                  {doctor.doctorField.socialLinks?.url &&
                    doctor.doctorField.socialLinks.url.includes("facebook") && (
                      <a
                        href={doctor.doctorField.socialLinks.url}
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                    )}
                  {doctor.doctorField.socialLinks?.url &&
                    doctor.doctorField.socialLinks.url.includes("linkedin") && (
                      <a
                        href={doctor.doctorField.socialLinks.url}
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    )}
                  {doctor.doctorField.socialLinks?.url &&
                    doctor.doctorField.socialLinks.url.includes(
                      "instagram"
                    ) && (
                      <a
                        href={doctor.doctorField.socialLinks.url}
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                    )}
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <AppointmentForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
