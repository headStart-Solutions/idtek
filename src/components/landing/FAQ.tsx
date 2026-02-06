"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer:
      "We work on everything from MVPs and greenfield applications to legacy system modernization and AI integrations. If it involves software, we can build it.",
  },
  {
    question: "How does engagement typically work?",
    answer:
      "We start with a discovery call to understand your needs. From there, we scope the project, agree on timelines, and get to work. We offer both fixed-price projects and time-and-materials engagements.",
  },
  {
    question: "What is your tech stack?",
    answer:
      "We specialize in TypeScript/React/Next.js on the frontend and Node.js/Python on the backend. We work with PostgreSQL, Redis, AWS, Vercel, and integrate AI services like OpenAI and Anthropic.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer maintenance contracts for ongoing support, bug fixes, feature development, and performance monitoring after your project goes live.",
  },
  {
    question: "How do you handle communication and updates?",
    answer:
      "We provide weekly demos, async updates via Slack or your preferred tool, and detailed progress reports. You always know where your project stands.",
  },
  {
    question: "What's your typical timeline for a project?",
    answer:
      "It depends on scope. An MVP can take 4-8 weeks. A full product build is typically 3-6 months. We set realistic timelines upfront and stick to them.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-white border-b-4 border-black">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-400 border-4 border-black text-xs font-bold uppercase tracking-widest mb-6">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
            Common{" "}
            <span className="relative inline-block">
              Questions
              <span className="absolute bottom-0 left-0 right-0 h-2 sm:h-3 bg-yellow-400 -z-10" />
            </span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-4 border-black bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-yellow-50 transition-colors"
              >
                <span className="text-base sm:text-lg font-bold uppercase tracking-tight pr-4">
                  {faq.question}
                </span>
                <CaretDown
                  size={24}
                  weight="bold"
                  className={`flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 border-t-4 border-black">
                  <p className="pt-4 text-black/60 font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
