"use client";

import React, { useState } from 'react';

const FilterBar = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [forType, setForType] = useState('Sell');
  const [price, setPrice] = useState('All Prices');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto">
     
      {/* Padding to prevent overlap */}
      <div className="h-16"></div>

      {/* Filter Bar */}
      <div className="relative z-10 bg-white shadow-lg flex flex-wrap items-center gap-4 p-4">
        {/* Location Dropdown */}
        <div className="relative flex-1 min-w-[150px]">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-transparent text-gray-600 py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#25aae1] cursor-pointer"
          >
            <option value="">Location</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
          </select>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-8 w-px bg-gray-300"></div>

        {/* Category Dropdown */}
        <div className="relative flex-1 min-w-[150px]">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-transparent text-gray-600 py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#25aae1] cursor-pointer"
          >
            <option value="">Category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-8 w-px bg-gray-300"></div>

        {/* For Type Dropdown */}
        <div className="relative flex-1 min-w-[150px]">
          <select
            value={forType}
            onChange={(e) => setForType(e.target.value)}
            className="w-full bg-transparent text-gray-600 py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#25aae1] cursor-pointer"
          >
            <option value="Sell">For: Sell</option>
            <option value="Buy">For: Buy</option>
          </select>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-8 w-px bg-gray-300"></div>

        {/* Price Dropdown */}
        <div className="relative flex-1 min-w-[150px]">
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full bg-transparent text-gray-600 py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#25aae1] cursor-pointer"
          >
            <option value="All Prices">Prices: All Prices</option>
            <option value="Low">Prices: Low</option>
            <option value="Medium">Prices: Medium</option>
            <option value="High">Prices: High</option>
          </select>
        </div>

        {/* More Filters Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 hover:text-gray-800 hover:border-gray-400 focus:ring-2 focus:ring-[#25aae1] transition-all"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          More Filters
        </button>

        {/* Find Listing Button */}
        <button className="bg-[#25aae1] text-white px-6 py-2 flex items-center gap-2 hover:bg-[#1e8eb8] focus:ring-2 focus:ring-[#1e8eb8] transition-all">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          Find Listing
        </button>
      </div>

      {/* Additional Filters Panel */}
      {showFilters && (
        <div className="mt-4 bg-white shadow-lg p-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[150px]">
              <label className="block text-sm text-gray-600 mb-2">Additional Filter 1</label>
              <select className="w-full bg-transparent border border-gray-300 py-2 px-4 focus:outline-none">
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="flex-1 min-w-[150px]">
              <label className="block text-sm text-gray-600 mb-2">Additional Filter 2</label>
              <select className="w-full bg-transparent border border-gray-300 py-2 px-4 focus:outline-none">
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
