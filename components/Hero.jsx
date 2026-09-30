"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const useVideoBackground = true;
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const whatsappNumber = "2347078617494";
  const defaultMessage = encodeURIComponent(
    "Hello Kunmi Luxe! ✨ I would like to book an appointment."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0">
        {useVideoBackground ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster="/images/hero-fallback.jpg"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-700"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/hero-fallback.jpg"
            alt="Kunmi Luxe Luxury Hair Extensions"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
        )}

        {/* Video Overlay with warm champagne accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70"></div>
        <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply pointer-events-none"></div>
      </div>

      {/* Interactive Sound Control Button */}
      {useVideoBackground && (
        <button
          onClick={toggleSound}
          type="button"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute bottom-8 right-6 sm:right-10 z-30 flex items-center space-x-2 bg-black/40 hover:bg-black/70 backdrop-blur-md border border-brand-gold/30 text-white px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 shadow-lg active:scale-95 cursor-pointer"
        >
          {isMuted ? (
            <>
              <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
              <span>Tap for Sound</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 text-brand-gold animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
              <span>Mute</span>
            </>
          )}
        </button>
      )}

      {/* Main Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Location Tag */}
        <span className="text-white uppercase tracking-[0.25em] md:tracking-[0.35em] text-xs md:text-sm font-medium mb-6 px-5 py-2 bg-black/40 backdrop-blur-md border border-brand-gold/30 rounded-full inline-flex items-center shadow-lg">
          <span className="text-brand-gold mr-1.5">📍</span> Lagos, Nigeria
        </span>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          Luxury quality. <br className="hidden sm:block" />
          <span className="italic font-light text-brand-gold-light">Beautifully you.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-white/90 text-base sm:text-lg md:text-xl mb-10 max-w-2xl font-light px-2 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Lagos’ premier destination for hair extensions, flawless luxury installs, and wig revamps. Made to blend, made to last, made for you.
        </p>

        {/* Core Services Badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 w-full max-w-3xl">
          {['Hair Extensions', 'Luxury Installs', 'Wig Revamps'].map((service, i) => (
            <div 
              key={i} 
              className="flex items-center space-x-2 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full shadow-md border border-brand-gold/25 text-white"
            >
              <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm md:text-base font-medium tracking-wide whitespace-nowrap">
                {service}
              </span>
            </div>
          ))}
        </div>

        {/* Dual Call-to-Action */}
        <div className="flex flex-col w-full sm:w-auto sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark hover:text-white font-bold transition-all rounded-full uppercase tracking-widest text-xs sm:text-sm text-center shadow-xl active:scale-95 duration-200"
          >
            Book Appointment
          </a>
          <a 
            href="/#collections" 
            className="px-8 py-4 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-brand-gold/40 text-brand-gold-light hover:text-white rounded-full transition-all uppercase tracking-widest text-xs sm:text-sm font-semibold text-center shadow-xl active:scale-95 duration-200"
          >
            Shop Extensions
          </a>
        </div>

      </div>
    </section>
  );
}