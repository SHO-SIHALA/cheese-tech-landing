
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

interface NetworkBackgroundProps {
  className?: string;
}

const NetworkBackground: React.FC<NetworkBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mousePos = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  // Initialize particles
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    const particleCount = Math.min(Math.floor(rect.width * rect.height / 15000), 50);
    
    const newParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 2,
      });
    }
    
    setParticles(newParticles);
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    
    const handleMouseLeave = () => {
      mousePos.current = { x: null, y: null };
    };
    
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    
    // Handle window resize
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || particles.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const drawNetwork = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particle positions
      const updatedParticles = particles.map(particle => {
        let { x, y, vx, vy, size } = particle;
        
        // Move particles
        x += vx;
        y += vy;
        
        // Bounce off walls
        if (x < 0 || x > canvas.width) vx = -vx;
        if (y < 0 || y > canvas.height) vy = -vy;
        
        // Mouse interaction
        if (mousePos.current.x !== null && mousePos.current.y !== null) {
          const dx = mousePos.current.x - x;
          const dy = mousePos.current.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            // Move particles away from mouse
            const angle = Math.atan2(dy, dx);
            vx -= Math.cos(angle) * 0.1;
            vy -= Math.sin(angle) * 0.1;
          }
        }
        
        // Apply some friction
        vx *= 0.99;
        vy *= 0.99;
        
        // Limit velocity
        const maxVel = 1;
        const vel = Math.sqrt(vx * vx + vy * vy);
        if (vel > maxVel) {
          vx = (vx / vel) * maxVel;
          vy = (vy / vel) * maxVel;
        }
        
        return { x, y, vx, vy, size };
      });
      
      // Draw connections between nearby particles
      ctx.beginPath();
      ctx.strokeStyle = "hsla(var(--primary), 0.2)";
      
      for (let i = 0; i < updatedParticles.length; i++) {
        for (let j = i + 1; j < updatedParticles.length; j++) {
          const dx = updatedParticles[i].x - updatedParticles[j].x;
          const dy = updatedParticles[i].y - updatedParticles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(updatedParticles[i].x, updatedParticles[i].y);
            ctx.lineTo(updatedParticles[j].x, updatedParticles[j].y);
            ctx.strokeStyle = `hsla(var(--primary), ${(1 - distance / 150) * 0.3})`;
            ctx.lineWidth = (1 - distance / 150) * 1.5;
            ctx.stroke();
          }
        }
      }
      
      // Draw particles
      updatedParticles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(var(--primary), 0.8)";
        ctx.fill();
      });
      
      setParticles(updatedParticles);
      animationRef.current = requestAnimationFrame(drawNetwork);
    };
    
    drawNetwork();
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [particles]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full -z-10", className)}
    />
  );
};

export default NetworkBackground;
