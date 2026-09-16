import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 20px' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>404 - Page Not Found</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>The page you are looking for does not exist.</p>
      <Link href="/" className="btn btn-primary btn-sm">
        Return Home
      </Link>
    </div>
  );
}
