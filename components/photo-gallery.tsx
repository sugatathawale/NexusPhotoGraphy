"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import work1 from '../src/work1.jpg'
import work2 from '../src/work2.jpg'
import work3 from '../src/work3.jpg'
import work4 from '../src/work4.jpg'
import work5 from '../src/work5.jpg'
import work6 from '../src/work6.jpg'
import work7 from '../src/work7.jpg'
import work8 from '../src/work6.jpg'
import work9 from '../src/work6.jpg'
import work10 from '../src/work6.jpg'
import work11 from '../src/work6.jpg'
interface Photo {
  id: number
  src: string
  alt: string
  layout: "tall" | "square" | "wide"
  category: string
}

// Layout matches exactly with the diagram provided
const photos: Photo[] = [
  {
    id: 1,
    src:work1,
    alt: "Wedding couple on beach",
    layout: "tall",
    category: "Ceremony"
  },
  {
    id: 2,
    src:work2,
    alt: "Bride preparation",
    layout: "square",
    category: "Portraits"
  },
  {
    id: 3,
    src:work3,
    alt: "Wedding ceremony",
    layout: "square",
    category: "Ceremony"
  },
  {
    id: 4,
    src:work4,
    alt: "Wedding reception",
    layout: "square",
    category: "Reception"
  },
  {
    id: 5,
    src:work5,
    alt: "Couple portrait",
    layout: "square",
    category: "Portraits"
  },
  {
    id: 6,
    src:work6,
    alt: "Wedding details",
    layout: "wide",
    category: "Details"
  },
  {
    id: 7,
    src:work7,
    alt: "First dance",
    layout: "square",
    category: "Reception"
  },
  {
    id: 8,
    src: "/images/gallery8.jpg",
    alt: "Wedding rings",
    layout: "tall",
    category: "Details"
  },  {
    id: 8,
    src: "/images/gallery8.jpg",
    alt: "Wedding rings",
    layout: "tall",
    category: "Details"
  },  {
    id: 8,
    src: "/images/gallery8.jpg",
    alt: "Wedding rings",
    layout: "tall",
    category: "Details"
  },  {
    id: 8,
    src: "/images/gallery8.jpg",
    alt: "Wedding rings",
    layout: "tall",
    category: "Details"
  }
]

const categories = ["All", "Ceremony", "Reception", "Portraits", "Details"]

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  const filteredPhotos = selectedCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory)

  const getImageClass = (layout: Photo["layout"]) => {
    switch (layout) {
      case "tall":
        return "row-span-2 h-full"
      case "wide":
        return "col-span-2 w-full"
      default:
        return "w-full h-full"
    }
  }

  return (
    <section className="bg-cream-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-golden-500 text-white shadow-lg"
                  : "bg-white text-gray-800 hover:bg-golden-100 shadow-md"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid - Exact layout matching the diagram */}
        <div className="grid grid-cols-4 auto-rows-[250px] gap-4">
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              layoutId={`photo-${photo.id}`}
              className={`relative overflow-hidden ${getImageClass(photo.layout)}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(photo)}
              onHoverStart={() => setHoveredImage(photo.id)}
              onHoverEnd={() => setHoveredImage(null)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500"
                style={{
                  transform: hoveredImage === photo.id ? 'scale(1.1)' : 'scale(1)',
                }}
              />
              <motion.div
                initial={false}
                animate={{
                  opacity: hoveredImage === photo.id ? 1 : 0,
                }}
                className="absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-all duration-300"
              >
                <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                  <h3 className="text-xl font-serif mb-1">{photo.alt}</h3>
                  <p className="text-golden-200 text-sm">{photo.category}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={`photo-${selectedImage.id}`}
              className="relative max-w-7xl max-h-[90vh] rounded-xl overflow-hidden"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1920}
                height={1080}
                className="object-contain max-h-[90vh]"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent"
              >
                <h3 className="text-white text-3xl font-serif mb-2">{selectedImage.alt}</h3>
                <p className="text-golden-200">{selectedCategory}</p>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 text-white text-4xl bg-black/50 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
              >
                ×
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
