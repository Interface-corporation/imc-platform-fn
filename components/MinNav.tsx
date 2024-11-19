"use client"

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const categories = [
  "Groceries",
  "Premium Fruits",
  "Home & Kitchen",
  "Fashion",
  "Electronics",
  "Beauty",
  "Home Improvement",
  "Sports, Toys & Luggage",
];

const MinNav = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Electronics");

  return (
    <div className="p-2">
      {/* Categories */}
      <div className="flex flex-wrap items-center justify-center gap-2 overflow-x-auto sm:justify-start">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex rounded-full p-2 whitespace-nowrap cursor-pointer ${
              selectedCategory === category
                ? "bg-[#1E3A5F] text-white"
                : "bg-[#CDEDF8] text-gray-500"
            }`}
          >
            <div className="bg-transparent outline-none border-none text-sm">
              {category}
            </div>
            <ChevronDownIcon className="w-5 h-5 ml-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinNav;