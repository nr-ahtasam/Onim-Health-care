// components/CurrentOpenings.js

const CurrentOpenings = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Current Openings
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Circular for new call center specialist
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            We are looking for a new call center specialist with the following
            specialities:
          </li>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>osales</li>
            <li>qsai</li>
            <li>
              Send your CV at{" "}
              <a
                href="mailto:this@cmvthoathcars.com.bd"
                className="text-blue-500 hover:underline"
              >
                this@cmvthoathcars.com.bd
              </a>
            </li>
          </ul>
        </ul>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Circular for new call center specialist
        </h2>
        {/* Add content for the second circular if needed */}
      </div>
    </div>
  );
};

export default CurrentOpenings;
