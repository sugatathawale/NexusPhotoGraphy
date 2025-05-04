"use client"

import { motion } from "framer-motion"
import { Camera, Heart, Map, Award } from "lucide-react"

const stats = [
  {
    id: 1,
    icon: <Camera className="w-8 h-8 text-golden-500" />,
    value: "600+",
    label: "Weddings Captured",
  },
  {
    id: 2,
    icon: <Map className="w-8 h-8 text-golden-500" />,
    value: "15+",
    label: "Countries Visited",
  },
  {
    id: 3,
    icon: <Award className="w-8 h-8 text-golden-500" />,
    value: "12",
    label: "Industry Awards",
  },
  {
    id: 4,
    icon: <Heart className="w-8 h-8 text-golden-500" />,
    value: "100%",
    label: "Happy Couples",
  },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <motion.div
                className="text-4xl font-bold text-gray-800 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
