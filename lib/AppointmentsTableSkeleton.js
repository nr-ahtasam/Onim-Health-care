const AppointmentsTableSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 md:p-6 lg:p-8">
        {/* Appointments Table Skeleton */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 md:p-6">
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4" />

            {/* Mobile View - Cards Skeleton */}
            <div className="md:hidden space-y-4">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-lg p-4 space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                      <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div className="h-5 w-16 bg-gray-200 rounded-full animate-pulse" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
                      <div className="h-3 w-32 bg-gray-200 rounded animate-pulse ml-2" />
                    </div>
                    <div className="flex items-center">
                      <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
                      <div className="h-3 w-32 bg-gray-200 rounded animate-pulse ml-2" />
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="h-9 w-full bg-gray-200 rounded-lg animate-pulse" />
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View - Table Skeleton */}
            <div className="hidden md:block">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {[1, 2, 3, 4, 5, 6].map((index) => (
                        <th
                          key={index}
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[1, 2, 3, 4, 5].map((rowIndex) => (
                      <tr key={rowIndex}>
                        {[1, 2, 3, 4, 5, 6].map((colIndex) => (
                          <td key={colIndex} className="px-4 py-3">
                            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination Skeleton */}
            <div className="mt-12 flex justify-center">
              <div className="flex gap-2">
                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Skeleton */}
        <div className="mt-8">
          <div className="h-3 w-48 bg-gray-200 rounded animate-pulse mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default AppointmentsTableSkeleton;
