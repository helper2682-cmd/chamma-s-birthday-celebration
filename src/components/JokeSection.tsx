import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Zap, Sparkles, RefreshCw, HelpCircle, CheckCircle2 } from 'lucide-react';

interface JokeSectionProps {
  onNext: () => void;
  onBack: () => void;
}

interface FactCard {
  id: string;
  emoji: string;
  title: string;
  tag: string;
  punchline: string;
}

const FACTS: FactCard[] = [
  {
    id: 'texting',
    emoji: '📱',
    title: 'The Texting Paradox',
    tag: 'Communication',
    punchline: 'Response time is either 0.4 seconds with 8 consecutive messages, or 5 business days. There is legally no in-between.',
  },
  {
    id: 'punctuality',
    emoji: '⏳',
    title: 'The "5 Minutes Away" Metric',
    tag: 'Relativity Theory',
    punchline: 'When Chamma says "I am literally on my way", scientists estimate she is still deciding which jacket matches her emotional state.',
  },
  {
    id: 'playlist',
    emoji: '🎧',
    title: 'The Emotional DJ Shift',
    tag: 'Music Biology',
    punchline: 'Capable of transitioning from deeply emotional acoustic heartbreak directly into a high-tempo club banger in 0.2 seconds without flinching.',
  },
  {
    id: 'food',
    emoji: '🍟',
    title: 'The Food Mystery',
    tag: 'Nutrition Science',
    punchline: 'Will dramatically announce she is starving and needs a feast, then eats three fries and announces she is full for the week.',
  },
  {
    id: 'shopping',
    emoji: '🛍️',
    title: 'The Cart Abandonment Protocol',
    tag: 'Economics',
    punchline: 'Adds $420 worth of aesthetic items to an online cart, stares at the total in silence, closes the tab, and says "I saved so much money today."',
  },
  {
    id: 'late_night',
    emoji: '🌙',
    title: 'The 2:00 AM Brain Tab',
    tag: 'Philosophy',
    punchline: 'Exhausted all day, but suddenly possesses the mental energy to research ancient ruins, redecorate a room, or solve universe dilemmas at 2 AM.',
  },
];

const CHAOS_DIAGNOSES = [
  'Currently running 37 mental tabs with background music playing in at least three of them.',
  'Dangerously high probability of saying "I\'m literally just a girl" after making an unhinged decision.',
  'Looking frantically for her phone while holding it directly in her left hand.',
  'Will send a 4-minute voice note that starts with "Wait so basically..." and ends with an unrelated conspiracy.',
  'Energy level: 10% for responsible tasks, 120% for spontaneous late-night adventures.',
  'Diagnosed with an acute allergy to waking up before 10 AM on weekends.',
  'Can spot drama from 4 miles away with pinpoint sonar accuracy.',
];

const DECISIONS = [
  {
    q: 'Should you sleep early tonight?',
    answer: 'Nice try. You will still end up watching random reels until 1:47 AM.',
  },
  {
    q: 'Should you buy that cute thing you saw?',
    answer: 'Algorithm says YES. You worked hard being Chamma all week. It is basically an investment.',
  },
  {
    q: 'Should you overthink that message you sent?',
    answer: 'Too late. You have already simulated 9 parallel timelines where it went wrong.',
  },
  {
    q: 'Are you ready for another year of chaotic adulting?',
    answer: 'Ready or not, you are going to make it iconic anyway. 💅✨',
  },
];

