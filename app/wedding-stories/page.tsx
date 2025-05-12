'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function WeddingStories() {
    const [selectedStory, setSelectedStory] = useState<number | null>(null);

    const stories = [
        {
            id: 1,
            title: "Anisha & Akshay",
            location: "The Taj Mahal Palace, Mumbai",
            date: "December 2023",
            coverImage: "/images/stories/story1.jpg",
            description: "A beautiful blend of traditional and modern celebrations",
            gallery: [
                "/images/stories/story1-1.jpg",
                "/images/stories/story1-2.jpg",
                "/images/stories/story1-3.jpg",
                "/images/stories/story1-4.jpg"
            ]
        },
        {
            id: 2,
            title: "Priya & Rahul",
            location: "Udaipur Palace",
            date: "November 2023",
            coverImage: "/images/stories/story2.jpg",
            description: "Royal wedding amidst the lakes of Udaipur",
            gallery: [
                "/images/stories/story2-1.jpg",
                "/images/stories/story2-2.jpg",
                "/images/stories/story2-3.jpg",
                "/images/stories/story2-4.jpg"
            ]
        },
        {
            id: 3,
            title: "Maya & Arjun",
            location: "Goa Beachfront",
            date: "October 2023",
            coverImage: "/images/stories/story3.jpg",
            description: "Sunset beach wedding with intimate moments",
            gallery: [
                "/images/stories/story3-1.jpg",
                "/images/stories/story3-2.jpg",
                "/images/stories/story3-3.jpg",
                "/images/stories/story3-4.jpg"
            ]
        },
        // Add more stories as needed
    ];

    const StoryModal = ({ story, onClose }: { story: typeof stories[0], onClose: () => void }) => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 overflow-y-auto"
        >
            <div className="min-h-screen px-4 py-12">
                <button
                    onClick={onClose}
                    className="fixed top-8 right-8 text-white text-4xl z-50 hover:opacity-75 transition-opacity"
                >
                    ×
                </button>

                <div className="max-w-6xl mx-auto text-white">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-playfair text-4xl md:text-6xl text-center mb-4"
                    >
                        {story.title}
                    </motion.h2>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-center mb-12"
                    >
                        <p className="text-xl mb-2">{story.location}</p>
                        <p className="text-gray-400">{story.date}</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {story.gallery.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="relative aspect-[3/4]"
                            >
                                <Image
                                    src={image}
                                    alt={`${story.title} wedding moment`}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-[#F5F0EC] pt-32">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src="/images/stories/hero.jpg"
                        alt="Wedding Stories"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="relative z-10 text-center text-white">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="font-playfair text-5xl md:text-7xl mb-6"
                    >
                        Wedding Stories
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-2xl mx-auto px-4"
                    >
                        Each wedding tells a unique story of love, tradition, and celebration
                    </motion.p>
                </div>
            </section>

            {/* Stories Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stories.map((story, index) => (
                            <motion.div
                                key={story.id}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedStory(story.id)}
                            >
                                <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                                    <Image
                                        src={story.coverImage}
                                        alt={story.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="bg-black/60 p-4 rounded-lg">
                                                <h3 className="font-playfair text-2xl mb-2">{story.title}</h3>
                                                <p className="text-sm mb-1">{story.location}</p>
                                                <p className="text-sm opacity-75">{story.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Modal */}
            {selectedStory && (
                <StoryModal
                    story={stories.find(s => s.id === selectedStory)!}
                    onClose={() => setSelectedStory(null)}
                />
            )}

            {/* Quote Section */}
            <section className="py-20 px-4 bg-[#D3C4B5] text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.blockquote
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="font-playfair text-2xl md:text-3xl italic"
                    >
                        "Every wedding is a unique story waiting to be told through our lens.
                        We capture not just moments, but emotions, traditions, and the pure joy of celebration."
                    </motion.blockquote>
                </div>
            </section>
        </div>
    );
} 