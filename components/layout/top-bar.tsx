"use client"

import { Globe } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-background border-b border-border/50 py-2 overflow-hidden">
      <div className="flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
        <Globe className="h-3.5 w-3.5" />
        <span>Envíos a todo el mundo</span>
      </div>
    </div>
  )
}
