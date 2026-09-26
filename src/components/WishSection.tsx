import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Sparkles, Wand2, RotateCcw } from 'lucide-react';
import { fireGentleWishConfetti } from '../utils/confetti';

interface WishSectionProps {
  onNext: () => void;
  onBack: () => void;
}

export const WishSection: React.FC<WishSectionProps> = ({ onNext, onBack }) => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [isWished, setIsWished] = useState(false);
  const [sparkleFlash, setSparkleFlash] = useState(false);

  const handleMakeWish = () => {
    if (!candlesLit) return;

    setCandlesLit(false);
    setIsWished(true);
    setSparkleFlash(true);

    // Confetti effect
    fireGentleWishConfetti();

    setTimeout(() => {
      setSparkleFlash(false);
    }, 1800);
  };

  const handleRelight = () => {
    setCandlesLit(true);
    setIsWished(false);
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 max-w-2xl mx-auto relative py-6">
      {/* Sparkle flash overlay */}
      <AnimatePresence>
        {sparkleFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 pointer-events-none z-40 bg-gradient-to-t from-amber-100/25 via-rose-100/30 to-purple-100/25 backdrop-blur-[2px] flex items-center justify-center"
          >
            <div className="text-4xl animate-bounce">✨ ✨ ✨</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back button */}
      <button
        onClick={onBack}
        className="self-start mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors px-3 py-1.5 rounded-full bg-white/60 hover:bg-white border border-slate-200/60 shadow-2xs backdrop-blur-xs cursor-pointer"
        aria-label="Back to fact sheet"
      >
        <ArrowLeft size={13} />
        <span>Back</span>
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full glass-card rounded-3xl p-8 sm:p-12 text-center space-y-8 relative overflow-hidden shadow-2xl"
      >
        {/* Header kicker */}
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
          <Wand2 size={13} className="text-rose-500" />
          <span>Birthday Ritual</span>
        </div>

        {/* Cake and Candle interactive illustration */}
        <div className="relative py-2">
          <svg
            width="200"
            height="170"
            viewBox="0 0 200 170"
            fill="none"
            className="mx-auto drop-shadow-lg"
          >
            {/* Stand / Plate */}
            <ellipse cx="100" cy="155" rx="85" ry="12" fill="#cbd5e1" />
            <ellipse cx="100" cy="152" rx="80" ry="10" fill="#f8fafc" />

            {/* Bottom Tier */}
            <path
              d="M35 105C35 105 35 142 35 142C35 152 165 152 165 142C165 142 165 105 165 105Z"
              fill="#fce7f3"
            />
            <ellipse cx="100" cy="105" rx="65" ry="12" fill="#fbcfe8" />

            {/* Bottom Tier Frosting Details */}
            <path
              d="M35 107C40 116 48 116 53 107C58 117 68 117 73 107C78 118 90 118 95 107C100 118 112 118 117 107C122 117 132 117 137 107C142 116 150 116 155 107C160 114 163 114 165 107"
              fill="#f472b6"
            />

            {/* Top Tier */}
            <path
              d="M55 70C55 70 55 102 55 102C55 110 145 110 145 102C145 102 145 70 145 70Z"
              fill="#ffffff"
            />
            <ellipse cx="100" cy="70" rx="45" ry="9" fill="#fdf2f8" />
            <path
              d="M55 71C59 79 65 79 69 71C73 80 81 80 85 71C89 81 99 81 103 71C107 81 117 81 121 71C125 79 133 79 137 71C141 78 143 78 145 71"
              fill="#fbcfe8"
            />

            {/* 3 Candles */}
            {/* Candle 1 (Left) */}
            <rect x="76" y="42" width="6" height="28" rx="2" fill="#ec4899" />
            <line x1="79" y1="42" x2="79" y2="37" stroke="#475569" strokeWidth="1.5" />

            {/* Candle 2 (Center) */}
            <rect x="97" y="38" width="6" height="32" rx="2" fill="#a855f7" />
            <line x1="100" y1="38" x2="100" y2="33" stroke="#475569" strokeWidth="1.5" />

            {/* Candle 3 (Right) */}
            <rect x="118" y="42" width="6" height="28" rx="2" fill="#ec4899" />
            <line x1="121" y1="42" x2="121" y2="37" stroke="#475569" strokeWidth="1.5" />

            {/* Flame Left */}
            {candlesLit ? (
              <g className="animate-flame" style={{ transformOrigin: '79px 26px' }}>
                <path
                  d="M79 20C76 25 74 27 75 32C76 34 82 34 83 32C84 27 82 25 79 20Z"
                  fill="url(#candle-flame)"
                />
                <circle cx="79" cy="30" r="2" fill="#fef08a" />
              </g>
            ) : (
              <g className="animate-smoke">
                <circle cx="79" cy="33" r="3" fill="#94a3b8" />
                <circle cx="78" cy="27" r="4" fill="#cbd5e1" />
              </g>
            )}

            {/* Flame Center */}
            {candlesLit ? (
              <g className="animate-flame" style={{ transformOrigin: '100px 22px', animationDelay: '0.3s' }}>
                <path
                  d="M100 16C97 21 95 23 96 28C97 30 103 30 104 28C105 23 103 21 100 16Z"
                  fill="url(#candle-flame)"
                />
                <circle cx="100" cy="26" r="2.2" fill="#fef08a" />
              </g>
            ) : (
              <g className="animate-smoke" style={{ animationDelay: '0.1s' }}>
                <circle cx="100" cy="29" r="3.5" fill="#94a3b8" />
                <circle cx="101" cy="22" r="4.5" fill="#cbd5e1" />
              </g>
            )}

            {/* Flame Right */}
            {candlesLit ? (
              <g className="animate-flame" style={{ transformOrigin: '121px 26px', animationDelay: '0.6s' }}>
                <path
                  d="M121 20C118 25 116 27 117 32C118 34 124 34 125 32C126 27 124 25 121 20Z"
                  fill="url(#candle-flame)"
                />
                <circle cx="121" cy="30" r="2" fill="#fef08a" />
              </g>
            ) : (
              <g className="animate-smoke" style={{ animationDelay: '0.2s' }}>
                <circle cx="121" cy="33" r="3" fill="#94a3b8" />
                <circle cx="120" cy="27" r="4" fill="#cbd5e1" />
              </g>
            )}

            <defs>
              <linearGradient id="candle-flame" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#fbbf24" />
                <stop offset="0.6" stopColor="#f97316" />
                <stop offset="1" stopColor="#ef4444" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Text Section */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight font-editorial">
            Make a wish, Chamma ✨
          </h2>

          {!isWished ? (
            <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
              Think of something big, chaotic, or secretly wonderful. Tap below to blow out your candles!
            </p>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="p-5 rounded-2xl bg-rose-50/90 border border-rose-200/80 max-w-md mx-auto space-y-1.5 shadow-sm"
            >
              <p className="text-base sm:text-lg font-bold text-rose-700">
                Wish successfully submitted ✨
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                No refunds. No cancellations. 😭
              </p>
              <div className="pt-2">
                <button
                  onClick={handleRelight}
                  className="inline-flex items-center gap-1.5 text-xs text-rose-500 hover:text-rose-700 underline font-medium cursor-pointer"
                >
                  <RotateCcw size={11} />
                  <span>Relight candles to make another wish</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          {!isWished ? (
            <button
              onClick={handleMakeWish}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-md shadow-rose-200/70 hover:shadow-lg hover:shadow-rose-300/80 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer w-full sm:w-auto"
            >
              <span>Make My Wish 🎂</span>
            </button>
          ) : (
            <button
              onClick={onNext}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-md shadow-rose-200/70 hover:shadow-lg hover:shadow-rose-300/80 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer w-full sm:w-auto"
            >
              <span>Final message →</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
