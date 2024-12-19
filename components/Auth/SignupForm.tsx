"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSignupUserMutation } from "@/states/authentication";
import { BackendErrorProps } from "./LoginForm";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ signupUser , { isLoading, isError, isSuccess, error: backendError } ] = useSignupUserMutation()
  const router = useRouter();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  if(isError){
    const typedError = backendError as BackendErrorProps; // Type assertion
    toast.error(typedError?.data?.message || "Something Went Wrong while connecting to server.")
  }

  if(isSuccess){
    toast.success("User Registered Successfully!")
    router.push("/login");
  }

  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    if(data.Password !== data.ConfirmPassword){
        toast.error("Passwords Mismatch!");
        return;
    }
    else {
        await signupUser({
            email: data.Email,
            password: data.Password,
            name: data.FullName
        })
    }
  };

  return (
    <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg relative">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mt-20">
        Get Started With IMC
      </h1>
      <p className="text-gray-500 text-center mb-6">Getting started is easy</p>

      {/* Social Login Buttons */}
      <div className="flex gap-4 justify-center mb-6">
        <button
          type="button"
          className="flex items-center justify-center w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <FaGoogle className="text-white w-5 h-5 mr-2" />
          Google
        </button>
      </div>
      <div className="text-center text-gray-500 mb-4">Or continue with</div>

      {/* Form */}
      <form className="space-y-4" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name"
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.FullName && "border-red-600 focus:ring-0"}`}
          {...register("FullName", {required: true, maxLength: 30})}
        />
        <input
          type="email"
          placeholder="Enter Email"
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.Email && "border-red-600 focus:ring-0"}`}
          {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.Password && "border-red-600 focus:ring-0"}`}
            {...register("Password", {required: true, maxLength: 30})}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer focus:ring-2 focus:ring-blue-500"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
          </button>
        </div>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.ConfirmPassword && "border-red-600 focus:ring-0"}`}
            {...register("ConfirmPassword", {required: true, maxLength: 30})}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer focus:ring-2 focus:ring-blue-500"
            onClick={toggleConfirmPasswordVisibility}
            aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
          >
            {showConfirmPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 outline-none transition"
        >
          {isLoading ? <SyncLoader color="white"/> : "Create Account"}
        </button>
      </form>

      <p className="text-gray-500 text-sm text-center mt-6">
        By continuing, you indicate that you agree to the{" "}
        <Link href="#" className="text-blue-500 underline">
          Terms of Use
        </Link>
      </p>
      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 font-medium">
          Sign in!
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
