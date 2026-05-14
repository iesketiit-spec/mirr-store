"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Mail, MessageCircle, MapPin, Clock, Send, Instagram, ArrowRight } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@mirr.co",
    href: "mailto:info@mirr.co",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+57 320 718 2846",
    href: "https://wa.me/573207182846",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@mirr.clt",
    href: "https://instagram.com/mirr.clt",
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "Medellin, Colombia",
    href: null,
  },
]

const faqItems = [
  {
    question: "¿Cuánto tiempo tarda el envío?",
    answer: "Los envíos nacionales tardan de 2 a 5 días hábiles. Los envíos internacionales pueden tomar de 7 a 15 días hábiles dependiendo del destino.",
  },
  {
    question: "¿Puedo cambiar o devolver mi producto?",
    answer: "Sí, tienes 30 días desde la recepción para solicitar un cambio o devolución. El producto debe estar sin usar y con todas las etiquetas originales.",
  },
  {
    question: "¿Cómo sé mi talla?",
    answer: "Cada producto tiene una guía de tallas específica. Si tienes dudas, contáctanos por WhatsApp y te ayudamos a elegir la talla correcta.",
  },
  {
    question: "¿Tienen tienda física?",
    answer: "Actualmente operamos exclusivamente online, pero hacemos pop-ups y eventos en Medellín. Síguenos en Instagram para enterarte de nuestros próximos eventos.",
  },
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

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
              Contacto
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column - Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
                  Contacto
                </p>
                <h1 className="font-sans text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-2">
                  HABLEMOS.
                </h1>
                <h2 className="font-sans text-4xl lg:text-5xl font-bold tracking-tight">
                  ESTAMOS PARA <span className="text-accent">AYUDARTE.</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-10"
              >
                ¿Tienes alguna pregunta sobre nuestros productos, envíos o colaboraciones? 
                Escríbenos y te responderemos lo antes posible.
              </motion.p>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-start gap-4 p-5 bg-card border border-border hover:border-accent/50 transition-all duration-300"
                      >
                        <div className="p-2.5 bg-secondary/50 group-hover:bg-accent/10 transition-colors">
                          <item.icon className="h-5 w-5 text-foreground/70 group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                          <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-5 bg-card border border-border">
                        <div className="p-2.5 bg-secondary/50">
                          <item.icon className="h-5 w-5 text-foreground/70" />
                        </div>
                        <div>
                          <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-foreground">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"
              >
                <Clock className="h-4 w-4" />
                <span>Respondemos de Lunes a Viernes, 9am - 6pm (COT)</span>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 bg-card border border-border"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Send className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-foreground mb-3">
                    Mensaje enviado
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-accent text-sm tracking-wider uppercase hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-card border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-card border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Asunto *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 bg-card border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="productos">Preguntas sobre productos</option>
                      <option value="envios">Envíos y entregas</option>
                      <option value="devoluciones">Cambios y devoluciones</option>
                      <option value="colaboraciones">Colaboraciones</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 bg-card border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-sans text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Respuestas a las preguntas más comunes sobre MIRR.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-border"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-sans text-sm font-medium tracking-wider uppercase text-foreground">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    className="text-muted-foreground"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
