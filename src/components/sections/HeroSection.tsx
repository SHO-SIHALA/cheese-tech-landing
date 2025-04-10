import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import NetworkBackground from "@/components/NetworkBackground";
import { useEffect, useRef } from "react";

// Create an AI-themed floating particle effect
const AIParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle properties
    const particleCount = 100;
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      hue: number;
      opacity: number;
    }[] = [];
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        hue: Math.random() > 0.5 ? 210 : 200, // Even darker blue hues
        opacity: Math.random() * 0.5 + 0.3
      });
    }
    
    // Animation
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId: number;
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around screen
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 30%, ${p.opacity})`; // Darker blue with lower lightness
        ctx.fill();
        
        // Connect particles within a certain distance
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = 0.15 * (1 - distance / 100);
            ctx.strokeStyle = `hsla(210, 70%, 20%, ${opacity})`; // Even darker blue for connections
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        
        // Subtle mouse interaction
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
          const force = 0.01 * (1 - distance / 200);
          p.speedX += dx * force;
          p.speedY += dy * force;
        }
        
        // Limit speed
        const speed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY);
        if (speed > 1) {
          p.speedX = (p.speedX / speed) * 1;
          p.speedY = (p.speedY / speed) * 1;
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    render();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full opacity-80 z-0"
    />
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 flex items-center bg-background relative overflow-hidden">
      <AIParticles />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Intelligent <br />
              <span className="ai-gradient-text">Technology Solutions</span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-lg">
              Harnessing the power of artificial intelligence to provide cutting-edge security, efficiency, and innovation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="ai-button group"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a 
                href="#services" 
                className={cn(
                  "animated-element inline-flex items-center justify-center",
                  "rounded-lg px-6 py-3 font-medium text-primary",
                  "bg-white/80 hover:bg-white border border-secondary/30 shadow-sm"
                )}
              >
                Explore AI Services
              </a>
            </div>
          </div>
          <div className="relative mx-auto lg:ml-auto animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-3xl"></div>
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
              <div className="relative glass rounded-2xl overflow-hidden shadow-2xl p-6 flex items-center justify-center bg-white/90">
                <img 
                  src="/lovable-uploads/48a0a64e-71af-4472-904c-e3c9c4327543.png" 
                  alt="AI Technology Illustration" 
                  className="w-full h-auto object-contain"
                />
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="neural-path" style={{top: '10%', left: '20%', width: '60%', transform: 'rotate(20deg)'}}></div>
                  <div className="neural-path" style={{top: '30%', left: '10%', width: '40%', transform: 'rotate(-15deg)'}}></div>
                  <div className="neural-path" style={{top: '50%', left: '30%', width: '50%', transform: 'rotate(10deg)'}}></div>
                  <div className="neural-path" style={{top: '70%', left: '15%', width: '70%', transform: 'rotate(-5deg)'}}></div>
                  <div className="neural-path" style={{top: '85%', left: '25%', width: '45%', transform: 'rotate(25deg)'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
