// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import {
//   ChevronDownIcon,
//   ShoppingCartIcon,
//   UserIcon,
// } from "@heroicons/react/24/solid";
// import Link from "next/link";
// import { useGetProfileQuery, useLogoutUserMutation } from "@/states/authentication";
// import { LuLogOut } from "react-icons/lu";
// import { useRouter } from "next/navigation";

// interface NavLink {
//   label: string;
//   href: string;
// }

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   // const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
//   // const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
//   const { data: authUser } = useGetProfileQuery({});
//   const [logoutUser, { isSuccess: logoutSuccess }] = useLogoutUserMutation();
//   const router = useRouter();

//   const navLinks: NavLink[] = [
//     { label: "What's New", href: "#categories" },
//     { label: "Categories", href: "#categories" },
//     { label: "Services", href: "#services" },
//     { label: "Products", href: "/Products" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   if (logoutSuccess) {
//     router.push("/login")
//   }

//   const handleLogout = async () => {
//     await logoutUser({});

//   }

//   return (
//     <header
//       className={` fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-[#031D40]/80 backdrop-blur-md shadow-lg"
//         : "bg-[#031D40]"
//       }`}
//     >
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center space-x-4">
//           <Link href={"/"}>
//             <Image
//               src="/images/logo.png"
//               alt="Logo"
//               width={50}
//               height={50}
//               style={{ objectFit: "cover" }}
//             />
//           </Link>
//         </div>

//         {/* Navigation */}
//         <nav className="hidden md:flex space-x-6 text-white">
//           {navLinks.map((link) => (
//             <Link
//               key={link.label}
//               href={link.href}
//               className="hover:text-[#25aae1] transition-all duration-300"
//               aria-label={`Navigate to ${link.label}`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Search and Actions */}
//         <div className="flex items-center text-white space-x-4">
//           {/* Search Bar */}
//           <div
//             className={`${isSearchOpen ? "flex" : "hidden"
//               } lg:flex items-center bg-white rounded-full shadow-md w-full max-w-md px-4 py-2`}
//           >
//             <select
//               className="bg-transparent outline-none border-none text-gray-500 text-sm"
//               defaultValue="all"
//               aria-label="Select category"
//             >
//               <option value="all">All Categories</option>
//               <option value="electronics">Electronics</option>
//               <option value="fashion">Fashion</option>
//               <option value="home">Home & Kitchen</option>
//               <option value="groceries">Groceries</option>
//             </select>
//             <div className="h-6 w-px bg-gray-300 mx-2"></div>
//             <input
//               type="text"
//               placeholder="Search items..."
//               className="flex-grow bg-transparent outline-none text-sm text-gray-500"
//               aria-label="Search items"
//             />
//             <button
//               onClick={() => setIsSearchOpen(false)}
//               className="text-gray-400 lg:hidden"
//               aria-label="Close search bar"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-5 h-5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//           {!isSearchOpen && (
//             <button onClick={toggleSearch} className="lg:hidden text-white" aria-label="Open search bar">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 21l-4.35-4.35m2.5-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
//                 />
//               </svg>
//             </button>
//           )}

//           {/* Language Dropdown */}
//           <div className="hidden md:flex items-center space-x-1">
//             <button className="text-white" aria-label="Language selection">
//               Eng
//             </button>
//             <ChevronDownIcon className="w-5 h-5 cursor-pointer text-white" />
//           </div>

//           {/* Cart and User Icons */}
//           <div className="hidden md:flex space-x-4">
//             <Link href="/cart" aria-label="View Cart">
//               <ShoppingCartIcon className="w-5 h-5 cursor-pointer text-white" />
//             </Link>
//             {
//               authUser
//                 ? <Link href="/#" onClick={handleLogout}>
//                   <LuLogOut className="w-5 h-5 cursor-pointer text-white" />
//                 </Link>
//                 : <Link href="/login">
//                   <UserIcon className="w-5 h-5 cursor-pointer text-white" />
//                 </Link>
//             }

//           </div >
//         </div >

//         {/* Mobile Menu Toggle */}
//         < div className="md:hidden" >
//           <button onClick={toggleMenu} className="text-white" aria-label="Toggle mobile menu">
//             {isMenuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             )}
//           </button>
//         </div >
//         <div className="flex items-center space-x-4 text-white md:hidden">
//           <Link href="/cart" aria-label="View Cart">
//             <ShoppingCartIcon className="w-6 h-6 cursor-pointer text-white" />
//           </Link>
//           <Link href="/login" aria-label="User Login">
//             <UserIcon className="w-6 h-6 cursor-pointer text-white" />
//           </Link>
//         </div>
//       </div >

//       {/* Mobile Menu */}
//       {
//         isMenuOpen && (
//           <div className="md:hidden">
//             <nav className="bg-[#1E3A5F] flex flex-col space-y-2 p-4 text-white">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="hover:text-blue-400"
//                   aria-label={`Navigate to ${link.label}`}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         )
//       }
//     </header >
//   );
// };

// export default Header;
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useGetProfileQuery, useLogoutUserMutation } from "@/states/authentication";
import { LuLogOut } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  const { data: authUser } = useGetProfileQuery({});
  const [logoutUser, { isSuccess: logoutSuccess }] = useLogoutUserMutation();
  const router = useRouter();

  const navLinks: NavLink[] = [
    { label: "What's New", href: "#categories" },
    { label: "Categories", href: "#categories" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "/Products" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (logoutSuccess) {
    router.push("/login");
  }

  const handleLogout = async () => {
    await logoutUser({});
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#031D40]/80 backdrop-blur-md shadow-lg" : "bg-[#031D40]"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className="hover:text-[#25aae1] transition-all duration-300"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-white">
          <Link href="/cart">
            <ShoppingCartIcon className="w-6 h-6 cursor-pointer hover:text-[#25aae1]" />
          </Link>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button onClick={toggleProfile} className="focus:outline-none">
              <UserIcon className="w-6 h-6 cursor-pointer hover:text-[#25aae1]" />
            </button>

            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden"
                >
                  <ul>
                    {authUser ? (
                      <>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={handleLogout}
                        >
                          <LuLogOut className="inline w-5 h-5 mr-2" /> Logout
                        </li>
                      </>
                    ) : (
                      <li>
                        <Link
                          href="/login"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Login
                        </Link>
                      </li>
                    )}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#1E3A5F] flex flex-col p-4 text-white"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="hover:text-blue-400 py-2"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;