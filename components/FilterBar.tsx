"use client";
import { useState } from "react";

const FilterBar = () => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("All Prices");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg mb-4 mt-[100px]">
      <div className="flex flex-wrap justify-between items-center space-x-1 p-4">
        {/* Location Filter */}
        <div className="flex items-center space-x-2">
          <label className="text-gray-600 text-sm" htmlFor="location">
            Location
          </label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Location</option>
            <option value="Location1">Location 1</option>
            <option value="Location2">Location 2</option>
            <option value="Location3">Location 3</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className="flex items-center space-x-2">
          <label className="text-gray-600 text-sm" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Category1">Category 1</option>
            <option value="Category2">Category 2</option>
            <option value="Category3">Category 3</option>
          </select>
        </div>

        {/* Price Filter */}
        <div className="flex items-center space-x-2">
          <label className="text-gray-600 text-sm" htmlFor="price">
            Prices
          </label>
          <select
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All Prices">All Prices</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* More Filters Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="text-sm text-gray-600 hover:text-blue-500 transition-all"
        >
          More Filters
        </button>

        {/* Find Listings Button */}
        <button className="bg-[#25aae1] text-white text-sm font-medium py-2 px-6 rounded-lg shadow-md hover:bg-[#25aae1] transition-all">
          Find Listing
        </button>
      </div>

      {/* Additional Filters (Hidden/Visible) */}
      {showFilters && (
        <div className="mt-4 flex space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-gray-600 text-sm">For:</label>
            <select className="border border-gray-300 px-4 py-2 rounded-md text-sm">
              <option value="Buy">Buy</option>
              <option value="Sell">Sell</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <label className="text-gray-600 text-sm">Sort:</label>
            <select className="border border-gray-300 px-4 py-2 rounded-md text-sm">
              <option value="Newest">Newest</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
