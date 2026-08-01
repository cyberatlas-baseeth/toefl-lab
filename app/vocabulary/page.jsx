'use client';
import { useState } from 'react';
import Flashcard from '@/components/Flashcard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const words = [
  { word: 'Ubiquitous', definition: 'Present, appearing, or found everywhere.', example: 'His ubiquitous influence was felt by all the family.' },
  { word: 'Ephemeral', definition: 'Lasting for a very short time.', example: 'Fashions are ephemeral.' },
  { word: 'Alleviate', definition: 'Make (suffering, deficiency, or a problem) less severe.', example: 'He couldn\'t prevent her pain, only alleviate it.' },
  { word: 'Profound', definition: 'Very great or intense.', example: 'Profound social changes.' },
];

export default function VocabularyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % words.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + words.length) % words.length);
  };

  return (
    <main className="container" style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '1rem' }}>Vocabulary Builder</h1>
      <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>Click the card to flip and reveal the definition.</p>

      <div style={{ maxWidth: '500px', margin: '0 auto', position: 'relative' }}>
        <Flashcard 
          word={words[currentIndex].word}
          definition={words[currentIndex].definition}
          example={words[currentIndex].example}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <button onClick={prevCard} className="btn" style={{ background: 'var(--secondary)', padding: '0.75rem 1rem' }}>
            <ChevronLeft size={20} /> Prev
          </button>
          <span style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
            {currentIndex + 1} / {words.length}
          </span>
          <button onClick={nextCard} className="btn" style={{ background: 'var(--secondary)', padding: '0.75rem 1rem' }}>
            Next <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </main>
  );
}
