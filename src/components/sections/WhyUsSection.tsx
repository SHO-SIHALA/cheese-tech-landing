
const benefits = [
  {
    number: "01",
    title: "Reliable & Secure",
    description: "We prioritize your data security and operational efficiency with proven solutions.",
  },
  {
    number: "02",
    title: "Expert Team",
    description: "Experienced professionals ensuring top-tier IT support and implementation.",
  },
  {
    number: "03",
    title: "Custom Solutions",
    description: "Tailored services designed to fit your specific business goals and challenges.",
  },
  {
    number: "04",
    title: "24/7 Support",
    description: "Always here to assist you with any technical issues or questions.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-4">Why Choose Us</p>
          <h2 className="text-foreground">
            The Cheese Tech
            <br />
            <span className="gradient-text">Advantage</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border/30">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="bg-background p-10 md:p-14 group hover:bg-muted/30 transition-colors duration-500"
            >
              <span className="text-xs font-mono text-primary/50 mb-6 block">{benefit.number}</span>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                {benefit.title}
              </h3>
              <p className="text-foreground/40 font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
