export default function Services() {
  const services = [
    {
      id: 'rtw',
      category: '01 / Daily Luxury',
      title: 'Ready-to-Wear Co-Ords',
      desc: 'Smart two-piece co-ord sets, fluid palazzos, tops, skirts, and tailored pants engineered for seamless day-to-night transitions and effortless comfort.',
      tags: ['Two-Piece Sets', 'Palazzo Pants', 'Chic Tops'],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      id: 'owanbe',
      category: '02 / Ceremonial Couture',
      title: 'Owanbe & Statement Bubu',
      desc: 'Show-stopping traditional dresses, flowing royal Bubu gowns, and structured hourglass silhouettes sculpted for high-society Nigerian celebrations.',
      tags: ['Royal Bubu Gowns', 'Fitted Dresses', 'Aso-Ebi Finishing'],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 'kiddies',
      category: '03 / Youth Edit',
      title: 'Little Tcee’s Collection',
      desc: 'Adorable and durable fashion for female children—charming party frocks, skirts, soft blouses, and comfortable play trousers tailored with irritation-free linings.',
      tags: ['Kiddies Gowns', 'Play Trousers', 'Soft Skirts'],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const whatsappNumber = "2348167762470";

  return (
    <section id="services" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-brand-dark/10 gap-6">
          <div>
            <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-mono font-semibold block mb-2">
              Bespoke & Tailoring Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark leading-tight">
              Tailoring Standards. <br />
              <span className="italic font-light text-brand-gold-dark">From Ile-Ife to the World.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-brand-dark/70 font-light max-w-md leading-relaxed">
            Every garment combines breathable fabric sourcing, precise pattern drafting, and clean seam construction to guarantee an enduring, flattering drape.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div 
              key={svc.id} 
              className="group relative p-8 sm:p-10 rounded-2xl bg-brand-light/50 border border-brand-dark/10 hover:border-brand-gold hover:bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(212,175,55,0.08)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-brand-gold font-bold">
                    {svc.category}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-300">
                    {svc.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-serif text-brand-dark mb-4 group-hover:text-brand-gold-dark transition-colors">
                  {svc.title}
                </h3>
                
                <p className="text-brand-dark/70 font-light text-sm leading-relaxed mb-6">
                  {svc.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-brand-dark/10 mb-6">
                  {svc.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded bg-brand-dark/5 text-brand-dark/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Tcee's Fit! I would like to inquire about your ${svc.title} services.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-bold text-brand-dark group-hover:text-brand-gold transition-colors"
                >
                  Consult Tailor 
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}