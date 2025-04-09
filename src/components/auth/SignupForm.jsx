"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Eye, EyeOff } from "lucide-react"


const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()

  const password = watch("password")

  const onSubmit = (data) => {
    console.log(data)
    // Handle form submission
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-3">
      <div className="bg-white/90 p-14 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2">Welcome to LAEatery!</h1>
        <p className="text-center text-gray-600 mb-6 text-sm">Please sign up to continue access.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8">
            <label htmlFor="fullName" className="block text-xs font-medium text-gray-700  mb-1">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your name"
              className={`w-full px-3 py-2 border rounded-sm text-gray-700  text-xs bg-white ${
                errors.fullName ? "border-red-500" : "border-black"
              } rounded-md focus:outline-none `}
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
          </div>

          <div className="mb-8">
            <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={`w-full px-3 py-2 border rounded-sm text-gray-700 text-xs bg-white ${
                errors.email ? "border-red-500" : "border-black"
              } rounded-md focus:outline-none `}
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

          <div className="mb-8">
            <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className={`w-full px-3 py-2 border rounded-sm text-gray-700 text-xs bg-white ${
                  errors.password ? "border-red-500" : "border-black"
                } rounded-md focus:outline-none `}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-black" />
                ) : (
                  <Eye className="h-4 w-4 text-black" />
                )}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
          </div>

          <div className="mb-8">
            <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                className={`w-full px-3 py-2 border rounded-sm text-gray-700 text-xs bg-white ${
                  errors.confirmPassword ? "border-red-500" : "border-black"
                } rounded-md focus:outline-none `}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) => value === password || "Passwords do not match",
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-black" />
                ) : (
                  <Eye className="h-4 w-4 text-black" />
                )}
              </button>
            </div>
            {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 text-xs px-4 rounded-sm hover:bg-gray-800 transition duration-200 cursor-pointer"
          >
            Sign up
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-600">
          Already have an account?{" "}
          <a href="/auth/login" className="text-black font-medium hover:underline cursor-pointer">
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignupForm