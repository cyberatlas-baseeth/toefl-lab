'use client';
import { useState } from 'react';
import Timer from '@/components/Timer';

export default function WritingPage() {
  const [text, setText] = useState('');
  
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <main className="container" style={{ padding: '3rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Writing Practice</h1>
        <Timer initialMinutes={30} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        <div className="card">
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Independent Writing Task</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
            Do you agree or disagree with the following statement? 
            <strong> It is more important for students to study history and literature than it is for them to study science and mathematics.</strong>
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Use specific reasons and examples to support your opinion.</p>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontWeight: 'bold' }}>Your Essay</span>
            <span style={{ color: wordCount < 300 ? 'var(--error)' : 'var(--success)' }}>
              Word Count: {wordCount} (Target: 300+)
            </span>
          </div>
          <textarea 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Begin typing your essay here..."
            style={{ 
              flex: 1, 
              minHeight: '400px', 
              padding: '1rem', 
              borderRadius: 'var(--radius-md)', 
              border: '1px solid var(--border)', 
              background: 'var(--background)', 
              color: 'var(--foreground)',
              fontFamily: 'inherit',
              fontSize: '1rem',
              resize: 'vertical'
            }}
          />
          <div style={{ marginTop: '1rem', textAlign: 'right' }}>
            <button className="btn btn-primary">Submit Essay</button>
          </div>
        </div>
      </div>
    </main>
  );
}
