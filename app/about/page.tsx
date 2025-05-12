'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
    const teamMembers = [
        {
            id: 1,
            name: 'Anupam',
            lastName: 'Maurya',
            role: 'Chief Dreamer & Co-Founder',
            image: '/images/anupam.jpg'
        },
        {
            id: 2,
            name: 'Soumi',
            lastName: 'Goswami',
            role: 'Creative Head & Co-Founder',
            image: '/images/soumi.jpg'
        },
        {
            id: 3,
            name: 'Prasad',
            lastName: 'Patil',
            role: 'Lead Photographer & Production Manager',
            image: '/images/prasad.jpg'
        },
        {
            id: 4,
            name: 'Rishabh',
            lastName: 'Khandhadia',
            role: 'Lead Photographer',
            image: '/images/rishabh.jpg'
        }
    ];

    return (
        <div className="min-h-screen bg-[#F5F0EC] pt-32">
            {/* Hero Section */}
            <section className="relative min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center px-4">
                <h1 className="font-playfair text-[2.5rem] md:text-[3.5rem] mb-4">Celebrating Love</h1>
                <h2 className="font-playfair text-[1.8rem] md:text-[2.5rem] italic text-gray-700">Through the Lens Since 2013</h2>
            </section>

            {/* Company History Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="relative aspect-[4/3]">
                        <Image
                            src="/images/team-group-1.jpg"
                            alt="Team group photo"
                            fill
                            className="object-cover grayscale"
                        />
                    </div>
                    <div className="relative aspect-[4/3]">
                        <Image
                            src="/images/team-group-2.jpg"
                            alt="Team group photo"
                            fill
                            className="object-cover grayscale"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative aspect-[4/3]">
                        <Image
                            src="/images/team-group-3.jpg"
                            alt="Team group photo"
                            fill
                            className="object-cover grayscale"
                        />
                    </div>
                    <div className="relative aspect-[4/3]">
                        <Image
                            src="/images/team-group-4.jpg"
                            alt="Team group photo"
                            fill
                            className="object-cover grayscale"
                        />
                    </div>
                </div>
                <div className="mt-16 max-w-4xl mx-auto">
                    <p className="text-lg leading-relaxed text-gray-800">
                        It all started when <span className="underline">Anupam</span>, a BITS Pilani alumnus, decided to quit his job as Circuit Design Engineer at AMD to pursue his passion of photography full time. AMP (Anupam Maurya Photography) was born in December, 2013. Since then AMP grew multiple folds, with <span className="underline">Soumi</span> joining as Co-Founder. Fast Forward to 2016, KnotsbyAMP was officially born.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-800 mt-6">
                        KnotsbyAMP is today one of the best wedding photographers in Mumbai and top choices of couple's in India, with one of the highest reviews on Google and <span className="underline">WedmeGood</span> for any photography company in India. Led by Anupam & Soumi, KnotsbyAMP has covered a rich kaleidoscope of Indian Weddings from private weddings to luxurious destination weddings. But their professionalism, communication and bespoke style of working and ability to blend elements of fashion, fine art, documentary into their frames is what sets them apart.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-800 mt-6 italic">
                        The key to great photographs, KnotsbyAMP believes, lies in connecting with the subjects and providing them that comfort that which helps bring out their personalities and therefore stories in the photographs.
                    </p>
                </div>
            </section>

            {/* Dreamers & Doers Section */}
            <section className="py-20 px-4 md:px-8 bg-[#D3C4B5]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center font-playfair text-[2.5rem] mb-2">The Dreamers & Doers</h2>
                    <h3 className="text-center font-playfair text-[1.8rem] mb-16">of KnotsbyAMP</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="text-center">
                                <div className="relative w-full aspect-square mb-6">
                                    <Image
                                        src={member.image}
                                        alt={`${member.name} ${member.lastName}`}
                                        fill
                                        className="object-cover grayscale"
                                    />
                                </div>
                                <h3 className="font-playfair text-2xl">{member.name} <span className="font-normal">{member.lastName}</span></h3>
                                <p className="text-gray-700 mt-2">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="font-playfair text-2xl mb-6">Contact</h4>
                            <p className="mb-2">+91 9820670989</p>
                            <p>knotsbyamp@gmail.com</p>
                        </div>
                        <div>
                            <h4 className="font-playfair text-2xl mb-6">Follow Us</h4>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-gray-300">Instagram</a>
                                <a href="#" className="hover:text-gray-300">Facebook</a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-playfair text-2xl mb-6">Address</h4>
                            <p>Mumbai, Maharashtra</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className="mt-12 text-center text-sm text-gray-400">
                        © 2024 KnotsbyAMP. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
} 