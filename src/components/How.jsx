import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, body, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
    className="group border border-[#C0B283]/40 rounded-sm p-6 md:p-8 bg-black transition-all duration-200 hover:shadow-[0.2px_0.2px_0_#C0B283]"
    style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0.0, 0.2, 1)' }}
  >
    <h3
      className="text-white text-xl mb-3"
      style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 200 }}
    >
      {title}
    </h3>
    <p
      className="text-white/80 text-sm leading-relaxed"
      style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 400 }}
    >
      {body}
    </p>
  </motion.div>
);

const How = () => {
  return (
    <section className="bg-black text-white py-20 md:py-28" aria-label="How">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-[28px] md:text-[36px] lg:text-[44px] mb-8"
          style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 200 }}
        >
          How impact lands.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card
            title="Scent‑locked Memory"
            body="Fragrance‑anchored experiences imprint attention at a limbic level."
            delay={0}
          />
          <Card
            title="Material Theatre"
            body="Glass, metal, and light choreographed to reveal inevitability—not options."
            delay={0.1}
          />
          <Card
            title="Precision Timing"
            body="Moments engineered to compress decision cycles without raising volume."
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default How;
