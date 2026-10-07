export type Metric = {
  label: string
  value: string
}

export type Screenshot = {
  src: string
  alt: string
  caption: string
}

export type StackGroup = {
  category: string
  items: string
}

export type FeaturedProject = {
  slug: string
  title: string
  shortTitle: string
  tags: string[]
  image: string
  year: string
  description: string
  fullDescription: string[]
  role: string
  team: string
  duration: string
  status: string
  metrics: Metric[]
  quote?: string
  quoteAuthor?: string
  pullQuote?: string
  screenshots: Screenshot[]
  stack?: StackGroup[]
  video?: {
    src: string
    poster: string
  }
  downloadUrl?: string
}

export const featuredProject: FeaturedProject = {
  slug: "localmeet",
  title: "LocalMeet — Offline AI Meeting Assistant",
  shortTitle: "LocalMeet",
  tags: ["Product Design", "Desktop App", "AI", "Rust", "Tauri"],
  image: "/localmeet/localmeet-home.png",
  year: "2026",
  description:
    "A privacy-first desktop app that records meetings, transcribes them, and turns them into summaries, decisions, and action items — entirely on-device. No cloud, no account, no telemetry.",
  fullDescription: [
    "Meetings generate decisions, action items, and context that teams lose the moment the call ends. AI assistants promise to capture it all — but they send confidential audio and transcripts to the cloud, which is a non-starter for teams and professionals who handle sensitive conversations.",
    "LocalMeet was built around a single question: can a meeting assistant be genuinely useful while never leaving the user's computer? The answer had to be a polished desktop app, not an engineering demo — no account, no upload, no telemetry, and the AI itself running locally.",
    "I designed and built the entire product. The AI is compiled directly into the binary — speech-to-text via whisper.cpp and analysis via llama.cpp — so there are no cloud dependencies and models can even be swapped or downloaded from within the app.",
    "The core journey is intentionally minimal: record, stop, and the app transcribes the meeting and structures it into a summary, decisions, action items with owners and deadlines, unresolved questions, key topics, and participants — with a searchable, timestamped transcript.",
    "Trust is a visible feature rather than a hidden one. A persistent on-device indicator, privacy toggles, storage visibility, and action items that link back to transcript evidence all make the privacy promise tangible and auditable.",
    "The result is a working, offline-first meeting assistant that proves useful AI intelligence doesn't require sacrificing privacy.",
  ],
  role: "Product Designer & Developer",
  team: "Solo",
  duration: "4 weeks to MVP",
  status: "Private beta",
  metrics: [
    { value: "0", label: "Cloud Calls" },
    { value: "100%", label: "On-device" },
    { value: "2", label: "Local AI Engines" },
    { value: "5", label: "Core Screens" },
  ],
  quote:
    "This is the first meeting tool that doesn't make me read a privacy policy.",
  quoteAuthor: "Beta Tester",
  pullQuote:
    "The value is not the biggest model. The value is that useful meeting intelligence runs privately on your computer.",
  screenshots: [
    {
      src: "/localmeet/localmeet-meeting.png",
      alt: "LocalMeet meeting view showing summary, decisions, and action items",
      caption: "Meeting view — summary, decisions, and action items",
    },
    {
      src: "/localmeet/localmeet-transcript.png",
      alt: "LocalMeet searchable transcript with timestamps and speakers",
      caption: "Transcript — searchable, timestamped, linked to evidence",
    },
    {
      src: "/localmeet/localmeet-recording.png",
      alt: "LocalMeet recording screen with pause and stop controls",
      caption: "Recording — minimal controls, privacy indicator visible",
    },
    {
      src: "/localmeet/localmeet-settings.png",
      alt: "LocalMeet settings with local model download and privacy controls",
      caption: "Settings — model downloader, storage, and privacy toggles",
    },
  ],
  stack: [
    { category: "Design", items: "Figma" },
    { category: "AI collaboration", items: "Claude" },
    { category: "Backend", items: "Rust" },
    { category: "Frontend", items: "HTML, CSS, JavaScript" },
  ],
  downloadUrl: "https://github.com/nasserkhalil/localmeet/releases",
}

export function getProjectBySlug(slug: string): FeaturedProject | undefined {
  return featuredProject.slug === slug ? featuredProject : undefined
}
