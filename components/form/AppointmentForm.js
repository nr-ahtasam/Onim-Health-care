"use client";

import { useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FEATURED_SERVICES_QUERY, getAllDoctors } from "@/lib/graphql";
import LoadingSkeletonForm from "@/lib/LoadingSkeletonForm";
import { fetchLocations } from "@/lib/fetchers";

export default function AppointmentForm({setIsModalOpen}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    doctor: "",
  });

  const {
    data: doctorsData,
    loading: doctorsLoading,
    error: doctorsError,
  } = useQuery(getAllDoctors);
  const doctors = doctorsData?.doctors?.nodes || [];

  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const loadLocations = async () => {
      try {
        const locationsData = await fetchLocations();
        setLocations(locationsData);
      } catch (err) {
        console.error("Failed to fetch locations", err);
      }
    }
    loadLocations();
  }, []);

  const { data, loading, error } = useQuery(FEATURED_SERVICES_QUERY);
  const serviceOptions = data?.page?.homeSections?.featuredServices?.nodes.map((d) => ({
    value: d.serviceId.toString(),
    label: d.serviceFields?.catName,
  }));

  // 3) change handler
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // 4) submit → push query params to BookAppointment page
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      location: formData.location,
      doctor: formData.doctor,
    }).toString();
    if(setIsModalOpen) setIsModalOpen(false);
    router.push(`/book-appointment?${params}`);
  };

  // 5) loading / error UI
  if (loading || doctorsLoading ) return <LoadingSkeletonForm />;
  if (error)
    return (
      <div className="p-4 text-red-600">
        Error loading services: {error.message}
      </div>
    );

  return (
    <div className="bg-[#0f1b2a] rounded-br-[50px] p-6 md:p-8 shadow-xl max-w-[400px]">
      <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
        Book an appointment
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          type="text"
          placeholder="Enter your name"
          className="rounded-none bg-transparent border-gray-700 text-white placeholder:text-white"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          required
        />

        <Input
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          className="rounded-none bg-transparent border-gray-700 text-white placeholder:text-white"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          required
        />

        {/* dynamic services */}
        <Select
          value={formData.service}
          onValueChange={(v) => handleChange("service", v)}
        >
          <SelectTrigger
            className={`
              rounded-none 
              w-full 
              bg-transparent 
              border border-gray-700 
              text-white         /* sets currentColor to white */
              [&>svg]:fill-current  /* make the SVG’s fill use currentColor */
            `}
          >
            <SelectValue placeholder="Select disease" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={formData.location}
          onValueChange={(v) => handleChange("location", v)}
        >
          <SelectTrigger
            className={`
              rounded-none 
              w-full 
              bg-transparent 
              border border-gray-700 
              text-white         /* sets currentColor to white */
              [&>svg]:fill-current  /* make the SVG’s fill use currentColor */
            `}
          >
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((loc) => (
              <SelectItem key={loc.id.toString()} value={loc.id.toString()}>
                {loc.title?.rendered}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>


        <Select
          value={formData.doctor}
          onValueChange={(v) => handleChange("doctor", v)}
        >
          <SelectTrigger
            className={`
              rounded-none 
              w-full 
              bg-transparent 
              border border-gray-700 
              text-white         /* sets currentColor to white */
              [&>svg]:fill-current  /* make the SVG’s fill use currentColor */
            `}
          >
            <SelectValue placeholder="Select doctor" />
          </SelectTrigger>
          <SelectContent>
            {doctors.map((doc) => (
              <SelectItem key={doc.databaseId.toString()} value={doc.databaseId.toString()}>
                {doc.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          type="submit"
          className="w-full rounded-full bg-white text-blue-500 hover:bg-gray-200"
        >
          Next
        </Button>
      </form>
    </div>
  );
}
