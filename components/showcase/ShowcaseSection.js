"use client"

import {useState} from "react"
import Image from "next/image"
import {Phone} from "lucide-react"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import AppointmentForm from "@/components/form/AppointmentForm";
import {Separator} from "@radix-ui/react-select";

export default function ShowcaseSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    dateTime: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e0f7f3] to-[#f0f7f7] -z-10"/>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="relative">
          {/* Left side - Image and content */}
          <div className="relative md:flex justify-center">

            <div className="relative md:w-1/2 flex justify-end">
              <Image
                src="/images/doctors.jpeg"
                alt="Healthcare professionals"
                width={0}
                height={0}
                className="rounded-tl-[200px] relative z-10  max-w-[600px] w-full h-full object-cover"
                priority
                sizes={"100vw"}
              />

              {/* Blue banner */}
              <div className="absolute bottom-0 left-0 right-0 h-54 bg-blue-500 z-0"/>
            </div>

            {/* 24/7 Badge */}
            <div className="flex justify-center my-10 md:my-0 md:absolute top-1/2 right-1/2 transform md:translate-x-1/2 z-20">
              <div
                className="bg-white rounded-full outline outline-offset-10 outline-[#051320] p-4 shadow-lg w-36 h-36 flex flex-col items-center justify-center text-center">
                <p className="text-sm font-medium text-gray-900">We are available 24/7 round the clock</p>
              </div>
            </div>

            <div className="relative z-10 md:w-1/2">
              <div className="absolute bottom-0 left-0 right-0 h-54 rounded-tr-[75px] bg-blue-500 z-0"/>

              <div className="space-y-6 md:p-12 max-w-[600px] text-center md:text-start">
                <h2 className="text-3xl md:text-[60px] font-bold text-gray-900 leading-tight ">
                  Your medical and healthcare solutions
                </h2>

                <p className="text-gray-700 text-xl border-t border-black/40 py-4">
                  Ullamcorper amet hac commodo tincidunt turpis venenatis lectus purus leo. Natoque.
                </p>
              </div>
              <div className={"md:flex items-end relative md:-mb-14"}>
              {/* Emergency contact */}
              <div className=" bg-white rounded-bl-[50px] p-8 relative  my-8 md:mb-0">
                <div className="flex items-start gap-3">
                  <div className=" md:absolute -top-5 -left-5 bg-[#FF937B] rounded-full p-4 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white"/>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">For medical emergency</p>
                    <p className="text-sm text-gray-700">call us on</p>
                    <p className="text-xl font-bold text-[#FF937B]">0123456789</p>
                  </div>
                </div>
              </div>
              {/* Form */}
              <AppointmentForm/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

