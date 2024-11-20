import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; 
import '../styles/globals.css'; // You can use this icon for visibility toggle.

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-8 flex flex-col">
        <div className="mb-12">
          <img
            src="/logo.png"
            alt="IMC Logo"
            className="w-40 h-25 object-contain mb-4"
          />
        </div>

        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back</h1>
          <p className="text-gray-500 mb-8 text-center">Login into your account</p>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-2 border rounded-lg p-3 hover:bg-gray-50">
              <FcGoogle size={20} />
              <span>Google</span>
            </button>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-500">Or continue with</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 border rounded-lg"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-blue-500">
                Forgot Password?
              </Link>
            </div>

            <button className="w-full bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-600">
              Log In
            </button>

            <p className="text-center">
              Don't have an account?{' '}
              <Link href="/register" className="text-blue-500">
                Sign up!
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-gray-100 relative">
        <div className="absolute inset-0">
          <Image
            src="/user.png"
            alt="Office"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-500 p-2 rounded">
                  👍
                </div>
                <span>Top Stock Resources</span>
              </div>
              <p className="text-lg">
                Today, we create innovative solutions to the challenges that consumers face in both their everyday lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
