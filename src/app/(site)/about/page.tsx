import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Heart,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Maurice L. Coleman — entrepreneur, financial strategist, and founder of Topnoch Enterprises LLC. Learn our mission and why we do what we do.",
};

const values = [
  {
    title: "No Predatory Lending",
    description:
      "We never recommend products or lenders that exploit entrepreneurs. Every recommendation is in your best interest.",
    icon: Heart,
  },
  {
    title: "Education First",
    description:
      "We don't just get you funded — we teach you how the system works so you can build wealth independently.",
    icon: Lightbulb,
  },
  {
    title: "Results-Driven",
    description:
      "Our framework is built on real outcomes. Structure first, capital second, wealth third — in that order, every time.",
    icon: Target,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              About Topnoch Enterprises
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Built by an Entrepreneur,{" "}
              <span className="text-gradient-gold">for Entrepreneurs</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Topnoch Enterprises was founded with one simple belief: every
              entrepreneur deserves access to fair, legitimate funding — and
              the knowledge to build real wealth with it.
            </p>
          </div>
        </div>
      </section>

      {/* Maurice's Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] max-w-md mx-auto w-full rounded-2xl overflow-hidden">
              <img
                src="/maurice-coleman.png"
                alt="Maurice L. Coleman"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                The Founder
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Maurice L. Coleman
              </h2>
              <div className="space-y-4 text-muted text-lg leading-relaxed">
                <p>
                  Maurice L. Coleman is an entrepreneur and financial strategist
                  who has dedicated his career to helping fellow entrepreneurs
                  navigate the complex world of business funding.
                </p>
                <p>
                  After experiencing firsthand the challenges of securing
                  capital — the rejections, the predatory offers, the
                  confusion — Maurice set out to build a system that would
                  give entrepreneurs a clear, honest path to funding.
                </p>
                <p>
                  That system became Topnoch Enterprises: a framework built on
                  three pillars — <strong>Structure, Capital, and Wealth</strong>.
                  No shortcuts. No predatory lending. Just a proven roadmap
                  that works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Our Mission
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Helping Entrepreneurs Build Real Wealth
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Our mission is to equip entrepreneurs with the knowledge,
            structure, and connections they need to become fundable, acquire
            capital, and build lasting generational wealth — without
            predatory lending or guesswork.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl border border-border p-8"
                >
                  <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center mb-5">
                    <Icon size={22} className="text-royal-dark" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-3">
                    {v.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted text-lg mb-8">
            Take the free Fundability Assessment and see exactly where you
            stand.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 gradient-gold text-royal-dark font-bold px-10 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Free Assessment <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
