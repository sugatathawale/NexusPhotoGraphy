'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Testimonials() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const videoTestimonials = [
        {
            id: 1,
            couple: "Riya & Aditya",
            thumbnail: "/images/testimonials/video1.jpg",
            videoId: "FSgpdIf_ebc",
            quote: "They captured our wedding exactly how we dreamed it"
        },
        {
            id: 2,
            couple: "Meera & Karan",
            thumbnail: "/images/testimonials/video2.jpg",
            videoId: "FSgpdIf_ebc",
            quote: "The most amazing wedding photographers we could ask for"
        },
        {
            id: 3,
            couple: "Zara & Kabir",
            thumbnail: "/images/testimonials/video3.jpg",
            videoId: "FSgpdIf_ebc",
            quote: "They made our special day even more magical"
        }
    ];

    const reviews = [
        {
            id: 1,
            couple: "Neha & Rohan",
            image: "/images/testimonials/couple1.jpg",
            location: "Mumbai",
            rating: 5,
            review: "Working with KnotsbyAMP was the best decision we made for our wedding. Their attention to detail and ability to capture emotions is unmatched. Every photo tells a story!",
            date: "December 2023"
        },
        {
            id: 2,
            couple: "Anjali & Vikram",
            image: "/images/testimonials/couple2.jpg",
            location: "Delhi",
            rating: 5,
            review: "The team went above and beyond to capture every special moment. Their creativity and professionalism made us feel so comfortable. The photos are absolutely stunning!",
            date: "November 2023"
        },
        {
            id: 3,
            couple: "Priya & Dev",
            image: "/images/testimonials/couple3.jpg",
            location: "Udaipur",
            rating: 5,
            review: "Not just photographers, but storytellers! They captured the essence of our relationship and wedding beautifully. We couldn't be happier with the results.",
            date: "October 2023"
        }
    ];

    const stats = [
        { number: "500+", label: "Happy Couples" },
        { number: "50+", label: "Destination Weddings" },
        { number: "100K+", label: "Photos Delivered" },
        { number: "4.9★", label: "Average Rating" }
    ];

    const VideoModal = ({ videoId, onClose }: { videoId: string; onClose: () => void }) => (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl aspect-video">
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white text-xl p-2"
                >
                    ✕
                </button>
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#F5F0EC] pt-32">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/images/testimonials/hero.jpg"
                        alt="Happy Couples"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </motion.div>
                <div className="relative z-10 text-center text-white">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="font-playfair text-5xl md:text-7xl mb-6"
                    >
                        Love Stories & Reviews
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl"
                    >
                        Hear what our couples have to say about their experience
                    </motion.p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-[#36302a] text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="space-y-2"
                            >
                                <h3 className="font-playfair text-4xl md:text-5xl">{stat.number}</h3>
                                <p className="text-gray-300">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Testimonials */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-playfair text-4xl text-center mb-16">Video Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {videoTestimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer"
                                onClick={() => setActiveVideo(testimonial.videoId)}
                            >
                                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                                    <Image
                                        src={testimonial.thumbnail}
                                        alt={testimonial.couple}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="font-playfair text-xl mb-2">{testimonial.couple}</h3>
                                <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Written Reviews */}
            <section className="py-20 px-4 bg-[#D3C4B5]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-playfair text-4xl text-center mb-16">What Couples Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                        <Image
                                            src={review.image}
                                            alt={review.couple}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-playfair text-xl">{review.couple}</h3>
                                        <p className="text-gray-600">{review.location}</p>
                                    </div>
                                </div>
                                <div className="flex text-yellow-400 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4">&quot;{review.review}&quot;</p>
                                <p className="text-gray-500 text-sm">{review.date}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-playfair text-4xl mb-6">Ready to Create Your Story?</h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Let's capture your special moments together
                    </p>
                    <button className="bg-[#36302a] text-white px-8 py-3 rounded-full text-lg hover:bg-[#4a423a] transition-colors">
                        Get in Touch
                    </button>
                </div>
            </section>

            {/* Video Modal */}
            {activeVideo && (
                <VideoModal
                    videoId={activeVideo}
                    onClose={() => setActiveVideo(null)}
                />
            )}
        </div>
    );
} 