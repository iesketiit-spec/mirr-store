"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { ProductCard, type Product } from "@/components/ui/product-card"

const products: Product[] = [
  {
    id: "1",
    name: "Hoodie Gothic",
    price: 175000,
    currency: "COP",
    image: "https:///hoodie-gothic-1.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    slug: "hoodie-gothic",
  },
  {
    id: "2",
    name: "Pants Gothic",
    price: 165000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b15be1fa-46e9-408c-ac33-838e237b0246.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    slug: "pants-gothic",
  },
  {
    id: "3",
    name: "Tee Gothic",
    price: 95000,
    currency: "COP",
    image: "https:///hoodie-gothic-3.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    slug: "tee-gothic",
  },
  {
    id: "4",
    name: "Cap Gothic",
    price: 80000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9944d68f-de01-4265-b9a5-ae70ffbb2a7c.jpeg",
    sizes: ["Única"],
    isNew: true,
    slug: "cap-gothic",
  },
  {
    id: "5",
    name: "Hoodie Cross",
    price: 180000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9cfd7b20-15f6-4dd6-8c4d-0d20ff5cc48d.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    slug: "hoodie-cross",
  },
  {
    id: "6",
    name: "Sticker Pack",
    price: 20000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bf809cf9-4aba-470f-b41b-a4145a2d8538.jpeg",
    sizes: ["Única"],
    isNew: true,
    slug: "sticker-pack",
  },
]

export function NewReleases() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-sans text-xl lg:text-2xl font-bold tracking-[0.1em] uppercase text-foreground"
            >
              Nuevos Lanzamientos
            </motion.h2>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <StarIcon className="h-5 w-5 text-accent" />
            </motion.div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Navigation Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 border border-border hover:border-foreground/50 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 border border-border hover:border-foreground/50 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <Link
              href="/tienda"
              className="group flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-foreground hover:text-accent transition-colors"
            >
              Ver todo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Products Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 lg:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="flex-shrink-0 w-[45%] sm:w-[30%] lg:w-[calc(16.666%-20px)] snap-start"
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center justify-center gap-2 mt-6">
          <button
            onClick={() => scroll("left")}
            className="p-3 border border-border hover:border-foreground/50 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 border border-border hover:border-foreground/50 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  )
}
