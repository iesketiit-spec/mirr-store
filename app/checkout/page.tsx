"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Lock, Globe, Shield, Package, RefreshCw, Phone, CreditCard, Building, Check } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { MirrLogo } from "@/components/ui/mirr-logo"

const checkoutSteps = [
  { id: 1, name: "Carrito" },
  { id: 2, name: "Envío" },
  { id: 3, name: "Pago" },
  { id: 4, name: "Confirmación" },
]

const orderItems = [
  {
    id: "1",
    name: "Hoodie Gothic",
    price: 175000,
    image: "/hoodie-gothic-1.jpeg",
    color: "Negro",
    size: "L",
    quantity: 1,
  },
  {
    id: "2",
    name: "Pants Gothic",
    price: 165000,
    image: "/hoodie-gothic-1.jpeg",
    color: "Negro",
    size: "L",
    quantity: 1,
  },
  {
    id: "3",
    name: "Cap Gothic",
    price: 80000,
    image: "/hoodie-gothic-1.jpeg",
    color: "Negro",
    size: "Única",
    quantity: 1,
  },
]

const paymentMethods = [
  { id: "card", name: "Tarjeta de crédito / débito", icon: CreditCard },
  { id: "paypal", name: "PayPal", icon: () => <span className="text-sm font-bold">P</span> },
  { id: "transfer", name: "Transferencia bancaria", icon: Building },
]

