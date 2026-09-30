export default function Services() {
  const services = [
    {
      id: 'extensions',
      title: 'Premium Extensions',
      desc: 'Source the finest French Curls, Italian Curls, and Bone Straight bundles. Lightweight, durable, and designed to blend flawlessly.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
      )
    },
    {
      id: 'installs',
      title: 'Luxury Installs',
      desc: 'Experience a true skin-like melt. Our luxury installs include professional bleaching, plucking, and styling for an undetectable, natural finish.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
      )
    },
    {
      id: 'revamps',
      title: 'Wig Revamps',
      desc: 'Breathe new life into your old units. We offer deep conditioning, detangling, closure replacements, and custom restyling to restore their original glory.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">The Kunmi Luxe Standard</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mt-4 mb-4">Our Expertise</h2>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((svc) => (
            <div key={svc.id} className="group p-8 rounded-2xl bg-brand-light/60 border border-brand-gold/15 hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all duration-300 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand-gold shadow-sm mb-6 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                {svc.icon}
              </div>
              <h3 className="text-2xl font-serif text-brand-dark mb-4">{svc.title}</h3>
              <p className="text-brand-dark/70 font-light leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}