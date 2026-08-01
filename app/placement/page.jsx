'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { placementTest } from '@/lib/data';

export default function PlacementTestPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = placementTest[currentQuestionIndex];

  const handleOptionSelect = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleNext = () => {
    // Check answer
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < placementTest.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Calculate final level
      const finalScore = selectedOption === currentQuestion.correctAnswer ? score + 1 : score;
      const level = calculateLevel(finalScore);
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('toefl_level', level);
        localStorage.setItem('placement_score', finalScore);
      }
      
      setScore(finalScore);
      setShowResult(true);
    }
  };

  const calculateLevel = (score) => {
    if (score <= 5) return 'A2';
    if (score <= 12) return 'B1';
    if (score <= 17) return 'B2';
    return 'C1';
  };

  if (showResult) {
    const level = calculateLevel(score);
    return (
      <main className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Test Completed!</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: '0.8' }}>
            You scored {score} out of {placementTest.length}.
          </p>
          
          <div style={{ 
            backgroundColor: 'var(--accent)', 
            color: 'var(--accent-foreground)',
            padding: '2rem',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Your Estimated Level</h2>
            <div style={{ fontSize: '4rem', fontWeight: 'bold' }}>{level}</div>
            <p style={{ marginTop: '1rem', opacity: '0.9' }}>
              {level === 'A2' && "You have a basic foundation. We'll start with fundamental practice."}
              {level === 'B1' && "You have an intermediate grasp. We'll help you refine your skills."}
              {level === 'B2' && "Great job! You have a strong upper-intermediate level."}
              {level === 'C1' && "Excellent! You have an advanced command of English."}
            </p>
          </div>

          <button 
            onClick={() => router.push('/dashboard')}
            className="btn btn-primary"
            style={{ padding: '1rem 2rem', fontSize: '1.1rem', width: '100%' }}
          >
            Go to Dashboard
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="container" style={{ padding: '3rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Placement Test</h1>
        <div style={{ fontSize: '1.2rem', fontWeight: '500' }}>
          Question {currentQuestionIndex + 1} of {placementTest.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '4px', marginBottom: '3rem' }}>
        <div style={{ 
          width: `${((currentQuestionIndex) / placementTest.length) * 100}%`,
          height: '100%',
          backgroundColor: 'var(--primary)',
          borderRadius: '4px',
          transition: 'width 0.3s ease'
        }}></div>
      </div>

      <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
        <span style={{ 
          display: 'inline-block',
          padding: '4px 12px', 
          backgroundColor: 'var(--primary)', 
          color: 'var(--primary-foreground)',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginBottom: '1rem'
        }}>
          {currentQuestion.type}
        </span>

        {currentQuestion.text && (
          <div style={{ 
            padding: '1.5rem', 
            backgroundColor: 'rgba(0,0,0,0.02)', 
            borderLeft: '4px solid var(--primary)',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            {currentQuestion.text.split('\n').map((line, i) => (
              <p key={i} style={{ marginBottom: line ? '0.5rem' : '0' }}>{line}</p>
            ))}
          </div>
        )}

        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{currentQuestion.question}</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              style={{
                padding: '1rem 1.5rem',
                textAlign: 'left',
                backgroundColor: selectedOption === index ? 'var(--primary)' : 'transparent',
                color: selectedOption === index ? 'var(--primary-foreground)' : 'var(--foreground)',
                border: selectedOption === index ? '2px solid var(--primary)' : '2px solid rgba(0,0,0,0.1)',
                borderRadius: '8px',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button 
          onClick={handleNext}
          disabled={selectedOption === null}
          className="btn btn-primary"
          style={{ 
            padding: '1rem 3rem', 
            fontSize: '1.1rem',
            opacity: selectedOption === null ? 0.5 : 1,
            cursor: selectedOption === null ? 'not-allowed' : 'pointer'
          }}
        >
          {currentQuestionIndex === placementTest.length - 1 ? 'Finish Test' : 'Next Question'}
        </button>
      </div>
    </main>
  );
}
