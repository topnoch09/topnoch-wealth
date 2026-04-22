/* ──────── On-Brand SVG Illustrations for Services Page ──────── */
/* Brand palette: Royal #1A3A6B · Gold #C9A84C · Navy #0F2847      */

export function CreditIllustration() {
  return (
    <div className="aspect-video rounded-2xl bg-gradient-to-br from-royal-dark via-royal to-royal-light relative overflow-hidden flex items-center justify-center p-8">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-royal-light/20 rounded-full blur-2xl" />

      <svg viewBox="0 0 400 260" fill="none" className="w-full h-full relative z-10 drop-shadow-lg">
        {/* Credit card background */}
        <rect x="40" y="30" width="200" height="130" rx="14" fill="#0F2847" stroke="#C9A84C" strokeWidth="1.5" />
        <rect x="40" y="30" width="200" height="130" rx="14" fill="url(#cardGrad)" opacity="0.15" />
        <rect x="60" y="60" width="45" height="32" rx="5" fill="#C9A84C" opacity="0.8" />
        {/* Chip lines */}
        <line x1="72" y1="68" x2="72" y2="84" stroke="#0F2847" strokeWidth="1" opacity="0.4" />
        <line x1="82" y1="68" x2="82" y2="84" stroke="#0F2847" strokeWidth="1" opacity="0.4" />
        <line x1="65" y1="76" x2="100" y2="76" stroke="#0F2847" strokeWidth="1" opacity="0.4" />
        {/* Card number dots */}
        {[0, 1, 2, 3].map((g) =>
          [0, 1, 2, 3].map((d) => (
            <circle key={`${g}-${d}`} cx={65 + g * 42 + d * 8} cy={112} r="2.5" fill="white" opacity="0.5" />
          ))
        )}
        <text x="60" y="145" fill="white" opacity="0.5" fontSize="9" fontFamily="monospace">
          TOPNOCH WEALTH
        </text>

        {/* Score gauge */}
        <g transform="translate(280, 130)">
          {/* Gauge background arc */}
          <path d="M -70 0 A 70 70 0 0 1 70 0" stroke="white" strokeWidth="8" fill="none" opacity="0.1" strokeLinecap="round" />
          {/* Red zone */}
          <path d="M -70 0 A 70 70 0 0 1 -49.5 -49.5" stroke="#EF4444" strokeWidth="8" fill="none" opacity="0.6" strokeLinecap="round" />
          {/* Yellow zone */}
          <path d="M -49.5 -49.5 A 70 70 0 0 1 0 -70" stroke="#F59E0B" strokeWidth="8" fill="none" opacity="0.6" strokeLinecap="round" />
          {/* Green zone */}
          <path d="M 0 -70 A 70 70 0 0 1 70 0" stroke="#22C55E" strokeWidth="8" fill="none" opacity="0.7" strokeLinecap="round" />
          {/* Needle pointing to green */}
          <line x1="0" y1="0" x2="42" y2="-50" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
          <circle cx="0" cy="0" r="6" fill="#C9A84C" />
          {/* Score text */}
          <text x="0" y="-18" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="system-ui">
            780
          </text>
          <text x="0" y="-4" textAnchor="middle" fill="#C9A84C" fontSize="9" fontWeight="600" fontFamily="system-ui">
            EXCELLENT
          </text>
        </g>

        {/* Upward arrow with sparkles */}
        <g transform="translate(160, 180)">
          <path d="M 0 60 L 0 15 L -12 30 M 0 15 L 12 30" stroke="#C9A84C" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* Sparkle */}
          <circle cx="-8" cy="8" r="2" fill="#C9A84C" opacity="0.6" />
          <circle cx="14" cy="20" r="1.5" fill="#C9A84C" opacity="0.4" />
          <circle cx="-14" cy="30" r="1" fill="white" opacity="0.3" />
        </g>

        {/* Shield check */}
        <g transform="translate(60, 180)">
          <path d="M 0 -20 L 18 -12 L 18 4 C 18 16 0 26 0 26 C 0 26 -18 16 -18 4 L -18 -12 Z" fill="#C9A84C" opacity="0.2" stroke="#C9A84C" strokeWidth="1.5" />
          <path d="M -6 2 L -2 6 L 8 -4" stroke="#C9A84C" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Floating particles */}
        <circle cx="330" cy="50" r="3" fill="#C9A84C" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="350" cy="80" r="2" fill="white" opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="20" cy="200" r="2.5" fill="#C9A84C" opacity="0.25">
          <animate attributeName="opacity" values="0.25;0.6;0.25" dur="4s" repeatCount="indefinite" />
        </circle>

        <defs>
          <linearGradient id="cardGrad" x1="40" y1="30" x2="240" y2="160">
            <stop offset="0%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#1A3A6B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function StructureIllustration() {
  return (
    <div className="aspect-video rounded-2xl bg-gradient-to-br from-royal-dark via-royal to-royal-light relative overflow-hidden flex items-center justify-center p-8">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gold/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-royal-light/15 rounded-full blur-2xl" />

      <svg viewBox="0 0 400 260" fill="none" className="w-full h-full relative z-10 drop-shadow-lg">
        {/* Foundation platform */}
        <rect x="60" y="200" width="280" height="12" rx="4" fill="#C9A84C" opacity="0.3" />
        <rect x="60" y="200" width="280" height="12" rx="4" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />

        {/* Building blocks — bottom row */}
        <rect x="80" y="150" width="75" height="48" rx="6" fill="#0F2847" stroke="#C9A84C" strokeWidth="1" opacity="0.9" />
        <text x="117" y="170" textAnchor="middle" fill="#C9A84C" fontSize="8" fontWeight="600" fontFamily="system-ui">LLC</text>
        <text x="117" y="182" textAnchor="middle" fill="white" fontSize="6" opacity="0.5" fontFamily="system-ui">Formation</text>
        <circle cx="117" cy="190" r="2" fill="#22C55E" opacity="0.8" />

        <rect x="163" y="150" width="75" height="48" rx="6" fill="#0F2847" stroke="#C9A84C" strokeWidth="1" opacity="0.9" />
        <text x="200" y="170" textAnchor="middle" fill="#C9A84C" fontSize="8" fontWeight="600" fontFamily="system-ui">EIN</text>
        <text x="200" y="182" textAnchor="middle" fill="white" fontSize="6" opacity="0.5" fontFamily="system-ui">Registration</text>
        <circle cx="200" cy="190" r="2" fill="#22C55E" opacity="0.8" />

        <rect x="246" y="150" width="75" height="48" rx="6" fill="#0F2847" stroke="#C9A84C" strokeWidth="1" opacity="0.9" />
        <text x="283" y="170" textAnchor="middle" fill="#C9A84C" fontSize="7" fontWeight="600" fontFamily="system-ui">BANK</text>
        <text x="283" y="182" textAnchor="middle" fill="white" fontSize="6" opacity="0.5" fontFamily="system-ui">Account</text>
        <circle cx="283" cy="190" r="2" fill="#22C55E" opacity="0.8" />

        {/* Middle row */}
        <rect x="120" y="95" width="75" height="48" rx="6" fill="#0F2847" stroke="white" strokeWidth="0.5" opacity="0.7" />
        <text x="157" y="115" textAnchor="middle" fill="white" fontSize="7" fontWeight="600" fontFamily="system-ui">BUSINESS</text>
        <text x="157" y="127" textAnchor="middle" fill="white" fontSize="6" opacity="0.5" fontFamily="system-ui">Credit File</text>

        <rect x="203" y="95" width="75" height="48" rx="6" fill="#0F2847" stroke="white" strokeWidth="0.5" opacity="0.7" />
        <text x="240" y="115" textAnchor="middle" fill="white" fontSize="7" fontWeight="600" fontFamily="system-ui">COMPLIANCE</text>
        <text x="240" y="127" textAnchor="middle" fill="white" fontSize="6" opacity="0.5" fontFamily="system-ui">& Docs</text>

        {/* Top block — crown */}
        <rect x="162" y="40" width="75" height="48" rx="6" fill="url(#topBlock)" stroke="#C9A84C" strokeWidth="1.5" />
        <text x="199" y="60" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui">FUNDABLE</text>
        <text x="199" y="73" textAnchor="middle" fill="#C9A84C" fontSize="7" fontWeight="600" fontFamily="system-ui">BUSINESS</text>

        {/* Connecting lines */}
        <line x1="117" y1="150" x2="157" y2="143" stroke="white" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 3" />
        <line x1="200" y1="150" x2="200" y2="143" stroke="white" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 3" />
        <line x1="283" y1="150" x2="240" y2="143" stroke="white" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 3" />
        <line x1="157" y1="95" x2="185" y2="88" stroke="white" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 3" />
        <line x1="240" y1="95" x2="213" y2="88" stroke="white" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 3" />

        {/* Crown icon on top */}
        <g transform="translate(199, 28)">
          <path d="M -10 0 L -14 -10 L -5 -5 L 0 -14 L 5 -5 L 14 -10 L 10 0 Z" fill="#C9A84C" opacity="0.8" />
        </g>

        {/* Checkmark badge */}
        <g transform="translate(350, 55)">
          <circle cx="0" cy="0" r="16" fill="#C9A84C" opacity="0.15" />
          <circle cx="0" cy="0" r="12" fill="#C9A84C" opacity="0.2" stroke="#C9A84C" strokeWidth="1" />
          <path d="M -5 0 L -2 3 L 5 -4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Floating particles */}
        <circle cx="45" cy="80" r="2" fill="#C9A84C" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="370" cy="180" r="2.5" fill="white" opacity="0.15">
          <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="220" r="1.5" fill="#C9A84C" opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
        </circle>

        <defs>
          <linearGradient id="topBlock" x1="162" y1="40" x2="237" y2="88">
            <stop offset="0%" stopColor="#1A3A6B" />
            <stop offset="100%" stopColor="#0F2847" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function FundingIllustration() {
  return (
    <div className="aspect-video rounded-2xl bg-gradient-to-br from-royal-dark via-royal to-royal-light relative overflow-hidden flex items-center justify-center p-8">
      {/* Background glow */}
      <div className="absolute bottom-1/4 left-1/3 w-52 h-52 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-44 h-44 bg-royal-light/15 rounded-full blur-2xl" />

      <svg viewBox="0 0 400 260" fill="none" className="w-full h-full relative z-10 drop-shadow-lg">
        {/* Chart grid lines */}
        {[220, 180, 140, 100, 60].map((y, i) => (
          <line key={y} x1="50" y1={y} x2="360" y2={y} stroke="white" strokeWidth="0.5" opacity={0.06 + i * 0.02} />
        ))}

        {/* Growth area chart */}
        <defs>
          <linearGradient id="chartFill" x1="200" y1="60" x2="200" y2="220">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#B08A3A" />
          </linearGradient>
        </defs>

        {/* Area fill */}
        <path
          d="M 70 200 Q 110 195 140 180 Q 170 165 200 150 Q 230 130 260 105 Q 290 75 320 55 L 320 220 L 70 220 Z"
          fill="url(#chartFill)"
        />
        {/* Line */}
        <path
          d="M 70 200 Q 110 195 140 180 Q 170 165 200 150 Q 230 130 260 105 Q 290 75 320 55"
          stroke="#C9A84C"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Data points */}
        {[
          [70, 200],
          [140, 180],
          [200, 150],
          [260, 105],
          [320, 55],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill="#0F2847" stroke="#C9A84C" strokeWidth="2" />
            {i === 4 && (
              <circle cx={cx} cy={cy} r="10" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.4">
                <animate attributeName="r" values="10;16;10" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        ))}

        {/* Funding amount labels */}
        <g transform="translate(320, 40)">
          <rect x="-30" y="-16" width="60" height="22" rx="6" fill="#C9A84C" opacity="0.9" />
          <text x="0" y="-1" textAnchor="middle" fill="#0F2847" fontSize="10" fontWeight="700" fontFamily="system-ui">
            $250K
          </text>
          {/* Pointer */}
          <polygon points="-4,6 4,6 0,12" fill="#C9A84C" opacity="0.9" />
        </g>

        {/* Dollar signs floating up */}
        <g opacity="0.6">
          <text x="90" y="160" fill="#C9A84C" fontSize="14" fontWeight="bold" opacity="0.3" fontFamily="system-ui">$</text>
          <text x="155" y="130" fill="#C9A84C" fontSize="16" fontWeight="bold" opacity="0.35" fontFamily="system-ui">$</text>
          <text x="230" y="85" fill="#C9A84C" fontSize="18" fontWeight="bold" opacity="0.4" fontFamily="system-ui">$</text>
          <text x="295" y="50" fill="#C9A84C" fontSize="20" fontWeight="bold" opacity="0.45" fontFamily="system-ui">$</text>
        </g>

        {/* Funding bars on left */}
        <g transform="translate(20, 80)">
          <rect x="0" y="0" width="22" height="140" rx="4" fill="white" opacity="0.05" />
          <rect x="0" y="60" width="22" height="80" rx="4" fill="url(#barGrad)" opacity="0.5" />
          <text x="11" y="155" textAnchor="middle" fill="white" fontSize="6" opacity="0.4" fontFamily="system-ui">SBA</text>
        </g>
        <g transform="translate(20, 80)">
          <rect x="28" y="0" width="22" height="140" rx="4" fill="white" opacity="0.05" />
          <rect x="28" y="30" width="22" height="110" rx="4" fill="url(#barGrad)" opacity="0.7" />
          <text x="39" y="155" textAnchor="middle" fill="white" fontSize="6" opacity="0.4" fontFamily="system-ui">LOC</text>
        </g>

        {/* Trophy / success icon top-right */}
        <g transform="translate(370, 90)">
          <path d="M -8 -12 L 8 -12 L 6 -2 Q 0 4 -6 -2 Z" fill="#C9A84C" opacity="0.5" />
          <rect x="-3" y="-2" width="6" height="6" fill="#C9A84C" opacity="0.4" />
          <rect x="-6" y="4" width="12" height="3" rx="1" fill="#C9A84C" opacity="0.4" />
          {/* Star */}
          <path d="M 0 -10 L 1.5 -7 L 4.5 -7 L 2 -5 L 3 -2 L 0 -4 L -3 -2 L -2 -5 L -4.5 -7 L -1.5 -7 Z" fill="white" opacity="0.7" />
        </g>

        {/* X axis */}
        <line x1="50" y1="220" x2="360" y2="220" stroke="white" strokeWidth="1" opacity="0.15" />

        {/* Axis labels */}
        <text x="70" y="238" textAnchor="middle" fill="white" fontSize="7" opacity="0.3" fontFamily="system-ui">Start</text>
        <text x="200" y="238" textAnchor="middle" fill="white" fontSize="7" opacity="0.3" fontFamily="system-ui">Growth</text>
        <text x="320" y="238" textAnchor="middle" fill="white" fontSize="7" opacity="0.3" fontFamily="system-ui">Scale</text>

        {/* Floating particles */}
        <circle cx="380" cy="200" r="2" fill="#C9A84C" opacity="0.25">
          <animate attributeName="opacity" values="0.25;0.6;0.25" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="360" cy="160" r="1.5" fill="white" opacity="0.15">
          <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="240" r="2" fill="#C9A84C" opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3.8s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
