const LoadingSkeletonForm = () => {
  return (
    <div className="bg-white rounded-br-[50px] p-6 md:p-8 shadow-xl max-w-[400px]">
      <div>
        <h3 className=" md:text-4xl font-bold  mb-6 bg-gray-400 w-40 h-6"></h3>
        <h3 className=" md:text-4xl font-bold  mb-6 bg-gray-400 w-60 h-6"></h3>
      </div>
      <div className="w-60 h-10 bg-gray-400 mb-4"></div>
      <div className="w-60 h-10 bg-gray-400 mb-4"></div>
      <div className="w-60 h-10 bg-gray-400 mb-4"></div>
      <div className="w-60 h-10 bg-gray-400 mb-4"></div>
      <div className="w-60 h-10 bg-gray-400 mb-4"></div>
      <div className="w-60 h-10 bg-gray-400 mt-6 rounded-2xl"></div>
    </div>
  );
};

export default LoadingSkeletonForm;
