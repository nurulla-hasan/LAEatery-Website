"use client"
import { MapPin, Phone, Mail, Globe, Star, Heart, Clock, DollarSign } from 'lucide-react'
import HomeContainer from "@/components/home-container/HomeContainer"
import Image from "next/image"
import RestaurantMap from "@/components/shared/restaurant-map/RestaurantMapWrapper"


const bgColors = ["bg-amber-50", "bg-blue-50", "bg-pink-50", "bg-green-50", "bg-purple-50", "bg-yellow-50"]
const textColors = ["text-amber-700", "text-blue-700", "text-pink-700", "text-green-700", "text-purple-700", "text-yellow-700"]


const RestaurantDetailsCard = ({getHashedIndex, toggleFavorite, restaurant, isFavorite}) => {
    return (
        <HomeContainer>
                
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
            <button className="bg-black text-white text-xs px-6 py-3 rounded-2xl font-medium hover:bg-gray-800 transition-colors cursor-pointer">
                Book Now
            </button>
        </div>

        {/* Overview */}
        <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-poltawski">Overview:</h2>
            <p className="text-gray-700 leading-relaxed">{restaurant?.description}</p>
            <p className="text-gray-700 leading-relaxed mt-4">{restaurant?.extendedDescription}</p>
        </div>










    </HomeContainer>
    );
};

export default RestaurantDetailsCard;