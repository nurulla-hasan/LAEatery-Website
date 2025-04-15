"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, ChevronDown, Menu, X, UserRound } from "lucide-react"
import NavLink from "./NavLink"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()

  // Sample user data - in a real app, this would come from authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const user = isLoggedIn ? { name: "Mr. Mike" } : ""

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "AI Picks", href: "/ai-picks" },
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

    <nav className="w-full bg-[#E9E7E3] py-2 md:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/image/logo2.png"
                alt="Logo"
                className="md:h-20 h-12 w-auto"
              />
            </Link>
          </div>

          {/* <div> */}
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center justify-center gap-10 bg-white py-3 px-8 rounded-2xl">
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
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-white rounded-md py-2 pl-4 pr-10 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Search className="h-5 w-5 text-gray-500 cursor-pointer" />
                </button>
              </form>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 hover:bg-gray-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#E9E7E3] border-t border-gray-200 py-2">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.href} title={link.title} />
            ))}
          </div>

          {/* Mobile search */}
          <div className="px-2 pt-2 pb-3">
            <form onSubmit={handleSearch} className="mt-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-white rounded-md py-2 pl-4 pr-10 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Search className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </form>
          </div>

          {/* Mobile auth */}
          {!isLoggedIn ? (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-2 space-y-2">
                <Link
                  href="/sign-in"
                  className="block w-full px-3 py-2 text-center border border-gray-300 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
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
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-2">
                <div className="flex-shrink-0">
                  <UserRound size={16} color="#000000" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">{user?.name}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  )
}
