// pages/signup.tsx
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { RiFacebookCircleFill } from "react-icons/ri";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Sign Up - IMC</title>
        <meta name="description" content="Create your IMC account to shop the best products." />
      </Head>

      {/* Left Section */}
      <div className="w-1/2 p-8 flex flex-col">
        <div className="mb-12">
          <Image
            src="/imc-logo.png"
            alt="IMC Logo"
            width={120}
            height={50}
            className="mb-4"
          />
          <p>
            Have an account?{" "}
            <Link href="/signin" className="text-blue-500">
              Sign in!
            </Link>
          </p>
        </div>

        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">Get Started With IMC</h1>
          <p className="text-gray-500 mb-8">Getting started is easy</p>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-2 border rounded-lg p-3 hover:bg-gray-50">
              <Image src="/google.png" alt="Google" width={20} height={20} />
              <span>Google</span>
            </button>

            <button className="w-full flex items-center justify-center gap-2 border rounded-lg p-3 hover:bg-gray-50">
              <Image src="/facebook.png" alt="Facebook" width={20} height={20} />
              <span>Facebook</span>
            </button>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-500">Or continue with</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 border rounded-lg"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 border rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full p-3 border rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <button className="w-full bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-600">
              Create Account
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            By continuing you indicate that you read and agreed to the Terms of Use
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gray-100 relative">
        <div className="absolute inset-0">
          <Image
            src="/mall-image.jpg"
            alt="Mall"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-500 p-2 rounded">
                  <Image src="/icon.png" alt="Icon" width={24} height={24} />
                </div>
                <span>IMC Stock</span>
              </div>
              <p className="text-lg">
                Shop the Best Products from Across the Internet, Delivered to You Anytime, Anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
