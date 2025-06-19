"use client"

import { motion } from "framer-motion"
import { Camera, Heart, Map, Award } from "lucide-react"

const stats = [
  {
    id: 1,
    icon: <Camera className="w-8 h-8 text-golden-500" />,
    value: "100+",
    label: "Weddings Captured",
  },
  {
    id: 2,
    icon: <Map className="w-8 h-8 text-golden-500" />,
    value: "10+",
    label: "Countries Visited",
  },
  {
    id: 3,
    icon: <Award className="w-8 h-8 text-golden-500" />,
    value: "10",
    label: "Industry Awards",
  },
  {
    id: 4,
    icon: <Heart className="w-8 h-8 text-golden-500" />,
    value: "100%",
    label: "Happy Couples",
  },
]

const cardVariants = {
  hidden: {
    opacity: 0,
    y: -100,
    scale: 0.8,
    rotate: -15
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: i * 0.2,
      duration: 0.8
    }
  }),
  hover: {
    scale: 1.05,
    rotate: [0, -5, 5, -5, 0],
    transition: {
      duration: 0.3,
      rotate: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
  hover: {
    rotate: 360,
    transition: { duration: 0.6 }
  }
}

const numberVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: i * 0.3 + 0.5,
      duration: 0.5
    }
  })
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      delay: i * 0.3 + 0.8
    }
  })
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-cream-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="relative bg-cream-100 p-6 rounded-2xl shadow-lg transform-gpu"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Decorative background elements */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-golden-100/20 to-transparent rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              />

              <div className="relative z-10 text-center">
                {/* Icon with animation */}
                <motion.div
                  className="flex justify-center mb-4"
                  variants={iconVariants}
                >
                  {stat.icon}
                </motion.div>

                {/* Number with counting animation */}
                <motion.div
                  className="text-4xl font-bold text-gray-800 mb-2"
                  variants={numberVariants}
                  custom={index}
                >
                  {stat.value}
                </motion.div>

                {/* Label with slide-up animation */}
                <motion.div
                  className="text-gray-600"
                  variants={textVariants}
                  custom={index}
                >
                  {stat.label}
                </motion.div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-golden-500 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-golden-500 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-golden-500 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-golden-500 rounded-br-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
