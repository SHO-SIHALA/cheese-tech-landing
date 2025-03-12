
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 flex items-center bg-gradient-tech">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-block">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-tech-200 text-tech-800">
                IT & Cybersecurity Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Secure & Innovative <br />
              <span className="text-tech-600">IT Solutions</span>
            </h1>
            <p className="text-lg text-cheese-600 max-w-lg">
              We provide cutting-edge technology services to help your business stay protected, efficient, and future-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className={cn(
                  "animated-element inline-flex items-center justify-center",
                  "rounded-lg px-6 py-3 font-medium text-white",
                  "bg-tech-600 hover:bg-tech-700 shadow-lg"
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
                  "rounded-lg px-6 py-3 font-medium text-tech-700",
                  "bg-white/80 hover:bg-white border border-tech-200 shadow-sm"
                )}
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="relative mx-auto lg:ml-auto animate-fade-in">
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-tech-500/20 to-tech-300/20 blur-3xl"></div>
              <div className="relative glass rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Tech Infrastructure" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="600"
                  height="600"
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
