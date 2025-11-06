import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import What from './components/What';
import How from './components/How';
import WhoProofCTA from './components/WhoProofCTA';
import StickyCTA from './components/StickyCTA';

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.title = 'Luxury Verticalised | Sold Before the Crane Stops';
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[1px] bg-[#C0B283] z-40"
        style={{ width: `${progress}%` }}
      />

      <Hero />
      <What />
      <How />
      <WhoProofCTA />

      {/* Single CTA sitewide */}
      <StickyCTA />
    </div>
  );
};

export default App;
