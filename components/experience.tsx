"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { experience, type Engagement, type ExperienceEntry } from "@/lib/experience"

function EngagementBlock({ engagement, index }: { engagement: Engagement; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <p className="font-mono text-2xl md:text-3xl font-light tracking-tight text-foreground/90 mb-2">
            {engagement.client}
          </p>
          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
            <span>{engagement.sector}</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>{engagement.year}</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>{engagement.role}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {engagement.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div className="space-y-4">
          <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Problem</p>
          {engagement.problem.map((p, i) => (
            <p key={i} className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
        <div className="space-y-4">
          <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Approach</p>
          {engagement.approach.map((p, i) => (
            <p key={i} className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
        <div className="space-y-4">
          <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Outcome</p>
          {engagement.outcome.map((p, i) => (
            <p key={i} className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
        {engagement.metrics.map((metric, i) => (
          <div key={i}>
            <p className="font-mono text-3xl md:text-4xl font-light text-foreground leading-none mb-1">
              {metric.value}
            </p>
            <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">{metric.label}</p>
          </div>
        ))}
      </div>

      {engagement.note && (
        <p className="mt-6 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
          {engagement.note}
        </p>
      )}
    </motion.div>
  )
}

function ExperienceRow({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-t border-white/10"
    >
      <button
        onClick={() => setOpen(!open)}
        className="group w-full py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left"
      >
        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 flex-1">
          <span className="font-mono text-xs text-muted-foreground tracking-widest md:w-28 shrink-0">
            {entry.period}
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="font-sans text-2xl md:text-3xl font-light tracking-tight text-foreground/90">
              {entry.company}
            </h3>
            <p className="font-sans text-base text-muted-foreground max-w-2xl">{entry.summary}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase hidden md:block">
            {entry.engagements.length} engagement{entry.engagements.length > 1 ? "s" : ""}
          </span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-muted-foreground group-hover:text-foreground transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-10 space-y-6">
              {entry.engagements.map((engagement, i) => (
                <EngagementBlock key={engagement.client} engagement={engagement} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-8 md:px-12 md:py-24 border-t border-white/10">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground">EXPERIENCE</p>
      </motion.div>

      {/* Intro — photo + positioning bio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden ring-1 ring-white/10">
            <img
              src="/self.png"
              alt="Nasser Khalil"
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(30%) contrast(1.1)" }}
            />
          </div>
          <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
            Based in London
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-balance">
            Nasser <span className="italic text-muted-foreground">Khalil</span>
          </h2>
          <div className="flex flex-col gap-6 max-w-lg">
            <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground">
              Product Designer focused on the intersection of complexity and clarity. I work with companies navigating digital transformation and turn fragmented legacy systems into coherent, scalable experiences.
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground">
              Below is a selection of engagements where I led research, shaped product decisions, and shipped work inside regulated, high-stakes environments.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div>
        {experience.map((entry, index) => (
          <ExperienceRow key={entry.company} entry={entry} index={index} />
        ))}
        <div className="border-t border-white/10" />
      </div>
    </section>
  )
}
