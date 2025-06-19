"use client"

import { useEffect, useState, useCallback } from "react"
import Image, { type StaticImageData } from "next/image"
import work1 from  "../src/flimcard/img1.jpg"
import work2 from  "../src/flimcard/img2.jpg"
import work3 from  "../src/flimcard/img3.jpg"
import work4 from  "../src/flimcard/img4.webp"
import work5 from   "../src/flimcard/img5.jpg"
import work6 from  "../src/flimcard/img6.jpg"
import work7 from  "../src/flimcard/img7.jpg"
import work8 from  "../src/flimcard/img8.jpg"
interface WeddingStory {
  title: string
  description: string
  imageUrl: StaticImageData | string
  location: string
  date: string
  tagline?: string
}

const weddingStories: WeddingStory[] = [
  {
    title: "Sweet Together",
    description: "A celebration of love filled with joy, laughter, and golden moments that will last forever.",
    imageUrl:work1,
    location: "Mumbai, India",
    date: "March 2024",
    tagline: "Sweet Together",
  },
  {
    title: "Eclipsed Hearts",
    description: "Where two souls unite under the stars, creating memories that will shine forever.",
    imageUrl: work2,
    location: "Dubai, UAE",
    date: "February 2024",
    tagline: "Eclipsed Hearts",
  },
  {
    title: "Love & Sparkles",
    description: "A magical celebration where every moment sparkled with pure love and joy.",
    imageUrl: work3,
    location: "Goa, India",
    date: "January 2024",
    tagline: "Love & Sparkles",
  },
    {
    title: "Love",
    description: "A magical celebration where every moment sparkled with pure love and joy.",
    imageUrl: work4,
    location: "Goa, India",
    date: "January 2024",
    tagline: "Love & Sparkles",
  },
    {
    title: "Love & Sparkles",
    description: "A magical celebration where every moment sparkled with pure love and joy.",
    imageUrl: work5,
    location: "Goa, India",
    date: "January 2024",
    tagline: "Love & Sparkles",
  },
  {
    title: "Glowing in Forever",
    description: "Their love story, written in the soft glow of forever, captured in timeless frames.",
    imageUrl: work6,
    location: "Delhi, India",
    date: "December 2023",
    tagline: "Glowing in Forever",
  },
  {
    title: "Dusk Magic",
    description: "As the sun set on their special day, magic filled the air with endless possibilities.",
    imageUrl:work7,
    location: "Udaipur, India",
    date: "November 2023",
    tagline: "Dusk Magic",
  },
    {
    title: " Magic",
    description: "As the sun set on their special day, magic filled the air with endless possibilities.",
    imageUrl:work8,
    location: "Udaipur, India",
    date: "November 2023",
    tagline: "Dusk Magic",
  },
]

export default function WeddingStories() {
  const [activeIndex, setActiveIndex] = useState(2)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev + 1) % weddingStories.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const getCardStyle = (index: number) => {
    const total = weddingStories.length
    const distance = (index - activeIndex + total) % total
    const relativePos = distance > total / 2 ? distance - total : distance

    // Removed rotation - all cards are now straight (0deg)
    const positions = {
      [-2]: { x: "-32rem", y: "0", rotate: "0deg", scale: "0.85", zIndex: 1 },
      [-1]: { x: "-16rem", y: "0", rotate: "0deg", scale: "0.9", zIndex: 2 },
      [0]: { x: "0", y: "0", rotate: "0deg", scale: "1", zIndex: 5 },
      [1]: { x: "16rem", y: "0", rotate: "0deg", scale: "0.9", zIndex: 2 },
      [2]: { x: "32rem", y: "0", rotate: "0deg", scale: "0.85", zIndex: 1 },
    } as const

    return (
      positions[relativePos as keyof typeof positions] || {
        x: "0",
        y: "-100%",
        rotate: "0deg",
        scale: "0.8",
        zIndex: 0,
      }
    )
  }

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#36302a] font-light tracking-wide">
            Nexus PhotoGraphy
          </h2>
        </div>

        <div className="relative">
          <div className="flex justify-center items-center min-h-[700px] relative perspective-[1200px]">
            {weddingStories.map((story, index) => {
              const position = getCardStyle(index)
              return (
                <div
                  key={index}
                  className={`absolute w-[320px] md:w-[450px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl
                    transition-all duration-700 ease-out cursor-pointer
                    hover:scale-[1.02] hover:shadow-3xl
                    ${isTransitioning ? "" : "hover:z-10"}`}
                  style={{
                    transform: `translateX(${position.x}) translateY(${position.y}) rotate(${position.rotate}) scale(${position.scale})`,
                    zIndex: position.zIndex,
                    transformStyle: "preserve-3d",
                    opacity:
                      Math.abs(index - activeIndex) <= 2 ||
                      Math.abs((index - activeIndex + weddingStories.length) % weddingStories.length) <= 2
                        ? 1
                        : 0,
                  }}
                >
                  <div className="relative w-full h-full group">
                    <Image
                      src={story.imageUrl || "/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 320px, 450px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-between p-8 text-white">
                      <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-serif tracking-wider font-light">{story.tagline}</h3>
                      </div>
                      <button
                        className="px-10 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 
                        text-white text-sm tracking-wider hover:bg-white/30 transition-all duration-300 mt-auto
                        group-hover:bg-white/30"
                      >
                        Click Here
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {weddingStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                  ${index === activeIndex ? "bg-[#E75480] w-3 h-3" : "bg-gray-300/50 hover:bg-[#E75480]/30"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
