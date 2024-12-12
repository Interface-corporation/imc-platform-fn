import React from "react";

const ResetPasswordForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-full max-w-md bg-white  rounded-lg p-8">
        <div className="flex justify-center">

        </div>
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Reset password
        </h1>
        <form className="space-y-4">
          <div>
            <input
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Re-enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-full max-w-xs  bg-white text-black py-2 border border-gray-300  rounded-lg font-medium hover:bg-blue-600 transition duration-300"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
