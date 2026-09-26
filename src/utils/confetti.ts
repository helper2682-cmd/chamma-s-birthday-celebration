import confetti from 'canvas-confetti';

export function fireCelebrationConfetti() {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#f43f5e', '#ec4899', '#fbcfe8', '#fef08a'],
  });

  fire(0.2, {
    spread: 60,
    colors: ['#a855f7', '#d8b4fe', '#fda4af', '#fcd34d'],
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ['#fb7185', '#c084fc', '#e0e7ff', '#fed7aa'],
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors: ['#f43f5e', '#a855f7', '#fbbf24'],
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ['#ffe4e6', '#ede9fe', '#fef3c7'],
  });
}

export function fireGentleWishConfetti() {
  const end = Date.now() + 2.5 * 1000;
  const colors = ['#f43f5e', '#ec4899', '#fbbf24', '#c084fc', '#a78bfa'];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.65 },
      colors: colors,
      zIndex: 9999,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.65 },
      colors: colors,
      zIndex: 9999,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
