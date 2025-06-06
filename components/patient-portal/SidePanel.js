"use client";
import { removeStoredPatient } from "@/lib/storage";
import Link from "next/link";
import { useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiGrid,
  FiLogOut,
  FiMenu,
  FiMessageSquare,
  FiUser,
} from "react-icons/fi";
import Overview from "./Overview";
import PatientHistory from "./PatientHistory";
import Profile from "./Profile/Profile";
import Ratings from "./Ratings";
import Schedule from "./Schedule";
import { usePatientPortal } from "@/context/PatientPortalContext";
import { useAuth } from "@/hooks/useAuth";

export default function SidePanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedMenu, setSelectedMenu } = usePatientPortal();
  const { logout } = useAuth();

  const mainMenu = [
    { name: "Overview", path: "/Overview", icon: <FiGrid /> },
    { name: "Profile", path: "/Profile", icon: <FiUser /> },
    { name: "Schedule", path: "/Schedule", icon: <FiCalendar /> },
    { name: "History", path: "/PatientHistory", icon: <FiClock /> },
    { name: "Ratings", path: "/Ratings", icon: <FiMessageSquare /> },
  ];

  const bottomMenu = [
    { name: "Log Out", action: "logout", path: "/logout", icon: <FiLogOut /> },
  ];

  return (
    <>
      {/* Mobile Burger Menu Button - Only visible on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-4 z-[60] p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 md:hidden cursor-pointer"
        aria-label="Toggle Sidebar"
      >
        <FiMenu className="w-6 h-6 text-gray-600" />
      </button>

      {/* Mobile Overlay - Only visible on mobile when sidebar is open */}
      <div
        className={`
          fixed inset-0 bg-black/50 z-[55] md:hidden
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white border-r border-gray-100 shadow-sm z-[60]
          flex flex-col justify-between
          transition-all duration-300 ease-in-out
          w-[280px] lg:w-[320px]
          md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Top section: Logo and Main Menu */}
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center px-6 py-8">
            <img
              src="/images/patient-portal-logo.png"
              alt="Logo"
              className="w-40 h-15"
            />
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 px-4">
            <ul className="space-y-2">
              {mainMenu.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => {
                      setSelectedMenu(item.name);
                      setIsOpen(false);
                    }}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left
                      transition-colors duration-200 cursor-pointer
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
                      onClick={() => logout()}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 w-full text-left cursor-pointer"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.name}</span>
                    </button>
                  ) : (
                    <Link
                      href={"#"}
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
      <div>
        {selectedMenu === "Overview" && <Overview />}
        {selectedMenu === "Profile" && <Profile />}
        {selectedMenu === "Schedule" && <Schedule />}
        {selectedMenu === "History" && <PatientHistory />}
        {selectedMenu === "Ratings" && <Ratings />}
      </div>
    </>
  );
}
