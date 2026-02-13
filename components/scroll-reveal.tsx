"use client"

import React, { type ReactNode, useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduceMotion = useReducedMotion()

  // IMPORTANT: un margin trop agressif peut retarder le "in view" sur mobile
  const isInView = useInView(ref, { once: true, margin: "-20px" })

  // On évite l'écran vide au chargement (mobile hydration)
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  const directionOffset = {
    up: { y: 26, x: 0 },
    down: { y: -26, x: 0 },
    left: { x: 26, y: 0 },
    right: { x: -26, y: 0 },
  } as const

  // SAFE: avant montage (ou si reduce motion), on affiche le contenu direct
  if (!mounted || reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      // SAFE: si pas encore inView, on garde le contenu visible (opacity 1)
      initial={{ opacity: 1, x: 0, y: 0 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 1, ...directionOffset[direction] }
      }
      transition={{
        duration: 0.55,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
