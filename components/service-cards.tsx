"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Camera, Video, Heart, Star, Clock, Map, Gift, Users } from "lucide-react"

const services = [
  {
    title: "Luxury Wedding Photography",
    description: "Timeless moments captured with artistic excellence. Our signature style blends candid emotions with creative compositions.",
    icon: Camera,
    image: "/images/service1.jpg",
    features: ["Full Day Coverage", "Artistic Direction", "Premium Album"]
  },
  {
    title: "Cinematic Films",
    description: "Your love story crafted into a cinematic masterpiece. Hollywood-style wedding films that tell your unique journey.",
    icon: Video,
    image: "/images/service2.jpg",
    features: ["4K Quality", "Drone Shots", "Same Day Edit"]
  },
  {
    title: "Pre-Wedding Stories",
    description: "Creative pre-wedding shoots that showcase your personality. From romantic sunsets to urban adventures.",
    icon: Heart,
    image: "/images/service3.jpg",
    features: ["Multiple Locations", "Concept Planning", "Style Guide"]
  },
  {
    title: "Destination Weddings",
    description: "Specialists in capturing destination weddings. From beach ceremonies to palace celebrations.",
    icon: Map,
    image: "/images/service4.jpg",
    features: ["Travel Included", "Location Scouting", "Extended Coverage"]
  },
  {
    title: "Premium Experience",
    description: "VIP treatment for your special day. Dedicated team ensuring every moment is perfectly captured.",
    icon: Star,
    image: "/images/service5.jpg",
    features: ["Dedicated Team", "Priority Editing", "Luxury Album"]
  },
  {
    title: "Quick Delivery",
    description: "Fast turnaround without compromising quality. Get your memories delivered in record time.",
    icon: Clock,
    image: "/images/service6.jpg",
    features: ["48hr Previews", "Express Editing", "Online Gallery"]
  },
  {
    title: "Family Portraits",
    description: "Beautiful family portraits that capture the essence of your relationships and celebrations.",
    icon: Users,
    image: "/images/service7.jpg",
    features: ["Group Shots", "Natural Poses", "Print Ready"]
  },
  {
    title: "Special Packages",
    description: "Customized packages to suit your unique requirements and budget. Special offers for select dates.",
    icon: Gift,
    image: "/images/service8.jpg",
    features: ["Flexible Plans", "Added Value", "Custom Options"]
  }
]

export default function ServiceCards() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-cream-800 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-cream-600 max-w-3xl mx-auto">
            Discover our range of premium photography and videography services, 
            crafted to make your wedding memories truly extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-cream/40 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-golden-500 p-3 rounded-full">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-serif text-cream-800 mb-3 group-hover:text-golden-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-golden-500 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-golden-400 to-golden-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-golden-500 text-white rounded-full hover:bg-golden-600 transition-colors text-lg shadow-lg"
          >
            Explore All Services
          </motion.button>
        </div>
      </div>
    </section>
  )
} 