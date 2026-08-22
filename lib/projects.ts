export type Metric = {
  label: string
  value: string
}

export type Project = {
  slug: string
  title: string
  tags: string[]
  image: string
  year: string
  description: string
  fullDescription?: string[]
  metrics: Metric[]
  quote?: string
  quoteAuthor?: string
  pullQuote?: string
}

export const projects: Project[] = [
  {
    slug: "riachuelo",
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
    quote:
      "For the first time, we could trust the data coming from the factory floor. It changed how we made decisions.",
    quoteAuthor: "Operations Manager, Riachuelo",
    pullQuote:
      "The real problem was never speed — it was trust. When data can be altered, every number becomes a question.",
  },
  {
    slug: "design-system",
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
    quote:
      "It wasn't just a component library — it became the shared language between design and engineering.",
    quoteAuthor: "Engineering Lead",
    pullQuote:
      "5,500 CSS rules. 13,000 style declarations. Years of small decisions compounding into a system no one could untangle — only replace.",
  },
  {
    slug: "law-firm",
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
    quote:
      "Within two months, we went from invisible to the first result for immigration lawyers in our region.",
    quoteAuthor: "Managing Partner",
    pullQuote:
      "The best legal websites don't sound like lawyers — they sound like answers.",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
