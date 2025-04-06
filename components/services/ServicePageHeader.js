import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AppointmentForm from "@/components/form/AppointmentForm";
import Link from "next/link";
import parse from "html-react-parser";

export default function ServicePageHeader({ singleService }) {
  const serviceTitle = singleService?.service?.title || "Service";
  const serviceContent = singleService?.service?.content || "No description available.";

  return (
      <main className="flex h-[320px] items-center bg-gradient-to-r from-[#68AAF0] to-[#6BAAF1] p-8">
        <Card className="max-w-7xl mx-auto w-full bg-transparent border-none shadow-none relative flex flex-col justify-center">
          <CardHeader className="text-white m-0 p-0">
            <CardTitle className="text-3xl md:text-4xl font-bold max-w-lg">
              Your {serviceTitle} Treatment in Omni <span className="text-[#FF8300]">Health</span> Care
            </CardTitle>
            <div className="relative group">
              <CardDescription className="text-md md:text-lg mt-2 text-white max-w-2xl line-clamp-2">
                {parse(serviceContent)}
              </CardDescription>
              <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white text-black p-2 rounded-md shadow-lg z-10 max-w-2xl text-sm">
                {parse(serviceContent)}
              </div>
            </div>
          </CardHeader>
          <div className="flex max-w-md gap-8 mt-4">
            <Button variant="outline" className="flex-1 border-blue-500 text-blue-500">
              Call Us
            </Button>
            <Link href="/book-appointment">
              <Button className="flex-1 bg-blue-500">Book Appointment</Button>
            </Link>
          </div>
          <div className="hidden md:block md:absolute md:top-[80px] md:right-0">
            <AppointmentForm />
          </div>
        </Card>
      </main>
  );
}