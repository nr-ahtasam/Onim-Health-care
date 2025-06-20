const LoadingSkeletonForm = () => {
  return (
    <div className="bg-white rounded-br-[50px] p-6 md:p-8 shadow-xl w-[400px]">
      <div>
        <h3 className=" md:text-4xl font-bold  mb-6 bg-gray-300 w-3/4 h-6"></h3>
        <h3 className=" md:text-4xl font-bold  mb-6 bg-gray-300 w-full h-6"></h3>
      </div>
      <div className="w-full h-10 bg-gray-300 mb-4"></div>
      <div className="w-full h-10 bg-gray-300 mb-4"></div>
      <div className="w-full h-10 bg-gray-300 mb-4"></div>
      <div className="w-full h-10 bg-gray-300 mb-4"></div>
      <div className="w-full h-10 bg-gray-300 mb-4"></div>
      <div className="w-full h-10 bg-gray-300 mt-6 rounded-2xl"></div>
    </div>
  );
};

export default LoadingSkeletonForm;
