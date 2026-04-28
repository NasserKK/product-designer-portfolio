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
  fullDescription?: string[]
  metrics: Metric[]
}

const projects: Project[] = [
  {
    title: "From Manual Processes to Digital Experience",
    tags: ["UX", "UI", "User Research"],
    image: "/rchlo.png",
    year: "2025",
    description:
      "A legacy quality-control workflow in the textile operations of Riachuelo relied entirely on paper forms across factories in Brazil and China — introducing frequent errors, delays, and inconsistencies in reporting.",
    fullDescription: [
      "A legacy quality-control workflow in the textile operations of Riachuelo relied entirely on paper forms across factories in Brazil and China. Inspection data was manually recorded by factory inspectors and passed through multiple handoffs before reaching the BI team — introducing frequent errors, delays, and inconsistencies in reporting.",
      "I conducted contextual inquiry on the factory floor, working closely with managers, inspectors, and operators to map the full lifecycle of a work order. The research uncovered a deeper issue beyond inefficiency: a systemic lack of trust in the data. Because inspection results could be easily altered or selectively reported, teams created informal verification steps, duplicating work and slowing down production.",
      "Leading the end-to-end UX process, I translated these insights into a web-based inspection system designed primarily for tablet use on the factory floor. The solution replaced paper checklists with structured digital workflows and introduced validation mechanisms such as required fields, timestamping, and photo evidence to ensure data integrity at the point of entry.",
      "Inspectors could complete checklists in real time, attaching photos and submitting standardized reports, while managers gained live visibility into each work order through a centralized dashboard. This created a fully traceable inspection process, reducing the possibility of manipulation and eliminating the need for redundant verification steps.",
      "By redesigning both the interface and the underlying workflow, the system significantly improved operational efficiency and data reliability. Processing time decreased by 73%, over 12,000 users were onboarded across multiple facilities, and post-launch surveys reported a 4.8 satisfaction score, driven by increased speed, transparency, and confidence in the system.",
    ],
    metrics: [
      { value: "73%", label: "Faster Processing" },
      { value: "12k", label: "Users Onboarded" },
      { value: "4.8", label: "Satisfaction Score" },
    ],
  },
  {
    title: "Design System to support a migration from desktop ERP to Web",
    tags: ["Design System", "Figma"],
    image: "/gize.png",
    year: "2024",
    description:
      "The client was migrating a 20-year-old desktop ERP system to a modern web stack. We built a token-based design system from scratch in Figma — covering color, typography, spacing, and 60+ components — enabling multiple product teams to ship consistently without constant design review bottlenecks.",
    fullDescription: [
      "As part of the migration of a legacy ERP system to a modern web architecture, the existing interface presented a major scalability challenge. Years of incremental development had resulted in a fragmented UI, with duplicated styles, conflicting patterns, and no shared foundation across products.",
      "To understand the scale of the problem, our team conducted a detailed audit of the existing interface. The analysis revealed over 5,500 CSS rules and 13,000+ style declarations, exposing significant inconsistencies across layout, spacing, typography, and color usage. This fragmentation increased development complexity, slowed delivery, and created constant misalignment between design and engineering.",
      "Working as part of the design system team, I focused on identifying recurring patterns in the legacy interface and translating them into a consistent, reusable system. This included defining rules, standardizing UI patterns, and contributing to both the structure and behavior of new components.",
      "We established a token-based foundation covering spacing, typography, color, and elevation — creating a shared source of truth across design, development, and QA. Building on this, I contributed to a library of base and complex components, defining not only their visual structure but also their interaction states and behavior, ensuring they were implementation-ready.",
      "A key part of my role was producing structured documentation used across teams, clearly describing how tokens and components should be applied. This documentation enabled developers and QA to consistently implement and validate UI without relying on continuous design input.",
      "The system saw strong organic adoption across 5 product teams, largely because it simplified day-to-day work. By removing the need for developers to make ad-hoc design decisions and providing ready-to-use patterns, the design system significantly reduced friction in the development process.",
      "Components and standards were actively reused in production, contributing to a 3x increase in development velocity and achieving 98% UI consistency across applications. By transforming a highly inconsistent legacy interface into a structured and scalable system, the design system became a critical foundation for the ERP migration — enabling faster delivery, improved collaboration, and long-term product consistency.",
    ],
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
      "A Canadian immigration law firm needed to improve its online presence and attract qualified leads, particularly from Brazilian and broader Latino communities in Canada. The existing website suffered from poor SEO performance, low visibility in search results, and an outdated structure that failed to communicate credibility or convert visitors into clients.",
    fullDescription: [
      "A Canadian immigration law firm needed to improve its online presence and attract qualified leads, particularly from Brazilian and broader Latino communities in Canada. The existing website suffered from poor SEO performance, low visibility in search results, and an outdated structure that failed to communicate credibility or convert visitors into clients.",
      "I redesigned the experience end-to-end, focusing on both SEO structure and user experience. A key strategic decision was to make the platform multilingual (Portuguese, English, and Spanish), allowing the firm to directly reach its target audience in their native language and significantly expand its organic reach.",
      "From a content and UX perspective, the site was structured to prioritize clarity and trust. Instead of relying on complex legal terminology, the interface uses clear, direct language to explain immigration processes, reducing friction for users who may already feel uncertainty or stress. Service pages were organized around user intent, making it easier for visitors to quickly understand their options and next steps.",
      "Conversion was centered around a primary CTA — \"Book Consultation\" — strategically placed throughout the experience. The flow was simplified to reduce friction, ensuring users could take action without navigating complex forms or unnecessary steps.",
      "On the technical side, I built the application using Next.js with a strong focus on performance and SEO best practices. This included semantic HTML structure, optimized metadata, and structured content to improve indexing and ranking. Performance optimizations such as efficient asset loading and rendering strategies contributed to an excellent user experience across devices.",
      "The result was a high-performing, search-optimized platform that achieved a perfect Lighthouse score (100/100 in performance, SEO, and best practices), with 96 in accessibility, and a 0.8s Largest Contentful Paint (LCP).",
      "More importantly, the redesign delivered tangible business impact: +240% growth in organic traffic within 60 days, significantly increasing the firm's visibility and lead generation from its target audience.",
    ],
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
  const [expandedReadIndex, setExpandedReadIndex] = useState<number | null>(null)
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
    // Always collapse Tier 2 before switching or closing any row
    setExpandedReadIndex(null)
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  const handleReadToggle = (e: React.MouseEvent, index: number) => {
    e.stopPropagation()
    setExpandedReadIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="relative py-32 px-8 md:px-12 md:py-24" style={{ overflowAnchor: "none" }}>
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
          const isReadExpanded = expandedReadIndex === index
          const hasFullText = Boolean(project.fullDescription?.length)

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
                    transition={{
                      height: { duration: 0.45, ease: [0.04, 0.62, 0.23, 0.98] },
                      opacity: { duration: 0.15 },
                    }}
                    style={{ overflowAnchor: "none" }}
                    className="overflow-hidden"
                  >
                    {/* Tier 1 — Image / Short intro / Metrics */}
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

                        {/* Read full case toggle — only if long text exists */}
                        {hasFullText && (
                          <button
                            onClick={(e) => handleReadToggle(e, index)}
                            className="self-start font-mono text-[11px] tracking-[0.2em] uppercase border-b border-white/30 pb-0.5 text-foreground hover:border-white transition-colors duration-200 focus:outline-none"
                          >
                            {isReadExpanded ? "Collapse" : "Read full case"}&nbsp;
                            <motion.span
                              className="inline-block"
                              animate={{ rotate: isReadExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              ↓
                            </motion.span>
                          </button>
                        )}

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

                    {/* Tier 2 — Full case study text */}
                    <AnimatePresence initial={false}>
                      {isReadExpanded && hasFullText && (
                        <motion.div
                          key="full-text"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.45, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.15 },
                          }}
                          style={{ overflowAnchor: "none" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/10 pt-10 pb-12">
                            {/* Narrow reading column centered or left-aligned under the text col */}
                            <div className="max-w-2xl md:ml-[33.333%] space-y-6">
                              <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-8">
                                Case Study
                              </p>
                              {project.fullDescription!.map((paragraph, i) => (
                                <p
                                  key={i}
                                  className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground"
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
