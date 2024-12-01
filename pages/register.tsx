import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; 
import Link from "next/link"; // Next.js Link component
import Image from "next/legacy/image"; // Next.js Image component
import '../styles/globals.css';
import { FiBell } from 'react-icons/fi';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left Section */}
      <div className="flex flex-col justify-start items-start w-full md:w-1/2 p-6 md:p-12">
        {/* IMC Logo with Link */}
        <div className="mb-8">
          <Link href="/homepage.tsx">
            <Image
              src="/logo.png"
              alt="IMC Logo"
              width={64} // Reduced width for a smaller logo
              height={64}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Form Section */}
        <div className="max-w-md w-full mx-auto" >
          <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
            Get Started With IMC
          </h1>
          <p className="text-gray-500 mb-6 text-center">Getting started is easy</p>

          {/* Social Buttons */}
          <div className="flex justify-center mb-6 text-center">
            <button className="w-full flex items-center justify-center gap-2 border rounded-lg p-3 hover:bg-blue-200">
              <FcGoogle size={20} />
              <span>Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-sm text-gray-400">Or continue with</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          {/* Input Fields */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 border rounded-lg focus:outline-none"
            />

            {/* Password Field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 border rounded-lg focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
              </button>
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <input
                type={confirmShowPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full p-3 border rounded-lg focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setConfirmShowPassword(!confirmShowPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                aria-label="Toggle confirm password visibility"
              >
                {confirmShowPassword ? (
                  <AiFillEyeInvisible size={20} />
                ) : (
                  <AiFillEye size={20} />
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg font-medium hover:bg-blue-600"
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-4 text-gray-500 text-sm">
            By continuing, you indicate that you read and agreed to the{" "}
            <Link href="#" className="text-blue-500">
              Terms of Use
            </Link>
            .
          </p>
          <p className="mt-4 text-gray-500 text-center">
            Have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Sign in!
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-full md:w-1/2 relative bg-gray-100 items-center justify-center">
        <Image
          src="/mall.png"
          alt="Background"
          layout="fill"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Floating Card */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
      <div className="flex items-center gap-2 mb-2">
        {/* Replacing emoji with an image */}
        <div>
      {/* Use a notification icon from react-icons */}
      <div className="p-2 bg-blue-500 rounded-full">
        <FiBell size={24} color="white" />
      </div>
      <h3 className="font-bold">Imc Stock</h3>
      </div>
      {/* Description */}
      <p className="text-sm">
        Shop the Best Products from Across the Internet, Delivered to You
        Anytime, Anywhere.
      </p>
    </div>
      </div>
    </div>
    </div>
  );
};

export default SignUpPage;