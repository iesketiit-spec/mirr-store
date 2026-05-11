"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Play } from "lucide-react"

export function CollectionBanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d113971e-e45b-40e9-a960-80b91af0a30f.jpeg"
          alt="Medellín Collection"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-xl">
          {/* Collection Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-xs tracking-[0.3em] uppercase mb-4"
          >
            Colección 2026
          </motion.p>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4"
          >
            <div className="flex items-center gap-3">
              <StarDecoration className="h-4 w-4 text-foreground" />
              <h2 className="font-sans text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
                MEDELLÍN
              </h2>
              <StarDecoration className="h-4 w-4 text-foreground" />
            </div>
          </motion.div>

          {/* Logo and Star */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-sans text-2xl italic text-foreground/80">MIRR</span>
            <StarIcon className="h-6 w-6 text-accent" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8"
          >
            Inspirada en las calles de Medellín. Cada pieza es un homenaje a la cultura, al barrio y a nuestra esencia.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/colecciones/medellin">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-foreground/30 text-foreground font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/5 hover:border-foreground/50 transition-all"
              >
                Ver Lookbook
                <Play className="h-4 w-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StarDecoration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor">
      <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" />
    </svg>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  )
}
