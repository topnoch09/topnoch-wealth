import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/SocialIcons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Fundability Assessment", href: "/fundability" },
  { label: "Credit Repair", href: "/services#credit" },
  { label: "Business Structure", href: "/services#structure" },
  { label: "Funding Strategy", href: "/services#funding" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/topnochwealth/", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/the_mauricecoleman/", icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@mauricecoleman277", icon: TikTokIcon },
  { label: "YouTube", href: "https://www.youtube.com/@mauricecoleman1914", icon: YouTubeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-royal-dark text-white">
      {/* CTA Banner */}
      <div className="gradient-gold">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-royal-dark">
              Ready to Get Funded?
            </h3>
            <p className="text-royal-dark/80 mt-1">
              Take the free 2-minute Fundability Assessment and get your
              personalized roadmap.
            </p>
          </div>
          <Link
            href="/fundability"
            className="bg-royal-dark text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-navy transition-colors shrink-0"
          >
            Start Assessment →
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/logo-lion.png"
                alt="Topnoch Wealth Enterprises LLC"
                className="w-11 h-11 object-contain brightness-0 invert"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg text-white">Topnoch Wealth</span>
                <span className="text-white/60 text-xs font-semibold tracking-wide">
                  Enterprises LLC
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              Helping entrepreneurs become fundable, acquire capital, and build
              wealth — without predatory lending or guesswork.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold hover:text-royal-dark transition-all"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="mailto:info@topnochwealth.com"
                  className="hover:text-gold transition-colors"
                >
                  info@topnochwealth.com
                </a>
              </li>
              <li>
                <Link
                  href="/fundability"
                  className="hover:text-gold transition-colors"
                >
                  Free Fundability Assessment
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Topnoch Wealth Enterprises LLC. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
