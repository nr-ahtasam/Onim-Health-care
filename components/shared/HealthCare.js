import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {MapPin, ShoppingBag, Star} from "lucide-react"

export default function HealthCare() {
  const doctors = [
    {
      name: "Dr. Mohammad Shah Alam",
      credentials: "MBBS, FCPS, Fellow Colorectal Surgery",
      rating: 4.7,
      experience: "37+ Years Experience",
      fees: {
        cash: "1000",
        bkash: "800",
      },
      location: "York Hospital Limited",
      image: "/images/doctor.jpeg",
    },
    {
      name: "Dr. Mohammad Shah Alam",
      credentials: "MBBS, FCPS, Fellow Colorectal Surgery",
      rating: 4.7,
      experience: "37+ Years Experience",
      fees: {
        cash: "1000",
        bkash: "800",
      },
      location: "York Hospital Limited",
      image: "/images/doctor.jpeg",
    },
  ]

  return (
    <section className="w-full py-12 z-10 relative">
      <div className="flex flex-col md:flex-row ">
        <div className="space-y-6 max-w-[550px] text-center md:text-start">
          <h2 className="text-3xl md:text-[60px] font-bold text-gray-900 leading-tight ">
            World Standard Healthcare Doctors
          </h2>

          <p className="text-gray-700 text-xl py-4">
            Commodo diam sed sit amet volutpat sollicitudin tincidunt varius scelerisque. Ut rhoncus diam dictum ac orci
            purus.
          </p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {doctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden border border-blue-500">
              <CardContent className="p-6">
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
                    <p className="text-sm text-muted-foreground">{doctor.credentials}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <div className="flex items-center ">
                        <Star className="h-4 w-4 text-yellow-300" />
                        <span className="ml-1 text-sm">{doctor.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <ShoppingBag className="h-4 w-4 "/>
                      <span className="ml-1 text-sm">{doctor.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-sm font-medium">Consultation Fees:</p>
                    <p className="text-sm ">
                      <span className={"text-[#20C5AF]"}>{doctor.fees.cash}</span> Taka (Cash) &  <span className={"text-[#20C5AF]"}>{doctor.fees.bkash}</span> Taka (bKash)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className={"text-blue-500"}/>
                    <span className="text-sm text-muted-foreground">{doctor.location}</span>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 border-blue-500 text-blue-500">
                      Call Us
                    </Button>
                    <Button className="flex-1 bg-blue-500">Book Appointment</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="bg-[#FF937B] text-white hover:bg-[#FF937B]/80">
          View All
        </Button>      </div>
    </section>
  )
}

