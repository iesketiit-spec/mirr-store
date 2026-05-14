"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { SlidersHorizontal, X } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { useCart } from "@/lib/cart-context"

export type Product = {
  id: string
  name: string
  price: number
  currency: string
  image: string
  sizes: string[]
  isNew?: boolean
  slug: string
  category: string
  collection?: string
}

const products: Product[] = [
  // MEDELLIN COLLECTION - Camisetas
  { id: "3", name: "Tee Medellin", price: 18, currency: "USD", image: "/tee-medellin.jpeg", sizes: ["S","M","L","XL"], isNew: true, slug: "tee-medellin", category: "camisetas", collection: "medellin" },
  { id: "4", name: "Tee The End", price: 15, currency: "USD", image: "/tee-the-end.jpeg", sizes: ["S","M","L","XL"], isNew: true, slug: "tee-the-end", category: "camisetas", collection: "medellin" },
  { id: "5", name: "Tee Sell Drugs Buy Art", price: 15, currency: "USD", image: "/tee-sell-drugs.jpeg", sizes: ["S","M","L","XL"], isNew: true, slug: "tee-sell-drugs-buy-art", category: "camisetas", collection: "medellin" },
  { id: "6", name: "Tee MIRR Vision", price: 15, currency: "USD", image: "/tee-mirr-vision.jpeg", sizes: ["S","M","L","XL"], isNew: true, slug: "tee-mirr-vision", category: "camisetas", collection: "medellin" },
  { id: "7", name: "Tee Barrio Antioquia", price: 20, currency: "USD", image: "/tee-antioquia.jpeg", sizes: ["S","M","L","XL"], isNew: true, slug: "tee-barrio-antioquia", category: "camisetas", collection: "medellin" },
  { id: "8", name: "Tee Barrio Maanrrique", price: 20, currency: "USD", image: "/tee-maanrrique.jpeg", sizes: ["S","M","L","XL"], isNew: true, slug: "tee-barrio-maanrrique", category: "camisetas", collection: "medellin" },
  { id: "9", name: "Tee Barrio Laureles", price: 20, currency: "USD", image: "/tee-laureles.jpeg", sizes: ["S","M","L","XL"], isNew: true, slug: "tee-barrio-laureles", category: "camisetas", collection: "medellin" },
  { id: "10", name: "Tee Barrio Poblado", price: 20, currency: "USD", image: "/tee-poblado.jpeg", sizes: ["S","M","L","XL"], isNew: true, slug: "tee-barrio-poblado", category: "camisetas", collection: "medellin" },
  
  // Hoodies
  { id: "1", name: "Hoodie Medellin", price: 50, currency: "USD", image: "/hoodie-gothic-1.jpeg", sizes: ["S","M","L","XL","XXL"], isNew: true, slug: "hoodie-gothic", category: "hoodies", collection: "medellin" },

  // Conjuntos
  { id: "2", name: "Conjunto Urban Medellin", price: 70, currency: "USD", image: "/conjunto-urban-medellin.jpeg", sizes: ["S","M","L","XL"], isNew: true, slug: "conjunto-urban-medellin", category: "conjuntos", collection: "medellin" },
  { id: "11", name: "Conjunto Hoodie + Pants", price: 50, currency: "USD", image: "/hoodie-gothic-2.jpeg", sizes: ["S","M","L","XL"], isNew: true, slug: "conjunto-urban-gotico", category: "conjuntos", collection: "medellin" },

  // Pantalones
  { id: "12", name: "Pantalon Sudadera Medellin", price: 35, currency: "USD", image: "/pantalon-medellin.jpeg", sizes: ["S","M","L","XL","XXL"], isNew: true, slug: "pantalon-sudadera-medellin", category: "pantalones", collection: "medellin" },
]

