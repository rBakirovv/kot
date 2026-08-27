import type { Metadata } from 'next';
import { Public_Sans, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/shared/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Kotiksvill',
  description:
    'Образовательная платформа с курсами, уроками и отслеживанием прогресса',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full',
        'antialiased',
        'font-sans',
        'font-sans',
        inter.variable,
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
