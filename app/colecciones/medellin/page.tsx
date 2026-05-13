"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

const products = [
  { slug: "tee-medellin", name: "Tee Medellín", price: 18, image: "/tee-medellin.jpeg", sizes: ["S","M","L","XL"] },
  { slug: "tee-the-end", name: "Tee The End", price: 15, image: "/tee-the-end.jpeg", sizes: ["S","M","L","XL"] },
  { slug: "tee-sell-drugs-buy-art", name: "Tee Sell Drugs Buy Art", price: 15, image: "/tee-sell-drugs.jpeg", sizes: ["S","M","L","XL"] },
  { slug: "tee-mirr-vision", name: "Tee MIRR Vision", price: 15, image: "/tee-mirr-vision.jpeg", sizes: ["S","M","L","XL"] },
  { slug: "tee-barrio-antioquia", name: "Tee Barrio Antioquia", price: 20, image: "/tee-antioquia.jpeg", sizes: ["S","M","L","XL"] },
  { slug: "tee-barrio-maanrrique", name: "Tee Barrio Maanrrique", price: 20, image: "/tee-maanrrique.jpeg", sizes: ["S","M","L","XL"] },
  { slug: "tee-barrio-laureles", name: "Tee Barrio Laureles", price: 20, image: "/tee-laureles.jpeg", sizes: ["S","M","L","XL"] },
  { slug: "tee-barrio-poblado", name: "Tee Barrio Poblado", price: 20, image: "/tee-poblado.jpeg", sizes: ["S","M","L","XL"] },
  { slug: "conjunto-urban-medellin", name: "Conjunto Urban Medellín", price: 70, image: "/conjunto-urban-medellin.jpeg", sizes: ["S","M","L","XL"] },
  { slug: "pantalon-sudadera-medellin", name: "Pantalón Sudadera Medellín", price: 35, image: "/pantalon-medellin.jpeg", sizes: ["S","M","L","XL","XXL"] },
]

export default function MedellinCollectionPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* HERO */}
      <section className="relative h-[85vh] min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hoodie-gothic-3.jpeg" alt="Medellín Collection" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
        <div className="relative z-10 px-6 lg:px-16 max-w-2xl pt-24">
          {/* Breadcrumb */}
          <p className="text-[10px] tracking-widest text-foreground/30 uppercase mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-foreground transition-colors">Inicio</Link>
            <span>›</span>
            <Link href="/colecciones" className="hover:text-foreground transition-colors">Colecciones</Link>
            <span>›</span>
            <span className="text-red-500">Medellín Collection</span>
          </p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs tracking-widest text-red-500 uppercase mb-3 flex items-center gap-2">
              <span>✦</span> <span>✦</span> Colección 2026
            </p>
            <h1 className="font-display text-7xl lg:text-[10rem] leading-[0.85] tracking-wide mb-4">MEDELLÍN</h1>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.svg" alt="MIRR" width={100} height={33} className="opacity-80" />
              <span className="text-red-500 text-2xl">✸</span>
            </div>
            <p className="text-sm text-foreground/55 max-w-xs leading-relaxed mb-6 text-center">
              Inspirada en las calles de Medellín. Cada pieza es un homenaje a la cultura, al barrio y a nuestra esencia.
            </p>
            <Link href="/lookbook" className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:border-white transition-all">
              Ver Lookbook ▷
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-6">
        <div className="flex justify-between items-center px-6 lg:px-16 py-4 border-b border-border/20 mb-0">
          <p className="font-display text-xl tracking-wider">Piezas de la colección</p>
          <p className="text-xs tracking-widest text-foreground/30 uppercase">{products.length} productos</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border/20">
          {products.map((p, i) => (
            <motion.div key={p.slug} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}
              className="bg-background group relative overflow-hidden">
              <Link href={`/producto/${p.slug}`}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[9px] tracking-widest px-2 py-1 font-bold uppercase">Nuevo</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="w-full bg-white text-black text-[10px] tracking-widest uppercase py-2.5 font-bold text-center">Ver producto →</span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs font-bold tracking-widest uppercase mb-1">{p.name}</p>
                  <p className="text-xs text-foreground/50">${p.price} USD</p>
                  <div className="flex gap-1 flex-wrap mt-2">
                    {p.sizes.map(s => <span key={s} className="text-[9px] border border-border/30 px-1.5 py-0.5 text-foreground/40">{s}</span>)}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-card/20 border-t border-border/20 py-6 px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🌍", t: "Envíos a todo el mundo", s: "Rápidos y seguros." },
            { icon: "✦", t: "Calidad Premium", s: "Materiales seleccionados." },
            { icon: "🔒", t: "Pagos seguros", s: "Paga como prefieras." },
            { icon: "◆", t: "Empaque Exclusivo", s: "Listo para coleccionar." },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-red-600/50 flex items-center justify-center text-sm flex-shrink-0">{t.icon}</div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase">{t.t}</p>
                <p className="text-[10px] text-foreground/35">{t.s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
