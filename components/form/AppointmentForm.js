"use client";

import { useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getAllServices } from "@/lib/graphql";
import LoadingSkeletonForm from "@/lib/LoadingSkeletonForm";

export default function AppointmentForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  });

  // 1) fetch services
  // const {
  //   data: servicesData,
  //   loading: servicesLoading,
  //   error: servicesError,
  // } = useQuery(FEATURED_SERVICES_QUERY);

  // const serviceOptions = (servicesData?.page?.homeSections
  //   ?.featuredServices?.nodes || []
  // ).map((svc) => ({
  //   value: svc.serviceId.toString(),
  //   label: svc.serviceFields.catName,
  // }));

  // 2) build options once data arrives
  const { data, loading, error } = useQuery(getAllServices);
  const serviceOptions = data?.services?.nodes.map((d) => ({
    value: d.databaseId.toString(),
    label: d.title,
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
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      date: formData.date,
    }).toString();
    router.push(`/book-appointment?${params}`);
  };

  // 5) loading / error UI
  if (loading) return <LoadingSkeletonForm />;
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
          name="email"
          type="email"
          placeholder="Enter your email"
          className="rounded-none bg-transparent border-gray-700 text-white placeholder:text-white"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
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
            <SelectValue placeholder="Select service" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          name="date"
          type="date"
          className={`
            block w-full 
            rounded-none 
            border border-gray-700 
            bg-transparent 
            text-white 
            p-2 
            appearance-auto
            [&::-webkit-calendar-picker-indicator]:invert
            [&::-moz-calendar-picker-indicator]:invert
          `}
          value={formData.date}
          onChange={(e) => handleChange("date", e.target.value)}
          required
        />

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
