"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginUserMutation } from "@/states/authentication";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export interface BackendErrorProps {
    data?: { message?: string };
    error?: string;
}

interface LoginFormInputs {
    email: string;
    password: string;
  }


const LoginForm = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [ loginUser , { isLoading, isError, isSuccess, error: backendError,reset } ] = useLoginUserMutation()
  const router = useRouter();
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  

  if(isError){
    const typedError = backendError as BackendErrorProps; // Type assertion
    toast.error(typedError?.data?.message || "Something Went Wrong while connecting to server.")
    reset()
  }

  if(isSuccess){
    toast.success("User Login Successfully!")
    reset(); // Reset mutation state
    router.push("/")
  }

  const onSubmit: SubmitHandler<LoginFormInputs> = async(data) => {
    await loginUser({
        email: data.email,
        password: data.password
    })
  };

  return (
    <div className="max-w-md w-full">
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

      <h1 className="text-3xl font-semibold text-gray-800 text-center mt-20">
        Welcome Back
      </h1>
      <p className="text-gray-600 text-center mb-6">Login into your account</p>

      <div className="flex gap-4 justify-center mb-6">
        <Link
          href="http://localhost:8080/google-login"
          className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
        >
          <FcGoogle className="w-6 h-6" />
          Continue with google
        </Link>
      </div>

      <div className="my-4 flex items-center gap-4">
              <hr className="w-full border-gray-300" />
              <p className="text-sm text-gray-800 text-center w-80">or continue with</p>
              <hr className="w-full border-gray-300" />
            </div>

      <form className="space-y-4" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          className={`w-full px-4 py-3 border rounded-lg outline-none ${errors.email && "border-red-600 focus:ring-red-100"}`}
          {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"} // Toggle input type
            placeholder="Password"
            className={`w-full px-4 py-3 border rounded-lg outline-none ${errors.password && "border-red-600 focus:ring-red-100"}`}
            {...register("password", {required: true, maxLength: 30})}
          />
          {/* Toggle password visibility */}
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-4"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
          </button>
        </div>
        <div className="flex items-center justify-between mb-5">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Remember me</span>
          </label>
          <Link href="/ForgotPassword" className="text-blue-500 text-sm">
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
        >
          { isLoading ? <ClipLoader color="white"/> : "Login" }
        </button>
      </form>
      <p className="text-center text-sm mt-4">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-blue-500 font-medium">
          Sign up!
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
