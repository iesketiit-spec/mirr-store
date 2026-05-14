"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, RefreshCw, Clock, Package, AlertCircle, CheckCircle } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

export default function CambiosDevolucionesPage() {
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
              Cambios y Devoluciones
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
              Politicas
            </p>
            <h1 className="font-sans text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              CAMBIOS Y DEVOLUCIONES
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              Tu satisfaccion es importante para nosotros. Conoce nuestras politicas de cambios y devoluciones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Info */}
      <section className="py-8 bg-accent/10 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
              <p className="font-bold text-foreground">30 dias</p>
              <p className="text-sm text-muted-foreground">Para solicitar cambio</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Package className="h-8 w-8 text-accent mx-auto mb-3" />
              <p className="font-bold text-foreground">Sin usar</p>
              <p className="text-sm text-muted-foreground">Con etiquetas originales</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <RefreshCw className="h-8 w-8 text-accent mx-auto mb-3" />
              <p className="font-bold text-foreground">Cambio por talla</p>
              <p className="text-sm text-muted-foreground">Sujeto a disponibilidad</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            
            {/* Cambios por Talla */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4 pb-4 border-b border-border">
                Cambios por Talla
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Entendemos que a veces la talla no es la correcta. Aceptamos cambios por talla dentro de los 30 dias posteriores a la recepcion del pedido, sujeto a las siguientes condiciones:
              </p>
              <ul className="space-y-3">
                {[
                  "El producto debe estar sin usar, sin lavar y sin alteraciones",
                  "Debe conservar todas las etiquetas originales",
                  "Debe estar en su empaque original o similar",
                  "El cambio esta sujeto a disponibilidad de la talla deseada"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Productos No Elegibles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4 pb-4 border-b border-border">
                Productos No Elegibles
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Los siguientes productos no son elegibles para cambio o devolucion:
              </p>
              <ul className="space-y-3">
                {[
                  "Productos que hayan sido usados, lavados o alterados",
                  "Productos sin etiquetas originales",
                  "Productos en promocion o descuento especial (salvo defecto)",
                  "Productos personalizados o hechos a medida"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Costos de Envio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4 pb-4 border-b border-border">
                Costos de Envio
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-card border border-border">
                  <p className="font-bold text-foreground mb-2">Cambio por preferencia del cliente</p>
                  <p className="text-sm text-muted-foreground">El costo de envio del cambio (enviar el producto de vuelta y recibir el nuevo) corre por cuenta del cliente.</p>
                </div>
                <div className="p-4 bg-card border border-border">
                  <p className="font-bold text-foreground mb-2">Producto defectuoso o equivocado</p>
                  <p className="text-sm text-muted-foreground">Si el producto llego defectuoso o enviamos una talla/producto equivocado, MIRR asume el costo total del cambio.</p>
                </div>
              </div>
            </motion.div>

            {/* Como Solicitar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4 pb-4 border-b border-border">
                Como Solicitar un Cambio
              </h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Contactanos", description: "Escribenos por WhatsApp o email dentro de los 30 dias de recibido tu pedido." },
                  { step: "2", title: "Proporciona informacion", description: "Numero de pedido, producto a cambiar, razon del cambio y talla deseada." },
                  { step: "3", title: "Recibe instrucciones", description: "Te enviaremos la direccion y pasos para enviar el producto de vuelta." },
                  { step: "4", title: "Envia el producto", description: "Empaca el producto de forma segura y envialo siguiendo las instrucciones." },
                  { step: "5", title: "Recibe tu cambio", description: "Una vez recibido y verificado el producto, enviaremos el cambio." },
                ].map((item, index) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Devoluciones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-secondary/30 border border-border"
            >
              <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                Sobre Devoluciones de Dinero
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                En MIRR preferimos realizar cambios por otros productos de nuestra tienda. Las devoluciones de dinero se evaluan caso por caso y pueden estar sujetas a cargos por manejo. Si necesitas una devolucion, contactanos para evaluar tu situacion.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-sans text-2xl font-bold tracking-tight text-foreground mb-4">
            Necesitas solicitar un cambio?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contactanos y te ayudamos con el proceso
          </p>
          <a
            href="https://wa.me/573207182846?text=Hola%20MIRR%2C%20necesito%20informacion%20sobre%20cambios%20o%20devoluciones."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
          >
            Solicitar Cambio
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
