"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Minus, Plus, X, Trash2, Globe, Shield, Package, RefreshCw, Tag, HelpCircle, Truck } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

interface CartItem {
  id: string
  name: string
  price: number
  currency: string
  image: string
  color: string
  size: string
  quantity: number
}

const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "Hoodie Gothic",
    price: 175000,
    currency: "COP",
    image: "/hoodie-gothic-1.jpeg",
    color: "Negro",
    size: "L",
    quantity: 1,
  },
  {
    id: "2",
    name: "Pants Gothic",
    price: 165000,
    currency: "COP",
    image: "/hoodie-gothic-1.jpeg",
    color: "Negro",
    size: "L",
    quantity: 1,
  },
  {
    id: "3",
    name: "Cap Gothic",
    price: 80000,
    currency: "COP",
    image: "/hoodie-gothic-1.jpeg",
    color: "Negro",
    size: "Única",
    quantity: 1,
  },
]

const benefits = [
  { icon: Globe, title: "Envíos a todo el mundo", description: "Rápidos y seguros." },
  { icon: Shield, title: "Pagos seguros", description: "Paga como prefieras." },
  { icon: Package, title: "Empaque exclusivo", description: "Tu pedido, nuestra esencia." },
  { icon: RefreshCw, title: "Cambios y devoluciones", description: "Fácil y sin complicaciones." },
]

export default function CarritoPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-CO", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)

  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 lg:mb-12">
            <div className="flex items-center gap-3">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-sans text-3xl lg:text-5xl font-bold tracking-tight text-foreground"
              >
                TU CARRITO
              </motion.h1>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <StarIcon className="h-5 w-5 lg:h-6 lg:w-6 text-accent" />
              </motion.div>
            </div>

            <Link
              href="/tienda"
              className="flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Seguir comprando</span>
            </Link>
          </div>

          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg mb-6">
                Tu carrito está vacío
              </p>
              <Link href="/tienda">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase"
                >
                  Explorar tienda
                </motion.button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <p className="text-sm text-muted-foreground mb-6">
                  {cartItems.length} productos
                </p>

                <div className="space-y-6">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 lg:gap-6 p-4 lg:p-6 border border-border bg-card/30"
                    >
                      {/* Image */}
                      <Link href={`/producto/${item.id}`} className="flex-shrink-0">
                        <div className="relative w-24 h-24 lg:w-32 lg:h-32 bg-card">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>

                      {/* Details */}
                      <div className="flex-1 flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex-1">
                          <Link href={`/producto/${item.id}`}>
                            <h3 className="font-sans text-base lg:text-lg font-semibold tracking-wider uppercase text-foreground hover:text-accent transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">
                            Color: {item.color}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Talla: {item.size}
                          </p>
                          <p className="text-base font-semibold text-foreground mt-2 lg:hidden">
                            ${formatPrice(item.price)} {item.currency}
                          </p>
                        </div>

                        {/* Quantity & Price */}
                        <div className="flex items-center justify-between lg:items-end lg:flex-col gap-4 mt-4 lg:mt-0">
                          {/* Quantity */}
                          <div className="flex items-center gap-3 border border-border">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="flex items-center gap-4">
                            <p className="hidden lg:block text-lg font-semibold text-foreground">
                              ${formatPrice(item.price * item.quantity)} {item.currency}
                            </p>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                              <X className="h-4 w-4" />
                              <span className="hidden lg:inline tracking-wider uppercase">Eliminar</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Clear Cart */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={clearCart}
                  className="flex items-center gap-2 mt-6 px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="tracking-wider uppercase">Vaciar carrito</span>
                </motion.button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="sticky top-32 p-6 lg:p-8 bg-card border border-border"
                >
                  <h2 className="font-sans text-lg font-bold tracking-[0.15em] uppercase text-foreground mb-6">
                    Resumen del pedido
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground font-semibold">
                        ${formatPrice(subtotal)} COP
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Envío</span>
                      <span className="text-accent font-semibold">GRATIS</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-4 border-t border-border">
                    <span className="font-sans text-lg font-bold tracking-wider uppercase text-foreground">
                      Total
                    </span>
                    <span className="text-xl font-bold text-foreground">
                      ${formatPrice(subtotal)} COP
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground mb-6">
                    Impuestos incluidos
                  </p>

                  {/* Shipping Info */}
                  <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-sm mb-6">
                    <Globe className="h-8 w-8 text-accent" />
                    <div>
                      <p className="text-sm font-semibold tracking-wider uppercase text-accent">
                        Envíos a todo el mundo
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Rápidos y seguros.
                      </p>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Link href="/checkout">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full flex items-center justify-center gap-3 py-4 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
                    >
                      Finalizar compra
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Paga de forma 100% segura
                  </p>

                  {/* Payment Icons */}
                  <div className="flex items-center justify-center gap-3 mt-4">
                    {["visa", "mastercard", "amex", "paypal", "applepay"].map((payment) => (
                      <div
                        key={payment}
                        className="w-12 h-8 bg-secondary/50 rounded flex items-center justify-center text-xs text-muted-foreground uppercase"
                      >
                        {payment.slice(0, 4)}
                      </div>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <div className="mt-6 pt-6 border-t border-border space-y-4">
                    <button className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4" />
                        <span className="tracking-wider uppercase">Calcula tu envío</span>
                      </div>
                      <Plus className="h-4 w-4" />
                    </button>
                    <button className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        <span className="tracking-wider uppercase">Cupón de descuento</span>
                      </div>
                      <Plus className="h-4 w-4" />
                    </button>
                    <button className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-4 w-4" />
                        <span className="tracking-wider uppercase">¿Necesitas ayuda?</span>
                      </div>
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 border-y border-border bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-full border border-border">
                  <benefit.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs lg:text-sm font-semibold tracking-wider uppercase text-foreground">
                    {benefit.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
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

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  )
}
