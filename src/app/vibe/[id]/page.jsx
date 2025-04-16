"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Globe, Star, Heart, Clock, DollarSign, TrendingUp, Users } from 'lucide-react'
import dynamic from 'next/dynamic'
import HomeContainer from "@/components/home-container/HomeContainer"
import { restaurantData } from "@/lib/data"
// import { useRouter } from "next/navigation"

const RestaurantMap = dynamic(() => import('@/components/shared/restaurant-map/RestaurantMap'), {
    ssr: false,
    loading: () => <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
});


const RestaurantDetails = () => {
    //   const router = useRouter()
    //   const { id } = router.query
    const [isFavorite, setIsFavorite] = useState(false)

    // For static rendering, we'll use the first restaurant in the data
    // In a real app, you would fetch the restaurant by ID
    const restaurant = restaurantData[0]

    if (!restaurant) return <div>Loading...</div>

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="min-h-screen py-10">
            <HomeContainer>
                {/* Main Content */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Restaurant Image */}
                    <div className="lg:col-span-2">
                        <img
                            src={restaurant.image || "/placeholder.svg"}
                            alt={restaurant.name}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Map and Contact Info */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <RestaurantMap
                            address={restaurant.contactInfo.address}
                            lat={restaurant.coordinates?.lat}
                            lng={restaurant.coordinates?.lng}
                            name={restaurant.name}
                        />

                        <div className="p-5">
                            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>

                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                                    <span>{restaurant.contactInfo.address}</span>
                                </div>

                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                                    <span>{restaurant.contactInfo.phone}</span>
                                </div>

                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                                    <span className="text-blue-600">{restaurant.contactInfo.email}</span>
                                </div>

                                <div className="flex items-center">
                                    <Globe className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                                    <a
                                        href={restaurant.contactInfo.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        {restaurant.contactInfo.website}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Restaurant Name and Rating */}
                <div className="mt-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-800">{restaurant.name}</h1>

                    <div className="flex items-center">
                        <div className="flex items-center bg-amber-50 px-3 py-1 rounded-full">
                            <Star className="w-5 h-5 text-amber-500 mr-1 fill-amber-500" />
                            <span className="font-medium">{restaurant.rating}/5.0</span>
                        </div>

                        <button onClick={toggleFavorite} className="ml-3 p-2 rounded-full hover:bg-gray-100">
                            <Heart className={`w-6 h-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
                        </button>
                    </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {restaurant.tags.map((tag, index) => {
                        let bgColor = "bg-gray-100"
                        let textColor = "text-gray-700"
                        let icon = null

                        if (tag === "Trending") {
                            bgColor = "bg-amber-50"
                            textColor = "text-amber-700"
                            icon = <TrendingUp className="w-4 h-4 mr-1" />
                        } else if (tag === "Rooftop") {
                            bgColor = "bg-blue-50"
                            textColor = "text-blue-700"
                            icon = <MapPin className="w-4 h-4 mr-1" />
                        } else if (tag === "Romantic") {
                            bgColor = "bg-pink-50"
                            textColor = "text-pink-700"
                            icon = <Heart className="w-4 h-4 mr-1" />
                        }

                        return (
                            <div key={index} className={`flex items-center px-3 py-1 rounded-full ${bgColor} ${textColor}`}>
                                {icon}
                                <span>{tag}</span>
                            </div>
                        )
                    })}
                </div>

                {/* Restaurant Info */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                        <span className="text-gray-600 mr-2">Neighborhood:</span>
                        <span className="font-medium">{restaurant.neighborhood}</span>
                    </div>

                    <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-gray-600 mr-2">Hours:</span>
                        <span className="font-medium">{restaurant.hours}</span>
                    </div>

                    <div className="flex items-center">
                        <DollarSign className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-gray-600 mr-2">Price Range:</span>
                        <span className="font-medium">{restaurant.priceRange}</span>
                    </div>
                </div>

                {/* Trend Score & Popularity */}
                <div className="mt-6 bg-white p-5 rounded-lg shadow-sm">
                    <div className="flex flex-wrap gap-8">
                        <div>
                            <div className="text-sm text-gray-500 mb-1">Trend Score & Popularity tag:</div>
                            <div className="flex items-center">
                                <TrendingUp className="w-5 h-5 text-amber-500 mr-2" />
                                <span className="font-medium">Trend Score: {restaurant.trendScore}</span>
                            </div>
                        </div>

                        <div>
                            <div className="text-sm text-gray-500 mb-1">Booked this week:</div>
                            <div className="flex items-center">
                                <Users className="w-5 h-5 text-blue-500 mr-2" />
                                <span className="font-medium">{restaurant.bookedThisWeek} this week</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Book Now Button */}
                <div className="mt-6">
                    <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                        Book Now
                    </button>
                </div>

                {/* Overview */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview:</h2>
                    <p className="text-gray-700 leading-relaxed">{restaurant.description}</p>

                    <p className="text-gray-700 leading-relaxed mt-4">{restaurant.extendedDescription}</p>
                </div>
            </HomeContainer>
        </div>
    )
}

export default RestaurantDetails