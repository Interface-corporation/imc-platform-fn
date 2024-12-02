import Image from "next/image";
import userpic1 from "@/public/mall.png";
import SignupForm from "@/components/Auth/SignupForm";
import { IoFlashSharp } from "react-icons/io5";
import { TbTelescope } from "react-icons/tb";

const InfoSection = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <Image
        src={userpic1}
        alt="Office Background"
        width={900}
        height={700}
        className="md:rounded-none"
        style={{  height: "585px" }} 
      />

      {/* Centered "Top Stock Resources" */}
      <div className="absolute top-0 left-10 bottom-20 flex justify-center items-center">
        <div className="flex items-center gap-2 p-4 bg-blue-500 text-white rounded-full">
          <IoFlashSharp className="w-6 h-6" />
          <span className="font-medium text-lg">Top Stock Resources</span>
        </div>
      </div>

      {/* Overlay only at the bottom */}
      <div className="absolute bottom-10 left-4 right-4 bg-black/40 p-6 rounded-lg">
        <div className="bg-white/40 backdrop-blur-md p-4 rounded-lg text-white">
        <div className="">
          <TbTelescope className="w-4 h-6 m-20"/> 
        </div>
          <p className="text-base">
            Today, we create innovative solutions to the challenges that
            consumers face in their everyday lives.
          </p>
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
      <div className="hidden w-full md:w-1/2 md:flex justify-center items-center">
        <InfoSection />
      </div>
    </div>
  );
}
