import { Button } from "@/components/ui/button";
import { Hospital } from "lucide-react";
import Image from "next/image";

export default function AboutUsSection() {
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left side - About us content */}
          <div className="flex flex-col justify-center">
            <span className="mb-2 text-sm font-medium uppercase text-[#FF937B]">
              About us
            </span>
            <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
              A New Standard
              <br />
              in Patient-Centered
              <br />
              Medical Services
            </h2>
            <p className="mb-8 text-gray-600 max-w-[400px]">
              At Omni Health Care, we are committed to delivering safe,
              efficient, and patient-centered medical services. We bring
              together experienced surgeons, advanced treatment facilities, and
              compassionate care coordination to simplify complex healthcare
              journeys. From the first consultation to post-surgical recovery,
              we ensure every step is smooth, transparent, and focused entirely
              on your well-being.
            </p>

            <div className="mb-8 border-t border-gray-200 pt-8">
              <div className="flex items-start gap-4">
                <div className="flex h-20 w-20 items-center justify-center bg-[#FF937B] text-white">
                  <Hospital />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Medical assessment</h3>
                  <p className="text-sm text-gray-600 max-w-[400px]">
                    We support patients from consultation to full recovery,
                    ensuring a stress-free healthcare journey.
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-fit rounded-full bg-[#051320] text-white font-bold border-gray-300 px-6 py-2 text-sm"
            >
              Read more...
            </Button>
          </div>

          {/* Right side - Image with stats */}
          <div className="relative rounded-3xl ">
            <div className="relative md:h-[670px]">
              <div className={"md:absolute top-20 -left-25 z-10 pr-40"}>
                <Image
                  src="/images/about-us.jpeg"
                  alt="Healthcare professionals"
                  width={0}
                  height={0}
                  priority
                  sizes={"100vw"}
                  className="object-cover w-[500px] h-[300px] md:h-[520px] rounded-tl-[100px]"
                />
              </div>

              {/* Stats overlay */}
              <div className="w-[100%] flex h-full justify-center items-end   text-white bg-[#051320] md:rounded-tr-[100px]">
                <div className="w-[70%]"></div>
                <div className="w-[30%] pr-10 flex h-full flex-col justify-center items-end ">
                  <div className="my-8">
                    <span className="text-[45px] font-bold text-[#FF937B]">
                      15+
                    </span>
                    <p className="text-sm">
                      Expert
                      <br />
                      doctors
                    </p>
                  </div>
                  <div className="my-8">
                    <span className="text-[45px] font-bold text-[#FF937B]">
                      60+
                    </span>
                    <p className="text-sm">
                      Specialized
                      <br />
                      Services
                    </p>
                  </div>
                  <div className="my-8">
                    <span className="text-[45px] font-bold text-[#FF937B]">
                      40+
                    </span>
                    <p className="text-sm">
                      Happy
                      <br />
                      Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
