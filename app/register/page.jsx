import AuthForm from '@/components/AuthForm';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="container" style={{ padding: '2rem 1.5rem' }}>
      <AuthForm type="register" />
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        Already have an account? <Link href="/login" style={{ color: 'var(--primary)' }}>Log in here</Link>
      </p>
    </main>
  );
}
