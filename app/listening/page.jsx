import Timer from '@/components/Timer';
import QuestionBlock from '@/components/QuestionBlock';
import { PlayCircle } from 'lucide-react';

export default function ListeningPage() {
  return (
    <main className="container" style={{ padding: '3rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Listening Practice</h1>
        <Timer initialMinutes={10} />
      </div>

      <div className="card" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <PlayCircle size={48} color="var(--primary)" style={{ cursor: 'pointer' }} />
        <div>
          <h3 style={{ marginBottom: '0.5rem' }}>Lecture: Introduction to Psychology</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Audio Track (Mock) - 03:45</p>
        </div>
        <div style={{ marginLeft: 'auto', flex: 1, background: 'var(--background)', height: '8px', borderRadius: '4px', margin: '0 2rem' }}>
          <div style={{ width: '35%', background: 'var(--primary)', height: '100%', borderRadius: '4px' }}></div>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <QuestionBlock 
            question="1. What is the main topic of the professor's lecture?"
            options={[
              "The history of clinical psychology.",
              "Classical conditioning experiments.",
              "The difference between cognitive and behavioral approaches.",
              "Freud's interpretation of dreams."
            ]}
            correctAnswer={2}
          />
          <QuestionBlock 
            question="2. Why does the professor mention Pavlov's dogs?"
            options={[
              "To criticize animal testing in early psychology.",
              "To provide an example of cognitive dissonance.",
              "To illustrate the principles of classical conditioning.",
              "To show how psychology differs from biology."
            ]}
            correctAnswer={2}
          />
      </div>
    </main>
  );
}
