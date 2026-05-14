"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

const collections = [
  {
    id: "medellin",
    name: "Medellin Collection",
    year: "2026",
    description: "Inspirada en las calles de Medellin. Cada pieza es un homenaje a la cultura, al barrio y a nuestra esencia. Hoodies, camisetas, pantalones y conjuntos disenados para destacar.",
    image: "/tee-medellin.jpeg",
    href: "/colecciones/medellin",
    isNew: true,
  },
]

export default function ColeccionesPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-xs tracking-[0.3em] uppercase mb-4"
          >
            Explora
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-4"
          >
            COLECCIONES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base lg:text-lg max-w-lg"
          >
            Cada coleccion cuenta una historia. Descubre las piezas que definen el estilo MIRR.
          </motion.p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8 lg:space-y-16">
            {collections.map((collection, index) => (
              <CollectionCard
                key={collection.id}
                collection={collection}
                index={index}
                isReversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            Explora toda la tienda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-lg mx-auto mb-8"
          >
            Descubre hoodies, camisetas, pantalones y conjuntos. Todas las piezas con envio a Colombia y Ecuador.
          </motion.p>
          <Link href="/tienda">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
            >
              Ver todos los productos
            </motion.button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

interface CollectionCardProps {
  collection: {
    id: string
    name: string
    year: string
    description: string
    image: string
    href: string
    isNew: boolean
  }
  index: number
  isReversed: boolean
}

function CollectionCard({ collection, index, isReversed }: CollectionCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={collection.href}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
          {/* Image */}
          <motion.div
            className={`relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden ${isReversed ? "lg:order-2" : ""}`}
          >
            {collection.isNew && (
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-accent text-accent-foreground text-xs tracking-[0.15em] uppercase">
                Nueva
              </div>
            )}
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover object-center"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            
            {/* Hover Overlay */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-background/30 backdrop-blur-sm flex items-center justify-center"
                >
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    className="flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm tracking-[0.15em] uppercase"
                  >
                    Ver coleccion
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Content */}
          <div className={`${isReversed ? "lg:order-1" : ""}`}>
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-2">
              {collection.year}
            </p>
            <h2 className="font-sans text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4 group-hover:text-accent transition-colors">
              {collection.name}
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-6">
              {collection.description}
            </p>
            <span className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-foreground group-hover:text-accent transition-colors">
              Explorar
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
