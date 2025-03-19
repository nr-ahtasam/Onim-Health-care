import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function MedicalServices() {
  // Medical specialties for the sidebar
  const specialties = [
    { name: "Types of Hernia", active: true },
    { name: "Surgery", active: false },
    { name: "Clinical Diagnostics", active: false },
    { name: "Critical & Intensive Care", active: false },
    { name: "Dental Sciences", active: false },
    { name: "ENT Surgery", active: false },
    { name: "Emergency Medicine", active: false },
    { name: "Gastro Sciences", active: false },
  ]

  // Opening hours data
  const openingHours = [
    { day: "Mon - Fri", hours: "08:00 - 06:00 PM" },
    { day: "Sat", hours: "08:00 - 03:00 PM" },
    { day: "Sun", hours: "08:00 - 01:00 PM" },
  ]

  return (
    <section className="w-full bg-gradient-to-r from-pink-50 to-gray-50 px-4 py-12 md:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr]">
          {/* Left sidebar - Specialties */}
          <div className="border-r">
            <ul className="divide-y">
              {specialties.map((specialty, index) => (
                <li key={index}>
                  <button
                    className={`w-full px-6 py-4 text-left transition-colors hover:bg-gray-50 ${
                      specialty.active ? "bg-blue-600 text-white hover:bg-blue-700" : ""
                    }`}
                  >
                    {specialty.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* 24/7 Availability Section */}
            <div className="relative mt-4 p-6">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=250&width=350"
                  alt="Doctors available 24/7"
                  width={350}
                  height={250}
                  className="h-auto w-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-2xl font-bold">We are available 24/7 round the clock</h3>
              <Button className="mt-4 w-full rounded-md bg-gray-900 py-6 text-white hover:bg-black">
                Book an appointment
              </Button>
            </div>
          </div>

          {/* Main content area */}
          <div className="p-6 md:p-8">
            {/* Medical images */}
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Brain scan"
                  width={300}
                  height={200}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Doctor reviewing scans"
                  width={300}
                  height={200}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Overview section */}
            <div className="mb-8 border-b pb-8">
              <h2 className="mb-4 text-3xl font-bold">Overview</h2>
              <p className="mb-4 text-gray-700">
                Orci ultricies vulputate est quis non. Nam imperdiet felis orci bibendum. Eu semper mortes faucibus nisi
                dui sit mauris orci. Dui nibh eget interdum potenti elit elementum. Odio sit nulla molestie urna elit.
              </p>
              <p className="mb-4 text-gray-700">
                Orci ultricies vulputate est quis non. Nam imperdiet felis orci bibendum. Eu semper mortes faucibus nisi
                dui sit mauris orci. Dui nibh eget interdum potenti elit elementum. Odio sit nulla molestie urna elit.
                Sit tortor consequat bibendum tristique amet elit. Quisque viverra mauris integer diam.
              </p>
              <p className="text-gray-700">
                Fauciat purus a eget nunc aliquam. Porta tincidunt eu imperdiet sit pulvinar neque nam. Sed amet magna
                et enim quam morbi nulla massa. In nam lectus suspendisse vitae nulla rhoncus. Adipiscing facilisi massa
                feugiat vitae vitae. Tortor iaculis sed at maecenas. At eget tellus leo tellus maecenas pulvinar eu. Nam
                facilisis augue pretium morbi.
              </p>
            </div>

            {/* Three columns section */}
            <div className="grid gap-8 md:grid-cols-3">
              {/* Emergency Cases */}
              <div>
                <h3 className="mb-3 text-xl font-semibold">Emergency Cases</h3>
                <p className="mb-3 text-gray-600">
                  Ornare nunc tellus quis eget ullamcorper arcu ullamcorper. Etem semblier lacinia sed cursus.
                </p>
                <p className="text-xl font-bold">0123456789</p>
              </div>

              {/* Doctors Timetable */}
              <div>
                <h3 className="mb-3 text-xl font-semibold">Doctors Timetable</h3>
                <p className="mb-3 text-gray-600">
                  Fames interdum ut tellus pellentesque amet. Velit ut in egestas consectetur. Amet et.
                </p>
                <Button className="rounded-full bg-blue-600 px-6 hover:bg-blue-700">View timetable</Button>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="mb-3 text-xl font-semibold">Opening Hours</h3>
                <ul className="space-y-2">
                  {openingHours.map((item, index) => (
                    <li key={index} className="text-gray-600">
                      {item.day}: <span className="font-medium">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

