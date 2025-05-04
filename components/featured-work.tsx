"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
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

const featuredProjects = [
  {
    id: 1,
    title: "Royal Rajasthan Wedding",
    description: "A magnificent celebration in the palaces of Udaipur",
    image: work1,
    category: "Destination Wedding",
  },
  {
    id: 2,
    title: "Beach Romance in Goa",
    description: "Sunset vows by the Arabian Sea",
    image: work2,
    category: "Beach Wedding",
  },
  {
    id: 3,
    title: "Traditional South Indian Ceremony",
    description: "A colorful celebration of heritage and culture",
    image:work3,
    category: "Traditional Wedding",
  },
  {
    id: 4,
    title: "Modern Mumbai Celebration",
    description: "Contemporary elegance in the heart of the city",
    image: work4,
    category: "Urban Wedding",
  },
  {
    id: 5,
    title: "Intimate Himalayan Elopement",
    description: "Love amidst the majestic mountains",
    image: work5,
    category: "Intimate Wedding",
  },
  {
    id: 5,
    title: "Intimate Himalayan Elopement",
    description: "Love amidst the majestic mountains",
    image: work6,
    category: "Intimate Wedding",
  },
]

export default function FeaturedWork() {
  const containerRef = useRef(null)
  const { scrollXProgress } = useScroll({
    container: containerRef,
  })

  const opacity = useTransform(scrollXProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <section className="py-20 bg-golden-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif text-gray-800 mb-4 drop-shadow-golden">
              Featured Work
            </h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              Explore some of our most memorable wedding stories from around the world.
            </p>
          </div>
          <div className="hidden md:flex items-center text-gray-800 gap-3 group cursor-pointer">
            <span className="text-lg font-medium">Scroll to explore</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto hide-scrollbar gap-8 pb-12 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="min-w-[350px] md:min-w-[450px] h-[600px] relative rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 snap-center group"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6 }
                }}
                viewport={{ once: true }}
              >
                <Image 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <motion.div 
                  className="absolute bottom-0 left-0 p-8 text-white w-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-golden-300 text-sm font-medium mb-3 block tracking-wider uppercase">{project.category}</span>
                  <h3 className="text-3xl font-serif mb-3 group-hover:text-golden-200 transition-colors">{project.title}</h3>
                  <p className="text-gray-200 text-lg leading-relaxed max-w-[90%]">{project.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-golden-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm font-medium">View Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="absolute right-0 top-0 bottom-12 w-32 bg-gradient-to-l from-golden-100 to-transparent pointer-events-none"
            style={{ opacity }}
          />
        </div>
      </div>
    </section>
  )
}
