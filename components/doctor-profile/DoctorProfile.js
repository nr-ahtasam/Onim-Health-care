import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, CheckCircle, Facebook, Linkedin, Instagram } from "lucide-react"

export default function DoctorProfile() {
  // Doctor's qualifications with checkmarks
  const qualifications = [
    "MBBS, BCS (Health), MS (Orthopedics), FACS (USA)",
    "FIGR (Calcutta), FASM (Bangalore), AO Trauma (Basic Advance), AO Trauma Spine Basic",
    "AO Recon Hip and Knee Orthoplasty (Basic, Advanced and Revision Surgery)",
    "Fellowship in Arthroplasty and Fellowship in Arthroscopy",
    "AO Trauma Member (Switzerland) (Basic, Advanced and Revision Surgery)",
    "Assistant Professor (Orthopedic Surgery)",
    "National Institute of Traumatology and Orthopedic Rehabilitation",
  ]

  // Thumbnail images
  const thumbnails = [
    "/placeholder.svg?height=100&width=150",
    "/placeholder.svg?height=100&width=150",
    "/placeholder.svg?height=100&width=150",
  ]

  return (
    <section className="w-full bg-gradient-to-r from-pink-50 via-purple-50 to-teal-50 px-4 py-12 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left column - Doctor images */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Dr. Mohammad Shah Alam"
                width={600}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {thumbnails.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-xl">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Dr. Mohammad Shah Alam thumbnail ${index + 1}`}
                    width={150}
                    height={100}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Doctor information */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">Dr. Mohammad Shah Alam</h1>
            <p className="mb-6 text-xl font-medium text-blue-600">Arthroscopy & Arthroplasty Surgeon</p>

            {/* Rating and experience */}
            <div className="mb-6 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.7/5</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="5" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M16 3V7M8 3V7M4 11H20M9 16H12M12 16H15M12 16V19M12 16V13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-medium">37+ Years Experience</span>
              </div>
            </div>

            {/* Qualifications list */}
            <div className="mb-8 space-y-3">
              {qualifications.map((qualification, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span>{qualification}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <Button variant="outline" className="h-12 rounded-md text-base">
                Call Us
              </Button>
              <Button className="h-12 rounded-md bg-blue-600 text-base hover:bg-blue-700">Book Appointment</Button>
            </div>

            {/* Social media icons */}
            <div className="flex gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

