import React, { useState } from 'react';
import { Send } from 'lucide-react';

const RSVP = () => {
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section className="py-24 px-4 relative z-10 w-full bg-[#5c0000] text-[var(--ivory-white)]">
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[var(--champagne-gold)] opacity-50"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[var(--champagne-gold)] opacity-50"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[var(--champagne-gold)] opacity-50"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[var(--champagne-gold)] opacity-50"></div>

      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-[var(--champagne-gold)] mb-4">Are you attending?</h2>
        <p className="mb-12 font-light tracking-wider text-sm md:text-base opacity-80">Kindly RSVP by September 15th, 2026</p>

        {status === 'success' ? (
          <div className="glass-panel p-12 rounded-3xl text-center animate-fadeIn border border-[var(--champagne-gold)] bg-transparent">
            <div className="w-20 h-20 mx-auto rounded-full border-2 border-[var(--champagne-gold)] flex items-center justify-center mb-6 float-element">
              <span className="text-3xl text-[var(--champagne-gold)]">✓</span>
            </div>
            <h3 className="font-serif text-3xl text-[var(--champagne-gold)] mb-2">Thank You!</h3>
            <p className="text-[var(--blush-rose)] font-light tracking-wide">Your response has been recorded.<br/>We look forward to seeing you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="group">
              <label className="block text-xs uppercase tracking-widest text-[var(--champagne-gold)] mb-2">Full Name</label>
              <input 
                type="text" 
                required 
                className="w-full bg-transparent border-b border-[var(--champagne-gold)]/50 py-3 text-[var(--ivory-white)] focus:outline-none focus:border-[var(--champagne-gold)] transition-colors"
                placeholder="Jane Doe"
              />
            </div>
            
            <div className="group">
              <label className="block text-xs uppercase tracking-widest text-[var(--champagne-gold)] mb-2">Email Address</label>
              <input 
                type="email" 
                required 
                className="w-full bg-transparent border-b border-[var(--champagne-gold)]/50 py-3 text-[var(--ivory-white)] focus:outline-none focus:border-[var(--champagne-gold)] transition-colors"
                placeholder="jane@example.com"
              />
            </div>

            <div className="group">
              <label className="block text-xs uppercase tracking-widest text-[var(--champagne-gold)] mb-4">Will you attend?</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="attending" value="yes" required className="accent-[var(--champagne-gold)]" />
                  <span className="font-light tracking-wide">Joyfully Accept</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="attending" value="no" className="accent-[var(--champagne-gold)]" />
                  <span className="font-light tracking-wide">Regretfully Decline</span>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full mt-8 bg-[var(--champagne-gold)] text-[#5c0000] font-serif text-xl py-4 flex justify-center items-center gap-3 hover:bg-[var(--ivory-white)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : (
                <>
                  Confirm RSVP <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default RSVP;
