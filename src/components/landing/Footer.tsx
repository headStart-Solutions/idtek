"use client";

import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-yellow-400">
      <div className="container mx-auto px-6 py-12">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-400 border-4 border-yellow-400 flex items-center justify-center">
                <span className="text-base font-black text-black">ID</span>
              </div>
              <span className="text-xl font-black uppercase">IdTek</span>
            </Link>
            <p className="text-sm text-white/50 font-medium">
              Software Development, Done Right.
            </p>
            <a
              href="mailto:info@idtek.dev"
              className="text-sm text-yellow-400 font-bold mt-2 inline-block hover:underline"
            >
              info@idtek.dev
            </a>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-black uppercase tracking-wider text-sm text-yellow-400 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-black uppercase tracking-wider text-sm text-yellow-400 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-center pt-8 mt-8 border-t-4 border-white/10">
          <p className="text-sm text-white/40 font-bold uppercase tracking-wider">
            &copy; {new Date().getFullYear()} IdTek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
