import React, { useState } from 'react';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

const Details = () => {
  const cards = [
    {
      id: 'date',
      icon: <Calendar className="w-10 h-10 text-[var(--champagne-gold)] mb-4" />,
      title: 'The Date',
      backTitle: 'When',
      content: (
        <>
          <p className="text-3xl mb-2 font-serif text-[var(--text-dark)]">Sunday</p>
          <p className="text-4xl font-serif text-[#5c0000] mb-2">July 12, 2026</p>
          <p className="text-lg uppercase tracking-widest text-gray-500">at 10:00 AM</p>
        </>
      )
    },
    {
      id: 'venue',
      icon: <MapPin className="w-10 h-10 text-[var(--champagne-gold)] mb-4" />,
      title: 'The Venue',
      backTitle: 'Where',
      content: (
        <>
          <p className="text-4xl font-serif text-[#5c0000] mb-4">J.L. Kalyana Mandapam</p>
          <p className="text-lg text-[var(--text-dark)] leading-relaxed">
            Mathur<br/>
            Chennai<br/>
            Tamil Nadu
          </p>
        </>
      )
    },
    {
      id: 'dress',
      icon: <Sparkles className="w-10 h-10 text-[var(--champagne-gold)] mb-4" />,
      title: 'Dress Code',
      backTitle: 'Attire',
      content: (
        <>
          <p className="text-4xl font-serif text-[#5c0000] mb-4">Formal & Elegant</p>
          <p className="text-lg text-[var(--text-dark)]">
            Please join us in celebrating with your finest evening wear.
          </p>
        </>
      )
    }
  ];

  return (
    <section className="py-24 px-4 relative z-10 w-full max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mb-4">The Details</h2>
        <div className="w-24 h-[1px] bg-[var(--champagne-gold)] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 perspective-1000">
        {cards.map((card, index) => (
          <FlipCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </section>
  );
};

const FlipCard = ({ card, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`flip-card w-full h-80 cursor-pointer bob-element group`}
      style={{ animationDelay: `${index * 0.3}s` }}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card-inner glass-panel rounded-2xl shadow-lg border border-[var(--champagne-gold)] border-opacity-30 ${isFlipped ? 'flipped' : ''}`}>
        
        {/* Front */}
        <div className="flip-card-front bg-[var(--ivory-white)]/80 backdrop-blur-sm rounded-2xl">
          {card.icon}
          <h3 className="font-serif text-4xl tracking-widest text-[#5c0000] uppercase">{card.title}</h3>
          <p className="mt-6 text-sm tracking-[0.2em] text-gray-400 uppercase">Hover / Tap</p>
        </div>

        {/* Back */}
        <div className="flip-card-back bg-gradient-to-br from-[#f8e8e8] to-[var(--ivory-white)] rounded-2xl border border-[var(--champagne-gold)]">
          <h3 className="font-serif text-xl tracking-widest text-[var(--champagne-gold)] uppercase mb-6">{card.backTitle}</h3>
          <div className="px-6">
            {card.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
