import AppointmentForm from "@/components/form/AppointmentForm";
import Image from "next/image";

export default function BestTreatmentSection(){
  return (
    <div className="py-16 relative overflow-hidden">
      <div>
        <Image src="/images/red-ecllipse.png"
               width={0}
               height={0}
               alt={"Asdf"}
               sizes={"100vw"}
               priority
               className={"absolute top-0 left-0 w-auto h-full"}
        />
        <Image src="/images/green-ecllipse-right.png"
               width={0}
               height={0}
               alt={"Asdf"}
               sizes={"100vw"}
               priority
               className={"absolute top-50 right-0 w-auto h-full"}
        />
      </div>
      <div className={"max-w-7xl mx-auto flex gap-4 relative px-4"}>
        <div className={"max-w-3xl relative z-10"}>
          <h2 className="text-3xl font-bold">Get the best treatment</h2>
          <p className=" text-gray-500 mt-4 leading-10">Pristyn Care is a dedicated healthcare provider where you can get optimal care. We focus on improving the patient’s comfort and providing a safe, hygienic, clean, and sanitized environment at our treatment centers. To deliver the best quality services and to maintain high standards of healthcare, we leverage the latest technology and USFDA-approved surgical and diagnostic tools.
            Our doctors are skilled in the modern laparoscopic technique and traditional open technique to repair all types of hernia in the best way possible. We also ensure that top-grade hernia mesh is used for the treatments to reduce the chances of mesh-related complications. We provide personalized care to our patients and assist them throughout the treatment journey.</p>
        </div>
      </div>
    </div>
  )
}