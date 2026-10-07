"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import type { FeaturedProject } from "@/lib/projects"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CustomCursor } from "@/components/custom-cursor"
import { Shield, Mic, Brain, Lock, Download, ArrowRight, Play } from "lucide-react"

type Props = {
  project: FeaturedProject
  prev: FeaturedProject | null
  next: FeaturedProject | null
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number],
    },
  }),
}

const processSteps = [
  {
    icon: Shield,
    title: "Define the privacy promise",
    description: "Turned 'no cloud' from a technical detail into the central product narrative and a visible UI feature.",
  },
  {
    icon: Mic,
    title: "Simplify the recording flow",
    description: "Reduced the core journey to five steps: create, choose mic, record, stop, review. No onboarding walls.",
  },
  {
    icon: Brain,
    title: "Structure AI output",
    description: "Designed a scannable dashboard that separates summary, decisions, action items, questions, topics, and participants.",
  },
  {
    icon: Lock,
    title: "Make trust auditable",
    description: "Every action item links to transcript evidence, so users can verify what the AI inferred.",
  },
]

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
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
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
      <p className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">{caption}</p>
    </motion.div>
  )
}

function VideoPlayer({ src, poster }: { src: string; poster: string }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 text-center">
        <Play className="w-8 h-8 text-muted-foreground" />
        <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
          Screen recording placeholder
        </p>
        <p className="font-sans text-sm text-muted-foreground">Drop localmeet-demo.mp4 into /public/localmeet/</p>
      </div>
    )
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        controls
        className="h-full w-full object-cover"
        onError={() => setError(true)}
      />
    </div>
  )
}

