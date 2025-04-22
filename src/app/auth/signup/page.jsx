"use client"

import { Suspense } from "react"
import SignupForm from "@/components/auth/SignupForm";

export default function SignUpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
       <SignupForm/>
    </Suspense>
  )
}
