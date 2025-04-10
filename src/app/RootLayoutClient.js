"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayoutClient({ children }) {
  const pathname = usePathname();
  const noNavbarRoutes = ["/auth", "/admin", "/404"];
  const hideNavbar = noNavbarRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      {!hideNavbar && (
        <Navbar />
      )}
      <div className="min-h-[calc(100vh-88px)]">
        {children}
      </div>
      {!hideNavbar && (
        <Footer />
      )}
    </>
  );
}
