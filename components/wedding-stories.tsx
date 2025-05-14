'use client';

import Image from 'next/image';
import work1 from '../src/work1.jpg'
import work2 from '../src/work2.jpg'
import work3 from '../src/work3.jpg'
import work4 from '../src/work4.jpg'
import work5 from '../src/work5.jpg'
import work6 from '../src/work6.jpg'
import work7 from '../src/work7.jpg'
interface WeddingStory {
    title: string;
    description: string;
    imageUrl: string;
    location: string;
    date: string;
}

const weddingStories: WeddingStory[] = [
    {
        title: "Saba & Usman's Magical Day",
        description: "A wedding full of grace, tradition, and quiet elegance—their three-day celebration was the perfect blend of emotion, beauty, and connection.",
        imageUrl: work1,
        location: "Dubai, UAE",
        date: "March 2024"
    },
    {
        title: "Dhruv & Pippa's Rustic Romance",
        description: "In the serene setting of Oleander Farms, they celebrated their enchanting two-day wedding embracing nature and vintage elegance.",
        imageUrl: work2,
        location: "Karjat, India",
        date: "February 2024"
    },
    {
        title: "Aneesh & Maitri's Beachside Bliss",
        description: "There's something magical about a wedding by the sea. The golden sunset created the perfect backdrop for their beautiful celebration.",
        imageUrl: work3,
        location: "Goa, India",
        date: "January 2024"
    }
];

export default function WeddingStories() {
    return (
        <section className="py-20 bg-[#b9a58f] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-serif mb-4 bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent">
                        One Story at a Time
                    </h2>
                    <p className="text-neutral-600 text-lg md:text-xl max-w-2xl mx-auto font-light italic">
                        Discover the beautiful love stories we've had the privilege to capture
                    </p>
                </div>

                <div className="relative mb-16">
                    {/* Cards Container */}
                    <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory no-scrollbar -mx-4 px-4">
                        {weddingStories.map((story, index) => (
                            <div
                                key={index}
                                className="min-w-[350px] md:min-w-[400px] bg-white rounded-2xl overflow-hidden shadow-xl snap-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative h-[350px] w-full overflow-hidden">
                                    <Image
                                        src={story.imageUrl}
                                        alt={story.title}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="text-sm font-medium tracking-wider uppercase">{story.location}</p>
                                        <p className="text-sm opacity-80 font-light">{story.date}</p>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-neutral-800 leading-tight">
                                        {story.title}
                                    </h3>
                                    <p className="text-neutral-600 text-lg font-light leading-relaxed">
                                        {story.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows with Gradient Background */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-full bg-gradient-to-r from-[#FAF6F1] to-transparent pointer-events-none"></div>
                    <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-10 border border-neutral-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-full bg-gradient-to-l from-[#FAF6F1] to-transparent pointer-events-none"></div>
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-10 border border-neutral-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                {/* Read More Button - Now below all cards */}
                <div className="text-center">
                    <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium tracking-wider uppercase overflow-hidden rounded-full border-2 border-neutral-800 hover:border-neutral-900 transition-all duration-300">
                        <span className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        <span className="relative group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                            Read More Stories
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
} 