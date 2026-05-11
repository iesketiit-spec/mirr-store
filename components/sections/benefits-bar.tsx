"use client"

import { motion } from "framer-motion"
import { Globe, Shield, Package, RefreshCw } from "lucide-react"

const benefits = [
  {
    icon: Globe,
    title: "Envíos a todo el mundo",
    description: "Rápidos y seguros.",
  },
  {
    icon: Shield,
    title: "Pagos seguros",
    description: "Paga como prefieras.",
  },
  {
    icon: Package,
    title: "Empaque exclusivo",
    description: "Tu pedido, nuestra esencia.",
  },
  {
    icon: RefreshCw,
    title: "Cambios y devoluciones",
    description: "Fácil y sin complicaciones.",
  },
]

export function BenefitsBar() {
  return (
    <section className="py-8 border-y border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ borderColor: "var(--accent)" }}
              className="flex items-center gap-4 p-4 lg:p-6 border border-border/50 rounded-sm bg-card/30 backdrop-blur-sm transition-colors"
            >
              <div className="flex-shrink-0 h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center rounded-full border border-border/50">
                <benefit.icon className="h-5 w-5 lg:h-6 lg:w-6 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-xs lg:text-sm font-semibold tracking-[0.1em] uppercase text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
