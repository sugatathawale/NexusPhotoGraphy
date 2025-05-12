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

interface Film {
  id: string;
  title: string;
  thumbnail: string;
  videoId: string;
  category: string;
  date: string;
}

const films: Film[] = [
  {
    id: 'film-1',
    title: 'Riya & Aditya',
    thumbnail: '/images/films/1.jpg',
    videoId: 'FSgpdIf_ebc',
    category: 'Wedding Film',
    date: 'March 2024'
  },
  {
    id: 'film-2',
    title: 'Meera & Karan',
    thumbnail: '/images/films/2.jpg',
    videoId: 'FSgpdIf_ebc',
    category: 'Pre-Wedding',
    date: 'February 2024'
  },
  {
    id: 'film-3',
    title: 'Zara & Kabir',
    thumbnail: '/images/films/3.jpg',
    videoId: 'FSgpdIf_ebc',
    category: 'Wedding Film',
    date: 'January 2024'
  },
  {
    id: 'film-4',
    title: 'Anita & Raj',
    thumbnail: '/images/films/4.jpg',
    videoId: 'FSgpdIf_ebc',
    category: 'Engagement',
    date: 'December 2023'
  }
]

// Create an extended array for infinite scroll effect
const extendedFilms = [...films, ...films, ...films]

export default function FilmsSection() {
  const [selectedFilm, setSelectedFilm] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined

    if (isHovered) {
      controls.stop()
    } else {
      const animate = async () => {
        await controls.start({
          x: [0, -1000],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        })
      }
      animate()
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isHovered, controls])

  const VideoModal = ({ videoId }: { videoId: string }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={() => setSelectedFilm(null)}
    >
      <div className="relative w-full max-w-6xl aspect-video">
        <button
          onClick={(e) => {
            e.stopPropagation()
            setSelectedFilm(null)
          }}
          className="absolute -top-10 right-0 text-white text-xl p-2"
        >
          ✕
        </button>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  )

  return (
    <div className="py-16 bg-[#F5F0EC]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center mb-16">Recent Films</h2>

        {/* Scrolling Films Section */}
        <div
          ref={containerRef}
          className="relative overflow-hidden mb-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-6"
            animate={controls}
            drag="x"
            dragConstraints={containerRef}
          >
            {[...films, ...films].map((film, index) => (
              <motion.div
                key={`${film.id}-${index}`}
                className="relative min-w-[300px] md:min-w-[400px] aspect-video rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedFilm(film.videoId)}
              >
                <Image
                  src={film.thumbnail}
                  alt={film.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-playfair mb-2">{film.title}</h3>
                  <p className="text-sm opacity-80">{film.category} • {film.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Most Popular Section */}
        <div>
          <h3 className="text-3xl font-playfair text-center mb-12">Most Popular</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {films.slice(0, 3).map((film) => (
              <motion.div
                key={film.id}
                className="relative aspect-video rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedFilm(film.videoId)}
              >
                <Image
                  src={film.thumbnail}
                  alt={film.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-white border-b-6 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-playfair mb-1">{film.title}</h3>
                  <p className="text-sm opacity-80">{film.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedFilm && <VideoModal videoId={selectedFilm} />}
    </div>
  )
}
