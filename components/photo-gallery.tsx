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

// Define photo types
type PhotoLayout = 'portrait' | 'landscape' | 'square'

interface Photo {
  id: string
  src: string
  layout: PhotoLayout
  category: string
  alt: string
}

interface Project {
  id: string
  title: string
  location: string
  image: string
  category: string
}

// Layout matches exactly with the diagram provided
const photos: Photo[] = [
  {
    id: 'photo-1',
    src: '/images/gallery/1.jpg',
    layout: 'landscape',
    category: 'Wedding',
    alt: 'Wedding photo 1'
  },
  {
    id: 'photo-2',
    src: '/images/gallery/2.jpg',
    layout: 'portrait',
    category: 'Pre-Wedding',
    alt: 'Pre-wedding photo 1'
  },
  {
    id: 'photo-3',
    src: '/images/gallery/3.jpg',
    layout: 'square',
    category: 'Engagement',
    alt: 'Engagement photo 1'
  },
  {
    id: 'photo-4',
    src: '/images/gallery/4.jpg',
    layout: 'landscape',
    category: 'Wedding',
    alt: 'Wedding photo 2'
  },
  {
    id: 'photo-5',
    src: '/images/gallery/5.jpg',
    layout: 'portrait',
    category: 'Pre-Wedding',
    alt: 'Pre-wedding photo 2'
  },
  {
    id: 'photo-6',
    src: '/images/gallery/6.jpg',
    layout: 'square',
    category: 'Engagement',
    alt: 'Engagement photo 2'
  },
  {
    id: 'photo-7',
    src: '/images/gallery/7.jpg',
    layout: 'landscape',
    category: 'Wedding',
    alt: 'Wedding photo 3'
  },
  {
    id: 'photo-8',
    src: '/images/gallery/8.jpg',
    layout: 'portrait',
    category: 'Pre-Wedding',
    alt: 'Pre-wedding photo 3'
  },
]

const featuredProjects: Project[] = [
  { id: 'project-1', title: 'Sarah & John', location: 'Mumbai', image: '/images/featured/1.jpg', category: 'Wedding' },
  { id: 'project-2', title: 'Priya & Rahul', location: 'Delhi', image: '/images/featured/2.jpg', category: 'Pre-Wedding' },
  { id: 'project-3', title: 'Maya & Arjun', location: 'Goa', image: '/images/featured/3.jpg', category: 'Engagement' },
  { id: 'project-4', title: 'Zara & Kabir', location: 'Udaipur', image: '/images/featured/4.jpg', category: 'Wedding' },
  { id: 'project-5', title: 'Anita & Raj', location: 'Jaipur', image: '/images/featured/5.jpg', category: 'Pre-Wedding' },
]

const categories = ["All", "Wedding", "Pre-Wedding", "Engagement"]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPhotos = selectedCategory === "All"
    ? photos
    : photos.filter(photo => photo.category === selectedCategory)

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
      {/* Featured Projects Section */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-playfair text-center mb-12">Featured Projects</h2>
        <div className="relative overflow-x-hidden">
          <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="min-w-[350px] md:min-w-[450px] h-[600px] relative rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 snap-center group"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl font-playfair mb-2">{project.title}</h3>
                  <p className="text-sm opacity-80">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${selectedCategory === category
                ? 'bg-[#36302a] text-white'
                : 'bg-white text-[#36302a] hover:bg-[#36302a] hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 auto-rows-[250px] gap-4">
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              layoutId={`photo-${photo.id}`}
              className={`relative overflow-hidden ${getImageClass(photo.layout)}`}
              onClick={() => setSelectedPhoto(photo)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            layoutId={`photo-${selectedPhoto.id}`}
            className="relative w-full max-w-5xl aspect-[3/2]"
          >
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
