"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const springConfig = { damping: 25, stiffness: 100 }
  const parallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig)
  const parallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute inset-[-20px]"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1b58c61b-559d-4f87-b870-55a051b9d511.jpeg"
            alt="MIRR Streetwear"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </motion.div>
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-transparent" />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </motion.div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none">
        <div className="absolute left-[20%] top-0 bottom-0 w-px bg-foreground" />
        <div className="absolute left-[40%] top-0 bottom-0 w-px bg-foreground" />
        <div className="absolute left-[60%] top-0 bottom-0 w-px bg-foreground" />
        <div className="absolute left-[80%] top-0 bottom-0 w-px bg-foreground" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-16"
      >
        <div className="max-w-2xl">
          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <motion.span 
              className="text-accent text-xs tracking-[0.3em] uppercase font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              MIRR
            </motion.span>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isMounted ? { scaleX: 1 } : {}}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
              className="w-16 h-px bg-accent/50 origin-left" 
            />
            <span className="text-muted-foreground text-xs tracking-[0.2em]">2026</span>
          </motion.div>

          {/* Main Title with Stagger Animation */}
          <div className="mb-6 overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={isMounted ? { y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] text-balance">
                <span className="block">MÁS QUE ROPA,</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ y: "100%" }}
              animate={isMounted ? { y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9]">
                <span className="block">
                  ES <span className="text-accent relative">
                    ACTITUD
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={isMounted ? { scaleX: 1 } : {}}
                      transition={{ delay: 1.2, duration: 0.6 }}
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/30 origin-left"
                    />
                  </span>
                  <span className="text-accent">.</span>
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Decorative Star */}
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={isMounted ? { scale: 1, rotate: 0, opacity: 1 } : {}}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
            className="mb-8"
          >
            <StarDecoration className="h-6 w-auto text-foreground/20" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mb-10"
          >
            Diseñamos para los que rompen las reglas, para los que viven el streetwear con identidad y sin miedo a ser diferentes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/tienda">
              <MagneticButton
                strength={0.15}
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Comprar Ahora
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-accent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </MagneticButton>
            </Link>
            <Link href="/lookbook">
              <MagneticButton
                strength={0.15}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-foreground/30 text-foreground font-sans text-sm tracking-[0.15em] uppercase hover:border-foreground/60 transition-colors duration-300"
              >
                Ver Lookbook
                <Play className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              </MagneticButton>
            </Link>
          </motion.div>

          {/* Slide Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-16 lg:mt-24 flex items-center gap-8"
          >
            <span className="text-foreground font-sans text-xl font-semibold">01</span>
            <div className="flex-1 max-w-[200px] h-px bg-border relative overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-foreground"
                initial={{ width: "0%" }}
                animate={isMounted ? { width: "33%" } : {}}
                transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <span className="text-muted-foreground font-sans">02</span>
            <span className="text-muted-foreground/50 font-sans">03</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isMounted ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent"
        />
      </motion.div>

      {/* Corner Accents */}
      <div className="absolute top-24 right-8 lg:right-16 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isMounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-right"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">Medellín, Colombia</p>
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground/50">37°N 122°W</p>
        </motion.div>
      </div>
    </section>
  )
}

function StarDecoration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 12" className={className} fill="currentColor">
      <line x1="0" y1="6" x2="24" y2="6" stroke="currentColor" strokeWidth="0.5" />
      <polygon points="30,0 32.5,5 30,6 32.5,7 30,12 27.5,7 30,6 27.5,5" />
      <line x1="36" y1="6" x2="60" y2="6" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  )
}
