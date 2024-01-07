import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vupico Post Analytics',
  description: 'App to analyze your posts and comments.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} h-svh w-full bg-slate-100`}>
        <Navbar />
        <main className='mx-auto container'>{children}</main>
      </body>
    </html>
  );
}
