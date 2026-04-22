import { useEffect, useState, Suspense, lazy } from "react";

const HeroScene = lazy(() => import("../HeroScene"));

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.04] blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/[0.03] blur-[100px]" />
      </div>

      <div className="container relative z-10 text-center px-6">
        <div
          className={`transition-all duration-[1.2s] ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-8 font-medium">
            IT & Cybersecurity Solutions
          </p>

          <h1 className="text-foreground max-w-5xl mx-auto">
            We Build{" "}
            <span className="gradient-text">Digital</span>
            <br />
            Experiences
          </h1>

          <p className="text-foreground/40 max-w-xl mx-auto text-lg mt-8 mb-12 font-light leading-relaxed">
            Cutting-edge technology solutions powered by innovation.
            Security, efficiency, and creativity — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#products" className="glow-button">
              Explore Products
            </a>
            <a
              href="#contact"
              className="text-xs uppercase tracking-[0.15em] text-foreground/40 hover:text-foreground transition-colors duration-500 py-4"
            >
              Get in Touch →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-[1.5s] delay-[0.8s] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/20">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-foreground/20 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
