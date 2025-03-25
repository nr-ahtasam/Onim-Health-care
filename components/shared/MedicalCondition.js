import Image from "next/image";
import HealthCare from "@/components/shared/HealthCare";
import MedicalConditionGrid from "@/components/shared/MedicalConditionGrid";

export default async function MedicalCondition() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div>
        <Image src="/images/red-ecllipse.png"
               width={0}
               height={0}
               alt={"Asdf"}
               sizes={"100vw"}
               priority
               className={"absolute top-40 left-0 w-auto h-full"}
        />
        <Image src="/images/green-ecllipse-right.png"
               width={0}
               height={0}
               alt={"Asdf"}
               sizes={"100vw"}
               priority
               className={"absolute top-0 right-0 w-auto h-full"}
        />
      </div>
      <div >
        <MedicalConditionGrid />
        <HealthCare />
      </div>
    </section>
  );
}