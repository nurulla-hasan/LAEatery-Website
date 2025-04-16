import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const RestaurantCard = ({ vibeRestaurantData }) => {
    const [favorites, setFavorites] = useState({})

    // Toggle favorite status
    const toggleFavorite = (id) => {
        setFavorites((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }


    return (
        <>
            {
                vibeRestaurantData.map((restaurant) => (
                    <div key={restaurant.id} className="bg-white rounded-xl overflow-hidden">
                        {/* Restaurant image and favorite button */}
                        <div className="relative w-full h-[200px] cursor-pointer hover:scale-102 transition">
                            <Link href={`/vibe/${restaurant.id}`}>
                                <Image
                                    src={restaurant.image || "/placeholder.svg"}
                                    alt={restaurant.name}
                                    fill
                                    className="object-cover rounded-t-xl"
                                />
                            </Link>
                            <button
                                className={`absolute cursor-pointer top-2 right-2 p-1.5 rounded-full ${favorites[restaurant.id] ? "bg-white" : "bg-black/50"}`}
                                onClick={() => toggleFavorite(restaurant.id)}
                            >
                                <Heart
                                    className={`h-5 w-5 ${favorites[restaurant.id] ? "text-red-500 fill-red-500" : ""}`}
                                />
                            </button>
                        </div>

                        {/* Restaurant details */}
                        <div className="p-3 space-y-3">
                            <h3 className="text-md font-medium text-[#333333]">{restaurant.name}</h3>

                            {/* Rating and tags */}
                            <div className="flex items-center space-x-2 text-[#333333]">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <span className="text-[] text-xs ml-1">{restaurant.rating}</span>
                                    <span className="text-xs ml-1">({restaurant.reviews})</span>
                                </div>
                                <span className=" text-xs">•</span>
                                {restaurant.tags.map((tag, index) => (
                                    <React.Fragment key={index}>
                                        <span className=" text-xs">{tag}</span>
                                        {index < restaurant.tags.length - 1 && <span className=" text-xs">•</span>}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* Location */}
                            <div className="flex items-center text-[#333333]">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                <span className=" text-xs ml-1">{restaurant.location}</span>
                            </div>

                            {/* Hours */}
                            <div className="flex items-center text-[#333333]">
                                <svg className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span className=" text-xs ml-1">{restaurant.hours}</span>
                            </div>

                            {/* Book now button */}
                            <button className="w-full mt-3 py-1.5 bg-black text-white text-xs font-medium rounded hover:bg-gray-700 transition-colors cursor-pointer">
                                Book Now
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default RestaurantCard;