"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const releases = [
  { slug: "hoodie-gothic", name: "Hoodie Gothic", price: 50, currency: "USD", image: "/hoodie-gothic-1.jpeg", sizes: ["S","M","L","XL","XXL"] },
  { slug: "pantalon-sudadera-medellin", name: "Pantalón Sudadera Medellín", price: 35, currency: "USD", image: "/pantalon-medellin.jpeg", sizes: ["S","M","L","XL"] },
  { slug: "tee-medellin", name: "Tee Medellín", price: 18, currency: "USD", image: "/tee-medellin.jpeg", sizes: ["S","M","L","XL"] },
  { slug: "conjunto-urban-medellin", name: "Conjunto Urban Medellín", price: 70, currency: "USD", image: "/conjunto-urban-medellin.jpeg", sizes: ["S","M","L","XL"] },
  { slug: "tee-sell-drugs-buy-art", name: "Tee Sell Drugs Buy Art", price: 15, currency: "USD", image: "/tee-sell-drugs.jpeg", sizes: ["S","M","L","XL"] },
  { slug: "conjunto-urban-gotico", name: "Conjunto Urban Gótico", price: 50, currency: "USD", image: "/hoodie-gothic-2.jpeg", sizes: ["S","M","L","XL"] },
]

export function NewReleases() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" })
  }

  return (
    <section className="py-12 lg:py-16">
      <div className="flex items-end justify-between px-6 lg:px-16 mb-6">
        <h2 className="font-display text-3xl lg:text-5xl tracking-wider flex items-center gap-3">
          Nuevos Lanzamientos <span className="text-red-600 text-2xl">✦</span>
        </h2>
        <div className="flex items-center gap-4">
          <Link href="/tienda" className="text-xs tracking-widest uppercase text-foreground/50 border-b border-foreground/20 pb-0.5 hover:text-foreground hover:border-foreground transition-all hidden lg:flex items-center gap-1">
            Ver todo →
          </Link>
          <div className="flex gap-2">
            <button onClick={() => scroll("left")} className="w-9 h-9 border border-border/30 flex items-center justify-center hover:border-foreground/60 transition-all">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => scroll("right")} className="w-9 h-9 border border-border/30 flex items-center justify-center hover:border-foreground/60 transition-all">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-px overflow-x-auto scrollbar-none snap-x snap-mandatory pl-6 lg:pl-16">
        {releases.map(p => (
          <div key={p.slug} className="flex-shrink-0 w-[200px] lg:w-[240px] snap-start bg-background group">
            <Link href={`/producto/${p.slug}`}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[9px] tracking-widest px-2 py-1 font-bold uppercase">Nuevo</span>
              </div>
              <div className="p-3">
                <p className="text-xs font-bold tracking-widest uppercase mb-1">{p.name}</p>
                <p className="text-xs text-foreground/50 mb-2">${p.price} {p.currency}</p>
                <div className="flex gap-1 flex-wrap">
                  {p.sizes.map(s => <span key={s} className="text-[9px] border border-border/30 px-1.5 py-0.5 text-foreground/40">{s}</span>)}
                </div>
              </div>
            </Link>
          </div>
        ))}
        <div className="w-6 lg:w-16 flex-shrink-0" />
      </div>
    </section>
  )
}
