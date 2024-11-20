import React from "react";
import SocialLoginButton from "./SocialLoginButton";

const LoginForm = () => {
  return (
    <div className="w-full max-w-md bg-gray-50 p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
      <p className="text-center mb-6 text-gray-600">Login into your account</p>

      <SocialLoginButton provider="Google" />
      
      <form className="mt-4 space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-md focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-md focus:outline-none"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Log In
        </button>
      </form>
      <p className="text-center mt-4"       >
        Don’t have an account? <a href="/register" className="text-blue-500">Sign up!</a>
      </p>
    </div>
  );
};

export default LoginForm;
