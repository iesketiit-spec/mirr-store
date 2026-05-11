"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Minus, Plus, Ruler, Globe, Shield, Package, RefreshCw, Phone } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

const product = {
  id: "1",
  name: "Hoodie Gothic",
  price: 175000,
  currency: "COP",
  description: "Hoodie oversize en algodón pesado de 420 GSM. Estampado frontal MIRR en tipografía gótica. Gráficos en mangas y espalda. Edición limitada.",
  images: [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f075a691-5216-446f-90b4-e0295d6df6c5.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1b58c61b-559d-4f87-b870-55a051b9d511.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d113971e-e45b-40e9-a960-80b91af0a30f.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9cfd7b20-15f6-4dd6-8c4d-0d20ff5cc48d.jpeg",
  ],
  colors: [
    { id: "white", name: "Blanco", hex: "#ffffff" },
    { id: "black", name: "Negro", hex: "#0a0a0a" },
    { id: "gray", name: "Gris", hex: "#6b7280" },
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  isNew: true,
  features: [
    { icon: "cotton", label: "100% Algodón", description: "420 GSM" },
    { icon: "premium", label: "Calidad Premium", description: "Materiales seleccionados" },
    { icon: "limited", label: "Edición Limitada", description: "Piezas únicas" },
    { icon: "packaging", label: "Empaque Exclusivo", description: "Listo para coleccionar" },
  ],
}

const accordionItems = [
  {
    id: "shipping",
    icon: Globe,
    title: "Envíos a todo el mundo",
    description: "Rápidos y seguros.",
  },
  {
    id: "payment",
    icon: Shield,
    title: "Pagos seguros",
    description: "Paga como prefieras.",
  },
  {
    id: "returns",
    icon: RefreshCw,
    title: "Cambios y devoluciones",
    description: "Fácil y sin complicaciones.",
  },
]

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null)

  const formattedPrice = new Intl.NumberFormat("es-CO", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price)

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor selecciona una talla")
      return
    }
    // Add to cart logic
    console.log("Added to cart:", {
      product: product.name,
      color: selectedColor,
      size: selectedSize,
      quantity,
    })
  }

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
            <Link href="/tienda" className="text-muted-foreground hover:text-foreground transition-colors">
              Tienda
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-semibold tracking-wider uppercase">
              {product.name}
            </span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px]">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 border-2 transition-colors ${
                      selectedImage === index
                        ? "border-foreground"
                        : "border-transparent hover:border-foreground/30"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - Vista ${index + 1}`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 relative aspect-square bg-card overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.images[selectedImage]}
                      alt={product.name}
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* Badge */}
              {product.isNew && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent text-xs tracking-[0.3em] uppercase mb-2"
                >
                  Nuevo
                </motion.p>
              )}

              {/* Title & Price */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-sans text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-2"
              >
                {product.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl lg:text-2xl text-foreground mb-6"
              >
                ${formattedPrice} {product.currency}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground leading-relaxed mb-8"
              >
                {product.description}
              </motion.p>

              {/* Color Selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <p className="text-sm font-semibold tracking-wider uppercase text-foreground mb-3">
                  Color: <span className="font-normal text-muted-foreground capitalize">{selectedColor}</span>
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color.id
                          ? "ring-2 ring-accent ring-offset-2 ring-offset-background"
                          : "border-border"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Size Selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <p className="text-sm font-semibold tracking-wider uppercase text-foreground mb-3">
                  Talla:
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 text-sm tracking-wider uppercase border transition-colors ${
                        selectedSize === size
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Size Guide */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <Ruler className="h-4 w-4" />
                <span className="tracking-wider uppercase">Guía de tallas</span>
              </motion.button>

              {/* Add to Cart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4 mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center gap-4 py-4 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
                >
                  <span>Agregar al carrito</span>
                  <span className="text-foreground/50">—</span>
                  <span>${formattedPrice} {product.currency}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-transparent border border-foreground/30 text-foreground font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/5 hover:border-foreground/50 transition-all"
                >
                  Comprar ahora
                </motion.button>
              </motion.div>

              {/* Accordion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="border-t border-border"
              >
                {accordionItems.map((item) => (
                  <div key={item.id} className="border-b border-border">
                    <button
                      onClick={() =>
                        setExpandedAccordion(
                          expandedAccordion === item.id ? null : item.id
                        )
                      }
                      className="w-full flex items-center justify-between py-4"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm font-semibold tracking-wider uppercase text-foreground">
                          {item.title}
                        </span>
                      </div>
                      <Plus
                        className={`h-5 w-5 text-muted-foreground transition-transform ${
                          expandedAccordion === item.id ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedAccordion === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-muted-foreground pb-4 pl-8">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 border-y border-border bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-full border border-border">
                  <FeatureIcon type={feature.icon} />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-wider uppercase text-foreground">
                    {feature.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

function FeatureIcon({ type }: { type: string }) {
  switch (type) {
    case "cotton":
      return (
        <svg className="h-6 w-6 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4v16M4 12h16" />
        </svg>
      )
    case "premium":
      return (
        <svg className="h-6 w-6 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    case "limited":
      return (
        <svg className="h-6 w-6 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12,2 15,8.5 22,9.3 17,14 18.2,21 12,17.8 5.8,21 7,14 2,9.3 9,8.5" />
        </svg>
      )
    case "packaging":
      return <Package className="h-6 w-6 text-muted-foreground" />
    default:
      return null
  }
}
