'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import work1 from '../../src/work1.jpg'
import work2 from '../../src/work2.jpg'
import work3 from '../../src/work3.jpg'
import work4 from '../../src/work4.jpg'


export default function CoupleShoot() {
    const galleryImages = [
        {
            id: 1,
            src: work1,
            title: 'Beach Sunset Love',
            location: 'Juhu Beach, Mumbai'
        },
        {
            id: 2,
            src: work1,
            title: 'Urban Romance',
            location: 'South Mumbai'
        },
        {
            id: 3,
            src: work2,
            title: 'Garden of Love',
            location: 'Hanging Gardens'
        },
        {
            id: 4,
            src: work4,
            title: 'Monsoon Magic',
            location: 'Marine Drive'
        },
        {
            id: 5,
            src:work1,
            title: 'Architectural Romance',
            location: 'Gateway of India'
        },
        {
            id: 6,
            src: '/images/couple-6.jpg',
            title: 'Sunset Stories',
            location: 'Bandstand'
        }
    ];

    return (
        <div className="min-h-screen bg-[#F5F0EC] pt-32">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src="/images/couple-hero.jpg"
                        alt="Couple Shoot Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-playfair text-5xl md:text-7xl mb-6"
                    >
                        Love in Every Frame
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl"
                    >
                        Capturing your beautiful moments in the most artistic way
                    </motion.p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-playfair text-3xl md:text-4xl mb-8">Pre-Wedding & Couple Photography</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-12">
                        Your love story is unique, and it deserves to be told in a way that's as special as you are.
                        Our pre-wedding shoots are more than just photos - they're an experience that lets you celebrate
                        your love while we capture those genuine, candid moments between you.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 px-4 bg-[#D3C4B5]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-playfair text-3xl md:text-4xl text-center mb-16">Featured Love Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryImages.map((image) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="group relative aspect-[3/4] overflow-hidden"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="font-playfair text-xl mb-2">{image.title}</h3>
                                        <p className="text-sm">{image.location}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section className="py-20 px-4">
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
                                We help you choose the perfect locations that reflect your personality and style,
                                from urban landscapes to natural settings.
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
                                Get expert advice on outfits, colors, and accessories to ensure your photos
                                look timeless and elegant.
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
                                Each photo is carefully edited to enhance its natural beauty while maintaining
                                authenticity and emotion.
                            </p>
                        </motion.div>
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
                    <button className="bg-[#D3C4B5] text-[#36302a] px-8 py-3 rounded-full font-medium hover:bg-[#E5D6C7] transition-colors">
                        Book Your Session
                    </button>
                </div>
            </section>
        </div>
    );
} 