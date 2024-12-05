"use client";
//import LoginForm from "@/components/Auth/LoginForm";
import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import userpic from "@/public/user.png";

// Component for displaying the "Top Stock Resources" info
const InfoSection = () => {
  return (

    <div className="relative w-full h-full">
      {/* Background Image */}
      <Image
        src={userpic}
        alt="Office Background"
        width={600}
        height={580}
        className="md:rounded-none object-cover w-full h-full"
      />

      {/* Overlay only at the bottom */}
      <div className="absolute  p-3 right-0 top-0 width-[300px]">
        {/* Content Section */}

        <div className=" flex p-6 pb-2 items-center">
          <div className="flex items-center gap-2 p-4 bg-blue-500 text-white rounded-full">
            <span className="font-medium text-lg">Top Stock Resources</span>
          </div>
        </div>
        <div className=" bg-black/40 p-6 rounded-lg inline ">
          <div className="bg-white/40 backdrop-blur-md p-4 rounded-lg text-white">
            <p className="text-base">
              Today, we create innovative solutions to the challenges that
              consumers face in their everyday lives.
            </p>
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
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm md:text-base text-gray-500">
            Or continue with
          </span>
          <div className="flex-1 h-px bg-gray-200"></div>
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
            className="w-full p-2 md:p-3 border rounded-lg text-sm md:text-base"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            aria-label="Toggle password visibility"
          >
            {showPassword ? (
              <AiFillEyeInvisible size={20} />
            ) : (
              <AiFillEye size={20} />
            )}
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
      <div className="hidden md:flex w-full md:w-1/2 h-full relative">
        <InfoSection />
      </div>
    </div>
  );
}
