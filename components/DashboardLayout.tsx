"use client";
import React, { useState, ReactNode } from "react";
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
  FaChevronDown
} from "react-icons/fa";

// Define menu items for better organization
const MAIN_MENU_ITEMS = [
  { name: "Dashboard", icon: <FaHome /> },
  { name: "Cart", icon: <FaShoppingCart /> },
  { name: "Service Request", icon: <FaLink /> },
  { name: "Custom Order", icon: <FaClipboardList /> },
  { name: "Trucking", icon: <FaTruck /> },
  { name: "Reports", icon: <FaFileAlt /> },
];

const FOOTER_MENU_ITEMS = [
  { name: "Setting", icon: <FaCog /> },
  { name: "Logout", icon: <FaSignOutAlt /> },
];

// Define interfaces
interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
  logoSrc?: string;
  profileSrc?: string;
  username?: string;
  email?: string;
  onMenuSelect?: (menuItem: string) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title = "Dashboard",
  logoSrc = "/placeholder-logo.png",
  profileSrc = "/placeholder-profile.png",
  username = "User Name",
  email = "user@example.com",
  onMenuSelect
}) => {
  const [selectedMenu, setSelectedMenu] = useState<string>("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleMenuSelect = (menuName: string) => {
    setSelectedMenu(menuName);
    if (onMenuSelect) {
      onMenuSelect(menuName);
    }
  };

  const hasUnreadNotifications = true; // This could be a prop too

  return (
    <div className="flex min-h-screen max-h-screen overflow-hidden bg-white">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static h-screen flex-none w-64 bg-blue-950 text-[#25aae1] flex flex-col justify-between p-4 
          transition-transform duration-300 z-30
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:w-56 lg:rounded-r-[25px]`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          <div className="flex-shrink-0 mb-8">
            <Image
              src={logoSrc}
              alt="Company Logo"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>

          <nav className="flex-grow overflow-y-auto scrollbar-hide">
            {MAIN_MENU_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuSelect(item.name)}
                className={`flex items-center px-4 py-3 w-full relative text-sm
                  ${selectedMenu === item.name ? "text-white" : "text-[#25aae1]"}
                  hover:bg-blue-900 rounded-lg transition-colors`}
              >
                {selectedMenu === item.name && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-white rounded-r-md" />
                )}
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex-shrink-0 mt-4">
            {FOOTER_MENU_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuSelect(item.name)}
                className={`flex items-center px-4 py-3 w-full relative text-sm
                  ${selectedMenu === item.name ? "text-white" : "text-[#25aae1]"}
                  hover:bg-blue-900 rounded-lg transition-colors`}
              >
                {selectedMenu === item.name && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-white rounded-r-md" />
                )}
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="flex-shrink-0 bg-white shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 py-4 lg:px-8 lg:py-6">
            {/* Top row for mobile, left section for desktop */}
            <div className="flex items-center justify-between lg:w-1/3">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2"
                aria-label="Toggle sidebar"
              >
                <FaBars className="text-[#25aae1]" size={24} />
              </button>

              {/* Search bar */}
              <div className="relative flex-1 lg:max-w-xl mx-4">
                <input
                  type="text"
                  placeholder="Search items..."
                  className="w-full p-3 pl-12 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm"
                />
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center justify-end gap-6 mt-4 lg:mt-0">
              {/* Notification button with badge */}
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="View notifications">
                <FaBell className="text-amber-400 text-2xl" />
                {hasUnreadNotifications && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white" />
                )}
              </button>

              {/* Profile section */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="relative flex-shrink-0">
                    <Image
                      src={profileSrc}
                      alt="Profile"
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full ring-2 ring-white" />
                  </div>

                  <div className="hidden lg:flex flex-col items-start">
                    <span className="font-semibold text-gray-900">{username}</span>
                    <span className="text-gray-500 text-sm">{email}</span>
                  </div>

                  <FaChevronDown
                    className={`text-gray-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                    size={16}
                  />
                </button>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
                    <div className="py-2">
                      <button className="flex w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                        View Profile
                      </button>
                      <button className="flex w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                        Edit Profile
                      </button>
                      <div className="h-px bg-gray-100 my-2"></div>
                      <button className="flex w-full px-4 py-2.5 text-sm text-red-600 hover:bg-gray-50">
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-6">
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;