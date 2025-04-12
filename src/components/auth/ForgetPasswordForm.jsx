"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const ForgotPasswordForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log("Forgot password request for:", data.email);

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/auth/verify-email");
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-3 text-white">
      <div className="border backdrop-blur-xl p-14 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-100 mb-2">Forgot Password?</h1>
        <p className="text-center text-gray-300 mb-6 text-sm">
          Please enter your email to get verification code
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={`w-full px-3 py-2 border  text-black text-xs bg-gray-300 ${
                errors.email ? "border-red-500" : "border-black"
              } focus:outline-none cursor-pointer`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black border border-gray-400 text-white py-2 text-xs px-4  hover:bg-gray-800 transition duration-200 cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
