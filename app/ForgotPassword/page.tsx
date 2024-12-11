import Image from "next/image";
import userpic from "@/public/girl.jpg"; // Ensure this image matches the right section
//import ForgotPasswordForm from "@/components/Auth/ForgotPasswordForm"; // Import the form component
import Link from 'next/link';

const ForgotPassword = () => {
  return (
    <div className="flex flex-col md:flex-row h-full items-center justify-center min-h-screen bg-gray-50">
      {/* Left Section: Form and Information */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="absolute top-4 left-4">
          <Image
            src="/logo.png"
            alt="IMC Logo"
            width={54}
            height={54}
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-3xl font-bold text-gray-900 text-center mt-20">
          Forgot password?
        </h1>

        {/* Forgot Password Form */}
        <div className="mt-8 w-full max-w-sm p-6 rounded-lg  bg-white">
          <div className="flex flex-col items-start space-y-2">
            <p className="text-sm font-bold text-gray-700">
             Submit your Email to recover your password
            </p>
            
          </div>
          <form className="mt-4 flex flex-col items-center space-y-4">
  {/* Input Field */}
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
  />
  {/* Continue Button */}
  <Link href="/reset-password">
    <div className="flex justify-center">
      <button className="w-[50%] bg-white-500 text-black border rounded-lg p-2 md:p-3 hover:bg-blue-600 text-sm md:text-base">
        Submit
      </button>
    </div>
  </Link>
</form>

        </div>



      </div>

      {/* Right Section: Background Image */}
      <div className="hidden md:flex w-full md:w-1/2 overflow-hidden  justify-center items-center">
        <Image
          src={userpic}
          alt="Office Background"
          width={600}
          height={200}
          className="sm:h-full object-cover"
          style={{
            borderTopLeftRadius: "50px",
            borderBottomLeftRadius: "50px",
            height: "585px",
          }}
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
