"use client"

import { useState, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Truck, Shield, RefreshCw, Package } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

const allProducts: Record<string, {
  name: string; price: number; currency: string; description: string;
  images: string[]; sizes: string[]; isNew?: boolean; collection: string;
  material: string; weight: string; cut: string;
}> = {
  "hoodie-gothic": {
    name: "Hoodie Gothic", price: 50, currency: "USD",
    description: "Hoodie oversize en algodón pesado de 420 GSM. Estampado frontal MIRR en tipografía gótica. Gráficos en mangas y espalda. Edición limitada.",
    images: ["/hoodie-gothic-1.jpeg", "/hoodie-gothic-2.jpeg", "/hoodie-gothic-3.jpeg"],
    sizes: ["S","M","L","XL","XXL"], isNew: true, collection: "Gothic Collection",
    material: "100% Algodón", weight: "420 GSM", cut: "Oversize",
  },
  "conjunto-urban-gotico": {
    name: "Conjunto Urban Gótico", price: 50, currency: "USD",
    description: "Conjunto completo hoodie + pantalón. Diseño gótico exclusivo con gráficos en espalda y piernas. Edición limitada.",
    images: ["/hoodie-gothic-2.jpeg", "/hoodie-gothic-3.jpeg", "/hoodie-gothic-1.jpeg"],
    sizes: ["S","M","L","XL"], isNew: true, collection: "Gothic Collection",
    material: "100% Algodón", weight: "400 GSM", cut: "Oversize",
  },
  "tee-medellin": {
    name: "Tee Medellín", price: 18, currency: "USD",
    description: "Camiseta oversize con lavado especial. Impresión premium con texto Medellín en espalda. 100% algodón 400 gramos. Edición limitada, no restock.",
    images: ["/tee-medellin.jpeg"],
    sizes: ["S","M","L","XL"], isNew: true, collection: "Medellín Collection",
    material: "100% Algodón", weight: "400 GSM", cut: "Oversize",
  },
  "tee-the-end": {
    name: "Tee The End", price: 15, currency: "USD",
    description: "Camiseta oversize con estampado THE END en espalda. Impresión de alta calidad, 250 gramos. Edición limitada.",
    images: ["/tee-the-end.jpeg"],
    sizes: ["S","M","L","XL"], isNew: true, collection: "Medellín Collection",
    material: "100% Algodón", weight: "250 GSM", cut: "Oversize",
  },
  "tee-sell-drugs-buy-art": {
    name: "Tee Sell Drugs Buy Art", price: 15, currency: "USD",
    description: "Camiseta oversize en rojo. Texto icónico en espalda. 250 gramos, impresión premium. Edición limitada, no restock.",
    images: ["/tee-sell-drugs.jpeg"],
    sizes: ["S","M","L","XL"], isNew: true, collection: "Medellín Collection",
    material: "100% Algodón", weight: "250 GSM", cut: "Oversize",
  },
  "tee-mirr-vision": {
    name: "Tee MIRR Vision", price: 15, currency: "USD",
    description: "Camiseta blanca con estampado MIRR Vision New Galaxy. 250 gramos, impresión premium. Edición limitada.",
    images: ["/tee-mirr-vision.jpeg"],
    sizes: ["S","M","L","XL"], isNew: true, collection: "Medellín Collection",
    material: "100% Algodón", weight: "250 GSM", cut: "Oversize",
  },
  "tee-barrio-antioquia": {
    name: "Tee Barrio Antioquia", price: 20, currency: "USD",
    description: "Camiseta crema con diseño Barrio Antioquia. Impresión detallada con ilustración del barrio. Edición limitada.",
    images: ["/tee-antioquia.jpeg"],
    sizes: ["S","M","L","XL"], isNew: true, collection: "Medellín Collection",
    material: "100% Algodón", weight: "250 GSM", cut: "Oversize",
  },
  "tee-barrio-maanrrique": {
    name: "Tee Barrio Maanrrique", price: 20, currency: "USD",
    description: "Camiseta negra con diseño Maanrrique en espalda, letras azules. Representando el barrio con actitud.",
    images: ["/tee-maanrrique.jpeg"],
    sizes: ["S","M","L","XL"], isNew: true, collection: "Medellín Collection",
    material: "100% Algodón", weight: "250 GSM", cut: "Oversize",
  },
  "tee-barrio-laureles": {
    name: "Tee Barrio Laureles", price: 20, currency: "USD",
    description: "Camiseta negra con diseño Laureles. Parce todo es posible. Edición limitada.",
    images: ["/tee-laureles.jpeg"],
    sizes: ["S","M","L","XL"], isNew: true, collection: "Medellín Collection",
    material: "100% Algodón", weight: "250 GSM", cut: "Oversize",
  },
  "tee-barrio-poblado": {
    name: "Tee Barrio Poblado", price: 20, currency: "USD",
    description: "Camiseta crema con diseño Poblado. Lo más fresa del pedazo. Edición limitada.",
    images: ["/tee-poblado.jpeg"],
    sizes: ["S","M","L","XL"], isNew: true, collection: "Medellín Collection",
    material: "100% Algodón", weight: "250 GSM", cut: "Oversize",
  },
  "conjunto-urban-medellin": {
    name: "Conjunto Urban Medellín", price: 70, currency: "USD",
    description: "Conjunto completo hoodie zip + pantalón Medellín Collection. 320 gramos, diseño urbano exclusivo. Edición limitada, no restock.",
    images: ["/conjunto-urban-medellin.jpeg"],
    sizes: ["S","M","L","XL"], isNew: true, collection: "Medellín Collection",
    material: "100% Algodón", weight: "320 GSM", cut: "Oversize",
  },
  "pantalon-sudadera-medellin": {
    name: "Pantalón Sudadera Medellín", price: 35, currency: "USD",
    description: "Pantalón sudadera de alto gramaje. Corte baggy, durabilidad superior, confort máximo. Medellín Collection.",
    images: ["/pantalon-medellin.jpeg"],
    sizes: ["S","M","L","XL","XXL"], isNew: true, collection: "Medellín Collection",
    material: "100% Algodón", weight: "Alto gramaje", cut: "Baggy",
  },
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = allProducts[slug]
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  if (!product) return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-foreground/40">Producto no encontrado</p>
    </main>
  )

  const handleAddToCart = () => {
    if (!selectedSize) { alert("Por favor selecciona una talla"); return }
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("mirr-cart") || "[]")
      cart.push({ slug: slug, name: product.name, price: product.price, currency: product.currency, size: selectedSize, image: product.images[0] })
      localStorage.setItem("mirr-cart", JSON.stringify(cart))
      window.location.href = "/carrito"
    }
  }

  return (
    <>
      <main className="min-h-screen bg-background">
        <TopBar />
        <Header />

        <div className="pt-24 lg:pt-28">
          {/* Breadcrumb */}
          <nav className="px-6 lg:px-16 py-4">
            <div className="flex items-center gap-2 text-xs tracking-widest text-foreground/30 uppercase">
              <Link href="/" className="hover:text-foreground transition-colors">Inicio</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/tienda" className="hover:text-foreground transition-colors">Tienda</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground/60">{product.name}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[140px_1fr_420px] gap-0 px-6 lg:px-16 pb-16">
            {/* THUMBNAILS */}
            <div className="flex flex-row lg:flex-col gap-2 mb-4 lg:mb-0 lg:pr-4 overflow-x-auto lg:overflow-visible">
              {product.images.map((img, i) => (
                <button key={i} onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 w-16 lg:w-full aspect-square overflow-hidden border transition-all ${selectedImage === i ? "border-foreground/60 opacity-100" : "border-border/20 opacity-50 hover:opacity-80"}`}>
                  <Image src={img} alt={`${product.name} ${i+1}`} width={120} height={120} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* MAIN IMAGE */}
            <div className="aspect-[3/4] overflow-hidden lg:mr-8">
              <Image src={product.images[selectedImage]} alt={product.name} width={900} height={1200} className="w-full h-full object-cover" priority />
            </div>

            {/* INFO */}
            <div className="pt-4 lg:pt-0">
              {product.isNew && <span className="inline-block bg-red-600 text-white text-[9px] tracking-widest px-2.5 py-1 font-bold uppercase mb-3">Nuevo</span>}
              <h1 className="font-display text-4xl lg:text-5xl tracking-wider mb-2">{product.name.toUpperCase()}</h1>
              <p className="text-2xl font-bold tracking-wider mb-1">${product.price} {product.currency}</p>
              <p className="text-xs text-foreground/30 tracking-widest mb-6">{product.collection}</p>
              <p className="text-sm text-foreground/55 leading-relaxed mb-6 pb-6 border-b border-border/20">{product.description}</p>

              {/* SIZES */}
              <p className="text-[10px] tracking-widest uppercase text-foreground/40 mb-3">Talla</p>
              <div className="flex gap-2 flex-wrap mb-2">
                {product.sizes.map(size => (
                  <button key={size} onClick={() => setSelectedSize(size)}
                    className={`min-w-[46px] px-3 py-2 border text-xs tracking-widest transition-all ${selectedSize === size ? "border-foreground bg-foreground text-background font-bold" : "border-border/30 text-foreground/55 hover:border-foreground/60"}`}>
                    {size}
                  </button>
                ))}
              </div>
              <Link href="/tallas" className="text-[10px] tracking-widest text-foreground/30 underline underline-offset-2 block mb-6">Guía de tallas</Link>

              {/* CTA */}
              <div className="flex flex-col gap-3 mb-6">
                <button onClick={handleAddToCart}
                  className="w-full bg-white text-black py-4 text-xs font-bold tracking-widest uppercase hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-4">
                  Agregar al carrito
                  <span className="pl-4 border-l border-black/20">${product.price} {product.currency}</span>
                </button>
                <button onClick={handleAddToCart}
                  className="w-full border border-border/30 text-white py-4 text-xs font-bold tracking-widest uppercase hover:border-white transition-all">
                  Comprar ahora
                </button>
              </div>

              {/* FEATURES */}
              <div className="grid grid-cols-2 gap-3 p-4 bg-card/30 border-t border-border/20 mb-6">
                {[
                  { icon: "🧵", label: product.material, val: product.weight },
                  { icon: "✦", label: "Calidad Premium", val: "Mat. seleccionados" },
                  { icon: "◆", label: "Edición Limitada", val: "Piezas únicas" },
                  { icon: "□", label: "Empaque Exclusivo", val: "Listo para coleccionar" },
                ].map((f, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-1">
                    <span className="text-lg text-foreground/40">{f.icon}</span>
                    <p className="text-[10px] font-bold tracking-widest uppercase">{f.label}</p>
                    <p className="text-[10px] text-foreground/35">{f.val}</p>
                  </div>
                ))}
              </div>

              {/* ACCORDION */}
              {[
                { id: "envios", title: "Envíos a todo el mundo", content: "Hacemos envíos internacionales. Tiempo de entrega 5-15 días hábiles según destino. Todos los pedidos incluyen número de seguimiento." },
                { id: "pagos", title: "Pagos seguros", content: "Aceptamos Visa, Mastercard, Amex, PayPal y Apple Pay. Todos los pagos están encriptados con SSL 256 bits." },
                { id: "cambios", title: "Cambios y devoluciones", content: "Aceptamos cambios dentro de los 30 días de recibido el pedido. El producto debe estar sin usar y con etiquetas originales." },
              ].map(acc => (
                <div key={acc.id} className="border-t border-border/20">
                  <button onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex justify-between items-center py-4 text-xs font-bold tracking-widest uppercase text-left">
                    {acc.title}
                    <span className={`transition-transform duration-200 text-foreground/40 ${openAccordion === acc.id ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {openAccordion === acc.id && (
                    <p className="text-xs text-foreground/50 leading-relaxed pb-4">{acc.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}
