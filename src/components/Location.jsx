import React from 'react';

const Location = () => {
  return (
    <section className="py-24 px-4 relative z-10 w-full max-w-6xl mx-auto">
      <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        
        {/* Address Info */}
        <div className="w-full lg:w-1/3 bg-[#5c0000] p-10 flex flex-col justify-center items-center text-center text-[var(--ivory-white)]">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[var(--champagne-gold)]">Getting There</h2>
          <div className="w-12 h-[1px] bg-[var(--champagne-gold)] mx-auto mb-8"></div>
          
          <h3 className="font-serif text-2xl mb-4">J.L. Kalyana Mandapam</h3>
          <p className="font-light tracking-wide leading-loose opacity-90 mb-8 text-sm md:text-base">
            Mathur<br/>
            Chennai<br/>
            Tamil Nadu
          </p>
          
          <a 
            href="https://maps.app.goo.gl/zjvyv2w22ZUvqy3o9" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block border border-[var(--champagne-gold)] text-[var(--champagne-gold)] px-8 py-3 uppercase tracking-widest text-xs hover:bg-[var(--champagne-gold)] hover:text-[#5c0000] transition-colors duration-300"
          >
            Open in Maps
          </a>
        </div>

        {/* Map iframe */}
        <div className="w-full lg:w-2/3 h-96 lg:h-auto relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps?q=J.L.Kalyana+mandapam,+mathur&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '400px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
