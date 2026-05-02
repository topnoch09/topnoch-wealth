import type { Metadata } from "next";
import FundabilityQuiz from "@/components/FundabilityQuiz";
import { Shield, Clock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Fundability Assessment",
  description:
    "Find out exactly why you keep getting denied for funding. Take the 2-minute Fundability Assessment and get a personalized roadmap to capital in 90 days.",
};

export default function FundabilityPage() {
  return (
    <div className="min-h-screen gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-royal-light/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-royal-light/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">
        {/* Hero Text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 border border-gold/25 mb-6">
            <Zap size={14} className="text-gold" />
            <span className="text-gold text-sm font-medium">
              Free 2-Minute Assessment
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Find Out Exactly Why You Keep{" "}
            <span className="text-gradient-gold">Getting Denied</span>{" "}
            for Funding
          </h1>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Take the Fundability Assessment and get a personalized roadmap to
            capital in 90 days — no credit check, no commitment.
          </p>
        </div>

        {/* Quiz */}
        <FundabilityQuiz />

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
          <div className="flex items-center gap-2 text-white/40">
            <Shield size={16} />
            <span className="text-sm">No credit check required</span>
          </div>
          <div className="flex items-center gap-2 text-white/40">
            <Clock size={16} />
            <span className="text-sm">Takes less than 2 minutes</span>
          </div>
          <div className="flex items-center gap-2 text-white/40">
            <Zap size={16} />
            <span className="text-sm">Instant results</span>
          </div>
        </div>
      </div>
    </div>
  );
}
