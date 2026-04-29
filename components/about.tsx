"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section className="relative py-32 px-8 md:px-12 md:py-24 border-t border-white/10">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground">ABOUT</p>
      </motion.div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left — Name + Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col gap-10"
        >
          <h2 className="font-sans text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] text-balance">
            Nasser<br />
            <span className="italic text-muted-foreground">Khalil</span>
          </h2>

          <div className="flex flex-col gap-6 max-w-lg">
            <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground">
              Product Designer focused on the intersection of complexity and clarity. I work with companies navigating digital transformation — turning fragmented legacy systems into coherent, scalable experiences.
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground">
              From enterprise ERPs to consumer-facing platforms, I bring structure to ambiguity: building design systems, defining interaction patterns, and shipping products that hold up under real-world pressure.
            </p>
          </div>

          {/* Divider with role labels */}
          <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
            {["Product Design", "Design Systems", "UX Strategy"].map((role, i) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="flex items-center justify-between py-3 border-b border-white/10"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">{role}</span>
                <span className="font-mono text-xs text-white/20">0{i + 1}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden w-full max-w-[220px] md:max-w-[280px] md:ml-auto">
            <img
              src="/self.png?height=200&width=150"
              alt="Nasser Khalil"
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(30%) contrast(1.1)" }}
            />
            {/* Subtle overlay border */}
            <div className="absolute inset-0 border border-white/10 pointer-events-none" />
          </div>

          {/* Floating mono label bottom-left of image */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase"
          >
            Based in Brazil &mdash; Available Worldwide
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
