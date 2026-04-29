import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Works } from "@/components/works"
import { About } from "@/components/about"
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
        <Works />
        <About />
        <TechMarquee />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
