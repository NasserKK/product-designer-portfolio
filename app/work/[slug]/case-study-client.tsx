"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { Project } from "@/lib/projects"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CustomCursor } from "@/components/custom-cursor"

type Props = {
  project: Project
  prev: Project | null
  next: Project | null
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.04, 0.62, 0.23, 0.98] },
  }),
}

export function CaseStudyClient({ project, prev, next }: Props) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="noise-overlay" />

      <main className="min-h-screen bg-background text-foreground">
        {/* Nav Bar */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-6 border-b border-white/5 bg-background/80 backdrop-blur-sm">
          <Link
            href="/"
            className="font-mono text-xs tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2"
          >
            <span>←</span>
            <span>BACK</span>
          </Link>
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Real Case
          </p>
          <div className="flex gap-2 flex-wrap justify-end">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Hero */}
        <section className="pt-40 pb-24 px-8 md:px-12">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6">
              {project.year}
            </p>
          </motion.div>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance max-w-5xl mb-16"
          >
            {project.title}
          </motion.h1>

          {/* Metrics bar */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 border-t border-white/10 pt-12"
          >
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="font-mono text-5xl md:text-6xl font-light text-foreground leading-none">
                  {metric.value}
                </span>
                <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                  {metric.label}
                </span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Full-width case image */}
        <motion.section
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="px-8 md:px-12 mb-24"
        >
          <div className="w-full aspect-[16/7] overflow-hidden border border-white/5">
            <img
              src={project.image}
              alt={`${project.title} case study`}
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(30%) contrast(1.1)" }}
            />
          </div>
        </motion.section>

        {/* Prose — two-column reading layout */}
        <section className="px-8 md:px-12 pb-32">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Lead paragraph (description) */}
            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-sans text-xl md:text-2xl font-light leading-relaxed text-foreground/80"
            >
              {project.description}
            </motion.p>

            {project.fullDescription && (
              <div className="pt-8 border-t border-white/10 space-y-7">
                {project.fullDescription.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Case navigation */}
        <nav className="border-t border-white/10 px-8 md:px-12 py-16 flex items-center justify-between">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex flex-col gap-2"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                ← PREV
              </span>
              <span className="font-sans text-lg md:text-2xl font-light text-foreground/70 group-hover:text-foreground transition-colors duration-200 max-w-sm text-balance">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col gap-2 text-right"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                NEXT →
              </span>
              <span className="font-sans text-lg md:text-2xl font-light text-foreground/70 group-hover:text-foreground transition-colors duration-200 max-w-sm text-balance">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </main>
    </SmoothScroll>
  )
}
