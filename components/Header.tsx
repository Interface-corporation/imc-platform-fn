"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useGetProfileQuery, useLogoutUserMutation } from "@/states/authentication";
import { useRouter } from "next/navigation";
import { LuLogOut } from "react-icons/lu";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux-store"; // adjust if your store is located somewhere else

interface NavLink {
  label: string;
  href: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { data: authUser } = useGetProfileQuery({});
  const [logoutUser, { isSuccess: logoutSuccess }] = useLogoutUserMutation();
  const router = useRouter();

  const cartItems = useSelector((state: RootState) => state.cart.items); // assuming cart.products array

  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "e-Shop", href: "/landingPage" },
    { label: "Products", href: "/Products" },
    { label: "About Us", href: "/about" },
    { label: "Contact us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
   

    // Next.js App Router doesn't have events like the Pages Router,
    // but we can clean up the menu when component unmounts
    return () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
  }, [isMenuOpen]);

  // Add click outside handler to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const mobileMenu = document.getElementById('mobile-menu');
      const menuToggle = document.getElementById('menu-toggle');

      if (
        isMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(target) &&
        menuToggle &&
        !menuToggle.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  if (logoutSuccess) {
    router.push("/login");
  }

  const handleLogout = async () => {
    await logoutUser({});
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#1E3A5F]/80 backdrop-blur-md shadow-lg"
          : "bg-[#1E3A5F]"
        }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-6 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[#25aae1] transition-all duration-300"
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search and Actions */}
        <div className="flex items-center text-white space-x-4">
          {/* Search Bar */}
          <div
            className={`${isSearchOpen ? "flex" : "hidden"
              } lg:flex items-center bg-white rounded-full shadow-md w-full max-w-md px-4 py-2`}
          >
            <select
              className="bg-transparent outline-none border-none text-gray-500 text-sm"
              defaultValue="all"
              aria-label="Select category"
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
              aria-label="Search items"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-gray-400 lg:hidden"
              aria-label="Close search bar"
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
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden text-white"
              aria-label="Open search bar"
            >
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

          {/* Cart and User Icons - Desktop */}
          <div className="hidden md:flex space-x-4 relative">
            <Link href="/cart" aria-label="View Cart" className="relative">
              <ShoppingCartIcon className="w-5 h-5 cursor-pointer text-white" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            {authUser ? (
              <Link href="#" onClick={handleLogout}>
                <LuLogOut className="w-5 h-5 cursor-pointer text-white" />
              </Link>
            ) : (
              <Link href="/login">
                <UserIcon className="w-5 h-5 cursor-pointer text-white" />
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            id="menu-toggle"
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 transition-transform duration-300 transform rotate-90"
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
                className="w-6 h-6 transition-transform duration-300"
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

        {/* Mobile Cart & User */}
        <div className="flex items-center space-x-4 text-white md:hidden">
          <Link href="/cart" aria-label="View Cart" className="relative">
            <ShoppingCartIcon className="w-6 h-6 cursor-pointer text-white" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          {authUser ? (
            <Link href="#" onClick={handleLogout} aria-label="Logout">
              <LuLogOut className="w-6 h-6 cursor-pointer text-white" />
            </Link>
          ) : (
            <Link href="/login" aria-label="User Login">
              <UserIcon className="w-6 h-6 cursor-pointer text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu - Now properly toggled with animations */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out transform ${isMenuOpen
            ? "opacity-100 max-h-96 translate-y-0"
            : "opacity-0 max-h-0 -translate-y-2 pointer-events-none"
          } overflow-hidden`}
      >
        <nav className="bg-[#1E3A5F] flex flex-col space-y-1 p-4 text-white border-t border-[#25aae1]/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#25aae1] py-3 px-2 transition-all duration-300 hover:bg-[#25aae1]/10 rounded-md"
              aria-label={`Navigate to ${link.label}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;