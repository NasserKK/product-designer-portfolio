import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedWork } from "@/components/featured-work"
import { Experience } from "@/components/experience"
import { TechMarquee } from "@/components/tech-marquee"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionBlend } from "@/components/section-blend"

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SectionBlend />
        <FeaturedWork />
        <Experience />
        <TechMarquee />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
