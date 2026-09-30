"use client";
import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      type: 'video',
      mediaSrc: '/videos/review-1.mp4',
      thumbnail: '/images/video-thumb-1.jpg',
      quote: "The French Curls are incredibly soft and hold their bounce all day. I've never felt more confident.",
      author: "Sarah J.",
      location: "Lagos, NG"
    },
    {
      id: 2,
      type: 'image',
      mediaSrc: '/images/review-2.jpg',
      quote: "My Bone Straight bundles blended seamlessly. The luster is unmatched, and shedding is non-existent.",
      author: "Amina B.",
      location: "London, UK"
    },
    {
      id: 3,
      type: 'image',
      mediaSrc: '/images/review-3.jpg',
      quote: "Girly service indeed! The packaging was luxurious and the Italian Curls are giving me life.",
      author: "Chika O.",
      location: "Abuja, NG"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-rose uppercase tracking-widest text-sm font-semibold">
            The Luxe Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mt-3 mb-4">
            Client Love
          </h2>
          <div className="w-24 h-[1px] bg-brand-rose mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
              
              {/* Media Container */}
              <div className="relative h-64 w-full bg-brand-dark/5">
                {item.type === 'video' ? (
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster={item.thumbnail}
                    preload="none"
                  >
                    <source src={item.mediaSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img 
                    src={item.mediaSrc} 
                    alt={`Review by ${item.author}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Text Container */}
              <div className="p-8 flex flex-col flex-grow text-center">
                <div className="flex justify-center space-x-1 mb-4 text-brand-rose">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-brand-dark/80 font-light italic mb-6 flex-grow">
                  "{item.quote}"
                </p>
                <div>
                  <h4 className="font-serif text-brand-dark text-lg">{item.author}</h4>
                  <span className="text-xs uppercase tracking-widest text-brand-dark/50">
                    {item.location}
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