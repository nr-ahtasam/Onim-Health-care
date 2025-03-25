import Image from "next/image";

export default function DoctorChambers({singleDoctor }) {
    return (
        <div className="w-full py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Top divider */}
                <div className="border-t border-gray-300 mb-10"></div>

                {/* Doctor name and title */}
                <div className="text-center mb-12">
                    <p className="text-blue-500 mb-2 font-bold text-[25px]">Chambers Of</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{doctorName}</h2>
                </div>

                {/* Specialties with Flexbox */}
                <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
                    {specialties.map((specialty) => (
                        <div
                            key={specialty.id}
                            className="flex flex-col items-center w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)]"
                        >
                            {/* Outer rounded border */}
                            <div className="w-52 h-52 rounded-full border border-gray-400 bg-white flex items-center justify-center mb-6">
                                {/* Inner image container */}
                                <div className="w-44 h-44 rounded-full shadow-md overflow-hidden relative">
                                    <Image
                                        src={specialty.image || "/placeholder.svg"}
                                        alt={specialty.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-center mb-3">{specialty.name}</h3>
                            <p className="text-gray-600 text-center text-sm">{specialty.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}