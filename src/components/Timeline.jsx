import React, { useEffect, useRef } from 'react';

const Timeline = () => {
  const events = [
    { time: '5:00 PM', title: 'Welcome Drinks', description: 'Arrive and enjoy refreshing beverages as guests gather.', align: 'left' },
    { time: '6:00 PM', title: 'Engagement Ceremony', description: 'The official ring exchange and blessings.', align: 'right' },
    { time: '7:30 PM', title: 'Photo Session', description: 'Capture beautiful moments with the couple.', align: 'left' },
    { time: '8:30 PM', title: 'Gala Dinner', description: 'A lavish feast celebrating the union.', align: 'right' },
    { time: '10:00 PM', title: 'Music & Dance', description: 'Celebrate the night away on the dance floor.', align: 'left' },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent to-[var(--ivory-white)] relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mb-4">Program of Events</h2>
          <div className="w-24 h-[1px] bg-[var(--champagne-gold)] mx-auto"></div>
        </div>

        <div className="relative flex flex-col items-center gap-12">
          {events.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ event, index }) => {
  return (
    <div className="relative flex flex-col items-center text-center max-w-md w-full group">
      <div className="text-[var(--champagne-gold)] font-serif text-2xl mb-2">{event.time}</div>
      <div className="w-2 h-2 rounded-full bg-[var(--champagne-gold)] mb-4"></div>
      <div className="glass-panel p-8 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-2 w-full">
        <h3 className="font-serif text-3xl text-[#5c0000] mb-3">{event.title}</h3>
        <p className="text-base text-gray-600 leading-relaxed">{event.description}</p>
      </div>
    </div>
  );
};

export default Timeline;
