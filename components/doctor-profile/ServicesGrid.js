"use client"; // If you are using Next.js App Router and placing this in the /app folder
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ServicesGrid() {
  // Define the medical conditions data (12 items, for example)
  const medicalConditions = [
    {
      name: "Hip-Pelvic",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-blue-500"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      name: "Hip-Pelvic",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-blue-500"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7v14" />
        </svg>
      ),
    },
    {
      name: "Hip-Pelvic",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-blue-500"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5z" />
        </svg>
      ),
    },
    {
      name: "Hip-Pelvic",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-blue-500"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
  ]

  return (
    <div className="container mx-auto px-4 z-10 relative py-16">
      <h2 className={"text-[45px] font-semibold text-center mb-12"}>Services</h2>
      {/* The Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
        {medicalConditions.map((condition, index) => (
          <div className="text-center" key={index}>
            <div className="bg-white border border-blue-500 rounded-[20px] flex justify-center items-center p-6">
              <Image
                src="/images/xray.png"
                alt="Healthcare professionals"
                width={0}
                height={0}
                className="object-cover w-full"
                sizes={"100vw"}
                priority
              />
            </div>
            <p className="text-[32px] font-bold mt-2">{condition.name}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
