import React from "react";
import Image from "next/image";

const GoogleButton = () => (
  <button className="flex items-center justify-center w-full py-2 border rounded">
    <div className="relative w-5 h-5 mr-2">
      <Image 
        src="/google-icon.png" 
        alt="Google Icon" 
        width={20} 
        height={20} 
        priority 
      />
    </div>
    Google
  </button>
);

export default GoogleButton;
