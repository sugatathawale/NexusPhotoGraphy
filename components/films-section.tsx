"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import work1 from '../src/work1.jpg'
import work2 from '../src/work2.jpg'
import work3 from '../src/work3.jpg'
import work4 from '../src/work4.jpg'
import work5 from '../src/work5.jpg'
import work6 from '../src/work6.jpg'

const films = [
  {
    id: 1,
    title: "Dhruv & Pippa",
    image: work1,
  },
  {
    id: 2,
    title: "AVI VAI",
    image:work2,
  },
  {
    id: 3,
    title: "Deewangi",
    image:work3,
  },
  {
    id: 4,
    title: "Viggothagged",
    image: work4,
  },
  {
    id: 5,
    title: "Rishi & Meera",
    image: work5,
  },
  {
    id: 5,
    title: "Rishi & Meera",
    image: work6,
  },
]

// Create an extended array for infinite scroll effect
const extendedFilms = [...films, ...films, ...films]

export default function FilmsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const startAutoScroll = async () => {
      while (!isHovered) {
        await controls.start({
          x: [`0%`, `-${100 / 3}%`], // Only scroll through one set of films
          transition: {
            duration: 15, // Increased duration for slower scroll
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          },
        })
      }
    }

    if (!isHovered) {
      startAutoScroll()
    } else {
      controls.stop()
    }
  }, [isHovered, controls])

  const nextSlide = () => {
    if (currentIndex < films.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(films.length - 1)
    }
  }

  return (
    <section className="py-16 bg-[#b9a58f] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-[#3c3c3c] mb-2">Beautiful Weddings,</h2>
          <h3 className="text-3xl md:text-5xl font-serif italic text-[#3c3c3c] border-b border-[#3c3c3c]/30 inline-block pb-2">
            Breathtaking Films
          </h3>
        </motion.div>

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 p-3 rounded-full text-white backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <div
            className="overflow-hidden"
            ref={carouselRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="flex"
              animate={controls}
              drag="x"
              dragConstraints={carouselRef}
              style={{ cursor: isHovered ? "grab" : "auto" }}
            >
              {extendedFilms.map((film, index) => (
                <motion.div
                  key={`${film.id}-${index}`}
                  className="w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[25vw] h-[70vh] flex-shrink-0 px-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative group h-full overflow-hidden rounded-md">
                    <div className="absolute top-4 left-4 bg-black/10 px-3 py-1 rounded-full text-[#3c3c3c] text-xs z-10 backdrop-blur-sm font-light">
                      A Nexus Film
                    </div>
                    <Image
                      src={film.image || "/placeholder.svg?height=800&width=600"}
                      alt={film.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Title overlay for all states */}
                    <div className="absolute inset-0 flex flex-col justify-end items-center pb-16 px-4">
                      <h3 className="text-3xl md:text-4xl font-serif text-white drop-shadow-md mb-6 text-center">
                        {film.title}
                      </h3>
                      <Button
                        variant="outline"
                        className="border border-white text-white hover:bg-white hover:text-black rounded-full px-6 py-1 text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                      >
                        Watch Film
                      </Button>
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 p-3 rounded-full text-white backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
