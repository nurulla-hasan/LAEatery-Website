"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import store from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

export default function RootLayoutClient({ children }) {
  const pathName = usePathname();
  const noNavbarRoutes = ["/auth", "/admin", "/404"];
  const isHiddenRoute = ["/home", '/auth/login', '/auth/signup', '/auth/forgot-password', '/auth/verify-email', '/auth/reset-password'];
  const hidePadding = isHiddenRoute.includes(pathName);
  const hideNavbar = noNavbarRoutes.some((route) =>
    pathName.startsWith(route)
  );

  return (

    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {!hideNavbar && (
            <Navbar />
          )}
          <div className={`relative min-h-[calc(100vh-88px)] bg-[#E9E7E3]`}>
            {
              pathName === "/" && (
                <div className="absolute inset-0">
                  <Image
                    src="/image/heroBG.png"
                    alt="Background"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-[#E9E7E3]/90"></div>
                </div>
              )
            }
            {/* Content */}
            <div className={`relative container mx-auto max-w-full ${hidePadding ? "pt-[0px]" : "md:pt-[104px] pt-[65px]"}`}>
              {children}
            </div>
          </div>
          {!hideNavbar && (
            <Footer />
          )}
        </QueryClientProvider>
      </Provider>
    </>
  );
}
