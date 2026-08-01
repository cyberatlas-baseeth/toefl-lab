import AuthForm from '@/components/AuthForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="container" style={{ padding: '2rem 1.5rem' }}>
      <AuthForm type="login" />
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        Don't have an account? <Link href="/register" style={{ color: 'var(--primary)' }}>Sign up here</Link>
      </p>
    </main>
  );
}
