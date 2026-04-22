
const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Cybersecurity Solutions"
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-4">About Us</p>
              <h2 className="text-foreground leading-none">
                Your Trusted
                <br />
                <span className="gradient-text">Tech Partner</span>
              </h2>
            </div>

            <p className="text-foreground/50 text-lg font-light leading-relaxed max-w-lg">
              At Cheese Tech, we provide innovative IT solutions, cybersecurity services, and high-quality hardware — ensuring your technology infrastructure is optimized, protected, and future-ready.
            </p>

            <div className="glass-dark rounded-xl p-6">
              <p className="text-foreground/60 text-sm leading-relaxed">
                With years of experience, we've helped countless businesses transform their digital infrastructure and strengthen their security posture to meet modern challenges.
              </p>
            </div>

            <a
              href="#services"
              className="inline-flex items-center text-xs uppercase tracking-[0.15em] text-foreground/40 hover:text-primary transition-colors duration-500 group"
            >
              Discover our services
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
