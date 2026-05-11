"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, User, ShoppingBag, Menu, X, ChevronRight, ChevronDown, Globe, Star, Sparkles, ShoppingCart, Mail, BookOpen } from "lucide-react"
import { MirrLogo } from "@/components/ui/mirr-logo"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/tienda", label: "Tienda" },
  { 
    href: "/colecciones", 
    label: "Colecciones",
    hasDropdown: true,
    items: [
      { href: "/colecciones/gothic", label: "Gothic Collection" },
      { href: "/colecciones/medellin", label: "Medellín Collection" },
      { href: "/colecciones/archive", label: "Archive" },
    ]
  },
  { href: "/sobre-mirr", label: "Sobre MIRR" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/contacto", label: "Contacto" },
]

const mobileNavIcons = [
  { icon: Sparkles, label: "Inicio" },
  { icon: ShoppingCart, label: "Tienda" },
  { icon: Star, label: "Colecciones" },
  { icon: Sparkles, label: "Sobre MIRR" },
  { icon: BookOpen, label: "Lookbook" },
  { icon: Mail, label: "Contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [cartCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/30 py-3"
            : "bg-transparent py-4 lg:py-6"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <MirrLogo className="h-8 lg:h-10 w-auto" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="group relative flex items-center gap-1 text-sm tracking-[0.15em] uppercase text-foreground/80 hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                  
                  {/* Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 py-2 min-w-[200px] bg-card/95 backdrop-blur-xl border border-border rounded-sm"
                        >
                          {link.items?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2.5 text-sm tracking-wider uppercase text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4 lg:gap-6">
              <button className="hidden lg:block text-foreground/80 hover:text-foreground transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <Link href="/cuenta" className="hidden lg:block text-foreground/80 hover:text-foreground transition-colors">
                <User className="h-5 w-5" />
              </Link>
              <Link href="/carrito" className="relative text-foreground/80 hover:text-foreground transition-colors">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 h-4 w-4 flex items-center justify-center bg-accent text-[10px] font-bold text-accent-foreground rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden text-foreground/80 hover:text-foreground transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 w-full max-w-[320px] bg-background border-r border-border z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <MirrLogo className="h-8 w-auto" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground/80 hover:text-foreground"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex-1 overflow-y-auto py-4">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-6 py-4 text-lg tracking-[0.15em] uppercase text-foreground/80 hover:text-foreground hover:bg-secondary/30 transition-colors border-b border-border/30"
                    >
                      <div className="flex items-center gap-4">
                        {mobileNavIcons[index] && (
                          <mobileNavIcons[index].icon className="h-5 w-5 text-muted-foreground" />
                        )}
                        <span>{link.label}</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </Link>
                  ))}
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-border">
                  <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-sm mb-6">
                    <Globe className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-semibold tracking-wider uppercase text-accent">Envíos a todo el mundo</p>
                      <p className="text-xs text-muted-foreground">Rápidos y seguros.</p>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-6 mb-6">
                    {["instagram", "tiktok", "youtube", "x"].map((social) => (
                      <a
                        key={social}
                        href={`https://${social}.com/mirr`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-foreground transition-colors"
                      >
                        <SocialIcon name={social} />
                      </a>
                    ))}
                  </div>

                  <Link
                    href="/cuenta"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-sm tracking-[0.15em] uppercase text-foreground/80 hover:text-foreground border border-border rounded-sm"
                  >
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5" />
                      <span>Mi Cuenta</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "instagram":
      return (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    case "tiktok":
      return (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    case "youtube":
      return (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    case "x":
      return (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    default:
      return null
  }
}
