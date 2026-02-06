"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

export function CTASection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-2 bg-yellow-400 border-4 border-yellow-400 text-black text-sm font-bold uppercase tracking-widest mb-8">
            Let&apos;s Talk
          </span>

          {/* Headline */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white mb-8">
            Ready to Build{" "}
            <span className="text-yellow-400">Something?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-white/60 font-medium mb-12 max-w-2xl mx-auto">
            Tell us about your project. We&apos;ll get back to you within 24 hours with a plan.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold uppercase tracking-wider bg-yellow-400 text-black border-4 border-yellow-400 brutal-hover"
              style={{ boxShadow: "4px 4px 0 0 #facc15" }}
            >
              Get in Touch
              <ArrowRight className="ml-3 h-6 w-6" weight="bold" />
            </Link>
            <a
              href="mailto:info@idtek.dev"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold uppercase tracking-wider bg-transparent text-white border-4 border-white hover:bg-white hover:text-black transition-colors"
            >
              info@idtek.dev
            </a>
          </div>

          {/* Note */}
          <p className="text-white/40 text-sm mt-10 font-bold uppercase tracking-wider">
            No sales pitch. Just a conversation about your project.
          </p>
        </div>
      </div>
    </section>
  );
}
