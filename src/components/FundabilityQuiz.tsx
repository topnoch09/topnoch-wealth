"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  Building2,
  ShieldOff,
  HelpCircle,
  Sprout,
  Rocket,
  TrendingUp,
  Crown,
  ArrowRight,
  ArrowLeft,
  Mail,
  Loader2,
  CheckCircle2,
} from "lucide-react";

/* ──────── Types ──────── */

interface QuizAnswers {
  obstacle: string;
  stage: string;
  amount: string;
  email: string;
}

interface QuizOption {
  value: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

interface QuizQuestion {
  id: keyof QuizAnswers;
  title: string;
  subtitle: string;
  options: QuizOption[];
}

/* ──────── Quiz Data ──────── */

const questions: QuizQuestion[] = [
  {
    id: "obstacle",
    title: "What's your biggest funding obstacle?",
    subtitle: "Select the one that best describes where you are right now.",
    options: [
      {
        value: "credit",
        label: "Bad or no credit history",
        description: "Credit score below 700 or limited history",
        icon: CreditCard,
      },
      {
        value: "structure",
        label: "No business structure",
        description: "No LLC, EIN, or business bank account",
        icon: Building2,
      },
      {
        value: "denied",
        label: "Been denied by banks",
        description: "Applied for funding and got rejected",
        icon: ShieldOff,
      },
      {
        value: "unknown",
        label: "Don't know where to start",
        description: "New to business funding entirely",
        icon: HelpCircle,
      },
    ],
  },
  {
    id: "stage",
    title: "What's your current business stage?",
    subtitle: "This helps us tailor your personalized roadmap.",
    options: [
      {
        value: "idea",
        label: "Just an idea",
        description: "Haven't started the business yet",
        icon: Sprout,
      },
      {
        value: "prerevenue",
        label: "Pre-revenue startup",
        description: "Business exists but no revenue yet",
        icon: Rocket,
      },
      {
        value: "revenue",
        label: "Revenue-generating",
        description: "Making money and ready to scale",
        icon: TrendingUp,
      },
      {
        value: "established",
        label: "Established (2+ years)",
        description: "Profitable and looking to expand",
        icon: Crown,
      },
    ],
  },
  {
    id: "amount",
    title: "How much funding are you targeting?",
    subtitle: "Select your ideal funding range.",
    options: [
      {
        value: "10k",
        label: "Under $10,000",
        description: "Seed capital to get started",
        icon: Sprout,
      },
      {
        value: "50k",
        label: "$10,000 – $50,000",
        description: "Growth capital for expansion",
        icon: TrendingUp,
      },
      {
        value: "250k",
        label: "$50,000 – $250,000",
        description: "Scaling operations significantly",
        icon: Rocket,
      },
      {
        value: "250kplus",
        label: "$250,000+",
        description: "Major business transformation",
        icon: Crown,
      },
    ],
  },
];

/* ──────── Score Calculation ──────── */

function calculateScore(answers: Partial<QuizAnswers>): number {
  let score = 50;

  switch (answers.obstacle) {
    case "credit":
      score -= 25;
      break;
    case "structure":
      score -= 15;
      break;
    case "denied":
      score -= 10;
      break;
    case "unknown":
      score -= 20;
      break;
  }

  switch (answers.stage) {
    case "idea":
      score += 5;
      break;
    case "prerevenue":
      score += 15;
      break;
    case "revenue":
      score += 25;
      break;
    case "established":
      score += 35;
      break;
  }

  switch (answers.amount) {
    case "10k":
      score += 10;
      break;
    case "50k":
      score += 10;
      break;
    case "250k":
      score += 5;
      break;
    case "250kplus":
      score -= 5;
      break;
  }

  return Math.max(0, Math.min(100, score));
}

/* ──────── Animation Variants ──────── */

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

/* ──────── Component ──────── */

export default function FundabilityQuiz() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");

  const totalSteps = questions.length + 1; // +1 for email step
  const progress = (step / totalSteps) * 100;
  const isEmailStep = step === questions.length;

  function selectOption(questionId: keyof QuizAnswers, value: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    // Auto-advance after selection
    setTimeout(() => {
      setDirection(1);
      setStep((s) => s + 1);
    }, 300);
  }

  function goBack() {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    setEmailError("");

    const finalAnswers = { ...answers, email };
    const score = calculateScore(finalAnswers);

    try {
      await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          obstacle: finalAnswers.obstacle,
          stage: finalAnswers.stage,
          amount: finalAnswers.amount,
          score,
        }),
      });
    } catch {
      // Silent fail — don't block the user experience
    }

    // Navigate to results
    const params = new URLSearchParams({
      score: score.toString(),
      obstacle: (finalAnswers.obstacle as string) || "",
      stage: (finalAnswers.stage as string) || "",
      amount: (finalAnswers.amount as string) || "",
    });

    router.push(`/results?${params.toString()}`);
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/60 text-sm font-medium">
            Step {step + 1} of {totalSteps}
          </span>
          <span className="text-gold text-sm font-semibold">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full gradient-gold rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Quiz Card */}
      <div className="glass rounded-2xl p-8 md:p-10 min-h-[420px] flex flex-col">
        <AnimatePresence mode="wait" custom={direction}>
          {!isEmailStep ? (
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-1 flex flex-col"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {questions[step].title}
              </h2>
              <p className="text-white/60 mb-8">
                {questions[step].subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                {questions[step].options.map((option) => {
                  const isSelected =
                    answers[questions[step].id] === option.value;
                  const Icon = option.icon;

                  return (
                    <button
                      key={option.value}
                      onClick={() =>
                        selectOption(questions[step].id, option.value)
                      }
                      className={`group relative text-left p-5 rounded-xl border-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                        isSelected
                          ? "border-gold bg-gold/15 shadow-lg shadow-gold/10"
                          : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? "bg-gold text-royal-dark"
                              : "bg-white/10 text-white/70 group-hover:bg-white/20"
                          }`}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <p
                            className={`font-semibold text-sm transition-colors ${
                              isSelected ? "text-gold" : "text-white"
                            }`}
                          >
                            {option.label}
                          </p>
                          <p className="text-white/50 text-xs mt-1">
                            {option.description}
                          </p>
                        </div>
                      </div>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-3 right-3"
                        >
                          <CheckCircle2 size={18} className="text-gold" />
                        </motion.div>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            /* ──── Email Step ──── */
            <motion.div
              key="email"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-1 flex flex-col"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Mail size={28} className="text-royal-dark" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Almost there!
                </h2>
                <p className="text-white/60">
                  Enter your email to receive your personalized Fundability
                  Score and custom roadmap.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full"
              >
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border-2 border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-gold focus:bg-white/15 transition-all text-lg"
                    autoFocus
                  />
                  {emailError && (
                    <p className="text-red-400 text-sm mt-2">{emailError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full gradient-gold text-royal-dark font-bold py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Calculating Your Score...
                    </>
                  ) : (
                    <>
                      Get My Fundability Score
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>

                <p className="text-white/40 text-xs text-center mt-4">
                  Free. No credit check. No spam. Just clarity.
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back Button */}
        {step > 0 && (
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors mt-6 text-sm self-start"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        )}
      </div>
    </div>
  );
}
