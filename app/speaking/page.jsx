'use client';
import { useState } from 'react';
import Timer from '@/components/Timer';
import { Mic, Square } from 'lucide-react';

export default function SpeakingPage() {
  const [recording, setRecording] = useState(false);
  const [preparationTime, setPreparationTime] = useState(true);

  return (
    <main className="container" style={{ padding: '3rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Speaking Practice</h1>
        <Timer initialMinutes={1} />
      </div>

      <div className="card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '3rem 2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Independent Speaking Task</h3>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.6' }}>
          Some people believe that university students should be required to attend classes. Others believe that going to classes should be optional for students. Which point of view do you agree with?
        </p>

        <div style={{ marginBottom: '2rem' }}>
          {preparationTime ? (
            <p style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Preparation Time: 15 seconds</p>
          ) : (
            <p style={{ color: 'var(--error)', fontWeight: 'bold' }}>Speaking Time: 45 seconds</p>
          )}
        </div>

        <button 
          onClick={() => setRecording(!recording)}
          className="btn" 
          style={{ 
            background: recording ? 'var(--error)' : 'var(--primary)', 
            color: 'white', 
            padding: '1rem 2rem', 
            borderRadius: 'var(--radius-full)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.125rem'
          }}
        >
          {recording ? <><Square size={20} /> Stop Recording</> : <><Mic size={20} /> Start Recording</>}
        </button>
      </div>
    </main>
  );
}
