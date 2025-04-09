"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"

const ResetPasswordForm = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const password = watch("password", "")

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    console.log("Reset password with:", data)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Navigate to success page or login page
      router.push("/auth/reset-success")
    }, 1500)
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-3">
      <div className="bg-white/90 p-14 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2">Set a New Password</h1>
        <p className="text-center text-gray-600 mb-8 text-sm">
          Create a new password. Ensure it differs from previous ones for security
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">
              New Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`w-full px-3 py-2 border rounded-sm text-gray-700 text-xs bg-white ${
                  errors.password ? "border-red-500" : "border-black"
                } rounded-md focus:outline-none cursor-pointer`}
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
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
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
                placeholder="••••••••"
                className={`w-full px-3 py-2 border rounded-sm text-gray-700 text-xs bg-white ${
                  errors.confirmPassword ? "border-red-500" : "border-black"
                } rounded-md focus:outline-none cursor-pointer`}
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
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
            {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-2 text-xs px-4 rounded-sm hover:bg-gray-800 transition duration-200 cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? "Processing..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPasswordForm
