'use client';

import { useState } from 'react';
import Link from 'next/link';
import { readingPracticeTests } from '@/lib/data';
import Timer from '@/components/Timer';

export default function ReadingPracticePage() {
  const [activeTestId, setActiveTestId] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const activeTest = readingPracticeTests.find(t => t.id === activeTestId);

  const handleAnswerSelect = (questionId, optionIndex) => {
    if (showResults) return;
    setAnswers({
      ...answers,
      [questionId]: optionIndex
    });
  };

  const calculateScore = () => {
    if (!activeTest) return 0;
    let score = 0;
    activeTest.questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  if (!activeTestId) {
    return (
      <main className="container" style={{ padding: '3rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <Link href="/reading" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>
            &larr; Back to Reading Hub
          </Link>
          <h1 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Reading Practice Tests</h1>
          <p style={{ opacity: '0.8', marginTop: '0.5rem' }}>Select a test below to begin. Each test is timed.</p>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {readingPracticeTests.map((test, index) => (
            <div key={test.id} className="card" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Test {index + 1}: {test.title}</h3>
                <p style={{ opacity: '0.7', fontSize: '0.9rem' }}>{test.questions.length} Questions</p>
              </div>
              <button 
                onClick={() => setActiveTestId(test.id)}
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.5rem' }}
              >
                Start Test
              </button>
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="container" style={{ padding: '2rem 1.5rem', maxWidth: '1400px', margin: '0 auto', height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
        <div>
          <button 
            onClick={() => { setActiveTestId(null); setAnswers({}); setShowResults(false); }}
            style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: '500', padding: 0, marginBottom: '0.5rem' }}
          >
            &larr; Back to Tests
          </button>
          <h1 style={{ fontSize: '1.8rem' }}>{activeTest.title}</h1>
        </div>
        {!showResults && <Timer initialMinutes={20} />}
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flexGrow: 1, overflow: 'hidden' }}>
        {/* Left Side: Reading Passage */}
        <div className="card" style={{ padding: '2rem', overflowY: 'auto', height: '100%' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Reading Passage</h2>
          <div style={{ lineHeight: '1.9', fontSize: '1.1rem' }}>
            {activeTest.content.split('\n').map((paragraph, idx) => (
              <p key={idx} style={{ marginBottom: paragraph ? '1rem' : '0' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        
        {/* Right Side: Questions */}
        <div className="card" style={{ padding: '2rem', overflowY: 'auto', height: '100%' }}>
          {showResults && (
            <div style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Test Complete</h3>
              <p style={{ fontSize: '1.2rem' }}>You scored {calculateScore()} out of {activeTest.questions.length}</p>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {activeTest.questions.map((q, idx) => (
              <div key={q.id} style={{ padding: '1.5rem', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: showResults ? (answers[q.id] === q.correctAnswer ? 'rgba(0,255,0,0.05)' : 'rgba(255,0,0,0.05)') : 'transparent' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                  {idx + 1}. {q.question}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {q.options.map((option, optIdx) => {
                    let isSelected = answers[q.id] === optIdx;
                    let isCorrect = q.correctAnswer === optIdx;
                    
                    let bg = isSelected ? 'var(--primary)' : 'transparent';
                    let color = isSelected ? 'var(--primary-foreground)' : 'var(--foreground)';
                    let border = isSelected ? '2px solid var(--primary)' : '2px solid rgba(0,0,0,0.1)';

                    if (showResults) {
                      if (isCorrect) {
                        bg = '#4ade80'; // Green
                        color = '#000';
                        border = '2px solid #4ade80';
                      } else if (isSelected && !isCorrect) {
                        bg = '#f87171'; // Red
                        color = '#fff';
                        border = '2px solid #f87171';
                      } else {
                        bg = 'transparent';
                        color = 'var(--foreground)';
                        border = '2px solid rgba(0,0,0,0.1)';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleAnswerSelect(q.id, optIdx)}
                        disabled={showResults}
                        style={{
                          padding: '1rem',
                          textAlign: 'left',
                          backgroundColor: bg,
                          color: color,
                          border: border,
                          borderRadius: '6px',
                          cursor: showResults ? 'default' : 'pointer',
                          transition: 'all 0.2s',
                          fontSize: '1rem'
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {showResults && (
                  <div style={{ 
                    marginTop: '1.5rem', 
                    padding: '1rem', 
                    backgroundColor: 'rgba(0,0,0,0.03)', 
                    borderRadius: '6px',
                    borderLeft: '4px solid var(--primary)'
                  }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--primary)' }}>Explanation:</p>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{q.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {!showResults && (
            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
              <button 
                onClick={() => setShowResults(true)}
                className="btn btn-primary"
                style={{ padding: '1rem 2rem' }}
                disabled={Object.keys(answers).length !== activeTest.questions.length}
              >
                {Object.keys(answers).length !== activeTest.questions.length ? 'Answer all questions to finish' : 'Submit Answers'}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
