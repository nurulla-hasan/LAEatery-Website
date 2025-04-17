"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayoutClient({ children }) {
  const pathName = usePathname();
  const noNavbarRoutes = ["/auth", "/admin", "/404"];
  const isHiddenRoute = ["/"];
  const hidePadding = isHiddenRoute.includes(pathName);
  const hideNavbar = noNavbarRoutes.some((route) =>
    pathName.startsWith(route)
  );

  return (
    <>
      {!hideNavbar && (
        <Navbar />
      )}
      <div className={`min-h-[calc(100vh-88px)] bg-[#E9E7E3] ${hidePadding ? "pt-[0px]" : "pt-[104px]"}`}>
        {children}
      </div>
      {!hideNavbar && (
        <Footer />
      )}
    </>
  );
}
