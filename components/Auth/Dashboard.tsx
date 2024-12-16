"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaHome,
  FaShoppingCart,
  FaLink,
  FaClipboardList,
  FaTruck,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
  FaSearch,
  FaBell,
  FaBars,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Dashboard: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const menuContent: Record<string, string> = {
    Dashboard: "Welcome to the Dashboard!",
    Cart: "This is a list of all carts.",
    "Service Request": "Manage your service requests here.",
    "Custom Order": "Place your custom orders here.",
    Trucking: "Track your trucking details.",
    Reports: "View reports and analytics.",
    Setting: "Configure your settings here.",
    Logout: "You have been logged out.",
  };

  const hasUnreadNotifications = true;

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside
        className={`w-65 bg-blue-950 text-[#25aae1] flex flex-col justify-between p-6 transition-transform duration-300 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:w-46 rounded-r-[25px] 
        sm:translate-x-0 sm:block ${isSidebarOpen ? "block" : "hidden"} lg:w-40 lg:rounded-r-[25px] lg:px-2`}
      >
        <div>
          <div className="items-center mb-8">
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
          <nav>
            {[
              { name: "Dashboard", icon: <FaHome /> },
              { name: "Cart", icon: <FaShoppingCart /> },
              { name: "Service Request", icon: <FaLink /> },
              { name: "Custom Order", icon: <FaClipboardList /> },
              { name: "Trucking", icon: <FaTruck /> },
              { name: "Reports", icon: <FaFileAlt /> },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedMenu(item.name)}
                className={`flex items-center px-6 py-3 w-full relative ${selectedMenu === item.name ? "text-white" : "text-sm"
                  } lg:px-2 lg:text-xs`}
              >
                {selectedMenu === item.name && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-white rounded-r-md"></span>
                )}
                <span className="mr-4 text-lg lg:text-sm">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-[100px]">
          <nav>
            {[
              { name: "Setting", icon: <FaCog /> },
              { name: "Logout", icon: <FaSignOutAlt /> },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedMenu(item.name)}
                className={`flex items-center px-6 py-3 w-full relative ${selectedMenu === item.name ? "text-white" : "text-sm"
                  } lg:px-2 lg:text-xs`}
              >
                {selectedMenu === item.name && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-white rounded-r-md"></span>
                )}
                <span className="mr-4 text-lg lg:text-sm">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <header className="flex items-center justify-between px-4 py-4 bg-white">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle sidebar"
            >
              <FaBars className="text-[#25aae1]" size={24} />
            </button>
          </div>

          {/* Header Content */}
          <div className="flex items-center gap-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search items..."
                className="p-3 pl-10 bg-white shadow-lg rounded-3xl w-[600px] text-xs lg:text-sm"
              />
              <span className="absolute right-4 top-3 text-[#25aae1] text-2xl">
                <FaSearch />
              </span>
            </div>

            {/* Notifications */}
            <button
              type="button"
              className="relative p-2 bg-white rounded"
              aria-label="View notifications"
            >
              <FaBell className="text-amber-400 text-2xl" />
              {hasUnreadNotifications && (
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full" />
              )}
            </button>

            {/* Profile Section */}
            <div className="relative flex items-center gap-2">
              {/* Profile Image */}
              <div className="relative">
                <Image
                  src="/profile.jpg"
                  alt="User Profile Picture"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div>

              {/* Profile Name */}
              <span className="font-semibold text-sm">Abdoul Khaliq</span>

              {/* Dropdown Icon */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="focus:outline-none"
                aria-label="Toggle profile dropdown"
              >
                <CgProfile className="text-[#25aae1]" size={20} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-14 left-0 mt-1 w-48 bg-white shadow-lg rounded-xl z-10">
                  <ul>
                    <li>
                      <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                        View Profile
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                        Edit Profile
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>


        {/* Content Section */}
        <div className="p-6">
          <h1 className="text-2xl font-bold">{selectedMenu}</h1>
          <p className="mt-4 text-lg">
            {menuContent[selectedMenu] || "Content not available"}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
