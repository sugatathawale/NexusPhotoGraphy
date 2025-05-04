"use client"

export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-8">Our Wedding Films</h2>
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[500px]"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
