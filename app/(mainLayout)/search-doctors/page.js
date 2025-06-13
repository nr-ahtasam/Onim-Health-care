"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchDoctors } from "@/hooks/useSearchDoctors";
import { fetchLocations } from "@/lib/fetchers";
import { FEATURED_SERVICES_QUERY} from "@/lib/graphql";
import SearchDoctorCardSkeleton from "@/lib/SearchDoctorCardSkeleton";
import { useQuery } from "@apollo/client";
import {
  ArrowLeft,
  Heart,
  MapPin,
  Search,
  ShoppingBag,
  Star,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SearchDoctorPage() {
  const locationDropdownRef = useRef(null);
  const searchDropdownRef = useRef(null);

  const [locationSearch, setLocationSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [doctorSearch, setDoctorSearch] = useState("");
  const [diseaseSearch, setDiseaseSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showDoctorSearchDropdown, setShowDoctorSearchDropdown] =
    useState(false);

  const { data, loading: servicesLoading, error } = useQuery(FEATURED_SERVICES_QUERY);
  
  const diseases = data?.page?.homeSections?.featuredServices?.nodes.map((d) => ({
    id: d.serviceId,
    name: d.serviceFields?.catName,
    type: d.__typename,
  }));

  const [locations, setLocations] = useState([]);
  const loadLocations = async () => {
    try {
      const locationsData = await fetchLocations();
      setLocations(locationsData);
    } catch (err) {
      console.error("Failed to fetch locations", err);
    }
  }

  useEffect(() => {
    loadLocations();
  }, []);

  const { doctors, totalPages, loading } = useSearchDoctors({
    locationSearch,
    doctorSearch,
    diseases,
    locations,
    diseaseSearch,
    currentPage,
    perPage,
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target)
      ) {
        setShowLocationDropdown(false);
      }
      if (
        searchDropdownRef.current &&
        !searchDropdownRef.current.contains(event.target)
      ) {
        setShowDoctorSearchDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLocationDropdown, showDoctorSearchDropdown]);

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
              <MapPin size={20} />
            </div>
            <Input
              type="text"
              placeholder="Search By Location"
              className="pl-10 pr-10 py-6 rounded-full w-full bg-white text-black"
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
              onFocus={() => setShowLocationDropdown(true)}
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Search size={20} className="text-gray-500" />
            </button>
            {/* Doctor search dropdown */}
            {showLocationDropdown && (
              <div
                ref={locationDropdownRef}
                className="absolute top-full left-0 right-0 mt-2 max-h-100 overflow-y-auto bg-gray-100 rounded-3xl shadow-lg overflow-hidden z-50"
              >
                <div className="p-4 flex items-center gap-3 border-b border-gray-200">
                  <button onClick={() => setShowLocationDropdown(false)}>
                    <ArrowLeft size={20} className="text-gray-700" />
                  </button>
                  <span className="flex-1 text-gray-700">
                    Search by locations
                  </span>
                  <button
                    onClick={() => {
                      setShowLocationDropdown(false);
                      setLocationSearch("");
                    }}
                  >
                    <X size={20} className="text-gray-700" />
                  </button>
                </div>

                <div>
                  {locations.map((loc, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 hover:bg-gray-200 cursor-pointer border-b border-gray-200"
                      onClick={() => {
                        setLocationSearch(loc.title.rendered);
                        setShowLocationDropdown(false);
                      }}
                    >
                      <span className="text-gray-500">{loc.title.rendered}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
              value={searchText}
              onChange={(e) => {
                const value = e.target.value;
                setSearchText(value);
                setDoctorSearch(value);
                setDiseaseSearch(value);
              }}
              onFocus={() => setShowDoctorSearchDropdown(true)}
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Search size={20} className="text-gray-500" />
            </button>

            {/* Doctor search dropdown */}
            {showDoctorSearchDropdown && (
              <div
                className="absolute top-full left-0 right-0 mt-2 max-h-100 overflow-y-auto bg-gray-100 rounded-3xl shadow-lg overflow-hidden z-50"
                ref={searchDropdownRef}
              >
                <div className="p-4 flex items-center gap-3 border-b border-gray-200">
                  <button onClick={() => setShowDoctorSearchDropdown(false)}>
                    <ArrowLeft size={20} className="text-gray-700" />
                  </button>
                  <span className="flex-1 text-gray-700">
                    Search by doctor name or diseases
                  </span>
                  <button
                    onClick={() => {
                      setShowDoctorSearchDropdown(false);
                      setDiseaseSearch("");
                    }}
                  >
                    <X size={20} className="text-gray-700" />
                  </button>
                </div>

                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-gray-500 font-medium mb-2">Popular</h3>
                </div>

                <div>
                  {diseases.map((disease, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 hover:bg-gray-200 cursor-pointer border-b border-gray-200"
                      onClick={() => {
                        setDiseaseSearch(disease.name);
                        setSearchText(disease.name);
                        setShowDoctorSearchDropdown(false);
                      }}
                    >
                      <span className="text-gray-500">{disease.name}</span>
                      <span className="text-gray-500 text-sm">
                        {disease.type}
                      </span>
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
        <GradientBackground />

        {/* Doctor listings */}
        <div className="w-full py-12 px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 mb-6">
              {loading ? (
                <SearchDoctorCardSkeleton />
              ) : (
                doctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))
              )}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(currentPage - 1)}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>

                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
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
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DoctorCard({ doctor }) {
  return (
    <>
        <Card className="p-6 rounded-xl shadow-sm flex flex-col md:flex-row gap-6 bg-white mb-10">
          <Link href={`/doctors-profile/${doctor.slug}`} className="absolute inset-0 z-10"/>
          <div className="w-100 md:w-48 h-48 relative  overflow-hidden">
            <Image
              src={doctor.image}
              alt={doctor.name}
              className="object-cover h-[250px] w-[300px] rounded-[30px]"
              width={200}
              height={200}
            />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <p className="font-poppins font-semibold text-[35px]">
                {doctor.name}
              </p>
              <p className="font-poppins font-[400] text-[22px] text-[#0068F9]">
                {doctor.specialty}
              </p>
            </div>

            <div className="flex flex-row sm:items-center gap-4">
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
                {doctor.consultationFees.map((fee, idx) => (
                  <span key={idx} className="flex items-center gap-1">
                    <span className="text-[#20C5AF] font-medium">
                      {fee.amount}
                    </span>
                    <span className="text-black">({fee.method})</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 min-w-[200px]">
            <Link href="tel:+880 1711997402">
            <Button
              variant="outline"
              className="w-full border-blue-500 text-blue-500 hover:bg-blue-50"
            >
              Call Us
            </Button>
            </Link>
            <Link href={"/book-appointment"}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Book Appointment
              </Button>
            </Link>
          </div>
        </Card>
    </>
  );
}

function GradientBackground() {
  return (
    <div>
      <Image
        src="/images/green-ecllipse.png"
        width={0}
        height={0}
        alt="bg"
        sizes="100vw"
        priority
        className="absolute top-0 left-0 w-auto h-full"
      />
      <Image
        src="/images/red-ecllipse.png"
        width={0}
        height={0}
        alt="bg"
        sizes="100vw"
        priority
        className="absolute top-20 left-0 w-auto h-full"
      />
      <Image
        src="/images/green-ecllipse-right.png"
        width={0}
        height={0}
        alt="bg"
        sizes="100vw"
        priority
        className="absolute top-0 right-0 w-auto h-full"
      />
      <Image
        src="/images/red-ecllipse-right.png"
        width={0}
        height={0}
        alt="bg"
        sizes="100vw"
        priority
        className="absolute top-20 right-0 w-auto h-full"
      />
    </div>
  );
}
