"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useGetProfileQuery, useLogoutUserMutation } from "@/states/authentication";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux-store";

interface NavLink {
  label: string;
  href: string;
}
const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "e-Shop", href: "/landingPage" },
  { label: "Contact us", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const { data: authUser } = useGetProfileQuery({});
  const [logoutUser, { isSuccess: logoutSuccess }] = useLogoutUserMutation();
  const router = useRouter();

  const cartItems = useSelector((state: RootState) => state.cart.items);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle clicks outside the menu
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Set initial active link based on current path
  useEffect(() => {
    const path = window.location.pathname;
    const currentLink = navLinks.find(link => link.href === path);
    if (currentLink) {
      setActiveLink(currentLink.label);
    }
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = (label: string) => {
    setIsMenuOpen(false);
    setActiveLink(label);
  };

  if (logoutSuccess) {
    router.push("/login");
  }

  const handleLogout = async () => {
    await logoutUser({});
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-[#1E3A5F]/85 backdrop-blur-md shadow-lg py-2"
          : "bg-[#1E3A5F] py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo with subtle bounce animation on hover */}
        <div className="flex items-center">
          <Link
            href={"/"}
            className="inline-block transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="object-cover drop-shadow-lg"
            />
          </Link>
        </div>

        {/* Desktop Navigation with enhanced hover effects */}
        <nav className="hidden md:flex space-x-8 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative group overflow-hidden px-2 py-1 text-sm font-medium tracking-wide ${activeLink === link.label ? "text-[#25aae1]" : "text-white"
                }`}
              aria-label={`Navigate to ${link.label}`}
              onClick={() => handleLinkClick(link.label)}
            >
              <span className="relative z-10 inline-block transition-colors duration-300 group-hover:text-white">
                {link.label}
              </span>

              {/* Bottom border animation */}
              <span className={`absolute bottom-0 left-0 h-0.5 ${activeLink === link.label ? "w-full bg-[#25aae1]" : "w-0 bg-[#25aae1]"
                } group-hover:w-full transition-all duration-300 ease-out`}></span>

              {/* Hover background effect */}
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#25aae1] group-hover:h-full transition-all duration-300 ease-out -z-0 opacity-20"></span>
            </Link>
          ))}
        </nav>

        {/* User Actions - Desktop with enhanced animations */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Cart Icon with Counter and pulse animation */}
          <Link
            href="/cart"
            aria-label="View Cart"
            className="relative group p-2 hover:bg-[#25aae1]/10 rounded-full transition-all duration-300"
          >
            <ShoppingCartIcon className="w-5 h-5 text-white group-hover:text-[#25aae1] transition-colors duration-300 transform group-hover:scale-110" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#25aae1] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Authentication with glow effect */}
          {authUser ? (
            <button
              onClick={handleLogout}
              className="relative overflow-hidden px-4 py-1.5 rounded-full bg-transparent border border-[#25aae1]/30 text-white hover:text-[#25aae1] hover:shadow-[0_0_15px_rgba(37,170,225,0.3)] transition-all duration-300 group"
            >
              <span className="relative z-10 text-sm font-medium">Logout</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#25aae1]/0 via-[#25aae1]/10 to-[#25aae1]/0 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-full transition-all duration-1000 ease-out"></span>
            </button>
          ) : (
            <Link
              href="/login"
              className="relative overflow-hidden px-4 py-1.5 rounded-full bg-transparent border border-[#25aae1]/30 text-white hover:text-[#25aae1] hover:shadow-[0_0_15px_rgba(37,170,225,0.3)] transition-all duration-300 group"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <UserIcon className="w-4 h-4 transform group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-medium">Login</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#25aae1]/0 via-[#25aae1]/10 to-[#25aae1]/0 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-full transition-all duration-1000 ease-out"></span>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle with enhanced animation */}
        <button
          ref={btnRef}
          onClick={toggleMenu}
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300 focus:outline-none z-50"
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={`bg-white h-0.5 w-full block transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 bg-[#25aae1]' : ''
              }`}></span>
            <span className={`bg-white h-0.5 w-full block transition-all duration-300 ${isMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100'
              }`}></span>
            <span className={`bg-white h-0.5 w-full block transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-[#25aae1]' : ''
              }`}></span>
          </div>
        </button>

        {/* Mobile Menu with improved animation and visual effects */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-screen bg-gradient-to-b from-[#1E3A5F] to-[#152A47] w-72 shadow-2xl transform transition-all duration-500 ease-out z-40 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Decorative top pattern */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#25aae1]/0 via-[#25aae1] to-[#25aae1]/0"></div>

          <div className="flex flex-col h-full pt-20 px-6">
            <nav className="flex flex-col space-y-6 text-white">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => handleLinkClick(link.label)}
                  className={`group flex items-center text-lg font-medium transition-all duration-300 border-b border-blue-800/30 pb-3 ${activeLink === link.label ? "text-[#25aae1] border-[#25aae1]/50" : "hover:text-[#25aae1]"
                    }`}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {/* Animated indicator dot */}
                  <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${activeLink === link.label ? "bg-[#25aae1]" : "bg-white/30 group-hover:bg-[#25aae1]/70"
                    }`}></span>

                  {/* Menu item with slide animation */}
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Bottom actions with enhanced style */}
            <div className="mt-auto pb-8 flex flex-col space-y-5">
              <Link
                href="/cart"
                className="flex items-center space-x-3 text-white p-3 rounded-lg bg-white/5 hover:bg-[#25aae1]/10 transition-all duration-300 group"
              >
                <ShoppingCartIcon className="w-5 h-5 group-hover:text-[#25aae1] transition-colors duration-300" />
                <span className="group-hover:text-[#25aae1] transition-colors duration-300">
                  Cart {cartItems.length > 0 && (
                    <span className="inline-flex items-center justify-center bg-[#25aae1] text-white text-xs rounded-full w-5 h-5 ml-2">
                      {cartItems.length}
                    </span>
                  )}
                </span>
              </Link>

              {authUser ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center space-x-3 text-white p-3 rounded-lg border border-white/10 hover:border-[#25aae1]/30 hover:bg-[#25aae1]/10 transition-all duration-300 group"
                >
                  <span className="group-hover:text-[#25aae1] transition-colors duration-300">Logout</span>
                </button>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center justify-center space-x-3 text-white p-3 rounded-lg border border-white/10 hover:border-[#25aae1]/30 hover:bg-[#25aae1]/10 transition-all duration-300 group"
                >
                  <UserIcon className="w-5 h-5 mr-2 group-hover:text-[#25aae1] transition-colors duration-300" />
                  <span className="group-hover:text-[#25aae1] transition-colors duration-300">Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Overlay for mobile menu with fade animation */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-0 animate-fadeIn z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            style={{
              animation: "fadeIn 0.3s ease-out forwards"
            }}
          ></div>
        )}
      </div>

      {/* Add global keyframe animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0.6; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
      `}</style>
    </header>
  );
};

export default Header;