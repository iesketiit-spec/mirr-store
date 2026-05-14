"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

export default function PrivacidadPage() {
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
              Politica de Privacidad
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
              POLITICA DE PRIVACIDAD
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
                  1. Informacion que Recopilamos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  En MIRR recopilamos informacion que nos proporcionas directamente cuando realizas una compra, creas una cuenta o te comunicas con nosotros. Esta informacion puede incluir:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Nombre completo</li>
                  <li>Direccion de correo electronico</li>
                  <li>Numero de telefono</li>
                  <li>Direccion de envio</li>
                  <li>Informacion de pago (procesada por terceros seguros)</li>
                  <li>Historial de compras</li>
                </ul>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  2. Uso de la Informacion
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos la informacion recopilada para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Procesar y enviar tus pedidos</li>
                  <li>Comunicarnos contigo sobre tu pedido</li>
                  <li>Enviar informacion sobre nuevos productos y promociones (si lo autorizas)</li>
                  <li>Mejorar nuestro sitio web y experiencia de compra</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  3. Cookies y Tecnologias Similares
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestro sitio web utiliza cookies y tecnologias similares para mejorar tu experiencia de navegacion. Las cookies nos ayudan a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Recordar tus preferencias</li>
                  <li>Mantener tu sesion activa</li>
                  <li>Analizar el trafico del sitio</li>
                  <li>Personalizar contenido</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  4. Seguridad de los Datos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas de seguridad tecnicas y organizativas para proteger tu informacion personal contra acceso no autorizado, alteracion, divulgacion o destruccion. Esto incluye:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Encriptacion SSL para todas las transacciones</li>
                  <li>Procesamiento de pagos a traves de proveedores certificados PCI-DSS</li>
                  <li>Acceso restringido a informacion personal</li>
                  <li>Monitoreo continuo de seguridad</li>
                </ul>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  5. Pagos Seguros
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  MIRR no almacena informacion de tarjetas de credito o debito en sus servidores. Todos los pagos son procesados a traves de proveedores de pago certificados y seguros que cumplen con los estandares de seguridad de la industria (PCI-DSS).
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  6. Compartir Informacion
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  No vendemos ni alquilamos tu informacion personal a terceros. Solo compartimos tu informacion con:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Proveedores de servicios de envio (para entregar tu pedido)</li>
                  <li>Procesadores de pago (para completar transacciones)</li>
                  <li>Autoridades legales (cuando sea requerido por ley)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  7. Tus Derechos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tienes derecho a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Acceder a tu informacion personal</li>
                  <li>Corregir informacion inexacta</li>
                  <li>Solicitar la eliminacion de tus datos</li>
                  <li>Oponerte al procesamiento de tus datos</li>
                  <li>Retirar tu consentimiento en cualquier momento</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Para ejercer estos derechos, contactanos a traves de info@mirr.co
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  8. Retencion de Datos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Conservamos tu informacion personal solo durante el tiempo necesario para cumplir con los propositos descritos en esta politica, a menos que la ley requiera un periodo de retencion mas largo.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  9. Cambios a esta Politica
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos actualizar esta politica de privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva politica en nuestro sitio web y actualizando la fecha de "ultima actualizacion".
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
                  10. Contacto
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Si tienes preguntas sobre esta politica de privacidad o sobre como manejamos tu informacion, puedes contactarnos:
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
