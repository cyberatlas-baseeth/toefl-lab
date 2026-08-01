import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Dark Hero Section matching the image aesthetic */}
      <section style={{ 
        backgroundColor: 'var(--accent)', 
        color: 'var(--accent-foreground)', 
        padding: '8rem 1.5rem',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ 
              fontSize: '4.5rem', 
              fontWeight: '300', 
              lineHeight: '1.1', 
              marginBottom: '1.5rem',
              letterSpacing: '-1px'
            }}>
              SEAMLESS <br />
              <span style={{ fontWeight: '600' }}>PROCESS</span> <br />
              <span style={{ fontStyle: 'italic', fontWeight: '400' }}>FASTER</span> RESULT
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              opacity: '0.8', 
              marginBottom: '3rem',
              maxWidth: '500px',
              borderLeft: '2px solid var(--primary)',
              paddingLeft: '1rem'
            }}>
              A smart way to elevate your English proficiency and achieve your target TOEFL score.
            </p>
            <div>
              <Link href="/dashboard" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                Start Practice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Light Content Section */}
      <section className="container" style={{ padding: '6rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '3rem', fontWeight: '500', lineHeight: '1.2', marginBottom: '2rem', letterSpacing: '-0.5px' }}>
              We're available<br />across the globe
            </h2>
            <Link href="/dashboard" style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid var(--foreground)', paddingBottom: '4px' }}>
              View Dashboard
            </Link>
          </div>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', opacity: '0.8', lineHeight: '1.8' }}>
            <p>
              Prepare for the TOEFL exam with our interactive reading, listening, speaking, and writing modules. Built with real-world scenarios to ensure you are fully ready.
            </p>
            <p>
              Track your progress seamlessly and identify areas of improvement using our dedicated dashboard analytics and vocabulary builder.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
