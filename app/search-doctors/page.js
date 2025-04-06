"use client";

import {useEffect, useState} from "react";
import { MapPin, Heart, Search, Star, Calendar, Clock, ArrowRight, Quote,
    ShoppingBag, ArrowLeft, X } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Link from "next/link";
import Loader from "@/lib/Loader";
import {useQuery} from "@apollo/client";
import {FEATURED_SERVICES_QUERY} from "@/lib/graphql";

export default function Page() {
    const [locationSearch, setLocationSearch] = useState("");
    const [doctorSearch, setDoctorSearch] = useState("");
    const [diseaseSearch, setDiseaseSearch] = useState("");
    const [doctors, setDoctors] = useState([]);
    const [showDoctorSearchDropdown, setShowDoctorSearchDropdown] = useState(false)
    const [isloading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            const fetchData = async () => {
                try {
                    setLoading(true);
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_REST_URL}?location=${locationSearch}&disease=${diseaseSearch}&search=${doctorSearch}&page=${currentPage}`);
                    const data = await res.json();
                    const doctors = data?.data?.map(doctor => {
                        return {
                            id: doctor.id,
                            name: doctor.title,
                            specialty: "Arthroscopy & Arthroplasty Surgeon",
                            rating: doctor.acf.rating + "/5.00",
                            experience: doctor.acf.experience + "+ Years Experience",
                            consultationFees: [
                                { method: "Cash", amount: doctor.acf.consultation_fees + " Taka" },
                                { method: "Bkash", amount: doctor.acf.consultation_fees_online + " Taka" },
                            ],
                            hospital: doctor.acf.chamber?.[0]?.post_title || "Unknown Hospital",
                            image: doctor.acf.image_gallery?.[0] || "https://via.placeholder.com/150",
                        };
                    });
                    setDoctors(doctors);
                    setTotalPages(data.pagination.total_pages)
                } catch (error) {
                    console.error("Error fetching doctor data:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }, 500); // 500ms debounce delay

        return () => clearTimeout(debounceTimeout); // Clean up the timeout
    }, [locationSearch, doctorSearch, diseaseSearch, currentPage]); // Watch these for changes


    const { data, loading, error } = useQuery(FEATURED_SERVICES_QUERY);

    if (loading) return <Loader />;
    if (error) return <div>Error loading featured services: {error.message}</div>;
    const diseases = data?.page?.homeSections?.featuredServices?.nodes?.map(d => {
        return {
            id: d.serviceId,
            name: d.serviceFields.catName,
        }
    });

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="min-h-screen">
            {/* Header with gradient background */}
            <div className="w-full h-[300px] bg-gradient-to-r from-[#68AAF0] to-[#6BAAF1] py-12 px-4 text-center text-white">
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
                            onFocus={() => setShowDoctorSearchDropdown(true)}
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Search size={20} className="text-gray-500"/>
                        </button>

                        {/* Doctor search dropdown */}
                        {showDoctorSearchDropdown && (
                            <div
                                className="absolute top-full left-0 right-0 mt-2 bg-gray-100 rounded-3xl shadow-lg overflow-hidden z-50">
                                <div className="p-4 flex items-center gap-3 border-b border-gray-200">
                                    <button onClick={() => setShowDoctorSearchDropdown(false)}>
                                        <ArrowLeft size={20} className="text-gray-700"/>
                                    </button>
                                    <span className="flex-1 text-gray-700">Search by doctor name or diseases</span>
                                    <button onClick={() => {
                                        setShowDoctorSearchDropdown(false)
                                        setDiseaseSearch("")
                                    }}>
                                        <X size={20} className="text-gray-700"/>
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
                                    {diseases.map((disease, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center p-4 hover:bg-gray-200 cursor-pointer border-b border-gray-200"
                                            onClick={() => {
                                                setDiseaseSearch(disease.id)
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

            <section className="relative overflow-hidden">
                {/* Gradient background */}
                <div>
                    <Image src="/images/green-ecllipse.png"
                           width={0}
                           height={0}
                           alt={"Asdf"}
                           sizes={"100vw"}
                           priority
                           className={"absolute top-0 left-0 w-auto h-full"}
                    />
                    <Image src="/images/red-ecllipse.png"
                           width={0}
                           height={0}
                           alt={"Asdf"}
                           sizes={"100vw"}
                           priority
                           className={"absolute top-20 left-0 w-auto h-full"}
                    />
                    <Image src="/images/green-ecllipse-right.png"
                           width={0}
                           height={0}
                           alt={"Asdf"}
                           sizes={"100vw"}
                           priority
                           className={"absolute top-0 right-0 w-auto h-full"}
                    />
                    <Image src="/images/red-ecllipse-right.png"
                           width={0}
                           height={0}
                           alt={"Asdf"}
                           sizes={"100vw"}
                           priority
                           className={"absolute top-20 right-0 w-auto h-full "}
                    />
                </div>

                {/* Doctor listings with gradient background */}
                <div className="w-full py-12 px-4 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        {/* Doctor Cards Container */}
                        <div className="space-y-6">
                            {
                                isloading? <Loader/> :
                                doctors.map((doctor) => (
                                <DoctorCard key={doctor.id} doctor={doctor}/>
                            ))}
                        </div>

                        {/* Pagination with Margin */}
                        <div className="mt-12 flex justify-center">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                        />
                                    </PaginationItem>

                                    {[...Array(totalPages)].map((_, i) => (
                                        <PaginationItem key={i}>
                                            <PaginationLink
                                                className={"cursor-pointer"}
                                                isActive={currentPage === i + 1}
                                                onClick={() => handlePageChange(i + 1)}
                                            >
                                                {i + 1}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}

                                    <PaginationItem>
                                        <PaginationNext
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>
                </div>
            </section>
        </div>
)
}

function DoctorCard({
    doctor
}) {
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
                        <Star className="fill-yellow-400 text-yellow-400" size={20}/>
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
                <Link href={"/book-appointment"}><Button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
                    Book Appointment
                </Button></Link>
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