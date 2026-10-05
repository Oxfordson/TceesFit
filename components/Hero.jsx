"use client";
import { useState, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  
  // Three curated video pillars highlighting the breadth of Tcee's Fit
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

  // Video element refs to sync muting across panes
  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    videoRefs.forEach((ref) => {
      if (ref.current) ref.current.muted = nextMuted;
    });
  };

  const whatsappNumber = "2348167762470";
  const defaultMessage = encodeURIComponent(
    "Hello Tcee's Fit! ✨ I would like to explore your collections and place an order."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-brand-dark text-white pt-24 pb-8 sm:pt-28 sm:pb-12">
      {/* ================= MULTI-VIDEO RUNWAY BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 flex">
        {showcaseItems.map((item, index) => (
          <div
            key={item.id}
            className={`relative h-full transition-all duration-700 ease-in-out overflow-hidden ${
              // On mobile, show only active tab. On desktop (md+), display 3-column split view
              activeTab === index ? "w-full md:w-1/3 opacity-100" : "hidden md:block md:w-1/3 opacity-90"
            }`}
          >
            <video
              ref={videoRefs[index]}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              poster={item.poster}
              className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05] transition-transform duration-1000 hover:scale-105"
            >
              <source src={item.videoSrc} type="video/mp4" />
            </video>

            {/* Subtle column divider & gold sheen border */}
            <div className="hidden md:block absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-brand-gold/30 to-transparent pointer-events-none" />
          </div>
        ))}

        {/* Global Dark Gradient & Vignette Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/75 pointer-events-none" />
      </div>

      {/* ================= SOUND TOGGLE ================= */}
      <button
        onClick={toggleSound}
        type="button"
        aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
        className="absolute top-28 right-5 sm:right-8 z-30 flex items-center space-x-2 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-brand-gold/40 text-white px-3.5 py-1.5 rounded-full text-[11px]  tracking-widest transition-all duration-300 shadow-md active:scale-95"
      >
        <span className={`w-2 h-2 rounded-full ${isMuted ? "bg-white/40" : "bg-brand-gold animate-ping"}`} />
        <span>{isMuted ? "Audio Off" : "Audio On"}</span>
      </button>

      {/* ================= CENTER CONTENT ================= */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 my-auto flex flex-col items-center text-center">
        
        {/* Origin & Brand Category Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-brand-gold/30 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
          <span className="text-[11px] sm:text-xs  tracking-[0.25em] text-brand-gold-light font-medium">
            Ready-to-Wear &bull; Custom Fit 
          </span>
        </div>

        {/* Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.08] tracking-tight max-w-4xl">
          Elegance tailored for <br />
          <span className="italic font-light text-brand-gold">every moment.</span>
        </h1>

        {/* Brand Promise Description */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-white/85 max-w-2xl font-light leading-relaxed">
          Crafting chic, comfortable, and affordable fashion for women and kids. 
          From laid-back two-piece co-ords to show-stopping Owanbe statement pieces.
        </p>

        {/* Dual Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-bold  tracking-[0.16em] text-xs transition-all duration-300 shadow-xl active:scale-95 text-center"
          >
            Order Custom Fit
          </a>
          <Link
            href="/#collections"
            className="w-full sm:w-auto px-8 py-3.5 bg-black/40 hover:bg-black/70 backdrop-blur-md border border-brand-gold/50 text-white hover:text-brand-gold  tracking-[0.16em] text-xs font-semibold transition-all duration-300 text-center"
          >
            Explore Lookbook
          </Link>
        </div>

        {/* Mobile Pillar Switcher (Visible on small screens only) */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-8">
          {showcaseItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`text-[11px]  tracking-wider px-3 py-1 rounded-full border transition-all ${
                activeTab === idx
                  ? "bg-brand-gold text-brand-dark border-brand-gold font-semibold"
                  : "bg-black/40 text-white/70 border-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* ================= BOTTOM RUNWAY CONTROLS (DESKTOP) ================= */}
      <div className="relative z-10 hidden md:grid grid-cols-3 max-w-6xl mx-auto w-full px-8 gap-6 border-t border-white/15 pt-6">
        {showcaseItems.map((item, index) => (
          <div
            key={item.id}
            onMouseEnter={() => setActiveTab(index)}
            className="group cursor-pointer text-left transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px]  tracking-[0.2em] text-brand-gold font-semibold">
                0{index + 1} &bull; {item.label}
              </span>
              <span className="text-white/40 group-hover:text-brand-gold group-hover:translate-x-1 transition-all text-xs">
                &rarr;
              </span>
            </div>
            <h4 className="font-serif text-sm text-white/95 mt-1 group-hover:text-brand-gold-light transition-colors">
              {item.tagline}
            </h4>
            <p className="text-xs text-white/60 mt-1 line-clamp-1 font-light">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}