import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1.25rem 0', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--secondary)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/dashboard" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent)', letterSpacing: '-0.5px' }}>
          <span style={{ color: 'var(--primary)' }}>T</span>OEFL Lab
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          <Link href="/reading" className="nav-link">Reading</Link>
          <Link href="/listening" className="nav-link">Listening</Link>
          <Link href="/speaking" className="nav-link">Speaking</Link>
          <Link href="/writing" className="nav-link">Writing</Link>
          <Link href="/vocabulary" className="nav-link">Vocab</Link>
          <Link href="/dashboard" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', borderRadius: '0' }}>Get Started</Link>
        </div>
      </div>
    </nav>
  );
}
