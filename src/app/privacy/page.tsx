import { Navbar, Footer } from "@/components/landing";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-4xl">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-black/60 font-medium text-sm sm:text-base">
              Last updated: February 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 sm:space-y-12">
            <section>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-4 border-b-4 border-black pb-2">
                What We Collect
              </h2>
              <ul className="space-y-3 text-black/70 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0" />
                  <span>Contact information: name, email address, company name</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0" />
                  <span>Project details: requirements, timelines, specifications you share with us</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0" />
                  <span>Website usage: pages visited, time on site (via analytics)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-4 border-b-4 border-black pb-2">
                How We Use It
              </h2>
              <ul className="space-y-3 text-black/70 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0" />
                  <span>Respond to your inquiries and project requests</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0" />
                  <span>Provide software development services</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0" />
                  <span>Improve our website and services</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-4 border-b-4 border-black pb-2">
                Your Rights
              </h2>
              <ul className="space-y-3 text-black/70 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0" />
                  <span>Access your data anytime</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0" />
                  <span>Request data deletion</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0" />
                  <span>Opt out of non-essential communications</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-4 border-b-4 border-black pb-2">
                Data Sharing
              </h2>
              <p className="text-black/70 text-sm sm:text-base">
                We do not sell your data. We may share data with service providers who help us operate our business (e.g., hosting, email), but only as necessary to provide our services.
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
