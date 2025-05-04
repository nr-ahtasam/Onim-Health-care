"use client";
const BlogCardSkeleton = () => {
  return (
    <div className="container mx-auto flex">
      <div className="flex flex-col md:flex-row h-[350px] bg-white overflow-hidden md:w-[700px] mb-15 animate-pulse rounded-xl shadow-sm">
        {/* Image Skeleton */}
        <div className="w-full md:w-[500px] h-[300px] md:h-auto relative bg-red-200">
          {/* Optional: Add shimmer effect with a gradient */}
        </div>

        {/* Content Skeleton */}
        <div className="md:w-1/2 p-6 space-y-3">
          {/* Date & Category */}
          <div className="flex items-center gap-4">
            <div className="h-4 w-4 bg-gray-300 rounded-full" />
            <div className="h-4 w-30 bg-gray-300 rounded" />
            <div className="h-4 w-20 bg-gray-300 rounded" />
          </div>

          {/* Title */}
          <div className="h-5 w-[300px] bg-gray-300 rounded" />
          <div className="h-5 w-[100px] bg-gray-300 rounded" />

          {/* Divider */}
          <div className="border-t border-gray-200 my-3" />

          {/* Excerpt */}
          <div className="space-y-2">
            <div className="h-2 w-full bg-gray-300 rounded" />
            <div className="h-2 w-full bg-gray-300 rounded" />
            <div className="h-2 w-full bg-gray-300 rounded" />
            <div className="h-2 w-5/6 bg-gray-300 rounded" />
          </div>

          {/* Button */}
          <div className="flex justify-end ">
            <div className="h-8 w-30 bg-gray-300 rounded-md mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
