/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FloatingParticles } from './components/FloatingParticles';
import { OpeningSection } from './components/OpeningSection';
import { HeroSection } from './components/HeroSection';
import { MessageSection } from './components/MessageSection';
import { AwardsSection } from './components/AwardsSection';
import { JokeSection } from './components/JokeSection';
import { WishSection } from './components/WishSection';
import { FinalSection } from './components/FinalSection';

export default function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  const goToNext = () => {
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, 6));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplay = () => {
    setDirection(-1);
    setCurrentStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen min-h-[100dvh] flex flex-col justify-between relative bg-gradient-to-br from-rose-50 via-slate-50 to-purple-50 text-slate-800 antialiased overflow-x-hidden selection:bg-rose-200 selection:text-rose-900">
      {/* Subtle floating ambient particles and sparkles */}
      <FloatingParticles />

      {/* Main Single-Section Display Container */}
      <main className="flex-1 flex flex-col justify-center items-center py-10 px-3 sm:px-6 relative z-10 w-full max-w-5xl mx-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            initial={{
              opacity: 0,
              x: direction > 0 ? 30 : -30,
              filter: 'blur(4px)',
            }}
            animate={{
              opacity: 1,
              x: 0,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              x: direction > 0 ? -30 : 30,
              filter: 'blur(4px)',
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full flex-1 flex flex-col justify-center items-center"
          >
            {currentStep === 0 && <OpeningSection onNext={goToNext} />}
            {currentStep === 1 && <HeroSection onNext={goToNext} onBack={goToPrev} />}
            {currentStep === 2 && <MessageSection onNext={goToNext} onBack={goToPrev} />}
            {currentStep === 3 && <AwardsSection onNext={goToNext} onBack={goToPrev} />}
            {currentStep === 4 && <JokeSection onNext={goToNext} onBack={goToPrev} />}
            {currentStep === 5 && <WishSection onNext={goToNext} onBack={goToPrev} />}
            {currentStep === 6 && <FinalSection onReplay={handleReplay} onBack={goToPrev} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Minimal, quiet bottom progress indicator (Hidden on opening screen) */}
      {currentStep > 0 && (
        <footer className="relative z-10 pb-5 pt-2 flex flex-col items-center justify-center gap-1.5 pointer-events-none">
          <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/60 shadow-2xs">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <span
                key={step}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentStep === step
                    ? 'w-6 bg-rose-500'
                    : currentStep > step
                    ? 'w-1.5 bg-rose-300'
                    : 'w-1.5 bg-slate-200'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-slate-400 font-mono tracking-wider">
            Part {currentStep} of 6
          </span>
        </footer>
      )}
    </div>
  );
}
