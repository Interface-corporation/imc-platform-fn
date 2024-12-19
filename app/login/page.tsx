"use client";
import { Outfit } from "next/font/google";

import LoginForm from "@/components/Auth/LoginForm";
import Image from "next/image";
import { FaThumbsUp } from "react-icons/fa";

const outfit = Outfit({ subsets: ['latin', "latin-ext"], weight: "500" })

const LoginPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section: Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-50 px-8 py-16">
        <LoginForm />
      </div>

      {/* Right Section: Promotional Content */}
      <div className="w-1/2 h-lvh relative">
            {/* Background Image */}
            <div className="relative w-full h-lvh">
                <Image
                    src="/user.png"
                    alt="IMC Background"
                    fill // Stretches the image to fill the parent container
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover" // Additional styling for absolute positioning
                />
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-10 left-5 backdrop-blur-lg  bg-white/30 bg-opacity-90 p-6 rounded-lg shadow-lg max-w-lg w-full">
                <div className="bg-[#25AAE1] rounded-lg p-2 flex items-center gap-x-2 w-1/2">
                    <FaThumbsUp className="h-6 w-6 text-[#e2bb50]"/>
                    <h2 className="text-sm font-semibold text-white">
                        Top Stock Resources
                    </h2>
                </div>
                <p className={`text-white mt-2 text-xl ${ outfit.className }`}>
                    Today, we create innovative solutions to the challenges consumers
                    face in everyday lives.
                </p>
            </div>
        </div>
    </div>
  );
};

export default LoginPage;
