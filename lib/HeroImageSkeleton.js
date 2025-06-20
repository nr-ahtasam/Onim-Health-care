import React from "react";

export default function HeroImageSkeleton() {
  return (
    <div className="relative ml-20 md:w-1/2 flex justify-end animate-pulse">
      {/* Image skeleton */}
      <div className="rounded-tl-[100px] md:rounded-tl-[200px] relative z-10 w-[600px] h-[300px] md:h-[500px] bg-gray-300 dark:bg-gray-700" />

      {/* Blue banner (can use a shimmer gradient if styled) */}
      <div className="absolute bottom-0 left-0 right-0 h-86 z-0 bg-blue-200 dark:bg-blue-900 opacity-30" />
    </div>
  );
}
