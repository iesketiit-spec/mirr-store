"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

const heroSlides = [
  { image: "/hoodie-gothic-3.jpeg", line1: "Más que ropa,", line2: "es ", accent: "Actitud.", sub: "Diseñamos para los que rompen las reglas, para los que viven el streetwear con identidad y sin miedo a ser diferentes.", btn1: "Ver colecciones", btn1href: "/tienda", btn2: "Ver Lookbook", btn2href: "/lookbook" },
  { image: "/hoodie-gothic-2.jpeg", line1: "MIRR no es moda.", line2: "es ", accent: "Actitud.", sub: "Ropa para los que rompen las reglas.", btn1: "Ver colecciones", btn1href: "/tienda", btn2: "Nuestra historia", btn2href: "/sobre-mirr" },
  { image: "/tee-medellin.jpeg", line1: "Nacido en Medellín.", line2: "Hecho para ", accent: "Destacar.", sub: "Cada pieza, un homenaje a nuestra ciudad y nuestra cultura.", btn1: "Colección Medellín", btn1href: "/colecciones/medellin", btn2: "Ver lookbook", btn2href: "/lookbook" },
]

const featuredProducts = [
  { slug: "hoodie-gothic", name: "Hoodie Gothic", price: 50, currency: "USD", image: "/hoodie-gothic-1.jpeg", isNew: true, sizes: ["S","M","L","XL","XXL"] },
  { slug: "pantalon-sudadera-medellin", name: "Pantalón Sudadera Medellín", price: 35, currency: "USD", image: "/pantalon-medellin.jpeg", isNew: true, sizes: ["S","M","L","XL"] },
  { slug: "tee-medellin", name: "Tee Medellín", price: 18, currency: "USD", image: "/tee-medellin.jpeg", isNew: true, sizes: ["S","M","L","XL"] },
  { slug: "conjunto-urban-medellin", name: "Conjunto Urban Medellín", price: 70, currency: "USD", image: "/conjunto-urban-medellin.jpeg", isNew: true, sizes: ["S","M","L","XL"] },
  { slug: "tee-sell-drugs-buy-art", name: "Tee Sell Drugs Buy Art", price: 15, currency: "USD", image: "/tee-sell-drugs.jpeg", isNew: true, sizes: ["S","M","L","XL"] },
  { slug: "conjunto-urban-gotico", name: "Conjunto Urban Gótico", price: 50, currency: "USD", image: "/hoodie-gothic-2.jpeg", isNew: true, sizes: ["S","M","L","XL"] },
]

const trustItems = [
  { icon: "🌍", title: "Envíos a todo el mundo", sub: "Rápidos y seguros." },
  { icon: "🛡", title: "Calidad Premium", sub: "Materiales seleccionados." },
  { icon: "🔒", title: "Pagos seguros", sub: "Paga como prefieras." },
  { icon: "♾", title: "Diseños exclusivos", sub: "Ediciones limitadas." },
]

