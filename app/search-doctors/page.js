"use client";

import {useEffect, useState} from "react";
import { MapPin, Heart, Search, Star, Calendar, Clock, ArrowRight, Quote,
    ShoppingBag } from "lucide-react"
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
import dummyTestimonials from "@/dummy-data/testimonials";

export default function Page() {
    const [locationSearch, setLocationSearch] = useState("");
    const [doctorSearch, setDoctorSearch] = useState("");
    const [doctors, setDoctors] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // Simulate fetching data
    useEffect(() => {
        const fetchData = () => {
            setDoctors(dummyDoctors);
            setTestimonials(dummyTestimonials);
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
                            <Heart size={20}/>
                        </div>
                        <Input
                            type="text"
                            placeholder="Search by doctor name or disease"
                            className="pl-10 pr-10 py-6 rounded-full w-full bg-white text-black"
                            value={doctorSearch}
                            onChange={(e) => setDoctorSearch(e.target.value)}
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Search size={20} className="text-gray-500"/>
                        </button>
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
            <div className="w-full bg-gray-100 py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-8">
                        {/* Testimonial Heading */}
                        <div className="md:col-span-2">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">What our customers say</h2>
                            <p className="text-gray-600 mb-6">
                                Elit odio vitae metus sed. Justo urna id quis augue. Lectus donec venenatis pretium cras. Ut enim erat dolor
                                ultricies aliquam
                            </p>
                        </div>

                        {/* Testimonial Cards */}
                        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {testimonials.slice(activeTestimonial * 2, activeTestimonial * 2 + 2).map((testimonial) => (
                                <div key={testimonial.id} className="flex flex-col">
                                    {/* Quote Container */}
                                    <div className="bg-white p-6 rounded-br-[2rem]">
                                        <div className="text-5xl text-emerald-400 mb-4">
                                            <Quote />
                                        </div>
                                        <p className="text-gray-600">{testimonial.quote}</p>
                                    </div>

                                    {/* Avatar and Name Container */}
                                    <div className="pt-6 flex items-center gap-4">
                                        <div className="w-14 h-14 relative rounded-md overflow-hidden">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-gray-500 text-sm">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Horizontal Line with Pagination Dots */}
                    <div className="mt-10 flex items-center">
                        {/* Horizontal Line */}
                        <div className="flex-1 h-px bg-gray-300 mr-4"></div>

                        {/* Pagination Dots */}
                        <div className="flex gap-2">
                            {Array(Math.ceil(testimonials.length / 2))
                                .fill(0)
                                .map((_, index) => (
                                    <button
                                        key={index}
                                        className={`w-4 h-4 rounded-full cursor-pointer ${
                                            activeTestimonial === index ? "bg-emerald-400" : "bg-gray-300"
                                        }`}
                                        onClick={() => setActiveTestimonial(index)}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* News Section */}
            <div className="w-full py-16 px-4 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900">News From Our Center</h2>
                        <Link href="#" className="text-gray-600 flex items-center gap-1 hover:text-gray-900">
                            View all <ArrowRight size={16}/>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* News Card 1 */}
                        <div className="flex flex-col">
                            <div className="h-64 bg-gray-300 mb-4"></div>
                            <div className="flex items-center gap-2 mb-2">
                                <Calendar size={16} className="text-blue-500"/>
                                <span className="text-gray-500 text-sm">2024.12.19</span>
                                <span className="text-blue-500 text-sm">#Health information</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Notice of change in format of the result report
                                for the</h3>
                            <p className="text-gray-600 mb-4">Thank you for using our center on a daily basis. We
                                wo...</p>
                            <div className="mt-auto flex justify-end">
                                <Button variant="outline" size="sm">
                                    Learn More
                                </Button>
                            </div>
                        </div>

                        {/* News Card 2 */}
                        <div className="flex flex-col">
                            <div className="h-64 bg-gray-300 mb-4"></div>
                            <div className="flex items-center gap-2 mb-2">
                                <Calendar size={16} className="text-blue-500"/>
                                <span className="text-gray-500 text-sm">2024.12.19</span>
                                <span className="text-blue-500 text-sm">#Health information</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Notice of change in format of the result report
                                for the</h3>
                            <p className="text-gray-600 mb-4">Thank you for using our center on a daily basis. We
                                wo...</p>
                            <div className="mt-auto flex justify-end">
                                <Button variant="outline" size="sm">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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