"use client";

import {useEffect, useState} from "react";
import { MapPin, Heart, Search, Star, Calendar, Clock, ArrowRight, Quote,
    ShoppingBag, ArrowLeft, X } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import dummyDoctors from "@/dummy-data/doctors";
import Testimonials from "@/components/testimonials/testimonial";
import Newsletter from "@/components/news-letter/news-letter";

export default function Page() {
    const [locationSearch, setLocationSearch] = useState("");
    const [doctorSearch, setDoctorSearch] = useState("");
    const [doctors, setDoctors] = useState([]);
    const [showDoctorSearchDropdown, setShowDoctorSearchDropdown] = useState(false)

    const diseases = [
        { name: "Kidney Stone", type: "Popular" },
        { name: "Acl Tear", type: "Disease" },
        { name: "Balanitis", type: "Disease" },
        { name: "Spine Surgery", type: "Disease" },
    ]

    // Simulate fetching data
    useEffect(() => {
        const fetchData = () => {
            setDoctors(dummyDoctors);
        };
        fetchData();
    }, []);

    return (
        <div className="min-h-screen">
            {/* Header with gradient background */}
            <div className="w-full bg-gradient-to-r from-blue-400 to-blue-500 py-12 px-4 text-center text-white">
                <h1 className="text-4xl font-bold mb-2">Search Doctors</h1>
                <p className="text-xl">In Omni Health Care</p>

                <div className="max-w-5xl mx-auto mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    {/* Location search */}
                    <div className="relative flex-1">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <MapPin size={20}/>
                        </div>
                        <Input
                            type="text"
                            placeholder="Search By Location"
                            className="pl-10 pr-10 py-6 rounded-full w-full bg-white text-black"
                            value={locationSearch}
                            onChange={(e) => setLocationSearch(e.target.value)}
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Search size={20} className="text-gray-500"/>
                        </button>
                    </div>

                    {/* Doctor/disease search */}
                    <div className="relative flex-1">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <Heart size={20} />
                        </div>
                        <Input
                            type="text"
                            placeholder="Search by doctor name or disease"
                            className="pl-10 pr-10 py-6 rounded-full w-full bg-white text-black"
                            value={doctorSearch}
                            onChange={(e) => setDoctorSearch(e.target.value)}
                            onFocus={() => setShowDoctorSearchDropdown(true)}
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Search size={20} className="text-gray-500" />
                        </button>

                        {/* Doctor search dropdown */}
                        {showDoctorSearchDropdown && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-gray-100 rounded-3xl shadow-lg overflow-hidden z-50">
                                <div className="p-4 flex items-center gap-3 border-b border-gray-200">
                                    <button onClick={() => setShowDoctorSearchDropdown(false)}>
                                        <ArrowLeft size={20} className="text-gray-700" />
                                    </button>
                                    <span className="flex-1 text-gray-700">Search by doctor name or diseases</span>
                                    <button onClick={() => setShowDoctorSearchDropdown(false)}>
                                        <X size={20} className="text-gray-700" />
                                    </button>
                                </div>

                                <div className="p-4 border-b border-gray-200">
                                    <h3 className="text-gray-500 font-medium mb-2">Popular</h3>
                                    <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1 bg-white text-blue-500 border border-blue-500 rounded-full text-sm">
                      Kidney Stone
                    </span>
                                    </div>
                                </div>

                                <div>
                                    {diseases.slice(1).map((disease, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center p-4 hover:bg-gray-200 cursor-pointer border-b border-gray-200"
                                            onClick={() => {
                                                setDoctorSearch(disease.name)
                                                setShowDoctorSearchDropdown(false)
                                            }}
                                        >
                                            <span className="text-gray-500">{disease.name}</span>
                                            <span className="text-gray-500 text-sm">{disease.type}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Doctor listings with gradient background */}
            <div className="w-full bg-gradient-to-br from-pink-100 via-white to-green-100 py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Doctor Cards Container */}
                    <div className="space-y-6">
                        {doctors.map((doctor) => (
                            <DoctorCard key={doctor.id} doctor={doctor}/>
                        ))}
                    </div>

                    {/* Pagination with Margin */}
                    <div className="mt-12 flex justify-center">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#"/>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis/>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#"/>
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
           <Testimonials/>

            {/* News Section */}
            <Newsletter/>
        </div>
    )
}

function DoctorCard({ doctor }) {
    return (
        <Card className="p-6 rounded-xl shadow-sm flex flex-col md:flex-row gap-6 bg-white">
            <div className="w-full md:w-48 h-48 relative rounded-lg overflow-hidden">
                <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex-1 space-y-4">
                <div>
                    <p className="font-poppins font-semibold text-[35px]">{doctor.name}</p>
                    <p className="font-poppins font-[400] text-[22px] text-[#0068F9]">
                        {doctor.specialty}
                    </p>
                </div>

                {/* Flex container for Star and Experience side by side */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Star className="fill-yellow-400 text-yellow-400" size={20} />
                        <span className="font-poppins font-semibold text-[18px]">
              {doctor.rating}
            </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <ShoppingBag size={20} />
                        <span className="font-poppins font-semibold text-[18px]">
              {doctor.experience}
            </span>
                    </div>
                </div>

                <div>
                    <p className="font-medium">Consultation Fees:</p>
                    <div className="flex items-center gap-2 flex-wrap">
                        {doctor.consultationFees.map((fee, index) => (
                            <span key={index} className="flex items-center gap-1">
        <span className="text-[#20C5AF] font-medium">{fee.amount}</span>
        <span className="text-black"> ({fee.method})</span>
                                {index < doctor.consultationFees.length - 1 && (
                                    <span className="text-black">&</span>
                                )}
      </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 min-w-[200px]">
                <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 cursor-pointer"
                >
                    Call Us
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
                    Book Appointment
                </Button>
                <div className="flex items-center gap-2 mt-2">
                <MapPin size={20} className="text-blue-500" />
                    <span className="font-[400] font-poppins break-words max-w-[180px]">
  {doctor.hospital}
</span>
                </div>
            </div>
        </Card>
    );
}