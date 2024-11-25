import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; 
import '../styles/globals.css'; // Import global styles

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="IMC Logo"
              width={92} // Reduced width for a smaller logo
              height={44}
              className="cursor-pointer"
            />
          </Link>
        </div>

        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">Welcome Back</h1>
          <p className="text-sm md:text-base text-gray-500 mb-8 text-center">Login into your account</p>

          <div className="space-y-4">
            {/* Google Login Button */}
            <button className="w-full flex items-center justify-center gap-2 border rounded-lg p-2 md:p-3 hover:bg-blue-200">
              <FcGoogle size={20} />
              <span className="text-sm md:text-base">Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-sm md:text-base text-gray-500">Or continue with</span>
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
                {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
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
              <Link href="/forgot-password" className="text-blue-500 text-sm md:text-base">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <Link href="/dashboard">
              <button className="w-full bg-blue-500 text-white rounded-lg p-2 md:p-3 hover:bg-blue-600 text-sm md:text-base">
                Log In
              </button>
            </Link>

            <p className="text-center text-sm md:text-base">
              Don't have an account?{' '}
              <Link href="/register" className="text-blue-500">
                Sign up!
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:block w-full md:w-1/2 h-64 md:h-auto bg-gray-100 relative">
        <div className="absolute inset-0">
          <Image
            src="/user.png"
            alt="Office"
            layout="fill"
            objectFit="cover"
            className="rounded-lg md:rounded-none"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 text-white">
            <div className="bg-white/20 backdrop-blur p-3 md:p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2 md:mb-4">
                <div className="bg-blue-500 p-2 rounded">
                  👍
                </div>
                <span className="text-sm md:text-base">Top Stock Resources</span>
              </div>
              <p className="text-sm md:text-lg">
                Today, we create innovative solutions to the challenges that consumers face in both their everyday lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
