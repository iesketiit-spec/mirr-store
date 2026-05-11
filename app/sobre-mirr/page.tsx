"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { MirrLogo } from "@/components/ui/mirr-logo"
import { Flame, Globe, Crown } from "lucide-react"

const values = [
  {
    icon: () => <StarIcon className="h-8 w-8" />,
    title: "Identidad",
    description: "Cada pieza refleja quiénes somos y de dónde venimos. Orgullosos de nuestra cultura, nuestras raíces y nuestra gente.",
  },
  {
    icon: Flame,
    title: "Actitud",
    description: "No seguimos tendencias, las creamos. MIRR es para los que se atreven a ser ellos mismos.",
  },
  {
    icon: Globe,
    title: "Visión Global",
    description: "De Medellín para el mundo. Llevamos nuestra esencia a cada rincón, conectando culturas a través del streetwear.",
  },
  {
    icon: Crown,
    title: "Exclusividad",
    description: "Ediciones limitadas. Piezas únicas. No es para todos, es para los que entienden.",
  },
]

const timeline = [
  {
    year: "2020",
    number: "01",
    title: "El inicio",
    description: "Una idea, una pasión y muchas ganas de hacer algo diferente.",
  },
  {
    year: "2021",
    number: "02",
    title: "Primeras piezas",
    description: "Lanzamos nuestras primeras colecciones limitadas. El movimiento comenzó.",
  },
  {
    year: "2022-2023",
    number: "03",
    title: "Crecemos",
    description: "Más personas, más ciudades, más historias. MIRR se hace global.",
  },
  {
    year: "∞",
    number: "04",
    title: "El futuro",
    description: "Seguimos creando, rompiendo y dejando huella.",
  },
]

export default function SobreMirrPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="py-12 lg:py-24">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent text-xs tracking-[0.3em] uppercase mb-4"
              >
                Sobre MIRR
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-sans text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-2"
              >
                MÁS QUE ROPA,
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="font-sans text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6"
              >
                ES <span className="text-accent">ACTITUD.</span>
              </motion.h1>

              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="flex-1 h-px bg-border" />
                <StarIcon className="h-4 w-4 text-foreground/30" />
                <div className="flex-1 h-px bg-border" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-4"
              >
                MIRR nace en Medellín, una ciudad que inspira, que crea y que nunca se detiene. Diseñamos para los que rompen las reglas, para los que viven el streetwear con identidad y sin miedo a ser diferentes.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="font-sans text-lg lg:text-xl font-bold tracking-tight text-foreground mb-4"
              >
                DISEÑADO EN MEDELLÍN. HECHO PARA <span className="text-accent">DESTACAR.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <MirrLogo className="h-10 w-auto" />
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative aspect-[4/5] lg:aspect-auto lg:h-[700px]"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9944d68f-de01-4265-b9a5-ae70ffbb2a7c.jpeg"
                alt="Sobre MIRR"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/50 lg:hidden" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground rotate-180 [writing-mode:vertical-lr]">
              Nuestra Esencia
            </span>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 lg:p-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-border mb-4">
                    <value.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="font-sans text-lg font-bold tracking-wider uppercase text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Header */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent text-xs tracking-[0.3em] uppercase mb-4"
              >
                Nuestra Historia
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-sans text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-2"
              >
                DESDE SIEMPRE.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="font-sans text-3xl lg:text-4xl font-bold tracking-tight"
              >
                PARA <span className="text-accent">SIEMPRE.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-base leading-relaxed mt-6"
              >
                MIRR comenzó como una idea entre amigos, con un sueño claro: crear ropa que representara nuestra forma de ver y vivir el mundo. Hoy, seguimos con la misma misión, pero con una comunidad que no para de crecer.
              </motion.p>
            </div>

            {/* Timeline */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-accent text-2xl font-bold">{item.number}</span>
                      {index < timeline.length - 1 && (
                        <div className="hidden lg:block flex-1 h-px bg-border" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <StarIcon className="h-3 w-3 text-foreground/30" />
                    </div>
                    <h3 className="font-sans text-base font-bold tracking-wider uppercase text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-accent text-sm font-semibold mb-2">{item.year}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  )
}
