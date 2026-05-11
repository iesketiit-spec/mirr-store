"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { MirrLogo } from "@/components/ui/mirr-logo"

const footerLinks = {
  tienda: [
    { href: "/tienda", label: "Todos los productos" },
    { href: "/tienda?categoria=hoodies", label: "Hoodies" },
    { href: "/tienda?categoria=pants", label: "Pants" },
    { href: "/tienda?categoria=camisetas", label: "T-Shirts" },
    { href: "/tienda?categoria=accesorios", label: "Accesorios" },
  ],
  colecciones: [
    { href: "/colecciones/gothic", label: "Gothic Collection" },
    { href: "/colecciones/medellin", label: "Medellín Collection" },
    { href: "/colecciones/archive", label: "Archive" },
  ],
  ayuda: [
    { href: "/ayuda/preguntas-frecuentes", label: "Preguntas frecuentes" },
    { href: "/ayuda/envios", label: "Envíos" },
    { href: "/ayuda/cambios-devoluciones", label: "Cambios y devoluciones" },
    { href: "/ayuda/guia-tallas", label: "Guía de tallas" },
    { href: "/ayuda/terminos", label: "Términos y condiciones" },
  ],
  contacto: [
    { href: "mailto:info@mirr.co", label: "Email: info@mirr.co" },
    { href: "https://instagram.com/mirr", label: "Instagram: @mirr.co" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <MirrLogo className="h-10 w-auto mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              MIRR es más que una marca, es una forma de ver y vivir el mundo.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {["instagram", "tiktok", "youtube", "x"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com/mirr`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground mb-4">
              Tienda
            </h4>
            <ul className="space-y-3">
              {footerLinks.tienda.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground mb-4">
              Colecciones
            </h4>
            <ul className="space-y-3">
              {footerLinks.colecciones.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground mb-4">
              Ayuda
            </h4>
            <ul className="space-y-3">
              {footerLinks.ayuda.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground mb-4">
              Suscríbete
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Entérate de lanzamientos exclusivos y más.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full bg-input border border-border rounded-sm px-4 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} MIRR. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacidad" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Política de privacidad
              </Link>
              <Link href="/terminos" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Términos de servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "instagram":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    case "tiktok":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    case "youtube":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    case "x":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    default:
      return null
  }
}
