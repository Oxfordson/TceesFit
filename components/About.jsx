"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const brandPillars = [
    {
      num: "01",
      title: "All-Age Feminine Silhouettes",
      desc: "Thoughtfully cut for toddlers, teenagers, and women—from play-ready kiddies sets to statuesque Bubu gowns.",
    },
    {
      num: "02",
      title: "Breathable Day-to-Night Wear",
      desc: "Premium lightweight fabrics that drape naturally, keeping you effortlessly comfortable whether running errands or attending meetings.",
    },
    {
      num: "03",
      title: "Bespoke Owanbe Grandeur",
      desc: "Custom fitted dresses and event-ready pieces tailored with precision for Nigerian celebrations and milestones.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative Gold & Subtle Grid Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-brand-dark/10">
          <div>
            <span className="text-brand-gold  tracking-[0.3em] text-xs font-semibold block mb-2">
              The Atelier & Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-brand-dark leading-[1.15]">
              Style Without Constraint. <br />
              <span className="italic font-light text-brand-gold-dark">Grace for Every Generation.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-brand-dark/70 font-light max-w-md leading-relaxed">
            Tcee’s Fit bridges the gap between everyday ready-to-wear comfort and head-turning ceremonial couture.
          </p>
        </div>

        {/* Core Layout: Asymmetrical Media Canvas & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Multi-Layered Media Canvas (Video + Overlay Still + Floating Badge) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl bg-brand-dark">
              {/* Process / Fabric Movement Video */}
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                poster="/images/about-video-poster.jpg"
                className="w-full h-full object-cover filter brightness-95"
              >
                <source src="/videos/about-tailoring.mp4" type="video/mp4" />
              </video>

              {/* Video Pause/Play Indicator */}
              <button
                onClick={toggleVideoPlayback}
                aria-label={isPlaying ? "Pause background video" : "Play background video"}
                className="absolute top-4 left-4 z-20 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white rounded-full p-2.5 transition-all"
              >
                {isPlaying ? (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
              </button>

              {/* Bottom Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <span className="text-[10px] tracking-[0.25em]  text-brand-gold block font-mono">
                  Tailored In Ile-Ife
                </span>
                <p className="font-serif text-lg italic text-white/90">
                  Precision in every seam, ease in every wear.
                </p>
              </div>
            </div>

            {/* Overlapping Stitched Detail Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 h-56 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white z-20">
              <Image
                src="/images/about-detail.jpg"
                alt="Intricate stitching and finishings by Tcee's Fit"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 192px"
              />
            </div>

            {/* Floating Gold Guarantee Stamp */}
            <div className="absolute -top-5 -right-3 sm:-right-6 bg-brand-dark text-brand-gold border border-brand-gold/40 px-5 py-4 rounded-xl shadow-xl z-20 backdrop-blur-md">
              <span className="text-2xl font-serif font-bold block leading-none">100%</span>
              <span className="text-[10px]  tracking-widest text-white/80 block mt-1">
                Custom Tailoring
              </span>
            </div>
          </div>

          {/* RIGHT: Curated Pillars & Action */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-dark mb-4">
              Fashion that respects your budget, elevates your wardrobe, and fits your life.
            </h3>
            <p className="text-brand-dark/70 font-light text-base leading-relaxed mb-8">
              We design with real women and children in mind. Whether it is an easy-going 
              two-piece palazzo suit, an outfit for your little one, or a breathtaking 
              fabric for your next Owanbe weekend, every piece is made to deliver quiet confidence.
            </p>

            {/* Structured Value Rows */}
            <div className="space-y-6 mb-10">
              {brandPillars.map((pillar) => (
                <div key={pillar.num} className="group flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-brand-light">
                  <span className="font-mono text-sm font-bold text-brand-gold tracking-widest pt-0.5">
                    {pillar.num}
                  </span>
                  <div>
                    <h4 className="font-serif text-lg text-brand-dark group-hover:text-brand-gold-dark transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-brand-dark/60 font-light mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions & Metrics */}
            <div className="pt-6 border-t border-brand-dark/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="block text-2xl font-serif font-bold text-brand-dark">Ile-Ife, Osun</span>
                <span className="text-xs  tracking-widest text-brand-dark/50">Delivery Nationwide</span>
              </div>
              <Link
                href="/#collections"
                className="inline-flex items-center gap-2 text-xs  tracking-[0.2em] font-bold text-brand-dark hover:text-brand-gold transition-colors pb-1 border-b-2 border-brand-gold"
              >
                Browse Collections
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}