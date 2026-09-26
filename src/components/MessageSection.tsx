import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Heart, Sparkles, Quote } from 'lucide-react';

interface MessageSectionProps {
  onNext: () => void;
  onBack: () => void;
}

export const MessageSection: React.FC<MessageSectionProps> = ({ onNext, onBack }) => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 max-w-2xl mx-auto relative">
      {/* Back button */}
      <button
        onClick={onBack}
        className="self-start mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors px-3 py-1.5 rounded-full bg-white/60 hover:bg-white border border-slate-200/60 shadow-2xs backdrop-blur-xs cursor-pointer"
        aria-label="Back to birthday hero"
      >
        <ArrowLeft size={13} />
        <span>Back</span>
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl space-y-8"
      >
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-56 h-56 bg-rose-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

        {/* Header kicker */}
        <div className="flex items-center justify-between border-b border-rose-100/80 pb-4">
          <div className="flex items-center gap-2 text-rose-500 text-xs font-semibold uppercase tracking-wider">
            <span className="text-base">🌸</span>
            <Heart size={14} className="fill-rose-400 text-rose-500 animate-pulse" />
            <span>A handwritten note for you</span>
          </div>
          <span className="text-[11px] text-rose-500 font-mono bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-100">
            For Chamma only 🎀
          </span>
        </div>

        {/* Message Content */}
        <div className="relative space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed sm:leading-loose">
          <Quote className="text-rose-200/70 absolute -top-4 -left-2 sm:-left-4 rotate-180" size={36} />

          <p className="relative z-10 pt-2 font-medium">
            Some people just make normal days more fun by being around. You’re definitely one of those people.
          </p>

          <p className="relative z-10">
            I hope this new year of your life brings you loads of happiness, amazing memories, random reasons to laugh, and everything you genuinely deserve.
          </p>

          <p className="relative z-10 font-medium text-slate-800">
            Stay happy, stay yourself, and keep being the wonderfully chaotic Chamma that everyone knows. ✨
          </p>
        </div>

        {/* Signature note */}
        <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-rose-100/80">
          <span className="italic font-editorial text-sm text-rose-700">From someone who appreciates your chaos</span>
          <Sparkles size={14} className="text-rose-400" />
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={onNext}
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-md shadow-rose-200/70 hover:shadow-lg hover:shadow-rose-300/80 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Enough emotions 😭 →</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
