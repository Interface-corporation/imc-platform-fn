"use client";
import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import OrdersComponent from "./OrdersComponent";
import AnalyticsComponent from "./Analytics";

const DashboardPage: React.FC = () => {
  const [currentMenu, setCurrentMenu] = useState<string>("Dashboard");
  const [pageTitle, setPageTitle] = useState<string>("Dashboard");

  // Handle menu selection
  const handleMenuSelect = (menuItem: string) => {
    setCurrentMenu(menuItem);
    setPageTitle(menuItem);
  };

  // Render the appropriate content based on selected menu
  const renderContent = () => {
    switch (currentMenu) {
      case "Dashboard":
        return <AnalyticsComponent />;
      case "Cart":
        return <OrdersComponent />;
      case "Service Request":
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Service Requests</h3>
            <p>Manage your service requests here.</p>
          </div>
        );
      case "Custom Order":
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Custom Orders</h3>
            <p>Create and manage custom orders here.</p>
          </div>
        );
      case "Trucking":
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Trucking Management</h3>
            <p>Track and manage your shipments here.</p>
          </div>
        );
      case "Reports":
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Reports</h3>
            <p>View detailed reports and analytics.</p>
          </div>
        );
      case "Setting":
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Settings</h3>
            <p>Configure your account and application settings.</p>
          </div>
        );
      default:
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p>Content for {currentMenu} will be displayed here.</p>
          </div>
        );
    }
  };

  return (
    <DashboardLayout
      title={pageTitle}
      onMenuSelect={handleMenuSelect}
      logoSrc="/images/logo.png"
      profileSrc="/profile.jpg"
      username="Abdoul Khaliq"
      email="abdoulkhaliq@gmail.com"
    >
      {renderContent()}
    </DashboardLayout>
  );
};

export default DashboardPage;