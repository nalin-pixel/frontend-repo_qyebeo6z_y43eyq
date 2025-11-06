import React from 'react';

const HelmetCard = ({ title, metric }) => (
  <div className="border border-[#C0B283]/40 p-5 bg-black">
    <div className="w-14 h-14 mb-3" aria-hidden>
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" stroke="#C0B283" strokeWidth="1">
        <path d="M12 28 C12 16 22 8 32 8 C42 8 52 16 52 28 V44 H12 V28 Z" />
        <path d="M12 44 H52" />
      </svg>
    </div>
    <h4 className="text-white" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 200 }}>{title}</h4>
    <p className="text-white/70 text-sm" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 400 }}>{metric}</p>
  </div>
);

const WhoProofCTA = () => {
  return (
    <section className="bg-black text-white" aria-label="Who Proof CTA">
      {/* WHO */}
      <div className="py-20 md:py-24 max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-[28px] md:text-[36px] lg:text-[44px] mb-8" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 200 }}>
          Phalanx of 0.3%
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <HelmetCard title="Operator" metric="2,400 hrs live" />
          <HelmetCard title="Architect" metric="11 towers" />
          <HelmetCard title="Ledger" metric="₹1,200Cr cleared" />
          <HelmetCard title="Signature" metric="97% close" />
        </div>
      </div>

      {/* PROOF */}
      <div className="border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto bg-black">
            <img
              src="https://images.unsplash.com/photo-1542042161784-26ab9e041e88?q=80&w=1600&auto=format&fit=crop"
              alt="60× metal card micro‑edge"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-xs text-white/70">60× metal card micro‑edge</div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-auto bg-black">
            <img
              src="https://images.unsplash.com/photo-1608564697071-14459be1cf7d?q=80&w=1600&auto=format&fit=crop"
              alt="UV‑365nm security ink reveal"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-xs text-white/70">UV‑365nm security ink reveal</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="min-h-screen flex items-center justify-center bg-black relative">
        <div className="w-full max-w-5xl aspect-[16/9]">
          <iframe
            title="Book the Phalanx"
            src="https://calendly.com/luxuryverticalised/strategos?hide_event_type_details=1&hide_gdpr_banner=1"
            className="w-full h-full rounded-sm border border-[#C0B283]/40"
          />
        </div>
        <div className="absolute bottom-6 text-white/70 text-sm">One knock only. No second slide.</div>
      </div>
    </section>
  );
};

export default WhoProofCTA;
