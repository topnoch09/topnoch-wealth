import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Award, Target, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See the results our clients have achieved with Topnoch Enterprises' framework. Real numbers, real transformations.",
};

const stats = [
  { label: "Entrepreneurs Helped", value: "150+", icon: Users },
  { label: "Capital Acquired", value: "$2M+", icon: TrendingUp },
  { label: "Avg. Score Improvement", value: "120+ pts", icon: Target },
  { label: "Success Rate", value: "94%", icon: Award },
];

const caseStudies = [
  {
    title: "From Denied to $50K Business Credit",
    category: "Credit Repair + Funding",
    description:
      "An entrepreneur with a 580 credit score and multiple denials. Through our credit repair program and business structure setup, they raised their score to 720 and secured a $50K business line of credit within 6 months.",
    metrics: ["580 → 720 credit score", "$50K credit line", "6 months"],
  },
  {
    title: "Zero Structure to Fully Fundable",
    category: "Business Structure",
    description:
      "A service business owner operating as a sole proprietor with no business credit. We helped them form their LLC, establish business credit, and position for SBA funding — all within 90 days.",
    metrics: [
      "LLC + EIN established",
      "Business credit file built",
      "90-day turnaround",
    ],
  },
  {
    title: "Breaking the Predatory Lending Cycle",
    category: "Financial Strategy",
    description:
      "An e-commerce owner trapped in merchant cash advances at 40%+ APR. We restructured their debt, repaired credit, and transitioned them to a traditional business loan at 8% — saving thousands annually.",
    metrics: [
      "40% → 8% interest rate",
      "Thousands saved annually",
      "Debt restructured",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Our Results
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Proof That the{" "}
              <span className="text-gradient-gold">Framework Works</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Real client transformations. Real numbers. Here&apos;s what
              happens when entrepreneurs follow the Structure → Capital →
              Wealth framework.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon size={22} className="text-royal-dark" />
                  </div>
                  <p className="text-3xl font-bold text-dark mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-muted/50 text-xs mt-8">
            Results based on clients who completed the full program.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Client Transformations
            </h2>
            <p className="text-muted text-lg">
              Every journey is different. Here are some of the results
              our clients have achieved.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="bg-surface rounded-2xl border border-border p-8 md:p-10"
              >
                <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-semibold mb-4">
                  {study.category}
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">
                  {study.title}
                </h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {study.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-4 py-2 bg-royal/8 border border-royal/15 rounded-lg text-royal text-sm font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-royal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Take the free Fundability Assessment and see where you stand.
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
