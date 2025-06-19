"use client"
import Image from "next/image"
import type React from "react"

import { motion } from "framer-motion"
import work1 from  "../../src/work1.jpg"
import work2 from  "../../src/work2.jpg"
// import work3 from "../../src/work3.jpg"
import couple4 from "../../src/work9.jpg"
import couple5 from "../../src/work4.jpg"
import couple6 from "../../src/potrait/pot3.jpg"
import couple7 from "../../src/potrait/pot5.jpg"
import couple8 from "../../src/flimcard/img2.jpg"
import couple9 from "../../src/flimcard/img5.jpg"
import couple10 from "../../src/flimcard/img3.jpg"
import work6 from "../../public/images/work6.jpg"
import work9 from "../../public/images/work9.jpg"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { useRef } from "react"

export default function CoupleShoot() {
    const galleryImages = [
        {
            id: 1,
            src: work1,
            title: "Beach Sunset Love",
            location: "Juhu Beach, Mumbai",
        },
        {
            id: 2,
            src: couple4,
            title: "Urban Romance",
            location: "South Mumbai",
        },
        {
            id: 3,
            src: work2,
            title: "Garden of Love",
            location: "Hanging Gardens",
        },
        {
            id: 4,
            src: couple5,
            title: "Monsoon Magic",
            location: "Marine Drive",
        },
        {
            id: 5,
            src: couple6,
            title: "Architectural Romance",
            location: "Gateway of India",
        },
        {
            id: 6,
            src: couple7,
            title: "Sunset Stories",
            location: "Bandstand",
        },
        {
            id: 7,
            src: couple8,
            title: "Royal Palace Affair",
            location: "Udaipur Palace",
        },
        {
            id: 8,
            src: couple9,
            title: "Moonlight Serenade",
            location: "Worli Sea Face",
        },
        {
            id: 9,
            src: couple10,
            title: "Twilight Embrace",
            location: "Bandra Worli Sea Link",
        },
    ]

    // New photography styles data
    const photographyStyles = [
        {
            id: 1,
            src: work1,
            title: "Classic Elegance",
            description: "Timeless poses and compositions that never go out of style",
        },
        {
            id: 2,
            src: work2,
            title: "Candid Moments",
            description: "Authentic, unposed interactions that capture real emotions",
        },
        {
            id: 3,
            src: work1,
            title: "Artistic Vision",
            description: "Creative compositions with unique perspectives and lighting",
        },
        {
            id: 4,
            src: work1,
            title: "Vintage Romance",
            description: "Nostalgic aesthetics with warm tones and dreamy atmospheres",
        },
        {
            id: 5,
            src: work1,
            title: "Dramatic Portraits",
            description: "Bold contrasts and striking poses that make a statement",
        },
        {
            id: 6,
            src: work2,
            title: "Natural Light",
            description: "Soft, flattering illumination that enhances natural beauty",
        },
    ]

    const scrollRef = useRef<HTMLDivElement>(null)
    const stylesScrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right", ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollBy({
                left: direction === "left" ? -350 : 350,
                behavior: "smooth",
            })
        }
    }

    return (
        <div className="min-h-screen bg-[#F5F0EC] pt-24 sm:pt-32">
            {/* Hero Section */}

            {/* Introduction Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-playfair text-3xl md:text-4xl mb-8">Pre-Wedding & Couple Photography</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-12">
                        Your love story is unique, and it deserves to be told in a way that's as special as you are. Our pre-wedding
                        shoots are more than just photos - they're an experience that lets you celebrate your love while we capture
                        those genuine, candid moments between you.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-12 sm:py-20 px-2 sm:px-4 bg-[#D3C4B5]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-16">Featured Love Stories</h2>
                    <div className="relative">
                        <div className="flex space-x-4 sm:space-x-8 overflow-x-auto pb-6 sm:pb-8 scrollbar-hide snap-x snap-mandatory" ref={scrollRef}>
                            {galleryImages.map((image) => (
                                <motion.div
                                    key={image.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="group relative flex-none w-44 sm:w-56 md:w-64 lg:w-80 aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl cursor-pointer snap-center min-w-0"
                                >
                                    <Image
                                        src={image.src || "/placeholder.svg"}
                                        alt={image.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                                        <div className="p-3 sm:p-6">
                                            <h3 className="font-playfair text-lg sm:text-2xl text-white mb-1 sm:mb-2 drop-shadow-lg truncate">{image.title}</h3>
                                            <p className="text-white text-xs sm:text-sm drop-shadow-md truncate">{image.location}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <button
                            onClick={() => scroll("left", scrollRef)}
                            className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg z-10"
                        >
                            <FaChevronLeft className="text-lg sm:text-2xl text-[#36302a]" />
                        </button>
                        <button
                            onClick={() => scroll("right", scrollRef)}
                            className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg z-10"
                        >
                            <FaChevronRight className="text-lg sm:text-2xl text-[#36302a]" />
                        </button>
                    </div>
                </div>
            </section>


            {/* Packages Section */}
            <section className="py-20 px-4 bg-[#D3C4B5]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-playfair text-3xl md:text-4xl text-center mb-16">Our Signature Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-8 rounded-lg shadow-lg"
                        >
                            <h3 className="font-playfair text-2xl mb-4">Location Scouting</h3>
                            <p className="text-gray-700">
                                We help you choose the perfect locations that reflect your personality and style, from urban landscapes
                                to natural settings.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-8 rounded-lg shadow-lg"
                        >
                            <h3 className="font-playfair text-2xl mb-4">Styling Consultation</h3>
                            <p className="text-gray-700">
                                Get expert advice on outfits, colors, and accessories to ensure your photos look timeless and elegant.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white p-8 rounded-lg shadow-lg"
                        >
                            <h3 className="font-playfair text-2xl mb-4">Premium Editing</h3>
                            <p className="text-gray-700">
                                Each photo is carefully edited to enhance its natural beauty while maintaining authenticity and emotion.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* NEW Photography Styles Section */}
            <section className="py-12 sm:py-20 px-2 sm:px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-16">Our Photography Styles</h2>
                    <div className="relative">
                        <div
                            className="flex space-x-4 sm:space-x-8 overflow-x-auto pb-6 sm:pb-8 scrollbar-hide snap-x snap-mandatory"
                            ref={stylesScrollRef}
                        >
                            {photographyStyles.map((style) => (
                                <motion.div
                                    key={style.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="group relative flex-none w-60 sm:w-72 md:w-96 rounded-xl overflow-hidden shadow-lg sm:shadow-xl cursor-pointer snap-center bg-white min-w-0"
                                >
                                    <div className="aspect-[16/9] relative">
                                        <Image
                                            src={style.src || "/placeholder.svg"}
                                            alt={style.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-3 sm:p-6">
                                        <h3 className="font-playfair text-lg sm:text-2xl text-[#36302a] mb-1 sm:mb-3 truncate">{style.title}</h3>
                                        <p className="text-gray-700 text-xs sm:text-base line-clamp-2">{style.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <button
                            onClick={() => scroll("left", stylesScrollRef)}
                            className="absolute left-1 top-1/3 -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg z-10"
                        >
                            <FaChevronLeft className="text-lg sm:text-2xl text-[#36302a]" />
                        </button>
                        <button
                            onClick={() => scroll("right", stylesScrollRef)}
                            className="absolute right-1 top-1/3 -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg z-10"
                        >
                            <FaChevronRight className="text-lg sm:text-2xl text-[#36302a]" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-4 bg-[#36302a] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-playfair text-3xl md:text-4xl mb-6">Ready to Create Your Love Story?</h2>
                    <p className="text-lg mb-8">
                        Let's capture the magic of your relationship in stunning photographs that you'll cherish forever.
                    </p>
      <a
  href="https://api.whatsapp.com/send?phone=917083456134&text=Hi%2C%20I'm%20interested%20in%20booking%20a%20session!"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-[#D3C4B5] text-[#36302a] px-8 py-3 rounded-full font-medium hover:bg-[#E5D6C7] transition-colors">
    Book Your Session
  </button>
</a>

                </div>
            </section>
        </div>
    )
}
