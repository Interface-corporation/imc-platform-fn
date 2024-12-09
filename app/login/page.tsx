"use client";

import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import userPic from "@/public/user.png";

// Component for displaying the "Top Stock Resources" info
const InfoSection = () => {
  return (
    <div className="flex flex-col justify-end items-center h-full bg-cover bg-center bg-no-repeat p-6">
      {/* Overlay only at the bottom */}
      <div className="space-y-4 flex-col text-center items-end">
        <div className="flex items-center bg-blue-500 text-white rounded-full p-3">
          <span className="font-medium text-lg">Top Stock Resources</span>
        </div>
        <div className="bg-black/40 rounded-lg p-4">
          <div className="bg-white/40 backdrop-blur-md rounded-lg text-white p-4">
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
    </div>
  );
};

// Component for the login form
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Define togglePasswordVisibility function
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="w-full max-w-md mx-auto flex-1">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
        Welcome Back
      </h1>
      <p className="text-sm md:text-base text-gray-500 mb-8 text-center">
        Login into your account
      </p>

      <div className="space-y-4">
        {/* Google Login Button */}
        <button className="bg-blue-500 w-full flex items-center justify-center gap-2 border rounded-lg p-2 md:p-3 hover:bg-blue-200">
          <FcGoogle size={20} />
          <span className="text-sm md:text-base">Google</span>
        </button>

        {/* Divider */}
        <div className="flex justify-center items-center my-6">
          <div className="flex-1 h-px bg-gray-400"></div>
          <span className="text-sm md:text-base text-gray-500 mx-4">
            Or continue with
          </span>
          <div className="flex-1 h-px bg-gray-400"></div>
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
            className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer focus:ring-2 focus:ring-blue-500"
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
          <button className="w-full bg-blue-500 text-white rounded-lg p-2 md:p-3 hover:bg-blue-600 text-sm md:text-base">
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
