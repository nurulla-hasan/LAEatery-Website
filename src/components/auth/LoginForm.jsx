"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Eye, EyeOff } from "lucide-react"
import toast from "react-hot-toast"

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberPassword, setRememberPassword] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    toast('Login Success!',
      {
        icon: '✅',
        style: {
          borderRadius: '5px',
          background: '#333',
          color: '#fff',
        },
      }
    );
    console.log("Login form data:", data)
    // Handle form submission
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-3 text-white">
      <div className="border backdrop-blur-xl p-14 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-80 mb-2">Login to Account</h1>
        <p className="text-center text-gray-300 mb-6 text-sm">Please enter your email and password to continue</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8">
            <label htmlFor="email" className="block text-xs font-medium text-gray-70 mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={`w-full px-3 py-2 border rounded-sm text-black text-xs bg-gray-300 ${errors.email ? "border-red-500" : "border-black"
                } rounded-md focus:outline-none cursor-pointer`}
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

          <div className="mb-4">
            <label htmlFor="password" className="block text-xs font-medium text-gray-70 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className={`w-full px-3 py-2 border rounded-sm text-black text-xs bg-gray-300 ${errors.password ? "border-red-500" : "border-black"
                  } rounded-md focus:outline-none cursor-pointer`}
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4 text-black" /> : <Eye className="h-4 w-4 text-black" />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberPassword}
                onChange={() => setRememberPassword(!rememberPassword)}
                className="h-3 w-3 text-black accent-white rounded cursor-pointer"
              // {...register("remember")}
              />
              <label htmlFor="remember" className="ml-2 text-xs text-gray-300 cursor-pointer">
                Remember Password
              </label>
            </div>
            <a href="/auth/forgot-password" className="text-xs text-gray-300 hover:underline cursor-pointer">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black border border-gray-400 text-white py-2 text-xs px-4 rounded-sm hover:bg-gray-800 transition duration-200 cursor-pointer"
          >
            Sign in
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-300">
          Don't have an account?{" "}
          <a href="/auth/signup" className="text-gray-300 font-medium hover:underline cursor-pointer">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
