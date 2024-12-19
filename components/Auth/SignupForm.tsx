"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignupUserMutation } from "@/states/authentication";
import { BackendErrorProps } from "./LoginForm";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

interface SignupFormInputs {
    email: string;
    name: string;
    password: string;
    confirmPassword: string
}

const SignupForm = () => {
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<SignupFormInputs>();
  const [ signupUser , { isLoading, isError, isSuccess, error: backendError, reset } ] = useSignupUserMutation()
  const router = useRouter();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  if(isError){
    const typedError = backendError as BackendErrorProps; // Type assertion
    toast.error(typedError?.data?.message || "Something Went Wrong while connecting to server.");
    reset();
  }

  if(isSuccess){
    toast.success("User Registered Successfully!");
    reset();
    router.push("/login");
  }

  const onSubmit: SubmitHandler<SignupFormInputs> = async(data) => {
    if(data.password !== data.confirmPassword){
        toast.error("Passwords Mismatch!");
        return;
    }
    else {
        await signupUser({
            email: data.email,
            password: data.password,
            name: data.name
        })
    }
  };

  const getErrorMessage = ()=> {
    let message = "";

    if(errors.email && getValues("email") !== ""){
        return "Invalid email format!";
    }
    // All fields are empty
    if(errors.email || errors.password)
        message ="All fields are required!";

    return message;
  }

  return (
    <div className="max-w-md w-full px-6 rounded-lg relative">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mt-16">
        Get Started With IMC
      </h1>
      <p className="text-gray-500 text-center mb-6">Getting started is easy</p>

      {/* Social Login Buttons */}
      <div className="flex gap-4 justify-center mb-6">
        <Link
          href={ process.env.NEXT_PUBLIC_LOGIN_WITH_GOOGLE || "#"}
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

      {/* Form */}
      <form className="space-y-4" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name"
          className={`w-full px-4 py-3 border rounded-lg outline-none ${errors.name && "border-red-600 placeholder:text-red-600"}`}
          {...register("name", {required: true, maxLength: 30})}
        />
        <input
          type="email"
          placeholder="Enter Email"
          className={`w-full px-4 py-3 border rounded-lg outline-none ${errors.email && "border-red-600 placeholder:text-red-600"}`}
          {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={`w-full px-4 py-3 border rounded-lg outline-none ${errors.password && "border-red-600 placeholder:text-red-600"}`}
            {...register("password", {required: true, maxLength: 30})}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash className={`${errors.password ? "text-red-600" : "text-gray-400" }`} /> : <FaEye className={`${errors.password ? "text-red-600" : "text-gray-400" }`} />}
          </button>
        </div>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className={`w-full px-4 py-3 border rounded-lg outline-none ${errors.confirmPassword && "border-red-600 placeholder:text-red-600 focus:ring-0"}`}
            {...register("confirmPassword", {required: true, maxLength: 30})}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
            onClick={toggleConfirmPasswordVisibility}
            aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
          >
            {showConfirmPassword ? <FaEyeSlash className={`${errors.password ? "text-red-600" : "text-gray-400" }`} /> : <FaEye className={`${errors.password ? "text-red-600" : "text-gray-400" }`} />}
          </button>
        </div>

        { errors && <p className="text-lg text-red-600">{ getErrorMessage() }</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600 outline-none transition"
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
