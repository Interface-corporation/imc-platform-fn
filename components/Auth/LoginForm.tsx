"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-md w-full">
      {/* Logo */}
      <div className="absolute top-4 left-4">
        <Image
          src="/logo.png"
          alt="IMC Logo"
          width={64}
          height={64}
          priority
        />
      </div>

      <h1 className="text-3xl font-semibold text-gray-800 text-center mt-20">
        Welcome Back
      </h1>
      <p className="text-gray-500 text-center mb-6">Login into your account</p>

      <div className="flex gap-4 justify-center mb-6 text-black">
        <button
          type="button"
          className="flex items-center justify-center w-full bg-blue-500  py-2 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <FaGoogle className=" text-black w-5 h-5 mr-2" />
          Google
        </button>
      </div>

      <div className="text-center text-gray-500 mb-4">Or continue with</div>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
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
        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Remember me</span>
          </label>
          <Link href="/ForgotPassword" className="text-blue-500 text-sm">
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 outline-none transition"
        >
          Login
        </button>
      </form>
      <p className="text-center text-sm mt-4">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-blue-500 font-medium">
          Sign up!
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
