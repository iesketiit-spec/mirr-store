"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

const collections: Record<string, {
  name: string
  description: string
  heroImage: string
  products: { slug: string; name: string; price: number; currency: string; image: string; sizes: string[] }[]
}> = {
  medellin: {
    name: "Medellin",
    description: "Inspirada en las calles de Medellin. Cada pieza es un homenaje a la cultura, al barrio y a nuestra esencia. Orgullosos de donde venimos.",
    heroImage: "/tee-medellin.jpeg",
    products: [
      { slug: "hoodie-gothic", name: "Hoodie Gothic", price: 50, currency: "USD", image: "/hoodie-gothic-1.jpeg", sizes: ["S","M","L","XL","XXL"] },
      { slug: "tee-medellin", name: "Tee Medellin", price: 18, currency: "USD", image: "/tee-medellin.jpeg", sizes: ["S","M","L","XL"] },
      { slug: "pantalon-sudadera-medellin", name: "Pantalon Sudadera Medellin", price: 35, currency: "USD", image: "/pantalon-medellin.jpeg", sizes: ["S","M","L","XL"] },
      { slug: "conjunto-urban-medellin", name: "Conjunto Urban Medellin", price: 70, currency: "USD", image: "/conjunto-urban-medellin.jpeg", sizes: ["S","M","L","XL"] },
      { slug: "tee-sell-drugs-buy-art", name: "Tee Sell Drugs Buy Art", price: 15, currency: "USD", image: "/tee-sell-drugs.jpeg", sizes: ["S","M","L","XL"] },
      { slug: "conjunto-urban-gotico", name: "Conjunto Urban Gotico", price: 50, currency: "USD", image: "/hoodie-gothic-2.jpeg", sizes: ["S","M","L","XL"] },
    ]
  }
}

export default function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const collection = collections[slug]

  if (!collection) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-foreground/40 mb-4">Coleccion no encontrada</p>
          <Link href="/colecciones" className="text-xs tracking-widest uppercase border-b border-foreground/30 pb-1 hover:border-foreground transition-all">
            Ver todas las colecciones
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image src={collection.heroImage} alt={collection.name} fill className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
          className="relative z-10 px-6 lg:px-16 pb-16"
        >
          <p className="text-xs tracking-widest text-red-500 uppercase mb-3 flex items-center gap-2">
            <span className="text-red-600">&#10038;</span> Coleccion 2026
          </p>
          <h1 className="font-display text-6xl lg:text-9xl tracking-wide mb-4 uppercase">{collection.name}</h1>
          <p className="text-sm text-foreground/55 max-w-md leading-relaxed">{collection.description}</p>
        </motion.div>
      </section>

      {/* Products */}
      <section className="py-16 px-6 lg:px-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs tracking-widest text-foreground/40 uppercase mb-2">{collection.products.length} productos</p>
            <h2 className="font-display text-3xl tracking-wider">Productos de la coleccion</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border/20">
          {collection.products.map((p, i) => (
            <motion.div 
              key={p.slug} 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ delay: i * 0.06 }} 
              viewport={{ once: true }}
              className="bg-background group relative overflow-hidden"
            >
              <Link href={`/producto/${p.slug}`}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="w-full bg-white text-black text-[10px] tracking-widest uppercase py-2.5 font-bold text-center">Ver producto</span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs font-bold tracking-widest uppercase mb-1">{p.name}</p>
                  <p className="text-xs text-foreground/50">${p.price} {p.currency}</p>
                  <div className="flex gap-1 flex-wrap mt-2">
                    {p.sizes.map(s => <span key={s} className="text-[9px] border border-border/30 px-1.5 py-0.5 text-foreground/40">{s}</span>)}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-16 text-center">
        <h3 className="font-display text-3xl lg:text-5xl mb-6">Explora mas</h3>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/tienda" className="bg-white text-black px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-red-600 hover:text-white transition-all">
            Ver toda la tienda
          </Link>
          <Link href="/colecciones" className="border border-white/30 text-white px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:border-white transition-all">
            Otras colecciones
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
