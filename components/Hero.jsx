"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPausedByUser, setIsPausedByUser] = useState(false);

  const showcaseItems = [
    {
      id: "rtw",
      label: "Ready-to-Wear",
      tagline: "Effortless Everyday Silhouettes",
      description: "Trendy two-piece co-ords, flowy palazzos, and tailored pants designed for comfort.",
      videoSrc: "/videos/hero-rtw.mp4",
      poster: "/images/hero-rtw-fallback.jpg",
    },
    {
      id: "owanbe",
      label: "Owanbe & Occasion",
      tagline: "Statement Bubu & Grand Silhouettes",
      description: "Bespoke elegance crafted to turn heads at every celebration and milestone.",
      videoSrc: "/videos/hero-owanbe.mp4",
      poster: "/images/hero-owanbe-fallback.jpg",
    },
    {
      id: "kiddies",
      label: "Little Tcee’s",
      tagline: "Adorable Kiddies Fashion",
      description: "Charming, comfortable gowns, smart skirts, and trousers made for girls.",
      videoSrc: "/videos/hero-kiddies.mp4",
      poster: "/images/hero-kiddies-fallback.jpg",
    },
  ];

  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  // Automatic slide switcher for mobile devices (5 seconds interval)
  useEffect(() => {
    if (isPausedByUser) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % showcaseItems.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isPausedByUser, showcaseItems.length]);

  // Synchronize playback and audio routing: only the active video plays sound when unmuted
  useEffect(() => {
    videoRefs.forEach((ref, index) => {
      const video = ref.current;
      if (!video) return;

      if (index === activeTab) {
        // If sound is enabled globally, unmute ONLY the active video
        video.muted = isMuted;
        if (!isMuted) {
          video.play().catch(() => {});
        }
      } else {
        // Force all non-active videos to mute immediately
        video.muted = true;
      }
    });
  }, [activeTab, isMuted]);

  // Restart video time on mobile transition for a seamless loop
  useEffect(() => {
    const currentVideo = videoRefs[activeTab]?.current;
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => {});
    }
  }, [activeTab]);

  const toggleSound = () => {
    setIsMuted((prev) => !prev);
  };

  const handleManualTabSelect = (idx) => {
    setActiveTab(idx);
    setIsPausedByUser(true);
    setTimeout(() => setIsPausedByUser(false), 30000); // Resume auto-cycle after 30s idle
  };

  const whatsappNumber = "2348167762470";
  const defaultMessage = encodeURIComponent(
    "Hello Tcee's Fit! ✨ I would like to explore your collections and place an order."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-black text-white pt-24 pb-8 sm:pt-28 sm:pb-12">
      {/* ================= MULTI-VIDEO RUNWAY BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 flex">
        {showcaseItems.map((item, index) => {
          const isActive = activeTab === index;
          return (
            <div
              key={item.id}
              className={`relative h-full transition-all duration-700 ease-out overflow-hidden ${
                // Mobile: cross-fade between items. Desktop: 3-column split with active expansion
                isActive
                  ? "w-full opacity-100 z-10 md:w-[38%] md:opacity-100"
                  : "w-0 opacity-0 md:opacity-75 md:w-[31%] md:block hidden"
              }`}
            >
              <video
                ref={videoRefs[index]}
                autoPlay
                loop
                // Statically guard muted state in DOM attribute as well
                muted={isMuted || !isActive}
                playsInline
                poster={item.poster}
                className="w-full h-full object-cover object-center filter brightness-95 contrast-[1.08] transition-transform duration-1000 scale-100 hover:scale-105"
              >
                <source src={item.videoSrc} type="video/mp4" />
              </video>

              {/* Glowing active border for desktop columns */}
              <div
                className={`hidden md:block absolute inset-0 border-r border-brand-gold/30 transition-opacity duration-500 pointer-events-none ${
                  isActive ? "bg-brand-gold/5 border-brand-gold" : "bg-black/20"
                }`}
              />
            </div>
          );
        })}

        {/* Dynamic Center Vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-black/20 via-black/40 to-black/75 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
      </div>

      {/* ================= SOUND TOGGLE BUTTON ================= */}
      <button
        onClick={toggleSound}
        type="button"
        aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
        className="absolute top-28 right-5 sm:right-8 z-30 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-black/60 hover:bg-black/90 backdrop-blur-md border border-brand-gold/50 text-white rounded-full transition-all duration-300 shadow-xl active:scale-95 cursor-pointer group"
      >
        {isMuted ? (
          // Speaker Muted / Off Icon
          <svg 
            className="w-4 h-4 text-white/70 group-hover:text-brand-gold transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" 
            />
          </svg>
        ) : (
          // Speaker Playing / Sound Waves Icon
          <svg 
            className="w-4 h-4 text-brand-gold animate-pulse" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" 
            />
          </svg>
        )}
      </button>

      {/* ================= CENTER CONTENT ================= */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 my-auto flex flex-col items-center text-center">
        
        {/* Origin & Category Badge */}
        <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-brand-gold/40 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
          <span className="text-[11px] sm:text-xs  tracking-[0.25em] text-brand-gold-light font-medium">
            Ready-to-Wear &bull; Custom Fit 
          </span>
        </div>

        {/* Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.08] tracking-tight max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          Elegance tailored for <br />
          <span className="italic font-light text-brand-gold">every moment.</span>
        </h1>

        {/* Brand Promise Description */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-white/95 max-w-2xl font-light leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Crafting stylish, comfortable, and affordable fashion for females of all ages. 
          From everyday two-piece co-ords to show-stopping Owanbe statement pieces.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-bold  tracking-[0.16em] text-xs transition-all duration-300 shadow-2xl active:scale-95 text-center"
          >
            Order Custom Fit
          </a>
          <Link
            href="/#collections"
            className="w-full sm:w-auto px-8 py-3.5 bg-black/60 hover:bg-black/90 backdrop-blur-md border border-brand-gold/50 text-white hover:text-brand-gold  tracking-[0.16em] text-xs font-semibold transition-all duration-300 text-center shadow-lg"
          >
            Explore Lookbook
          </Link>
        </div>

        {/* Mobile Pillar Switcher & Auto-Progress Bars */}
        <div className="flex md:hidden flex-col items-center gap-3 mt-8 w-full max-w-xs">
          <div className="flex items-center justify-center gap-2 w-full">
            {showcaseItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleManualTabSelect(idx)}
                className={`flex-1 py-1.5 px-2 rounded-full border text-[10px]  tracking-wider transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-brand-gold text-brand-dark border-brand-gold font-bold shadow-md"
                    : "bg-black/60 text-white/70 border-white/20"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Animated 3-Segment Progress Bar */}
          <div className="flex items-center gap-1.5 w-24">
            {showcaseItems.map((_, idx) => (
              <div
                key={idx}
                className="h-1 flex-1 bg-white/25 rounded-full overflow-hidden"
              >
                <div
                  className={`h-full bg-brand-gold transition-all duration-300 ${
                    activeTab === idx ? "w-full" : "w-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM RUNWAY CONTROLS (DESKTOP) ================= */}
      <div className="relative z-10 hidden md:grid grid-cols-3 max-w-6xl mx-auto w-full px-8 gap-6 border-t border-white/20 pt-6">
        {showcaseItems.map((item, index) => {
          const isSelected = activeTab === index;
          return (
            <div
              key={item.id}
              onMouseEnter={() => setActiveTab(index)}
              className={`group cursor-pointer text-left transition-all duration-300 p-3 rounded-xl ${
                isSelected ? "bg-white/10 backdrop-blur-md border border-brand-gold/40" : "hover:bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[11px]  tracking-[0.2em] font-semibold transition-colors ${
                  isSelected ? "text-brand-gold" : "text-white/60"
                }`}>
                  0{index + 1} &bull; {item.label}
                </span>
                <span className={`transition-all text-xs ${
                  isSelected ? "text-brand-gold translate-x-1" : "text-white/30"
                }`}>
                  &rarr;
                </span>
              </div>
              <h4 className="font-serif text-sm text-white mt-1 group-hover:text-brand-gold-light transition-colors">
                {item.tagline}
              </h4>
              <p className="text-xs text-white/70 mt-1 line-clamp-1 font-light">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}