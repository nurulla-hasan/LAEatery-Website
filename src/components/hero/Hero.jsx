import React from 'react';
import Link from "next/link"

export default function Hero() {
    return (
        <div className="relative h-[90vh] w-full overflow-hidden mb-16">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('/image/heroBG.png')`,
                }}
            >

                {/* You can replace the placeholder with your actual image */}
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex h-full items-center">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="max-w-3xl">
                        {/* Main Heading */}
                        <h1 className="font-poltawski font-extrabold text-3xl leading-tight text-white md:text-5xl lg:text-5xl">
                            Find LA's Hottest Restaurants <span className="block mt-2">— Before They Blow Up</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="mt-6 max-w-xl text-lg text-gray-200 md:text-xl">
                            AI-powered restaurant picks, real-time trends, and instant reservations — all in one place.
                        </p>

                        {/* CTA Button */}
                        <div className="mt-10">
                            <Link
                                href="/find"
                                className="inline-block border-[2px] rounded-sm border-[#888888a4] px-6 py-2 text-gray-300 text-[12px] transition-colors hover:bg-white hover:text-black"
                            >
                                Find Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
