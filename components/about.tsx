"use client"

import React from "react"
import Image from "next/image"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { ScrollReveal } from "./scroll-reveal"
import { AnimatedCounter } from "./animated-counter"
import { Experience } from "./experience"
import {
  Languages,
  Palette,
  Gamepad2,
  Dumbbell,
  Music,
  BookOpen,
} from "lucide-react"

const languages = [
  { name: "Arabic", level: "Native", pct: 100 },
  { name: "French", level: "B2", pct: 75 },
  { name: "English", level: "B2", pct: 75 },
  { name: "German", level: "A1", pct: 25 },
]

const interests = [
  { name: "Sculpture", icon: Palette },
  { name: "Painting", icon: BookOpen },
  { name: "Languages", icon: Languages },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Fitness", icon: Dumbbell },
  { name: "Dance", icon: Music },
]

const stats = [
  { target: 6, suffix: "+", label: "Projects" },
  { target: 5, suffix: "+", label: "Years Learning" },
  { target: 5, suffix: "", label: "Tech Domains" },
  { target: 4, suffix: "", label: "Languages" },
]

function TiltPhoto() {
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const rotateX = useTransform(y, [0, 1], [8, -8])
  const rotateY = useTransform(x, [0, 1], [-8, 8])

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      className="relative shrink-0"
      style={{ perspective: 600 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      <div className="relative aspect-square w-44 overflow-hidden rounded-xl rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 shadow-[0_0_40px_-15px_rgba(203,157,240,0.6)]">
        <motion.div
          style={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="h-full w-full"
        >
          <Image
            src="/images/wiame-profile.jpeg"
            alt="Wiam Rabie"
            width={256}
            height={256}
            className="h-full w-full object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Animated ring */}
      <motion.div
        className="absolute -inset-2 -z-10 rounded-2xl"
        style={{
          background:
            "conic-gradient(from 0deg, hsl(275 58% 68% / 0.3), hsl(326 42% 72% / 0.3), hsl(28 65% 78% / 0.3), hsl(275 58% 68% / 0.3))",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute -inset-2 -z-10 rounded-2xl bg-background/80 backdrop-blur-sm" />
    </motion.div>
  )
}

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About Me"
          title="A Bit About Who I Am"
          description="Passionate about bridging the gap between intelligent systems and elegant user experiences."
        />

        {/* Stats row (reduced spacing) */}
        <ScrollReveal>
          <div className="mb-10 grid grid-cols-2 gap-6 rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm sm:grid-cols-4 sm:p-8">
            {stats.map((s) => (
              <AnimatedCounter
                key={s.label}
                target={s.target}
                suffix={s.suffix}
                label={s.label}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Reduced gaps for less empty space */}
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Photo + Story + Experience (under photo) */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="mb-6 flex items-start gap-6">
                <TiltPhoto />
                <p className="leading-relaxed text-muted-foreground">
                  {"I'm a Digital Engineering and Artificial Intelligence student with a deep curiosity for how technology can solve real-world problems. From medical image segmentation to building intelligent chatbots, I thrive at the intersection of innovation and impact. My work blends rigorous engineering with a creative eye for design and user experience."}
                </p>
              </div>
            </ScrollReveal>

            {/* Experience moved here (replaces old timeline spot) */}
            <div className="mt-4">
              <Experience />
            </div>
          </div>

          {/* Languages + Interests */}
          <div className="space-y-8 lg:col-span-2">
            <ScrollReveal delay={0.1}>
              <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-2">
                  <Languages size={18} className="text-primary" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Languages
                  </h3>
                </div>
                <div className="space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm text-foreground">{lang.name}</span>
                        <span className="text-xs font-medium text-primary">
                          {lang.level}
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                  Interests
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, i) => (
                    <motion.div
                      key={interest.name}
                      className="flex items-center gap-2.5 rounded-lg bg-muted/50 px-3 py-2.5 transition-colors duration-200 hover:bg-muted"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.06 }}
                      whileHover={{ x: 4 }}
                    >
                      <interest.icon size={16} className="shrink-0 text-accent" />
                      <span className="text-sm text-foreground">{interest.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
