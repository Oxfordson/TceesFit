"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Extensions', href: '/#collections' },
    { name: 'Reviews', href: '/#testimonials' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/kunmiluxe', // replace with actual handle
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@kunmiluxe', // replace with actual handle
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      href: 'mailto:kunmikunmi30@gmail.com',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    }
  ];

  const whatsappNumber = "2347078617494";
  const defaultMessage = encodeURIComponent(
    "Hello Kunmi Luxe! ✨ I would like to make an inquiry / book an appointment for:\n\n" +
    "• Service/Product (Hair Extensions / Luxury Install / Wig Revamp):\n" +
    "• Preferred Date:\n" +
    "• Name:"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-light/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-3 md:py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-50 -my-2 md:-my-3">
            <Image 
              src="/images/kunmiluxe-logo.png" 
              alt="Kunmi Luxe Logo"
              width={400}
              height={180}
              className={`object-contain transition-all duration-300 h-14 sm:h-16 md:h-20 lg:h-24 w-auto ${!isScrolled ? 'brightness-0 invert' : ''}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-7 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm uppercase tracking-widest font-medium hover:text-brand-gold transition-colors ${!isScrolled ? 'text-white' : 'text-brand-dark'}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Social Icons (Desktop) */}
            <div className={`flex items-center space-x-3 pl-2 border-l ${!isScrolled ? 'border-white/30 text-white' : 'border-brand-dark/20 text-brand-dark'}`}>
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.name === 'Email' ? undefined : '_blank'}
                  rel={item.name === 'Email' ? undefined : 'noopener noreferrer'}
                  aria-label={item.name}
                  className="p-1.5 hover:text-brand-gold hover:scale-110 transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 border-2 transition-all rounded-full text-xs uppercase tracking-wider font-semibold
                ${!isScrolled 
                  ? 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark' 
                  : 'border-brand-gold text-brand-dark hover:bg-brand-gold hover:text-white'}`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className={`w-7 h-7 transition-colors ${!isScrolled && !isMobileMenuOpen ? 'text-white' : 'text-brand-dark'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden fixed inset-0 bg-brand-light z-40 transition-transform duration-300 ease-in-out flex flex-col justify-center items-center space-y-6 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-brand-dark uppercase tracking-[0.2em] text-lg font-medium hover:text-brand-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Social Icons (Mobile) */}
          <div className="flex items-center space-x-6 pt-2 pb-2 text-brand-dark">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name === 'Email' ? undefined : '_blank'}
                rel={item.name === 'Email' ? undefined : 'noopener noreferrer'}
                aria-label={item.name}
                className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-brand-gold text-brand-dark font-bold rounded-full uppercase tracking-widest text-sm shadow-md active:scale-95"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}