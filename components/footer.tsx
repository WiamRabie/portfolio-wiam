"use client"

import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {"© 2026 Wiam Rabie. All rights reserved."}
        </p>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          Built with <Heart size={14} className="text-secondary" /> and code
        </p>
      </div>
    </footer>
  )
}
