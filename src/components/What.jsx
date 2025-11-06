import React from 'react';

const What = () => {
  return (
    <section className="bg-black text-white py-20 md:py-28" aria-label="What">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <h2
          className="text-[28px] md:text-[36px] lg:text-[44px] mb-6"
          style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 200 }}
        >
          We don't sell — we clarify.
        </h2>
        <p
          className="text-[16px] md:text-[18px] text-white/80 max-w-3xl"
          style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 400 }}
        >
          ₹5Cr+ inventory placed before concrete cures. We operate on a 20% at‑risk fee against milestone outcomes. When clarity lands, velocity compounds.
        </p>

        {/* Heartbeat Signature GIF */}
        <div className="mt-10 rounded-md border border-[#C0B283]/40 p-4 inline-block">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWNmNDRnNDRueXpoNG80b3lhbWZ2NnVqeGd4bTBqY2ltbGZ0eW8wNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5T06ftQWTK0XS/giphy.gif"
            alt="Heartbeat signature"
            className="w-[380px] h-[80px] object-cover"
          />
          <p className="mt-2 text-xs text-white/60">Auto-plays once. Biometric cadence.</p>
        </div>
      </div>
    </section>
  );
};

export default What;
