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
} from "react-icons/fa";

const Dashboard: React.FC = () => {
  // State to handle the currently selected menu item
  const [selectedMenu, setSelectedMenu] = useState<string>("Dashboard");

  // Content mapping for each menu item
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

  // State to manage unread notifications
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState<boolean>(true);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-49 bg-blue-950 text-blue-600 flex rounded-r-[30px] flex-col justify-between">
        <div>
          <div className="p-6 items-center">
            <Image
              src="/dashLog.png"
              alt="IMC Logo"
              width={100}
              height={100}
              className="mx-auto bg-blue-900"
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
              { name: "Setting", icon: <FaCog /> },
              { name: "Logout", icon: <FaSignOutAlt /> },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedMenu(item.name)}
                className={`flex items-center px-6 py-3 hover:bg-blue-700 w-full ${
                  selectedMenu === item.name ? "bg-none" : ""
                }`}
              >
                <span className="mr-4 text-lg">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <header className="flex items-center justify-between px-6 py-4 bg-white">
          <div className="flex items-center gap-4">
            {/* Empty div for spacing */}
          </div>
          <div className="flex items-center gap-4 ml-auto">
            {/* Search box aligned to the right */}
            <div className="relative w-80">
              <input
                type="text"
                placeholder="Search items..."
                className="p-2 pl-10 bg-white shadow-lg rounded-xl w-full"
              />
              <span className="absolute left-2 top-2 text-blue-500 text-lg">
                <FaSearch />
              </span>
            </div>

            {/* Notification icon with red dot */}
            <button type="button" className="relative p-2 bg-white rounded" aria-label="Notification">
              <FaBell className="text-black text-lg" />
              {hasUnreadNotifications && (
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full" />
              )}
            </button>

            {/* Profile icon with green dot */}
            <div className="relative flex items-center bg-white rounded p-2">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
              <div className="ml-2">
                <p className="text-sm font-semibold">Abdoul Khaliq</p>
                <p className="text-xs text-gray-500">abdoulkhaliq@gmail.com</p>
              </div>
            </div>
          </div>
        </header>
        <div className="p-6">
          <h1 className="text-2xl font-bold">{selectedMenu}</h1>
          <p className="mt-4 text-lg">{menuContent[selectedMenu]}</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
