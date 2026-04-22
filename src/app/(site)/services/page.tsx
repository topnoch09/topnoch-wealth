import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Building2,
  TrendingUp,
  Calendar,
  BookOpen,
  Crown,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Credit repair, business structure setup, funding strategy, and 1-on-1 consultations. No matter where you are, we have a solution.",
};

const services = [
  {
    id: "credit",
    title: "Credit Repair & Building",
    subtitle: "Fix what's holding you back",
    description:
      "Your credit score is the gatekeeper to every funding opportunity. We help you clean it up, build it out, and position yourself as fundable.",
    icon: Shield,
    features: [
      "Credit score analysis and strategy",
      "Derogatory mark removal tactics",
      "Tradeline building strategies",
      "Score optimization for funding",
      "Ongoing monitoring guidance",
    ],
    cta: "Get the Credit Repair Guide",
    href: "#products",
  },
  {
    id: "structure",
    title: "Business Structure Setup",
    subtitle: "Build the right foundation",
    description:
      "Banks won't fund what they can't verify. We walk you through setting up the proper business structure that lenders actually look for.",
    icon: Building2,
    features: [
      "LLC formation guidance",
      "EIN registration walkthrough",
      "Business bank account setup",
      "Business credit file establishment",
      "Compliance and documentation",
    ],
    cta: "Get the Business Structure Blueprint",
    href: "#products",
  },
  {
    id: "funding",
    title: "Funding Strategy & Acquisition",
    subtitle: "Get the capital you deserve",
    description:
      "Once your structure and credit are solid, we connect you with the right funding sources — no predatory lending, no guesswork.",
    icon: TrendingUp,
    features: [
      "Personalized funding roadmap",
      "Lender matching based on your profile",
      "Application preparation & positioning",
      "SBA loan guidance",
      "Business line of credit strategies",
    ],
    cta: "Book a Strategy Call",
    href: "/contact",
  },
];

const products = [
  {
    title: "The Fundability Reset",
    subtitle: "How to Fix Personal Credit to Unlock Business Capital",
    description:
      "Step-by-step system to clean up your personal credit, remove derogatory marks, and position yourself to qualify for real business funding.",
    price: "$27",
    value: "$47",
    icon: Shield,
  },
  {
    title: "The Fundable Business Blueprint",
    subtitle: "Build a Business Structure That Lenders Actually Fund",
    description:
      "Complete guide to forming your LLC, building business credit, and creating the structure lenders look for before they approve funding.",
    price: "$27",
    value: "$47",
    icon: Building2,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Everything You Need to{" "}
              <span className="text-gradient-gold">Get Funded</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              From credit repair to capital acquisition — no matter where you
              are on your journey, we have a proven path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "lg:direction-rtl" : ""
                }`}
                style={isEven ? { direction: "rtl" } : undefined}
              >
                <div style={isEven ? { direction: "ltr" } : undefined}>
                  <div className="w-14 h-14 gradient-gold rounded-xl flex items-center justify-center mb-5">
                    <Icon size={26} className="text-royal-dark" />
                  </div>
                  <p className="text-gold font-semibold text-sm mb-2">
                    {service.subtitle}
                  </p>
                  <h2 className="text-3xl font-bold text-dark mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-gold shrink-0"
                        />
                        <span className="text-dark/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 gradient-gold text-royal-dark font-bold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {service.cta} <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Visual placeholder */}
                <div
                  className="aspect-video rounded-2xl bg-surface border border-border flex items-center justify-center"
                  style={isEven ? { direction: "ltr" } : undefined}
                >
                  <div className="text-center">
                    <Icon size={48} className="text-border mx-auto mb-3" />
                    <p className="text-muted/50 text-sm">
                      Service illustration
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Digital Products */}
      <section id="products" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Digital Products
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Guides & Blueprints
            </h2>
            <p className="text-muted text-lg">
              Self-paced resources to start building your fundability today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.title}
                  className="bg-white rounded-2xl border border-border p-8 hover:shadow-lg hover:shadow-royal/5 transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-royal/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={24} className="text-royal" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-1">
                    {product.title}
                  </h3>
                  <p className="text-gold text-sm font-medium mb-3">
                    {product.subtitle}
                  </p>
                  <p className="text-muted leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl font-bold text-dark">
                      {product.price}
                    </span>
                    <span className="text-muted line-through text-sm">
                      {product.value}
                    </span>
                  </div>
                  <button className="w-full gradient-gold text-royal-dark font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98]">
                    Get Instant Access
                  </button>
                </div>
              );
            })}
          </div>

          {/* Bundle */}
          <div className="mt-10 max-w-4xl mx-auto bg-white rounded-2xl border-2 border-gold/30 p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 gradient-gold rounded-xl flex items-center justify-center shrink-0">
              <Crown size={28} className="text-royal-dark" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-dark mb-1">
                The Complete Bundle
              </h3>
              <p className="text-muted">
                Get both guides and save. Everything you need from credit
                repair to business funding — in one package.
              </p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-2xl font-bold text-dark">$47</span>
                <span className="text-muted line-through text-sm">$94</span>
                <span className="text-green-600 text-sm font-semibold">
                  Save 50%
                </span>
              </div>
            </div>
            <button className="gradient-gold text-royal-dark font-bold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0">
              Get the Bundle
            </button>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-24 gradient-royal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Calendar size={28} className="text-royal-dark" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prefer 1-on-1 Guidance?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Book a free 30-minute strategy call with Maurice. We&apos;ll assess
            your situation, identify your gaps, and build a personalized
            action plan.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 gradient-gold text-royal-dark font-bold px-10 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            Book Free Strategy Call <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
