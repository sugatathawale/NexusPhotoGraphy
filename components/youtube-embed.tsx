"use client"

export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-serif text-center mb-4 sm:mb-8">Our Wedding Films</h2>
        <div className="w-full max-w-2xl sm:max-w-4xl mx-auto aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-48 sm:h-72 md:h-[400px] lg:h-[500px] rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
