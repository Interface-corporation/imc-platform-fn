import Image from "next/image";
import userpic from "@/public/girl.jpg"; // Ensure this image matches the right section
import ForgotPasswordForm from "@/components/Auth/ForgotPasswordForm"; // Import the form component

const ForgotPassword = () => {
  return (
    <div className="flex flex-col-2 md:flex-row h-full">
      {/* Left Section: Form and Information */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16">
        {/* Logo */}
        <div className="">
          <Image
            src="/logo.png"
            alt="IMC Logo"
            width={64}
            height={64}
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">Forgot password?</h1>

        {/* Terms and Conditions */}
        <div className="mt-6">
          <p className="text-sm font-semibold text-gray-800 mb-4">
            Terms and Conditions for Password Recovery
          </p>
          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
            <li>A valid email address, phone number, or username linked to the account is required.</li>
            <li>Password reset links or codes expire after 15 minutes.</li>
            <li>Multiple failed attempts may temporarily lock the recovery process for security.</li>
            <li>Reset requests must be initiated by the account owner.</li>
            <li>Data privacy and security compliance are strictly enforced throughout the process.</li>
          </ul>
        </div>

        {/* Forgot Password Form */}
        <div className="mt-8">
          <p className="text-sm text-gray-700 mb-4">
            Enter your email for the verification process, we will send a code to your email.
          </p>
          <ForgotPasswordForm />
        </div>
      </div>

      {/* Right Section: Background Image */}
      <div className="w-full md:w-1/2 overflow-hidden">
        <Image
          src={userpic}
          alt="Office Background"
          width={700}
          height={280}
          className="h-full object-cover"
          style={{ borderTopLeftRadius: "50px", borderBottomLeftRadius: "50px", height: "585px" }} // Adjust px as needed
        />
      </div>


    </div>
  );
};

export default ForgotPassword;
