"use client"

import { useMemo, useState } from "react"
import { SectionHeading } from "./section-heading"
import { ScrollReveal } from "./scroll-reveal"
import { Mail, Linkedin, Github, Send } from "lucide-react"

const EMAIL = "rabiewiame@gmail.com" 
const GITHUB_URL = "https://github.com/WiamRabie"
const LINKEDIN_URL = "https://www.linkedin.com/in/wiam-rabie-64aaa5340/" // ex: "https://www.linkedin.com/in/ton-username/"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const mailtoHref = useMemo(() => {
    const finalSubject = subject?.trim() || "Portfolio contact"
    const bodyLines = [
      "Hello Wiam,",
      "",
      message?.trim() ? message.trim() : "(Your message here)",
      "",
      `— Name: ${name?.trim() || "(not provided)"}`,
      `— Email: ${email?.trim() || "(not provided)"}`,
    ]
    const body = bodyLines.join("\n")
    return `mailto:${EMAIL}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(body)}`
  }, [name, email, subject, message])

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          description="Have a project idea, a question, or just want to say hello? I’d love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-2">
            <ScrollReveal>
              <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    <Mail size={16} className="shrink-0 text-primary" />
                    {EMAIL}
                  </a>

                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    <Linkedin size={16} className="shrink-0 text-primary" />
                    LinkedIn
                  </a>

                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    <Github size={16} className="shrink-0 text-primary" />
                    GitHub
                  </a>
                </div>

                <div className="mt-6 rounded-lg border border-border/40 bg-muted/20 p-4 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Pro tip:</span>{" "}
                  The form opens your email app with a pre-filled message — no backend needed.
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.1}>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-border/50 bg-muted/30 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-colors duration-200 focus:border-primary/50 focus:ring-1 focus:ring-primary/25"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-border/50 bg-muted/30 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-colors duration-200 focus:border-primary/50 focus:ring-1 focus:ring-primary/25"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What's this about?"
                    className="w-full rounded-lg border border-border/50 bg-muted/30 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-colors duration-200 focus:border-primary/50 focus:ring-1 focus:ring-primary/25"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-lg border border-border/50 bg-muted/30 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-colors duration-200 focus:border-primary/50 focus:ring-1 focus:ring-primary/25"
                  />
                </div>

                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  <Send size={14} />
                  Send Message
                </a>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
