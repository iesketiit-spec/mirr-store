"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface MirrLogoProps {
  className?: string
  variant?: "light" | "dark"
}

export function MirrLogo({ className, variant = "light" }: MirrLogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="MIRR"
      width={120}
      height={40}
      priority
      className={cn(
        "w-auto",
        variant === "dark" ? "invert" : "",
        className
      )}
    />
  )
}
