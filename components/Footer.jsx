import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/tceesfit',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/2348167762470?text=Hello%20Tcee\'s%20Fit!%20✨',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.397-10.416c-5.523 0-10 4.477-10 10 0 1.765.459 3.424 1.264 4.871l-1.342 4.904 5.039-1.321c1.401.767 3.003 1.204 4.707 1.204 5.522 0 10-4.477 10-10s-4.478-10-10-10z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      href: 'mailto:contact@tceesfit.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative bg-brand-dark text-white pt-20 pb-12 overflow-hidden border-t border-brand-gold/30">
      {/* Background Architectural Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:28px_28px] opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-gold/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info & Prominent Logo */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="inline-block mb-6 -my-2">
              <Image 
                src="/images/logowithnobg.png" 
                alt="Tcee's Fit Logo"
                width={240}
                height={85}
                className="object-contain h-16 sm:h-20 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 font-light text-sm leading-relaxed max-w-sm mb-6">
              Dedicated to creating stylish, comfortable, and affordable ready-to-wear and bespoke Owanbe outfits for females of all ages. Based in Ile-Ife, shipping nationwide.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.name === 'Email' ? undefined : '_blank'}
                  rel={item.name === 'Email' ? undefined : 'noopener noreferrer'}
                  aria-label={item.name}
                  className="w-10 h-10 rounded-full border border-white/15 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-dark flex items-center justify-center transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs  tracking-[0.2em] text-brand-gold font-bold mb-4">
              Collections
            </h4>
            <ul className="space-y-3 text-sm font-light text-white/80">
              <li><a href="/#collections" className="hover:text-brand-gold transition-colors">Ready-to-Wear Co-Ords</a></li>
              <li><a href="/#collections" className="hover:text-brand-gold transition-colors">Owanbe Bubu Gowns</a></li>
              <li><a href="/#collections" className="hover:text-brand-gold transition-colors">Little Tcee’s Kiddies</a></li>
              <li><a href="/#collections" className="hover:text-brand-gold transition-colors">Palazzos, Pants & Skirts</a></li>
            </ul>
          </div>

          {/* Atelier Details */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs  tracking-[0.2em] text-brand-gold font-bold mb-4">
              Atelier & Contact
            </h4>
            <div className="space-y-3 text-sm font-light text-white/80">
              <p>📍 Ile-Ife, Osun State, Nigeria</p>
              <p>⏱ Mon – Sat: 8:00 AM – 6:00 PM</p>
              <p>💬 WhatsApp Orders & Consultations Available</p>
            </div>
            <a
              href="https://wa.me/2348167762470"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-2.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-bold text-xs  tracking-widest transition-all rounded-none"
            >
              Chat With Stylist
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 font-mono tracking-wider gap-4">
          <span>&copy; {currentYear} Tcee's Fit. All Rights Reserved.</span>
          <span>Crafted in Ile-Ife &bull; Delivery Across Nigeria</span>
        </div>

      </div>
    </footer>
  );
}