export default function CheckoutPage() {
  const [currentStep] = useState(3) // Payment step
  const [paymentMethod, setPaymentMethod] = useState("card")
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

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

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
                  Completa tus datos y elige tu método de pago preferido.
                </p>

                <form className="space-y-8">
                  {/* Contact Info */}
                  <div>
                    <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-foreground mb-4">
                      1. Datos de contacto
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs text-muted-foreground mb-2">
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ejemplo@correo.com"
                          className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-muted-foreground mb-2">
                          Teléfono (opcional)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+57 300 123 4567"
                          className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-foreground mb-4">
                      2. Dirección de envío
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs text-muted-foreground mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Juan Pérez"
                          className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-muted-foreground mb-2">
                          Dirección *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Calle 123 #45-67"
                          className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs text-muted-foreground mb-2">
                            País *
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-input border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-accent appearance-none"
                          >
                            <option value="Colombia">Colombia</option>
                            <option value="México">México</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Chile">Chile</option>
                            <option value="España">España</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-muted-foreground mb-2">
                            Departamento / Estado *
                          </label>
                          <select
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-input border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-accent appearance-none"
                          >
                            <option value="">Seleccionar</option>
                            <option value="Antioquia">Antioquia</option>
                            <option value="Cundinamarca">Cundinamarca</option>
                            <option value="Valle del Cauca">Valle del Cauca</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-muted-foreground mb-2">
                            Ciudad *
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Medellín"
                            className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                          />
                        </div>
                      </div>
                      <div className="w-1/3">
                        <label className="block text-xs text-muted-foreground mb-2">
                          Código postal *
                        </label>
                        <input
                          type="text"
                          name="zip"
                          value={formData.zip}
                          onChange={handleInputChange}
                          placeholder="050001"
                          className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="saveAddress"
                          checked={formData.saveAddress}
                          onChange={handleInputChange}
                          className="w-5 h-5 border border-border bg-input accent-accent"
                        />
                        <span className="text-sm text-muted-foreground">
                          Guardar esta dirección para futuras compras
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-foreground mb-2">
                      3. Método de pago
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Selecciona tu método de pago preferido.
                    </p>

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
                            Número de tarjeta *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              placeholder="1234 5678 9012 3456"
                              className="w-full px-4 py-3 pr-24 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                              {["VISA", "MC", "AMEX"].map((card) => (
                                <div
                                  key={card}
                                  className="w-8 h-5 bg-secondary rounded flex items-center justify-center text-[8px] text-muted-foreground"
                                >
                                  {card}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-1">
                            <label className="block text-xs text-muted-foreground mb-2">
                              Nombre en la tarjeta *
                            </label>
                            <input
                              type="text"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleInputChange}
                              placeholder="Juan Pérez"
                              className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-muted-foreground mb-2">
                              Fecha de vencimiento *
                            </label>
                            <input
                              type="text"
                              name="cardExpiry"
                              value={formData.cardExpiry}
                              onChange={handleInputChange}
                              placeholder="MM / AA"
                              className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-muted-foreground mb-2">
                              CVV *
                            </label>
                            <input
                              type="text"
                              name="cardCvv"
                              value={formData.cardCvv}
                              onChange={handleInputChange}
                              placeholder="123"
                              className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                            />
                          </div>
                        </div>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="saveCard"
                            checked={formData.saveCard}
                            onChange={handleInputChange}
                            className="w-5 h-5 border border-border bg-input accent-accent"
                          />
                          <span className="text-sm text-muted-foreground">
                            Guardar tarjeta para futuras compras
                          </span>
                        </label>
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
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-4 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
                    >
                      <Lock className="h-4 w-4" />
                      Pagar ${formatPrice(subtotal)} COP
                    </motion.button>
                  </div>

                  <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Lock className="h-3 w-3" />
                    Tus datos están protegidos con encriptación SSL
                  </p>
                </form>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="lg:sticky lg:top-8 p-6 bg-card border border-border"
              >
                <h2 className="font-sans text-lg font-bold tracking-[0.15em] uppercase text-foreground mb-6">
                  Resumen del pedido
                </h2>

                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-16 h-16 bg-secondary flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">
                          {item.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {item.color} - {item.size}
                        </p>
                        <p className="text-sm text-foreground mt-1">
                          ${formatPrice(item.price)} COP
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        x{item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-3 py-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${formatPrice(subtotal)} COP</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Envío</span>
                    <span className="text-accent font-semibold">GRATIS</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Impuestos</span>
                    <span className="text-foreground">Incluidos</span>
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

                {/* Shipping Info */}
                <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-sm mt-6">
                  <Globe className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-sm font-semibold tracking-wider uppercase text-accent">
                      Envíos a todo el mundo
                    </p>
                    <p className="text-xs text-muted-foreground">Rápidos y seguros.</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mt-6 space-y-4">
                  {[
                    { icon: Shield, title: "Pagos seguros", description: "Paga como prefieras." },
                    { icon: Package, title: "Empaque exclusivo", description: "Tu pedido, nuestra esencia." },
                    { icon: RefreshCw, title: "Cambios y devoluciones", description: "Fácil y sin complicaciones." },
                    { icon: Phone, title: "Atención al cliente", description: "Estamos para ayudarte." },
                  ].map((benefit) => (
                    <div key={benefit.title} className="flex items-center gap-3">
                      <benefit.icon className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-semibold tracking-wider uppercase text-foreground">
                          {benefit.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <MirrLogo className="h-8 w-auto" />

            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
              <div>
                <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground mb-2">
                  Tienda
                </h4>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <Link href="/tienda" className="hover:text-foreground transition-colors">Todos los productos</Link>
                  <Link href="/tienda?categoria=hoodies" className="hover:text-foreground transition-colors">Hoodies</Link>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground mb-2">
                  Colecciones
                </h4>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <Link href="/colecciones/gothic" className="hover:text-foreground transition-colors">Gothic Collection</Link>
                  <Link href="/colecciones/medellin" className="hover:text-foreground transition-colors">Medellín Collection</Link>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground mb-2">
                  Ayuda
                </h4>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <Link href="/ayuda/envios" className="hover:text-foreground transition-colors">Envíos</Link>
                  <Link href="/ayuda/cambios" className="hover:text-foreground transition-colors">Cambios</Link>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground mb-2">
                  Contacto
                </h4>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>Email: info@mirr.co</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              {["instagram", "tiktok", "youtube", "x"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com/mirr`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-[10px] uppercase">
                    {social[0]}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            © {new Date().getFullYear()} MIRR. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  )
}
