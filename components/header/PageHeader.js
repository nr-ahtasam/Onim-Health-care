// app/doctor-profile/page.tsx
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function PageHeader() {
  return (
    <main className="flex h-[300px] items-center bg-gradient-to-r from-[#68AAF0] to-[#6BAAF1] justify-center p-8">
      <Card className="max-w-md w-full text-center bg-transparent border-none shadow-none">
        <CardHeader className={"text-white"}>
          <CardTitle className="text-3xl md:text-5xl font-bold">Doctor&apos;s Profile</CardTitle>
          <CardDescription className="mt-4 text-xl md:text-2xl font-bold text-white">
            Dr. Mohammad Shah Alam
          </CardDescription>
          <CardDescription className="text-md md:text-lg  text-white">
            Arthroscopy &amp; Arthroplasty Surgeon
          </CardDescription>
        </CardHeader>
      </Card>
    </main>
  )
}
