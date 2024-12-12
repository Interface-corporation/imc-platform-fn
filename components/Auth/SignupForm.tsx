"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

const SignupForm = () => {
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="relative w-full max-w-md mx-auto bg-white rounded-lg flex flex-col items-center p-6">
      {/* Logo aligned to the top-left corner */}
      <div className="absolute top-4 left-4">
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

      {/* Centered Heading and Supporting Text */}
      <h1 className="text-3xl font-semibold text-gray-800 mt-16 text-center">
        Get Started With IMC
      </h1>
      <p className="text-gray-500 mb-6 text-center">Getting started is easy</p>

      {/* Google Sign-In Button */}
      <div className="flex justify-center w-full mb-4">
        <button className="bg-white flex justify-center gap-2 border rounded-lg p-2 md:p-3 hover:bg-blue-600 w-1/2">
          <FcGoogle size={20} />
          <span className="text-sm md:text-base">Google</span>
        </button>
      </div>

      <div className="text-gray-500 mb-4 text-center">Or continue with</div>

      {/* Form Inputs */}
      <form className="space-y-2 w-full">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full px-4 py-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
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
            {showPassword ? (
              <FaEyeSlash className="text-gray-600" />
            ) : (
              <FaEye className="text-gray-600" />
            )}
          </button>
        </div>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full px-4 py-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
            onClick={toggleConfirmPasswordVisibility}
            aria-label={
              showConfirmPassword ? "Hide confirm password" : "Show confirm password"
            }
          >
            {showConfirmPassword ? (
              <FaEyeSlash className="text-gray-600" />
            ) : (
              <FaEye className="text-gray-600" />
            )}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-black py-2 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 outline-none transition"
        >
          Create Account
        </button>
      </form>

      {/* Footer Text */}
      <p className="text-gray-500 text-sm mt-6 text-center">
        By continuing, you indicate that you agree to the {" "}
        <Link href="#" className="text-blue-500 underline">
          Terms of Use
        </Link>
      </p>
      <p className="text-sm mt-4 text-center">
        Already have an account? {" "}
        <Link href="/login" className="text-blue-500 font-medium">
          Sign in!
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
