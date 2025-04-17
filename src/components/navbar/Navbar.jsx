"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X, UserRound } from "lucide-react"
import NavLink from "./NavLink"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const pathName = usePathname()
  const isHiddenRoute = ["/", "/ai-chat"];
  const hideLogoBg = isHiddenRoute.includes(pathName);

  // Sample user data - in a real app, this would come from authentication
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const user = isLoggedIn ? { name: "Mr. Mike" } : ""

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "AI Picks", href: "/ai-picks" },
    { title: "AI Chat", href: "/ai-chat" },
    { title: "Map", href: "/map" },
    { title: "Saved", href: "/saved" },
    { title: "About", href: "/about-us" },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    // Implement search functionality
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (

    <div className="">
      <nav className={`w-full ${hideLogoBg ? 'bg-transparent' : 'bg-[#E9E7E3]'} py-2 md:py-5 fixed z-[10000]`}>
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className={`flex items-center justify-between ${hideLogoBg?"md:justify-center":""}  md:h-16`}>
            {/* Logo */}
            <div className={`w-[25%] ${hideLogoBg ? "hidden" : ""}`}>
              <Link href="/">
                <img
                  src="/image/logo2.png"
                  alt="Logo"
                  className="md:h-20 h-12 w-auto"
                />
              </Link>
            </div>


            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center justify-center gap-10 bg-white py-4 px-8 rounded-[22px]">
              <div className="flex space-x-8">
                {navLinks.map((link, index) => (
                  <NavLink key={index} href={link.href} title={link.title} />
                ))}
              </div>

              {/* Auth */}
              <div>
                {isLoggedIn ? (
                  <div className="relative">
                    <button className="flex items-center space-x-2 text-gray-800 cursor-pointer">
                      <span className="flex gap-2 items-center text-sm text-[#333333bb]">
                        <UserRound color="#333333bb" size={16} />
                        {user?.name}
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Link
                      href="/auth/login"
                      className="text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-xl text-sm font-medium"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-xl text-sm font-medium"
                    >
                      Join
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Right side: Search  */}
            <div className={` ${hideLogoBg ? "" : "w-[20%]"}`}></div>






            {/* Mobile menu button */}
            <div className="md:hidden flex justify-between items-center z-[20000]">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-full p-2 text-gray-800 hover:text-gray-600 bg-gray-200 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-4 w-4" aria-hidden="true" />
                ) : (
                  <Menu className="block h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-0 z-10 w-full md:hidden bg-[#d3d2d0] border-y border-[#C0C0C0] py-2">
            <div className="ml-7.5 px-2 pt-2 pb-3 gap-3 flex flex-col">
              {navLinks.map((link, index) => (
                <NavLink key={index} href={link.href} title={link.title} />
              ))}
            </div>

            {/* Mobile auth */}
            {!isLoggedIn ? (
              <div className="ml-7.5 pt-4 pb-3">
                <div className="px-2 space-y-2">
                  <Link
                    href="/sign-in"
                    className="block w-full px-3 py-2 text-center rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/join"
                    className="block w-full px-3 py-2 text-center bg-black text-white rounded-md text-base font-medium hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join
                  </Link>
                </div>
              </div>
            ) : (
              <div className="ml-7.5 pt-4 pb-3">
                <div className="flex items-center px-2">
                  <div className="flex-shrink-0">
                    <UserRound size={20} color="#0000007d" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-600">{user?.name}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  )
}
