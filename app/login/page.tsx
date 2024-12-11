"use client";

import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaThumbsUp, FaEye, FaEyeSlash } from "react-icons/fa";
import userPic from "@/public/user.png";

// Component for displaying the "Top Stock Resources" info
const InfoSection = () => {
  return (
    <div className="flex flex-col justify-end items-center h-full bg-cover bg-center bg-no-repeat p-6 relative">
      {/* Main Content (Overlay) */}
      <div className="bg-black/40 rounded-lg p-4 backdrop-blur-md space-y-4 z-0 w-full flex flex-col justify-between h-[250px]">
        {/* Blue background with text and thumb-up icon at the top inside the overlay */}
        <div className="bg-blue-500  p-4 rounded-lg flex justify-center items-center">
          {/* Thumb Up Icon */}
          <FaThumbsUp className="mr-2 text-yellow-400" /> {/* Adding margin to the right of the icon */}
          <span className="font-medium text-lg text-white">Top Stock Resources</span>
        </div>

        {/* Descriptive Text */}
        <div className="bg-white/40 backdrop-blur-md rounded-b-lg text-white p-4">
          <div className="text-base space-y-2">
            <div className="flex pl-2">
              <span>Today, we create innovative solutions to the</span>
            </div>
            <div className="flex pl-2">
              <span>challenges that consumers face in their</span>
            </div>
            <div className="flex pl-2">
              <span>everyday lives.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the login form
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="w-full max-w-md mx-auto flex-1">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">Welcome Back</h1>
      <p className="text-sm md:text-base text-gray-500 mb-8 text-center">Login into your account</p>

      <div className="space-y-4">
        {/* Google Login Button */}
        <div className="flex justify-center w-full">
          <button className="bg-white w-1/2 flex justify-center gap-2 border rounded-lg p-2 md:p-3 hover:bg-blue-600">
            <FcGoogle size={20} />
            <span className="text-sm md:text-base">Google</span>
          </button>
        </div>

        {/* Divider */}
<div className="flex items-center justify-center my-6">
  <div className="flex-1 h-[1px] bg-gray-300"></div>
  <span className="px-4 text-sm md:text-base text-gray-500">Or continue with</span>
  <div className="flex-1 h-[1px] bg-gray-300"></div>
</div>


        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 md:p-3 border rounded-lg text-sm md:text-base"
        />

        {/* Password Input */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
          </button>
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm md:text-base">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </label>
          <Link href="/ForgotPassword" className="text-blue-500 text-sm md:text-base">
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <Link href="#">
          <button className="w-full bg-white-500 text-black border rounded-lg p-2 md:p-3 hover:bg-blue-600 text-sm md:text-base">
            Log In
          </button>
        </Link>

        <p className="text-center text-sm md:text-base">
          Don&#39;t have an account?{" "}
          <Link href="/signup" className="text-blue-500">
            Sign up!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col h-full justify-center">
        <div className="mb-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="IMC Logo"
              width={64}
              height={64}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <LoginForm />
      </div>

      {/* Right Section */}
      <div
        className="hidden mb-0 relative md:flex w-full md:w-1/2 h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${userPic.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <InfoSection />
      </div>
    </div>
  );
}
