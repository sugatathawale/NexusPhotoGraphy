"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function WeddingStories() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null)

  // Most Popular Weddings Section
  const popularWeddings = [
    {
      id: 1,
      title: "Magical Wedding at Taj Aguada Fort, Goa",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Nestled amidst the stunning landscapes of Goa, where the Arabian Sea kisses golden sands and the vibrant hues of nature meet timeless architectural beauty, Palak and Priya's Gujarati wedding at the Taj Aguada Fort was a celebration that transcended tradition and elegance.",
      readMoreLink: "#",
    },
    {
      id: 2,
      title: "Muslim Wedding in Dubai",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A wedding full of grace, tradition, and quiet elegance—Saba and Usman's three-day celebration in Dubai was the perfect blend of emotion, beauty, and connection. Here's how it all unfolded.",
      readMoreLink: "#",
    },
    {
      id: 3,
      title: "Ritu & Mukkul's Jim Corbett wedding at Manu Maharani",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "When two souls from different worlds unite in love, the result is nothing short of magical. Ritu, a Malayali from Kerala, and Mukkul, a Jain from Delhi, met on a dating app, not knowing that their swipe-right moment would lead to a forever kind of love...",
      readMoreLink: "#",
    },
  ]

  // By Culture Weddings Section
  const cultureWeddings = [
    {
      id: 1,
      title: "Gujarati Weddings",
      image: "/placeholder.svg?height=300&width=300",
      link: "#",
    },
    {
      id: 2,
      title: "Bengali Weddings",
      image: "/placeholder.svg?height=300&width=300",
      link: "#",
    },
    {
      id: 3,
      title: "Maharashtrian Weddings",
      image: "/placeholder.svg?height=300&width=300",
      link: "#",
    },
    {
      id: 4,
      title: "Marwari Weddings",
      image: "/placeholder.svg?height=300&width=300",
      link: "#",
    },
    {
      id: 5,
      title: "South Indian Weddings",
      image: "/placeholder.svg?height=300&width=300",
      link: "#",
    },
    {
      id: 6,
      title: "North Indian Weddings",
      image: "/placeholder.svg?height=300&width=300",
      link: "#",
    },
  ]

  // Destination Weddings Section
  const destinationWeddings = [
    {
      id: 1,
      title: "Ritu & Mukkul's Jim Corbett wedding at Manu Maharani",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "When two souls from different worlds unite in love, the result is nothing short of magical. Ritu, a Malayali from Kerala, and Mukkul, a Jain from Delhi, met on a dating app, not knowing that their swipe-right moment would lead to a forever kind of love...",
      readMoreLink: "#",
    },
    {
      id: 2,
      title: "Kartik & Tanisha : Laxmi Nivas Palace",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "When two souls destined for each other come together, magic happens. This was certainly the case with Kartik and Tanisha, whose wedding at the majestic Laxmi Nivas Palace in Bikaner was a celebration of love, elegance, and royal grandeur. From the picturesque setting to the cultural richness, every detail of this wedding was nothing short of a fairy tale.",
      readMoreLink: "#",
    },
    {
      id: 3,
      title: "Maitri & Aneesh: Cidade De Goa",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Aneesh and Maitri's gorgeous Gujrati wedding at Taj Cidade de Goa took place overlooking the Arabian Sea atop a small hill. A high on emotions wedding which went viral on Instagram...",
      readMoreLink: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F5F0EC] pt-20">
      {/* Most Popular Weddings Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl inline-block">
              <span className="italic">Most Popular</span> Weddings
            </h2>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {popularWeddings.map((wedding) => (
                <div key={wedding.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-64">
                    <Image
                      src={wedding.image || "/placeholder.svg"}
                      alt={wedding.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl mb-3">{wedding.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{wedding.description}</p>
                    <a href={wedding.readMoreLink} className="inline-flex items-center text-gray-800 font-medium">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* By Culture Weddings Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl inline-block">
              <span className="italic">By Culture</span> Weddings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
            {cultureWeddings.map((culture) => (
              <div key={culture.id} className="flex items-center">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src={culture.image || "/placeholder.svg"}
                    alt={culture.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="ml-6">
                  <h3 className="font-playfair text-2xl mb-2">{culture.title}</h3>
                  <a href={culture.link} className="inline-block bg-gray-800 text-white text-sm px-4 py-2 rounded-full">
                    read all blogs
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Weddings Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl inline-block">
              <span className="italic">Destination</span> Weddings
            </h2>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {destinationWeddings.map((wedding) => (
                <div key={wedding.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-64">
                    <Image
                      src={wedding.image || "/placeholder.svg"}
                      alt={wedding.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl mb-3">{wedding.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{wedding.description}</p>
                    <a href={wedding.readMoreLink} className="inline-flex items-center text-gray-800 font-medium">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