export default function HomePage() {
  const [slide, setSlide] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    intervalRef.current = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5000)
    return () => clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const current = heroSlides[slide]

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <TopBar />
      <Header />

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {heroSlides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}>
            <Image src={s.image} alt="MIRR" fill className="object-cover object-top" style={{ transform: `translateY(${scrollY * 0.2}px)` }} priority={i === 0} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

        <div className="relative z-10 px-6 lg:px-16 max-w-2xl">
          <motion.div key={slide} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Image src="/logo.svg" alt="MIRR" width={200} height={67} className="mb-6 w-40 lg:w-56" />
            <h1 className="font-display text-4xl lg:text-7xl leading-[0.9] tracking-wide mb-4">
              {current.line1}<br />
              {current.line2}<span className="text-red-600">{current.accent}</span>
            </h1>
            <p className="text-sm text-foreground/55 leading-relaxed max-w-xs mb-8">{current.sub}</p>
            <div className="flex gap-3 flex-wrap">
              <Link href={current.btn1href} className="bg-white text-black px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-red-600 hover:text-white transition-all">
                {current.btn1} →
              </Link>
              <Link href={current.btn2href} className="border border-white/30 text-white px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:border-white transition-all">
                {current.btn2} ▷
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-6 lg:left-16 flex gap-3 z-10">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              className={`h-px transition-all duration-300 ${i === slide ? "w-10 bg-white" : "w-6 bg-white/30"}`} />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-8 right-6 lg:right-16 z-10 text-[10px] tracking-widest text-foreground/30">
          0{slide + 1} / 0{heroSlides.length}
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-card/40 border-y border-border/20 py-5 px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-red-600/60 flex items-center justify-center text-sm flex-shrink-0">{t.icon}</div>
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase">{t.title}</p>
                <p className="text-[10px] text-foreground/40">{t.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── NUEVOS LANZAMIENTOS ── */}
      <section className="py-16 px-6 lg:px-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl lg:text-5xl tracking-wider flex items-center gap-3">
            Nuevos Lanzamientos <span className="text-red-600 text-2xl">✦</span>
          </h2>
          <Link href="/tienda" className="text-xs tracking-widest uppercase text-foreground/50 border-b border-foreground/20 pb-0.5 hover:text-foreground hover:border-foreground transition-all flex items-center gap-1">
            Ver todo →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border/20">
          {featuredProducts.map((p, i) => (
            <motion.div key={p.slug} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.06 }} viewport={{ once: true }}
              className="bg-background group relative overflow-hidden">
              <Link href={`/producto/${p.slug}`}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  {p.isNew && <span className="absolute top-3 left-3 bg-red-600 text-white text-[9px] tracking-widest px-2 py-1 font-bold uppercase">Nuevo</span>}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="w-full bg-white text-black text-[10px] tracking-widest uppercase py-2.5 font-bold text-center">Ver producto →</span>
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

      {/* ── MEDELLÍN COLLECTION BANNER ── */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden flex items-center">
        <Image src="/tee-barrios-group.jpeg" alt="Medellín Collection" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
          className="relative z-10 px-6 lg:px-16">
          <p className="text-xs tracking-widest text-red-500 uppercase mb-3 flex items-center gap-2">✦ ✦ Colección 2026</p>
          <h2 className="font-display text-6xl lg:text-9xl leading-[0.85] tracking-wide mb-4">MEDELLÍN</h2>
          <Image src="/logo.svg" alt="MIRR" width={100} height={33} className="mb-4 opacity-70" />
          <p className="text-sm text-foreground/55 max-w-xs leading-relaxed mb-6">Inspirada en las calles de Medellín. Cada pieza es un homenaje a la cultura, al barrio y a nuestra esencia.</p>
          <Link href="/colecciones/medellin" className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:border-white transition-all">
            Ver lookbook ▷
          </Link>
        </motion.div>
      </section>

      {/* ── SOBRE MIRR ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="relative overflow-hidden min-h-[350px]">
          <Image src="/hoodie-gothic-2.jpeg" alt="Sobre MIRR" fill className="object-cover object-top" />
        </div>
        <div className="bg-card/20 flex flex-col justify-center px-8 lg:px-16 py-16 gap-5">
          <p className="text-xs tracking-widest text-red-500 uppercase">Sobre MIRR</p>
          <h2 className="font-display text-4xl lg:text-6xl leading-[0.9]">
            Nacido en Medellín.<br />Hecho para <span className="text-red-500">Destacar.</span>
          </h2>
          <div className="flex items-center gap-4 text-foreground/20">
            <div className="flex-1 h-px bg-foreground/10" />
            <span className="text-foreground/20 text-sm">✦</span>
            <div className="flex-1 h-px bg-foreground/10" />
          </div>
          <p className="text-sm text-foreground/55 leading-relaxed">
            MIRR nace en Medellín, una ciudad que inspira, que crea y que nunca se detiene.<br />
            Cada pieza refleja quiénes somos y de dónde venimos.<br />
            Orgullosos de nuestra cultura, nuestras raíces y nuestra gente.
          </p>
          <p className="text-xs font-bold tracking-widest uppercase">Diseñado en Medellín. Hecho para <span className="text-red-500">destacar.</span></p>
          <Image src="/logo.svg" alt="MIRR" width={80} height={27} className="opacity-60" />
          <Link href="/sobre-mirr" className="self-start border border-white/20 text-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:border-white transition-all mt-2">
            Conoce nuestra historia ▷
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
