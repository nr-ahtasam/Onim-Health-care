"use client";
import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {useQuery} from "@apollo/client";
import {featureServicesQuery} from "@/lib/graphql";
import Loader from "@/lib/Loader";


export default function MedicalConditionGrid() {
    const [showAll, setShowAll] = useState(false);

    const {data, loading, error} = useQuery(featureServicesQuery)

    if(loading) return <Loader/>;

    // Use API data if available, otherwise fallback to empty array
    const medicalConditions = data?.page?.homeSections?.featuredServices?.nodes || [];

    // Decide which items to show: either the first 6 or all of them
    const displayedConditions = showAll
        ? medicalConditions
        : medicalConditions.slice(0, 6);

    return (
        <div className="container mx-auto px-4 z-10 relative pb-16">
            {/* The Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-20">
                {displayedConditions.map((condition) => (
                    <div className="text-center" key={condition.id}>
                        <Link href={`/service/${condition.serviceId}`}>
                            <div className="bg-white h-[150px] w-[150px] border border-blue-500 rounded-[20px] flex justify-center items-center">
                                <Image
                                    src={condition.serviceFields.serviceIconn.node.mediaItemUrl}
                                    alt={condition.serviceFields.catName}
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full rounded-[20px]"
                                    priority
                                />
                            </div>
                        </Link>
                        <p className="text-[16px] mt-2">{condition.serviceFields.catName}</p>
                    </div>
                ))}
            </div>

            {/* The “View All” button */}
            <div className="text-center mt-16">
                {!showAll && medicalConditions.length > 6 && (
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