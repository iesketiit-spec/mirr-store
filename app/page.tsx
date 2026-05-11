"use client"

import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { Hero } from "@/components/sections/hero"
import { BenefitsBar } from "@/components/sections/benefits-bar"
import { NewReleases } from "@/components/sections/new-releases"
import { CollectionBanner } from "@/components/sections/collection-banner"
import { AboutSection } from "@/components/sections/about-section"
import { LookbookSection } from "@/components/sections/lookbook-section"
import { LoadingScreen } from "@/components/ui/loading-screen"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { CursorFollower } from "@/components/ui/cursor-follower"
import { MarqueeText } from "@/components/ui/marquee"

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <CursorFollower />
      <ScrollProgress />
      <main className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <Hero />
        <BenefitsBar />
        
        {/* Marquee Section */}
        <section className="py-6 border-y border-border/30 bg-card/20">
          <MarqueeText 
            text="DISEÑO CON ACTITUD" 
            separator="✦"
            textClassName="text-sm tracking-[0.3em] uppercase text-foreground/60 font-sans"
          />
        </section>
        
        <NewReleases />
        <CollectionBanner />
        <AboutSection />
        <LookbookSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}
