import { Card, CardContent } from "@/components/ui/card";

const LoadingSkeleton = ({ count = 3 }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-center gap-5 mb-20">
        {Array.from({ length: count }).map((_, index) => (
          <Card key={index} className="overflow-hidden border border-blue-500">
            <CardContent className="">
              <div className="flex items-start gap-4">
                <div className="rounded-full w-20 h-20 bg-gray-400"></div>

                <div className="flex-1">
                  <h3 className="w-40 h-6 bg-gray-400"></h3>
                  <p className="w-30 h-3 bg-gray-400 mt-2"></p>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex items-center ">
                      <div className="h-4 w-4 bg-gray-400"></div>
                      <span className="ml-4 h-4 w-4 bg-gray-400"></span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-4 w-4 bg-gray-400"></div>
                      <span className="ml-1 h-4 w-4 bg-gray-400"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="h-2 w-30 bg-gray-400 "></p>
                  <p className="h-2 w-60 bg-gray-400 mt-1"></p>
                </div>
                <div className="flex items-center gap-2 h-2 w-60 bg-gray-400"></div>
                <div className="flex gap-3">
                  <div className="flex-1 h-6 w-20 bg-gray-400 mt-1 rounded-2xl"></div>
                  <div className="flex-1 h-6 w-20 bg-gray-400 mt-1 rounded-2xl"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
