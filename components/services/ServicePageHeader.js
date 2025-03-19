// app/doctor-profile/page.tsx
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import AppointmentForm from "@/components/form/AppointmentForm";

export default function ServicePageHeader() {
  return (
    <main className="flex h-[300px] items-center bg-gradient-to-r from-[#68AAF0] to-[#6BAAF1] p-8">
      <Card className="max-w-7xl mx-auto w-full bg-transparent border-none shadow-none relative">
        <CardHeader className={"text-white m-0 p-0 "}>
          <CardTitle className="text-3xl md:text-4xl font-bold max-w-lg">Your Hernia Treatment in Omni <span className={"text-[#FF8300]"}>Health</span> Care</CardTitle>
          <CardDescription className="text-md md:text-lg mt-2 text-white max-w-2xl">
            Do you have a bulge in the abdomen, and it’s painful? The bulge is most likely a hernia that will continue growing without proper treatment.
          </CardDescription>
        </CardHeader>
        <div className="flex max-w-md gap-8">
          <Button variant="outline" className="flex-1 border-blue-500 text-blue-500">
            Call Us
          </Button>
          <Button className="flex-1 bg-blue-500">Book Appointment</Button>
        </div>
        <div className={"hidden md:block md:absolute md:top-[80px] md:right-0 "}>
          <AppointmentForm/>
        </div>
      </Card>

    </main>
  )
}
