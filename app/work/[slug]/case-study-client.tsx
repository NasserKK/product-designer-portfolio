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
  const paragraphs = project.fullDescription ?? []
  const pullQuoteAfter = paragraphs.length > 3 ? 2 : 1

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
            Case Study
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
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
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

        {/* Prose */}
        <section className="px-8 md:px-12 pb-16">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Lead paragraph */}
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

            {paragraphs.length > 0 && (
              <div className="pt-8 border-t border-white/10 space-y-7">
                {paragraphs.slice(0, pullQuoteAfter).map((paragraph, i) => (
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

        {/* Pull Quote */}
        {project.pullQuote && (
          <section className="px-8 md:px-12 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
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

        {/* Remaining paragraphs */}
        {paragraphs.length > pullQuoteAfter && (
          <section className="px-8 md:px-12 pb-16">
            <div className="max-w-3xl mx-auto space-y-7">
              {paragraphs.slice(pullQuoteAfter).map((paragraph, i) => (
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
          </section>
        )}

        {/* Testimonial Quote Block */}
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

        {/* CTA - Back to works */}
        <section className="px-8 md:px-12 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link
              href="/#selected-works"
              className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <span className="h-px w-8 bg-white/20" />
              View all projects
              <span className="h-px w-8 bg-white/20" />
            </Link>
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
