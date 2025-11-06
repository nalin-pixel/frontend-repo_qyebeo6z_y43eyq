import React from 'react';
import { motion } from 'framer-motion';

const Service = ({ title, copy, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
    className="border border-[#C0B283]/40 p-6 bg-black"
  >
    <h4 className="text-white mb-2" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 200 }}>{title}</h4>
    <p className="text-white/70 text-sm" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 400 }}>{copy}</p>
  </motion.div>
);

const WhoProofCTA = () => {
  return (
    <section className="bg-black text-white" aria-label="Who Proof CTA">
      {/* WHO: who we serve */}
      <div className="py-20 md:py-24 max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-[28px] md:text-[36px] lg:text-[44px] mb-8"
          style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 200 }}
        >
          Who we arm.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Service title="Flagship Builders" copy="Developers shaping skylines who refuse commodity positioning." />
          <Service title="Heritage Houses" copy="Brands with provenance seeking a modern, surgical re‑frame." delay={0.1} />
          <Service title="Emergent Icons" copy="Founders with a lethal aesthetic and no time for explanations." delay={0.2} />
        </div>
      </div>

      {/* PROOF: sensory vignettes */}
      <div className="border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto bg-black overflow-hidden">
            <motion.img
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop"
              alt="Glass and metal—micro‑edge"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-xs text-white/70">Micro‑edge in glass and metal</div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-auto bg-black overflow-hidden">
            <motion.img
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=1600&auto=format&fit=crop"
              alt="Light revealing form"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-xs text-white/70">Light revealing form</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="min-h-screen flex items-center justify-center bg-black relative">
        <div className="w-full max-w-5xl aspect-[16/9]">
          <iframe
            title="Book a Private Session"
            src="https://calendly.com/luxuryverticalised/strategos?hide_event_type_details=1&hide_gdpr_banner=1"
            className="w-full h-full rounded-sm border border-[#C0B283]/40"
          />
        </div>
        <div className="absolute bottom-6 text-white/70 text-sm">One action. No follow‑up slides.</div>
      </div>
    </section>
  );
};

export default WhoProofCTA;
