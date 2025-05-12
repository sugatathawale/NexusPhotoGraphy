"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import work1 from '../src/work1.jpg'
import work2 from '../src/work2.jpg'
import work3 from '../src/work3.jpg'
import work4 from '../src/work4.jpg'
import work5 from '../src/work5.jpg'

interface Project {
  id: string
  title: string
  description: string
  image: any
  category: string
}

const featuredProjects: Project[] = [
  {
    id: 'project-1',
    title: 'Sarah & John',
    description: 'A beautiful wedding in Mumbai',
    image: work1,
    category: 'Wedding'
  },
  {
    id: 'project-2',
    title: 'Priya & Rahul',
    description: 'Pre-wedding shoot in Delhi',
    image: work2,
    category: 'Pre-Wedding'
  },
  {
    id: 'project-3',
    title: 'Maya & Arjun',
    description: 'Engagement ceremony in Goa',
    image: work3,
    category: 'Engagement'
  },
  {
    id: 'project-4',
    title: 'Zara & Kabir',
    description: 'Destination wedding in Udaipur',
    image: work4,
    category: 'Wedding'
  },
  {
    id: 'project-5',
    title: 'Anita & Raj',
    description: 'Pre-wedding shoot in Jaipur',
    image: work5,
    category: 'Pre-Wedding'
  }
]

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section className="py-16 bg-[#F5F0EC]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-playfair mb-4">Featured Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of beautiful moments we've captured for couples just like you.
          </p>
        </motion.div>

        <div className="relative overflow-x-hidden">
          <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                className="min-w-[350px] md:min-w-[450px] h-[600px] relative rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 snap-center group"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl font-playfair mb-2">{project.title}</h3>
                  <p className="text-sm opacity-80">{project.description}</p>
                  <span className="inline-block mt-4 text-sm bg-white/20 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="relative w-full max-w-5xl aspect-[3/2] rounded-lg overflow-hidden"
            layoutId={`project-${selectedProject.id}`}
          >
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              fill
              className="object-contain"
              priority
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedProject(null)
              }}
              className="absolute top-4 right-4 text-white text-xl bg-black/50 w-10 h-10 rounded-full flex items-center justify-center"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
