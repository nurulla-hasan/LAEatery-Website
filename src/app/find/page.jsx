"use client"

import React, { useState } from "react"
import HomeContainer from "@/components/home-container/HomeContainer"
import { Heart } from "lucide-react"
import { restaurants } from "@/lib/data"

const FindPage = () => {
  // State to track favorite restaurants
  const [favorites, setFavorites] = useState({
    "restaurant-1": false,
    "restaurant-2": true, // Pre-selected as favorite
    "restaurant-3": false,
    "restaurant-4": false,
    "restaurant-5": false,
    "restaurant-6": false,
    "restaurant-7": false,
    "restaurant-8": false,
    "restaurant-9": false,
    "restaurant-10": false,
    "restaurant-11": false,
    "restaurant-12": false,
  })

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Filter categories
  const neighborhoods = [
    { id: "downtown", label: "Downtown LA (DTLA)" },
    { id: "west-hollywood", label: "West Hollywood" },
    { id: "santa-monica", label: "Santa Monica" },
    { id: "venice", label: "Venice" },
    { id: "silver-lake", label: "Silver Lake" },
    { id: "hollywood", label: "Hollywood" },
    { id: "beverly-hills", label: "Beverly Hills" },
    { id: "koreatown", label: "Koreatown (K-Town)" },
    { id: "echo-park", label: "Echo Park" },
    { id: "culver-city", label: "Culver City" },
    { id: "los-feliz", label: "Los Feliz" },
    { id: "brentwood", label: "Brentwood" },
    { id: "malibu", label: "Malibu" },
    { id: "highland-park", label: "Highland Park" },
    { id: "pasadena", label: "Pasadena" },
  ]

  const cuisines = [
    { id: "italian", label: "Italian", checked: true },
    { id: "japanese", label: "Japanese" },
    { id: "mexican", label: "Mexican" },
    { id: "chinese", label: "Chinese" },
    { id: "indian", label: "Indian" },
    { id: "french", label: "French" },
    { id: "thai", label: "Thai" },
    { id: "mediterranean", label: "Mediterranean" },
    { id: "korean", label: "Korean" },
    { id: "vegetarian", label: "Vegetarian" },
  ]

  const vibes = [
    { id: "romantic", label: "Romantic", checked: true },
    { id: "trendy", label: "Trendy" },
    { id: "family-friendly", label: "Family Friendly" },
    { id: "outdoor-seating", label: "Outdoor Seating" },
    { id: "casual", label: "Casual" },
    { id: "luxury", label: "Luxury / Fine Dining" },
    { id: "late-night", label: "Late-Night" },
    { id: "live-music", label: "Live Music" },
    { id: "pet-friendly", label: "Pet-Friendly" },
    { id: "group-friendly", label: "Group-Friendly" },
  ]

  return (
    <>
      <HomeContainer>
        <div className="flex flex-col md:flex-row">
          {/* Left sidebar - Filters */}
          <div className="bg-[#242424] rounded-lg w-full md:w-[20%] p-4 md:p-6 overflow-y-auto">
            <h2 className="text-white text-sm font-medium mb-4">Filter By</h2>

            {/* Neighborhood filter */}
            <div className="mb-6">
              <h3 className="text-white text-sm font-medium mb-2">Neighborhood</h3>
              <div className="space-y-2">
                {neighborhoods.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`neighborhood-${item.id}`}
                      className="h-4 w-4 rounded border-gray-600 text-white focus:ring-0"
                    />
                    <label htmlFor={`neighborhood-${item.id}`} className="ml-2 text-xs text-gray-300">
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Cuisine filter */}
            <div className="mb-6">
              <h3 className="text-white text-sm font-medium mb-2">Cuisine</h3>
              <div className="space-y-2">
                {cuisines.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`cuisine-${item.id}`}
                      defaultChecked={item.checked}
                      className="h-4 w-4 rounded border-gray-600 text-white focus:ring-0"
                    />
                    <label htmlFor={`cuisine-${item.id}`} className="ml-2 text-xs text-gray-300">
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Vibe filter */}
            <div>
              <h3 className="text-white text-sm font-medium mb-2">Vibe</h3>
              <div className="space-y-2">
                {vibes.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`vibe-${item.id}`}
                      defaultChecked={item.checked}
                      className="h-4 w-4 rounded border-gray-600 text-white focus:ring-0"
                    />
                    <label htmlFor={`vibe-${item.id}`} className="ml-2 text-xs text-gray-300">
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right content - Restaurant listings */}
          <div className="w-full md:w-[80%] p-4 md:p-6 overflow-y-auto">
            <div className="text-white text-sm mb-4">Showing 58 results</div>

            {/* Restaurant grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {restaurants.map((restaurant) => (
                <div key={restaurant.id} className="bg-[#242424] rounded-lg overflow-hidden">
                  {/* Restaurant image and favorite button */}
                  <div className="relative">
                    <img
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.name}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      className={`absolute top-2 right-2 p-1.5 rounded-full ${favorites[restaurant.id] ? "bg-white" : "bg-black/50"}`}
                      onClick={() => toggleFavorite(restaurant.id)}
                    >
                      <Heart
                        className={`h-5 w-5 ${favorites[restaurant.id] ? "text-red-500 fill-red-500" : "text-white"}`}
                      />
                    </button>
                  </div>

                  {/* Restaurant details */}
                  <div className="p-3">
                    <h3 className="text-white text-sm font-medium">{restaurant.name}</h3>

                    {/* Rating and tags */}
                    <div className="flex items-center mt-1 space-x-2">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
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
                    <div className="flex items-center mt-2">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <div className="flex items-center mt-1">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <button className="w-full mt-3 py-1.5 bg-white text-black text-xs font-medium rounded hover:bg-gray-200 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HomeContainer>
    </>
  )
}

export default FindPage
