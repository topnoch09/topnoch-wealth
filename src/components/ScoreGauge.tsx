"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScoreGaugeProps {
  score: number;
  size?: number;
}

export default function ScoreGauge({ score, size = 240 }: ScoreGaugeProps) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const increment = score / steps;
    let current = 0;
    let frame = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        frame++;
        // Ease-out cubic
        const t = frame / steps;
        const eased = 1 - Math.pow(1 - t, 3);
        current = Math.round(eased * score);
        setAnimatedScore(current);

        if (frame >= steps) {
          setAnimatedScore(score);
          clearInterval(interval);
        }
      }, duration / steps);
    }, 400);

    return () => clearTimeout(timer);
  }, [score]);

  const radius = (size - 24) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;
  const center = size / 2;

  function getColor(): string {
    if (score <= 30) return "#EF4444";
    if (score <= 55) return "#F59E0B";
    if (score <= 75) return "#C9A84C";
    return "#22C55E";
  }

  function getLabel(): string {
    if (score <= 30) return "Needs Work";
    if (score <= 55) return "Getting There";
    if (score <= 75) return "Almost Ready";
    return "Fundable";
  }

  function getGlow(): string {
    const color = getColor();
    return `drop-shadow(0 0 20px ${color}40) drop-shadow(0 0 40px ${color}20)`;
  }

  return (
    <div className="relative inline-flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="-rotate-90"
          viewBox={`0 0 ${size} ${size}`}
          style={{ filter: getGlow() }}
        >
          {/* Background track */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="12"
            fill="none"
          />
          {/* Animated fill */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke={getColor()}
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.05s linear" }}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-6xl font-bold text-white tabular-nums"
          >
            {animatedScore}
          </motion.span>
          <span className="text-white/50 text-sm mt-1">out of 100</span>
        </div>
      </div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="mt-4 px-5 py-2 rounded-full text-sm font-semibold"
        style={{
          backgroundColor: `${getColor()}20`,
          color: getColor(),
          border: `1px solid ${getColor()}40`,
        }}
      >
        {getLabel()}
      </motion.div>
    </div>
  );
}
