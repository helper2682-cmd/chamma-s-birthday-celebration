import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, RotateCcw, Heart, Sparkles, PartyPopper } from 'lucide-react';
import { fireCelebrationConfetti } from '../utils/confetti';

interface FinalSectionProps {
  onReplay: () => void;
  onBack: () => void;
}

export const FinalSection: React.FC<FinalSectionProps> = ({ onReplay, onBack }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Fire celebration confetti upon reaching final screen
    const confettiTimer = setTimeout(() => {
      fireCelebrationConfetti();
    }, 400);

    // Show final funny popup after 1.8 seconds
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 1800);

    return () => {
      clearTimeout(confettiTimer);
      clearTimeout(popupTimer);
    };
  }, []);

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 max-w-2xl mx-auto relative py-6">
      {/* Back button */}
      <button
        onClick={onBack}
        className="self-start mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors px-3 py-1.5 rounded-full bg-white/60 hover:bg-white border border-slate-200/60 shadow-2xs backdrop-blur-xs cursor-pointer"
        aria-label="Back to make a wish"
      >
        <ArrowLeft size={13} />
        <span>Back</span>
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full glass-card rounded-3xl p-8 sm:p-12 text-center space-y-8 relative overflow-hidden shadow-2xl"
      >
        {/* Decorative Top Badge */}
        <div className="inline-flex items-center gap-2 text-rose-600 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 shadow-2xs">
          <span className="text-sm">🎀</span>
          <PartyPopper size={14} className="text-rose-500 animate-wiggle" />
          <span>Birthday VIP Farewell</span>
          <span className="text-sm">💖</span>
        </div>

        {/* Big Heading */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight font-editorial leading-tight">
            Happy Birthday once again, Chamma! 🎂✨
          </h1>
        </div>

        {/* Heartfelt Text Body */}
        <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
          <p>
            Here’s to another year of laughs, memories, random conversations, and moments we’ll probably laugh about later.
          </p>
          <p className="font-medium text-slate-800">
            Keep smiling, keep being yourself, and have an absolutely amazing year ahead.
          </p>
          <p className="text-rose-600 font-semibold pt-2 text-lg">
            — Your friend ❤️
          </p>
        </div>

        {/* Date Display */}
        <div className="pt-2">
          <div className="inline-block px-5 py-2 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs text-slate-600 font-mono text-sm tracking-widest font-semibold">
            27 • 09 • 2026
          </div>
        </div>

        {/* Replay Button */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={onReplay}
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-md shadow-rose-200/70 hover:shadow-lg hover:shadow-rose-300/80 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <RotateCcw size={16} className="group-hover:-rotate-90 transition-transform duration-300" />
            <span>Replay the Surprise 🔄</span>
          </button>
        </div>
      </motion.div>

      {/* Final Funny Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 18, stiffness: 140 }}
            className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-50 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-rose-200 shadow-2xl text-left"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1">
                  <Sparkles size={11} />
                  Official Protocol
                </span>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  Okay birthday girl…
                </h4>
                <p className="text-xs text-slate-600 pt-0.5 leading-relaxed font-medium">
                  You may now return to normal life. 😭
                </p>
              </div>

              <button
                onClick={() => setShowPopup(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-md text-xs"
                aria-label="Dismiss popup"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
