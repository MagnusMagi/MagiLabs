import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ProductShowcase } from '@/components/product-showcase'
import { AboutSection } from '@/components/about-section'
import { TechStack } from '@/components/tech-stack'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductShowcase />
      <AboutSection />
      <TechStack />
      <ContactSection />
      <Footer />
    </main>
  )
}
