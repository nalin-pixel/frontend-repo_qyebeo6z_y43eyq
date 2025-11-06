import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  const splineRef = useRef(null);
  const [enableParallax, setEnableParallax] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setEnableParallax(
        window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)').matches
      );
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
      {/* 3D hero scene */}
      <div ref={splineRef} className="absolute inset-0 will-change-transform">
        <Spline
          scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette overlay (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      {/* Headline */}
      <div className="relative z-10 flex min-h-screen items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="px-6 md:px-10 lg:px-16 w-full max-w-6xl mx-auto"
        >
          <h1
            className="text-white text-[40px] md:text-[56px] lg:text-[72px] leading-tight tracking-tight"
            style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 200 }}
          >
            Luxury, weaponised for clarity.
          </h1>
          <p
            className="mt-4 text-[17px] md:text-[18px] lg:text-[20px] max-w-3xl"
            style={{ color: '#C0B283', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 400 }}
          >
            We design experiences that cut through the noise—so your audience feels it before they name it.
          </p>
        </motion.div>
      </div>

      {/* Draw-on accent line (no inner initials, no rectangle) */}
      <motion.div
        initial={{ pathLength: 0, opacity: 0.6 }}
        animate={{ pathLength: 1, opacity: 0.9 }}
        transition={{ duration: 1, ease: 'linear' }}
        className="absolute left-1/2 bottom-12 -translate-x-1/2"
        aria-hidden
      >
        <svg width="220" height="20" viewBox="0 0 220 20" fill="none">
          <defs>
            <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C0B283" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <motion.path
            d="M10 10 H210"
            stroke="url(#gold)"
            strokeWidth="1.2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: 'linear' }}
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
