// Import necessary components and assets
import userPic from "@/public/mall.png";
import SignupForm from "@/components/Auth/SignupForm";
import { IoFlashSharp } from "react-icons/io5";
import { TbTelescope } from "react-icons/tb";

const InfoSection = () => (
  <div className="flex flex-col justify-end items-center h-full bg-cover bg-center bg-no-repeat p-6 relative">
    {/* Flash Icon Section aligned with the overlay */}
    <div
      className="w-92 p-1 relative z-20"
      style={{
        bottom: "calc(33% + 2rem)", // Raise it above the overlay section
        left: "110%",
        transform: "translateX(-10%)",
      }}
    >
      <div className="flex items-center top-8 gap-0 p-4 bg-blue-500 text-white rounded-xl">
        <IoFlashSharp className="w-6 h-6" />
        <span className="font-medium text-lg">imc stock</span>
      </div>
    </div>

    {/* Overlay Section */}
<div
  className=" bg-black/40 backdrop-blur-md rounded-lg text-white p-4 flex flex-col-2 items-start space-y-2 absolute z-10"
  style={{
    bottom: "calc(1% + 1rem)", // Align with the Flash Icon Section
    left: "80%",
    transform: "translateX(0%)", // Center horizontally
    width: "100%",
    maxWidth: "350px",
    minWidth: "380px",
    padding: "3rem",
  }}
>
  <div className="flex items-center gap-2 mb-4">
    <TbTelescope className="w-6 h-6" />
  </div>
  <div className="text-base">
    <p>shop the best products</p>
    <p>from Across the internet,</p>
    <p>Delivered to you Anytime,</p>
    <p>Anywhere</p>
  </div>
</div>

  </div>
);

export default function Signup() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white relative">
        <SignupForm />
      </div>

      {/* Right Section */}
      <div
        className="hidden md:flex w-full md:w-1/2 h-screen bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${userPic.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <InfoSection />
      </div>
    </div>
  );
}
