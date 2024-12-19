import SignupForm from "@/components/Auth/SignupForm";
import Image from "next/image";
import { IoIosFlash } from "react-icons/io";
import { IoTelescope } from "react-icons/io5";
//import Link from "next/link";

const SignUpPage = () => {
    return (
        <div className="flex max-md:flex-col min-h-screen">
            {/* Left Section: Signup Form */}
            <div className="w-1/2 max-md:w-full flex flex-col justify-center items-center bg-gray-100 max-md:py-14">
                {/* Logo */}
                <div className="absolute top-4 left-4 max-md:left-[calc(50%-3rem)]">
                    <Image
                        src="/logo.png"
                        alt="IMC Logo"
                        width={148}
                        height={114}
                        priority
                        className="w-24 h-auto"
                    />
                </div>
                <SignupForm />
            </div>

            {/* Right Section: Promotional Content */}
            <div className="w-1/2 max-md:w-full h-lvh border-l relative">
                <Image
                    src="/mall.png"  // Changed to mall.png
                    alt="IMC Background"
                    fill
                    className="object-cover inset-0"
                />
                <div className="relative z-10 w-full h-lvh p-6 rounded-lg flex flex-col justify-center">
                    <h2 className="text-lg font-bold text-white bg-opacity-90 backdrop-blur-lg bg-logoBlue p-2 pl-3 rounded-full flex gap-x-2 items-center w-1/3 max-lg:w-full">
                        <IoIosFlash size={35} className="bg-blue-300 p-1 text-white rounded-full"/>
                        Imc Stock
                    </h2>
                    <p className="text-white text-lg bg-black bg-opacity-20 mt-2 flex flex-col p-3 gap-y-2 backdrop-blur-lg rounded-lg w-1/3 max-lg:w-full">
                        <IoTelescope size={40} className="bg-black p-1.5 block text-white rounded-lg"/>          
                        Shop the Best Products from Across the Internet, Delivered to You Anytime, Anywhere.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
