import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { getProjectBySlug, projects } from "@/lib/projects"
import { CaseStudyClient } from "./case-study-client"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  // Find prev/next for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prev = projects[currentIndex - 1] ?? null
  const next = projects[currentIndex + 1] ?? null

  return <CaseStudyClient project={project} prev={prev} next={next} />
}
