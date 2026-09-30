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
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm uppercase tracking-widest font-medium hover:text-brand-gold transition-colors ${!isScrolled ? 'text-white' : 'text-brand-dark'}`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 border-2 transition-all rounded-full text-sm uppercase tracking-wider font-semibold
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
        <div className={`md:hidden fixed inset-0 bg-brand-light z-40 transition-transform duration-300 ease-in-out flex flex-col justify-center items-center space-y-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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