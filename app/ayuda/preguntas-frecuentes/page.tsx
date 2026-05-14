"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Search } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

const faqCategories = [
  {
    title: "Pedidos y Envios",
    questions: [
      {
        question: "Cuanto tarda el envio?",
        answer: "Los envios a Colombia y Ecuador tardan de 5 a 10 dias habiles una vez confirmado el pago. El tiempo de preparacion del pedido es de 1 a 3 dias habiles."
      },
      {
        question: "Hacen envios internacionales?",
        answer: "Actualmente realizamos envios unicamente a Colombia y Ecuador. El costo de envio es de $10 USD para ambos paises. Estamos trabajando para expandir a mas paises pronto."
      },
      {
        question: "Como hago seguimiento de mi pedido?",
        answer: "Una vez despachado tu pedido, recibiras un correo electronico con el numero de guia y el enlace para rastrear tu envio. Tambien puedes contactarnos por WhatsApp para mas informacion."
      },
      {
        question: "Que pasa si mi pedido llega danado?",
        answer: "Si tu pedido llega danado, contactanos dentro de las primeras 48 horas con fotos del producto y el empaque. Realizaremos el cambio sin costo adicional."
      },
    ]
  },
  {
    title: "Productos y Tallas",
    questions: [
      {
        question: "Como se mi talla?",
        answer: "Todas nuestras prendas tienen un fit oversized. Revisa nuestra guia de tallas donde encontraras las medidas exactas de cada prenda. Si tienes dudas, escribenos por WhatsApp y te ayudamos a elegir."
      },
      {
        question: "Los hoodies son oversized?",
        answer: "Si, todos nuestros hoodies estan disenados con un fit oversized moderno. Recomendamos elegir tu talla habitual para un look oversized o una talla menos para un fit mas ajustado."
      },
      {
        question: "De que material son las prendas?",
        answer: "Utilizamos algodon 100% de alta calidad. Nuestros hoodies son de 320-420 GSM (gramos por metro cuadrado) para mayor durabilidad y confort. Las camisetas varian entre 250-400 GSM segun el modelo."
      },
      {
        question: "Cuando hacen restock?",
        answer: "Nuestras colecciones son de edicion limitada. Una vez agotadas, no hacemos restock del mismo diseno. Sigue nuestras redes sociales para enterarte de nuevos lanzamientos."
      },
    ]
  },
  {
    title: "Pagos",
    questions: [
      {
        question: "Que metodos de pago aceptan?",
        answer: "Aceptamos tarjetas de credito y debito (Visa, Mastercard, American Express), PayPal y transferencia bancaria. Todos los pagos son procesados de forma segura."
      },
      {
        question: "Es seguro pagar en la tienda?",
        answer: "Si, contamos con certificado SSL y todos los pagos son encriptados. No almacenamos informacion de tarjetas en nuestros servidores."
      },
      {
        question: "Puedo pagar en cuotas?",
        answer: "Si, al pagar con tarjeta de credito puedes diferir tu compra segun las opciones que ofrezca tu banco. PayPal tambien ofrece opciones de pago en cuotas en algunos paises."
      },
    ]
  },
  {
    title: "Cambios y Devoluciones",
    questions: [
      {
        question: "Como solicito un cambio?",
        answer: "Contactanos por WhatsApp o email dentro de los 30 dias posteriores a recibir tu pedido. El producto debe estar sin usar, con etiquetas originales y en su empaque. Te enviaremos las instrucciones para el cambio."
      },
      {
        question: "Cual es el costo del cambio?",
        answer: "El costo de envio del cambio corre por cuenta del cliente, excepto si el producto llego defectuoso o equivocado. En ese caso, MIRR asume el costo."
      },
      {
        question: "Hacen devoluciones de dinero?",
        answer: "Preferimos realizar cambios por otros productos. Las devoluciones de dinero se evaluan caso por caso y pueden aplicar cargos por manejo."
      },
    ]
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

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
              Preguntas Frecuentes
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
              FAQ
            </p>
            <h1 className="font-sans text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              PREGUNTAS FRECUENTES
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              Encuentra respuestas a las preguntas mas comunes sobre pedidos, envios, tallas y mas.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 max-w-md relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar pregunta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            {filteredCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-6 pb-4 border-b border-border">
                  {category.title}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((item, qIndex) => {
                    const itemId = `${catIndex}-${qIndex}`
                    const isOpen = openItems.includes(itemId)
                    
                    return (
                      <div key={itemId} className="border border-border">
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full flex items-center justify-between p-5 text-left"
                        >
                          <span className="font-sans text-sm font-medium tracking-wider text-foreground pr-4">
                            {item.question}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            className="text-muted-foreground flex-shrink-0"
                          >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                            </svg>
                          </motion.div>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-card border border-border text-center max-w-3xl"
          >
            <h3 className="font-sans text-xl font-bold tracking-wider uppercase text-foreground mb-4">
              No encontraste lo que buscabas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contactanos directamente y te ayudamos con tu consulta.
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
                href="/contacto"
                className="px-6 py-3 border border-border text-foreground font-sans text-sm tracking-[0.15em] uppercase hover:bg-secondary/30 transition-colors"
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
