"use client";
import React from "react";
import { FaFire, FaUserPlus, FaHandshake, FaDollarSign, FaChevronRight } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import OrdersComponent from "./OrdersComponent";

// Sample chart data
const performanceData = [
  { month: "Jan", pageViews: 34, clicks: 8 },
  { month: "Feb", pageViews: 65, clicks: 12 },
  { month: "Mar", pageViews: 45, clicks: 9 },
  { month: "Apr", pageViews: 68, clicks: 16 },
  { month: "May", pageViews: 48, clicks: 20 },
  { month: "Jun", pageViews: 60, clicks: 15 },
  { month: "Jul", pageViews: 41, clicks: 6 },
  { month: "Aug", pageViews: 43, clicks: 9 },
  { month: "Sep", pageViews: 77, clicks: 24 },
  { month: "Oct", pageViews: 50, clicks: 30 },
  { month: "Nov", pageViews: 62, clicks: 18 },
  { month: "Dec", pageViews: 66, clicks: 32 },
];

// Analytics card data
const metricCards = [
  {
    title: "Total Orders",
    value: "13,647",
    change: "+2.3%",
    period: "Last Week",
    icon: <FaFire className="text-orange-500" />,
    isPositive: true
  },
  {
    title: "New Leads",
    value: "9,526",
    change: "+8.1%",
    period: "Last Month",
    icon: <FaUserPlus className="text-orange-500" />,
    isPositive: true
  },
  {
    title: "Deals",
    value: "976",
    change: "-0.3%",
    period: "Last Month",
    icon: <FaHandshake className="text-orange-500" />,
    isPositive: false
  },
  {
    title: "Booked Revenue",
    value: "$123.6k",
    change: "-10.6%",
    period: "Last Month",
    icon: <FaDollarSign className="text-orange-500" />,
    isPositive: false
  }
];

// Top pages data
const topPagesData = [
  { path: "larkon/ecommerce.html", views: 465, exitRate: 4.4, status: "good" },
  { path: "larkon/dashboard.html", views: 426, exitRate: 20.4, status: "bad" },
  { path: "larkon/chat.html", views: 254, exitRate: 12.2, status: "warning" },
  { path: "larkon/auth-login.html", views: 3369, exitRate: 5.2, status: "good" },
  { path: "larkon/email.html", views: 985, exitRate: 64.2, status: "bad" }
];

const AnalyticsComponent: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Metrics cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricCards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-gray-500 text-sm">{card.title}</p>
                <p className="text-2xl font-bold">{card.value}</p>
                <div className="flex items-center text-sm">
                  <span className={card.isPositive ? "text-green-500" : "text-red-500"}>
                    {card.change}
                  </span>
                  <span className="text-gray-500 ml-2">{card.period}</span>
                </div>
              </div>
              <div className="bg-orange-100 p-3 rounded">
                {card.icon}
              </div>
            </div>
            <div className="mt-4 text-sm text-blue-600 flex items-center">
              <span>View More</span>
            </div>
          </div>
        ))}
      </div>

      {/* Performance chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Performance</h3>
          <div className="flex gap-2">
            <button className="text-gray-500 px-2 py-1 text-sm font-medium hover:bg-gray-100 rounded">ALL</button>
            <button className="text-gray-500 px-2 py-1 text-sm font-medium hover:bg-gray-100 rounded">1M</button>
            <button className="text-gray-500 px-2 py-1 text-sm font-medium hover:bg-gray-100 rounded">6M</button>
            <button className="text-gray-500 px-2 py-1 text-sm font-medium hover:bg-gray-100 rounded">1Y</button>
          </div>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pageViews"
                stroke="#f97316"
                strokeWidth={3}
                dot={false}
                name="Page Views"
              />
              <Line
                type="monotone"
                dataKey="clicks"
                stroke="#10b981"
                strokeWidth={3}
                dot={false}
                name="Clicks"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversion rate */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold mb-6">Conversions</h3>
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <p className="text-4xl font-bold">65.2%</p>
                <p className="text-gray-500 text-sm">Returning Customer</p>
              </div>
              {/* This is a simplified representation of the gauge chart */}
              <div className="absolute inset-0 -rotate-90">
                <svg viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="10"
                    strokeDasharray="282.7"
                    strokeDashoffset="98.9"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 w-full gap-6">
              <div>
                <p className="text-gray-500 text-sm mb-1">This Week</p>
                <p className="text-xl font-bold">23.5k</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Last Week</p>
                <p className="text-xl font-bold">41.05k</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sessions by country */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold mb-6">Sessions by Country</h3>
          <div className="relative h-64">
            {/* Placeholder for world map - in a real app you'd use a map library */}
            <div className="bg-gray-100 h-full w-full rounded-lg flex items-center justify-center">
              <p className="text-sm text-gray-500">World Map Visualization</p>
            </div>
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 bg-gray-200 rounded-full w-3 h-3" />
              <div className="absolute top-1/3 left-1/5 bg-gray-200 rounded-full w-3 h-3" />
              <div className="absolute top-1/3 right-1/3 bg-gray-200 rounded-full w-3 h-3" />
              <div className="absolute bottom-1/4 right-1/4 bg-gray-200 rounded-full w-3 h-3" />
              <div className="absolute bottom-1/3 left-1/3 bg-gray-200 rounded-full w-3 h-3" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 w-full gap-6">
            <div>
              <p className="text-gray-500 text-sm mb-1">This Week</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Last Week</p>
            </div>
          </div>
        </div>

        {/* Top pages */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Top Pages</h3>
            <button className="text-orange-500 text-sm hover:underline flex items-center">
              View All <FaChevronRight className="ml-1" size={12} />
            </button>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 text-sm text-gray-500 pb-2">
              <div>Page Path</div>
              <div className="text-center">Page Views</div>
              <div className="text-center">Exit Rate</div>
            </div>
            {topPagesData.map((page, index) => (
              <div key={index} className="grid grid-cols-3 text-sm py-2 border-t border-gray-100">
                <div className="text-blue-600 truncate">{page.path}</div>
                <div className="text-center">{page.views}</div>
                <div className="text-center">
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-medium
                      ${page.status === "good" ? "bg-green-100 text-green-800" : 
                        page.status === "bad" ? "bg-red-100 text-red-800" :
                        "bg-yellow-100 text-yellow-800"}`
                    }
                  >
                    {page.exitRate}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
        <OrdersComponent/>
    </div>
  );
};

export default AnalyticsComponent;