"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { ScrollReveal } from "./scroll-reveal"
import {
  ExternalLink,
  Github,
  Link as LinkIcon,
  Bot,
  Wind,
  FlaskConical,
  MessageCircle,
  ShieldAlert,
  Stethoscope,
  Building2,
} from "lucide-react"

type Project = {
  title: string
  description: string
  tags: string[]
  icon: any
  accent: "primary" | "secondary" | "accent"
  links?: { label: string; href: string; icon: any }[]
}

const projects: Project[] = [
  {
    title: "SkyBot — RAG AI Assistant",
    description:
      "AI assistant built with Retrieval-Augmented Generation (RAG): users upload documents and ask questions. Combines semantic search with LLMs via a clean API and web interface.",
    tags: ["Python", "FastAPI", "LangChain", "FAISS", "Groq LLMs", "REST API"],
    icon: Bot,
    accent: "primary",
    links: [
      { label: "GitHub", href: "https://github.com/WiamRabie/skybot", icon: Github },
    ],
  },
  {
    title: "Air Quality Analysis — Beijing PM2.5",
    description:
      "Deep learning and data science workflow on the Beijing PM2.5 dataset with preprocessing, modeling, and evaluation in a structured notebook pipeline.",
    tags: ["Python", "Pandas", "scikit-learn", "Deep Learning", "Jupyter"],
    icon: Wind,
    accent: "secondary",
    links: [
      { label: "GitHub", href: "https://github.com/WiamRabie/air-quality-analysis", icon: Github },
    ],
  },
  {
    title: "Iris Species Classification — ML Pipeline",
    description:
      "End-to-end supervised machine learning pipeline: EDA, preprocessing, model training, hyperparameter tuning, and evaluation with clear visualizations.",
    tags: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    icon: FlaskConical,
    accent: "accent",
    links: [
      { label: "GitHub", href: "https://github.com/WiamRabie/iris-ml-classification-pipeline", icon: Github },
      {
        label: "Colab",
        href: "https://colab.research.google.com/github/WiamRabie/iris-ml-classification-pipeline/blob/main/notebooks/01_iris_classification_pipeline.ipynb",
        icon: LinkIcon,
      },
    ],
  },
  {
    title: "WhatsApp Intelligent Agent (MVP)",
    description:
      "Intelligent WhatsApp agent MVP designed to automate customer orders, validate requests, and interact with backend systems using LLMs and structured data.",
    tags: ["FastAPI", "SQL", "LLMs", "RAG", "Automation"],
    icon: MessageCircle,
    accent: "primary",
  },
  {
    title: "Bank Fraud Detection",
    description:
      "Fraud and anomaly detection system for banking transactions using feature engineering and machine learning techniques.",
    tags: ["Python", "Pandas", "scikit-learn", "Anomaly Detection"],
    icon: ShieldAlert,
    accent: "secondary",
  },
  {
    title: "Healthcare AI (Grouped Projects)",
    description:
      "Grouped medical imaging deep learning projects: Alzheimer’s disease detection and knee osteoarthritis detection using CNN-based approaches.",
    tags: ["CNN", "Deep Learning", "Medical Imaging", "Python"],
    icon: Stethoscope,
    accent: "accent",
  },
  {
    title: "Corporate Website — GD Scan",
    description:
      "Static corporate website developed for GD Scan with clean UI structure, responsive design, and well-organized content.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    icon: Building2,
    accent: "primary",
  },
]

const accentStyles = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    tag: "bg-primary/10 text-primary",
    glow: "from-primary/20 via-primary/10",
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    tag: "bg-secondary/10 text-secondary",
    glow: "from-secondary/20 via-secondary/10",
  },
  accent: {
    bg: "bg-accent/15",
    text: "text-accent",
    tag: "bg-accent/20 text-accent-foreground",
    glow: "from-accent/30 via-accent/10",
  },
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="Selected projects in AI, machine learning, healthcare, and web development."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const style = accentStyles[project.accent]
            return (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <motion.article
                  tabIndex={0}
                  aria-label={project.title}
                  className="group relative flex h-full flex-col rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm outline-none
                             focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Visual cover */}
                  <div
                    className={`mb-4 flex h-32 items-center justify-center rounded-lg bg-gradient-to-br ${style.glow} to-transparent`}
                  >
                    <project.icon size={40} className={style.text} />
                  </div>

                  {/* Links (hover) */}
                  <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    {project.links?.length ? (
                      project.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={l.label}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-card/40 text-muted-foreground hover:text-foreground hover:border-primary/40 transition"
                        >
                          <l.icon size={16} />
                        </a>
                      ))
                    ) : (
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-card/30 text-muted-foreground">
                        <ExternalLink size={16} />
                      </span>
                    )}
                  </div>

                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${style.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
