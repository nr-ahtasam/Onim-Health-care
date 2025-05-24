"use client";
import Overview from "@/components/patient-portal/Overview";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiGrid,
  FiLogOut,
  FiMessageSquare,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import PatientHistory from "./PatientHistory";
import Ratings from "./Ratings";
import Schedule from "./Schedule";
import { removeStoredPatient } from "@/lib/storage";
export default function SidePanel() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const [selectedMenu, setSelectedMenu] = useState("Overview");

  // Handle mobile detection and sidebar state
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mainMenu = [
    { name: "Overview", path: "/Overview", icon: <FiGrid /> },
    { name: "Profile", path: "/Profile", icon: <FiUser /> },
    { name: "History", path: "/PatientHistory", icon: <FiClock /> },
    { name: "Schedule", path: "/Schedule", icon: <FiCalendar /> },
    { name: "Ratings", path: "/Ratings", icon: <FiMessageSquare /> },
  ];

  const bottomMenu = [
    { name: "Settings",action: "action", path: "/settings", icon: <FiSettings /> },
    { name: "Log Out",action: "logout", path: "/logout", icon: <FiLogOut /> },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-[60] p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 flex items-center justify-center"
          aria-label="Toggle Sidebar"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      )}

      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55]"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-[400px] bg-white border-r border-gray-100 shadow-sm z-[60]
          flex flex-col justify-between
          transition-all duration-300 ease-in-out
          ${isMobile ? "w-[280px]" : "w-[280px] lg:w-[320px]"}
          ${
            isMobile
              ? isOpen
                ? "translate-x-0"
                : "-translate-x-full"
              : "translate-x-0"
          }
        `}
      >
        {/* Top section: Logo and Main Menu */}
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center px-6 py-8">
            <img src="/images/patient-portal-logo.png" alt="Logo" className="w-40 h-15" />
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 px-4">
            <ul className="space-y-2">
              {mainMenu.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => {
                      setSelectedMenu(item.name);
                      if (isMobile) setIsOpen(false);
                    }}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left
                      transition-colors duration-200
                      ${
                        selectedMenu === item.name
                          ? "bg-red-50 text-red-600 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }
                    `}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Navigation */}
          <div className="mt-auto px-4 pb-6">
            <div className="border-t border-gray-100 my-4" />
            <ul className="space-y-2">
              {bottomMenu.map((item) => (
                <li key={item.name}>
                  {item.action === "logout" ? (
                    <button
                      onClick={() => removeStoredPatient()}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 w-full text-left"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.name}</span>
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`
          transition-all duration-300 ease-in-out
          ${
            isMobile
              ? isOpen
                ? "ml-[280px]"
                : "ml-0"
              : "ml-[280px] lg:ml-[320px]"
          }
        `}
      >
        {selectedMenu === "Overview" && <Overview />}
        {selectedMenu === "Schedule" && <Schedule />}
        {selectedMenu === "History" && <PatientHistory />}
        {selectedMenu === "Ratings" && <Ratings />}
        {/* {selectedMenu === "Profile" && <Profile />} */}
      </div>
    </>
  );
}