export const JokeSection: React.FC<JokeSectionProps> = ({ onNext, onBack }) => {
  const [chaosIndex, setChaosIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [openedFact, setOpenedFact] = useState<string | null>('texting');
  const [selectedDilemma, setSelectedDilemma] = useState<number | null>(0);

  const scanChaos = () => {
    setIsScanning(true);
    setTimeout(() => {
      setChaosIndex((prev) => (prev + 1) % CHAOS_DIAGNOSES.length);
      setIsScanning(false);
    }, 400);
  };

  const toggleFact = (id: string) => {
    setOpenedFact((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 max-w-3xl mx-auto relative py-6">
      {/* Back button */}
      <button
        onClick={onBack}
        className="self-start mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors px-3 py-1.5 rounded-full bg-white/60 hover:bg-white border border-slate-200/60 shadow-2xs backdrop-blur-xs cursor-pointer"
        aria-label="Back to awards"
      >
        <ArrowLeft size={13} />
        <span>Back</span>
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full glass-card rounded-3xl p-6 sm:p-10 shadow-xl space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            <Zap size={13} className="text-rose-500" />
            <span>Official Scientific Dossier</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 tracking-tight font-editorial">
            The Chamma Fact Sheet 🧪
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
            100% peer-reviewed, independently audited, and verified by credible witnesses (everyone who knows you).
          </p>
        </div>

        {/* Feature 1: The Live Chaos Diagnostic Machine */}
        <div className="rounded-2xl p-5 bg-gradient-to-br from-rose-50/90 to-purple-50/80 border border-rose-200/70 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={13} />
              Real-Time Chaos Scan
            </span>
            <span className="text-[11px] font-mono font-medium text-purple-700 bg-purple-100/80 px-2 py-0.5 rounded-full">
              Status: 104.2% Iconic
            </span>
          </div>

          <div className="min-h-[56px] flex items-center justify-center p-3 rounded-xl bg-white/90 border border-slate-100 shadow-2xs text-center">
            <p className={`text-sm sm:text-base font-semibold text-slate-800 transition-opacity duration-300 ${isScanning ? 'opacity-30' : 'opacity-100'}`}>
              “{CHAOS_DIAGNOSES[chaosIndex]}”
            </p>
          </div>

          <div className="flex justify-end pt-1">
            <button
              onClick={scanChaos}
              disabled={isScanning}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 bg-white hover:bg-rose-50 border border-rose-200 px-3.5 py-1.5 rounded-full shadow-2xs transition-all active:scale-95 cursor-pointer"
            >
              <RefreshCw size={12} className={isScanning ? 'animate-spin' : ''} />
              <span>{isScanning ? 'Analyzing brainwaves...' : 'Scan Again 🔄'}</span>
            </button>
          </div>
        </div>

        {/* Feature 2: Expandable Fun Facts Grid */}
        <div className="space-y-3">
          <div className="text-left">
            <h3 className="text-sm font-bold text-slate-800 tracking-tight uppercase tracking-wider">
              Documented Behavioral Patterns (Tap to inspect)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FACTS.map((fact) => {
              const isOpen = openedFact === fact.id;
              return (
                <button
                  key={fact.id}
                  type="button"
                  onClick={() => toggleFact(fact.id)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isOpen
                      ? 'bg-white/95 border-rose-300 shadow-md ring-1 ring-rose-200/50'
                      : 'bg-white/70 hover:bg-white/90 border-slate-200/70 hover:border-rose-200 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{fact.emoji}</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">
                        {fact.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 pt-2 border-t border-slate-100 text-xs text-slate-600 leading-relaxed font-medium"
                      >
                        {fact.punchline}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature 3: Dilemma Oracle */}
        <div className="rounded-2xl p-4 sm:p-5 bg-white/80 border border-slate-200/80 shadow-2xs space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <HelpCircle size={13} className="text-purple-500" />
            <span>Chamma Dilemma Solver</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {DECISIONS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDilemma(idx)}
                className={`text-xs px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  selectedDilemma === idx
                    ? 'bg-rose-500 text-white font-medium shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-600'
                }`}
              >
                {item.q}
              </button>
            ))}
          </div>

          {selectedDilemma !== null && (
            <motion.div
              key={selectedDilemma}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3.5 rounded-xl bg-purple-50/80 border border-purple-100 text-xs sm:text-sm text-purple-900 font-medium leading-relaxed"
            >
              💡 <strong>Verdict:</strong> {DECISIONS[selectedDilemma].answer}
            </motion.div>
          )}
        </div>

        {/* Next Button */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={onNext}
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-md shadow-rose-200/70 hover:shadow-lg hover:shadow-rose-300/80 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Okay, I’ve been exposed enough 😭 →</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
