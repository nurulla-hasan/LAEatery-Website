"use client"
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import placeholder_image from '../../../../public/image/placeholder-image.png'
import toast from 'react-hot-toast';

const RestaurantCard = ({ data, path, toggleFavorite: customToggle }) => {

    const [imgError, setImgError] = useState(false)
    const [localFavorite, setLocalFavorite] = useState(data.favorite);

    const handleToggle = () => {
        if (customToggle) {
            customToggle(data.id);
        } else {
            const updated = !localFavorite;
            setLocalFavorite(updated);
            toast.success(updated ? 'Added to favorites' : 'Removed from favorites');
        }
    };

    const isFavorite = customToggle ? data.favorite : localFavorite;

    const handleBook = () => {
    }


    return (
        <>
            <div className="bg-white rounded-xl overflow-hidden">
                {/* Restaurant image and favorite button */}
                <div className="relative w-full h-[200px] cursor-pointer hover:scale-102 transition">
                    <Link href={`/${path}/${data?.id}`}>
                        <Image
                            src={imgError ? placeholder_image : data?.image}
                            alt="Restaurant image"
                            fill
                            className="object-cover rounded-t-xl"
                            onError={() => setImgError(true)}
                        />
                    </Link>
                    {/* Heart button */}
                    <button
                        onClick={handleToggle}
                        className="absolute top-3 right-3 p-2 rounded-full cursor-pointer transition-all duration-300 bg-white/50 text-black backdrop-blur-sm"
                        aria-label={data.favorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        <Heart className={`h-5 w-5 ${data.favorite || localFavorite ? "fill-black" : ""}`} />
                    </button>


                </div>

                {/* data details */}
                <div className="p-3 space-y-3">
                    <div>
                        <Link href={`/${path}/${data?.id}`}>
                            <h3 className="text-md font-medium text-[#333333]">{data?.name}</h3>
                        </Link>
                    </div>

                    {/* Rating and tags */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[#333333] text-xs">
                        {/* Rating */}
                        <div className="flex items-center">
                            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <span>{data?.rating}</span>
                            <span className="ml-1">({data?.reviews})</span>
                        </div>

                        {/* Tags */}
                        {Array.isArray(data?.tags) && (
                            <div className="flex items-center gap-0.5 text-gray-700 text-xs">
                                {data.tags.map((tag, index) => {
                                    if (index > 1) return null;
                                    return (
                                        <React.Fragment key={index}>
                                            <span>•</span>
                                            <span>{tag.label}</span>
                                        </React.Fragment>
                                    )
                                })}

                                {data.tags.length > 2 && (
                                    <>
                                        <span>...</span>
                                        <span className='text-xs cursor-pointer' title={data.tags.map(tag => tag.label).join(', ')}>
                                            +{data.tags.length - 2} more
                                        </span>
                                    </>
                                )}
                            </div>
                        )}
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
                        <span className=" text-xs ml-1">{data?.location}</span>
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
                        <span className=" text-xs ml-1">{data?.hours}</span>
                    </div>

                    {/* Book now button */}
                    <button onClick={handleBook} className="w-full mt-3 py-1.5 bg-black text-white text-xs font-medium rounded hover:bg-gray-700 transition-colors cursor-pointer">
                        Book Now
                    </button>
                </div>
            </div>

        </>
    );
};

export default RestaurantCard;