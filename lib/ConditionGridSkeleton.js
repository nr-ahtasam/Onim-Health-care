const ConditionGridSkeleton = ({ count = 8 }) => {
  return (
    <div className="container mx-auto mb-20">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10 md:gap-20">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center animate-pulse"
          >
            <div className="bg-gray-400 h-[100px] w-[100px] rounded-[20px]" />
            <div className="h-4 bg-gray-400 w-3/4 mt-2 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConditionGridSkeleton;
