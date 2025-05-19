"use client"
import Image from "next/image"
import { useState, useRef } from "react"

import work1 from "../../src/work1.jpg"
import work2 from "../../src/work2.jpg"
import work3 from "../../src/work3.jpg"
import work4 from "../../src/work4.jpg"


export default function WeddingFilms() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const popularFilms = [
    {
      id: 1,
      thumbnail: work1,
      videoId: "G_abstAmkqQ",
    },
    {
      id: 2,
      thumbnail: work2,
      videoId: "FSgpdIf_ebc",
    },
    {
      id: 3,
      thumbnail: work3,
      videoId: "FSgpdIf_ebc",
    },
    {
      id: 4,
      thumbnail: work4,
      videoId: "FSgpdIf_ebc",
    },
    {
      id: 5,
      thumbnail: work2,
      videoId: "FSgpdIf_ebc",
    },
    {
      id: 6,
      thumbnail: work1,
      videoId: "FSgpdIf_ebc",
    },
  ]

  const recentFilms = [
    {
      id: 1,
      title: "Dhruv & Pippa",
      thumbnail: work1,
      videoId: "FSgpdIf_ebc",
    },
    {
      id: 2,
      title: "Tripped on Sun",
      thumbnail: work2,
      videoId: "FSgpdIf_ebc",
    },
    {
      id: 3,
      title: "Juhi & Manav",
      thumbnail: work3,
      videoId: "FSgpdIf_ebc",
    },
    {
      id: 4,
      title: "Lav yatri",
      thumbnail: work4,
      videoId: "FSgpdIf_ebc",
    },
    {
      id: 5,
      title: "Doctors in Love",
      thumbnail: work2,
      videoId: "FSgpdIf_ebc",
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      })
    }
  }

  const VideoModal = ({ videoId, onClose }: { videoId: string; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl aspect-video">
        <button onClick={onClose} className="absolute -top-10 right-0 text-white text-xl p-2">✕</button>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#F5F0EC]">
      {/* Hero Section */}
      <section className="relative min-h-[96vh] flex items-center justify-center px-4 bg-[#36302a]">
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/FSgpdIf_ebc?autoplay=1&controls=0&mute=1&loop=1&playlist=FSgpdIf_ebc&showinfo=0"
            className="absolute w-[300%] h-[300%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">
            Award-Winning Wedding Films <span className="italic">Made with Love</span>
          </h1>
          <p className="text-lg md:text-xl px-4 leading-relaxed">
            Weddings are a celebration of love and a start of a new journey. Be the stars of your own story and let us tell it like no one else...
          </p>
        </div>
      </section>

      {/* Recent Films Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-14 italic">Recent Films</h2>
          <div className="relative">
            <div
              className="flex space-x-8 overflow-x-auto pb-8 scrollbar-hide"
              ref={scrollRef}
            >
              {recentFilms.map((film) => (
                <div key={film.id} className="flex-none w-72 md:w-96">
                  <div
                    className="relative aspect-[3/4] mb-4 group cursor-pointer"
                    onClick={() => setActiveVideo(film.videoId)}
                  >
                    <Image
                      src={film.thumbnail}
                      alt={film.title}
                      fill
                      className="object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-center">{film.title}</h3>
                  <div className="text-center mt-4">
                    <button
                      className="bg-[#36302a] text-white px-6 py-2 rounded-full text-sm hover:bg-[#4a423a] transition-colors"
                      onClick={() => setActiveVideo(film.videoId)}
                    >
                      Watch Film
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Most Popular Section */}
      <section className="py-20 px-4 bg-[#D3C4B5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Most Popular</h2>
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
                  className="object-cover rounded-xl"
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
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </div>
  )
}
