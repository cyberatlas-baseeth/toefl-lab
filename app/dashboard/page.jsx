'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [level, setLevel] = useState(null);
  const [score, setScore] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login');
      } else {
        setUser(session.user);
      }
    };
    fetchUser();
    
    // Fetch level from local storage
    if (typeof window !== 'undefined') {
      const storedLevel = localStorage.getItem('toefl_level');
      const storedScore = localStorage.getItem('placement_score');
      if (storedLevel) setLevel(storedLevel);
      if (storedScore) setScore(storedScore);
    }
  }, [router]);

  if (!user) return <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>Loading dashboard...</div>;

  return (
    <main className="container" style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Welcome to Your Dashboard</h1>
          <p style={{ color: 'var(--primary)', fontWeight: '500' }}>{user.email}</p>
        </div>
        
        {level ? (
          <div style={{ textAlign: 'right', backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)', padding: '1.5rem 2rem', borderRadius: '8px' }}>
            <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: '0.8' }}>Estimated Level</p>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.2rem 0' }}>{level}</p>
            <p style={{ fontSize: '0.9rem', opacity: '0.7', marginBottom: '1rem' }}>Placement Score: {score}/20</p>
            <Link href="/placement?review=true" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', width: '100%' }}>
              Review Test
            </Link>
          </div>
        ) : (
          <Link href="/placement" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
            Take Placement Test
          </Link>
        )}
      </div>
      
      {/* Recommended Path based on level */}
      {level && (
        <div style={{ backgroundColor: 'rgba(219, 90, 49, 0.05)', border: '1px solid rgba(219, 90, 49, 0.2)', padding: '2rem', borderRadius: '8px', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Recommended for {level} Level</h2>
          <p style={{ marginBottom: '1.5rem', opacity: '0.9' }}>
            Based on your placement test, we recommend focusing heavily on Reading and Vocabulary to build a stronger foundation before tackling advanced writing.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/reading/learn" className="btn btn-primary">Start Reading Lessons</Link>
            <Link href="/vocabulary" className="btn" style={{ border: '2px solid var(--primary)', color: 'var(--primary)' }}>Practice Vocabulary</Link>
          </div>
        </div>
      )}

      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Your Modules</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.4rem' }}>Reading</h3>
            <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>Active</span>
          </div>
          <div style={{ height: '6px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '3px', marginBottom: '2rem' }}>
            <div style={{ width: '75%', height: '100%', backgroundColor: 'var(--success)', borderRadius: '3px' }}></div>
          </div>
          <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
            <Link href="/reading/learn" className="btn" style={{ flex: 1, border: '1px solid var(--border)', textAlign: 'center' }}>Learn</Link>
            <Link href="/reading/practice" className="btn btn-primary" style={{ flex: 1, textAlign: 'center' }}>Practice</Link>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.4rem' }}>Listening</h3>
            <span style={{ backgroundColor: 'rgba(219, 90, 49, 0.1)', color: 'var(--primary)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>Needs Work</span>
          </div>
          <div style={{ height: '6px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '3px', marginBottom: '2rem' }}>
            <div style={{ width: '40%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '3px' }}></div>
          </div>
          <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
            <Link href="/listening/learn" className="btn" style={{ flex: 1, border: '1px solid var(--border)', textAlign: 'center', pointerEvents: 'none', opacity: 0.5 }}>Learn</Link>
            <Link href="/listening/practice" className="btn btn-primary" style={{ flex: 1, textAlign: 'center', pointerEvents: 'none', opacity: 0.5 }}>Practice</Link>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.4rem' }}>Vocabulary</h3>
            <span style={{ backgroundColor: 'rgba(0,0,0,0.05)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>120 / 500</span>
          </div>
          <div style={{ height: '6px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '3px', marginBottom: '2rem' }}>
            <div style={{ width: '24%', height: '100%', backgroundColor: 'var(--accent)', borderRadius: '3px' }}></div>
          </div>
          <div style={{ marginTop: 'auto' }}>
            <Link href="/vocabulary" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Review Flashcards</Link>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '4rem', textAlign: 'right', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
        <button onClick={() => { supabase.auth.signOut(); router.push('/'); }} className="btn" style={{ background: 'var(--error)', color: 'white', padding: '0.75rem 1.5rem' }}>
          Sign Out
        </button>
      </div>
    </main>
  );
}
