import Image from "next/image";
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import HeroSection from "../components/HeroSection"

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-[#1E3A5F] shadow text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-900">
            <Image
              src="/images/logo.png"
              alt="hero image"
              layout="intrinsic"
              width={50}
              height={50}
              objectFit="cover"
            />
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-blue-600">
              Category
            </a>
            <a href="#" className="hover:text-blue-600">
              What&apos;s new
            </a>
            <a href="#" className="hover:text-blue-600">
              Services
            </a>
            <a href="#" className="hover:text-blue-600">
              Delivery
            </a>
          </nav>
          <div className="flex items-center space-x-4">
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
                placeholder="Search items......"
                className="flex-grow bg-transparent outline-none text-sm text-gray-500"
              />
              <button className="text-gray-500">
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
                    d="M21 21l-4.35-4.35m2.5-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex">
              <button className="">Eng</button>
              <ChevronDownIcon className="w-5 h-5 cursor-pointer" />
            </div>
            <button className="text-blue-600">
              <ShoppingCartIcon className="w-5 h-5 cursor-pointer text-white" />
            </button>
            <button className="text-blue-600">
              <UserIcon className="w-5 h-5 cursor-pointer text-white" />
            </button>
          </div>
        </div>
      </header>
      {/* categories */}
      <div className="flex flex-row items-center justify-center w-100% p-2 gap-2">
        <div className="rounded-full bg-[#1E3A5F] text-white p-1">
          <select
            className="bg-transparent outline-none border-none text-gray-500 text-sm"
            defaultValue="Groceries"
          >
            <option value="groceries">Groceries</option>
          </select>
        </div>
        <div className="bg-[#CDEDF8] rounded-full p-1">
          <select
            className="bg-transparent outline-none border-none text-gray-500 text-sm"
            defaultValue="Groceries"
          >
            <option value="groceries" className="text-black">Premium Fruits</option>
          </select>
        </div>
        <div className="bg-[#CDEDF8] rounded-full p-1">
          <select
            className="bg-transparent outline-none border-none text-gray-500 text-sm"
            defaultValue="Groceries"
          >
            <option value="groceries">Home & Kitchen</option>
          </select>
        </div>
        <div className="bg-[#CDEDF8] rounded-full p-1">
          <select
            className="bg-transparent outline-none border-none text-gray-500 text-sm"
            defaultValue="Groceries"
          >
            <option value="groceries">Fashion</option>
          </select>
        </div>
        <div className="bg-[#CDEDF8] rounded-full p-1">
          <select
            className="bg-transparent outline-none border-none text-gray-500 text-sm"
            defaultValue="Groceries"
          >
            <option value="groceries">Electronics</option>
          </select>
        </div>
        <div className="bg-[#CDEDF8] rounded-full p-1">
          <select
            className="bg-transparent outline-none border-none text-gray-500 text-sm"
            defaultValue="Groceries"
          >
            <option value="groceries">Beauty</option>
          </select>
        </div>
        <div className="bg-[#CDEDF8] rounded-full p-1">
          <select
            className="bg-transparent outline-none border-none text-gray-500 text-sm"
            defaultValue="Groceries"
          >
            <option value="groceries">Home Improvement</option>
          </select>
        </div>
        <div className="bg-[#CDEDF8] rounded-full p-1">
          <select
            className="bg-transparent outline-none border-none text-gray-500 text-sm"
            defaultValue="Groceries"
          >
            <option value="groceries">Sports,Toys & Luggage</option>
          </select>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Product Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">
          Grab the best deal on Smartphones
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Card */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 text-center"
            >
              <Image
                src="/images/prod1.jpg" 
                alt="Laptop Sleeve MacBook"
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-medium">Laptop Sleeve MacBook</h3>
              <p className="text-gray-500">
                Organic Cotton, fairtrade certified
              </p>
              <div className="text-blue-600 font-bold mt-2">$59.00</div>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
