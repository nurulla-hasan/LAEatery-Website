import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import HomeContainer from "../home-container/HomeContainer"

const Footer = () => {
    return (
        <footer className="bg-[#151515] text-white flex flex-col">
            
                <div className="container mx-auto px-4 py-12">
                    <HomeContainer>
                    <div className="flex flex-col md:flex-row justify-between space-y-10 w-full">
                        {/* Logo and Description */}
                        <div className="space-y-4">
                            <img src="/image/logo.png" alt="" />
                            <p className="text-sm text-gray-300 max-w-[340px] leading-[1.7]">
                                Your go-to guide for discovering trending restaurants, hidden gems, and buzz-worthy eats across Los
                                Angeles — curated by vibe, cuisine, and real-time trends.
                            </p>

                            <div className="mt-6">
                                <h3 className="text-sm font-semibold mb-4">Follow Us On</h3>
                                <div className="flex space-x-2">
                                    <Link
                                        href="#"
                                        className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                                    >
                                        <span className="sr-only">Instagram</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                                    >
                                        <span className="sr-only">YouTube</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                                    >
                                        <span className="sr-only">Facebook</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                                    >
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                                    >
                                        <span className="sr-only">Pinterest</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Our Address */}
                        <div className="space-y-6">
                            <h3 className="text-md font-semibold">Our Address</h3>
                            <div className="space-y-5 text-sm text-gray-300">
                                <div className="flex items-start max-w-xs">
                                    <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-white" />
                                    <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-white" />
                                    <span>(307) 555-0133</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-white" />
                                    <span>debra.holt@example.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6">
                            <h3 className="text-md font-semibold">Quick Links</h3>
                            <ul className="space-y-5 text-sm text-gray-300">
                                <li>
                                    <Link href="/about-us" className="hover:text-white transition-colors">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/nearby-restaurant" className="hover:text-white transition-colors">
                                        Explore Restaurants
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/vibe" className="hover:text-white transition-colors">
                                        Vibe Guide
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cuisine" className="hover:text-white transition-colors">
                                        Cuisine Types
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Help & Legal */}
                        <div className="space-y-6">
                            <h3 className="text-md font-semibold">Help & Legal</h3>
                            <ul className="space-y-5 text-sm text-gray-300">
                                <li>
                                    <Link href="/FAQs" className="hover:text-white transition-colors">
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/help-&-support" className="hover:text-white transition-colors">
                                        Help & Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/accessibility" className="hover:text-white transition-colors">
                                        Accessibility
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-&-condition" className="hover:text-white transition-colors">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy" className="hover:text-white transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </HomeContainer>
                </div>
            {/* Copyright */}
            <div className="border-[#fefefe9b] border-t-[1px] py-6">
                    <div className="container mx-auto px-4">
                        <p className="text-sm text-center text-[#ffffffd5]">© 2025 LAEatery, All right reserved</p>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
