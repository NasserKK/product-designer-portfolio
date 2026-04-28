"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

type Metric = {
  label: string
  value: string
}

type Project = {
  title: string
  tags: string[]
  image: string
  year: string
  description: string
  metrics: Metric[]
}

const projects: Project[] = [
  {
    title: "From Manual Processes to Digital Experience",
    tags: ["UX", "UI", "User Research"],
    image: "/abstract-neural-network-visualization-dark-theme.jpg",
    year: "2025",
    description:
      "A legacy operations workflow relied entirely on paper forms and manual handoffs between departments. We mapped every touchpoint through contextual inquiry, identified critical friction points, and redesigned the end-to-end flow as a web application — reducing processing time and eliminating transcription errors across three internal teams.",
    metrics: [
      { value: "73%", label: "Faster Processing" },
      { value: "12k", label: "Users Onboarded" },
      { value: "4.8", label: "Satisfaction Score" },
    ],
  },
  {
    title: "Design System to support a migration from desktop ERP to Web",
    tags: ["Design System", "Figma"],
    image: "/design-system.jpg",
    year: "2024",
    description:
      "The client was migrating a 20-year-old desktop ERP system to a modern web stack. We built a token-based design system from scratch in Figma — covering color, typography, spacing, and 60+ components — enabling multiple product teams to ship consistently without constant design review bottlenecks.",
    metrics: [
      { value: "60+", label: "Components" },
      { value: "3x", label: "Dev Velocity" },
      { value: "98%", label: "Brand Consistency" },
      { value: "5", label: "Teams Served" },
    ],
  },
  {
    title: "SEO focused landing-page",
    tags: ["Branding", "TypeScript", "Shadcn"],
    image: "/law-firm.jpg",
    year: "2026",
    description:
      "A boutique law firm needed an online presence that conveyed authority without relying on clichéd stock photography. We built a performance-optimized landing page in Next.js with structured data, semantic HTML, and a custom component library — achieving a perfect Lighthouse score and a significant lift in organic search visibility within 60 days.",
    metrics: [
      { value: "100", label: "Lighthouse Score" },
      { value: "+240%", label: "Organic Traffic" },
      { value: "0.8s", label: "LCP" },
    ],
  },
]

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="relative py-32 px-8 md:px-12 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">SELECTED WORKS</p>
      </motion.div>

      {/* Projects List */}
      <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
        {projects.map((project, index) => {
          const isOpen = openIndex === index

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative border-t border-white/10"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Clickable Row */}
              <button
                onClick={() => handleToggle(index)}
                data-cursor-hover
                className="w-full text-left group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 md:py-12 focus:outline-none"
                aria-expanded={isOpen}
              >
                {/* Year */}
                <span className="font-mono text-xs text-muted-foreground tracking-widest order-1 md:order-none shrink-0">
                  {project.year}
                </span>

                {/* Title */}
                <motion.h3
                  className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300 flex-1"
                  animate={{ x: hoveredIndex === index || isOpen ? 20 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {project.title}
                </motion.h3>

                {/* Tags + Toggle Indicator */}
                <div className="flex items-center gap-4 order-2 md:order-none shrink-0">
                  <div className="hidden md:flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* +/× toggle icon */}
                  <motion.span
                    className="font-mono text-2xl text-muted-foreground leading-none select-none w-6 text-center shrink-0"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    +
                  </motion.span>
                </div>
              </button>

              {/* Accordion Panel */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pt-2 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                      {/* Case Image */}
                      <div className="aspect-[4/3] overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={`${project.title} case study`}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.6 }}
                          style={{ filter: "grayscale(40%) contrast(1.1)" }}
                        />
                      </div>

                      {/* Description */}
                      <div className="flex flex-col justify-center">
                        <p className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>
                        {/* Mobile tags */}
                        <div className="flex md:hidden gap-2 flex-wrap mt-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="flex flex-col justify-center">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                          {project.metrics.map((metric, i) => (
                            <div key={i} className="flex flex-col gap-1">
                              <span className="font-mono text-4xl md:text-5xl font-light text-foreground leading-none">
                                {metric.value}
                              </span>
                              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                                {metric.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}

        {/* Floating Image — hidden when any accordion is open */}
        <motion.div
          className="absolute pointer-events-none z-50 w-64 h-40 md:w-80 md:h-48 overflow-hidden rounded-lg"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-320%",
          }}
          animate={{
            opacity: hoveredIndex !== null && openIndex === null ? 1 : 0,
            scale: hoveredIndex !== null && openIndex === null ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          {hoveredIndex !== null && (
            <motion.img
              src={projects[hoveredIndex].image}
              alt={projects[hoveredIndex].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{ filter: "grayscale(50%) contrast(1.1)" }}
            />
          )}
          <div className="absolute inset-0 bg-[#2563eb]/10 mix-blend-overlay" />
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10" />
    </section>
  )
}
