"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="bg-[#1E3A5F] shadow text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo.png"
            alt="hero image"
            width={50}
            height={50}
            style={{ objectFit: "cover" }}
          />
          <span className="text-lg font-bold text-white hidden sm:block">
            BrandName
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-blue-400">
            Category
          </Link>
          <Link href="#" className="hover:text-blue-400">
            What&apos;s New
          </Link>
          <Link href="#" className="hover:text-blue-400">
            Services
          </Link>
          <Link href="#" className="hover:text-blue-400">
            Delivery
          </Link>
        </nav>

        {/* Search and Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          {isSearchOpen ? (
            <div className="flex items-center bg-white rounded-full shadow-md w-full max-w-md px-4 py-2">
              <select
                className="bg-transparent outline-none border-none text-gray-500 text-sm"
                defaultValue="all"
              >
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home & Kitchen</option>
                <option value="groceries">Groceries</option>
              </select>
              <div className="h-6 w-px bg-gray-300 mx-2"></div>
              <input
                type="text"
                placeholder="Search items..."
                className="flex-grow bg-transparent outline-none text-sm text-gray-500"
              />
              <button onClick={toggleSearch} className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <button onClick={toggleSearch} className="lg:hidden text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m2.5-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
            </button>
          )}

          {/* Language Dropdown */}
          <div className="hidden md:flex items-center space-x-1">
            <button className="text-white">Eng</button>
            <ChevronDownIcon className="w-5 h-5 cursor-pointer" />
          </div>

          {/* Cart and User Icons */}
          <div className="hidden md:flex space-x-4">
            <button className="text-blue-600">
              <ShoppingCartIcon className="w-5 h-5 cursor-pointer text-white" />
            </button>
            <button className="text-blue-600">
              <UserIcon className="w-5 h-5 cursor-pointer text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-[#1E3A5F] flex flex-col space-y-2 p-4">
            <Link href="#" className="hover:text-blue-400">
              Category
            </Link>
            <Link href="#" className="hover:text-blue-400">
              What&apos;s New
            </Link>
            <Link href="#" className="hover:text-blue-400">
              Services
            </Link>
            <Link href="#" className="hover:text-blue-400">
              Delivery
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
