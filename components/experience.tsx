"use client"

import { SectionHeading } from "./section-heading"
import { ScrollReveal } from "./scroll-reveal"
import { GraduationCap, Briefcase, Cpu } from "lucide-react"

const timeline = [
  {
    year: "Mars 2026 – Juil. 2026",
    title: "AI Engineer Intern — Wineo AI",
    subtitle: "Wineo CX · Multi-tenant SaaS platform",
    description:
      "AI voice agent (Gemini, RAG pipeline), frontend (conversations dashboard, tenant config), backend (WhatsApp/SMS/email APIs, Twilio, MongoDB).",
    icon: Briefcase,
    color: "primary",
  },
  {
    year: "Juin 2025 – Août 2025",
    title: "AI / RAG Engineer Intern — SITA",
    subtitle: "SkyBot · Internal RAG assistant",
    description:
      "Retrieval-Augmented Generation pipeline (FAISS, LLaMA), FastAPI REST API, adopted internally by business teams.",
    icon: Briefcase,
    color: "accent",
  },
  {
    year: "Juil. 2024",
    title: "Web Development Intern — GD Scan",
    subtitle: "Corporate website & employee portal",
    description:
      "Responsive corporate site and employee management interface (HTML, CSS, JavaScript).",
    icon: Briefcase,
    color: "secondary",
  },
  {
    year: "2023 – 2026",
    title: "Digital Engineering & Artificial Intelligence in Health",
    subtitle: "Engineering Degree",
    description:
      "Engineering program focused on AI, machine learning, deep learning, and production software systems.",
    icon: Cpu,
    color: "primary",
  },
  {
    year: "2019",
    title: "Baccalaureate — Mathematics B",
    subtitle: "Scientific track, French option",
    description:
      "Strong foundation in mathematics, logic, and analytical thinking.",
    icon: GraduationCap,
    color: "secondary",
  },
]

const colorStyles: Record<string, string> = {
  primary: "bg-primary/20 text-primary ring-primary/30",
  secondary: "bg-secondary/20 text-secondary ring-secondary/30",
  accent: "bg-accent/30 text-accent-foreground ring-accent/30",
}

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Experience"
          title="Education & AI Experience"
          description="A clear timeline of my engineering studies and applied AI experience."
        />

        {/* Timeline */}
        <div className="relative mt-12 space-y-10 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-primary/40 before:via-secondary/40 before:to-accent/40">
          {timeline.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="group relative">
                {/* Icon */}
                <div
                  className={`absolute -left-8 top-1 flex h-7 w-7 items-center justify-center rounded-full ring-2 transition-all duration-300 group-hover:scale-110 ${colorStyles[item.color]}`}
                >
                  <item.icon size={14} />
                </div>

                {/* Content */}
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
                  {item.year}
                </p>

                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mb-1 text-sm text-secondary">
                  {item.subtitle}
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
