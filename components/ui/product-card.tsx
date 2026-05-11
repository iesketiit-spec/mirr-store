"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ShoppingBag, Eye } from "lucide-react"

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
  const cardRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const formattedPrice = new Intl.NumberFormat("es-CO", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="group relative"
    >
      <Link href={`/producto/${product.slug}`}>
        <motion.div
          style={{ rotateX, rotateY }}
          transition={{ duration: 0.1 }}
          className="relative"
        >
          {/* Image Container */}
          <div className="relative aspect-square bg-card overflow-hidden mb-4">
            {/* New Badge */}
            {product.isNew && (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="absolute top-3 left-3 z-20 px-3 py-1.5 bg-secondary/90 backdrop-blur-sm text-[10px] tracking-[0.2em] uppercase text-foreground border border-border/30"
              >
                Nuevo
              </motion.div>
            )}

            {/* Product Image */}
            <motion.div
              animate={{ scale: isHovered ? 1.08 : 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center transition-opacity duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </motion.div>

            {/* Hover Overlay with Glass Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex flex-col items-center justify-end pb-6 gap-3"
            >
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="flex items-center gap-2 px-6 py-3 bg-foreground text-background text-xs tracking-[0.15em] uppercase hover:bg-accent transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  // Add to cart logic
                }}
              >
                <ShoppingBag className="h-4 w-4" />
                Agregar
              </motion.button>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors"
              >
                <Eye className="h-3.5 w-3.5" />
                Vista rápida
              </motion.button>
            </motion.div>

            {/* Border Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 pointer-events-none"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute top-0 left-0 right-0 h-px bg-accent origin-left"
              />
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                className="absolute top-0 right-0 bottom-0 w-px bg-accent origin-top"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className="absolute bottom-0 left-0 right-0 h-px bg-accent origin-right"
              />
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                className="absolute top-0 left-0 bottom-0 w-px bg-accent origin-bottom"
              />
            </motion.div>
          </div>

          {/* Product Info */}
          <div>
            <motion.h3 
              className="font-sans text-sm lg:text-base font-semibold tracking-[0.1em] uppercase text-foreground mb-1.5 transition-colors duration-300 group-hover:text-accent"
            >
              {product.name}
            </motion.h3>
            <p className="text-sm text-muted-foreground mb-3">
              ${formattedPrice} {product.currency}
            </p>

            {/* Sizes */}
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.map((size, i) => (
                <motion.span
                  key={size}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + i * 0.03 }}
                  className="px-2 py-1 text-[10px] tracking-wider uppercase border border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground transition-colors duration-200"
                >
                  {size}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
