import { Navbar, Footer } from "@/components/landing";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="bg-yellow-400 border-b-4 border-black py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
              About IdTek
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-black/80 max-w-2xl">
              We&apos;re a contract software development company that builds production-grade software with modern tools.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-4xl">
          <div className="space-y-12 sm:space-y-16">
            {/* Mission */}
            <section>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-4 border-b-4 border-black pb-2">
                Our Mission
              </h2>
              <p className="text-black/70 text-base sm:text-lg leading-relaxed">
                We exist to help companies ship better software, faster. Too many teams struggle with unreliable contractors, missed deadlines, and code that needs to be rewritten. We do things differently — every project gets senior engineers, clear communication, and production-quality code from day one.
              </p>
            </section>

            {/* Approach */}
            <section>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-4 border-b-4 border-black pb-2">
                Our Approach
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="brutal-card">
                  <h3 className="font-black uppercase tracking-tight mb-2">Modern Stack</h3>
                  <p className="text-black/60 text-sm">
                    TypeScript, React, Next.js, Node.js, Python — we use the tools that let us move fast without sacrificing quality.
                  </p>
                </div>
                <div className="brutal-card">
                  <h3 className="font-black uppercase tracking-tight mb-2">AI-Enhanced</h3>
                  <p className="text-black/60 text-sm">
                    We leverage AI in our development workflow to ship faster and build smarter features for your products.
                  </p>
                </div>
                <div className="brutal-card">
                  <h3 className="font-black uppercase tracking-tight mb-2">Transparent Process</h3>
                  <p className="text-black/60 text-sm">
                    Weekly demos, async updates, and open communication. You always know exactly where your project stands.
                  </p>
                </div>
                <div className="brutal-card">
                  <h3 className="font-black uppercase tracking-tight mb-2">Ship It Right</h3>
                  <p className="text-black/60 text-sm">
                    No prototypes that need rewriting. We deliver production-ready code with tests, documentation, and clean architecture.
                  </p>
                </div>
              </div>
            </section>

            {/* Team Focus */}
            <section>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-4 border-b-4 border-black pb-2">
                Our Team
              </h2>
              <p className="text-black/70 text-base sm:text-lg leading-relaxed">
                We&apos;re a focused team of senior engineers with backgrounds in startups, enterprises, and open source. Every member has 5+ years of production experience and a track record of shipping successful products. We don&apos;t do junior work — your project gets experienced hands from the start.
              </p>
            </section>

            {/* CTA */}
            <section className="brutal-card-yellow text-center py-10">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
                Want to Work Together?
              </h2>
              <p className="text-black/70 mb-6 max-w-lg mx-auto">
                We&apos;d love to hear about your project. Drop us a line and we&apos;ll get back to you within 24 hours.
              </p>
              <a
                href="/contact"
                className="brutal-btn-primary"
              >
                Get in Touch
              </a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
