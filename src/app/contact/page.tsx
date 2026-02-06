import { Navbar, Footer } from "@/components/landing";
import { EnvelopeSimple, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="bg-yellow-400 border-b-4 border-black py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
              Contact Us
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-black/80 max-w-2xl">
              Have a project in mind? Let&apos;s talk about how we can help you build it.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                Get in Touch
              </h2>
              <p className="text-black/60 font-medium leading-relaxed">
                Reach out to us about your project. We respond to every inquiry within 24 hours.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 border-4 border-black flex items-center justify-center flex-shrink-0">
                    <EnvelopeSimple size={24} weight="bold" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-tight text-sm">Email</h3>
                    <a
                      href="mailto:info@idtek.dev"
                      className="text-black/70 font-medium hover:text-black transition-colors"
                    >
                      info@idtek.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 border-4 border-black flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} weight="bold" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-tight text-sm">Location</h3>
                    <p className="text-black/70 font-medium">Remote-first, worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 border-4 border-black flex items-center justify-center flex-shrink-0">
                    <Clock size={24} weight="bold" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-tight text-sm">Response Time</h3>
                    <p className="text-black/70 font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="brutal-card-yellow">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-4">
                Start a Conversation
              </h3>
              <p className="text-black/70 font-medium leading-relaxed mb-6">
                Tell us about your project, timeline, and goals. We&apos;ll respond with a tailored approach and next steps.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:info@idtek.dev"
                  className="brutal-btn-dark w-full text-center"
                >
                  Email Us
                </a>
              </div>
              <p className="text-black/50 text-sm font-medium mt-6">
                Prefer a call? Mention it in your email and we&apos;ll schedule one.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
