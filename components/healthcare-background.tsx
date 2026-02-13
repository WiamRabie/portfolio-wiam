"use client"

import { SectionHeading } from "./section-heading"
import { ScrollReveal } from "./scroll-reveal"
import { Stethoscope, PlayCircle, Briefcase } from "lucide-react"

export function HealthcareBackground() {
  return (
    <section id="healthcare" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Background"
          title="Healthcare & Rehabilitation"
          description="My clinical background strengthens my ability to design realistic, responsible, and impactful AI solutions."
        />

        <div className="relative mt-12 space-y-8 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-primary/40 before:via-secondary/40 before:to-accent/40">
          
          {/* Block 1 — Physiotherapy */}
          <ScrollReveal>
            <div className="group relative">
              <div className="absolute -left-8 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary ring-2 ring-primary/30 transition-all duration-300 group-hover:scale-110">
                <Stethoscope size={14} />
              </div>

              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
                2020 – 2023
              </p>
              <h3 className="text-base font-semibold text-foreground">
                Physiotherapy Studies
              </h3>
              <p className="mb-1 text-sm text-secondary">
                Clinical Internships in Rehabilitation
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Completed a three-year physiotherapy program with multiple clinical internships.
                This experience developed strong clinical reasoning, communication skills,
                and a deep understanding of patient-centered workflows.
              </p>
            </div>
          </ScrollReveal>

          {/* Block 2 — Thesis Video (LOCAL • SMALL • PRO) */}
          <ScrollReveal delay={0.1}>
            <div className="group relative">
              <div className="absolute -left-8 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent/30 text-accent-foreground ring-2 ring-accent/30 transition-all duration-300 group-hover:scale-110">
                <PlayCircle size={14} />
              </div>

              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
                Thesis Presentation
              </p>
              <h3 className="text-base font-semibold text-foreground">
                Physiotherapy Final Defense (Excerpt)
              </h3>
              <p className="mb-2 text-sm text-secondary">
                Communication • Structure • Professional presentation
              </p>

              {/* VIDEO — FULL VIEW, CLEAN & PRO */}
              <div className="mt-4">
                <div className="max-w-[420px] rounded-xl border border-border/50 bg-background/80 p-3 shadow-sm">
                  <video
                    src="/kine-preview.mp4"
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full rounded-lg object-contain bg-black"
                  />
                </div>
              </div>
            

              <p className="mt-3 max-w-[320px] text-xs leading-relaxed text-muted-foreground">
                Short excerpt from my physiotherapy thesis defense, showcasing clear communication
                and structured presentation of complex topics.
              </p>
            </div>
          </ScrollReveal>

          {/* Block 3 — Transferable Skills */}
          <ScrollReveal delay={0.2}>
            <div className="group relative">
              <div className="absolute -left-8 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-secondary/20 text-secondary ring-2 ring-secondary/30 transition-all duration-300 group-hover:scale-110">
                <Briefcase size={14} />
              </div>

              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
                Strength
              </p>
              <h3 className="text-base font-semibold text-foreground">
                Why this matters for AI internships
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                My healthcare background allows me to understand real-world constraints,
                communicate effectively with non-technical stakeholders, and design AI systems
                that are practical, ethical, and user-centered.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}