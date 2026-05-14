"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Truck, Clock, MapPin, Package, Shield, HelpCircle } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

const shippingInfo = [
  {
    icon: MapPin,
    title: "Cobertura",
    description: "Enviamos a Colombia y Ecuador. Estamos trabajando para expandir a mas paises pronto."
  },
  {
    icon: Truck,
    title: "Costo de Envio",
    description: "Tarifa fija de $10 USD para Colombia y Ecuador, sin importar el numero de productos."
  },
  {
    icon: Clock,
    title: "Tiempo de Entrega",
    description: "5 a 10 dias habiles una vez despachado el pedido. El tiempo de preparacion es de 1 a 3 dias habiles."
  },
  {
    icon: Package,
    title: "Empaque",
    description: "Todos los pedidos incluyen empaque exclusivo MIRR, protegido para garantizar la integridad de tu compra."
  },
]

export default function EnviosPage() {
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
              Envios
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
              Informacion de Envios
            </p>
            <h1 className="font-sans text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              ENVIOS
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              Enviamos a Colombia y Ecuador. Conoce todo sobre tiempos, costos y seguimiento de tu pedido.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Cost Banner */}
      <section className="py-8 bg-accent/10 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="text-3xl lg:text-4xl font-bold text-accent mb-2">$10 USD</p>
            <p className="text-sm text-muted-foreground tracking-wider uppercase">
              Envios nacionales a Colombia y Ecuador
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {shippingInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card border border-border"
              >
                <item.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-sans text-lg font-bold tracking-wider uppercase text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-12 text-center"
          >
            Proceso de Envio
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {[
              { step: "01", title: "Confirmacion del Pedido", description: "Una vez realizado el pago, recibiras un correo de confirmacion con los detalles de tu pedido." },
              { step: "02", title: "Preparacion", description: "Tu pedido sera preparado y empacado cuidadosamente en 1 a 3 dias habiles." },
              { step: "03", title: "Despacho", description: "Te enviaremos un correo con el numero de guia para que puedas rastrear tu envio." },
              { step: "04", title: "Entrega", description: "El tiempo de entrega es de 5 a 10 dias habiles dependiendo de tu ubicacion." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold tracking-wider uppercase text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking */}
      <section className="py-16 lg:py-24 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Shield className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="font-sans text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-4">
              Seguimiento de tu Pedido
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Todos los pedidos incluyen numero de guia para rastreo. Recibiras un correo con el enlace de seguimiento una vez despachado tu pedido. Si tienes dudas sobre tu envio, contactanos.
            </p>
            <a
              href="https://wa.me/573207182846?text=Hola%20MIRR%2C%20necesito%20ayuda%20con%20el%20seguimiento%20de%20mi%20pedido."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
            >
              Consultar mi pedido
            </a>
          </div>
        </div>
      </section>

      {/* Delays */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-secondary/30 border border-border">
              <HelpCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-sans text-base font-bold tracking-wider uppercase text-foreground mb-2">
                  Posibles Retrasos
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  En temporadas altas (lanzamientos, festivos) los tiempos de envio pueden extenderse. Te mantendremos informado en caso de cualquier retraso. Los problemas de aduanas o condiciones climaticas estan fuera de nuestro control pero haremos todo lo posible por ayudarte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-sans text-2xl font-bold tracking-tight text-foreground mb-4">
            Tienes preguntas sobre envios?
          </h2>
          <p className="text-muted-foreground mb-8">
            Estamos aqui para ayudarte
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/573207182846"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] text-white font-sans text-sm tracking-[0.15em] uppercase hover:bg-[#25D366]/90 transition-colors"
            >
              WhatsApp
            </a>
            <Link
              href="/ayuda/preguntas-frecuentes"
              className="px-6 py-3 border border-border text-foreground font-sans text-sm tracking-[0.15em] uppercase hover:bg-secondary/30 transition-colors"
            >
              Ver FAQ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
