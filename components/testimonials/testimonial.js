import dummyTestimonials from "@/dummy-data/testimonials";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Simulate fetching data
  useEffect(() => {
    const fetchData = () => {
      setTestimonials(dummyTestimonials);
    };
    fetchData();
  }, []);
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
      <section className="mx-auto my-16 container px-4 relative z-10">
        {/* Testimonials Section */}
        <div className="w-full bg-gray-100 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Testimonial Heading */}
              <div className="md:col-span-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  What our customers say
                </h2>
                <p className="text-gray-600 mb-6">
                  Elit odio vitae metus sed. Justo urna id quis augue. Lectus
                  donec venenatis pretium cras. Ut enim erat dolor ultricies
                  aliquam
                </p>
              </div>

              {/* Testimonial Cards */}
              <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials
                  .slice(activeTestimonial * 2, activeTestimonial * 2 + 2)
                  .map((testimonial) => (
                    <div key={testimonial.id} className="flex flex-col">
                      {/* Quote Container */}
                      <div className="bg-white p-6 rounded-br-[2rem]">
                        <div className="text-5xl text-emerald-400 mb-4">
                          <Quote />
                        </div>
                        <p className="text-gray-600">{testimonial.quote}</p>
                      </div>

                      {/* Avatar and Name Container */}
                      <div className="pt-6 flex items-center gap-4">
                        <div className="w-14 h-14 relative rounded-md overflow-hidden">
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
              </div>
            </div>

            {/* Horizontal Line with Pagination Dots */}
            <div className="mt-10 flex items-center">
              {/* Horizontal Line */}
              <div className="flex-1 h-px bg-gray-300 mr-4"></div>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {Array(Math.ceil(testimonials.length / 2))
                  .fill(0)
                  .map((_, index) => (
                    <button
                      key={index}
                      className={`w-4 h-4 rounded-full cursor-pointer ${
                        activeTestimonial === index
                          ? "bg-emerald-400"
                          : "bg-gray-300"
                      }`}
                      onClick={() => setActiveTestimonial(index)}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
