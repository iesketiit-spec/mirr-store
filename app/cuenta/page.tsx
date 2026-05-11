"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Eye, EyeOff } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { MirrLogo } from "@/components/ui/mirr-logo"

export default function CuentaPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
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
              Mi Cuenta
            </span>
          </div>
        </div>
      </nav>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-8"
            >
              <MirrLogo className="h-10 w-auto" />
            </motion.div>

            {/* Toggle Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex mb-8"
            >
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 text-sm tracking-[0.15em] uppercase font-medium transition-colors border-b-2 ${
                  isLogin
                    ? "text-foreground border-accent"
                    : "text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                Iniciar Sesión
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 text-sm tracking-[0.15em] uppercase font-medium transition-colors border-b-2 ${
                  !isLogin
                    ? "text-foreground border-accent"
                    : "text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                Crear Cuenta
              </button>
            </motion.div>

            {/* Form */}
            <AnimatePresence mode="wait">
              <motion.form
                key={isLogin ? "login" : "register"}
                initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {!isLogin && (
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required={!isLogin}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-card border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                )}

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
                    Contraseña *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3.5 bg-card border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors pr-12"
                      placeholder="Tu contraseña"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Confirmar contraseña *
                    </label>
                    <input
                      type="password"
                      required={!isLogin}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3.5 bg-card border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="Confirma tu contraseña"
                    />
                  </div>
                )}

                {isLogin && (
                  <div className="flex justify-end">
                    <Link
                      href="/cuenta/recuperar"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors underline-animation"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
                >
                  {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
                </motion.button>

                {!isLogin && (
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    Al crear una cuenta, aceptas nuestros{" "}
                    <Link href="/terminos" className="text-foreground hover:text-accent underline">
                      términos y condiciones
                    </Link>{" "}
                    y nuestra{" "}
                    <Link href="/privacidad" className="text-foreground hover:text-accent underline">
                      política de privacidad
                    </Link>
                    .
                  </p>
                )}
              </motion.form>
            </AnimatePresence>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs tracking-wider uppercase text-muted-foreground">o</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-card border border-border text-foreground text-sm tracking-wider uppercase hover:bg-secondary/50 transition-colors">
                <GoogleIcon className="h-5 w-5" />
                Continuar con Google
              </button>
            </div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 p-6 bg-card border border-border"
            >
              <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
                Beneficios de crear cuenta
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-4 w-4 text-accent" />
                  Seguimiento de tus pedidos en tiempo real
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-4 w-4 text-accent" />
                  Acceso anticipado a nuevos lanzamientos
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-4 w-4 text-accent" />
                  Descuentos exclusivos para miembros
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-4 w-4 text-accent" />
                  Guarda tus direcciones favoritas
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="currentColor"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="currentColor"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="currentColor"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
