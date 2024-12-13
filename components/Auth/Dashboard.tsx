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
  FaBars, // Hamburger menu icon
} from "react-icons/fa";

const Dashboard: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); // Sidebar initially hidden
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false); // Dropdown for mobile menu

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

  // Constant for unread notifications (state not needed)
  const hasUnreadNotifications = true;

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside
        className={`w-65 bg-blue-950 text-[#25aae1] flex flex-col justify-between p-6 transition-transform duration-300 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:w-46 rounded-r-[25px] 
        sm:translate-x-0 sm:block ${isSidebarOpen ? "block" : "hidden"} lg:w-40 lg:rounded-r-[25px] lg:px-2`} // Sidebar on small screens will be compact
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
            {[{ name: "Dashboard", icon: <FaHome /> },
            { name: "Cart", icon: <FaShoppingCart /> },
            { name: "Service Request", icon: <FaLink /> },
            { name: "Custom Order", icon: <FaClipboardList /> },
            { name: "Trucking", icon: <FaTruck /> },
            { name: "Reports", icon: <FaFileAlt /> }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedMenu(item.name)}
                className={`flex items-center px-6 py-3 w-full relative ${
                  selectedMenu === item.name ? "text-white" : "text-sm"
                } lg:px-2 lg:text-xs`} // Smaller text and padding for small screens
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

        {/* Move Setting and Logout to the bottom */}
        <div className="mt-[100px]">
          <nav>
            {[{ name: "Setting", icon: <FaCog /> }, { name: "Logout", icon: <FaSignOutAlt /> }].map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedMenu(item.name)}
                className={`flex items-center px-6 py-3 w-full relative ${
                  selectedMenu === item.name ? "text-white" : "text-sm"
                } lg:px-2 lg:text-xs`} // Smaller text and padding for small screens
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
        <header className="flex items-center justify-between px-2 py-4 bg-white">
          <div className="flex items-center gap-4">
            {/* Hamburger Menu Icon (for mobile) */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle sidebar"
            >
              <FaBars className="text-[#25aae1]" size={24} />
            </button>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Search box */}
            <div className="relative w-80">
              <input
                type="text"
                placeholder="Search items..."
                className="p-2 pl-10 bg-white shadow-lg rounded-xl w-full text-xs lg:text-sm" // Adjusted text size
              />
              <span className="absolute left-2 top-2 text-[#25aae1] text-lg">
                <FaSearch />
              </span>
            </div>

            {/* Notification icon with red dot */}
            <button
              type="button"
              className="relative p-2 bg-white rounded"
              aria-label="View notifications"
            >
              <FaBell className="text-black text-lg" />
              {hasUnreadNotifications && (
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full" />
              )}
            </button>

            {/* Profile section */}
            <div className="relative">
              {/* Profile picture */}
              <Image
                src="/profile.jpg"
                alt="User Profile Picture"
                width={40}
                height={40}
                className="rounded-full"
              />
              {/* Green dot indicating online status */}
              <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="ml-4 hidden lg:block">
              <p className="text-sm font-semibold">Abdoul Khaliq</p>
              <p className="text-xs text-gray-500">abdoulkhaliq@gmail.com</p>
            </div>
          </div>
        </header>

        {/* Dropdown Menu for Mobile */}
        <div className="lg:hidden p-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center text-[#25aae1] text-lg"
          >
            Menu
          </button>
          {isDropdownOpen && (
            <div className="mt-2 p-4 bg-white shadow-lg rounded-xl">
              {[{ name: "Dashboard", icon: <FaHome /> },
              { name: "Cart", icon: <FaShoppingCart /> },
              { name: "Service Request", icon: <FaLink /> },
              { name: "Custom Order", icon: <FaClipboardList /> },
              { name: "Trucking", icon: <FaTruck /> },
              { name: "Reports", icon: <FaFileAlt /> }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item.name)}
                  className={`flex items-center px-6 py-3 w-full relative ${
                    selectedMenu === item.name ? "text-white" : "text-sm"
                  } lg:px-2 lg:text-xs`} // Smaller text and padding for small screens
                >
                  {selectedMenu === item.name && (
                    <span className="absolute left-0 top-0 h-full w-1 bg-white rounded-r-md"></span>
                  )}
                  <span className="mr-4 text-lg lg:text-sm">{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
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
