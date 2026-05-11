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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <Hero />
      <BenefitsBar />
      <NewReleases />
      <CollectionBanner />
      <AboutSection />
      <LookbookSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
