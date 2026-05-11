"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ShoppingBag } from "lucide-react"

export interface Product {
  id: string
  name: string
  price: number
  currency: string
  image: string
  hoverImage?: string
  sizes: string[]
  isNew?: boolean
  slug: string
}

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const formattedPrice = new Intl.NumberFormat("es-CO", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <Link href={`/producto/${product.slug}`}>
        {/* Image Container */}
        <div className="relative aspect-square bg-card overflow-hidden mb-4">
          {/* New Badge */}
          {product.isNew && (
            <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-secondary/80 backdrop-blur-sm text-xs tracking-[0.15em] uppercase text-foreground">
              Nuevo
            </div>
          )}

          {/* Product Image */}
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </motion.div>

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex items-center gap-2 px-6 py-3 bg-foreground text-background text-xs tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                // Add to cart logic
              }}
            >
              <ShoppingBag className="h-4 w-4" />
              Agregar
            </motion.button>
          </motion.div>

          {/* Border Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 border border-accent pointer-events-none"
          />
        </div>

        {/* Product Info */}
        <div>
          <h3 className="font-sans text-sm lg:text-base font-semibold tracking-[0.1em] uppercase text-foreground mb-1 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            ${formattedPrice} {product.currency}
          </p>

          {/* Sizes */}
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="px-2 py-1 text-[10px] tracking-wider uppercase border border-border text-muted-foreground"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
