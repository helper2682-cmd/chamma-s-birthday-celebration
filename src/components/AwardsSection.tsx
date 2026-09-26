import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Award, CheckCircle2 } from 'lucide-react';

interface AwardsSectionProps {
  onNext: () => void;
  onBack: () => void;
}

interface AwardItem {
  id: string;
  icon: string;
  title: string;
  category: string;
  description: string;
  badge: string;
}

const AWARDS: AwardItem[] = [
  {
    id: 'overthinker',
    icon: '🏆',
    title: 'Professional Overthinker',
    category: 'Analysis & Simulations',
    description: 'Has already thought about 17 possible outcomes before you even finish your sentence.',
    badge: 'Certified 99.9% Accuracy',
  },
  {
    id: 'chaos',
    icon: '😂',
    title: 'Certified Chaos Creator',
    category: 'Event Coordination',
    description: 'Turns a quick 10-minute errand into an unpredictable 3-hour legendary adventure.',
    badge: 'Zero Regrets Registered',
  },
  {
    id: 'random',
    icon: '💀',
    title: 'CEO of Random Conversations',
    category: 'Verbal Parkour',
    description: 'Smoothly jumps from deep philosophy to what ducks think about bread without pausing for breath.',
    badge: '100% Conversational Agility',
  },
  {
    id: 'lifetime',
    icon: '✨',
    title: 'Lifetime Achievement in Being Chamma',
    category: 'Hall of Fame',
    description: 'Consistently brightening everyone’s day, dropping top-tier humor, and being 100% irreplaceable.',
    badge: 'Unanimous First Ballot',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export const AwardsSection: React.FC<AwardsSectionProps> = ({ onNext, onBack }) => {
  const [openedCards, setOpenedCards] = useState<Record<string, boolean>>({
    overthinker: true, // open first by default so the user immediately understands interaction
  });

  const toggleCard = (id: string) => {
    setOpenedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const revealedCount = Object.values(openedCards).filter(Boolean).length;

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 max-w-3xl mx-auto relative py-6">
      {/* Back button */}
      <button
        onClick={onBack}
        className="self-start mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors px-3 py-1.5 rounded-full bg-white/60 hover:bg-white border border-slate-200/60 shadow-2xs backdrop-blur-xs cursor-pointer"
        aria-label="Back to little message"
      >
        <ArrowLeft size={13} />
        <span>Back</span>
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full glass-card rounded-3xl p-6 sm:p-10 shadow-xl space-y-6"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/80">
            <Award size={13} className="text-amber-600" />
            <span>Official 2026 Honors</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 tracking-tight font-editorial">
            The Chamma Awards 🎖️
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
            Voted unanimously by the committee. Tap each award to reveal the jury verdict.
          </p>
          <div className="text-xs text-slate-400 font-mono pt-1">
            {revealedCount} of 4 citations unlocked
          </div>
        </div>

        {/* 4 Cards Grid with staggered entrance animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
        >
          {AWARDS.map((award) => {
            const isRevealed = !!openedCards[award.id];

            return (
              <motion.button
                variants={cardVariants}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                type="button"
                key={award.id}
                onClick={() => toggleCard(award.id)}
                className={`text-left rounded-2xl p-5 transition-colors duration-300 relative border cursor-pointer ${
                  isRevealed
                    ? 'bg-white/95 border-rose-200/90 shadow-md ring-1 ring-rose-200/40'
                    : 'bg-white/60 hover:bg-white/80 border-slate-200/70 hover:border-rose-200/80 shadow-2xs hover:shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-100 to-amber-100 flex items-center justify-center text-xl shrink-0 shadow-2xs">
                    {award.icon}
                  </div>
                  {isRevealed ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80">
                      <CheckCircle2 size={11} />
                      Revealed
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100 animate-pulse">
                      Tap to reveal ✨
                    </span>
                  )}
                </div>

                <div className="mt-3">
                  <h3 className="text-base font-bold text-slate-800 tracking-tight">
                    {award.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {award.category}
                  </p>
                </div>

                <AnimatePresence>
                  {isRevealed && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-3 pt-3 border-t border-slate-100 space-y-2 overflow-hidden"
                    >
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        “{award.description}”
                      </p>
                      <div className="text-[10px] text-slate-400 font-mono tracking-wide">
                        Badge: {award.badge}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Next Button */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={onNext}
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-md shadow-rose-200/70 hover:shadow-lg hover:shadow-rose-300/80 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Show me the evidence 🧪</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
