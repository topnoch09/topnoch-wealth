import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  TrendingUp,
  Crown,
  Zap,
  Users,
  Star,
  BookOpen,
  Calendar,
} from "lucide-react";

/* ──────── Framework Steps ──────── */

const framework = [
  {
    step: "01",
    title: "Structure",
    description:
      "Build the right foundation — LLC, EIN, business bank account, and business credit profile. Without structure, lenders won't even look at you.",
    icon: Shield,
    color: "bg-royal-light/15 text-royal-light border-royal-light/25",
  },
  {
    step: "02",
    title: "Capital",
    description:
      "Once your structure is solid, we connect you with the right funding — business lines of credit, SBA loans, and capital that doesn't require predatory terms.",
    icon: TrendingUp,
    color: "bg-gold/15 text-gold border-gold/25",
  },
  {
    step: "03",
    title: "Wealth",
    description:
      "Capital alone doesn't build wealth. We teach you how to leverage, invest, and compound — turning your funding into lasting generational wealth.",
    icon: Crown,
    color: "bg-green-500/15 text-green-400 border-green-500/25",
  },
];

/* ──────── Services ──────── */

const services = [
  {
    title: "Credit Repair & Building",
    description:
      "Get your credit score above 700 with our proven system. Remove derogatory marks, build tradelines, and create a fundable profile.",
    icon: Shield,
    href: "/services#credit",
  },
  {
    title: "Business Structure Setup",
    description:
      "LLC formation, EIN registration, business bank accounts, and everything you need to look legitimate to lenders.",
    icon: BookOpen,
    href: "/services#structure",
  },
  {
    title: "Funding Strategy",
    description:
      "Personalized funding roadmap with direct lender introductions. We match you with the right capital for your business stage.",
    icon: TrendingUp,
    href: "/services#funding",
  },
  {
    title: "1-on-1 Consultation",
    description:
      "30-minute strategy call to assess your situation, identify gaps, and create an action plan tailored to your goals.",
    icon: Calendar,
    href: "/strategy",
  },
];

/* ──────── Testimonials ──────── */

const testimonials = [
  {
    name: "Chris Stifflemire",
    title: "Client",
    photo: "/testimonials/chris-s.jpg",
    quote:
      "Maurice Coleman was a genuine person and spent all the time needed for us to understand our policy. Great experience.",
    rating: 5,
  },
  {
    name: "Lady J",
    title: "Client",
    photo: "/testimonials/lady-j.jpg",
    quote:
      "Maurice Coleman is hands down the best representative they've got!! He walked me through every stage of my renewal process. He made sure I understood every detail. Mr. Coleman is experienced, personable, and relatable with a great personality.",
    rating: 5,
  },
  {
    name: "Marcus R.",
    title: "Service Business Owner",
    photo: "/testimonials/client-6.jpg",
    quote:
      "Maurice doesn't just tell you what to do — he teaches you why. I now understand how funding works and can navigate the system on my own. That's the real value.",
    rating: 5,
  },
];

/* ──────── Page ──────── */

export default function HomePage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative gradient-hero min-h-screen flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -left-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-40 w-96 h-96 bg-royal-light/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 border border-gold/25 mb-6">
              <Zap size={14} className="text-gold" />
              <span className="text-gold text-sm font-medium">
                Structure · Capital · Wealth
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Stop Guessing.{" "}
              <span className="text-gradient-gold">Start Getting Funded.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
              We help entrepreneurs become fundable, acquire real capital, and
              build lasting wealth — without predatory lending or guesswork.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 gradient-gold text-royal-dark font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                Take Free Assessment
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 glass text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/15 transition-all"
              >
                View Services
              </Link>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center gap-6 mt-10 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>Entrepreneurs Served</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} />
                <span>No Predatory Lending</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>Proven Framework</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ INTRO VIDEO ══════ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              A Word From Maurice
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Watch How We Help You Get Funded
            </h2>
            <p className="text-muted text-lg">
              60 seconds with Maurice — what we do, who we help, and how we get
              you to capital the right way.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-royal/20 border border-border bg-royal-dark mx-auto max-w-[360px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="auto"
              className="w-full h-auto block max-h-[640px] object-contain"
              poster="/maurice-coleman.png"
            >
              <source src="/videos/maurice-intro.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      </section>

      {/* ══════ THE FRAMEWORK ══════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Our Proven Framework
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Three Steps to Real Wealth
            </h2>
            <p className="text-muted text-lg">
              Most entrepreneurs skip straight to chasing capital and end up in
              predatory debt. We do it the right way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {framework.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative group bg-white rounded-2xl border border-border p-8 hover:shadow-xl hover:shadow-royal/5 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color}`}
                    >
                      <Icon size={22} />
                    </div>
                    <span className="text-5xl font-bold text-surface group-hover:text-border transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ CTA BANNER ══════ */}
      <section className="gradient-royal py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Where You Stand?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Take our free 2-minute Fundability Assessment and get a personalized
            score with a clear roadmap to capital.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 gradient-gold text-royal-dark font-bold px-10 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            Start My Free Assessment
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ══════ SERVICES ══════ */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              How We Help
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Services Built Around You
            </h2>
            <p className="text-muted text-lg">
              No matter where you are on your journey, we have a solution to
              move you forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white rounded-2xl border border-border p-8 hover:shadow-xl hover:shadow-royal/5 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center mb-5">
                    <Icon size={22} className="text-royal-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-royal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-gold font-semibold mt-4 text-sm group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Real Results
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-surface rounded-2xl p-8 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-gold fill-gold"
                    />
                  ))}
                </div>
                <p className="text-dark/80 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-dark">
                      {testimonial.name}
                    </p>
                    <p className="text-muted text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/testimonials"
              className="text-royal font-semibold hover:text-royal-dark transition-colors inline-flex items-center gap-1"
            >
              View all testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ ABOUT PREVIEW ══════ */}
      <section className="py-24 gradient-royal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Meet Your Coach
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Maurice L. Coleman
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Entrepreneur, financial strategist, and founder of Topnoch
                Wealth. Maurice has helped countless entrepreneurs navigate
                the complex world of business funding and build real,
                sustainable wealth.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                His mission is simple: give entrepreneurs the knowledge and
                tools they need to become fundable, access capital, and build
                generational wealth — the right way.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 glass text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/15 transition-all"
              >
                Learn More About Maurice
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-white/15">
                <img
                  src="/maurice-coleman.png"
                  alt="Maurice L. Coleman"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FINAL CTA ══════ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Ready to Find Out If You&apos;re Fundable?
          </h2>
          <p className="text-muted text-lg mb-8">
            Take the free 2-minute assessment. No credit check. No commitment.
            Just clarity.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 gradient-gold text-royal-dark font-bold px-10 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            Start My Free Assessment
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
