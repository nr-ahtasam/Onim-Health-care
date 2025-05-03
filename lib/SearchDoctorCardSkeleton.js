import { Card } from "@/components/ui/card";

const SearchDoctorCardSkeleton = () => {
  // You can change the count as needed
  const skeletonCount = 4;

  return (
    <>
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <Card
          key={index}
          className="p-6 rounded-xl shadow-sm flex flex-col md:flex-row gap-6 bg-white mb-10 animate-pulse"
        >
          {/* Image Placeholder */}
          <div className="w-full md:w-48 h-48 relative rounded-lg bg-gray-200" />

          {/* Content Placeholder */}
          <div className="flex-1 space-y-4">
            <div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-6 bg-gray-200 rounded w-1/2" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="h-6 w-24 bg-gray-200 rounded" />
              <div className="h-6 w-28 bg-gray-200 rounded" />
            </div>

            <div>
              <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
              <div className="flex gap-2 flex-wrap">
                <div className="h-5 w-24 bg-gray-200 rounded" />
                <div className="h-5 w-24 bg-gray-200 rounded" />
              </div>
            </div>
          </div>

          {/* Buttons Placeholder */}
          <div className="flex flex-col gap-4 min-w-[200px]">
            <div className="h-10 bg-gray-200 rounded w-full" />
            <div className="h-10 bg-gray-300 rounded w-full" />
          </div>
        </Card>
      ))}
    </>
  );
};

export default SearchDoctorCardSkeleton;
