"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import dummyTestimonials from "@/dummy-data/testimonials";
import { Quote } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";

export default function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    padding: 20,
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
    <div className="py-16 relative overflow-hidden">
      <div>
        <Image
          src="/images/green-ecllipse.png"
          width={0}
          height={0}
          alt={"Asdf"}
          sizes={"100vw"}
          priority
          className={"absolute top-0 left-0 w-auto h-full"}
        />
        <Image
          src="/images/red-ecllipse.png"
          width={0}
          height={0}
          alt={"Asdf"}
          sizes={"100vw"}
          priority
          className={
            "absolute -top-30 left-200 w-auto h-full transform rotate-180"
          }
        />
        <Image
          src="/images/green-ecllipse-right.png"
          width={0}
          height={0}
          alt={"Asdf"}
          sizes={"100vw"}
          priority
          className={"absolute top-0 right-0 w-auto h-full"}
        />
      </div>
      <div className="mx-auto my-16 container px-4 relative z-10">
        <div className="">
          <div className="flex flex-col md:flex-row justify-evenly">
            {/* Testimonial Heading */}
            <div className="md:col-span-2 md:max-w-[230px] text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Testimonials
              </h2>
              <p className="text-gray-600 mb-6">
                Let's have a look at some of the feedbacks from our clients!
              </p>
            </div>

            {/* Testimonial Cards */}
            <div className="mb-8 max-w-4xl">
              <Slider {...settings}>
                {dummyTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="flex flex-col">
                    {/* Quote Container */}
                    <div className="bg-white p-16 rounded-br-[50px] relative">
                      <div className="absolute top-10 -left-3 text-5xl rounded-tr-[15px] bg-[#8EEAD2] flex items-center justify-center text-white h-15 w-15 mb-4">
                        <Quote className={"transform rotate-180"} size={25} />
                      </div>
                      <ScrollArea className="text-gray-600 h-[200px] text-justify">
                        {testimonial.quote}
                      </ScrollArea>
                    </div>

                    {/* Avatar and Name Container */}
                    <div className="pt-6 flex items-center gap-4">
                      <div className="w-14 h-14 relative rounded-tr-[20px] overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Horizontal Line with Pagination Dots */}
          <div className="mt-10 flex items-center">
            {/* Horizontal Line */}
            <div className="flex-1 h-px bg-gray-300 mr-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
