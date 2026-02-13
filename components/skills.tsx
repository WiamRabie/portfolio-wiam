"use client"

import { SectionHeading } from "./section-heading"
import { ScrollReveal } from "./scroll-reveal"
import {
  Brain,
  BarChart3,
  Database,
  Cloud,
  Bot,
  Code2,
  HeartPulse,
} from "lucide-react"

const skillGroups = [
  {
    title: "Deep Learning & Computer Vision",
    icon: Brain,
    skills: [
      "Deep Learning Fundamentals",
      "CNNs",
      "3D Medical Imaging",
      "Medical Image Segmentation",
      "nnU-Net",
      "PyTorch (Training & Inference)",
    ],
  },
  {
    title: "Machine Learning & Data Science",
    icon: BarChart3,
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Anomaly Detection",
      "Feature Engineering",
      "Model Evaluation",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    title: "AI Agents, RAG & Automation",
    icon: Bot,
    skills: [
      "RAG (Retrieval-Augmented Generation)",
      "Vector Search (FAISS)",
      "LangChain",
      "Prompting (Basics)",
      "LLM Integration (API-based)",
      "Tool / Function Calling (Concepts)",
      "Automation Workflows (MVP)",
      "Backend Agent Logic (FastAPI-style APIs)",
    ],
  },
  {
    title: "Big Data, BI & Data Warehouse",
    icon: Database,
    skills: [
      "Big Data Fundamentals",
      "ETL Concepts",
      "Data Pipelines (Academic Projects)",
      "Data Warehouse Concepts",
      "Star / Snowflake Schema",
      "Business Intelligence (BI)",
      "Dashboards & Reporting",
    ],
  },
  {
    title: "Cloud, Containers & Systems",
    icon: Cloud,
    skills: [
      "Docker (Basics)",
      "Kubernetes (Academic Exposure)",
      "Cloud Computing Fundamentals",
      "Linux Basics",
      "API Integration Concepts",
    ],
  },
  {
    title: "Programming & Databases",
    icon: Code2,
    skills: [
      "Python",
      "C / C++",
      "SQL",
      "Algorithms & Data Structures",
      "Relational Databases",
      "Data Modeling",
      "Jupyter / Colab Workflow",
      "Git / GitHub",
    ],
  },
  {
    title: "Healthcare Background (Bonus)",
    icon: HeartPulse,
    skills: [
      "Medical Terminology",
      "Clinical Workflows",
      "Rehabilitation Context",
      "Patient-Centered Communication",
      "Healthcare Data Awareness",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technical Skills"
          description="AI, data, and engineering skills — with agentic RAG systems and automation, plus a healthcare background."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.title} delay={i * 0.08}>
              <div className="group h-full rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <group.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-xs text-muted-foreground transition-colors duration-200 group-hover:border-primary/20 group-hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
