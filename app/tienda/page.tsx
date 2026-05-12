"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { SlidersHorizontal, ChevronDown, X, Minus } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { ProductCard, type Product } from "@/components/ui/product-card"

const categories = [
  { id: "all", name: "Todos", count: 24 },
  { id: "camisetas", name: "Camisetas", count: 8 },
  { id: "hoodies", name: "Hoodies", count: 6 },
  { id: "gorras", name: "Gorras", count: 4 },
  { id: "accesorios", name: "Accesorios", count: 6 },
]

const sizes = ["S", "M", "L", "XL", "XXL"]

const colors = [
  { id: "white", name: "Blanco", hex: "#ffffff" },
  { id: "black", name: "Negro", hex: "#0a0a0a" },
  { id: "gray", name: "Gris", hex: "#6b7280" },
]

const sortOptions = [
  { id: "newest", name: "Más recientes" },
  { id: "price-asc", name: "Precio: menor a mayor" },
  { id: "price-desc", name: "Precio: mayor a menor" },
  { id: "name", name: "Nombre A-Z" },
]

const products: Product[] = [
  {
    id: "1",
    name: "Hoodie Gothic",
    price: 175000,
    currency: "COP",
    image: "/hoodie-gothic-1.jpeg",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    slug: "hoodie-gothic",
  },
  {
    id: "2",
    name: "Tee Gothic Oversize",
    price: 95000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d113971e-e45b-40e9-a960-80b91af0a30f.jpeg",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    slug: "tee-gothic-oversize",
  },
  {
    id: "3",
    name: "Cap Gothic",
    price: 80000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9944d68f-de01-4265-b9a5-ae70ffbb2a7c.jpeg",
    sizes: ["Única"],
    isNew: true,
    slug: "cap-gothic",
  },
  {
    id: "4",
    name: "Pants Gothic",
    price: 165000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b15be1fa-46e9-408c-ac33-838e237b0246.jpeg",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    slug: "pants-gothic",
  },
  {
    id: "5",
    name: "Tee Signature",
    price: 85000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9cfd7b20-15f6-4dd6-8c4d-0d20ff5cc48d.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    slug: "tee-signature",
  },
  {
    id: "6",
    name: "Hoodie Signature",
    price: 160000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1b58c61b-559d-4f87-b870-55a051b9d511.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    slug: "hoodie-signature",
  },
  {
    id: "7",
    name: "Cap Signature",
    price: 75000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bf809cf9-4aba-470f-b41b-a4145a2d8538.jpeg",
    sizes: ["Única"],
    isNew: true,
    slug: "cap-signature",
  },
  {
    id: "8",
    name: "Sticker Pack",
    price: 20000,
    currency: "COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cea5fb91-3f8f-4d30-8a7b-29d1e1281fcb.jpeg",
    sizes: ["Única"],
    isNew: true,
    slug: "sticker-pack",
  },
]

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 200000])
  const [sortBy, setSortBy] = useState("newest")
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const [isSortOpen, setIsSortOpen] = useState(false)

  const [expandedFilters, setExpandedFilters] = useState({
    categories: true,
    sizes: true,
    colors: true,
    price: true,
  })

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    )
  }

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    )
  }

  const toggleFilter = (filter: keyof typeof expandedFilters) => {
    setExpandedFilters((prev) => ({ ...prev, [filter]: !prev[filter] }))
  }

  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b15be1fa-46e9-408c-ac33-838e237b0246.jpeg"
            alt="Tienda MIRR"
            fill
            className="object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-4"
          >
            TIENDA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base lg:text-lg max-w-md"
          >
            Piezas únicas. Ediciones limitadas. Lleva MIRR contigo.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32 space-y-8">
                {/* Categories */}
                <FilterSection
                  title="Categorías"
                  isExpanded={expandedFilters.categories}
                  onToggle={() => toggleFilter("categories")}
                >
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center justify-between w-full text-sm transition-colors ${
                          selectedCategory === category.id
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-xs">{category.count}</span>
                      </button>
                    ))}
                  </div>
                </FilterSection>

                {/* Sizes */}
                <FilterSection
                  title="Talla"
                  isExpanded={expandedFilters.sizes}
                  onToggle={() => toggleFilter("sizes")}
                >
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-4 py-2 text-xs tracking-wider uppercase border transition-colors ${
                          selectedSizes.includes(size)
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </FilterSection>

                {/* Colors */}
                <FilterSection
                  title="Color"
                  isExpanded={expandedFilters.colors}
                  onToggle={() => toggleFilter("colors")}
                >
                  <div className="flex gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => toggleColor(color.id)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          selectedColors.includes(color.id)
                            ? "ring-2 ring-accent ring-offset-2 ring-offset-background"
                            : "border-border"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </FilterSection>

                {/* Price Range */}
                <FilterSection
                  title="Precio"
                  isExpanded={expandedFilters.price}
                  onToggle={() => toggleFilter("price")}
                >
                  <div className="space-y-4">
                    <input
                      type="range"
                      min={0}
                      max={200000}
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full accent-accent"
                    />
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>$0</span>
                      <span>$200.000+</span>
                    </div>
                  </div>
                </FilterSection>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-semibold">{products.length}</span> productos
                </p>

                <div className="flex items-center gap-4">
                  {/* Mobile Filters Button */}
                  <button
                    onClick={() => setIsMobileFiltersOpen(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-secondary text-foreground text-sm tracking-wider uppercase rounded-sm"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    Filtros
                  </button>

                  {/* Sort Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setIsSortOpen(!isSortOpen)}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground text-sm tracking-wider uppercase rounded-sm"
                    >
                      {sortOptions.find((o) => o.id === sortBy)?.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isSortOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isSortOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-sm overflow-hidden z-20"
                        >
                          {sortOptions.map((option) => (
                            <button
                              key={option.id}
                              onClick={() => {
                                setSortBy(option.id)
                                setIsSortOpen(false)
                              }}
                              className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                                sortBy === option.id
                                  ? "bg-secondary text-foreground"
                                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                              }`}
                            >
                              {option.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {products.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filters Panel */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsMobileFiltersOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 w-full max-w-[320px] bg-background border-r border-border z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-sans text-xl font-bold tracking-wider uppercase">
                    Filtros
                  </h2>
                  <button
                    onClick={() => setIsMobileFiltersOpen(false)}
                    className="p-2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-8">
                  {/* Categories */}
                  <FilterSection
                    title="Categorías"
                    isExpanded={expandedFilters.categories}
                    onToggle={() => toggleFilter("categories")}
                  >
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center justify-between w-full text-sm transition-colors ${
                            selectedCategory === category.id
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className="text-xs">{category.count}</span>
                        </button>
                      ))}
                    </div>
                  </FilterSection>

                  {/* Sizes */}
                  <FilterSection
                    title="Talla"
                    isExpanded={expandedFilters.sizes}
                    onToggle={() => toggleFilter("sizes")}
                  >
                    <div className="flex flex-wrap gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`px-4 py-2 text-xs tracking-wider uppercase border transition-colors ${
                            selectedSizes.includes(size)
                              ? "border-foreground bg-foreground text-background"
                              : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </FilterSection>

                  {/* Colors */}
                  <FilterSection
                    title="Color"
                    isExpanded={expandedFilters.colors}
                    onToggle={() => toggleFilter("colors")}
                  >
                    <div className="flex gap-3">
                      {colors.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => toggleColor(color.id)}
                          className={`w-10 h-10 rounded-full border-2 transition-all ${
                            selectedColors.includes(color.id)
                              ? "ring-2 ring-accent ring-offset-2 ring-offset-background"
                              : "border-border"
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </FilterSection>

                  {/* Price */}
                  <FilterSection
                    title="Precio"
                    isExpanded={expandedFilters.price}
                    onToggle={() => toggleFilter("price")}
                  >
                    <div className="space-y-4">
                      <input
                        type="range"
                        min={0}
                        max={200000}
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], parseInt(e.target.value)])
                        }
                        className="w-full accent-accent"
                      />
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>$0</span>
                        <span>$200.000+</span>
                      </div>
                    </div>
                  </FilterSection>
                </div>

                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full mt-8 py-4 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase"
                >
                  Aplicar filtros
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

interface FilterSectionProps {
  title: string
  isExpanded: boolean
  onToggle: () => void
  children: React.ReactNode
}

function FilterSection({ title, isExpanded, onToggle, children }: FilterSectionProps) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full mb-4"
      >
        <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-foreground">
          {title}
        </h3>
        <Minus
          className={`h-4 w-4 text-muted-foreground transition-transform ${
            !isExpanded ? "rotate-90" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
