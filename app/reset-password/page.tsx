import React from "react";
import Image from "next/image";
import ResetPasswordForm from "@/components/Auth/RestPasswordForm";

const ResetPasswordPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen " >
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-white flex flex-col items-start p-6">
        {/* Logo aligned to the top-left */}
        <Image
          src="/logo.png"
          alt="IMC Logo"
          width={64} // Equivalent to w-16
          height={64} // Equivalent to h-16
        />
        <ResetPasswordForm />
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-full md:w-1/2 relative">
        {/* Background Image */}
        <Image
          src="/girl.jpg"
          alt="Smiling Girl"
          width={800} // Replace with the actual width of the image
          height={502} // Match the design height
          className="object-cover bg-gray-500"
          style={{
            borderTopLeftRadius: "50px",
            borderBottomLeftRadius: "50px",
            filter: "grayscale(100%)"          }}
        />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
