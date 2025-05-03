import { Card, CardContent } from "@/components/ui/card";

const DoctorCardGridSkeleton = ({ count = 2 }) => {
  return (
    <div className="container mx-auto px-4 py-12 z-10 relative">
      <section className="w-full z-10 relative">
        {/* Two-column layout: Left text and Right grid */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Text Skeleton */}
          <div className="space-y-6 max-w-[550px] text-start md:text-start  mt-5 ml-20">
            <div className="h-8 w-90 bg-gray-300 rounded  " />
            <div className="h-8 w-80 bg-gray-300 rounded " />
            <div className="h-8 w-70 bg-gray-300 rounded  " />
            <div className="h-4 w-100 bg-gray-300 rounded mt-8 " />
            <div className="h-4 w-100 bg-gray-300 rounded  " />
            <div className="h-4 w-100 bg-gray-300 rounded  " />
          </div>

          {/* Doctor Cards Skeleton Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
            {Array.from({ length: count }).map((_, index) => (
              <Card
                key={index}
                className="animate-pulse border border-blue-200"
              >
                <CardContent className="p-4 space-y-4">
                  {/* Top section */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gray-300 w-20 h-20" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-3/4 bg-gray-300 rounded" />
                      <div className="h-3 w-1/2 bg-gray-300 rounded" />
                      <div className="flex gap-2">
                        <div className="h-3 w-12 bg-gray-300 rounded" />
                        <div className="h-3 w-16 bg-gray-300 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Body info */}
                  <div className="space-y-2">
                    <div className="h-3 w-24 bg-gray-300 rounded" />
                    <div className="h-4 w-3/4 bg-gray-300 rounded" />
                    <div className="h-4 w-1/2 bg-gray-200 rounded" />
                    <div className="h-4 w-1/3 bg-gray-300 rounded" />
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <div className="h-10 w-full bg-gray-300 rounded" />
                    <div className="h-10 w-full bg-gray-300 rounded" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Button Skeleton */}
        <div className="flex justify-center mt-10">
          <div className="h-10 w-32 bg-gray-300 rounded animate-pulse" />
        </div>
      </section>
    </div>
  );
};

export default DoctorCardGridSkeleton;
