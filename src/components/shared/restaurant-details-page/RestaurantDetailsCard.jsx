"use client"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Globe, Star, Heart, Clock, DollarSign } from 'lucide-react'
import HomeContainer from "@/components/home-container/HomeContainer"
import Image from "next/image"
import toast from 'react-hot-toast'
import Link from 'next/link'
import Slider from '@/components/swiper/Slider'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { allRestaurantData } from "@/lib/data"
import SingleDataMap from '../restaurant-map/RestaurantMapWrapper'
import { useRef, useState } from "react"

const bgColors = ["bg-amber-50", "bg-blue-50", "bg-pink-50", "bg-green-50", "bg-purple-50", "bg-yellow-50"]
const textColors = ["text-amber-700", "text-blue-700", "text-pink-700", "text-green-700", "text-purple-700", "text-yellow-700"]

const RestaurantDetailsCard = ({ getHashedIndex, toggleFavorite, restaurant, isFavorite }) => {
  const [heartAnimating, setHeartAnimating] = useState(false)
  
  // Refs for scroll animations
  const overviewRef = useRef(null)
  const galleryRef = useRef(null)
  const dishesRef = useRef(null)
  const relatedRef = useRef(null)
  
  // Check if sections are in view
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.3 })
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.3 })
  const dishesInView = useInView(dishesRef, { once: true, amount: 0.3 })
  const relatedInView = useInView(relatedRef, { once: true, amount: 0.3 })

  const handleBook = (id) => {
    console.log(id)
    toast.success("Successfully Booked")
  }

  const handleToggleFavorite = () => {
    setHeartAnimating(true)
    toggleFavorite()
    setTimeout(() => setHeartAnimating(false), 500)
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const imageZoom = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3,
        delay: i * 0.05
      }
    })
  }

  return (
    <HomeContainer>
      <motion.div 
        className='mb-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image and Map */}
        <motion.div 
          className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="lg:col-span-2"
            variants={imageZoom}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                width={1920}
                height={1080}
                src={restaurant?.locationImage || "/placeholder.svg"}
                alt={restaurant?.name}
                priority
                className="w-full md:h-[550px] object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-sm overflow-hidden relative"
            variants={fadeInUp}
          >
            <SingleDataMap
              address={restaurant?.contactInfo?.address}
              lat={restaurant?.coordinates?.lat}
              lng={restaurant?.coordinates?.lng}
              name={restaurant?.name}
            />
            <div
            >
              <Link 
                href={`/view-map?lat=${restaurant?.coordinates?.lat}&lng=${restaurant?.coordinates?.lng}&address=${encodeURIComponent(restaurant?.contactInfo?.address)}&name=${encodeURIComponent(restaurant?.name)}`} 
                className='text-blue-500 text-xs absolute top-2 left-2 rounded-lg z-[500] bg-white p-2'
              >
                View Larger Map
              </Link>
            </div>
            <motion.div 
              className="p-7"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.h3 
                className="font-semibold text-lg mb-4 text-[#333333]"
                variants={fadeInUp}
              >
                Contact Info
              </motion.h3>
              <motion.div 
                className="space-y-5 text-sm"
                variants={staggerContainer}
              >
                <motion.div 
                  className="flex items-start"
                  variants={fadeInUp}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                  </motion.div>
                  <span className="text-[#333333]">{restaurant?.contactInfo?.address}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  variants={fadeInUp}
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  </motion.div>
                  <span className="text-[#0064DA]">{restaurant?.contactInfo?.phone}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  variants={fadeInUp}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  </motion.div>
                  <span className="text-[#0064DA]">{restaurant?.contactInfo?.email}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  variants={fadeInUp}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Globe className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  </motion.div>
                  <motion.a
                    href={restaurant?.contactInfo?.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0064DA] hover:underline"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {restaurant?.contactInfo?.website}
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Title & Rating */}
        <motion.div 
          className="mt-8 flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.h1 
            className="md:text-4xl text-2xl font-bold text-gray-800 font-poltawski"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {restaurant?.name}
          </motion.h1>
          <div className="flex items-center">
            <motion.div 
              className="flex items-center bg-white md:px-3 md:py-2 px-2 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <Star className="w-5 h-5 text-amber-500 mr-1 fill-amber-500" />
              </motion.div>
              <span className="font-medium text-sm text-black">{restaurant?.rating}/5.0</span>
            </motion.div>
            <motion.button 
              onClick={handleToggleFavorite} 
              className="ml-3 md:p-1.5 p-1 rounded-full bg-white cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={heartAnimating ? 
                  { scale: [1, 1.3, 1] } : 
                  { scale: 1 }
                }
                transition={{ duration: 0.3 }}
              >
                <Heart className={`md:w-6 w-5 md:h-6 h-5 ${isFavorite ? "fill-black text-black" : "text-gray-400"}`} />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div 
          className="mt-4 flex flex-wrap gap-2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {restaurant?.tags?.map((tagObj, index) => {
            const colorIndex = getHashedIndex(tagObj.label, bgColors.length)
            return (
              <motion.div
                key={index}
                custom={index}
                variants={tagVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
                className={`flex items-center gap-1 px-3 py-1 rounded-full ${bgColors[colorIndex]} ${textColors[colorIndex]}`}
              >
                <span className="text-sm">{tagObj.icon}</span>
                <span className="text-sm">{tagObj.label}</span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Restaurant Info */}
        <motion.div 
          className="mt-6 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div 
            className="flex items-center"
            whileHover={{ x: 2 }}
          >
            <span className="text-black mr-2">Neighborhood:</span>
            <span className="font-medium text-[#333333be] text-sm">{restaurant?.neighborhood}</span>
          </motion.div>
          <span className="text-black">|</span>
          <motion.div 
            className="flex items-center"
            whileHover={{ x: 2 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Clock className="w-4 h-4 text-gray-500 mr-2" />
            </motion.div>
            <span className="text-black mr-2">Hours:</span>
            <span className="font-medium text-[#333333be] text-sm">{restaurant?.hours}</span>
          </motion.div>
          <span className="text-black">|</span>
          <motion.div 
            className="flex items-center"
            whileHover={{ x: 2 }}
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <DollarSign className="w-4 h-4 text-gray-500 mr-2" />
            </motion.div>
            <span className="text-black mr-2">Price Range:</span>
            <span className="font-medium text-[#333333be] text-sm">{restaurant?.priceRange}</span>
          </motion.div>
        </motion.div>

        {/* Popularity */}
        <motion.div 
          className="mt-6 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div 
            className="flex items-center"
            whileHover={{ x: 2 }}
          >
            <span className="text-black mr-2">Trend Score & Popularity:</span>
            <span className="font-medium text-[#333333be] text-sm">{restaurant?.trendScore}</span>
          </motion.div>
          <span className="text-black">|</span>
          <motion.div 
            className="flex items-center"
            whileHover={{ x: 2 }}
          >
            <p className="font-medium text-[#333333be] text-sm">
              Booked <motion.span 
                className="font-semibold text-black"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {restaurant?.bookedThisWeek}
              </motion.span> this week
            </p>
          </motion.div>
        </motion.div>

        {/* Book Now */}
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.button 
            onClick={() => (handleBook(restaurant.id))} 
            className="bg-black text-white text-xs px-6 py-3 rounded-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: "#333" }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </motion.div>

        {/* Overview */}
        <motion.div 
          className="mt-10"
          ref={overviewRef}
          initial="hidden"
          animate={overviewInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-800 mb-4 font-poltawski"
            variants={fadeInUp}
          >
            Overview
          </motion.h2>
          <motion.p 
            className="text-gray-700 leading-relaxed"
            variants={fadeInUp}
          >
            {restaurant?.description}
          </motion.p>
          <motion.p 
            className="text-gray-700 leading-relaxed mt-4"
            variants={fadeInUp}
          >
            {restaurant?.extendedDescription}
          </motion.p>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div 
          className="mt-10"
          ref={galleryRef}
          initial="hidden"
          animate={galleryInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-800 font-poltawski"
            variants={fadeInUp}
          >
            Photo Gallery
          </motion.h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:mt-6 mt-4"
            variants={staggerContainer}
          >
            {restaurant?.gallery?.map((img, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" 
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Gallery Image ${index + 1}`}
                  height={1080}
                  width={1920}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Dishes */}
        <motion.div 
          className='mt-20'
          ref={dishesRef}
          initial="hidden"
          animate={dishesInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2 
            className="md:text-4xl text-3xl font-bold text-gray-800 font-poltawski text-center"
            variants={fadeInUp}
          >
            Signature Dishes
          </motion.h2>
          <motion.div variants={staggerContainer}>
            <div className="space-y-16 md:mt-10 mt-6">
              {restaurant?.dishes?.map((dish, index) => (
                <motion.div 
                  key={index} 
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={dishesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {index % 2 === 0 ? (
                    // Even index (0, 2, 4...) - Text left, Image right
                    <>
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={dishesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      >
                        <h3 className="md:text-3xl text-xl font-semibold mb-3 font-poltawski text-[#333333]">{dish.title}</h3>
                        <p className="text-[#333333] leading-relaxed text-sm md:text-[16px]">{dish.description}</p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={dishesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <img
                          src={dish.image || "/placeholder.svg"}
                          alt={dish.title}
                          className="w-full md:h-96 object-cover rounded-md"
                        />
                      </motion.div>
                    </>
                  ) : (
                    // Odd index (1, 3, 5...) - Image left, Text right
                    <>
                      <motion.div 
                        className="order-2 md:order-1"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={dishesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <img
                          src={dish.image || "/placeholder.svg"}
                          alt={dish.title}
                          className="w-full md:h-96 object-cover rounded-md"
                        />
                      </motion.div>
                      <motion.div 
                        className="order-1 md:order-2"
                        initial={{ opacity: 0, x: 30 }}
                        animate={dishesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      >
                        <h3 className="md:text-3xl text-xl font-semibold mb-3 font-poltawski text-[#333333]">{dish.title}</h3>
                        <p className="text-[#333333] leading-relaxed text-sm md:text-[16px]">{dish.description}</p>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Might also like */}
        <motion.div 
          ref={relatedRef}
          initial="hidden"
          animate={relatedInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex gap-2 flex-col md:flex-row justify-between md:items-center mb-4 md:mb-8 mt-20"
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-3xl font-medium font-poltawski text-[#0A0A0A]"
              variants={fadeInUp}
            >
              You Might Also Like
            </motion.h2>
            <div className="flex justify-between items-end gap-4">
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/nearby-restaurant" className="text-[#0A0A0A] text-sm hover:text-gray-700 transition-colors">
                  See All
                </Link>
              </motion.div>
              <div className="flex gap-2">
                <motion.button
                  className="slider-prev-button w-8 h-8 text-gray-400 hover:text-black flex items-end justify-center cursor-pointer"
                  aria-label="Previous slide"
                  whileHover={{ scale: 1.2, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">Previous</span>
                  <GrPrevious size={16} />
                </motion.button>
                <motion.button
                  className="slider-next-button w-8 h-8 text-gray-400 hover:text-black flex items-end justify-center cursor-pointer"
                  aria-label="Next slide"
                  whileHover={{ scale: 1.2, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">Next</span>
                  <GrNext size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Slider data={allRestaurantData} />
          </motion.div>
        </motion.div>
      </motion.div>
    </HomeContainer>
  )
}

export default RestaurantDetailsCard
