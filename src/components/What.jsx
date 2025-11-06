import React from 'react';
import { motion } from 'framer-motion';

const What = () => {
  return (
    <section className="bg-black text-white py-20 md:py-28" aria-label="Vision">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-[28px] md:text-[36px] lg:text-[44px] mb-6"
          style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 200 }}
        >
          The Vision.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-[16px] md:text-[18px] text-white/80 max-w-3xl"
          style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 400 }}
        >
          We craft luxury narratives that feel inevitable. Precision, restraint, and sensory staging that
          move a market before any specification is spoken.
        </motion.p>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0.6 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mt-10 h-px origin-left"
          style={{ background: 'linear-gradient(90deg,#C0B283,rgba(192,178,131,0))' }}
          aria-hidden
        />
      </div>
    </section>
  );
};

export default What;
