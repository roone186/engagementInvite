import React, { useState } from 'react';

const Gallery = () => {
  // Using high quality placeholder images for the elegant aesthetic
  const images = [
    { src: 'https://images.unsplash.com/photo-1583939000240-690e16fa0143?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Couple ring' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Wedding details' },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Couple hands' },
    { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Together' },
    { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Venue details' },
    { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Decor' },
  ];

  return (
    <section className="py-24 px-4 bg-[var(--ivory-white)] relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mb-4">Our Moments</h2>
          <div className="w-24 h-[1px] bg-[var(--champagne-gold)] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg group relative h-64 md:h-80"
            >
              <div className="absolute inset-0 bg-[#5c0000] opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
