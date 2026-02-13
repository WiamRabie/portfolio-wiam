"use client"

import { CursorGlow } from "@/components/cursor-glow"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { HealthcareBackground } from "@/components/healthcare-background"



export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <HealthcareBackground />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
