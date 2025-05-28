"use client";

const CalendarSkeleton = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 w-full lg:max-w-[520px] border border-gray-100">
      <div className="flex flex-col items-center">
        <div className="h-6 w-60 bg-gray-200 rounded mb-6 animate-pulse" />

        {/* Calendar grid placeholder */}
        <div className="grid grid-cols-7 gap-2 w-full p-4">
          {Array.from({ length: 35 }).map((_, index) => (
            <div
              key={index}
              className="h-10 w-full bg-gray-200 rounded animate-pulse"
            />
          ))}
        </div>
      </div>

      {/* Legend Skeleton */}
      <div className="flex flex-row mt-4 text-sm justify-between">
        {[1, 2, 3].map((item) => (
          <div className="flex items-center gap-3" key={item}>
            <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse" />
            <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarSkeleton;
