"use client";
import Link from "next/link";
import { FiCalendar, FiClock, FiGrid, FiMessageSquare } from "react-icons/fi";
import { usePatientPortal } from "@/context/PatientPortalContext";

const UserInfo = () => {
  const { patient } = usePatientPortal();
  const { display_name, email, acf_fields } = patient || {};
  const { age, blood_group, height_m, weight_kg, profile_picture_url } =
    acf_fields || {};
  
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-[100%] gap-4 lg:gap-8">
        {/* Profile Card */}
        <div className="ml-[5%] w-full lg:w-[40%] bg-white rounded-xl shadow-lg p-4 lg:p-8 flex flex-col items-center">
          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center shadow-md">
            <img
              src={profile_picture_url || "/images/avatar_m.png"}
              alt="User"
              className="rounded-full object-cover"
            />
          </div>
          <div className="font-semibold text-base lg:text-lg mb-1">
            {display_name}
          </div>
          <div className="text-gray-400 text-xs lg:text-sm mb-4 lg:mb-6">
            {email}
          </div>
          <div className="bg-[#F3F8FB] rounded-lg w-full py-3 lg:py-4 px-2 grid grid-cols-2 gap-y-3 lg:gap-y-4 text-center shadow-md">
            <div>
              <div className="font-bold text-base lg:text-lg">
                {age ? `${age} Years` : "N/A"}
              </div>
              <div className="text-xs text-gray-400">Age</div>
            </div>
            <div>
              <div className="font-bold text-base lg:text-lg">
                {blood_group || "N/A"}
              </div>
              <div className="text-xs text-gray-400">Blood Group</div>
            </div>
            <div>
              <div className="font-bold text-base lg:text-lg">
                {height_m || "N/A"}
              </div>
              <div className="text-xs text-gray-400">Height (m)</div>
            </div>
            <div>
              <div className="font-bold text-base lg:text-lg">
                {weight_kg || "N/A"}
              </div>
              <div className="text-xs text-gray-400">Weight (kg)</div>
            </div>
          </div>
        </div>

        {/* Right side cards */}
        <div className="w-full lg:w-[30%] lg:ml-auto lg:mr-[10%] flex flex-col gap-3 lg:gap-4">
          <div className="flex flex-col grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
            <Link href="#">
              <ActionCard
                color="bg-[#4DC6F6]"
                title="Appointments"
                subtitle="Check Schedule"
                time="10:00 - 11:00AM"
                icon={<FiGrid color="#4DC6F6"/>}
                menu="Schedule"
              />
            </Link>
            <Link href="#">
              <ActionCard
                color="bg-[#5DD1C6]"
                title="View History"
                subtitle="Upload Files"
                time="Patient Files"
                icon={<FiCalendar color="#5DD1C6"/>}
                menu="History"
              />
            </Link>
            <Link href="#">
              <ActionCard
                color="bg-[#2B7BDB]"
                title="Rate Doctors"
                subtitle="Ratings"
                time="Completed Appointments"
                icon={<FiClock color="#2B7BDB"/>}
                menu="Ratings"
              />
            </Link>
            <Link href="#">
              <ActionCard
                color="bg-[#1CB5C9]"
                title="Request Update"
                subtitle={email}
                time="Profile Update"
                icon={<FiMessageSquare color="#1CB5C9"/>}
                menu="Profile"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// ActionCard component
function ActionCard({ color, title, subtitle, time, icon, menu }) {
  const { setSelectedMenu } = usePatientPortal();
  return (
    <div
      onClick={() => setSelectedMenu(menu)}
      className={`rounded-lg ${color} p-3 lg:p-4 flex items-center gap-3 lg:gap-4 shadow-md hover:shadow-lg transition-shadow duration-200`}
    >
      <div className="bg-white bg-opacity-30 rounded-full p-2 text-red text-xl lg:text-2xl flex-shrink-0 shadow-sm">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-white text-sm lg:text-base truncate">
          {title}
        </div>
        <div className="text-white text-xs truncate">{subtitle}</div>
        <div className="text-white text-xs truncate">{time}</div>
      </div>
      <div className="ml-auto text-white text-xl lg:text-2xl flex-shrink-0">
        →
      </div>
    </div>
  );
}

export default UserInfo;