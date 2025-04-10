import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Auth Pages",
    description: "Login, Signup, etc",
  };
  
  export default function AuthLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <div
            className={`${inter.className} min-h-screen bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url('/image/auth-bg.png')" }}
          >
            <div>
            <Toaster/>
              {children}
            </div>
          </div>
        </body>
      </html>
    );
  }
  