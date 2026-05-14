"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

export default function TerminosPage() {
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
              Terminos y Condiciones
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
              Legal
            </p>
            <h1 className="font-sans text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              TERMINOS Y CONDICIONES
            </h1>
            <p className="text-muted-foreground text-sm">
              Ultima actualizacion: Mayo 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl prose prose-invert prose-sm">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  1. Uso del Sitio
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Al acceder y utilizar el sitio web de MIRR (mirr.co), aceptas estos terminos y condiciones en su totalidad. Si no estas de acuerdo con alguna parte de estos terminos, no debes utilizar nuestro sitio web.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  MIRR se reserva el derecho de modificar estos terminos en cualquier momento. Los cambios entraran en vigor inmediatamente despues de su publicacion en el sitio.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  2. Compras y Pedidos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Al realizar una compra en mirr.co, confirmas que tienes al menos 18 anos de edad o cuentas con el consentimiento de un padre o tutor legal. Todos los precios estan expresados en dolares estadounidenses (USD) e incluyen impuestos aplicables.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Nos reservamos el derecho de rechazar o cancelar cualquier pedido por cualquier motivo, incluyendo pero no limitado a: disponibilidad del producto, errores en la descripcion o precio, o sospecha de fraude.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  3. Pagos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Aceptamos pagos mediante tarjetas de credito y debito (Visa, Mastercard, American Express), PayPal y transferencia bancaria. El pago debe completarse antes del envio del producto.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Toda la informacion de pago es procesada de forma segura a traves de proveedores de pago certificados. MIRR no almacena informacion de tarjetas de credito en sus servidores.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  4. Envios
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Actualmente realizamos envios a Colombia y Ecuador. El costo de envio es de $10 USD y el tiempo de entrega estimado es de 5 a 10 dias habiles una vez despachado el pedido.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  MIRR no se hace responsable por retrasos causados por el transportista, aduanas, o circunstancias fuera de nuestro control. Una vez que el paquete es entregado al transportista, la responsabilidad del envio pasa al cliente.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  5. Cambios y Devoluciones
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Aceptamos cambios dentro de los 30 dias posteriores a la recepcion del pedido. El producto debe estar sin usar, con etiquetas originales y en su empaque original. Para mas informacion, consulta nuestra politica de cambios y devoluciones.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  6. Propiedad Intelectual
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todo el contenido del sitio web de MIRR, incluyendo pero no limitado a logos, disenos, imagenes, textos, graficos y software, es propiedad de MIRR y esta protegido por las leyes de propiedad intelectual.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Queda prohibida la reproduccion, distribucion, modificacion o uso de cualquier contenido sin autorizacion previa por escrito de MIRR.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  7. Restricciones de Uso
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Al utilizar este sitio, te comprometes a no:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Usar el sitio para fines ilegales o no autorizados</li>
                  <li>Interferir con el funcionamiento del sitio</li>
                  <li>Intentar acceder a areas restringidas del sitio</li>
                  <li>Recopilar informacion de otros usuarios sin su consentimiento</li>
                  <li>Revender productos de MIRR sin autorizacion</li>
                </ul>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  8. Limitacion de Responsabilidad
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  MIRR no sera responsable por danos directos, indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar nuestros productos o servicios.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  9. Contacto
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para cualquier pregunta sobre estos terminos y condiciones, puedes contactarnos a traves de:
                </p>
                <ul className="list-none text-muted-foreground mt-4 space-y-2">
                  <li>Email: info@mirr.co</li>
                  <li>WhatsApp: +57 320 718 2846</li>
                  <li>Instagram: @mirr.clt</li>
                </ul>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
