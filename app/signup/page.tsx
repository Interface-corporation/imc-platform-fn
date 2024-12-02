import Image from "next/legacy/image";
import userpic from "@/public/mall.png";
import SignupForm from "@/components/Auth/SignupForm";

// Component for displaying the "Top Stock Resources" info
const InfoSection = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <Image
        src={userpic}
        alt="Office Background"
        layout="fill"
        objectFit="cover"
        className="md:rounded-none"
      />

      {/* Overlay only at the bottom */}
      <div className="absolute bottom-10 left-4 right-4 bg-black/40 p-6 rounded-lg">
        <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg text-white">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-yellow-400 text-black p-2 rounded-full">👍</div>
            <span className="font-medium text-lg bg-blue-500">Top Stock Resources</span>
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
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white">
        <div className="w-full max-w-lg px-6">
          <SignupForm />
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-full md:w-1/2 h-full">
        <InfoSection />
      </div>
    </div>
  );
}
