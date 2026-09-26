import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { fireCelebrationConfetti } from '../utils/confetti';

interface HeroSectionProps {
  onNext: () => void;
  onBack: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNext, onBack }) => {
  useEffect(() => {
    // Fire festive confetti on arrival
    const timer = setTimeout(() => {
      fireCelebrationConfetti();
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 max-w-2xl mx-auto relative">
      {/* Back button */}
      <button
        onClick={onBack}
        className="self-start mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors px-3 py-1.5 rounded-full bg-white/60 hover:bg-white border border-slate-200/60 shadow-2xs backdrop-blur-xs cursor-pointer"
        aria-label="Back to opening"
      >
        <ArrowLeft size={13} />
        <span>Back</span>
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full glass-card rounded-3xl p-7 sm:p-10 text-center space-y-6 relative overflow-hidden shadow-xl"
      >
        {/* Floating Balloons Animation Cluster */}
        <div className="relative flex justify-center items-center py-2">
          {/* Left Balloon */}
          <div
            className="absolute -left-2 sm:left-6 -top-4 animate-balloon opacity-90 pointer-events-none"
            style={{ animationDelay: '0.2s' }}
          >
            <svg width="48" height="64" viewBox="0 0 48 64" fill="none">
              <path
                d="M24 2C13 2 4 11 4 22C4 35 24 50 24 50C24 50 44 35 44 22C44 11 35 2 24 2Z"
                fill="url(#balloon-pink)"
              />
              <path d="M22 50L26 50L25 54L23 54Z" fill="#fb7185" />
              <path
                d="M24 54C24 58 21 61 24 64"
                stroke="#fda4af"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="balloon-pink" x1="12" y1="6" x2="36" y2="44">
                  <stop stopColor="#fda4af" />
                  <stop offset="1" stopColor="#f43f5e" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Right Balloon */}
          <div
            className="absolute -right-2 sm:right-6 -top-2 animate-balloon opacity-90 pointer-events-none"
            style={{ animationDelay: '1.2s' }}
          >
            <svg width="44" height="60" viewBox="0 0 48 64" fill="none">
              <path
                d="M24 2C13 2 4 11 4 22C4 35 24 50 24 50C24 50 44 35 44 22C44 11 35 2 24 2Z"
                fill="url(#balloon-lavender)"
              />
              <path d="M22 50L26 50L25 54L23 54Z" fill="#a855f7" />
              <path
                d="M24 54C25 58 22 61 25 64"
                stroke="#d8b4fe"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="balloon-lavender" x1="12" y1="6" x2="36" y2="44">
                  <stop stopColor="#e9d5ff" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Elegant Animated Birthday Cake Illustration */}
          <div className="relative z-10 my-1">
            <svg
              width="140"
              height="130"
              viewBox="0 0 160 150"
              fill="none"
              className="drop-shadow-md mx-auto"
            >
              {/* Cake Plate */}
              <ellipse cx="80" cy="138" rx="65" ry="9" fill="#e2e8f0" />
              <ellipse cx="80" cy="136" rx="62" ry="7" fill="#f8fafc" />

              {/* Bottom Tier */}
              <path
                d="M32 94C32 94 32 125 32 125C32 133 128 133 128 125C128 125 128 94 128 94Z"
                fill="#fbcfe8"
              />
              {/* Bottom Frosting Trim */}
              <ellipse cx="80" cy="94" rx="48" ry="10" fill="#f472b6" />
              {/* Decorative scalloped icing drops */}
              <path
                d="M32 95C36 102 42 102 46 95C50 103 58 103 62 95C66 104 76 104 80 95C84 104 94 104 98 95C102 103 110 103 114 95C118 102 124 102 128 95"
                fill="#f472b6"
              />

              {/* Top Tier */}
              <path
                d="M48 64C48 64 48 90 48 90C48 96 112 96 112 90C112 90 112 64 112 64Z"
                fill="#fdf2f8"
              />
              <ellipse cx="80" cy="64" rx="32" ry="7" fill="#fce7f3" />
              {/* Cream drips */}
              <path
                d="M48 65C51 71 55 71 58 65C61 73 67 73 70 65C73 74 81 74 84 65C87 73 93 73 96 65C99 71 103 71 106 65C109 70 111 70 112 65"
                fill="#fbcfe8"
              />

              {/* Candle */}
              <rect x="77" y="38" width="6" height="26" rx="2" fill="#ec4899" />
              {/* Candle stripes */}
              <line x1="77" y1="44" x2="83" y2="42" stroke="#ffffff" strokeWidth="1.5" />
              <line x1="77" y1="52" x2="83" y2="50" stroke="#ffffff" strokeWidth="1.5" />
              <line x1="77" y1="60" x2="83" y2="58" stroke="#ffffff" strokeWidth="1.5" />

              {/* Candle Wick */}
              <line x1="80" y1="38" x2="80" y2="33" stroke="#475569" strokeWidth="1.5" />

              {/* Candle Flame with animated flicker */}
              <g className="animate-flame" style={{ transformOrigin: '80px 24px' }}>
                <path
                  d="M80 18C77 24 74 27 75 32C76 35 84 35 85 32C86 27 83 24 80 18Z"
                  fill="url(#flame-grad)"
                />
                <circle cx="80" cy="30" r="2.5" fill="#fef08a" />
              </g>

              {/* Sparkle stars around cake */}
              <path d="M40 40L41 43L44 44L41 45L40 48L39 45L36 44L39 43Z" fill="#f59e0b" opacity="0.8" />
              <path d="M120 48L121 50L123 51L121 52L120 54L119 52L117 51L119 50Z" fill="#ec4899" opacity="0.8" />

              <defs>
                <linearGradient id="flame-grad" x1="80" y1="18" x2="80" y2="35" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fbbf24" />
                  <stop offset="0.6" stopColor="#f97316" />
                  <stop offset="1" stopColor="#ef4444" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Titles */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-600 text-xs font-semibold tracking-wider uppercase mx-auto">
            <span>✨</span>
            <span>Happy Birthday, Chamma!</span>
            <span>🎀</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight font-editorial">
            Happy Birthday, Chamma! 🎂✨
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
            Another year older, but somehow still the same level of chaotic 😂
          </p>
        </div>

        {/* Small badge */}
        <div className="pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200/80 shadow-2xs">
            <Check size={13} className="text-emerald-600 stroke-[2.5]" />
            <span>Chamma v27.09.2026 successfully installed ✓</span>
          </div>
        </div>

        {/* Next Button */}
        <div className="pt-4">
          <button
            onClick={onNext}
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-md shadow-rose-200/70 hover:shadow-lg hover:shadow-rose-300/80 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Okay, what’s next? 👀</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
