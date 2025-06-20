"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

// Add these imports for react-slick CSS
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CallUs } from "./CallUs";

export default function DoctorProfileCard({ singleService }) {
  // Fetch dynamic data and map it to the static structure
  const dynamicDoctors =
    singleService?.service?.serviceFields?.longDescriptionCopy?.nodes || [];

  const doctors = dynamicDoctors.map((doctor) => ({
    id: doctor.doctorId,
    slug: doctor.slug,
    name: doctor.title || "Unknown Doctor",
    credentials:
      doctor.specialities?.nodes?.map((spec) => spec.name).join(", "),
    rating: doctor.doctorField.rating
      ? doctor.doctorField.rating.toFixed(1)
      : "N/A",
    experience: doctor.doctorField.experience
      ? `${doctor.doctorField.experience} ${
          doctor.doctorField.experience === 1 ? "Year" : "Years"
        } Experience`
      : "N/A",
    fees: {
      cash: doctor.doctorField.consultationFees?.toString() || "N/A",
      bkash:
        doctor.doctorField.consultationFeesDiscount?.toString() ||
        doctor.doctorField.consultationFees?.toString() ||
        "N/A",
    },
    location: doctor.doctorField.location?.nodes?.[0]?.title || "N/A",
    image:
      doctor.featuredImage?.node?.mediaItemUrl || "/images/doctor.jpeg",
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    padding: 20,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  
  return (
    <>
      <div className={"mx-4 my-16"}>
        <h2
          className={"text-3xl md:text-[45px] font-semibold text-center mb-12"}
        >
          Best Doctors For {singleService?.service?.title} in Bangladesh
        </h2>
        <div className="container mx-auto px-4 z-10 relative">
          <section className="w-full py-4 z-10 relative">
            <div className="flex flex-col md:flex-row justify-evenly">
              <div className="mb-8 max-w-7xl">
                <Slider {...settings}>
                  {doctors?.map((doctor, index) => (
                      <Card
                        key={index}
                        className="overflow-hidden border border-blue-500 cursor-pointer"
                        onClick={() => (window.location.href = `/doctors-profile/${doctor.slug}`)}
                      >
                        <CardContent className="">
                          <div className="flex items-start gap-4">
                            <Image
                              src={doctor.image}
                              alt={doctor.name}
                              width={0}
                              height={0}
                              className="rounded-full w-20 h-20 object-cover"
                              sizes={"100vw"}
                              priority
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold">{doctor.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {doctor.credentials}
                              </p>
                              <div className="mt-1 flex items-center gap-2">
                                <div className="flex items-center ">
                                  <Star className="h-4 w-4 text-yellow-300" />
                                  <span className="ml-1 text-sm">
                                    {doctor.rating}
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <ShoppingBag className="h-4 w-4 " />
                                  <span className="ml-1 text-sm">
                                    {doctor.experience}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 space-y-3">
                            <div>
                              <p className="text-sm font-medium">
                                Consultation Fees: ৳ <span className="text-[#20C5AF]"> {doctor.fees.cash} </span>
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className={"text-blue-500"} />
                              <span className="text-sm text-muted-foreground">
                                {doctor.location}
                              </span>
                            </div>
                            <div className="flex justify-center gap-3">
                              <CallUs />
                              <Link href={"/book-appointment"}>
                                <Button className="flex-1 bg-blue-500">
                                  Book Appointment
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                onClick={() => (window.location.href = "/search-doctors")}
                className="bg-[#FF937B] text-white hover:bg-[#FF937B]/80"
              >
                View All
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
