import { FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div className="w-1/3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white shadow-sm focus:outline-none"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FiBell className="text-gray-400 text-xl" />
          <span className="text-gray-500 text-sm">Fletch Skinner</span>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
