import cheeseTechLogo from '@/assets/cheesetech-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <img src={cheeseTechLogo} alt="Cheese Tech" className="h-10 w-auto invert" loading="lazy" />
            <p className="text-foreground/30 text-sm font-light leading-relaxed max-w-xs">
              Your trusted IT & Cybersecurity partner, providing innovative solutions to help businesses stay secure and efficient.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-foreground/50">Contact</h4>
            <address className="not-italic text-foreground/30 text-sm space-y-2 font-light">
              <p>Cheese Tech (SMC-Pvt) Ltd.</p>
              <p>703 Street 43-A Ghouri Town Phase 4A</p>
              <p>Islamabad, Pakistan</p>
              <p className="text-foreground/50">+92 305 566 4442</p>
              <p className="text-foreground/50">info@cheesetech.pk</p>
            </address>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-foreground/50">Connect</h4>
            <div className="flex space-x-3">
              {[
                { href: "https://www.facebook.com/share/1BWtCMWF3D/?mibextid=wwXIfr", label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { href: "https://www.instagram.com/cheesetech.pk?igsh=dGhyZTdmN2VrN2I0&utm_source=qr", label: "Instagram", path: "" },
                { href: "https://wa.me/03055664442", label: "WhatsApp", path: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center hover:border-foreground/30 transition-colors duration-500"
                  aria-label={social.label}
                >
                  {social.label === "Instagram" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-foreground/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-foreground/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={social.path} />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/20 text-xs tracking-wider">
            &copy; {currentYear} Cheese Tech (SMC-Pvt) Ltd.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-foreground/20 text-xs tracking-wider hover:text-foreground/40 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-foreground/20 text-xs tracking-wider hover:text-foreground/40 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
