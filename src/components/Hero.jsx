import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const splineRef = useRef(null);
  const [enableParallax, setEnableParallax] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setEnableParallax(window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)').matches);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!enableParallax) return;
    const onScroll = () => {
      const y = window.scrollY * 0.5; // 0.5x speed
      if (splineRef.current) {
        splineRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [enableParallax]);

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden" aria-label="Hero">
      {/* 3D Obelisk / Tile */}
      <div ref={splineRef} className="absolute inset-0 will-change-transform">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient softening overlay (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      {/* Draw-on Obelisk Outline (1s, 24fps feel) */}
      <div className="absolute left-1/2 top-[18%] -translate-x-1/2">
        <svg
          width="120"
          height="220"
          viewBox="0 0 120 220"
          fill="none"
          className="opacity-80"
          style={{ transform: 'rotate(1deg)' }}
        >
          <defs>
            <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C0B283" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <path
            d="M60 5 L100 210 L20 210 Z"
            stroke="url(#gold)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            style={{
              strokeDasharray: 600,
              strokeDashoffset: 600,
              animation: 'draw 1s steps(24) forwards',
            }}
          />
          {/* Negative-space LV initials */}
          <path d="M48 110 L48 175 L32 175" stroke="#000" strokeWidth="6" />
          <path d="M72 110 L84 175" stroke="#000" strokeWidth="6" />
        </svg>
      </div>

      {/* Text Block */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="px-6 md:px-10 lg:px-16 w-full max-w-6xl mx-auto">
          <h1
            className="text-white text-[40px] md:text-[56px] lg:text-[72px] leading-tight tracking-tight"
            style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 200 }}
          >
            Upward, onward, only.
          </h1>
          <p
            className="mt-4 text-[17px] md:text-[18px] lg:text-[20px] max-w-2xl"
            style={{ color: '#C0B283', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 400 }}
          >
            We clarify ascent. Signature follows experience.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes draw { to { stroke-dashoffset: 0; } }
      `}</style>
    </section>
  );
};

export default Hero;
