"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul",
    location: "Mumbai",
    quote:
      "Nexus captured our wedding day perfectly. Every emotion, every smile, every tear - they didn't miss a single moment. The photos and videos are beyond our expectations!",
    image: "/images/testimonial1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Ananya & Vikram",
    location: "Delhi",
    quote:
      "Working with the Nexus team was the best decision we made for our wedding. Their creativity, professionalism, and attention to detail made our special day even more magical.",
    image: "/images/testimonial2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Meera & Arjun",
    location: "Goa",
    quote:
      "We are absolutely in love with our wedding photos and film! Nexus has a unique way of telling stories through their lens. They captured not just images, but emotions and memories.",
    image: "/images/testimonial3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha & Karan",
    location: "Udaipur",
    quote:
      "From our first meeting to the final delivery, Nexus exceeded our expectations. They have an incredible eye for detail and made us feel so comfortable throughout the process.",
    image: "/images/testimonial4.jpg",
    rating: 5,
  },
]

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4 drop-shadow-golden">What Couples Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the couples whose love stories we've had the privilege to
            document.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-6 items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeIndex === testimonial.id - 1 ? 1 : 0.5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-golden-500 text-golden-500" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-golden-500" : "bg-gray-300"}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
