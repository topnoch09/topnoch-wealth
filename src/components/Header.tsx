"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Topnoch Wealth Enterprises LLC"
            width={44}
            height={44}
            className="w-11 h-11 object-contain drop-shadow-md"
          />
          <div className="flex flex-col leading-tight">
            <span
              className={`font-bold text-lg tracking-tight transition-colors ${
                scrolled ? "text-royal-dark" : "text-white"
              }`}
            >
              Topnoch Wealth
            </span>
            <span
              className={`text-xs font-semibold tracking-wide transition-colors ${
                scrolled ? "text-royal-dark/60" : "text-gold"
              }`}
            >
              Enterprises LLC
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? "text-dark/80" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/fundability"
            className="gradient-gold text-royal-dark font-semibold px-6 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-gold/30 hover:scale-105 active:scale-95"
          >
            Free Assessment
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-dark hover:bg-surface" : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-border shadow-xl">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-dark font-medium py-3 px-4 rounded-lg hover:bg-surface hover:text-royal transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/fundability"
              onClick={() => setIsOpen(false)}
              className="block gradient-gold text-royal-dark font-semibold px-6 py-3.5 rounded-lg text-center mt-4 hover:shadow-lg"
            >
              Take Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
