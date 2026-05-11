"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MirrLogo } from "./mirr-logo"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 300)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.03, 0.08, 0.03],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/20 blur-[120px]"
            />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Logo with pulse effect */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-12"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-32 h-32 rounded-full border border-accent/30" />
              </motion.div>
              <MirrLogo className="h-16 w-auto relative z-10" />
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-px bg-border overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: `${progress - 100}%` }}
                className="h-full bg-foreground"
              />
            </div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-xs tracking-[0.4em] uppercase text-muted-foreground"
            >
              Cargando
            </motion.p>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-border/30" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-border/30" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-border/30" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-border/30" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
