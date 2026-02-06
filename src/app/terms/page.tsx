import { Navbar, Footer } from "@/components/landing";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-4xl">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-black/60 font-medium text-sm sm:text-base">
              Last updated: February 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 sm:space-y-12">
            <section>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-4 border-b-4 border-black pb-2">
                Acceptance
              </h2>
              <p className="text-black/70 text-sm sm:text-base">
                By using the IdTek website, you agree to these terms. If you disagree with any part, you may not use the site.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-4 border-b-4 border-black pb-2">
                Services
              </h2>
              <p className="text-black/70 mb-4 text-sm sm:text-base">
                IdTek provides contract software development services. Specific project terms, deliverables, timelines, and pricing are defined in individual service agreements.
              </p>
              <ul className="space-y-3 text-black/70 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0" />
                  <span>All intellectual property created during an engagement is transferred to the client upon payment</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0" />
                  <span>We maintain confidentiality of all project details and source code</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0" />
                  <span>Service agreements take precedence over these general terms</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-4 border-b-4 border-black pb-2">
                Website Use
              </h2>
              <ul className="space-y-3 text-black/70 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0" />
                  <span>Use the website lawfully and respectfully</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0" />
                  <span>Do not attempt to compromise the security of the site</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0" />
                  <span>Content on this site is owned by IdTek unless otherwise noted</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-4 border-b-4 border-black pb-2">
                Limitations
              </h2>
              <p className="text-black/70 text-sm sm:text-base">
                The website is provided &quot;as is.&quot; We do not guarantee uninterrupted access. We are not liable for indirect, incidental, or consequential damages arising from use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-4 border-b-4 border-black pb-2">
                Changes
              </h2>
              <p className="text-black/70 text-sm sm:text-base">
                We may update these terms. Continued use after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-4 border-b-4 border-black pb-2">
                Contact
              </h2>
              <p className="text-black/70 text-sm sm:text-base">
                Questions? Email us at{" "}
                <a href="mailto:info@idtek.dev" className="font-bold text-black hover:underline">
                  info@idtek.dev
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
