import React from 'react';

const Card = ({ title, body }) => (
  <div
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
  </div>
);

const How = () => {
  return (
    <section className="bg-black text-white py-20 md:py-28" aria-label="How">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <h2
          className="text-[28px] md:text-[36px] lg:text-[44px] mb-8"
          style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 200 }}
        >
          Method.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card
            title="Live‑Impact Broadcasting"
            body="4K aerial and ground, streamed to Vision Pro. Decisions compress to minutes."
          />
          <Card
            title="Blockchain Ledger"
            body="Smart‑contract milestones. Funds release on proof, not promise."
          />
          <Card
            title="Heartbeat Signature"
            body="Biometric close. Consent anchored to cadence—irreplicable, irrevocable."
          />
        </div>
      </div>
    </section>
  );
};

export default How;
