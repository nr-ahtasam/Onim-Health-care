"use client"; // Mark as client component for useQuery
import Image from "next/image";
import parse from "html-react-parser";

export default function BestTreatmentSection({ singleService }) {
    const longDescription = singleService?.service?.serviceFields?.longDescription || "No description available.";

    return (
        <div className="py-16 relative overflow-hidden">
            <div>
                <Image
                    src="/images/red-ecllipse.png"
                    width={0}
                    height={0}
                    alt={"Asdf"}
                    sizes={"100vw"}
                    priority
                    className={"absolute top-0 left-0 w-auto h-full"}
                />
                <Image
                    src="/images/green-ecllipse-right.png"
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
                    <div 
                        className="mt-4 leading-10 text-justify diagnosis-treatment"
                        dangerouslySetInnerHTML={{ __html: longDescription }}
                    />
                </div>
            </div>
        </div>
    );
}