"use client"
import { useState } from "react"
import Link from "next/link"
import { Search, ChevronDown, Menu, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"


export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const pathname = usePathname()
  const isActive = (href) => pathname === href



  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", searchQuery)
    // router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
  }

  const handleLogout = () => {
    // Handle logout logic
    localStorage.setItem("isLoggedIn", "false")
    setIsLoggedIn(false)
    setUser(null)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <nav className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-22">
          <div className="flex justify-between w-[25%]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="">
                <img className="w-[100px] h-[25px]" src="/image/logo.png" alt="" />
              </Link>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex justify-end items-center space-x-10">
              <Link
                href="/"
                className={`text-[14px] hover:text-gray-300 ${isActive("/") ? "underline underline-offset-4" : ""
                  }`}
              >
                Home
              </Link>
              <Link
                href="/map"
                className={`text-[14px] hover:text-gray-300 ${isActive("/map") ? "underline underline-offset-4" : ""
                  }`}
              >
                Map
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 justify-center px-2 lg:ml-6 lg:justify-center">
            <form onSubmit={handleSearch} className="max-w-lg w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[400px] bg-[#242424] rounded-sm py-3 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute inset-y-0 right-28 cursor-pointer flex items-center pr-3">
                  <Search className="h-5 w-5 text-white" />
                </button>
              </div>
            </form>
          </div>

          {/* Auth Buttons or User Profile - Desktop */}
          <div className="hidden md:flex md:justify-end items-center space-x-4 w-[22%]">
            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 focus:outline-none">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-600">
                    {user?.avatar ? (
                      <img
                        src={'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uiedDPTipF3msEVC2V8hGPNcUthWHB.png' || "/placeholder.svg"}
                        alt={user.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-[#242424]">
                        {user?.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <span>{user?.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="inline-block px-6 py-[9px] border-[2px] border-[#888888a4] rounded-sm text-[14px] font-medium hover:bg-white hover:text-black transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href="/auth/signup"
                  className="inline-block px-6 py-[10] bg-white text-black rounded-sm text-[14px] font-medium hover:bg-gray-200 transition-colors"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#242424] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#242424]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/map"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#242424]"
              onClick={() => setIsMenuOpen(false)}
            >
              Map
            </Link>
          </div>

          {/* Mobile search */}
          <div className="px-2 pt-2 pb-3">
            <form onSubmit={handleSearch} className="mt-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-[#242424] rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </form>
          </div>

          {/* Mobile auth */}
          <div className="pt-4 pb-3 border-t border-gray-700">
            {isLoggedIn ? (
              <div className="px-2 space-y-1">
                <div className="flex items-center px-3">
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-600 mr-3">
                    {user?.avatar ? (
                      <img
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-[#242424]">
                        {user?.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-base font-medium">{user?.name}</div>
                  </div>
                </div>
                <Link
                  href="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#242424]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#242424]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Settings
                </Link>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-[#242424]"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <div className="px-2 space-y-2">
                <Link
                  href="/auth/login"
                  className="block w-full px-3 py-2 text-center border border-white rounded-md text-base font-medium hover:bg-white hover:text-black transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/auth/signup"
                  className="block w-full px-3 py-2 text-center bg-white text-black rounded-md text-base font-medium hover:bg-gray-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
