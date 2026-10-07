"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Download, ArrowRight } from "lucide-react"
import { featuredProject } from "@/lib/projects"

function ScreenshotCard({
  src,
  alt,
  caption,
  index,
}: {
  src: string
  alt: string
  caption: string
  index: number
}) {
  const [error, setError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col gap-3"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]">
        {error ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Asset placeholder
            </span>
            <span className="font-sans text-sm text-muted-foreground">{alt}</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            onError={() => setError(true)}
          />
        )}
      </div>
      <p className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
        {caption}
      </p>
    </motion.div>
  )
}

export function FeaturedWork() {
  const project = featuredProject

  return (
    <section id="featured-work" className="relative py-32 px-8 md:px-12 md:py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">FEATURED PROJECT</p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-sans text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground/90 max-w-3xl text-balance"
        >
          {project.title}
        </motion.h2>
      </motion.div>

      {/* Status strip + description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {["Offline-first", "Tauri + React + Rust", "Whisper + local LLM", project.status].map((item) => (
              <span
                key={item}
                className="font-mono text-[10px] tracking-wider px-3 py-1.5 border border-white/20 rounded-full text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase mb-1">Role</p>
              <p className="font-sans text-base text-foreground/90">{project.role}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase mb-1">Duration</p>
              <p className="font-sans text-base text-foreground/90">{project.duration}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase mb-1">Team</p>
              <p className="font-sans text-base text-foreground/90">{project.team}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase mb-1">Year</p>
              <p className="font-sans text-base text-foreground/90">{project.year}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Screenshot gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {project.screenshots.map((shot, i) => (
          <ScreenshotCard key={shot.caption} src={shot.src} alt={shot.alt} caption={shot.caption} index={i} />
        ))}
      </div>

      {/* Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 border-y border-white/10 py-12 mb-12"
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

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
      >
        <Link
          href={`/work/${project.slug}`}
          data-cursor-hover
          className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full font-mono text-sm tracking-widest uppercase bg-transparent hover:bg-white hover:text-black transition-colors duration-500"
        >
          View full case
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        {project.downloadUrl && (
          <button
            disabled
            data-cursor-hover
            className="group inline-flex items-center gap-3 font-mono text-sm tracking-widest uppercase text-muted-foreground opacity-60 cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            Download beta
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-white/20 rounded-full font-mono text-[9px] tracking-wider uppercase text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Coming soon
            </span>
          </button>
        )}
      </motion.div>
    </section>
  )
}
