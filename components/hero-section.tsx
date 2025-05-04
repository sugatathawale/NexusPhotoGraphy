export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background YouTube Video */}
      <div className="absolute inset-0">
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/fQDr4xLwWEI?autoplay=1&mute=1&loop=1&playlist=fQDr4xLwWEI&controls=0&showinfo=0&modestbranding=1&rel=0"
          title="YouTube video background"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </section>
  );
}
