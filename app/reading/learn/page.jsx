'use client';

import { useState } from 'react';
import { readingLessons } from '@/lib/data';
import Link from 'next/link';

export default function ReadingLearnPage() {
  const [activeLessonId, setActiveLessonId] = useState(readingLessons[0].id);
  
  const activeLesson = readingLessons.find(l => l.id === activeLessonId);

  return (
    <main className="container" style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/reading" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>
          &larr; Back to Reading Hub
        </Link>
        <h1 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Learn Reading Strategies</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '3rem', alignItems: 'flex-start' }}>
        {/* Sidebar */}
        <div className="card" style={{ padding: '1.5rem', position: 'sticky', top: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            Lessons
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {readingLessons.map(lesson => (
              <li key={lesson.id}>
                <button 
                  onClick={() => setActiveLessonId(lesson.id)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    border: 'none',
                    background: activeLessonId === lesson.id ? 'var(--primary)' : 'transparent',
                    color: activeLessonId === lesson.id ? 'var(--primary-foreground)' : 'var(--foreground)',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: activeLessonId === lesson.id ? '600' : '400',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {lesson.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="card" style={{ padding: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>{activeLesson.title}</h2>
          <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
            {activeLesson.content.split('\n').map((paragraph, idx) => (
              <p key={idx} style={{ marginBottom: paragraph ? '1rem' : '0' }}>
                {paragraph}
              </p>
            ))}
          </div>
          
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.1)', textAlign: 'right' }}>
            <Link href="/reading/practice" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
              Ready to Practice?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
