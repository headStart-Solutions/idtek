import {
  Navbar,
  Hero,
  Services,
  Goals,
  TechStack,
  WhyUs,
  FAQ,
  CTASection,
  Footer,
} from "@/components/landing";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Goals />
        <TechStack />
        <WhyUs />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
