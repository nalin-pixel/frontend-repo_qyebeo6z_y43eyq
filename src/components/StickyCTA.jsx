import React from 'react';

const StickyCTA = () => {
  return (
    <a
      href="https://calendly.com/luxuryverticalised/strategos?hide_event_type_details=1&hide_gdpr_banner=1"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-black text-white px-5 py-3 border border-[#C0B283]/70 rounded-sm text-sm transition-all duration-200 hover:shadow-[0.2px_0.2px_0_#C0B283] hover:cursor-crosshair"
      aria-label="Book the Phalanx"
    >
      Book the Phalanx
    </a>
  );
};

export default StickyCTA;
