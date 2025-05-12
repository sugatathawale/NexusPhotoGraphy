'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function WeddingFilms() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const recentFilms = [
        {
            id: 1,
            title: "Dhruv & Pippa",
            thumbnail: "/images/films/dhruv-pippa.jpg",
            videoId: "FSgpdIf_ebc"
        },
        {
            id: 2,
            title: "Tripped on Sun",
            thumbnail: "/images/films/tripped-on-sun.jpg",
            videoId: "FSgpdIf_ebc"
        },
        {
            id: 3,
            title: "Juhi & Manav",
            thumbnail: "/images/films/juhi-manav.jpg",
            videoId: "FSgpdIf_ebc"
        },
        {
            id: 4,
            title: "Lav yatri",
            thumbnail: "/images/films/lav-yatri.jpg",
            videoId: "FSgpdIf_ebc"
        },
        {
            id: 5,
            title: "Doctors in Love",
            thumbnail: "/images/films/doctors-in-love.jpg",
            videoId: "FSgpdIf_ebc"
        }
    ];

    const popularFilms = [
        {
            id: 1,
            thumbnail: "/images/films/popular-1.jpg",
            videoId: "FSgpdIf_ebc"
        },
        {
            id: 2,
            thumbnail: "/images/films/popular-2.jpg",
            videoId: "FSgpdIf_ebc"
        },
        {
            id: 3,
            thumbnail: "/images/films/popular-3.jpg",
            videoId: "FSgpdIf_ebc"
        },
        {
            id: 4,
            thumbnail: "/images/films/popular-4.jpg",
            videoId: "FSgpdIf_ebc"
        },
        {
            id: 5,
            thumbnail: "/images/films/popular-5.jpg",
            videoId: "FSgpdIf_ebc"
        },
        {
            id: 6,
            thumbnail: "/images/films/popular-6.jpg",
            videoId: "FSgpdIf_ebc"
        }
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
            <section className="relative min-h-[80vh] flex items-center justify-center px-4 bg-[#36302a]">
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="/images/films/hero-bg.jpg"
                        alt="Wedding Films Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center text-white max-w-4xl">
                    <h1 className="font-playfair text-4xl md:text-5xl mb-4">
                        Award-Winning Wedding Films <span className="italic">Made with Love</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
                        Weddings are a celebration of love and a start of a new journey. Be the stars of your own story and let us tell it
                        like no one else. We make soulful films that will touch your heart and which will document precious moments of
                        your big day. Our films are handcrafted with lots of love. We won the Great Indian Wedding Award 2019 by ICWF
                        in Best Wedding Moments (Video) category for the film <span className="italic underline">Teenage Lev Story</span>. Also, the winners of Better
                        Photography's Wedding Photographer of the Year -2018 for Best video editing, we make wedding films like none another.
                    </p>
                    <p className="mt-8 text-lg leading-relaxed">
                        Each film is handcrafted with stunning cinematography peppered with honest and real moments,
                        the process of making films is a time-consuming exercise where all ingredients of a great film –
                        story, background score and colors often go through multiple iterations before the film comes out
                        of our edit-table.
                    </p>
                </div>
            </section>

            {/* Recent Films Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-playfair text-3xl md:text-4xl text-center mb-16 italic">Recent Films</h2>
                    <div className="relative">
                        <div className="flex space-x-8 overflow-x-auto pb-8 scrollbar-hide">
                            {recentFilms.map((film) => (
                                <div key={film.id} className="flex-none w-72 md:w-96">
                                    <div className="relative aspect-[3/4] mb-4 group cursor-pointer"
                                        onClick={() => setActiveVideo(film.videoId)}>
                                        <Image
                                            src={film.thumbnail}
                                            alt={film.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                                                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="font-playfair text-xl text-center">{film.title}</h3>
                                    <div className="text-center mt-4">
                                        <button
                                            className="bg-[#36302a] text-white px-6 py-2 rounded-full text-sm hover:bg-[#4a423a] transition-colors"
                                            onClick={() => setActiveVideo(film.videoId)}
                                        >
                                            watch film
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg">
                            ←
                        </button>
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg">
                            →
                        </button>
                    </div>
                </div>
            </section>

            {/* Most Popular Section */}
            <section className="py-20 px-4 bg-[#D3C4B5]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-playfair text-3xl md:text-4xl text-center mb-16">Most Popular</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {popularFilms.map((film) => (
                            <div
                                key={film.id}
                                className="relative aspect-video cursor-pointer group"
                                onClick={() => setActiveVideo(film.videoId)}
                            >
                                <Image
                                    src={film.thumbnail}
                                    alt="Popular Wedding Film"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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