import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PageHeader({ doctor }) {
  return (
    <main className="flex h-[300px] items-center bg-gradient-to-r from-[#68AAF0] to-[#6BAAF1] justify-center p-8">
      <Card className="max-w-md w-full text-center bg-transparent border-none shadow-none">
        <CardHeader className={"text-white"}>
          <CardTitle className="text-3xl md:text-5xl font-bold">
            Doctor&apos;s Profile
          </CardTitle>
          <CardDescription className="mt-4 text-xl md:text-2xl font-bold text-white">
            {doctor.title}
          </CardDescription>
          <CardDescription className="text-md md:text-lg  text-white">
            {doctor.specialities?.nodes
              .map((speciality) => speciality?.name)
              .join(" & ")}
          </CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}
