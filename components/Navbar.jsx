"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Ready-to-Wear', href: '/#collections' },
    { name: 'Owanbe Styles', href: '/#services' },
    { name: 'About', href: '/#about' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/tceesfit',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      href: 'mailto:contact@tceesfit.com',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    }
  ];

  const whatsappNumber = "2348167762470"; 
  const defaultMessage = encodeURIComponent(
    "Hello Tcee's Fit! ✨ I would like to make an inquiry / place an order for:\n\n" +
    "• Category (Ready-to-wear / Kiddies / Owanbe):\n" +
    "• Specific Style (e.g., Bubu, Two-piece, Palazzo):\n" +
    "• Name:"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-3 md:py-4'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex justify-between items-center">
          
          {/* Logo Section with negative vertical margin */}
          <Link href="/" className="flex items-center relative z-50 group -my-3 md:-my-4">
            <Image 
              src="/images/logowithnobg.png" 
              alt="Tcee's Fit Logo"
              width={260}
              height={100}
              className={`object-contain transition-all duration-300 group-hover:scale-105 h-14 sm:h-16 md:h-20 lg:h-24 w-auto ${
                !isScrolled && !isMobileMenuOpen ? 'brightness-0 invert' : ''
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isHash = link.href.includes('#');
              const linkClasses = `text-sm  tracking-widest font-medium relative overflow-hidden group py-2 ${
                !isScrolled ? 'text-white' : 'text-brand-dark'
              }`;

              const linkContent = (
                <>
                  <span className="relative z-10 group-hover:text-brand-gold transition-colors duration-300">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </>
              );

              return isHash ? (
                <a key={link.name} href={link.href} className={linkClasses}>
                  {linkContent}
                </a>
              ) : (
                <Link key={link.name} href={link.href} prefetch={false} className={linkClasses}>
                  {linkContent}
                </Link>
              );
            })}

            {/* Desktop Social Icons */}
            <div className={`flex items-center space-x-4 pl-4 border-l ${!isScrolled ? 'border-white/30 text-white' : 'border-brand-dark/20 text-brand-dark'}`}>
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.name === 'Email' ? undefined : '_blank'}
                  rel={item.name === 'Email' ? undefined : 'noopener noreferrer'}
                  aria-label={`Follow us on ${item.name}`}
                  className="hover:text-brand-gold hover:-translate-y-1 transition-transform duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 border-2 transition-all duration-300 ease-in-out rounded-none text-xs  tracking-[0.15em] font-bold
                ${!isScrolled 
                  ? 'border-brand-gold bg-brand-gold text-brand-dark hover:bg-transparent hover:text-brand-gold' 
                  : 'border-brand-dark bg-brand-dark text-brand-light hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark'}`}
            >
              Shop Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50 p-2 text-brand-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-current transition-all duration-300 ${!isScrolled && !isMobileMenuOpen ? 'bg-white' : 'bg-brand-dark'} ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2.5' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-current transition-all duration-300 ${!isScrolled && !isMobileMenuOpen ? 'bg-white' : 'bg-brand-dark'} ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-current transition-all duration-300 ${!isScrolled && !isMobileMenuOpen ? 'bg-white' : 'bg-brand-dark'} ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          className={`md:hidden fixed inset-0 bg-brand-light/95 backdrop-blur-xl z-40 transition-all duration-500 ease-[0.22,1,0.36,1] flex flex-col justify-center px-8 ${
            isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, index) => {
              const isHash = link.href.includes('#');
              const mobileClasses = `text-brand-dark  tracking-[0.15em] text-2xl font-serif hover:text-brand-gold transition-colors delay-${index * 100}`;

              return isHash ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={mobileClasses}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  href={link.href}
                  prefetch={false}
                  className={mobileClasses}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-12 h-px w-full bg-brand-dark/10"></div>

          {/* Mobile Social Icons */}
          <div className="flex items-center space-x-6 pt-8 pb-8 text-brand-dark">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name === 'Email' ? undefined : '_blank'}
                rel={item.name === 'Email' ? undefined : 'noopener noreferrer'}
                aria-label={item.name}
                className="hover:text-brand-gold transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-4 bg-brand-dark text-brand-light font-bold  tracking-widest text-sm hover:bg-brand-gold hover:text-brand-dark transition-colors active:scale-95"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Start Your Order
          </a>
        </div>
      </nav>
    </header>
  );
}