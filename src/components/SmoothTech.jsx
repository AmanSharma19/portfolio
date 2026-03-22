import { useEffect, useRef, useState } from 'react';

const SmoothTech = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let particles = [];
    let time = 0;
    let animationFrameId;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    const init = () => {
      particles = [];
      const num = width < 768 ? 40 : 120;
      for (let i = 0; i < num; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2.5 + 1.5,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          color: Math.random() > 0.5 ? '#a855f7' : '#ec4899', // Purple or Pink nodes
          pulseSpeed: Math.random() * 0.02 + 0.01
        });
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time++;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Smooth bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Organic pulse lighting
        const currentAlpha = 0.3 + (Math.sin(time * p.pulseSpeed) + 1) * 0.35; // 0.3 to 1.0 opacity
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();
        
        // Reset
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
      
      {/* 1) Clean, clear static blueprint dot-grid representing data structures */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, #334155 1.5px, transparent 1.5px)', 
          backgroundSize: '48px 48px' 
        }}
      />
      
      {/* 2) Floating dynamic bokeh lights (Smooth and techy) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-[0.85] pointer-events-none mix-blend-screen z-10" 
      />
      
      {/* 3) Dynamic Interactive Mouse Laser Spotlight. Extremely attractive handling. */}
      <div
        className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300 mix-blend-screen"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.05), transparent 80%)`
        }}
      />
      
      {/* 4) Background depth / static lighting */}
      <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Vignette floor fade */}
      <div className="absolute bottom-0 inset-x-0 h-[30%] bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-30" />
    </div>
  );
};

export default SmoothTech;
