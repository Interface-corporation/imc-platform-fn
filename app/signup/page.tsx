//import Image from "next/image";
import userPic from "@/public/mall.png";
import SignupForm from "@/components/Auth/SignupForm";
//import { IoFlashSharp } from "react-icons/io5";
//import { TbTelescope } from "react-icons/tb";

const InfoSection = () => {
  return (
    <div className="flex flex-col justify-end items-center h-full bg-cover bg-center bg-no-repeat p-6">
      {/* Overlay only at the bottom */}
      <div className="space-y-4 flex-col text-center items-end">
        <div className="flex items-center bg-blue-500 text-white rounded-full p-3">
          <span className="font-medium text-lg">Top Stock Resources</span>
        </div>
        <div className="bg-blue rounded-lg p-4">
          <div className="bg-black backdrop-blur-md rounded-lg text-white p-4">
            <div className="text-base space-y-2">
              <div className="flex pl-2">
                <span>Today, we create innovative solutions to the</span>
              </div>
              <div className="flex pl-2">
                <span>challenges that consumers face in their</span>
              </div>
              <div className="flex pl-2">
                <span>everyday lives.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// Main signup component
export default function Signup() {
  return (
    <div className="flex flex-col-2 md:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white">
        <div className="w-full max-w-lg px-6">
          <SignupForm />
        </div>
      </div>

      {/* Right Section */}
      <div
        className="hidden mb-0 relative md:flex w-full md:w-1/2 h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${userPic.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <InfoSection />
      </div>
    </div>
  );
}
