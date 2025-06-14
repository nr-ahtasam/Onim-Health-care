"use client";
import { Button } from "@/components/ui/button";
import ConditionGridSkeleton from "@/lib/ConditionGridSkeleton";
import { FEATURED_SERVICES_QUERY } from "@/lib/graphql";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MedicalConditionGrid({ singleDoctor }) {
  const [showAll, setShowAll] = useState(false);

  const { data, loading, error } = useQuery(FEATURED_SERVICES_QUERY, {
    skip: !!singleDoctor,
  });

  // if (loading) return <Loader />;
  if (!singleDoctor && loading) return <ConditionGridSkeleton />;
  if (!singleDoctor && error) return <div>Error loading featured services: {error.message}</div>;

  // Use API data if available, otherwise fallback to empty array
  const medicalConditions = singleDoctor
    ? singleDoctor?.doctor?.doctorField?.service?.nodes || []
    : data?.page?.homeSections?.featuredServices?.nodes || [];

  // Decide which items to show: either the first 6 or all of them
  const displayedConditions = showAll
    ? medicalConditions
    : medicalConditions.slice(0, 8);
  return (
    <div className="container mx-auto px-4 z-10 relative pb-16">
      {/* The Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10 md:gap-20">
        {displayedConditions.map((condition) => (
          <div
            className="flex flex-col justify-center items-center"
            key={condition.id}
          >
            <Link href={`/service/${condition.slug}`}>
              <div className="bg-white h-[100px] w-[100px] border border-blue-500 rounded-[20px] flex  items-center">
                <Image
                  src={condition.serviceFields.serviceIconn?.node.mediaItemUrl || "/images/xray.png"}
                  alt={condition.serviceFields.catName || condition.slug}
                  width={200}
                  height={200}
                  className=" object-cover w-full h-full rounded-[20px]"
                  priority
                />
              </div>
            </Link>
            <p className="h-12 w-[160px] text-center text-[16px] mt-2">
              {condition.serviceFields.catName}
            </p>
          </div>
        ))}
      </div>

      {/* The “View All” button */}
      <div className="text-center mt-8">
        {!showAll && medicalConditions.length > 8 && (
          <Button
            className="bg-[#FF937B] text-white hover:bg-[#FF937B]/80"
            onClick={() => setShowAll(true)}
          >
            View All
          </Button>
        )}
        {showAll && (
          <Button
            className="bg-[#FF937B] text-white hover:bg-[#FF937B]/80"
            onClick={() => setShowAll(false)}
          >
            View Less
          </Button>
        )}
      </div>
    </div>
  );
}
