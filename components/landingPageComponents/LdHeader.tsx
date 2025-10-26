"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useGetProfileQuery, useLogoutUserMutation } from "@/states/authentication";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux-store";

interface NavLink {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    children: [
      { label: "Logistic & Ticketing", href: "/" },
      { label: "Online Shopping", href: "/landingPage" },
      { label: "Smart Glass", href: "/smartGlass" },
      { label: "Technology", href: "/technology" },
      { label: "Auto Space", href: "/autospace" },
      { label: "Relax Conner", href: "/relax" },
    ],
  },
  { label: "e-Shop", href: "/landingPage" },
  { label: "Contact us", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

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
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen, dropdownOpen]);

  useEffect(() => {
    const path = window.location.pathname;
    const findActive = (links: NavLink[]) => {
      for (const link of links) {
        if (link.href === path) return link.label;
        if (link.children) {
          const child = link.children.find((c) => c.href === path);
          if (child) return child.label;
        }
      }
      return "";
    };
    setActiveLink(findActive(navLinks));
  }, []);

  const handleLinkClick = (label: string) => {
    setIsMenuOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
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

  // Hover delay handlers
  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setDropdownOpen(false), 250);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-[#1E3A5F]/85 backdrop-blur-md shadow-lg py-2"
          : "bg-[#1E3A5F] py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 relative group overflow-hidden px-2 py-1 text-sm font-medium tracking-wide ${activeLink === link.label ? "text-[#25aae1]" : "text-white"
                    }`}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => handleLinkClick(child.label)}
                        className={`block px-4 py-2 text-sm hover:bg-[#25aae1] hover:text-white ${activeLink === child.label
                            ? "bg-[#25aae1]/90 text-white"
                            : ""
                          }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                className={`relative group overflow-hidden px-2 py-1 text-sm font-medium tracking-wide ${activeLink === link.label ? "text-[#25aae1]" : "text-white"
                  }`}
                onClick={() => handleLinkClick(link.label)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* User Actions - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
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

          {authUser ? (
            <button
              onClick={handleLogout}
              className="relative overflow-hidden px-4 py-1.5 rounded-full bg-transparent border border-[#25aae1]/30 text-white hover:text-[#25aae1] hover:shadow-[0_0_15px_rgba(37,170,225,0.3)] transition-all duration-300 group"
            >
              <span className="relative z-10 text-sm font-medium">Logout</span>
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
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={btnRef}
          onClick={toggleMenu}
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300 focus:outline-none z-50"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span
              className={`bg-white h-0.5 w-full block transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2 bg-[#25aae1]" : ""
                }`}
            ></span>
            <span
              className={`bg-white h-0.5 w-full block transition-all duration-300 ${isMenuOpen ? "opacity-0 translate-x-3" : "opacity-100"
                }`}
            ></span>
            <span
              className={`bg-white h-0.5 w-full block transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2 bg-[#25aae1]" : ""
                }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-screen bg-gradient-to-b from-[#1E3A5F] to-[#152A47] w-72 shadow-2xl transform transition-all duration-500 ease-out z-40 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            <nav className="flex flex-col space-y-6 text-white">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="flex flex-col">
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(!mobileDropdownOpen)
                      }
                      className="flex items-center justify-between text-lg font-medium transition-all duration-300 border-b border-blue-800/30 pb-3"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <div
                      className={`ml-4 flex flex-col space-y-2 overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => handleLinkClick(child.label)}
                          className={`group flex items-center text-sm font-medium transition-all duration-300 border-b border-blue-800/30 pb-2 ${activeLink === child.label
                              ? "text-[#25aae1] border-[#25aae1]/50"
                              : "hover:text-[#25aae1]"
                            }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href!}
                    onClick={() => handleLinkClick(link.label)}
                    className={`group flex items-center text-lg font-medium transition-all duration-300 border-b border-blue-800/30 pb-3 ${activeLink === link.label
                        ? "text-[#25aae1] border-[#25aae1]/50"
                        : "hover:text-[#25aae1]"
                      }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
