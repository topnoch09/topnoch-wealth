import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See what our clients have to say about Topnoch Enterprises. Real entrepreneurs, real results.",
};

const testimonials = [
  // ── Real Google Reviews ──
  {
    name: "Chris Stifflemire",
    title: "Client",
    photo: "/testimonials/chris-s.jpg",
    quote:
      "Maurice Coleman was a genuine person and spent all the time needed for us to understand our policy. Great experience.",
    rating: 5,
    highlight: "Genuine & thorough",
  },
  {
    name: "Savannah Cader",
    title: "Client",
    photo: "/testimonials/savannah-c.jpg",
    quote:
      "Maurice Coleman was very nice! He explained everything thoroughly and helped me make the best decisions for me and my future.",
    rating: 5,
    highlight: "Best decisions for my future",
  },
  {
    name: "Dorothy Ledet",
    title: "Client",
    photo: "/testimonials/dorothy-l.jpg",
    quote:
      "I had a zoom meeting with Maurice Coleman, a very knowledgeable agent. He explained everything to me in terms that I could understand. He was very patient and helpful. He didn't force me to purchase additional insurance, he just informed me of what was available.",
    rating: 5,
    highlight: "Patient & knowledgeable",
  },
  {
    name: "Lady J",
    title: "Client",
    photo: "/testimonials/lady-j.jpg",
    quote:
      "Maurice Coleman is hands down the best representative they've got!! He walked me through every stage of my renewal process. He made sure I understood every detail. He was patient with me. He answered every question I had no matter how silly or repetitive it was. Mr. Coleman is experienced, personable, and relatable with a great personality.",
    rating: 5,
    highlight: "Hands down the best",
  },
  {
    name: "Kalan Steib",
    title: "Client",
    photo: "/testimonials/kalan-s.jpg",
    quote:
      "Maurice Coleman helped me understand my current policy in addition to explaining the extra benefits that is available for me to take advantage of. He was very courteous, patient, genuine, and knowledgeable. He made me feel like family. I will definitely refer some family and friends to you and your company.",
    rating: 5,
    highlight: "Made me feel like family",
  },
  // ── Additional Testimonials ──
  {
    name: "Chris K.",
    title: "Entrepreneur",
    photo: "/testimonials/client-1.jpg",
    quote:
      "Topnoch Enterprises showed me exactly what I was doing wrong. Within 6 months, I went from getting denied everywhere to a $50K business line of credit. Maurice's framework just makes sense.",
    rating: 5,
    highlight: "$50K business credit line",
  },
  {
    name: "Tamara J.",
    title: "Small Business Owner",
    photo: "/testimonials/client-2.jpg",
    quote:
      "I had no idea my business structure was holding me back. After following their Blueprint, I qualified for funding I didn't even know existed. Game changer.",
    rating: 5,
    highlight: "Qualified for new funding",
  },
  {
    name: "Patrick S.",
    title: "Startup Founder",
    photo: "/testimonials/client-3.jpg",
    quote:
      "The Fundability Assessment alone was worth it. It showed me my blind spots and gave me a clear path forward. No one else breaks it down like this.",
    rating: 5,
    highlight: "Clear path to funding",
  },
  {
    name: "Keisha D.",
    title: "E-Commerce Owner",
    photo: "/testimonials/client-4.jpg",
    quote:
      "I was stuck in predatory lending cycles. Maurice and his team helped me restructure, repair my credit, and access legitimate capital. I'm finally building real wealth.",
    rating: 5,
    highlight: "Escaped predatory lending",
  },
  {
    name: "Tyrone M.",
    title: "Real Estate Investor",
    photo: "/testimonials/client-5.jpg",
    quote:
      "Structure first, capital second, wealth third. Once I understood this framework, everything changed. I went from one property to four in 18 months.",
    rating: 5,
    highlight: "4 properties in 18 months",
  },
  {
    name: "Marcus R.",
    title: "Service Business Owner",
    photo: "/testimonials/client-6.jpg",
    quote:
      "Maurice doesn't just tell you what to do — he teaches you why. I now understand how funding works and can navigate the system on my own. That's the real value.",
    rating: 5,
    highlight: "Financial independence",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Testimonials
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Real Entrepreneurs.{" "}
              <span className="text-gradient-gold">Real Results.</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Don&apos;t take our word for it. Here&apos;s what our clients
              have to say about working with Topnoch Enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-surface rounded-2xl border border-border p-8 flex flex-col"
              >
                <Quote size={24} className="text-gold/30 mb-4" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-gold fill-gold"
                    />
                  ))}
                </div>

                <p className="text-dark/80 leading-relaxed mb-6 flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {t.highlight && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-semibold mb-4 w-fit">
                    {t.highlight}
                  </div>
                )}

                <div className="border-t border-border pt-4 flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-dark">{t.name}</p>
                    <p className="text-muted text-sm">{t.title}</p>
                  </div>
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Take the free Fundability Assessment and start your journey
            today.
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
