'use client';
import { useState } from 'react';

export default function QuestionBlock({ question, options, correctAnswer }) {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx);
  };

  const handleCheck = () => {
    if (selected !== null) {
      setShowResult(true);
    }
  };

  return (
    <div className="card" style={{ marginBottom: '1.5rem' }}>
      <h4 style={{ marginBottom: '1rem' }}>{question}</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {options.map((opt, idx) => {
          let bg = 'var(--background)';
          let border = '1px solid var(--border)';
          if (showResult) {
            if (idx === correctAnswer) {
              bg = 'rgba(16, 185, 129, 0.1)';
              border = '1px solid var(--success)';
            } else if (idx === selected) {
              bg = 'rgba(239, 68, 68, 0.1)';
              border = '1px solid var(--error)';
            }
          } else if (idx === selected) {
            bg = 'rgba(59, 130, 246, 0.1)';
            border = '1px solid var(--primary)';
          }

          return (
            <div 
              key={idx} 
              onClick={() => handleSelect(idx)}
              style={{ padding: '1rem', background: bg, border, borderRadius: 'var(--radius-md)', cursor: showResult ? 'default' : 'pointer', transition: 'var(--transition)' }}
            >
              {opt}
            </div>
          );
        })}
      </div>
      {!showResult && (
        <button onClick={handleCheck} className="btn btn-primary" disabled={selected === null}>
          Check Answer
        </button>
      )}
    </div>
  );
}
