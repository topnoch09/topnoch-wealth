"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ScoreGauge from "@/components/ScoreGauge";
import {
  BookOpen,
  Calendar,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Download,
} from "lucide-react";

/* ──────── Recommendation Data ──────── */

interface Recommendation {
  title: string;
  description: string;
  cta: string;
  ctaHref: string;
  icon: React.ElementType;
  products: string[];
}

function getRecommendation(
  score: number,
  obstacle: string
): Recommendation {
  if (score >= 76) {
    return {
      title: "You're Ready for Funding",
      description:
        "Your fundability profile is strong. Get both guides to lock in your credit and business structure — then let's connect you with real capital.",
      cta: "Get the Complete Bundle — $47",
      ctaHref: "/services#products",
      icon: Download,
      products: [
        "The Fundability Reset (credit repair system)",
        "The Fundable Business Blueprint (business structure)",
        "Save 50% with the bundle",
      ],
    };
  }

  if (score >= 56) {
    return {
      title: "You're Almost There",
      description:
        "You're close to being fully fundable. A few targeted adjustments to your business structure will unlock the capital you need.",
      cta: "Get The Fundable Business Blueprint — $27",
      ctaHref: "/services#products",
      icon: BookOpen,
      products: [
        "LLC formation & EIN setup guide",
        "Business credit building roadmap",
        "Lender-ready structure checklist",
      ],
    };
  }

  if (obstacle === "credit") {
    return {
      title: "Let's Fix Your Credit First",
      description:
        "Your credit is the #1 thing holding you back from funding. The good news? It's fixable. The Fundability Reset shows you exactly how to clean up and build your score — fast.",
      cta: "Get The Fundability Reset — $27",
      ctaHref: "/services#products",
      icon: Download,
      products: [
        "Step-by-step credit repair system",
        "Derogatory mark removal tactics",
        "Score optimization for funding approval",
      ],
    };
  }

  if (obstacle === "structure") {
    return {
      title: "You Need the Right Structure",
      description:
        "Banks won't fund what they can't verify. You need an LLC, EIN, and business bank account — set up the right way. The Fundable Business Blueprint walks you through every step.",
      cta: "Get The Fundable Business Blueprint — $27",
      ctaHref: "/services#products",
      icon: BookOpen,
      products: [
        "LLC formation guide",
        "EIN & business bank account setup",
        "Business credit file establishment",
      ],
    };
  }

  if (obstacle === "denied") {
    return {
      title: "Let's Get You Approved",
      description:
        "Being denied isn't the end — it's data. Your credit and structure both need work. Get the complete bundle to fix your foundation from both sides.",
      cta: "Get the Complete Bundle — $47",
      ctaHref: "/services#products",
      icon: Download,
      products: [
        "The Fundability Reset (fix your credit)",
        "The Fundable Business Blueprint (fix your structure)",
        "Save 50% with the bundle",
      ],
    };
  }

  // Default: don't know where to start
  return {
    title: "Here's Your Starting Point",
    description:
      "Every wealth journey starts with the first step. Get both guides to build your credit and business structure the right way — from zero to fundable.",
    cta: "Get the Complete Bundle — $47",
    ctaHref: "/services#products",
    icon: Download,
    products: [
      "The Fundability Reset (credit repair)",
      "The Fundable Business Blueprint (business structure)",
      "Save 50% with the bundle",
    ],
  };
}

/* ──────── Stagger animation ──────── */

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ──────── Results Content ──────── */

function ResultsContent() {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get("score") || "50", 10);
  const obstacle = searchParams.get("obstacle") || "unknown";
  const stage = searchParams.get("stage") || "idea";

  const rec = getRecommendation(score, obstacle);
  const RecIcon = rec.icon;

  return (
    <div className="min-h-screen gradient-hero relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-royal-light/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-20">
        {/* Score Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 border border-gold/25 mb-8">
            <Sparkles size={14} className="text-gold" />
            <span className="text-gold text-sm font-medium">
              Your Results Are In
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Your Fundability Score
          </h1>
          <p className="text-white/60 mb-10">
            Based on your responses, here&apos;s where you stand today.
          </p>

          <ScoreGauge score={score} />
        </motion.div>

        {/* Recommendation Card */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div
            variants={fadeUp}
            className="glass rounded-2xl p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {rec.title}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {rec.description}
            </p>

            {/* What you get */}
            <div className="space-y-3 mb-8">
              {rec.products.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <a
              href={rec.ctaHref}
              className="inline-flex items-center gap-2 gradient-gold text-royal-dark font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98] animate-pulse-glow"
            >
              <RecIcon size={20} />
              {rec.cta}
              <ArrowRight size={20} />
            </a>
          </motion.div>

          {/* Secondary CTA: Join Community */}
          <motion.div
            variants={fadeUp}
            className="glass rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="w-14 h-14 gradient-gold rounded-xl flex items-center justify-center shrink-0">
              <Users size={24} className="text-royal-dark" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-bold text-white mb-1">
                Join the Topnoch Wealth Community
              </h3>
              <p className="text-white/60 text-sm">
                Get ongoing support, resources, and access to our network of
                funded entrepreneurs.
              </p>
            </div>
            <Link
              href="#membership"
              className="text-gold font-semibold hover:text-gold-light transition-colors whitespace-nowrap flex items-center gap-1"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Trust section */}
          <motion.div variants={fadeUp} className="text-center pt-8">
            <p className="text-white/40 text-sm mb-2">
              Trusted by entrepreneurs building real wealth
            </p>
            <p className="text-white/30 text-xs">
              Structure first. Capital second. Wealth third.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ──────── Page (with Suspense for useSearchParams) ──────── */

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen gradient-hero flex items-center justify-center">
          <div className="text-white text-lg">Loading your results...</div>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
