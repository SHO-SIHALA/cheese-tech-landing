import { useEffect, useState, Suspense } from "react";
import HeroScene from "../HeroScene";

    let animationId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Mouse repulsion
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150 * 0.02;
          p.vx += dx * force;
          p.vy += dy * force;
        }

        // Damping
        p.vx *= 0.99;
        p.vy *= 0.99;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();

        // Lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - d / 120) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(render);
    };

    const onMouse = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    canvas.addEventListener("mousemove", onMouse);
    render();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouse);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <ParticleField />

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
