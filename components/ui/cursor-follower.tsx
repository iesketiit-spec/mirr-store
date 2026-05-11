"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  const cursorX = useSpring(0, { stiffness: 500, damping: 50 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 50 })

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || "ontouchstart" in window)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseenter", () => setIsVisible(true))
    window.addEventListener("mouseleave", () => setIsVisible(false))

    // Track hoverable elements
    const hoverables = document.querySelectorAll("a, button, [data-cursor-hover]")
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart)
      el.addEventListener("mouseleave", handleHoverEnd)
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("resize", checkMobile)
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart)
        el.removeEventListener("mouseleave", handleHoverEnd)
      })
    }
  }, [cursorX, cursorY])

  if (isMobile) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent mix-blend-difference pointer-events-none z-[9998]"
      />
      {/* Outer ring */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/30 pointer-events-none z-[9997]"
      />
    </>
  )
}
