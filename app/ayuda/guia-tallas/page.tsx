"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Ruler, HelpCircle } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

const sizeGuides = [
  {
    category: "Oversize Hoodie",
    description: "Hoodies de algodon pesado 320-420 GSM. Fit oversized moderno.",
    sizes: [
      { size: "S", ancho: "58", largo: "70", manga: "60" },
      { size: "M", ancho: "62", largo: "73", manga: "62" },
      { size: "L", ancho: "66", largo: "76", manga: "64" },
      { size: "XL", ancho: "70", largo: "79", manga: "66" },
      { size: "XXL", ancho: "74", largo: "82", manga: "68" },
    ],
    columns: ["Talla", "Ancho (cm)", "Largo (cm)", "Manga (cm)"],
    fitTip: "Recomendamos tu talla habitual para un look oversized. Si prefieres un fit mas ajustado, baja una talla."
  },
  {
    category: "Oversize T-Shirt",
    description: "Camisetas de algodon 250-400 GSM. Fit oversized con caida relajada.",
    sizes: [
      { size: "S", ancho: "54", largo: "70", manga: "24" },
      { size: "M", ancho: "58", largo: "73", manga: "25" },
      { size: "L", ancho: "62", largo: "76", manga: "26" },
      { size: "XL", ancho: "66", largo: "79", manga: "27" },
    ],
    columns: ["Talla", "Ancho (cm)", "Largo (cm)", "Manga (cm)"],
    fitTip: "Las camisetas tienen un fit oversized con hombros caidos. Elige tu talla normal para el look intended."
  },
  {
    category: "Baggy Pants",
    description: "Pantalones baggy de algodon. Cintura elastica con cordon.",
    sizes: [
      { size: "S", cintura: "70-76", largo: "102", pierna: "34" },
      { size: "M", cintura: "76-82", largo: "104", pierna: "36" },
      { size: "L", cintura: "82-88", largo: "106", pierna: "38" },
      { size: "XL", cintura: "88-94", largo: "108", pierna: "40" },
      { size: "XXL", cintura: "94-100", largo: "110", pierna: "42" },
    ],
    columns: ["Talla", "Cintura (cm)", "Largo (cm)", "Pierna (cm)"],
    fitTip: "Corte baggy con cintura elastica. Si estas entre tallas, te recomendamos subir."
  },
  {
    category: "Tracksuits / Conjuntos",
    description: "Sets completos hoodie + pantalon. Mismo fit que las piezas individuales.",
    sizes: [
      { size: "S", hoodieAncho: "58", hoodleLargo: "70", pantCintura: "70-76" },
      { size: "M", hoodieAncho: "62", hoodleLargo: "73", pantCintura: "76-82" },
      { size: "L", hoodieAncho: "66", hoodleLargo: "76", pantCintura: "82-88" },
      { size: "XL", hoodieAncho: "70", hoodleLargo: "79", pantCintura: "88-94" },
    ],
    columns: ["Talla", "Hoodie Ancho", "Hoodie Largo", "Pant Cintura"],
    fitTip: "Los conjuntos vienen en tallas coordinadas. Recomendamos la misma talla para ambas piezas."
  },
]

export default function GuiaTallasPage() {
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
            <span className="text-foreground font-semibold tracking-wider uppercase">
              Guia de Tallas
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
              Encuentra tu talla
            </p>
            <h1 className="font-sans text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              GUIA DE TALLAS
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              Todas las medidas estan en centimetros. Nuestras prendas tienen un fit oversized disenado para un look moderno y comodo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fit Note */}
      <section className="py-6 bg-accent/10 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-4 justify-center">
            <Ruler className="h-6 w-6 text-accent" />
            <p className="text-sm text-foreground">
              <span className="font-bold">El fit MIRR esta disenado oversized.</span> Si prefieres un fit mas ajustado, baja una talla.
            </p>
          </div>
        </div>
      </section>

      {/* Size Tables */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {sizeGuides.map((guide, index) => (
              <motion.div
                key={guide.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="font-sans text-2xl font-bold tracking-wider uppercase text-foreground mb-2">
                  {guide.category}
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  {guide.description}
                </p>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-card">
                        {guide.columns.map((col) => (
                          <th key={col} className="border border-border px-4 py-3 text-left text-xs font-bold tracking-wider uppercase text-foreground">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {guide.sizes.map((row, rowIndex) => (
                        <tr key={row.size} className={rowIndex % 2 === 0 ? "bg-background" : "bg-card/30"}>
                          <td className="border border-border px-4 py-3 text-sm font-bold text-foreground">
                            {row.size}
                          </td>
                          {Object.entries(row).slice(1).map(([key, value]) => (
                            <td key={key} className="border border-border px-4 py-3 text-sm text-muted-foreground">
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Fit Tip */}
                <div className="mt-4 flex items-start gap-3 p-4 bg-secondary/30 border border-border">
                  <HelpCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-bold text-foreground">Tip:</span> {guide.fitTip}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Measure */}
      <section className="py-16 lg:py-24 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-2xl font-bold tracking-tight text-foreground mb-8 text-center"
          >
            Como Medir
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Ancho", description: "Mide de axila a axila con la prenda extendida." },
              { title: "Largo", description: "Mide desde el cuello hasta el borde inferior de la prenda." },
              { title: "Manga", description: "Mide desde el hombro hasta el final de la manga." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-background border border-border text-center"
              >
                <p className="font-bold text-foreground mb-2">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-sans text-2xl font-bold tracking-tight text-foreground mb-4">
            Dudas con tu talla?
          </h2>
          <p className="text-muted-foreground mb-8">
            Escribenos y te ayudamos a elegir la talla perfecta
          </p>
          <a
            href="https://wa.me/573207182846?text=Hola%20MIRR%2C%20necesito%20ayuda%20para%20elegir%20mi%20talla."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
          >
            Consultar talla
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
