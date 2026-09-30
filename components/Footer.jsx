import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/kunmiluxe',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@kunmiluxe',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/2347078617494?text=Hello%20Kunmi%20Luxe!%20%E2%9C%A8',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.397-10.416c-5.523 0-10 4.477-10 10 0 1.765.459 3.424 1.264 4.871l-1.342 4.904 5.039-1.321c1.401.767 3.003 1.204 4.707 1.204 5.522 0 10-4.477 10-10s-4.478-10-10-10z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      href: 'mailto:kunmikunmi30@gmail.com',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative bg-brand-dark text-white pt-2 pb-2 overflow-hidden border-t border-brand-gold/20">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer.jpg"
          alt="Kunmi Luxe Luxury Footer Background"
          fill
          quality={90}
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        {/* Layered dark tint with champagne gold ambient reflection */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/85 to-brand-dark/75 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--color-brand-gold)_0%,_transparent_70%)] opacity-15 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Brand Logo */}
        <div className="flex justify-center mb-6">
          <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
            <Image 
              src="/images/kunmiluxe-logo.png" 
              alt="Kunmi Luxe Logo"
              width={340}
              height={140}
              className="object-contain h-20 sm:h-24 md:h-28 w-auto brightness-0 invert"
            />
          </Link>
        </div>

        {/* Brand Slogan & Promise */}
        <p className="text-brand-gold-light text-base sm:text-lg md:text-xl font-serif max-w-xl mx-auto mb-3 italic">
          "Luxury quality. Beautifully you."
        </p>
        <p className="text-white/80 font-light max-w-lg mx-auto mb-10 text-sm sm:text-base leading-relaxed">
          Good hair. Great energy. That’s the Kunmi Luxe promise. Premium extensions, luxury installs, and flawless wig revamps based in Lagos, Nigeria.
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-xs sm:text-sm uppercase tracking-widest font-medium text-white/90 mb-10">
          <a href="/#services" className="hover:text-brand-gold transition-colors">Services</a>
          <a href="/#collections" className="hover:text-brand-gold transition-colors">Extensions</a>
          <a href="/#testimonials" className="hover:text-brand-gold transition-colors">Reviews</a>
          <Link href="/blog" className="hover:text-brand-gold transition-colors">Editorial</Link>
        </div>

        {/* Social & Contact Icons */}
        <div className="flex justify-center items-center space-x-4 sm:space-x-5 mb-14">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.name === 'Email' ? undefined : '_blank'}
              rel={item.name === 'Email' ? undefined : 'noopener noreferrer'}
              aria-label={item.name}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-brand-gold text-white hover:text-brand-dark border border-brand-gold/40 flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-md hover:scale-110 active:scale-95"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent mx-auto mb-8"></div>

        {/* Copyright & Location */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-white/60 tracking-wider space-y-3 sm:space-y-0">
          <span>📍 Lagos, Nigeria &bull; Worldwide Delivery</span>
          <span>&copy; {currentYear} Kunmi Luxe. All Rights Reserved.</span>
        </div>

      </div>
    </footer>
  );
}