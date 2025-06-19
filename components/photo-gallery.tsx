"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import land1 from "../src/landscape/land1.jpg"
import land2 from  "../src/landscape/lND2.jpg"
import land3 from  "../src/landscape/land3.jpg"
import land4 from  "../src/landscape/land4.jpg"
import land5 from  "../src/landscape/land5.jpg"
import land6 from  "../src/landscape/land6.jpg"
import land7 from  "../src/landscape/land7.jpg"
import land8 from  "../src/landscape/land8.jpg"
import land9 from  "../src/landscape/land9.jpg"
import pot1 from  "../src/potrait/pot.jpg"
import pot2 from   "../src/potrait/pot2.jpg"
import pot3 from    "../src/potrait/pot3.jpg"
import pot4 from   "../src/potrait/pot4.jpg"
import pot5 from   "../src/potrait/pot5.jpg"

import sqr1 from  "../src/flimcard/img1.jpg"
import sqr2 from  "../src/flimcard/img2.jpg"
import sqr3 from   "../src/flimcard/img3.jpg"
import sqr4 from   "../src/flimcard/img9.jpg"
import sqr5 from   "../src/flimcard/img5.jpg"
import sqr6 from   "../src/square/sqr1.jpg"
import sqr7 from    "../src/square/sqr2.jpg"
import sqr8 from   "../src/square/sqr3.jpg"


import type { StaticImageData } from 'next/image'

// Define photo types
type PhotoLayout = "portrait" | "landscape" | "square"

interface Photo {
  id: string
  src: string | StaticImageData
  layout: PhotoLayout
  category: string
  alt: string
}

// Sample photo data - you can replace with your actual photos
const photos: Photo[] = [
  {
    id: "photo-1",
    src: land1,
    layout: "landscape",
    category: "Wedding",
    alt: "Wedding ceremony with flower decorations",
  },
  {
    id: "photo-2",
    src: pot2,
    layout: "portrait",
    category: "Pre-Wedding",
    alt: "Couple laughing together in pre-wedding shoot",
  },
  {
    id: "photo-3",
    src: pot1,
    layout: "square",
    category: "Engagement",
    alt: "Engagement celebration with family",
  },
  {
    id: "photo-4",
    src: land2,
    layout: "landscape",
    category: "Wedding",
    alt: "Beach wedding ceremony",
  },
  {
    id: "photo-5",
    src: pot3,
    layout: "portrait",
    category: "Pre-Wedding",
    alt: "Couple at beach pre-wedding shoot",
  },
  {
    id: "photo-6",
    src: sqr1,
    layout: "square",
    category: "Engagement",
    alt: "Traditional engagement ceremony",
  },
  {
    id: "photo-7",
    src: land3,
    layout: "landscape",
    category: "Wedding",
    alt: "Wedding celebration with guests",
  },
  {
    id: "photo-8",
    src: pot1,
    layout: "portrait",
    category: "Pre-Wedding",
    alt: "Urban pre-wedding photoshoot",
  },
  {
    id: "photo-9",
    src: land4,
    layout: "landscape",
    category: "Wedding",
    alt: "Traditional wedding ceremony",
  },
  {
    id: "photo-10",
    src: pot4,
    layout: "portrait",
    category: "Engagement",
    alt: "Couple during engagement photoshoot",
  },
  {
    id: "photo-11",
    src: land5,
    layout: "landscape",
    category: "Pre-Wedding",
    alt: "Couple in traditional attire",
  },
  {
    id: "photo-12",
    src: land6,
    layout: "landscape",
    category: "Wedding",
    alt: "Wedding venue decoration",
  },
  {
    id: "photo-13",
    src: sqr2,
    layout: "square",
    category: "Wedding",
    alt: "Wedding venue decoration",
  },
  
    {
    id: "photo-14",
    src: pot5,
    layout: "portrait",
    category: "Engagement",
    alt: "Couple during engagement photoshoot",
  },
    {
    id: "photo-15",
    src: land7,
    layout: "landscape",
    category: "Wedding",
    alt: "Wedding venue decoration",
  },
    {
    id: "photo-16",
    src: sqr5,
    layout: "square",
    category: "Wedding",
    alt: "Wedding venue decoration",
  },
      {
    id: "photo-17",
    src: sqr6,
    layout: "square",
    category: "Engagement",
    alt: "Couple during engagement photoshoot",
  },
        {
    id: "photo-18",
    src: sqr7,
    layout: "square",
    category: "Engagement",
    alt: "Couple during engagement photoshoot",
  },
    {
    id: "photo-19",
    src: land8,
    layout: "landscape",
    category: "Wedding",
    alt: "Wedding venue decoration",
  },

        {
    id: "photo-20",
    src: land9,
    layout: "landscape",
    category: "Engagement",
    alt: "Couple during engagement photoshoot",
  },
      {
    id: "photo-21",
    src: sqr4,
    layout: "square",
    category: "Wedding",
    alt: "Wedding venue decoration",
  },
          {
    id: "photo-22",
    src: pot5,
    layout: "square",
    category: "Engagement",
    alt: "Couple during engagement photoshoot",
  },
]

// Categories for filtering
const categories = ["All", "Wedding", "Pre-Wedding", "Engagement"]

// Photo types for filtering
const photoTypes = ["All Types", "Portrait", "Landscape", "Square"]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedType, setSelectedType] = useState("All Types")

  // Filter photos based on selected category and type
  const filteredPhotos = photos.filter((photo) => {
    const categoryMatch = selectedCategory === "All" || photo.category === selectedCategory
    const typeMatch = selectedType === "All Types" || photo.layout === selectedType.toLowerCase()
    return categoryMatch && typeMatch
  })

  // Get appropriate CSS class based on photo layout
  const getImageClass = (layout: PhotoLayout) => {
    switch (layout) {
      case "portrait":
        return "row-span-2"
      case "landscape":
        return "col-span-2"
      case "square":
        return ""
      default:
        return ""
    }
  }

  return (
    <div className="py-16 bg-[#F5F0EC]">
      {/* Filter Section */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-serif text-center mb-4">Our Photography</h2>

        {/* Photo Type Filters */}
        <div className="flex flex-wrap justify-center gap-4">
          {photoTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-full transition-colors ${selectedType === type
                ? "bg-[#36302a] text-white"
                : "bg-white text-[#36302a] hover:bg-[#36302a] hover:text-white"
                }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[140px] sm:auto-rows-[200px] md:auto-rows-[250px] gap-2 sm:gap-4">
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              layoutId={`photo-${photo.id}`}
              className={`relative overflow-hidden rounded-lg ${getImageClass(photo.layout)}`}
              onClick={() => setSelectedPhoto(photo)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-2 sm:p-4 text-white">
                  <p className="text-xs sm:text-sm font-medium">{photo.category}</p>
                  <p className="text-[10px] sm:text-xs opacity-80">{photo.layout}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged view */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              layoutId={`photo-${selectedPhoto.id}`}
              className="relative w-full max-w-2xl sm:max-w-5xl max-h-[80vh] sm:max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-colors"
                onClick={() => setSelectedPhoto(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
