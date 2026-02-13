"use client"

import { ScrollReveal } from "./scroll-reveal"

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <ScrollReveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
          {label}
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  )
}
