"use client"
import { MapPin, Phone, Mail, Globe, Star, Heart, Clock, DollarSign } from 'lucide-react'
import HomeContainer from "@/components/home-container/HomeContainer"
import Image from "next/image"
import RestaurantMap from "@/components/shared/restaurant-map/RestaurantMapWrapper"
import toast from 'react-hot-toast'
import Link from 'next/link'
import Slider from '@/components/swiper/Slider'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { allRestaurantData } from "@/lib/data";


const bgColors = ["bg-amber-50", "bg-blue-50", "bg-pink-50", "bg-green-50", "bg-purple-50", "bg-yellow-50"]
const textColors = ["text-amber-700", "text-blue-700", "text-pink-700", "text-green-700", "text-purple-700", "text-yellow-700"]


const RestaurantDetailsCard = ({ getHashedIndex, toggleFavorite, restaurant, isFavorite }) => {


    const handleBook = (id) => {
        toast.success("Successfully Booked")
    }


    return (
        <HomeContainer>
            <div className='mb-20'>
                {/* Image and Map */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <Image
                            width={1920}
                            height={1080}
                            src={restaurant?.locationImage || "/placeholder.svg"}
                            alt={restaurant?.name}
                            className="w-full md:h-[550px] object-cover rounded-2xl"
                        />
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                        <RestaurantMap
                            address={restaurant?.contactInfo?.address}
                            lat={restaurant?.coordinates?.lat}
                            lng={restaurant?.coordinates?.lng}
                            name={restaurant?.name}
                        />

                        <div className="p-7">
                            <h3 className="font-semibold text-lg mb-4 text-[#333333]">Contact Info</h3>
                            <div className="space-y-5 text-sm">
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                                    <span className="text-[#333333]">{restaurant?.contactInfo?.address}</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                                    <span className="text-[#0064DA]">{restaurant?.contactInfo?.phone}</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                                    <span className="text-[#0064DA]">{restaurant?.contactInfo?.email}</span>
                                </div>
                                <div className="flex items-center">
                                    <Globe className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                                    <a
                                        href={restaurant?.contactInfo?.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#0064DA] hover:underline"
                                    >
                                        {restaurant?.contactInfo?.website}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Title & Rating */}
                <div className="mt-8 flex justify-between items-center">
                    <h1 className="md:text-4xl text-2xl font-bold text-gray-800 font-poltawski">{restaurant?.name}</h1>
                    <div className="flex items-center">
                        <div className="flex items-center bg-white md:px-3 md:py-2 px-2 py-1 rounded-full">
                            <Star className="w-5 h-5 text-amber-500 mr-1 fill-amber-500" />
                            <span className="font-medium text-sm text-black">{restaurant?.rating}/5.0</span>
                        </div>
                        <button onClick={toggleFavorite} className="ml-3 md:p-1.5 p-1 rounded-full bg-white cursor-pointer">
                            <Heart className={`md:w-6 w-5 md:h-6 h-5 ${isFavorite ? "fill-black text-black" : "text-gray-400"}`} />
                        </button>
                    </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {restaurant?.tags?.map((tagObj, index) => {
                        const colorIndex = getHashedIndex(tagObj.label, bgColors.length)
                        return (
                            <div
                                key={index}
                                className={`flex items-center gap-1 px-3 py-1 rounded-full ${bgColors[colorIndex]} ${textColors[colorIndex]}`}
                            >
                                <span className="text-sm">{tagObj.icon}</span>
                                <span className="text-sm">{tagObj.label}</span>
                            </div>
                        )
                    })}
                </div>

                {/* Restaurant Info */}
                <div className="mt-6 flex flex-wrap gap-2">
                    <div className="flex items-center">
                        <span className="text-black mr-2">Neighborhood:</span>
                        <span className="font-medium text-[#333333be] text-sm">{restaurant?.neighborhood}</span>
                    </div>
                    <span className="text-black">|</span>
                    <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-black mr-2">Hours:</span>
                        <span className="font-medium text-[#333333be] text-sm">{restaurant?.hours}</span>
                    </div>
                    <span className="text-black">|</span>
                    <div className="flex items-center">
                        <DollarSign className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-black mr-2">Price Range:</span>
                        <span className="font-medium text-[#333333be] text-sm">{restaurant?.priceRange}</span>
                    </div>
                </div>

                {/* Popularity */}
                <div className="mt-6 flex flex-wrap gap-2">
                    <div className="flex items-center">
                        <span className="text-black mr-2">Trend Score & Popularity:</span>
                        <span className="font-medium text-[#333333be] text-sm">{restaurant?.trendScore}</span>
                    </div>
                    <span className="text-black">|</span>
                    <div className="flex items-center">
                        <p className="font-medium text-[#333333be] text-sm">
                            Booked <span className="font-semibold text-black">{restaurant?.bookedThisWeek}</span> this week
                        </p>
                    </div>
                </div>

                {/* Book Now */}
                <div className="mt-6">
                    <button onClick={handleBook} className="bg-black text-white text-xs px-6 py-3 rounded-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer">
                        Book Now
                    </button>
                </div>

                {/* Overview */}
                <div className="mt-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 font-poltawski">Overview</h2>
                    <p className="text-gray-700 leading-relaxed">{restaurant?.description}</p>
                    <p className="text-gray-700 leading-relaxed mt-4">{restaurant?.extendedDescription}</p>
                </div>


                {/* Photo Gallery */}
                <div className="mt-10">
                    <h2 className="text-3xl font-bold text-gray-800 font-poltawski">Photo Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:mt-6 mt-4">
                        {
                            restaurant?.gallery?.map((img, index) => (
                                <div key={index}>
                                    <Image
                                        src={img}
                                        alt={`Gallery Image ${index + 1}`}
                                        height={1080}
                                        width={1920}
                                        className="rounded-lg object-cover w-full h-auto"
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>


                {/* Dishes */}
                <div className='mt-20'>
                    <h2 className="md:text-4xl text-3xl font-bold text-gray-800 font-poltawski text-center">Signature Dishes</h2>
                    <div>
                        <div className="space-y-16 md:mt-10 mt-6">
                            {restaurant?.dishes?.map((dish, index) => (
                                <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}>
                                    {index % 2 === 0 ? (
                                        // Even index (0, 2, 4...) - Text left, Image right
                                        <>
                                            <div>
                                                <h3 className="md:text-3xl text-xl font-semibold mb-3 font-poltawski text-[#333333]">{dish.title}</h3>
                                                <p className="text-[#333333] leading-relaxed text-sm md:text-[16px]">{dish.description}</p>
                                            </div>
                                            <div>
                                                <img
                                                    src={dish.image || "/placeholder.svg"}
                                                    alt={dish.title}
                                                    className="w-full md:h-96 object-cover rounded-md"
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        // Odd index (1, 3, 5...) - Image left, Text right
                                        <>
                                            <div className="order-2 md:order-1">
                                                <img
                                                    src={dish.image || "/placeholder.svg"}
                                                    alt={dish.title}
                                                    className="w-full md:h-96 object-cover rounded-md"
                                                />
                                            </div>
                                            <div className="order-1 md:order-2">
                                                <h3 className="md:text-3xl text-xl font-semibold mb-3 font-poltawski text-[#333333]">{dish.title}</h3>
                                                <p className="text-[#333333] leading-relaxed text-sm md:text-[16px]">{dish.description}</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Might also like */}
                <div className="flex gap-2 flex-col md:flex-row justify-between md:items-center mb-4 md:mb-8 mt-20">
                    <h2 className="text-3xl font-medium font-poltawski text-[#0A0A0A]">You Might Also Like</h2>
                    <div className="flex justify-between items-end gap-4">
                        <Link href="/nearby-restaurant" className="text-[#0A0A0A] text-sm hover:text-gray-700 transition-colors ">
                            See All
                        </Link>
                        <div className="flex gap-2 ">
                            <button
                                className="slider-prev-button w-8 h-8 text-gray-400 hover:text-black flex items-end justify-center cursor-pointer"
                                aria-label="Previous slide"
                            >
                                <span className="sr-only">Previous</span>
                                <GrPrevious size={16} />
                            </button>
                            <button
                                className="slider-next-button w-8 h-8 text-gray-400 hover:text-black flex items-end justify-center cursor-pointer"
                                aria-label="Next slide"
                            >
                                <span className="sr-only">Next</span>
                                <GrNext size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <Slider data={allRestaurantData} />
                </div>
            </div>
        </HomeContainer>
    );
};

export default RestaurantDetailsCard;