"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Mail,
  Sparkles,
  Github,
  Linkedin,
  Download,
} from "lucide-react"
import { HeroBackground } from "./hero-background"
import { Typewriter } from "./typewriter"

const roles = [
  "AI & Data Engineering",
  "Deep Learning",
  "Machine Learning",
  "Applied AI Projects",
  "Healthcare AI Focus",
]


export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary backdrop-blur-sm">
            <Sparkles size={12} />
            Digital Engineering & AI
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 mb-2 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl"
        >
          {"Hi, I'm "}
          <span className="relative inline-block">
            {"Wiam Rabie".split("").map((char, i) => (
              <motion.span
                key={`name-${i}`}
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.04,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.span
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-foreground/15 to-transparent bg-[length:200%_100%]"
              style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}
              animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
              transition={{
                duration: 3,
                delay: 1.5,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "linear",
              }}
            />
          </span>
        </motion.h1>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-8 h-8 text-lg font-medium text-secondary sm:text-xl"
        >
          <Typewriter words={roles} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Crafting intelligent solutions at the intersection of artificial
          intelligence and elegant engineering. Passionate about turning complex
          problems into beautiful, impactful technology.
        </motion.p>

        {/* CTA + Social */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Projects */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-2">
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </a>

          {/* CV */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-8 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card"
          >
            <Download size={16} className="text-muted-foreground group-hover:text-primary" />
            Download CV
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/WiamRabie"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:text-foreground"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/wiam-rabie-64aaa5340/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:text-foreground"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#contact"
              aria-label="Contact"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:text-foreground"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1"
          >
            <motion.div
              animate={{ height: ["30%", "70%", "30%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full rounded-full bg-primary/60"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
