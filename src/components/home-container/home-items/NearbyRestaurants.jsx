"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { GrNext, GrPrevious } from "react-icons/gr";
import HomeContainer from "../HomeContainer"
import { restaurantData } from "@/lib/data"



const NearbyRestaurants = () => {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (id)=> {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="bg-black text-white py-16">
      <HomeContainer>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-medium font-serif">Nearby Restaurant</h2>
          <div className="flex items-center gap-4">
            <Link href="/restaurants" className="text-white hover:text-gray-300 transition-colors ">
              See All
            </Link>
            <div className="flex gap-2">
              <button
                className="slider-prev-button w-8 h-8 text-gray-400 hover:text-white flex items-center justify-center cursor-pointer"
                aria-label="Previous slide"
              >
                <span className="sr-only">Previous</span>
                <GrPrevious />
              </button>
              <button
                className="slider-next-button w-8 h-8 text-gray-400 hover:text-white flex items-center justify-center cursor-pointer"
                aria-label="Next slide"
              >
                <span className="sr-only">Next</span>
                <GrNext />
              </button>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: ".slider-prev-button",
            nextEl: ".slider-next-button",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="nearby-restaurants-slider"
        >
          {restaurantData.map((restaurant) => (
            <SwiperSlide key={restaurant.id}>
              <div className="bg-[#242424] overflow-hidden transition-transform hover:scale-[1.02] duration-300 rounded-xl">
                <div className="relative">
                  <Image
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover"
                  />
                  <button
                    onClick={() => toggleFavorite(restaurant.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full cursor-pointer ${
                      favorites.includes(restaurant.id) ? "bg-white text-red-500" : "bg-black/50 text-white"
                    } transition-all duration-300`}
                    aria-label={favorites.includes(restaurant.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart className={`h-5 w-5 ${favorites.includes(restaurant.id) ? "fill-current" : ""}`} />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-medium mb-2">{restaurant.name}</h3>

                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="font-medium">{restaurant.rating}</span>
                    <span className="text-gray-400 ml-1">({restaurant.reviews})</span>

                    {restaurant.tags.map((tag, index) => (
                      <span key={index} className="ml-2 text-gray-400">
                        • {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-gray-400 mb-2">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <span className="text-sm">{restaurant.location}</span>
                  </div>

                  <div className="flex items-center text-gray-400 mb-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-sm">Open: {restaurant.hours}</span>
                  </div>

                  <button className="w-full py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </HomeContainer>
    </section>
  )
}

export default NearbyRestaurants
