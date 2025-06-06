import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FilmsSection from "@/components/films-section"
import YouTubeEmbed from "@/components/youtube-embed"
import PhotoGallery from "@/components/photo-gallery"
import OurWorkVideo from "@/components/our-work-video"
import TestimonialsSlider from "@/components/testimonials-slider"
import FeaturedWork from "@/components/featured-work"
import StatsSection from "@/components/stats-section"
import Footer from "@/components/footer"
import FAQSection from "@/components/faq-section"
import ServiceCards from "@/components/service-cards"
import WeddingStories from "@/components/wedding-stories"
import CareersLanding from "@/components/careers-landing"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WeddingStories />
      <PhotoGallery />
      <StatsSection />
      <FilmsSection />
      <TestimonialsSlider />
      <FAQSection />
      <CareersLanding />
      {/* <FeaturedWork /> */}
      {/* <ServiceCards /> */}
      {/* <Footer /> */}
    </main>
  )
}
