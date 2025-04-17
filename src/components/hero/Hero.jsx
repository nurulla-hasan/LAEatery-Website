import React from 'react';
import Link from "next/link"
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden ">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.0), rgba(0,0,0,0.4)), url('/image/heroBG.png')`,
                }}
            >

                {/* You can replace the placeholder with your actual image */}
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex h-full items-center">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex justify-center items-center">



                        <div className="relative flex justify-center items-center h-[700px] w-[700px]">
                            {/* White blurred round background */}
                            <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl opacity-70"></div>

                            {/* Logo Image */}
                            <Image
                                src="/image/logo2.png"
                                width={1920}
                                height={1080}
                                alt="Logo"
                                className="relative h-auto z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
