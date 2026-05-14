"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Package, RefreshCw, Ruler, Users, Headphones } from "lucide-react"

const WHATSAPP_NUMBER = "573207182846"

const supportOptions = [
  {
    id: "atencion",
    icon: Headphones,
    label: "Atencion al cliente",
    message: "Hola MIRR, necesito ayuda con una consulta general."
  },
  {
    id: "pedido",
    icon: Package,
    label: "Seguimiento de pedido",
    message: "Hola MIRR, necesito ayuda con el seguimiento de mi pedido."
  },
  {
    id: "cambios",
    icon: RefreshCw,
    label: "Cambios y devoluciones",
    message: "Hola MIRR, necesito informacion sobre cambios o devoluciones."
  },
  {
    id: "tallas",
    icon: Ruler,
    label: "Informacion de tallas",
    message: "Hola MIRR, necesito ayuda para elegir mi talla."
  },
  {
    id: "colaboraciones",
    icon: Users,
    label: "Colaboraciones",
    message: "Hola MIRR, estoy interesado en colaborar con la marca."
  }
]

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank")
    setIsOpen(false)
  }

  return (
    <>
      {/* WhatsApp Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 flex items-center justify-center bg-[#25D366] rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
        aria-label="Contactar por WhatsApp"
      >
        <svg 
          className="h-7 w-7 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm bg-card border border-border shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold tracking-wider uppercase text-foreground">
                      MIRR
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      WhatsApp
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-sm text-foreground mb-4">
                  Como quieres comunicarte con MIRR?
                </p>

                <div className="space-y-2">
                  {supportOptions.map((option) => (
                    <motion.button
                      key={option.id}
                      onClick={() => handleOptionClick(option.message)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-3 p-3 bg-secondary/30 hover:bg-secondary/50 border border-border/50 hover:border-border transition-all text-left"
                    >
                      <option.icon className="h-5 w-5 text-[#25D366]" />
                      <span className="text-sm text-foreground">
                        {option.label}
                      </span>
                    </motion.button>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Horario de atencion: Lunes a Viernes, 9am - 6pm (COT)
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
