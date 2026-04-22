
const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-4">Get in Touch</p>
          <h2 className="text-foreground">
            Let's Build
            <br />
            <span className="gradient-text">Something Great</span>
          </h2>
          <p className="text-foreground/40 text-lg font-light mt-6 max-w-xl mx-auto">
            Looking for cutting-edge IT solutions? Contact us today to discover how Cheese Tech can help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3 glass-dark rounded-xl p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs uppercase tracking-[0.1em] text-foreground/40">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.1em] text-foreground/40">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs uppercase tracking-[0.1em] text-foreground/40">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.1em] text-foreground/40">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="glow-button w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 glass-dark rounded-xl p-8 md:p-10 flex flex-col">
            <h3 className="text-lg font-semibold text-foreground mb-8">Connect</h3>

            <div className="space-y-8 flex-grow">
              {[
                { label: "Phone", value: "+92 305 566 4442" },
                { label: "Email", value: "info@cheesetech.pk" },
                { label: "Location", value: "703 Street 43-A, Ghouri Town Phase 4A, Islamabad" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-[0.15em] text-foreground/30 mb-1">{item.label}</p>
                  <p className="text-foreground/70 text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <a
                href="https://wa.me/03055664442"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button w-full text-center block"
                style={{ borderColor: 'hsla(142, 70%, 45%, 0.3)' }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
