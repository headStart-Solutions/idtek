"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-yellow-400 pt-32 pb-20 border-b-4 border-black overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 brutal-grid opacity-[0.03]" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="brutal-animate-up opacity-0 mb-8 sm:mb-12">
            <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-black text-yellow-400 text-xs sm:text-sm font-bold uppercase tracking-widest brutal-mono">
              TypeScript. AI. Automation. Everything Software.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="brutal-animate-up opacity-0 delay-100">
            <span className="block text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] font-black uppercase leading-[0.85] tracking-tighter text-black">
              Software
            </span>
            <span className="block text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] font-black uppercase leading-[0.85] tracking-tighter text-black">
              Development,
            </span>
            <span className="block text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] font-black uppercase leading-[0.85] tracking-tighter text-black">
              <span className="relative inline-block">
                Done Right
                <span className="absolute bottom-1 sm:bottom-2 md:bottom-4 left-0 right-0 h-2 sm:h-4 md:h-6 bg-white -z-10" />
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="brutal-animate-up opacity-0 delay-200 mt-8 sm:mt-12 max-w-2xl text-lg sm:text-xl md:text-2xl text-black font-medium leading-relaxed">
            We build production-grade software with modern tools.
            <span className="font-bold"> From idea to deployment, we handle everything.</span>
          </p>

          {/* CTAs */}
          <div className="brutal-animate-up opacity-0 delay-300 mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-xl font-bold uppercase tracking-wider bg-black text-yellow-400 border-4 border-black brutal-shadow-lg brutal-hover"
            >
              Start a Project
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" weight="bold" />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-xl font-bold uppercase tracking-wider bg-white text-black border-4 border-black brutal-shadow-lg brutal-hover"
            >
              Our Services
            </Link>
          </div>

          {/* Stats Row */}
          <div className="brutal-animate-up opacity-0 delay-400 mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:gap-8 md:gap-16">
            <div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-black text-black">10+</div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black/70 mt-1">Years Exp.</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-black text-black">50+</div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black/70 mt-1">Projects</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-black text-black">100%</div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black/70 mt-1">On Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
