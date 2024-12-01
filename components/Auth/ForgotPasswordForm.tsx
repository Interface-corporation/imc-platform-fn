import React from "react";

const ForgotPasswordForm = () => {
  return (
    <form className="mt-8 space-y-6">
      <div>
        <input
          type="email"
          id="email"
          placeholder=" email"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
      >
        Continue
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
