import Image from 'next/image';

export default function Collections() {
  const collections = [
    {
      id: 1,
      name: "French Curls",
      tagline: "Bouncy. Full. Effortlessly Gorgeous.",
      image: "/images/woman_smiling_with_curly_hair_french_curl.jpg",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Italian Curls",
      tagline: "Defined curls. Luxurious Volume.",
      image: "/images/woman_wearing_hair_extensions_italian_curl.jpg",
      badge: "Trending",
    },
    {
      id: 3,
      name: "Bone Straight",
      tagline: "Sleek. Silky. Timelessly Beautiful.",
      image: "/images/woman_wearing_straight_hair_extensions_bone_straight.jpg",
      badge: "Signature",
    }
  ];

  const whatsappNumber = "2347078617494";

  return (
    <section id="collections" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Accent Ambient Glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Premium Extensions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mt-3 mb-4">
            Shop Our Collection
          </h2>
          <div className="w-20 h-[1.5px] bg-brand-gold mx-auto"></div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((item) => {
            const orderMessage = encodeURIComponent(
              `Hello Kunmi Luxe! ✨ I'm interested in ordering your ${item.name} hair extensions. Please share available lengths and pricing.`
            );
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${orderMessage}`;

            return (
              <a
                key={item.id}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-[480px] sm:h-[520px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-xl border border-white/10 block active:scale-[0.99] transition-transform duration-300"
              >
                {/* Background Image - High-Res Sharp Optimization */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  quality={100}
                  sizes="(max-width: 1536px) 100vw, (max-width: 2752px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={item.id === 1}
                />

                {/* Layered Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15 group-hover:via-black/45 transition-colors duration-500"></div>

                {/* Top Badge */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-widest font-semibold bg-black/60 backdrop-blur-md border border-brand-gold/40 text-brand-gold-light shadow-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-20 flex flex-col justify-end">
                  <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2 group-hover:text-brand-gold-light transition-colors duration-300">
                    {item.name}
                  </h3>
                  
                  <p className="text-white/85 font-light text-sm italic mb-6 leading-relaxed">
                    {item.tagline}
                  </p>

                  {/* Interactive Button: Order + WhatsApp Icon */}
                  <div className="inline-flex items-center space-x-2.5 w-fit px-5 py-2.5 rounded-full bg-white/10 hover:bg-brand-gold backdrop-blur-md border border-brand-gold/40 text-brand-gold-light hover:text-brand-dark transition-all duration-300 shadow-md">
                    <span className="text-xs uppercase tracking-widest font-semibold">Order</span>
                    <svg
                      className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.397-10.416c-5.523 0-10 4.477-10 10 0 1.765.459 3.424 1.264 4.871l-1.342 4.904 5.039-1.321c1.401.767 3.003 1.204 4.707 1.204 5.522 0 10-4.477 10-10s-4.478-10-10-10z"/>
                    </svg>
                  </div>
                </div>

                {/* Border Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-gold/50 transition-colors duration-500 pointer-events-none"></div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}