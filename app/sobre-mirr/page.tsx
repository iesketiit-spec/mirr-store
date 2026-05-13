"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

const values = [
  { icon: "✦", title: "Identidad", text: "Cada pieza refleja quiénes somos y de dónde venimos. Orgullosos de nuestra cultura, nuestras raíces y nuestra gente." },
  { icon: "🔥", title: "Actitud", text: "No seguimos tendencias, las creamos. MIRR es para los que se atreven a ser ellos mismos." },
  { icon: "🌍", title: "Visión Global", text: "De Medellín para el mundo. Llevamos nuestra esencia a cada rincón, conectando culturas a través del streetwear." },
  { icon: "♛", title: "Exclusividad", text: "Ediciones limitadas. Piezas únicas. No es para todos, es para los que entienden." },
]

const timeline = [
  { num: "01", year: "El inicio · 2020", title: "El Inicio", text: "Una idea, una pasión y muchas ganas de hacer algo diferente." },
  { num: "02", year: "Primeras piezas · 2021", title: "Primeras Piezas", text: "Lanzamos nuestras primeras colecciones limitadas. El movimiento comenzó." },
  { num: "03", year: "Crecemos · 2022-2023", title: "Crecemos", text: "Más personas, más ciudades, más historias. MIRR se hace global." },
  { num: "04", year: "El futuro · ∞", title: "El Futuro", text: "Seguimos creando, rompiendo y dejando huella." },
]

export default function SobreMirrPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-24 lg:pt-0">
        {/* Left */}
        <div className="relative z-10 flex flex-col justify-center px-6 lg:px-16 py-16 lg:pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs tracking-widest text-red-500 uppercase mb-4">Sobre MIRR</p>
            <h1 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-6">
              Más que ropa,<br />es <span className="text-red-500">Actitud.</span>
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-foreground/10 flex-1" />
              <span className="text-foreground/25">✦</span>
              <div className="h-px bg-foreground/10 w-16" />
            </div>
            <p className="text-sm text-foreground/55 leading-relaxed mb-3 max-w-sm">
              MIRR nace en Medellín, una ciudad que inspira, que crea y que nunca se detiene.
            </p>
            <p className="text-sm text-foreground/55 leading-relaxed mb-3 max-w-sm">
              Diseñamos para los que rompen las reglas, para los que viven el streetwear con identidad y sin miedo a ser diferentes.
            </p>
            <p className="text-xs font-bold tracking-widest uppercase mb-6">
              Diseñado en Medellín. Hecho para <span className="text-red-500">Destacar.</span>
            </p>
            <Image src="/logo.svg" alt="MIRR" width={90} height={30} className="opacity-60 mb-8" />
            <Link href="/tienda" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-red-600 hover:text-white transition-all">
              Ver colección ▷
            </Link>
          </motion.div>
        </div>
        {/* Right image */}
        <div className="relative min-h-[50vh] lg:min-h-screen overflow-hidden">
          <Image src="/hoodie-gothic-3.jpeg" alt="Sobre MIRR" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20 lg:bg-none" />
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-card/20 py-16 lg:py-24 px-6 lg:px-16">
        <div className="flex gap-8 lg:gap-16 items-start">
          <p className="writing-mode-vertical text-[9px] tracking-widest text-foreground/20 uppercase hidden lg:block" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
            Nuestra Esencia
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full border border-red-600 flex items-center justify-center text-xl text-red-500">
                  {v.icon}
                </div>
                <p className="text-xs font-bold tracking-widest uppercase">{v.title}</p>
                <p className="text-xs text-foreground/45 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 lg:py-24 px-6 lg:px-16">
        <div className="mb-12">
          <p className="text-xs tracking-widest text-red-500 uppercase mb-3">Nuestra Historia</p>
          <h2 className="font-display text-4xl lg:text-6xl leading-[0.9] mb-6">
            Desde siempre.<br />Para <span className="text-red-500">siempre.</span>
          </h2>
          <p className="text-sm text-foreground/50 leading-relaxed max-w-md">
            MIRR comenzó como una idea entre amigos, con un sueño claro: crear ropa que representara nuestra forma de ver y vivir el mundo. Hoy, seguimos con la misma misión, pero con una comunidad que no para de crecer.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {timeline.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              <p className="text-xs font-bold tracking-widest text-foreground/20 mb-3">{t.num}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-foreground/20 text-xs">✦</span>
                <div className="flex-1 h-px bg-foreground/10" />
              </div>
              <p className="text-[10px] tracking-widest text-red-500 uppercase mb-2">{t.year}</p>
              <p className="text-sm font-bold tracking-widest uppercase mb-2">{t.title}</p>
              <p className="text-xs text-foreground/40 leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image src="/tee-gothic-group.jpeg" alt="MIRR" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-6">
          <h2 className="font-display text-4xl lg:text-7xl mb-6">¿Listo para ser parte<br />del movimiento?</h2>
          <Link href="/tienda" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-red-600 hover:text-white transition-all">
            Ver colección completa →
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
