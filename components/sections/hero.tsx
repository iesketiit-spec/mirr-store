"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1b58c61b-559d-4f87-b870-55a051b9d511.jpeg"
          alt="MIRR Streetwear"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-16"
      >
        <div className="max-w-2xl">
          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-accent text-xs tracking-[0.3em] uppercase">MIRR</span>
            <div className="w-12 h-px bg-accent/50" />
            <span className="text-muted-foreground text-xs tracking-[0.2em]">01</span>
          </motion.div>

          {/* Main Title */}
          <div className="mb-6 overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-balance"
            >
              <span className="block">MÁS QUE ROPA,</span>
              <span className="block">
                ES <span className="text-accent">ACTITUD.</span>
              </span>
            </motion.h1>
          </div>

          {/* Decorative Star */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <StarDecoration className="h-6 w-auto text-foreground/30" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mb-8"
          >
            Diseñamos para los que rompen las reglas, para los que viven el streetwear con identidad y sin miedo a ser diferentes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/tienda">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
              >
                Comprar Ahora
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="/lookbook">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-foreground/30 text-foreground font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/5 hover:border-foreground/50 transition-all"
              >
                Ver Lookbook
                <Play className="h-4 w-4" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Slide Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex items-center gap-8"
          >
            <span className="text-foreground font-sans text-xl font-semibold">01</span>
            <div className="flex-1 max-w-[200px] h-px bg-border relative">
              <div className="absolute inset-y-0 left-0 w-1/3 bg-foreground" />
            </div>
            <span className="text-muted-foreground font-sans">02</span>
            <span className="text-muted-foreground/50 font-sans">03</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent"
        />
      </motion.div>
    </section>
  )
}

function StarDecoration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 10" className={className} fill="currentColor">
      <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1" />
      <polygon points="25,0 27,4 25,5 27,6 25,10 23,6 25,5 23,4" />
      <line x1="30" y1="5" x2="50" y2="5" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
