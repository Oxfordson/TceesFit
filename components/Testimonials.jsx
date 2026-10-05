"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [activeMedia, setActiveMedia] = useState(null);

  const reviews = [
    {
      id: 1,
      type: 'image',
      image: '/images/review-owanbe.jpg',
      quote: "My royal Bubu gown was the talk of the wedding in Lagos! The stitching details were clean and the fit didn't need a single adjustment.",
      author: "Folashade A.",
      role: "Wedding Guest",
      location: "Lagos, NG",
      itemOrdered: "Custom Embroidered Bubu",
    },
    {
      id: 2,
      type: 'video',
      videoSrc: '/videos/review-kiddies.mp4',
      thumbnail: '/images/review-kiddies-thumb.jpg',
      quote: "Finding stylish yet durable clothes for my daughters used to be a struggle. Tcee’s Fit nailed the skirts and trouser co-ords completely.",
      author: "Dr. Bukola M.",
      role: "Mother of Two",
      location: "Ile-Ife, Osun",
      itemOrdered: "Little Tcee’s Trouser Sets",
    },
    {
      id: 3,
      type: 'image',
      image: '/images/review-palazzo.jpg',
      quote: "The palazzo two-piece is so breathable and flattering. It feels like wearing luxury loungewear, but looks incredibly sharp for meetings.",
      author: "Temitope O.",
      role: "Creative Director",
      location: "Abuja, NG",
      itemOrdered: "Silk-Blend Palazzo Co-Ord",
    }
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-brand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-gold  tracking-[0.3em] text-xs font-mono font-semibold block mb-3">
            Real Fit Stories
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark leading-tight">
            Client Voices & <br />
            <span className="italic font-light text-brand-gold-dark">Celebrated Moments.</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-6"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden border border-brand-dark/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
            >
              {/* Media Container with Dynamic Video or Image */}
              <div className="relative h-64 sm:h-72 w-full bg-brand-dark overflow-hidden">
                {item.type === 'video' ? (
                  <video 
                    controls
                    poster={item.thumbnail}
                    preload="none"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src={item.videoSrc} type="video/mp4" />
                  </video>
                ) : (
                  <Image 
                    src={item.image} 
                    alt={`Fit review by ${item.author}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
                
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest  bg-black/60 backdrop-blur-md border border-white/20 text-brand-gold-light">
                  {item.itemOrdered}
                </span>
              </div>

              {/* Text Card */}
              <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex space-x-1 mb-4 text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-brand-dark/80 font-light italic text-sm sm:text-base leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-dark/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-brand-dark text-base font-bold">{item.author}</h4>
                    <span className="text-[11px]  tracking-wider text-brand-dark/50 block">
                      {item.role}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-brand-gold font-semibold">
                    📍 {item.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}