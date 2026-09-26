import React, { useMemo } from 'react';

export const FloatingParticles: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      x: (i * 19 + 7) % 94 + 3,
      y: (i * 29 + 11) % 88 + 6,
      size: (i % 3) * 6 + 10,
      duration: (i % 4) * 2 + 5,
      delay: (i % 5) * 0.7,
      opacity: i % 3 === 0 ? 0.45 : 0.3,
      type: i % 4 === 0 ? 'heart' : i % 4 === 1 ? 'sparkle' : i % 4 === 2 ? 'star' : 'bubble',
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Soft pastel ambient glow orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-rose-200/45 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1.2s' }} />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-200/35 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '2.4s' }} />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-amber-100/45 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '3.6s' }} />

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `float-gentle ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          {p.type === 'heart' ? (
            <svg
              width={p.size * 0.95}
              height={p.size * 0.95}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-pink-300 drop-shadow-xs"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : p.type === 'sparkle' ? (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill="none"
              className="text-rose-400 drop-shadow-xs"
            >
              <path
                d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                fill="currentColor"
              />
            </svg>
          ) : p.type === 'star' ? (
            <svg
              width={p.size * 0.9}
              height={p.size * 0.9}
              viewBox="0 0 24 24"
              fill="none"
              className="text-purple-300 drop-shadow-xs"
            >
              <circle cx="12" cy="12" r="3" fill="currentColor" />
              <path
                d="M12 3v3m0 12v3M3 12h3m12 0h3"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <div
              className="rounded-full bg-gradient-to-tr from-pink-300/80 to-purple-300/80 border border-white/60 shadow-xs"
              style={{
                width: `${p.size * 0.75}px`,
                height: `${p.size * 0.75}px`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
