'use client';
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function Timer({ initialMinutes = 20, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onTimeUp) onTimeUp();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--secondary)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border)' }}>
      <Clock size={16} color="var(--primary)" />
      <span style={{ fontWeight: 'bold', fontFamily: 'monospace', fontSize: '1.125rem' }}>
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
}
