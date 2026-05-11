"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] lg:aspect-square overflow-hidden"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9944d68f-de01-4265-b9a5-ae70ffbb2a7c.jpeg"
              alt="Sobre MIRR"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent text-xs tracking-[0.3em] uppercase mb-4"
            >
              Sobre MIRR
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-2"
            >
              NACIDO EN MEDELLÍN.
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="font-sans text-3xl lg:text-4xl font-bold tracking-tight mb-6"
            >
              HECHO PARA <span className="text-accent">DESTACAR.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8"
            >
              MIRR nace en Medellín, una ciudad que inspira, que crea y que nunca se detiene. Cada pieza refleja quiénes somos y de dónde venimos. Orgullosos de nuestra cultura, nuestras raíces y nuestra gente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/sobre-mirr">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-foreground/30 text-foreground font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/5 hover:border-foreground/50 transition-all"
                >
                  Conoce nuestra historia
                  <Play className="h-4 w-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
