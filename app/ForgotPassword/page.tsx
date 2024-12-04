import Image from "next/image";
import userpic from "@/public/girl.jpg"; // Ensure this image matches the right section
//import ForgotPasswordForm from "@/components/Auth/ForgotPasswordForm"; // Import the form component

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
            width={64}
            height={64}
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mt-20">
          Forgot password?
        </h1>

        {/* Terms and Conditions */}
<div className="mt-20 px-6 lg:px-16 ">
  <p className="text-sm font-semibold text-gray-800 mb-4 text-center ">
    Terms and Conditions for Password Recovery
  </p>
  <ol className="list-decimal text-sm text-gray-700 space-y-2 ml-6 lg:ml-10">
    <li>A valid email address, phone number, or username linked to the account is required.</li>
    <li>Password reset links or codes expire after 15 minutes.</li>
    <li>Multiple failed attempts may temporarily lock the recovery process for security.</li>
    <li>Reset requests must be initiated by the account owner.</li>
    <li>Data privacy and security compliance are strictly enforced throughout the process.</li>
  </ol>
</div>


      
{/* Forgot Password Form */}
<div className="mt-8 w-full max-w-sm p-6 rounded-lg  bg-white">
  <div className="flex flex-col items-start space-y-2">
    <p className="text-sm font-bold text-gray-700">
      Enter your email for the verification process,
    </p>
    <p className="text-sm font-bold text-gray-700">
      we will send a code to your email.
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
    <button
      type="submit"
      className="w-1/2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 outline-none"
    >
      Continue
    </button>
  </form>
</div>



      </div>

      {/* Right Section: Background Image */}
      <div className="hidden md:flex w-full md:w-1/2 overflow-hidden  justify-center items-center">
        <Image
          src={userpic}
          alt="Office Background"
          width={700}
          height={280}
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
