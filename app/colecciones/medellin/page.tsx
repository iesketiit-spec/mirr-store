"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, ChevronDown, Play } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { ProductCard, type Product } from "@/components/ui/product-card"
import { BenefitsBar } from "@/components/sections/benefits-bar"

const collectionProducts: Product[] = [
  {
    id: "m1",
    name: "Hoodie Medellín",
    price: 175000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f075a691-5216-446f-90b4-e0295d6df6c5.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    slug: "hoodie-medellin",
  },
  {
    id: "m2",
    name: "Hoodie Back Print",
    price: 175000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1b58c61b-559d-4f87-b870-55a051b9d511.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    slug: "hoodie-back-print",
  },
  {
    id: "m3",
    name: "Tee Medellín",
    price: 95000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d113971e-e45b-40e9-a960-80b91af0a30f.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    slug: "tee-medellin",
  },
  {
    id: "m4",
    name: "Pants Medellín",
    price: 165000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b15be1fa-46e9-408c-ac33-838e237b0246.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    slug: "pants-medellin",
  },
  {
    id: "m5",
    name: "Cap Medellín",
    price: 80000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9944d68f-de01-4265-b9a5-ae70ffbb2a7c.jpeg",
    sizes: ["Única"],
    isNew: true,
    slug: "cap-medellin",
  },
  {
    id: "m6",
    name: "Sticker Pack",
    price: 20000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bf809cf9-4aba-470f-b41b-a4145a2d8538.jpeg",
    sizes: ["Única"],
    isNew: false,
    slug: "sticker-pack-medellin",
  },
]

const sortOptions = [
  { id: "newest", name: "Más recientes" },
  { id: "price-asc", name: "Precio: menor a mayor" },
  { id: "price-desc", name: "Precio: mayor a menor" },
]

export default function MedellinCollectionPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Breadcrumb */}
      <nav className="pt-24 lg:pt-28 pb-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link href="/colecciones" className="text-muted-foreground hover:text-foreground transition-colors">
              Colecciones
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-accent font-semibold tracking-wider uppercase">
              Medellín Collection
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="py-8 lg:py-16">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent text-xs tracking-[0.3em] uppercase mb-4"
              >
                Colección 2026
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 mb-4"
              >
                <StarDecoration className="h-5 w-5 text-foreground" />
                <h1 className="font-sans text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                  MEDELLÍN
                </h1>
                <StarDecoration className="h-5 w-5 text-foreground" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="font-sans text-2xl italic text-foreground/80">MIRR</span>
                <StarIcon className="h-6 w-6 text-accent" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8 max-w-md"
              >
                Inspirada en las calles de Medellín. Cada pieza es un homenaje a la cultura, al barrio y a nuestra esencia.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/lookbook/medellin">
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

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px]"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d113971e-e45b-40e9-a960-80b91af0a30f.jpeg"
                alt="Medellín Collection"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <h2 className="font-sans text-xl lg:text-2xl font-bold tracking-[0.1em] uppercase text-foreground">
                Piezas de la colección
              </h2>
              <div className="w-12 h-px bg-foreground" />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground text-sm tracking-wider uppercase rounded-sm">
                <span>Ordenar por</span>
                <span className="hidden sm:inline text-muted-foreground">Más recientes</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {collectionProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <BenefitsBar />
      <Footer />
      <WhatsAppButton />
    </main>
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
