import { permanentRedirect } from "next/navigation"
import type { Metadata } from "next"
import { featuredProject } from "@/lib/projects"
import { LocalMeetCaseStudy } from "./LocalMeetCaseStudy"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return [{ slug: featuredProject.slug }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (slug !== featuredProject.slug) return {}
  return {
    title: `${featuredProject.title} — Case Study`,
    description: featuredProject.description,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  if (slug !== featuredProject.slug) {
    permanentRedirect("/#experience")
  }

  return <LocalMeetCaseStudy project={featuredProject} prev={null} next={null} />
}
