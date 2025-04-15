"use client"
import Link from "next/link"
import "swiper/css"
import "swiper/css/navigation"
import { GrNext, GrPrevious } from "react-icons/gr";
import HomeContainer from "../HomeContainer"
import Slider from "@/components/swiper/Slider"



const NearbyRestaurants = () => {
  

  return (
    <section className="text-white py-16">
      <HomeContainer>
        <div className="flex gap-2 flex-col md:flex-row justify-between md:items-center mb-4 md:mb-8">
          <h2 className="text-3xl font-medium font-poltawski text-[#0A0A0A]">Nearby Restaurant</h2>
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
                <GrPrevious size={16}/>
              </button>
              <button
                className="slider-next-button w-8 h-8 text-gray-400 hover:text-black flex items-end justify-center cursor-pointer"
                aria-label="Next slide"
              >
                <span className="sr-only">Next</span>
                <GrNext size={16}/>
              </button>
            </div>
          </div>
        </div>
        <Slider/>
      </HomeContainer>
    </section>
  )
}

export default NearbyRestaurants
