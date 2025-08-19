import Navbar from "@/components/navbar"
import HeroBanner from "@/components/hero-banner"
import CollectionSection from "@/components/collection-section"
import CustomDesignSection from "@/components/custom-design-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"
import RevealOnScroll from "@/components/reveal-on-scroll"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <RevealOnScroll>
        <HeroBanner />
      </RevealOnScroll>

        <CollectionSection />

      <RevealOnScroll>
        <CustomDesignSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <AboutSection />
      </RevealOnScroll>

      <Footer />
    </main>
  )
}
