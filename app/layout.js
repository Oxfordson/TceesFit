import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  metadataBase: new URL('https://tceesfit.vercel.app'), // Update with actual domain
  title: "Tcee's Fit | Stylish Ready-to-Wear & Owanbe Outfits in Ife",
  description: "Based in Ife, Tcee's Fit creates stylish, comfortable, and affordable ready-to-wear outfits for females of all ages. From kiddies' clothing to trendy adult two-piece sets and bespoke Owanbe styles.",
  keywords: 'Fashion brand Ife, Ready-to-wear Nigeria, Female fashion, Owanbe styles, Bubu gowns, Kiddies fashion, Two-piece sets, Tcee\'s Fit',
  openGraph: {
    title: "Tcee's Fit | Stylish Ready-to-Wear & Owanbe Outfits",
    description: "Discover stylish, comfortable, and affordable ready-to-wear outfits for females (children and adults). Perfectly crafted for everyday elegance and special Owanbe occasions.",
    url: 'https://tceesfit.vercel.app',
    siteName: "Tcee's Fit",
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/images/opengraph-image.png', // Ensure this image is updated in your public folder
        width: 1200,
        height: 630,
        alt: "Tcee's Fit | Premium Fashion in Ife",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tcee's Fit | Stylish Ready-to-Wear & Owanbe Outfits in Ife",
    description: "Your go-to fashion brand in Ife for ready-to-wear, Bubu gowns, and exquisite Owanbe styles.",
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