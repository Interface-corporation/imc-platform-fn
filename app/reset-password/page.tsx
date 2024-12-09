import React from "react";
import ResetPasswordForm from "@/components/Auth/RestPasswordForm";

const ResetPasswordPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-white flex flex-col items-start p-6">
        {/* Logo aligned to the top-left */}
        <img
          src="/logo.png"
          alt="IMC Logo"
          className="w-16 h-16"
        />
        <ResetPasswordForm />
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-full md:w-1/2 relative">
        {/* Background Image */}
        <img
          src="/girl.jpg"
          alt="Smiling Girl"
          className="absolute inset-0 w-full h-full object-cover"
        style={{
            borderTopLeftRadius: "50px",
            borderBottomLeftRadius: "50px",
            height: "502px",
          }}/>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
