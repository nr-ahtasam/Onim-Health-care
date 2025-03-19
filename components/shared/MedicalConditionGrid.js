"use client"; // If you are using Next.js App Router and placing this in the /app folder
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function MedicalConditionGrid() {
  // Define the medical conditions data (12 items, for example)
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7v14" />
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5z" />
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7v14" />
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5z" />
        </svg>
      ),
    },
    // 6 more items for the second row
    {
      name: "Anal Fistula",
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
      name: "Hemorrhoids",
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
      name: "Hydrocele",
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
      name: "Appendicitis",
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
      name: "Gallstones",
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
      name: "Thyroid Surgery",
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
  ]

  // Use state to control how many items are displayed
  const [showAll, setShowAll] = useState(false)

  // Decide which items to show: either the first 6 or all of them
  const displayedConditions = showAll
    ? medicalConditions
    : medicalConditions.slice(0, 6)

  return (
    <div className="container mx-auto px-4 z-10 relative py-16">
      {/* The Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-20">
        {displayedConditions.map((condition, index) => (
          <div className="text-center" key={index}>
            <div className="bg-white border border-blue-500 rounded-[20px] flex justify-center items-center p-6">
              {/* If you want the SVG icons, use {condition.icon} instead of an Image */}
              <Image
                src="/images/Vector.png"
                alt="Healthcare professionals"
                width={50}
                height={50}
                className="object-cover"
                priority
              />
            </div>
            <p className="text-[16px] mt-2">{condition.name}</p>
          </div>
        ))}
      </div>

      {/* The “View All” button */}
      <div className="text-center mt-16">
        {!showAll && (
          <Button
            className="bg-[#FF937B] text-white hover:bg-[#FF937B]/80"
            onClick={() => setShowAll(true)}
          >
            View All
          </Button>
        )}
      </div>
    </div>
  )
}
