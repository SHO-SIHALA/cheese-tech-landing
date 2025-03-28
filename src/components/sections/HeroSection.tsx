
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import NetworkBackground from "@/components/NetworkBackground";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 flex items-center bg-background relative overflow-hidden">
      <NetworkBackground className="opacity-60" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-block">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary text-foreground">
                IT & Cybersecurity Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Secure & Innovative <br />
              <span className="text-primary">IT Solutions</span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-lg">
              We provide cutting-edge technology services to help your business stay protected, efficient, and future-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className={cn(
                  "animated-element inline-flex items-center justify-center",
                  "rounded-lg px-6 py-3 font-medium text-white",
                  "bg-primary hover:bg-primary/90 shadow-lg"
                )}
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a 
                href="#services" 
                className={cn(
                  "animated-element inline-flex items-center justify-center",
                  "rounded-lg px-6 py-3 font-medium text-primary",
                  "bg-white/80 hover:bg-white border border-secondary shadow-sm"
                )}
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="relative mx-auto lg:ml-auto animate-fade-in">
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
              <div className="relative glass rounded-2xl overflow-hidden shadow-2xl p-6 flex items-center justify-center bg-white/80">
                <img 
                  src="/lovable-uploads/48a0a64e-71af-4472-904c-e3c9c4327543.png" 
                  alt="IT Services Illustration" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
