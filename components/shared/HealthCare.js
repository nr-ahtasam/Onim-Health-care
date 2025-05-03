"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DoctorCardGridSkeleton from "@/lib/DoctorCardGridSkeleton";
import { featureDoctorsQuery } from "@/lib/graphql";
import { useQuery } from "@apollo/client";
import { MapPin, ShoppingBag, Star } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function HealthCare() {
  const { data, loading, error } = useQuery(featureDoctorsQuery);

  if (loading) return <DoctorCardGridSkeleton />;

  // Transform the GraphQL response into the structure required by the UI.
  const doctors = data?.page?.homeSections?.featuredDoctors?.nodes?.map(
    (doctor) => ({
      id: doctor.doctorId,
      name: doctor.title,
      // Modify or extend credentials if available from your data.
      credentials: doctor.specialities.nodes
        .map((speciality) => speciality.name)
        .join(", "),
      rating: doctor.doctorField.rating,
      experience: doctor.doctorField.experience,
      fees: {
        cash: doctor.doctorField.consultationFees || 300,
        bkash: doctor.doctorField.consultationFees || 300,
      },
      location: doctor.doctorField.chamber.nodes[0].title,
      image: doctor.featuredImage?.node?.mediaItemUrl || "/images/doctor.jpeg",
    })
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
    <div className="container mx-auto px-4 py-12 z-10 relative">
      <section className="w-full z-10 relative">
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="space-y-6 max-w-[550px] text-center md:text-start">
            <h2 className="text-3xl md:text-[45px] font-bold text-gray-900 leading-tight ">
              Redefining Modern Healthcare in Bangladesh
            </h2>

            <p className="text-gray-700 text-xl py-4">
              Omni Health Care brings together experienced surgeons,
              state-of-the-art hospitals, and a compassionate care team to
              deliver top-notch treatments.
            </p>
          </div>

          <div className="mb-8 max-w-3xl">
            <Slider {...settings}>
              {doctors?.map((doctor, index) => (
                <Link key={index} href={"/doctors-profile/" + doctor.id}>
                  <Card className="overflow-hidden border border-blue-500">
                    <CardContent className="">
                      <div className="flex items-start gap-4">
                        <Image
                          src={doctor?.image || ""}
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
                            {doctor.specialities?.nodes
                              .map((speciality) => speciality.name)
                              .join(", ")}
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
                            Consultation Fees:
                          </p>
                          <p className="text-sm ">
                            <span className={"text-[#20C5AF]"}>
                              {doctor.fees.cash}
                            </span>{" "}
                            Taka (Cash) &{" "}
                            <span className={"text-[#20C5AF]"}>
                              {doctor.fees.bkash}
                            </span>{" "}
                            Taka (bKash)
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className={"text-blue-500"} />
                          <span className="text-sm text-muted-foreground">
                            {doctor.location}
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            className="flex-1 border-blue-500 text-blue-500"
                          >
                            Call Us
                          </Button>
                          <Button
                            className="flex-1 bg-blue-500 cursor-pointer"
                            onClick={() =>
                              (window.location.href = "/book-appointment")
                            }
                          >
                            Book Appointment
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="bg-[#FF937B] text-white hover:bg-[#FF937B]/80">
            View All
          </Button>
        </div>
      </section>
    </div>
  );
}
