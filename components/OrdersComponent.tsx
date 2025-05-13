"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Sample order data
const orderData = [
  {
    id: "RR5625",
    date: "29 April 2024",
    product: "laptop",
    customerName: "Anna M. Hines",
    email: "anna.hines@mail.com",
    phone: "(+1)-555-1564-261",
    address: "Burr Ridge/Illinois",
    paymentType: "Credit Card",
    status: "Completed"
  },
  {
    id: "RR9652",
    date: "25 April 2024",
    product: "camera",
    customerName: "Judith H. Fritsche",
    email: "judith.fritsche.com",
    phone: "(+57)-305-5579-759",
    address: "SULLIVAN/Kentucky",
    paymentType: "Credit Card",
    status: "Completed"
  },
  {
    id: "RR5984",
    date: "25 April 2024",
    product: "watch",
    customerName: "Peter T. Smith",
    email: "peter.smith@mail.com",
    phone: "(+33)-655-5187-93",
    address: "Yreka/California",
    paymentType: "Pay Pal",
    status: "Completed"
  },
  {
    id: "RR3625",
    date: "21 April 2024",
    product: "smartphone",
    customerName: "Emmanuel J. Delcid",
    email: "emmanuel.delcid@mail.com",
    phone: "(+30)-693-5553-637",
    address: "Atlanta/Georgia",
    paymentType: "Pay Pal",
    status: "Processing"
  },
  {
    id: "RR8652",
    date: "18 April 2024",
    product: "tablet",
    customerName: "William J. Cook",
    email: "william.cook@mail.com",
    phone: "(+91)-855-5446-150",
    address: "Rosenberg/Texas",
    paymentType: "Credit Card",
    status: "Processing"
  }
];

// Product images mapping
const productImages: Record<string, string> = {
  laptop: "/images/speakers.jpg",
  camera: "/images/speakers.jpg",
  watch: "/images/speakers.jpg",
  smartphone: "/images/speakers.jpg",
  tablet: "/images/speakers.jpg"
};

const OrdersComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalOrders = 90521;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
        <button className="bg-orange-100 text-orange-500 hover:bg-orange-200 rounded-lg px-4 py-2 flex items-center gap-2 transition-colors">
          <FaPlus size={14} />
          <span>Create Order</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-3 font-medium">Order ID.</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Product</th>
              <th className="pb-3 font-medium">Customer Name</th>
              <th className="pb-3 font-medium">Email ID</th>
              <th className="pb-3 font-medium">Phone No.</th>
              <th className="pb-3 font-medium">Address</th>
              <th className="pb-3 font-medium">Payment Type</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orderData.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="py-4 text-blue-500">#{order.id}</td>
                <td className="py-4 text-gray-600">{order.date}</td>
                <td className="py-4">
                  <div className="bg-gray-100 rounded p-1 w-9 h-9 flex items-center justify-center">
                    <Image
                      src={productImages[order.product]}
                      alt={order.product}
                      width={36}
                      height={36}
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="py-4 text-gray-600">{order.customerName}</td>
                <td className="py-4 text-gray-600">{order.email}</td>
                <td className="py-4 text-gray-600">{order.phone}</td>
                <td className="py-4 text-gray-600">{order.address}</td>
                <td className="py-4 text-gray-600">{order.paymentType}</td>
                <td className="py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    <span
                      className={`mr-1.5 h-2 w-2 rounded-full ${
                        order.status === "Completed" ? "bg-green-500" : "bg-orange-500"
                      }`}
                    />
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
        <div>Showing {orderData.length} of {totalOrders} orders</div>
        <div className="flex items-center gap-2">
          <button 
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <FaChevronLeft size={14} />
          </button>
          
          {[1, 2, 3].map(page => (
            <button
              key={page}
              className={`w-8 h-8 flex items-center justify-center rounded ${
                currentPage === page 
                  ? "bg-orange-500 text-white" 
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          
          <button 
            className="p-2 rounded hover:bg-gray-100"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersComponent;