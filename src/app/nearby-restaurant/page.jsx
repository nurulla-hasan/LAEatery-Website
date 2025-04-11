"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Heart, X, FilterIcon } from "lucide-react"
import HomeContainer from "@/components/home-container/HomeContainer"
import { cuisines, neighborhoods, restaurantData, vibes } from "@/lib/data"
import toast from "react-hot-toast"


const NearbyRestaurant = () => {
    // State for favorites
    const [favorites, setFavorites] = useState(["restaurant-2"])

    // State for filter modal
    const [showFilterModal, setShowFilterModal] = useState(false)

    // Toggle favorite status
    const toggleFavorite = (id) => {
        setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
    }

    const handleFilterApply = () => {
        setShowFilterModal(false)
        toast.success("Your Filtered restaurant")
    }




    return (
        <>
            <div className="my-16">
                <HomeContainer>
                    {/* Header with result count and filter button */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="text-white">Showing {restaurantData.length} results</div>
                        <button
                            onClick={() => setShowFilterModal(true)}
                            className="bg-white text-black px-4 py-2 rounded flex items-center gap-2 cursor-pointer"
                        >
                            <FilterIcon size={16} />
                            Filter
                        </button>
                    </div>

                    {/* Restaurant grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {restaurantData.map((restaurant) => (
                            <div key={restaurant.id} className="bg-[#242424] rounded-xl overflow-hidden">
                                {/* Restaurant image and favorite button */}
                                <div className="relative w-full h-[200px]">
                                    <Image
                                        src={restaurant.image || "/placeholder.svg"}
                                        alt={restaurant.name}
                                        fill
                                        className="object-cover rounded-t-xl"
                                    />
                                    <button
                                        className={`absolute cursor-pointer top-2 right-2 p-1.5 rounded-full ${favorites[restaurant.id] ? "bg-white" : "bg-black/50"}`}
                                        onClick={() => toggleFavorite(restaurant.id)}
                                    >
                                        <Heart
                                            className={`h-5 w-5 ${favorites[restaurant.id] ? "text-red-500 fill-red-500" : "text-white"}`}
                                        />
                                    </button>
                                </div>

                                {/* Restaurant details */}
                                <div className="p-3 space-y-3">
                                    <h3 className="text-md font-medium">{restaurant.name}</h3>

                                    {/* Rating and tags */}
                                    <div className="flex items-center space-x-2">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <span className="text-white text-xs ml-1">{restaurant.rating}</span>
                                            <span className="text-gray-400 text-xs ml-1">({restaurant.reviews})</span>
                                        </div>
                                        <span className="text-gray-400 text-xs">•</span>
                                        {restaurant.tags.map((tag, index) => (
                                            <React.Fragment key={index}>
                                                <span className="text-gray-300 text-xs">{tag}</span>
                                                {index < restaurant.tags.length - 1 && <span className="text-gray-400 text-xs">•</span>}
                                            </React.Fragment>
                                        ))}
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center">                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                        <span className="text-gray-300 text-xs ml-1">{restaurant.location}</span>
                                    </div>

                                    {/* Hours */}
                                    <div className="flex items-center">
                                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span className="text-gray-300 text-xs ml-1">{restaurant.hours}</span>
                                    </div>

                                    {/* Book now button */}
                                    <button className="w-full mt-3 py-1.5 bg-white text-black text-xs font-medium rounded hover:bg-gray-200 transition-colors cursor-pointer">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </HomeContainer>

                {/* Filter Modal */}
                {showFilterModal && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end ">
                        <div className="bg-[#242424] w-full max-w-xs h-full overflow-y-auto scrl-hide">
                            <div className="p-4 flex justify-between items-center border-b border-gray-800">
                                <h2 className="text-white text-lg font-medium">Filter</h2>
                                <button onClick={() => setShowFilterModal(false)} className="text-gray-400 hover:text-white cursor-pointer">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-4">
                                {/* Neighborhood filter */}
                                <div className="mb-6">
                                    <h3 className="text-white font-medium mb-3">Neighborhood</h3>
                                    <div className="space-y-2">
                                        {neighborhoods.map((item) => (
                                            <div key={item.id} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id={`neighborhood-${item.id}`}
                                                    className="h-4 w-4 rounded border-gray-600 text-white focus:ring-0"
                                                />
                                                <label htmlFor={`neighborhood-${item.id}`} className="ml-2 text-sm text-gray-300">
                                                    {item.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Cuisine filter */}
                                <div className="mb-6">
                                    <h3 className="text-white font-medium mb-3">Cuisine</h3>
                                    <div className="space-y-2">
                                        {cuisines.map((item) => (
                                            <div key={item.id} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id={`cuisine-${item.id}`}
                                                    defaultChecked={item.checked}
                                                    className="h-4 w-4 rounded border-gray-600 text-white focus:ring-0"
                                                />
                                                <label htmlFor={`cuisine-${item.id}`} className="ml-2 text-sm text-gray-300">
                                                    {item.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Vibe filter */}
                                <div className="mb-6">
                                    <h3 className="text-white font-medium mb-3">Vibe</h3>
                                    <div className="space-y-2">
                                        {vibes.map((item) => (
                                            <div key={item.id} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id={`vibe-${item.id}`}
                                                    defaultChecked={item.checked}
                                                    className="h-4 w-4 rounded border-gray-600 text-white focus:ring-0"
                                                />
                                                <label htmlFor={`vibe-${item.id}`} className="ml-2 text-sm text-gray-300">
                                                    {item.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Apply button */}
                                <button onClick={handleFilterApply} className="w-full py-3 bg-black text-white font-medium rounded hover:bg-gray-200 transition-colors cursor-pointer">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default NearbyRestaurant
