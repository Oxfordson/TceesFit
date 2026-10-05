"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Silhouettes' },
    { id: 'rtw', label: 'Ready-to-Wear Co-Ords' },
    { id: 'owanbe', label: 'Owanbe & Bubu' },
    { id: 'kiddies', label: 'Little Tcee’s' },
  ];

  const collections = [
    {
      id: 1,
      name: "The Palazzo Co-Ord",
      category: "rtw",
      silhouette: "Two-Piece Relaxed Fit",
      fabric: "Breathable Crepe & Silk Blend",
      tagline: "Effortless confidence from morning errands to evening socials.",
      image: "/images/collections-palazzo.jpg",
      badge: "Signature Cut",
      serial: "TC-RTW-01",
    },
    {
      id: 2,
      name: "Heritage Royal Bubu",
      category: "owanbe",
      silhouette: "Voluminous Grandeur",
      fabric: "Hand-Embroidered Brocade & Organza",
      tagline: "Regal presence designed for high-profile Nigerian ceremonies.",
      image: "/images/collections-bubu.jpg",
      badge: "Owanbe Luxe",
      serial: "TC-OWB-04",
    },
    {
      id: 3,
      name: "Petite Belle Gown",
      category: "kiddies",
      silhouette: "Pleated Kiddies Ball Gown",
      fabric: "Featherlight Cotton-Lined Tulle",
      tagline: "Playful charm with gentle, irritation-free tailoring.",
      image: "/images/collections-kiddies.jpg",
      badge: "Little Tcee’s",
      serial: "TC-KID-02",
    },
    {
      id: 4,
      name: "Hourglass Corset Midi",
      category: "owanbe",
      silhouette: "Tailored Sculpt Dress",
      fabric: "Stretch Jacquard with Gold Finishings",
      tagline: "Precision cinching that celebrates natural curves seamlessly.",
      image: "/images/collections-dress.jpg",
      badge: "Evening Edit",
      serial: "TC-OWB-08",
    },
    {
      id: 5,
      name: "Luxe Linen Resort Set",
      category: "rtw",
      silhouette: "Tailored Shorts & Fluid Shirt",
      fabric: "100% Pure Woven Linen",
      tagline: "Laidback luxury engineered for tropical weather and resort getaways.",
      image: "/images/collections-linen.jpg",
      badge: "New Release",
      serial: "TC-RTW-09",
    },
    {
      id: 6,
      name: "Mini Co-Ord Trousers Set",
      category: "kiddies",
      silhouette: "Smart Kiddies Trouser & Top",
      fabric: "Ultra-Soft Stretch Cotton",
      tagline: "Smart, photogenic casual wear made durable for active young girls.",
      image: "/images/collections-kiddies-trousers.jpg",
      badge: "Kiddies Best",
      serial: "TC-KID-05",
    }
  ];

  const whatsappNumber = "2348167762470";

  const filteredCollections = activeCategory === 'all' 
    ? collections 
    : collections.filter(item => item.category === activeCategory);

  return (
    <section id="collections" className="py-24 sm:py-32 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Architectural Grid & Subtle Radial Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Category Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
              <span className="text-brand-gold  tracking-[0.3em] text-xs font-mono">
                The Curated Catalogue &bull; Ile-Ife
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight">
              Curated Cuts. <br />
              <span className="italic font-light text-brand-gold-light">Uncompromised Grace.</span>
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider  transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-brand-gold text-brand-dark font-bold shadow-lg scale-105'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((item, index) => {
            const orderMessage = encodeURIComponent(
              `Hello Tcee's Fit! ✨ I would like to order / inquire about the "${item.name}" (${item.serial}).`
            );
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${orderMessage}`;

            return (
              <a
                key={item.id}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-[520px] sm:h-[560px] w-full rounded-2xl overflow-hidden bg-black/40 border border-white/15 block transition-all duration-500 hover:border-brand-gold/60 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)]"
              >
                {/* Product Imagery */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center filter brightness-90 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700 ease-out"
                />

                {/* Layered Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/20 transition-all duration-500 pointer-events-none" />

                {/* Top Bar: Serial ID & Status Tag */}
                <div className="absolute top-5 inset-x-5 flex justify-between items-center z-20 pointer-events-none">
                  <span className="font-mono text-[11px] tracking-widest text-brand-gold-light  bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-brand-gold/30">
                    {item.serial}
                  </span>
                  <span className="px-3.5 py-1 rounded-full text-[10px]  tracking-widest font-bold bg-white/15 backdrop-blur-md text-white border border-white/20">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Content & Spec Card */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-20 flex flex-col justify-end">
                  
                  {/* Subtle Sub-label */}
                  <span className="text-[11px]  tracking-[0.2em] text-brand-gold font-mono mb-1 block">
                    {item.silhouette}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2 leading-tight group-hover:text-brand-gold-light transition-colors">
                    {item.name}
                  </h3>
                  
                  <p className="text-white/80 font-light text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed">
                    {item.tagline}
                  </p>

                  {/* Micro Specs Accordion on Hover */}
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden mb-4 border-t border-white/15 pt-3">
                    <p className="text-[11px] text-white/60 tracking-wider">
                      <strong className="text-brand-gold font-normal">Fabric:</strong> {item.fabric}
                    </p>
                  </div>

                  {/* Order Button with Custom Arrow Icon */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="inline-flex items-center gap-2 text-xs  tracking-[0.18em] font-bold text-brand-gold group-hover:text-white transition-colors">
                      Custom Tailor This 
                      <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                    </span>
                    <span className="text-[10px]  font-mono tracking-widest text-white/40 group-hover:text-brand-gold transition-colors">
                      Delivery in 3–5 Days
                    </span>
                  </div>

                </div>

                {/* Interactive Inner Border Accent */}
                <div className="absolute inset-0 border border-brand-gold/0 group-hover:border-brand-gold/40 rounded-2xl transition-all duration-500 pointer-events-none" />
              </a>
            );
          })}
        </div>

        {/* Global CTA Footer Note */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.03] via-brand-gold/[0.08] to-white/[0.03] border border-brand-gold/20 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div>
            <h4 className="font-serif text-2xl text-white">Have a unique fabric or custom idea?</h4>
            <p className="text-white/70 text-sm font-light mt-1">
              Send us your sketch, sample reference, or native material for bespoke styling in Ile-Ife.
            </p>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Tcee's Fit! I have my own fabric and would love to consult on a bespoke custom dress.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-brand-gold text-brand-dark hover:bg-brand-gold-light font-bold text-xs  tracking-[0.16em] rounded-full transition-all duration-300 shadow-xl active:scale-95 whitespace-nowrap"
          >
            Bespoke Consultation
          </a>
        </div>

      </div>
    </section>
  );
}