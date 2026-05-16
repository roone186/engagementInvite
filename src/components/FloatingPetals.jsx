import React, { useEffect, useState } from 'react';

const FloatingPetals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate petals
    const newPetals = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 10 + 10}s`, // 10s to 20s
      animationDelay: `${Math.random() * 15}s`,
      size: `${Math.random() * 15 + 10}px`,
      color: Math.random() > 0.5 ? '#f8e8e8' : '#e6d0d0', // Slight variations of blush rose
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute rounded-full"
          style={{
            left: petal.left,
            bottom: '-20px',
            width: petal.size,
            height: petal.size,
            backgroundColor: petal.color,
            borderRadius: '50% 0 50% 50%',
            boxShadow: 'inset 2px 2px 5px rgba(255,255,255,0.5)',
            opacity: 0,
            animation: `driftUp ${petal.animationDuration} linear ${petal.animationDelay} infinite`,
            transform: 'rotate(45deg)'
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
