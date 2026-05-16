import React, { useState } from 'react';
import OpeningScreen from './components/OpeningScreen';
import FloatingPetals from './components/FloatingPetals';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Details from './components/Details';
import Location from './components/Location';

function App() {
  const [hasOpened, setHasOpened] = useState(false);
  
  // Set wedding date to July 12, 2026 10:00 AM
  const eventDate = new Date('2026-07-12T10:00:00');

  return (
    <div className="min-h-screen bg-[var(--blush-rose)] selection:bg-[var(--champagne-gold)] selection:text-[#5c0000]">
      {!hasOpened && <OpeningScreen onOpen={() => setHasOpened(true)} />}
      
      {/* Background Petals */}
      <FloatingPetals />

      {/* Main Content */}
      <main className={`transition-opacity duration-1000 ${hasOpened ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <Hero />
        <Countdown targetDate={eventDate} />
        <Details />
        <Location />
        
        {/* Footer */}
        <footer className="py-12 text-center bg-[#5c0000] text-[var(--champagne-gold)]">
          <div className="w-16 h-[1px] bg-[var(--champagne-gold)] mx-auto mb-6 opacity-30"></div>
          <p className="font-serif text-2xl tracking-widest mb-2">Pooja & Santhosh</p>
          <p className="text-xs uppercase tracking-[0.3em] opacity-70">July 12, 2026</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
