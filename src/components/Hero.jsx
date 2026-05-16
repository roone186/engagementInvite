import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background with Parallax */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[var(--blush-rose)] opacity-50 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div className="relative z-10 text-center flex flex-col items-center px-4 w-full">
        <h2 className="text-[var(--champagne-gold)] uppercase tracking-[0.4em] text-sm md:text-xl mb-6 float-element" style={{ animationDelay: '0.2s' }}>
          We are getting engaged
        </h2>
        
        <div className="relative bob-element w-full flex justify-center items-center gap-4 md:gap-8 flex-wrap">
          <h1 className="font-serif text-6xl md:text-[8rem] lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-dark)] via-[#5c0000] to-[var(--text-dark)] leading-none">
            Pooja
          </h1>
          <span className="font-serif text-5xl md:text-7xl lg:text-[6rem] text-[var(--champagne-gold)] italic font-light opacity-80 mt-4 md:mt-0">
            &
          </span>
          <h1 className="font-serif text-6xl md:text-[8rem] lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-dark)] via-[#5c0000] to-[var(--text-dark)] leading-none">
            Santhosh
          </h1>
        </div>
        
        <div className="mt-16 w-[1px] h-32 bg-gradient-to-b from-[var(--champagne-gold)] to-transparent float-element-reverse" style={{ animationDelay: '0.5s' }} />
      </div>
    </section>
  );
};

export default Hero;
