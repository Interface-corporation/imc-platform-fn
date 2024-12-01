"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const SignupForm = () => {
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg relative">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mt-20">
        Get Started With IMC
      </h1>
      <p className="text-gray-500 text-center mb-6">Getting started is easy</p>

      {/* Social Login Buttons */}
      <div className="flex gap-4 justify-center mb-6">
        <button
          type="button"
          className="flex items-center justify-center w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <FaGoogle className="text-white w-5 h-5 mr-2" />
          Google
        </button>
      </div>
      <div className="text-center text-gray-500 mb-4">Or continue with</div>

      {/* Form */}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
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
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer focus:ring-2 focus:ring-blue-500"
            onClick={toggleConfirmPasswordVisibility}
            aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
          >
            {showConfirmPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 outline-none transition"
        >
          Create Account
        </button>
      </form>

      <p className="text-gray-500 text-sm text-center mt-6">
        By continuing, you indicate that you agree to the{" "}
        <Link href="#" className="text-blue-500 underline">
          Terms of Use
        </Link>
      </p>
      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 font-medium">
          Sign in!
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
