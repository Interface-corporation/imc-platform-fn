"use client";

import Link from "next/link";
import Image from "next/image"; 
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaThumbsUp, FaEye, FaEyeSlash } from "react-icons/fa";
import userPic from "@/public/user.png"; 

// Component for displaying the "Top Stock Resources" info
const InfoSection = () => {
  return (
    <div className="absolute inset-0 p-11 flex flex-col justify-end items-start">
      <div className="bg-black bg-opacity-40 rounded-lg p-6 w-full max-w-md flex flex-col justify-between h-56">
        <div className="bg-blue-600 p-3 rounded-lg flex justify-start w-3/4 max-w-xs mx-auto">
          <FaThumbsUp className="mr-2 text-yellow-400" />
          <span className="font-medium text-lg text-white">Top Stock Resources</span>
        </div>
        <div className="rounded-b-lg text-white p-4 text-left">
          <div className="text-lg leading-relaxed">
            <p className="pl-4">Today, we create innovative solutions to the</p>
            <p className="pl-4">challenges that consumers face in their</p>
            <p className="pl-4">everyday lives.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the Login Form
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto flex flex-col justify-center text-xl p-4"
    >
      <h1 className="text-2xl font-bold text-black text-5xl text-center mb-4">Welcome Back</h1>
      <p className="text-black text-center mb-6 text-xl">Login into your account</p>

      <div className="mb-6 flex justify-center items-center">
        <button
          type="button"
          className="flex items-center justify-center w-1/2 bg-white p-3 rounded-lg shadow-md cursor-pointer transition-colors"
        >
          <FcGoogle size={20} className="mr-2" />
          Google
        </button>
      </div>

      <div className="flex items-center mb-4">
        <div className="flex-1 border-b border-gray-300 mr-2" />
        <div className="text-black text-xl mx-2 text">Or continue with</div>
        <div className="flex-1 border-b border-gray-300 ml-2" />
      </div>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 rounded-lg border border-gray-300 mb-4 text-base"
      />

      <div className="relative mb-4">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full p-3 rounded-lg border border-gray-300 text-base"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-none border-none cursor-pointer"
        >
          {showPassword ? (
            <FaEyeSlash className="text-black" />
          ) : (
            <FaEye className="text-black" />
          )}
        </button>
      </div>

      <div className="flex justify-between mb-4">
        <label className="flex items-center  text-lg">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="mr-2"
          />
          Remember me
        </label>
        <Link href="/forgot-password" className="text-blue-600 text-lg">
          Forgot Password?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full bg-white border-3 text-black p-3 rounded-lg shadow-md cursor-pointer transition-colors"
      >
        Login
      </button>

      <p className="text-center text-lg mt-4">
        Don’t have an account?{' '}
        <Link href="/signup" className="text-blue-600 font-medium">
          Sign up!
        </Link>
      </p>
    </form>
  );
};

// Main Component
const Login = () => {
  return (
    <div className="flex flex-row w-screen h-screen">
      {/* Left Section */}
      <div className="w-full max-w-1/2 bg-white flex flex-col justify-center p-4">
        <div className="mb-8">
          <Link href="/home">
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
        className="relative w-full max-w-1/2 h-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${userPic.src})` }}
      >
        <InfoSection />
      </div>
    </div>
  );
};

export default Login;
