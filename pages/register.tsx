import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { FaFacebookF } from "react-icons/fa"; // Facebook Icon
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; 
import Link from "next/link"; // Eye Icons for Password Toggle
import Image from "next/image"; // Next.js Image component

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 p-12">
        {/* IMC Logo */}
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="IMC Logo"
            width={128} // Set width and height for optimized loading
            height={64}
            className="mb-4"
          />
        
        </div>

        {/* Form Section */}
        <div className="max-w-md w-full mx-auto">
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
                onClick={() =>
                  setConfirmShowPassword(!confirmShowPassword)
                }
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
            <p className=" mt-4 text-gray-500 text-center">
            Have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Sign in!
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 relative bg-gray-100 flex items-center justify-center">
        <Image  className="absolute w-16 md:h-full object-cover lg:h-48 "
          src="/mall.png"
          alt="Background"
          layout="fill"
          style={{ objectFit: "cover" }} // Use style for objectFit
         
        />
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Floating Card (Centered Overlay Text) */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-blue-500 rounded-full">
              <span role="img" aria-label="icon">
                🔔
              </span>
            </div>
            <h3 className="font-bold ">Imc Stock</h3>
          </div>
          <p className="text-sm">
            Shop the Best Products from Across the Internet, Delivered to You
            Anytime, Anywhere.
          </p>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
