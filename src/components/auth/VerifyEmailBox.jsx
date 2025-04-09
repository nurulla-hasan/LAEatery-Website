"use client"
import { useState, useRef, useEffect } from "react"

const VerifyEmailForm = () => {
  const [code, setCode] = useState(["", "", "", "", ""])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const inputRefs = useRef([])

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 5)
  }, [])

  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return

    const newCode = [...code]
    newCode[index] = value

    setCode(newCode)

    // Auto-focus next input if current input is filled
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()

    // Check if pasted content is a 5-digit number
    if (/^\d{5}$/.test(pastedData)) {
      const newCode = pastedData.split("")
      setCode(newCode)

      // Focus the last input
      inputRefs.current[4]?.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Check if code is complete
    if (code.join("").length !== 5) return

    setIsSubmitting(true)
    console.log("Verifying code:", code.join(""))

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Handle verification success
    }, 1500)
  }

  const handleResend = () => {
    console.log("Resending verification code")
    // Implement resend logic here
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-3">
      <div className="bg-white/90 p-14 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">Check Your Email</h1>
        <p className="text-center text-gray-600 mb-16 text-xs">
          We sent a code to your email address, Please check your email for the 5 digit code.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-5 mb-16">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="w-9 h-10 text-center border border-gray-500 rounded-xl text-lg text-gray-500 font-medium focus:outline-none focus:border-black"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || code.join("").length !== 5}
            className="w-full bg-black text-white py-2 text-sm px-4 rounded-sm hover:bg-gray-800 transition duration-200 cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? "Verifying..." : "Verify"}
          </button>
        </form>

        <div className="mt-16 text-center">
          <span className="text-sm text-gray-600">You have not received the email? </span>
          <button onClick={handleResend} className="text-sm text-black font-medium hover:underline cursor-pointer">
            Resend
          </button>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmailForm
