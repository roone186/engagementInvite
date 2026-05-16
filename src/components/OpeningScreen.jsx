import React, { useState } from 'react';

const OpeningScreen = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      if (onOpen) onOpen();
    }, 1500); // Wait for animation to finish
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden"
      onClick={handleOpen}
      style={{
        pointerEvents: isOpen ? 'none' : 'auto',
      }}
    >
      {/* Left Curtain */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-full bg-[#8b0000] border-r-2 border-[#c9a96e] shadow-2xl flex items-center justify-end pr-4 transition-transform duration-[1.5s] ease-in-out"
        style={{
          transform: isOpen ? 'translateX(-100%)' : 'translateX(0)',
          boxShadow: 'inset -10px 0 20px rgba(0,0,0,0.3)'
        }}
      >
        <div className="text-[#c9a96e] opacity-50 font-serif text-2xl tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Pooja & Santhosh
        </div>
      </div>
      
      {/* Right Curtain */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-[#8b0000] border-l-2 border-[#c9a96e] shadow-2xl flex items-center justify-start pl-4 transition-transform duration-[1.5s] ease-in-out"
        style={{
          transform: isOpen ? 'translateX(100%)' : 'translateX(0)',
          boxShadow: 'inset 10px 0 20px rgba(0,0,0,0.3)'
        }}
      >
        <div className="text-[#c9a96e] opacity-50 font-serif text-2xl tracking-widest" style={{ writingMode: 'vertical-rl' }}>
          Engagement
        </div>
      </div>

      {/* Center Seal / Text */}
      <div 
        className={`absolute z-10 flex flex-col items-center justify-center text-center px-4 w-full transition-opacity duration-700 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="w-32 h-32 rounded-full border-2 border-[#c9a96e] flex items-center justify-center bg-[#5c0000] shadow-lg mb-8 float-element pulse-glow">
          <span className="font-serif text-[#c9a96e] text-5xl">P&S</span>
        </div>
        <h1 className="font-serif text-[#f8e8e8] text-5xl md:text-8xl lg:text-[7rem] tracking-wider mb-6 drop-shadow-lg leading-tight">Pooja & Santhosh</h1>
        <p className="text-[#c9a96e] uppercase tracking-[0.4em] text-base md:text-xl font-light">Tap to Open</p>
      </div>
    </div>
  );
};

export default OpeningScreen;
