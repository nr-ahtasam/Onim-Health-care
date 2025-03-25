"use client";
import Image from "next/image"

export default function ServicesGrid({singleDoctor}) {
  const doctor=singleDoctor.doctor;

  return (
    <div className="container mx-auto px-4 z-10 relative py-16">
      <h2 className={"text-[45px] font-semibold text-center mb-12"}>Services</h2>
      {/* The Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
        {doctor.bodyBasedServices.nodes.map((condition, index) => (
          <div className="text-center" key={index}>
            <div className="bg-white border border-blue-500 rounded-[20px] flex justify-center items-center p-6">
              <Image
                src={condition.bodyBasedServicesField.image.node.mediaItemUrl || "/images/xray.png"}
                alt={condition.name}
                width={0}
                height={0}
                className="object-cover w-full"
                sizes={"100vw"}
                priority
              />
            </div>
            <p className="text-[32px] font-bold mt-2">{condition.name}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
