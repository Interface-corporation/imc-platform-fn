"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const navLinks: NavLink[] = [
    { label: "Whats New", href: "#categories" },
    { label: "Categories", href: "#categories" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#product" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1E3A5F]/80 backdrop-blur-md shadow-lg"
          : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href={"#heroSection"}>
            <Image
              src="/images/logo.png"
              alt="hero image"
              width={50}
              height={50}
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#25aae1] transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search and Actions */}
        <div className="flex items-center text-white space-x-4">
          {/* Search Bar */}
          <div
            className={`${
              isSearchOpen ? "flex" : "hidden"
            } lg:flex items-center bg-white rounded-full shadow-md w-full max-w-md px-4 py-2`}
          >
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
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-gray-400 lg:hidden"
            >
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
          {!isSearchOpen && (
            <button onClick={toggleSearch} className="lg:hidden text-white">
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
            <ChevronDownIcon className="w-5 h-5 cursor-pointer text-white" />
          </div>

          {/* Cart and User Icons */}
          <div className="hidden md:flex space-x-4">
            <Link href="/cart">
              <ShoppingCartIcon className="w-5 h-5 cursor-pointer text-white" />
            </Link>
            <Link href="/login">
              <UserIcon className="w-5 h-5 cursor-pointer text-white" />
            </Link>
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
        <div className="flex items-center space-x-4 text-white md:hidden">
          <Link href="/login">
            <ShoppingCartIcon className="w-6 h-6 cursor-pointer text-white" />
          </Link>
          <Link href="/login">
            <UserIcon className="w-6 h-6 cursor-pointer text-white" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-[#1E3A5F] flex flex-col space-y-2 p-4 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
