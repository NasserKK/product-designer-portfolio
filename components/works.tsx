"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { projects } from "@/lib/projects"

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
              id={`case-${index}`}
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

              {/* Accordion Panel — Tier 1 only */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.45, ease: [0.04, 0.62, 0.23, 0.98] },
                      opacity: { duration: 0.2 },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pt-2 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                      {/* Case Image */}
                      <div className="aspect-[16/9] overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={`${project.title} case study`}
                          className="w-full h-full object-fit"
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.6 }}
                          style={{ filter: "grayscale(40%) contrast(1.1)" }}
                        />
                      </div>

                      {/* Short Description */}
                      <div className="flex flex-col justify-center gap-6">
                        <p className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>

                        {/* View case study link */}
                        {project.fullDescription?.length ? (
                          <Link
                            href={`/work/${project.slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="self-start font-mono text-[11px] tracking-[0.2em] uppercase border-b border-white/30 pb-0.5 text-foreground hover:border-white transition-colors duration-200"
                          >
                            View case study →
                          </Link>
                        ) : null}

                        {/* Mobile tags */}
                        <div className="flex md:hidden gap-2 flex-wrap">
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

        {/* Floating hover image — hidden when any accordion is open */}
        {openIndex === null && (
          <motion.div
            className="pointer-events-none fixed top-0 left-0 w-72 aspect-[4/3] overflow-hidden z-50 hidden lg:block"
            style={{
              x: springX,
              y: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              opacity: hoveredIndex !== null ? 1 : 0,
              scale: hoveredIndex !== null ? 1 : 0.9,
            }}
            transition={{ duration: 0.3 }}
          >
            {hoveredIndex !== null && (
              <img
                src={projects[hoveredIndex].image}
                alt=""
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(60%) contrast(1.2)" }}
              />
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
