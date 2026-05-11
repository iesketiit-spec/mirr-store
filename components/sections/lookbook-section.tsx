"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, ShoppingBag, Layers } from "lucide-react"

const lookbookItems = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1b58c61b-559d-4f87-b870-55a051b9d511.jpeg",
    title: "Gothic Collection",
    action: "Ver drop",
    href: "/colecciones/gothic",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d113971e-e45b-40e9-a960-80b91af0a30f.jpeg",
    title: "Medellín Vibes",
    action: "Explorar outfit",
    href: "/lookbook/medellin",
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9cfd7b20-15f6-4dd6-8c4d-0d20ff5cc48d.jpeg",
    title: "Street Style",
    action: "Comprar look",
    href: "/tienda",
  },
]

export function LookbookSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Explora</p>
          <h2 className="font-sans text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            LOOKBOOK
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {lookbookItems.map((item, index) => (
            <LookbookCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface LookbookCardProps {
  item: {
    id: number
    image: string
    title: string
    action: string
    href: string
  }
  index: number
}

function LookbookCard({ item, index }: LookbookCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const icons = [Eye, Layers, ShoppingBag]
  const Icon = icons[index % icons.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
    >
      <Link href={item.href}>
        {/* Image */}
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-center"
          />
        </motion.div>

        {/* Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-background/70 backdrop-blur-sm flex flex-col items-center justify-center"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <Icon className="h-8 w-8 text-foreground mx-auto mb-4" />
                <h3 className="font-sans text-lg font-semibold tracking-wide text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm tracking-[0.15em] uppercase text-accent">
                  {item.action}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Border */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 border-2 border-accent pointer-events-none"
        />
      </Link>
    </motion.div>
  )
}