const categories = [
  { id: "all", name: "Todos", count: products.length },
  { id: "camisetas", name: "T-Shirts", count: products.filter(p => p.category === "camisetas").length },
  { id: "hoodies", name: "Hoodies", count: products.filter(p => p.category === "hoodies").length },
  { id: "conjuntos", name: "Sets / Conjuntos", count: products.filter(p => p.category === "conjuntos").length },
  { id: "pantalones", name: "Pants", count: products.filter(p => p.category === "pantalones").length },
]

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("newest")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const { addItem } = useCart()

  const filtered = products
    .filter(p => selectedCategory === "all" || p.category === selectedCategory)
    .filter(p => selectedSizes.length === 0 || p.sizes.some(s => selectedSizes.includes(s)))
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price
      if (sortBy === "price-desc") return b.price - a.price
      return 0
    })

  const toggleSize = (s: string) =>
    setSelectedSizes(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])

  const handleQuickAdd = (product: Product) => {
    // Add with default size M if available, otherwise first size
    const defaultSize = product.sizes.includes("M") ? "M" : product.sizes[0]
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      currency: product.currency,
      image: product.image,
      color: "Negro",
      size: defaultSize
    })
  }

  return (
    <>
      <main className="min-h-screen bg-background">
        <TopBar />
        <Header />

        {/* HERO */}
        <section className="relative h-[45vh] min-h-[300px] flex items-end overflow-hidden pt-24">
          <div className="absolute inset-0">
            <Image src="/hoodie-gothic-3.jpeg" alt="Tienda MIRR" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          <div className="relative z-10 w-full flex items-end justify-between px-6 lg:px-16 pb-8">
            <div>
              <h1 className="font-display text-6xl lg:text-8xl tracking-wider">TIENDA</h1>
              <p className="text-sm text-foreground/40 tracking-widest mt-1 uppercase">Piezas unicas. Ediciones limitadas. Lleva MIRR contigo.</p>
            </div>
            <button onClick={() => setFiltersOpen(!filtersOpen)} className="flex items-center gap-2 border border-border/50 px-4 py-2 text-xs tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors">
              <SlidersHorizontal className="h-3.5 w-3.5" />Filtros
            </button>
          </div>
        </section>

        <div className="flex">
          {/* SIDEBAR */}
          <AnimatePresence>
            {filtersOpen && (
              <motion.aside
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 260, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="border-r border-border/30 overflow-hidden flex-shrink-0"
              >
                <div className="p-6 w-[260px]">
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-xs tracking-widest uppercase text-foreground/40">Filtros</p>
                    <button onClick={() => setFiltersOpen(false)}><X className="h-4 w-4 text-foreground/40" /></button>
                  </div>

                  {/* Categories */}
                  <p className="text-xs tracking-widest uppercase text-foreground/30 mb-3">Categorias</p>
                  <div className="space-y-1 mb-6">
                    {categories.map(c => (
                      <button key={c.id} onClick={() => setSelectedCategory(c.id)}
                        className={`w-full flex justify-between text-sm px-2 py-1.5 transition-colors ${selectedCategory === c.id ? "text-foreground font-semibold" : "text-foreground/50 hover:text-foreground"}`}>
                        <span>{c.name}</span><span className="text-foreground/30">{c.count}</span>
                      </button>
                    ))}
                  </div>

                  {/* Sizes */}
                  <p className="text-xs tracking-widest uppercase text-foreground/30 mb-3">Talla</p>
                  <div className="flex flex-wrap gap-2">
                    {["S","M","L","XL","XXL"].map(s => (
                      <button key={s} onClick={() => toggleSize(s)}
                        className={`px-3 py-1.5 text-xs border transition-all ${selectedSizes.includes(s) ? "border-foreground bg-foreground text-background" : "border-border/40 text-foreground/50 hover:border-foreground/50"}`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* PRODUCTS */}
          <div className="flex-1">
            <div className="flex justify-between items-center px-6 lg:px-16 py-4 border-b border-border/20">
              <p className="text-xs tracking-widest text-foreground/30 uppercase">{filtered.length} productos</p>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                className="bg-transparent border border-border/30 text-xs tracking-widest uppercase text-foreground/60 px-3 py-2 outline-none cursor-pointer">
                <option value="newest">Mas recientes</option>
                <option value="price-asc">Menor precio</option>
                <option value="price-desc">Mayor precio</option>
              </select>
            </div>

            <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border/20">
              <AnimatePresence>
                {filtered.map((product, i) => (
                  <motion.div key={product.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.04 }} className="bg-background group relative overflow-hidden">
                    <Link href={`/producto/${product.slug}`}>
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        {product.isNew && <span className="absolute top-3 left-3 bg-red-600 text-white text-[9px] tracking-widest px-2 py-1 font-bold uppercase">Nuevo</span>}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <button 
                            onClick={(e) => {
                              e.preventDefault()
                              handleQuickAdd(product)
                            }}
                            className="w-full bg-white text-black text-[10px] tracking-widest uppercase py-2.5 font-bold hover:bg-red-600 hover:text-white transition-colors"
                          >
                            Agregar al carrito
                          </button>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="text-xs font-bold tracking-widest uppercase mb-1">{product.name}</p>
                        <p className="text-xs text-foreground/50">${product.price} {product.currency}</p>
                        <div className="flex gap-1 flex-wrap mt-2">
                          {product.sizes.map(s => (
                            <span key={s} className="text-[9px] border border-border/30 px-1.5 py-0.5 text-foreground/40 tracking-wider">{s}</span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Shipping Info */}
        <section className="py-8 border-t border-border bg-card/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground">
              Envios a <span className="text-accent font-semibold">Colombia y Ecuador</span> - $10 USD - 5 a 10 dias habiles
            </p>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}
