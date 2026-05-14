"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Lock, Globe, Shield, Package, Check, CreditCard, Building } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { MirrLogo } from "@/components/ui/mirr-logo"
import { useCart } from "@/lib/cart-context"

const checkoutSteps = [
  { id: 1, name: "Carrito" },
  { id: 2, name: "Envio" },
  { id: 3, name: "Pago" },
  { id: 4, name: "Confirmacion" },
]

const paymentMethods = [
  { id: "card", name: "Tarjeta de credito / debito", icon: CreditCard },
  { id: "paypal", name: "PayPal", icon: () => <span className="text-sm font-bold">P</span> },
  { id: "transfer", name: "Transferencia bancaria", icon: Building },
]

export default function CheckoutPage() {
  const { items, subtotal, shippingCost, total, clearCart } = useCart()
  const [currentStep] = useState(3)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    address: "",
    country: "Colombia",
    state: "",
    city: "",
    zip: "",
    saveAddress: false,
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
    saveCard: false,
  })

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-CO", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsProcessing(false)
    setOrderComplete(true)
    clearCart()
  }

  if (items.length === 0 && !orderComplete) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Tu carrito esta vacio</p>
          <Link href="/tienda" className="text-accent hover:underline">
            Ir a la tienda
          </Link>
        </div>
      </main>
    )
  }

  if (orderComplete) {
    return (
      <main className="min-h-screen bg-background">
        <TopBar />
        <div className="container mx-auto px-4 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto"
          >
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-accent" />
            </div>
            <h1 className="font-sans text-3xl font-bold tracking-tight text-foreground mb-4">
              Pedido Confirmado
            </h1>
            <p className="text-muted-foreground mb-8">
              Gracias por tu compra. Recibiras un correo con los detalles de tu pedido y el numero de seguimiento una vez despachado.
            </p>
            <Link href="/tienda">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase"
              >
                Seguir comprando
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <WhatsAppButton />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <TopBar />

      {/* Checkout Header */}
      <header className="border-b border-border py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/">
              <MirrLogo className="h-8 w-auto" />
            </Link>

            {/* Steps - Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {checkoutSteps.map((step, index) => (
                <div key={step.id} className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full border text-sm ${
                      currentStep >= step.id
                        ? "bg-foreground text-background border-foreground"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <span
                    className={`text-sm tracking-wider uppercase ${
                      currentStep >= step.id
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.name}
                  </span>
                  {index < checkoutSteps.length - 1 && (
                    <div
                      className={`w-12 h-px ${
                        currentStep > step.id
                          ? "bg-foreground"
                          : "bg-border"
                      }`}
                    />
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              <span className="hidden sm:inline tracking-wider uppercase">Compra 100% segura</span>
            </div>
          </div>
        </div>
      </header>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Form Section */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="font-sans text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-2">
                  PAGO
                </h1>
                <p className="text-muted-foreground mb-8">
                  Completa tus datos y elige tu metodo de pago preferido.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Info */}
                  <div>
                    <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-foreground mb-4">
                      1. Datos de contacto
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs text-muted-foreground mb-2">
                          Correo electronico *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ejemplo@correo.com"
                          className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-muted-foreground mb-2">
                          Telefono *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+57 320 123 4567"
                          className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent text-base"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-foreground mb-4">
                      2. Direccion de envio
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs text-muted-foreground mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Juan Perez"
                          className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-muted-foreground mb-2">
                          Direccion *
                        </label>
                        <input
                          type="text"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Calle 123 #45-67"
                          className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent text-base"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-muted-foreground mb-2">
                            Pais *
                          </label>
                          <select
                            name="country"
                            required
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-input border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-accent appearance-none text-base"
                          >
                            <option value="Colombia">Colombia</option>
                            <option value="Ecuador">Ecuador</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-muted-foreground mb-2">
                            Ciudad *
                          </label>
                          <input
                            type="text"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Medellin"
                            className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent text-base"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-muted-foreground mb-2">
                            Departamento / Provincia *
                          </label>
                          <input
                            type="text"
                            name="state"
                            required
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder="Antioquia"
                            className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent text-base"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-muted-foreground mb-2">
                            Codigo postal
                          </label>
                          <input
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleInputChange}
                            placeholder="050001"
                            className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent text-base"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-foreground mb-4">
                      3. Metodo de pago
                    </h2>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={`flex items-center gap-2 px-4 py-3 border transition-colors ${
                            paymentMethod === method.id
                              ? "border-foreground bg-foreground text-background"
                              : "border-border text-muted-foreground hover:border-foreground/50"
                          }`}
                        >
                          <method.icon className="h-4 w-4" />
                          <span className="text-sm">{method.name}</span>
                        </button>
                      ))}
                    </div>

                    {paymentMethod === "card" && (
                      <div className="space-y-4 p-4 border border-border bg-card/30">
                        <div>
                          <label className="block text-xs text-muted-foreground mb-2">
                            Numero de tarjeta *
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            required
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent text-base"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-muted-foreground mb-2">
                            Nombre en la tarjeta *
                          </label>
                          <input
                            type="text"
                            name="cardName"
                            required
                            value={formData.cardName}
                            onChange={handleInputChange}
                            placeholder="Juan Perez"
                            className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent text-base"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-muted-foreground mb-2">
                              Vencimiento *
                            </label>
                            <input
                              type="text"
                              name="cardExpiry"
                              required
                              value={formData.cardExpiry}
                              onChange={handleInputChange}
                              placeholder="MM / AA"
                              className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent text-base"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-muted-foreground mb-2">
                              CVV *
                            </label>
                            <input
                              type="text"
                              name="cardCvv"
                              required
                              value={formData.cardCvv}
                              onChange={handleInputChange}
                              placeholder="123"
                              className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent text-base"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-4">
                    <Link
                      href="/carrito"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span className="tracking-wider uppercase">Volver al carrito</span>
                    </Link>

                    <motion.button
                      type="submit"
                      disabled={isProcessing}
                      whileHover={{ scale: isProcessing ? 1 : 1.01 }}
                      whileTap={{ scale: isProcessing ? 1 : 0.99 }}
                      className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-4 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors disabled:opacity-50"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                          Procesando...
                        </>
                      ) : (
                        <>
                          <Lock className="h-4 w-4" />
                          Pagar ${formatPrice(total)} USD
                        </>
                      )}
                    </motion.button>
                  </div>

                  <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    Pago seguro encriptado con SSL
                  </p>
                </form>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:sticky lg:top-8 p-6 bg-card border border-border"
              >
                <h2 className="font-sans text-lg font-bold tracking-[0.15em] uppercase text-foreground mb-6">
                  Resumen del pedido
                </h2>

                {/* Items */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-16 h-16 bg-secondary flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Talla: {item.size}</p>
                        <p className="text-sm text-foreground mt-1">${formatPrice(item.price * item.quantity)} USD</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${formatPrice(subtotal)} USD</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Envio (Colombia/Ecuador)</span>
                    <span className="text-foreground">${formatPrice(shippingCost)} USD</span>
                  </div>
                  <div className="flex justify-between text-base font-bold pt-3 border-t border-border">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">${formatPrice(total)} USD</span>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="mt-6 p-4 bg-secondary/30 border border-border/50">
                  <div className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Envio a Colombia y Ecuador</p>
                      <p className="text-xs text-muted-foreground">5-10 dias habiles</p>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mt-6 space-y-3">
                  {[
                    { icon: Shield, text: "Pago 100% seguro" },
                    { icon: Package, text: "Empaque exclusivo MIRR" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-xs text-muted-foreground">
                      <item.icon className="h-4 w-4" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  )
}
