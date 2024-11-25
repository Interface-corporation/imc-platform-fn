"use client";

import '../styles/globals.css'; 
import React from 'react';
import Link from 'next/link';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src="/imc_logo.png" alt="IMC Logo" className="h-10" />
            {/* Navigation */}
            <nav className="hidden lg:flex space-x-6">
              <Link href="#" className="hover:text-blue-300">
                Category
              </Link>
              <Link href="#" className="hover:text-blue-300">
                What's New
              </Link>
              <Link href="#" className="hover:text-blue-300">
                Services
              </Link>
              <Link href="#" className="hover:text-blue-300">
                Delivery
              </Link>
            </nav>
          </div>
          {/* Search and Profile */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search items..."
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 focus:outline-none"
            />
            <span className="hidden lg:block">Eng</span>
            <Link href="#" className="text-white">
              <i className="fas fa-user-circle text-xl"></i>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Categories */}
        <div className="bg-white py-4 shadow">
          <div className="container mx-auto flex justify-center space-x-4 overflow-x-auto px-6">
            {[
              'Graphics & Design',
              'Digital Marketing',
              'Writing & Translation',
              'Video & Animation',
              'Music & Audio',
              'Programming & Tech',
              'Photography',
              'Business',
            ].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Promotional Banners */}
        <div className="bg-blue-100 py-8">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4 px-6">
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                Get a perfect gig Suggestion for a Service you need
              </h2>
              <p className="text-gray-600">Tell us what Service you need.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                Get a perfect gig Suggestion for a Service you need
              </h2>
              <p className="text-gray-600">Tell us what Service you need.</p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <section className="container mx-auto py-12 px-6">
          {/* Continue Browsing */}
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Continue browsing →
          </h3>
          <div className="flex space-x-4 overflow-x-auto">
            {[...Array(5)].map((_, idx) => (
              <div
                key={idx}
                className="w-64 bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src="/gig_sample.png"
                  alt="Gig Image"
                  className="rounded-lg mb-4"
                />
                <h4 className="text-gray-800 font-medium">
                  I will design UI/UX for mobile apps
                </h4>
                <p className="text-sm text-gray-500">5.0 (100 reviews)</p>
                <p className="text-blue-600 mt-2 font-bold">$50</p>
              </div>
            ))}
          </div>

          {/* Most Popular Gigs */}
          <h3 className="text-xl font-bold text-gray-800 mt-12 mb-4">
            Most popular Gigs in App Design
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, idx) => (
              <div
                key={idx}
                className="w-full bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src="/gig_sample.png"
                  alt="Gig Image"
                  className="rounded-lg mb-4"
                />
                <h4 className="text-gray-800 font-medium">
                  I will design UI/UX for mobile apps
                </h4>
                <p className="text-sm text-gray-500">5.0 (100 reviews)</p>
                <p className="text-blue-600 mt-2 font-bold">$50</p>
              </div>
            ))}
          </div>

          {/* Verified Pro Services */}
          <h3 className="text-xl font-bold text-gray-800 mt-12 mb-4">
            Verified Pro services in App Design
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, idx) => (
              <div
                key={idx}
                className="w-full bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src="/gig_sample.png"
                  alt="Gig Image"
                  className="rounded-lg mb-4"
                />
                <h4 className="text-gray-800 font-medium">
                  I will design UI/UX for mobile apps
                </h4>
                <p className="text-sm text-gray-500">5.0 (100 reviews)</p>
                <p className="text-blue-600 mt-2 font-bold">$50</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">Department</h4>
            <ul>
              <li>Fashion</li>
              <li>Electronics & Gadgets</li>
              <li>Fitness</li>
              <li>Toys</li>
              <li>Furniture</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">About Us</h4>
            <ul>
              <li>Careers</li>
              <li>News & Blog</li>
              <li>Help</li>
              <li>Shop by Location</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul>
              <li>Gift Card</li>
              <li>Mobile App</li>
              <li>Shipping & Delivery</li>
              <li>Account Signup</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Help</h4>
            <ul>
              <li>Returns</li>
              <li>Track Orders</li>
              <li>Contact Us</li>
              <li>Security & Fraud</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© IMC | 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;

