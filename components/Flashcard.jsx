'use client';
import { useState } from 'react';

export default function Flashcard({ word, definition, example }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="card" 
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ 
        height: '250px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        cursor: 'pointer',
        textAlign: 'center',
        perspective: '1000px'
      }}
    >
      <div style={{ 
        width: '100%', 
        height: '100%', 
        position: 'relative', 
        transition: 'transform 0.6s', 
        transformStyle: 'preserve-3d', 
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' 
      }}>
        <div style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>
          {word}
        </div>
        <div style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{definition}</p>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8', fontStyle: 'italic' }}>"{example}"</p>
        </div>
      </div>
    </div>
  );
}
