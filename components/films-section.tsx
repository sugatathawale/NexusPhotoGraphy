"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import work1 from '../src/work1.jpg'
import work2 from '../src/work2.jpg'
import work3 from '../src/work3.jpg'
import work4 from '../src/work4.jpg'

import work6 from '../src/work6.jpg'

// CSS styles directly in the component
const styles = {
  container: "bg-[#b9a58f] min-h-screen py-16",
  heading: "text-5xl font-serif text-center mb-4 text-white",
  subheading: "text-5xl font-serif italic underline text-center mb-16 text-white",
  sectionHeading: "text-3xl font-serif text-center mb-12 text-white",
  carouselContainer: "relative overflow-hidden",
  carouselTrack: "flex gap-6 pl-4",
  filmCard: "relative min-w-[350px] aspect-[3/4] rounded-lg overflow-hidden shadow-lg cursor-pointer group",
  filmImage: "object-cover transition-transform duration-700 group-hover:scale-110",
  filmOverlay: "absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300",
  filmBrand: "absolute top-6 left-6 text-white text-sm",
  filmTitle: "absolute bottom-24 left-0 w-full p-6 text-white",
  filmTitleText: "text-4xl font-serif mb-1 italic",
  filmButton: "absolute bottom-6 left-0 w-full flex justify-center",
  watchButton:
    "px-6 py-2 border border-white text-white text-sm rounded-full hover:bg-white hover:text-black transition-colors duration-300",
  navButton:
    "absolute top-1/2 transform -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md w-10 h-10 flex items-center justify-center hover:bg-white transition-colors duration-300",
  leftButton: "left-4",
  rightButton: "right-4",
  modalOverlay: "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4",
  modalContainer: "relative w-full max-w-6xl aspect-video",
  closeButton: "absolute -top-10 right-0 text-white text-xl p-2",
  iframe: "w-full h-full",
}

interface Film {
  id: string
  title: string
  thumbnail: string
  videoId: string
  category: string
  date: string
}

const films: Film[] = [
  {
    id: "film-1",
    thumbnail: work6,
    videoId: "FSgpdIf_ebc",
    category: "Wedding Film",
    date: "March 2024",
  },
  {
    id: "film-2",
    thumbnail: work4,
    videoId: "FSgpdIf_ebc",
    category: "Pre-Wedding",
    date: "February 2024",
  },
  {
    id: "film-3",
    thumbnail: work1,
    videoId: "FSgpdIf_ebc",
    category: "Wedding Film",
    date: "January 2024",
  },
  {
    id: "film-4",
    thumbnail: work2,
    videoId: "FSgpdIf_ebc",
    category: "Engagement",
    date: "December 2023",
  },
]

// Create an extended array for infinite scroll effect
const extendedFilms = [...films, ...films, ...films]

export default function FilmsSection() {
  const [selectedFilm, setSelectedFilm] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    if (isHovered) {
      controls.stop()
    } else {
      const animate = async () => {
        await controls.start({
          x: [0, -3000],
          transition: {
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 60, // Slower scrolling speed
              ease: "linear",
            },
          },
        })
      }
      animate()
    }

    return () => {
      controls.stop()
    }
  }, [isHovered, controls])

  const VideoModal = ({ videoId }: { videoId: string }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.modalOverlay}
      onClick={() => setSelectedFilm(null)}
    >
      <div className={styles.modalContainer}>
        <button
          onClick={(e) => {
            e.stopPropagation()
            setSelectedFilm(null)
          }}
          className={styles.closeButton}
        >
          ✕
        </button>
        <iframe
          className={styles.iframe}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  )

  return (
    <div className={styles.container}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <h1 className={styles.heading}>Beautiful Weddings,</h1>
        <h2 className={styles.subheading}>Breathtaking Films</h2>

        {/* Horizontal Scrolling Films Section */}
        <div className={styles.carouselContainer}>
          <h3 className={styles.sectionHeading}>Our Films</h3>

          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={containerRef}
          >
            <motion.div className={styles.carouselTrack} animate={controls} initial={{ x: 0 }}>
              {extendedFilms.map((film, index) => (
                <motion.div
                  key={`${film.id}-${index}`}
                  className={styles.filmCard}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedFilm(film.videoId)}
                >
                  <Image
                    src={film.thumbnail || "/placeholder.svg?height=600&width=450"}
                    alt={film.title}
                    fill
                    className={styles.filmImage}
                  />
                  <div className={styles.filmOverlay}>
                    <div className={styles.filmBrand}>A KnotsbyAMP Film</div>
                    <div className={styles.filmTitle}>
                      <h3 className={styles.filmTitleText}>{film.title}</h3>
                    </div>
                    <div className={styles.filmButton}>
                      <button className={styles.watchButton}>See More</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button
            className={`${styles.navButton} ${styles.leftButton}`}
            onClick={() => {
              controls.start({
                x: (controls.get("x") as number) + 350,
                transition: { duration: 0.5 },
              })
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            className={`${styles.navButton} ${styles.rightButton}`}
            onClick={() => {
              controls.start({
                x: (controls.get("x") as number) - 350,
                transition: { duration: 0.5 },
              })
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedFilm && <VideoModal videoId={selectedFilm} />}
    </div>
  )
}
