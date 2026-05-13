"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

const lookbookImages = [
  { src: "/hoodie-gothic-3.jpeg", title: "Gothic Collection", sub: "Hoodie + Pants", span: "col-span-2 row-span-2" },
  { src: "/tee-medellin.jpeg", title: "Medellín Collection", sub: "Tee Medellín", span: "" },
  { src: "/tee-sell-drugs.jpeg", title: "Medellín Collection", sub: "Sell Drugs Buy Art", span: "" },
  { src: "/hoodie-gothic-2.jpeg", title: "Gothic Collection", sub: "Conjunto Gótico", span: "" },
  { src: "/tee-antioquia.jpeg", title: "Barrios", sub: "Barrio Antioquia", span: "" },
  { src: "/conjunto-urban-medellin.jpeg", title: "Medellín Collection", sub: "Conjunto Urban", span: "col-span-2" },
  { src: "/tee-maanrrique.jpeg", title: "Barrios", sub: "Maanrrique", span: "" },
  { src: "/tee-laureles.jpeg", title: "Barrios", sub: "Laureles", span: "" },
  { src: "/pantalon-medellin.jpeg", title: "Medellín Collection", sub: "Pantalón Sudadera", span: "" },
  { src: "/tee-poblado.jpeg", title: "Barrios", sub: "El Poblado", span: "" },
  { src: "/tee-mirr-vision.jpeg", title: "MIRR Vision", sub: "New Galaxy", span: "" },
  { src: "/hoodie-gothic-1.jpeg", title: "Gothic Collection", sub: "Hoodie Gothic", span: "" },
]

export default function LookbookPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <div className="pt-28 lg:pt-32 pb-16 px-6 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <p className="text-xs tracking-widest text-red-500 uppercase mb-2">✦ MIRR 2026</p>
          <h1 className="font-display text-5xl lg:text-8xl tracking-wider mb-3">LOOKBOOK</h1>
          <p className="text-sm text-foreground/40 tracking-widest uppercase">Medellín Collection × Gothic Collection</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 auto-rows-[280px] lg:auto-rows-[360px]">
          {lookbookImages.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.04 }} viewport={{ once: true }}
              className={`relative overflow-hidden group ${img.span}`}>
              <Image src={img.src} alt={img.title} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
                <p className="text-[9px] tracking-widest text-foreground/50 uppercase">{img.title}</p>
                <p className="text-sm font-bold tracking-widest uppercase">{img.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/tienda" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-red-600 hover:text-white transition-all">
            Ver toda la colección →
          </Link>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
