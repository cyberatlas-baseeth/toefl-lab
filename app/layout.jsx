import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'TOEFL Prep Lab',
  description: 'Master your TOEFL exam with our interactive prep lab.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
