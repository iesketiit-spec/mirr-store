"use client"

import { motion } from "framer-motion"

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
  className?: string
}

export function Marquee({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      style={{ 
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        className={`inline-flex ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        animate={{
          x: direction === "left" ? [0, "-50%"] : ["-50%", 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

export function MarqueeText({ 
  text, 
  separator = " — ", 
  className = "",
  textClassName = "",
}: { 
  text: string
  separator?: string
  className?: string
  textClassName?: string
}) {
  const items = Array(8).fill(text)
  
  return (
    <Marquee className={className}>
      {items.map((item, index) => (
        <span key={index} className={`inline-flex items-center ${textClassName}`}>
          {item}
          <span className="mx-8 text-accent">{separator}</span>
        </span>
      ))}
    </Marquee>
  )
}
