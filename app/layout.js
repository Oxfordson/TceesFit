import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  metadataBase: new URL('https://kunmiluxe.vercel.app'),
  title: 'Kunmi Luxe | Premium Hair Extensions, Installs & Revamps in Lagos',
  description: 'Lagos\' premier destination for premium hair extensions (French & Italian curls, Bone Straight), flawless luxury installs, and transformative wig revamps.',
  keywords: 'Hair Extensions Lagos, Luxury Wig Installs Nigeria, Wig Revamps Lagos, Bone Straight Hair Nigeria, Kunmi Luxe, Premium Hair Vendor Lagos',
  openGraph: {
    title: 'Kunmi Luxe | Hair Extensions, Installs & Revamps',
    description: 'Experience the Kunmi Luxe standard in Lagos. We specialize in premium hair bundles, seamless luxury installs, and complete wig revamps.',
    url: 'https://kunmiluxe.vercel.app',
    siteName: 'Kunmi Luxe',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/images/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Kunmi Luxe | Premium Hair Extensions, Installs & Revamps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kunmi Luxe | Premium Hair Extensions, Installs & Revamps in Lagos',
    description: 'Lagos\' premier destination for premium hair extensions, flawless luxury installs, and transformative wig revamps.',
    images: ['/images/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} flex flex-col min-h-screen bg-brand-light text-brand-dark antialiased`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}