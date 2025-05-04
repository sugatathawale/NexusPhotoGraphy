"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Play, Pause } from "lucide-react"

const videoCards = [
  {
    id: 1,
    title: "Beachside Wedding",
    description: "A romantic celebration by the ocean",
    videoUrl: "/videos/wedding1.mp4",
    thumbnailUrl: "/images/gallery1.jpg",
  },
  {
    id: 2,
    title: "Traditional Ceremony",
    description: "Cultural elegance and traditions",
    videoUrl: "/videos/wedding2.mp4",
    thumbnailUrl: "/images/gallery2.jpg",
  },
  {
    id: 3,
    title: "Garden Reception",
    description: "Love blooms in nature",
    videoUrl: "/videos/wedding3.mp4",
    thumbnailUrl: "/images/gallery3.jpg",
  },
  {
    id: 4,
    title: "Urban Romance",
    description: "City lights and love stories",
    videoUrl: "/videos/wedding4.mp4",
    thumbnailUrl: "/images/gallery4.jpg",
  },
  {
    id: 5,
    title: "Destination Wedding",
    description: "Adventure meets romance",
    videoUrl: "/videos/wedding5.mp4",
    thumbnailUrl: "/images/gallery5.jpg",
  },
]

export default function OurWorkVideo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState<number | null>(null)
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({})

  const handleScroll = () => {
    if (isPlaying !== null && videoRefs.current[isPlaying]) {
      videoRefs.current[isPlaying].pause()
      setIsPlaying(null)
    }
  }

  const togglePlay = (id: number) => {
    if (isPlaying === id) {
      videoRefs.current[id].pause()
      setIsPlaying(null)
    } else {
      if (isPlaying !== null && videoRefs.current[isPlaying]) {
        videoRefs.current[isPlaying].pause()
      }
      videoRefs.current[id].play()
      setIsPlaying(id)
    }
  }

  const setVideoRef = (id: number) => (el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current[id] = el
    }
  }

  return (
    <section className="py-16 bg-golden-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4 drop-shadow-golden">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the magic of our wedding films. Each story uniquely crafted, each moment perfectly captured.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-0 pb-8 snap-x snap-mandatory hide-scrollbar"
          onScroll={handleScroll}
          style={{ scrollbarWidth: "none" }}
        >
          {videoCards.map((card) => (
            <motion.div
              key={card.id}
              className="min-w-[400px] h-[600px] relative flex-shrink-0 snap-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <video
                ref={setVideoRef(card.id)}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                poster={card.thumbnailUrl}
              >
                <source src={card.videoUrl} type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                  <h3 className="text-2xl font-serif mb-2">{card.title}</h3>
                  <p className="text-sm mb-4 text-gray-200">{card.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => togglePlay(card.id)}
                    className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-colors duration-300"
                  >
                    {isPlaying === card.id ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-800 italic font-serif text-2xl"
          >
            "Every moment tells a story, every frame captures an emotion."
          </motion.p>
        </div>
      </div>
    </section>
  )
}
