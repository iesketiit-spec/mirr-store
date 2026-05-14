"use client"

import { Truck } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-background border-b border-border/50 py-2 overflow-hidden">
      <div className="flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
        <Truck className="h-3.5 w-3.5" />
        <span>Envios a Colombia y Ecuador - $10 USD</span>
      </div>
    </div>
  )
}
