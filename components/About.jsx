export default function About() {
  const features = [
    { title: "Premium Quality", desc: "Crafted to perfection for an undeniable luxury feel." },
    { title: "Soft & Lightweight", desc: "Designed for all-day comfort without the heavy weight." },
    { title: "Long Lasting & Durable", desc: "Extensions that maintain their brilliance over time." }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-brand-rose uppercase tracking-widest text-sm font-semibold mb-3">
              The Standard
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-tight">
              Made to blend. <br/> Made to last. <br/> <span className="italic">Made for you.</span>
            </h3>
            <p className="text-lg text-brand-dark/70 font-light mb-10">
              At Kunmi Luxe, we believe your next look starts with uncompromising quality. We provide premium extensions tailored for the modern, stylish woman who accepts nothing but the best.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-brand-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-serif text-brand-dark">{feature.title}</h4>
                    <p className="mt-1 text-brand-dark/60 font-light">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract/Image Container */}
          <div className="order-1 lg:order-2 relative h-[500px] w-full rounded-2xl overflow-hidden bg-brand-light flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-brand-rose/5"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-serif text-brand-dark italic mb-4">
                "Girly Service, Always"
              </h2>
              <div className="w-16 h-[1px] bg-brand-rose mx-auto mb-4"></div>
              <p className="text-brand-dark/70 font-light uppercase tracking-widest text-sm">
                Fast Response &bull; DM to Order
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}