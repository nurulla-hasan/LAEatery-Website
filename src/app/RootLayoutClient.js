"use client";

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
        <div className="bg-green-500 text-black p-2">Navbar</div>
      )}
      {children}
    </>
  );
}
