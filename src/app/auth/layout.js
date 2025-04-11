import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Auth Pages",
  description: "Login, Signup, etc",
};

export default function AuthLayout({ children }) {
  return (
    <>
      <div
        className={`min-h-screen bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url('/image/auth-bg.png')" }}
      >
        <div>
          <Toaster />
          <Link href="/" className="absolute top-10 left-10 font-poltawski">
            <MoveLeft size={20} />
          </Link>
          {children}
        </div>
      </div>
    </>
  );
}
