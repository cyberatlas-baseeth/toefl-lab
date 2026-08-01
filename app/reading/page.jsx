import Link from 'next/link';

export default function ReadingHub() {
  return (
    <main className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Reading Module</h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.8', maxWidth: '600px', margin: '0 auto' }}>
          Master your reading comprehension skills. Choose whether you want to learn new strategies or put your skills to the test.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Learn Card */}
        <div className="card" style={{ padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ 
            width: '64px', height: '64px', backgroundColor: 'rgba(0,0,0,0.05)', 
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem', fontSize: '2rem'
          }}>
            📖
          </div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Learn Strategies</h2>
          <p style={{ opacity: '0.8', marginBottom: '2rem', flexGrow: 1 }}>
            Read through our comprehensive guides on how to tackle different types of TOEFL reading questions.
          </p>
          <Link href="/reading/learn" className="btn" style={{ 
            padding: '1rem', border: '2px solid var(--primary)', color: 'var(--primary)', 
            textDecoration: 'none', fontWeight: 'bold', display: 'block', borderRadius: '4px' 
          }}>
            Start Learning
          </Link>
        </div>

        {/* Practice Card */}
        <div className="card" style={{ padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ 
            width: '64px', height: '64px', backgroundColor: 'rgba(0,0,0,0.05)', 
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem', fontSize: '2rem'
          }}>
            ✍️
          </div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Practice Tests</h2>
          <p style={{ opacity: '0.8', marginBottom: '2rem', flexGrow: 1 }}>
            Apply your knowledge with timed mock tests based on real TOEFL reading passages.
          </p>
          <Link href="/reading/practice" className="btn btn-primary" style={{ 
            padding: '1rem', textDecoration: 'none', fontWeight: 'bold', display: 'block', borderRadius: '4px' 
          }}>
            Start Practice
          </Link>
        </div>
      </div>
    </main>
  );
}
