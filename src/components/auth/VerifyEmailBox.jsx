"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const VerifyEmailForm = () => {
  const router = useRouter()
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 5);
  }, []);

  const handleChange = (index, value) => {
    if (value && !/^\d+$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();
    if (/^\d{5}$/.test(pastedData)) {
      const newCode = pastedData.split("");
      setCode(newCode);
      inputRefs.current[4]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.join("").length !== 5) return;

    setIsSubmitting(true);
    console.log("Verifying code:", code.join(""));

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/auth/reset-password");
    }, 1500);
  };

  const handleResend = () => {
    console.log("Resending verification code");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-3 text-white">
      <div className="border backdrop-blur-xl bg-white/10 p-14 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-100 mb-4">
          Check Your Email
        </h1>
        <p className="text-center text-gray-300 mb-16 text-xs">
          We sent a code to your email address. Please enter the 5-digit code.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-4 mb-16">
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
                className="w-10 h-10 text-center border border-gray-400 rounded-xs text-lg text-black font-medium bg-gray-300 focus:outline-none focus:border-black"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || code.join("").length !== 5}
            className="w-full bg-black border border-gray-400 disabled:cursor-not-allowed text-white py-2 text-xs px-4  hover:bg-gray-800 transition duration-200 cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? "Verifying..." : "Verify"}
          </button>
        </form>

        <div className="mt-16 text-center text-sm text-gray-300">
          Didn’t receive the code?{" "}
          <button
            onClick={handleResend}
            className="text-gray-100 font-medium hover:underline cursor-pointer"
          >
            Resend
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailForm;
