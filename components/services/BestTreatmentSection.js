"use client"; // Mark as client component for useQuery
import Image from "next/image";
import parse from "html-react-parser";

export default function BestTreatmentSection({ singleService }) {
    const longDescription = singleService?.service?.serviceFields?.longDescription || "No description available.";

    // Parse the longDescription HTML into React elements
    const parsedContent = parse(longDescription);

    // Extract the <h2> (first element) as the title, and the rest as description
    let title = "No title available.";
    let description = parsedContent;

    if (Array.isArray(parsedContent)) {
        // Find the first <h2> element
        const h2Index = parsedContent.findIndex((element) => element.type === "h2");
        if (h2Index !== -1) {
            title = parsedContent[h2Index].props.children; // Extract the text inside <h2>
            description = parsedContent.slice(h2Index + 1); // Everything after <h2>
        }
    } else if (parsedContent.type === "h2") {
        // If the whole content is just an <h2>
        title = parsedContent.props.children;
        description = null;
    }

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
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <div className="text-gray-500 mt-4 leading-10">
                        {description || "No additional description available."}
                    </div>
                </div>
            </div>
        </div>
    );
}