export function LocalMeetCaseStudy({ project, prev, next }: Props) {
  const paragraphs = project.fullDescription ?? []

  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="noise-overlay" />

      <main className="min-h-screen bg-background text-foreground">
        {/* Nav Bar */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-6 border-b border-white/5 bg-background/80 backdrop-blur-sm">
          <Link
            href="/#featured-work"
            className="font-mono text-xs tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2"
          >
            <span>←</span>
            <span>BACK</span>
          </Link>
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">LocalMeet</p>
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
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6">{project.year}</p>
          </motion.div>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance max-w-5xl mb-8"
          >
            {project.title}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-lg md:text-xl font-light leading-relaxed text-muted-foreground"
          >
            {project.description}
          </motion.p>

          {/* Role / Team / Duration */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-10 max-w-3xl"
          >
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase mb-2">Role</p>
              <p className="font-sans text-base">{project.role}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase mb-2">Team</p>
              <p className="font-sans text-base">{project.team}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase mb-2">Duration</p>
              <p className="font-sans text-base">{project.duration}</p>
            </div>
          </motion.div>

          {/* Download CTA */}
          {project.downloadUrl && (
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <button
                disabled
                data-cursor-hover
                className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full font-mono text-sm tracking-widest uppercase bg-white text-black opacity-60 cursor-not-allowed"
              >
                <Download className="w-4 h-4" />
                Download beta
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/20 rounded-full font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Coming soon
              </span>
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                macOS · Windows · Linux
              </span>
            </motion.div>
          )}
        </section>

        {/* Full-width hero image */}
        <motion.section
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="px-8 md:px-12 mb-24"
        >
          <div className="w-full aspect-[16/7] overflow-hidden border border-white/5 rounded-2xl bg-[#0a0a0a]">
            <img
              src={project.image}
              alt={`${project.title} interface`}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.style.display = "none"
              }}
            />
          </div>
        </motion.section>

        {/* Metrics */}
        <section className="px-8 md:px-12 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 border-y border-white/10 py-12"
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

        {/* The challenge */}
        <section className="px-8 md:px-12 pb-24">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-3xl md:text-4xl font-light tracking-tight mb-8"
            >
              The challenge
            </motion.h2>
            <div className="space-y-6">
              {paragraphs.slice(0, 2).map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* Pull quote */}
        {project.pullQuote && (
          <section className="px-8 md:px-12 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number] }}
              className="max-w-4xl mx-auto relative"
            >
              <span className="absolute -top-10 left-0 font-sans text-[8rem] md:text-[10rem] font-light leading-none text-white/[0.04] select-none pointer-events-none">
                &ldquo;
              </span>
              <blockquote className="relative z-10">
                <p className="font-sans text-2xl md:text-4xl lg:text-5xl font-light italic leading-snug text-foreground/90 text-balance">
                  {project.pullQuote}
                </p>
                <div className="mt-8 h-px w-16 bg-white/20" />
              </blockquote>
            </motion.div>
          </section>
        )}

        {/* Screenshot gallery */}
        <section className="px-8 md:px-12 pb-24">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-3xl md:text-4xl font-light tracking-tight mb-12"
            >
              Product screens
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((shot, i) => (
                <ScreenshotCard key={shot.caption} src={shot.src} alt={shot.alt} caption={shot.caption} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Screen recording */}
        {project.video && (
          <section className="px-8 md:px-12 pb-24">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-sans text-3xl md:text-4xl font-light tracking-tight mb-12"
              >
                In action
              </motion.h2>
              <VideoPlayer src={project.video.src} poster={project.video.poster} />
            </div>
          </section>
        )}

        {/* Process */}
        <section className="px-8 md:px-12 py-24 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-3xl md:text-4xl font-light tracking-tight mb-16 text-center"
            >
              Design process
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-background p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <step.icon size={22} className="text-foreground/80" />
                  </div>
                  <h3 className="font-sans text-xl font-medium mb-3">{step.title}</h3>
                  <p className="font-sans text-base leading-relaxed text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution prose */}
        <section className="px-8 md:px-12 py-24">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-3xl md:text-4xl font-light tracking-tight mb-8"
            >
              The solution
            </motion.h2>
            <div className="space-y-7">
              {paragraphs.slice(2).map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* Feature highlights */}
        <section className="px-8 md:px-12 pb-24">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-3xl md:text-4xl font-light tracking-tight mb-12"
            >
              Key design decisions
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Calm, focused UI",
                  description:
                    "A minimal palette, strong typography, and restrained motion keep the interface professional and distraction-free.",
                },
                {
                  title: "Privacy as a feature",
                  description:
                    "The 'local processing enabled' indicator and clear privacy toggles make security visible, not hidden.",
                },
                {
                  title: "Auditable AI",
                  description:
                    "Action items link back to transcript evidence so users always know why the AI made a decision.",
                },
                {
                  title: "Five-step workflow",
                  description:
                    "Create, choose microphone, record, stop, review. No onboarding walls or complicated configuration.",
                },
                {
                  title: "Structured output",
                  description:
                    "Summary, decisions, action items, questions, topics, and participants are separated for quick scanning.",
                },
                {
                  title: "On-device AI",
                  description:
                    "Whisper and Llama inference is compiled directly into the Rust binary, with models managed through an in-app downloader — no external executables or cloud calls.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-xl border border-white/10 p-6"
                >
                  <h3 className="font-sans text-lg font-medium mb-2">{item.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        {project.stack && (
          <section className="px-8 md:px-12 pb-24">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-sans text-3xl md:text-4xl font-light tracking-tight mb-12"
              >
                Tools & methods
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {project.stack.map((group, index) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-xl border border-white/10 p-6"
                  >
                    <h3 className="font-sans text-lg font-medium mb-2">{group.category}</h3>
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground">{group.items}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial */}
        {project.quote && (
          <section className="px-8 md:px-12 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto border-t border-b border-white/10 py-14 md:py-20"
            >
              <div className="flex gap-4 items-start">
                <span className="shrink-0 font-sans text-5xl md:text-6xl font-light text-white/10 leading-none mt-[-0.2em]">
                  &ldquo;
                </span>
                <div>
                  <p className="font-sans text-xl md:text-2xl font-light leading-relaxed text-foreground/85 text-balance">
                    {project.quote}
                  </p>
                  {project.quoteAuthor && (
                    <p className="mt-5 font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                      &mdash; {project.quoteAuthor}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* Download closing CTA */}
        {project.downloadUrl && (
          <section className="px-8 md:px-12 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12 text-center"
            >
              <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase mb-4">
                Coming soon
              </p>
              <h2 className="font-sans text-3xl md:text-4xl font-light tracking-tight mb-6">
                Download LocalMeet
              </h2>
              <p className="font-sans text-base text-muted-foreground max-w-lg mx-auto mb-8">
                A privacy-first meeting assistant that runs entirely on your computer. No cloud, no account, no telemetry.
              </p>
              <button
                disabled
                data-cursor-hover
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full font-mono text-sm tracking-widest uppercase bg-white text-black opacity-60 cursor-not-allowed"
              >
                <Download className="w-4 h-4" />
                Get the app
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </section>
        )}

        {/* Outcome note */}
        <section className="px-8 md:px-12 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              <span className="inline-block h-px w-8 bg-white/20 align-middle mr-4" />
              LocalMeet is a private, offline-first product currently in beta
              <span className="inline-block h-px w-8 bg-white/20 align-middle ml-4" />
            </p>
          </motion.div>
        </section>

        {/* Case navigation */}
        <nav className="border-t border-white/10 px-8 md:px-12 py-16 flex items-center justify-between">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group flex flex-col gap-2">
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
            <Link href={`/work/${next.slug}`} className="group flex flex-col gap-2 text-right">
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
