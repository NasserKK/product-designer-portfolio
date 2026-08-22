"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { projects } from "@/lib/projects"

export function Works() {
  return (
    <section id="selected-works" className="relative py-32 px-8 md:px-12 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">SELECTED WORKS</p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-sans text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground/90 max-w-3xl text-balance"
        >
          Real problems. <span className="italic text-muted-foreground">Real impact.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 font-sans text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl"
        >
          Each project started with a broken system and ended with something people actually trust. Here are the stories behind the work.
        </motion.p>
      </motion.div>

      {/* Project Index */}
      <div className="relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            id={`case-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative border-t border-white/10"
          >
            <Link
              href={`/work/${project.slug}`}
              data-cursor-hover
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 md:py-12"
            >
              {/* Year */}
              <span className="font-mono text-xs text-muted-foreground tracking-widest order-1 md:order-none shrink-0">
                {project.year}
              </span>

              {/* Title */}
              <h3 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300 flex-1">
                {project.title}
              </h3>

              {/* Tags + Arrow */}
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

                {/* Arrow indicator */}
                <motion.span
                  className="font-mono text-2xl text-muted-foreground leading-none select-none w-6 text-center shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  initial={false}
                >
                  →
                </motion.span>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Bottom border */}
        <div className="border-t border-white/10" />
      </div>
    </section>
  )
}
