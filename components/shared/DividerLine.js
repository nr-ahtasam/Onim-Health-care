"use client"

import Link from "next/link";

export default function DividerLine() {
  return (
    <section className="py-16">
      <div className="container mx-auto flex items-center justify-center">
        {/* Left line */}
        <div className="flex-grow border-t border-gray-300"></div>

        {/* Button in the center */}
        <Link href={"/book-appointment"}><button className="cursor-pointer rounded-full font-bold bg-blue-500 px-6 py-2 md:py-4 text-white hover:bg-blue-600 transition">
          Book an appointment
        </button></Link>

        {/* Right line */}
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
    </section>
  )
}
