"use client"

import { cn } from "@/lib/utils"

interface MirrLogoProps {
  className?: string
  variant?: "light" | "dark"
}

export function MirrLogo({ className, variant = "light" }: MirrLogoProps) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={cn(
        "fill-current",
        variant === "light" ? "text-foreground" : "text-background",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stylized MIRR text with brush stroke effect */}
      <path d="M2 35 L2 8 Q3 6 5 7 L12 25 Q13 27 14 25 L21 7 Q23 6 24 8 L24 35 Q23 37 21 35 L21 20 Q20 18 19 20 L14 32 Q13 34 12 32 L7 20 Q6 18 5 20 L5 35 Q4 37 2 35Z" />
      <path d="M30 35 L30 8 Q31 6 33 7 L33 35 Q32 37 30 35Z" />
      <path d="M40 35 L40 8 Q41 6 43 7 L55 7 Q62 8 62 15 Q62 20 58 22 L65 35 Q64 37 62 35 L56 24 L48 24 L48 35 Q47 37 45 35 L40 35Z M48 18 L54 18 Q57 18 57 15 Q57 12 54 12 L48 12 L48 18Z" />
      <path d="M70 35 L70 8 Q71 6 73 7 L85 7 Q92 8 92 15 Q92 20 88 22 L95 35 Q94 37 92 35 L86 24 L78 24 L78 35 Q77 37 75 35 L70 35Z M78 18 L84 18 Q87 18 87 15 Q87 12 84 12 L78 12 L78 18Z" />
      {/* Underline swoosh */}
      <path d="M2 38 Q30 42 60 38 Q90 34 118 38" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}
