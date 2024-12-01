import Image from "next/image";
import ForgotPasswordForm from "@/components/Auth/ForgotPasswordForm"; // Import the form
import '../styles/globals.css';
const ForgotPassword = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-50">
      
      {/* Left Section: Form and Information */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16">
        {/* Logo */}
        <div className="absolute top-4 left-4">
          <Image
            src="/logo.png"
            alt="IMC Logo"
            width={64}
            height={64}
            priority
          />
        </div>
        
        {/* Title and Information */}
        <h1 className="text-3xl font-bold text-gray-900">Forgot password?</h1>
        <p className="mt-4 text-sm text-gray-700">
          <strong>Terms and Conditions for Password Recovery</strong>
        </p>
        <ul className="mt-4 text-sm text-gray-700 list-disc pl-5">
          <li>A valid email address, phone number, or username linked to the account is required.</li>
          <li>Password reset links or codes expire after 15 minutes.</li>
          <li>Multiple failed attempts may temporarily lock the recovery process for security.</li>
          <li>Reset requests must be initiated by the account owner.</li>
          <li>Data privacy and security compliance are strictly enforced throughout the process.</li>
        </ul>
        <p className="mt-10 text-sm text-gray-700">
          <strong>Enter your email for the verification process, we will send code to your email</strong>
        </p>
        {/* Forgot Password Form */}
        <ForgotPasswordForm /> {/* Using the form here */}
      </div>

      {/* Right Section: Background Image */}
      <div className=" hidden lg:block lg:w-1/2 relative h-screen">
        <Image
          src="/fog.jpg"
          alt="Forgot Password"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
