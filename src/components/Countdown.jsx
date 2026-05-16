import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-4 flex justify-center items-center w-full relative z-10">
      <div className="glass-panel rounded-3xl p-8 md:p-12 w-full max-w-4xl mx-auto float-element-reverse flex flex-wrap justify-center gap-6 md:gap-12 shadow-xl border border-white/40">
        {timeBlocks.map((block, index) => (
          <div key={block.label} className="flex flex-col items-center" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="font-serif text-4xl md:text-6xl text-[#5c0000] mb-2">{String(block.value).padStart(2, '0')}</div>
            <div className="uppercase tracking-[0.2em] text-[var(--champagne-gold)] text-xs md:text-sm">{block.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
