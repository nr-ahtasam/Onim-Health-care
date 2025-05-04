"use client";

import LoadingSkeleton from "@/lib/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Optional: Full-page skeleton or header loading */}
      <LoadingSkeleton />

      {/* Blog skeleton cards in a column layout */}
      {/* <div className="flex flex-col gap-8 mt-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </div> */}
    </div>
  );
}
