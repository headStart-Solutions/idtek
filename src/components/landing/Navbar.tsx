"use client";

import Link from "next/link";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#goals", label: "Goals" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
      <div className="container mx-auto px-6">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-yellow-400 border-4 border-black flex items-center justify-center brutal-shadow group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform">
              <span className="text-2xl font-black">ID</span>
            </div>
            <span className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              IdTek
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2 text-sm font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="px-6 py-3 text-sm font-bold uppercase tracking-wider bg-yellow-400 border-4 border-black brutal-shadow brutal-hover"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-12 h-12 flex items-center justify-center border-4 border-black bg-yellow-400 brutal-shadow brutal-hover"
          >
            {isOpen ? (
              <X size={24} weight="bold" />
            ) : (
              <List size={24} weight="bold" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-4 border-black bg-white">
          <div className="container mx-auto px-6 py-6">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-4 text-lg font-bold uppercase tracking-wider hover:bg-yellow-400 border-4 border-black"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="block w-full text-center py-4 text-lg font-bold uppercase bg-yellow-400 border-4 border-black brutal-shadow"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
