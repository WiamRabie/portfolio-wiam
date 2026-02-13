"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TypewriterProps {
  words: string[]
  className?: string
}

export function Typewriter({ words, className = "" }: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[index]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayed(current.slice(0, displayed.length + 1))
          if (displayed.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1800)
          }
        } else {
          setDisplayed(current.slice(0, displayed.length - 1))
          if (displayed.length - 1 === 0) {
            setIsDeleting(false)
            setIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 40 : 80,
    )

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, index, words])

  return (
    <span className={className}>
      <AnimatePresence mode="popLayout">
        {displayed.split("").map((char, i) => (
          <motion.span
            key={`${index}-${i}-${char}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="ml-0.5 inline-block w-[2px] bg-primary"
        style={{ height: "1em", verticalAlign: "text-bottom" }}
      />
    </span>
  )
}
