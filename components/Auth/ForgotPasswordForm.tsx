import React from "react";

const ForgotPasswordForm = () => {
  return (
    <form className="mt-8 space-y-6">
      <div>
  <input
    type="email"
    id="email"
    placeholder="Email"
    className="block w-[500px] max-w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
  />
</div>

<div className="flex justify-center items-center">
        <button
          type="submit"
          className="w-full max-w-xs  bg-white text-black py-1 border border-gray-300  rounded-lg font-medium hover:bg-blue-600 transition duration-300"
        >
         Submit
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
