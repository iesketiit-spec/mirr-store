"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, X, ChevronLeft, ArrowRight } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

const lookbookImages = [
  {
    id: "1",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1b58c61b-559d-4f87-b870-55a051b9d511.jpeg",
    alt: "MIRR Lookbook - Hero Shot",
    collection: "Gothic Collection",
    aspect: "landscape",
  },
  {
    id: "2",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d113971e-e45b-40e9-a960-80b91af0a30f.jpeg",
    alt: "MIRR Lookbook - Medellín",
    collection: "Medellín Collection",
    aspect: "portrait",
  },
  {
    id: "3",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9944d68f-de01-4265-b9a5-ae70ffbb2a7c.jpeg",
    alt: "MIRR Lookbook - About",
    collection: "Gothic Collection",
    aspect: "portrait",
  },
  {
    id: "4",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9cfd7b20-15f6-4dd6-8c4d-0d20ff5cc48d.jpeg",
    alt: "MIRR Lookbook - Street",
    collection: "Gothic Collection",
    aspect: "landscape",
  },
  {
    id: "5",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bf809cf9-4aba-470f-b41b-a4145a2d8538.jpeg",
    alt: "MIRR Lookbook - Products",
    collection: "Medellín Collection",
    aspect: "portrait",
  },
  {
    id: "6",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f075a691-5216-446f-90b4-e0295d6df6c5.jpeg",
    alt: "MIRR Lookbook - Hoodie Detail",
    collection: "Gothic Collection",
    aspect: "portrait",
  },
]

export default function LookbookPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % lookbookImages.length : null))
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + lookbookImages.length) % lookbookImages.length : null))

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
              Lookbook
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
              MIRR 2026
            </p>
            <h1 className="font-sans text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              LOOKBOOK
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              Explora nuestra visión del streetwear. Cada imagen cuenta una historia, 
              cada pieza refleja nuestra actitud.
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {lookbookImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`group cursor-pointer ${
                  image.aspect === "landscape" ? "md:col-span-2 lg:col-span-2" : ""
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className={`relative overflow-hidden ${
                  image.aspect === "landscape" ? "aspect-[16/9]" : "aspect-[3/4]"
                }`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-accent text-xs tracking-[0.2em] uppercase mb-1">
                        {image.collection}
                      </p>
                      <p className="text-foreground text-sm font-medium">
                        Ver imagen
                      </p>
                    </div>
                  </div>
                  {/* Border Animation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 border border-accent/50 pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/tienda">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-sans text-sm tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
              >
                Comprar la colección
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 text-foreground/60 hover:text-foreground transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 lg:left-8 p-3 text-foreground/60 hover:text-foreground transition-colors z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 lg:right-8 p-3 text-foreground/60 hover:text-foreground transition-colors z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lookbookImages[selectedImage].src}
                alt={lookbookImages[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/60 text-sm tracking-wider">
              {selectedImage + 1} / {lookbookImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
