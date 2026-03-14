import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://wipuku.store'),
  title: {
    default: 'Wipuku | 公式オンラインショップ',
    template: '%s | Wipuku',
  },
  description:
    'Wipuku公式オンラインショップ。高品質な電動シェーバーをAmazonで購入可能。UPC: 607602427930, 型番: 1211-006',
  keywords: [
    'Wipuku',
    '電動シェーバー',
    'シェーバー',
    'ひげそり',
    '607602427930',
    '1211-006',
    'Amazon',
    'wipuku.store',
  ],
  authors: [{ name: 'Wipuku' }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="ja">
      <body className={`antialiased min-h-screen flex flex-col`}>
        {isDev && <Inspector />}
        <CartProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
