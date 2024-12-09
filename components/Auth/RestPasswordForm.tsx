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
              placeholder="Reenter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
