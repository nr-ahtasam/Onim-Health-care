import Image from "next/image";

export default function DoctorChambers({ singleDoctor }) {
  const doctor = singleDoctor?.doctor;
  const chambers = doctor?.doctorField?.chamber?.nodes || [];

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top divider */}
        <div className="border-t border-gray-300 mb-10"></div>

        {/* Doctor name and title */}
        <div className="text-center mb-12">
          <p className="text-blue-500 mb-2 font-bold text-[25px]">
            Chambers Of
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {doctor?.title}
          </h2>
        </div>

        {/* Chamber cards */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
          {chambers.map((chamber) => {
            const chamberImage = chamber?.featuredImage?.node?.mediaItemUrl;
            return (
              <div
                key={chamber.id}
                className="flex flex-col items-center w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)]"
              >
                {/* Outer border */}
                <div className="w-52 h-52 rounded-full border border-gray-400 bg-white flex items-center justify-center mb-6">
                  {/* Inner image */}
                  <div className="w-44 h-44 rounded-full shadow-md overflow-hidden relative">
                    <Image
                      src={chamberImage || "/images/Chamber.png"}
                      alt={chamber?.title || "Chamber"}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Chamber Title */}
                <h3 className="text-lg font-semibold text-center mb-1">
                  {chamber.title}
                </h3>

                {/* Chamber Timing */}
                <p className="text-gray-600 text-center text-sm">
                  {chamber?.chamberFields?.timing || "Timing not specified"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
