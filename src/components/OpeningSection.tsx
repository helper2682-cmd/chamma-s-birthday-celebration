import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface OpeningSectionProps {
  onNext: () => void;
}

export const OpeningSection: React.FC<OpeningSectionProps> = ({ onNext }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 700);
    const timer2 = setTimeout(() => setStage(2), 2200);
    const timer3 = setTimeout(() => setStage(3), 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 max-w-xl mx-auto">
      <div className="w-full glass-card rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden shadow-xl border border-white/80">
        {/* Adorable decorative top accent */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-rose-600 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-rose-50/90 border border-rose-200/70 shadow-2xs"
        >
          <span className="text-sm">💌</span>
          <span>A very special delivery for Chamma</span>
          <Sparkles size={13} className="text-rose-400 animate-spin" style={{ animationDuration: '4s' }} />
        </motion.div>

        <div className="space-y-6 min-h-[170px] flex flex-col items-center justify-center">
          {stage >= 1 && (
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight font-editorial"
            >
              Hey Chamma 👀
            </motion.h1>
          )}

          {stage >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-slate-600 font-medium"
            >
              Someone has a birthday today…
            </motion.p>
          )}

          {stage >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', damping: 14, stiffness: 120 }}
              className="pt-2"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-rose-600 tracking-tight font-editorial block">
                Wait… YOU?! 😭🎂
              </span>
            </motion.div>
          )}
        </div>

        {stage >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="pt-4"
          >
            <button
              onClick={onNext}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-lg shadow-rose-200/80 hover:shadow-xl hover:shadow-rose-300/80 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Open Your Surprise ✨</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
