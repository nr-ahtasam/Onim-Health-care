"use client";

import { Phone } from "lucide-react"
import Link from "next/link"
import { useQuery } from "@apollo/client";
import { baseSetup } from "@/lib/graphql";

export const CallUs = () => {
  const {data,loading,error} = useQuery(baseSetup);
  const siteSetup = data?.siteSetup;
  return (
    <Link
      href={`tel:+880 ${siteSetup?.siteSetupFields?.phoneNumber}`}
      className="w-full inline-flex items-center justify-center text-[15px] text-white bg-[#FF937B] rounded-lg hover:bg-[#e08e7c] transition-colors duration-200 p-2"
    >
      <Phone size={16} className="mr-1" />
      Call Us
    </Link>
  )
}