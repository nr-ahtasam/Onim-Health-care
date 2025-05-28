"use client";
import PageHeader from "@/components/header/PageHeader";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AppointmentForm from "../form/AppointmentForm";

export default function DoctorProfile({ singleDoctor }) {
  const doctor = singleDoctor?.doctor;

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
                <h1 className="w-80 md:mb-2 text-2xl font-bold md:text-4xl">
                  {doctor.title}
                </h1>

                <p className="mb-6 w-80 text-xl font-medium text-blue-600">
                  {doctor.specialities?.nodes
                    .map((speciality) => speciality.name)
                    .join(", ")}
                </p>

                {/* Rating and Experience */}
                <div className="mb-6 flex flex-wrap items-center gap-4 w-[30%]">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
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

                {/* Doctor's Long Description */}
                <div className="w-[350px] ">
                  <div
                    className="mb-8 w-[80%]"
                    dangerouslySetInnerHTML={{
                      __html: doctor.content,
                    }}
                  />
                </div>
                {/* Action Buttons */}
                <div className="mb-4 flex  gap-4  max-w-md">
                  <Button
                    variant="outline"
                    className="h-12 w-30 md:w-50 rounded-md text-center text-blue-500 border border-blue-500"
                  >
                    Call Us
                  </Button>
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
