export type Metric = {
  label: string
  value: string
}

export type Engagement = {
  client: string
  sector: string
  year: string
  role: string
  tags: string[]
  problem: string[]
  approach: string[]
  outcome: string[]
  metrics: Metric[]
  note?: string
}

export type ExperienceEntry = {
  company: string
  role: string
  period: string
  location: string
  summary: string
  engagements: Engagement[]
}

export const experience: ExperienceEntry[] = [
  {
    company: "Enterprise Transformation Program",
    role: "Senior Product Designer",
    period: "2024 — 2025",
    location: "São Paulo / London",
    summary:
      "Led UX research and design for a large-scale factory-floor digitisation initiative, replacing paper-based quality control with a validated, real-time inspection platform.",
    engagements: [
      {
        client: "Riachuelo",
        sector: "Fashion Retail / Operations",
        year: "2025",
        role: "Lead Product Designer",
        tags: ["UX", "UI", "User Research", "Tablet-First"],
        problem: [
          "A legacy quality-control workflow in the textile operations of Riachuelo relied entirely on paper forms across factories in Brazil and China. Inspection data was manually recorded by factory inspectors and passed through multiple handoffs before reaching the BI team — introducing frequent errors, delays, and inconsistencies in reporting.",
          "The research uncovered a deeper issue beyond inefficiency: a systemic lack of trust in the data. Because inspection results could be easily altered or selectively reported, teams created informal verification steps, duplicating work and slowing down production.",
        ],
        approach: [
          "I conducted contextual inquiry on the factory floor, working closely with managers, inspectors, and operators to map the full lifecycle of a work order.",
          "Leading the end-to-end UX process, I translated these insights into a web-based inspection system designed primarily for tablet use on the factory floor. The solution replaced paper checklists with structured digital workflows and introduced validation mechanisms such as required fields, timestamping, and photo evidence to ensure data integrity at the point of entry.",
          "Inspectors could complete checklists in real time, attaching photos and submitting standardized reports, while managers gained live visibility into each work order through a centralized dashboard.",
        ],
        outcome: [
          "By redesigning both the interface and the underlying workflow, the system created a fully traceable inspection process, reducing the possibility of manipulation and eliminating the need for redundant verification steps.",
          "Processing time decreased by 73%, over 12,000 users were onboarded across multiple facilities, and post-launch surveys reported a 4.8 satisfaction score, driven by increased speed, transparency, and confidence in the system.",
        ],
        metrics: [
          { value: "73%", label: "Faster Processing" },
          { value: "12k", label: "Users Onboarded" },
          { value: "4.8", label: "Satisfaction Score" },
        ],
        note: "Detailed walkthrough available on request.",
      },
    ],
  },
  {
    company: "ERP Modernisation Initiative",
    role: "Product Designer — Design Systems",
    period: "2023 — 2024",
    location: "Remote",
    summary:
      "Established a token-based design system to support the migration of a 20-year-old desktop ERP to a modern web stack, serving multiple product teams.",
    engagements: [
      {
        client: "Gize / ERP Platform",
        sector: "Enterprise Software",
        year: "2024",
        role: "Design Systems Designer",
        tags: ["Design System", "Figma", "Tokens", "Documentation"],
        problem: [
          "As part of the migration of a legacy ERP system to a modern web architecture, the existing interface presented a major scalability challenge. Years of incremental development had resulted in a fragmented UI, with duplicated styles, conflicting patterns, and no shared foundation across products.",
          "A detailed audit of the existing interface revealed over 5,500 CSS rules and 13,000+ style declarations, exposing significant inconsistencies across layout, spacing, typography, and color usage. This fragmentation increased development complexity, slowed delivery, and created constant misalignment between design and engineering.",
        ],
        approach: [
          "Working as part of the design system team, I focused on identifying recurring patterns in the legacy interface and translating them into a consistent, reusable system. This included defining rules, standardizing UI patterns, and contributing to both the structure and behavior of new components.",
          "We established a token-based foundation covering spacing, typography, color, and elevation — creating a shared source of truth across design, development, and QA. Building on this, I contributed to a library of base and complex components, defining not only their visual structure but also their interaction states and behavior, ensuring they were implementation-ready.",
          "A key part of my role was producing structured documentation used across teams, clearly describing how tokens and components should be applied. This documentation enabled developers and QA to consistently implement and validate UI without relying on continuous design input.",
        ],
        outcome: [
          "The system saw strong organic adoption across 5 product teams, largely because it simplified day-to-day work. By removing the need for developers to make ad-hoc design decisions and providing ready-to-use patterns, the design system significantly reduced friction in the development process.",
          "Components and standards were actively reused in production, contributing to a 3x increase in development velocity and achieving 98% UI consistency across applications. By transforming a highly inconsistent legacy interface into a structured and scalable system, the design system became a critical foundation for the ERP migration.",
        ],
        metrics: [
          { value: "60+", label: "Components" },
          { value: "3x", label: "Dev Velocity" },
          { value: "98%", label: "Brand Consistency" },
          { value: "5", label: "Teams Served" },
        ],
        note: "Detailed walkthrough available on request.",
      },
    ],
  },
]

export function getExperienceByClient(client: string): Engagement | undefined {
  for (const entry of experience) {
    const found = entry.engagements.find((e) => e.client === client)
    if (found) return found
  }
  return undefined
}
