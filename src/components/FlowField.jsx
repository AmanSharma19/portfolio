import { useEffect, useRef } from 'react';

const FlowField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    // Fill completely dark once
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, width, height);

    const particles = [];
    const numParticles = Math.min(1000, Math.floor((width * height) / 1000)); // Adaptive density

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        age: Math.random() * 150,
        maxAge: 100 + Math.random() * 150,
        // Brand colors: Cyan, Pink, Purple
        color: Math.random() > 0.6 
          ? 'rgba(168, 85, 247, 0.4)' // Purple
          : Math.random() > 0.5 
            ? 'rgba(236, 72, 153, 0.4)' // Pink
            : 'rgba(6, 182, 212, 0.4)',  // Cyan
        thickness: Math.random() * 1.5 + 0.5
      });
    }

    // A fast math-based pseudo-noise to control the flowing vector field
    const getFlowVector = (x, y, time) => {
      const scale = 0.002;
      const tScale = 0.0005;
      
      const angle = (Math.sin(x * scale + time * tScale) + Math.cos(y * scale - time * tScale) + Math.sin((x + y) * scale * 0.5)) * Math.PI * 2;
      return angle;
    };

    let time = 0;

    const draw = () => {
      // Soft fade instead of clearRect to leave long, glowing, smooth trails
      ctx.fillStyle = 'rgba(10, 10, 10, 0.06)';
      ctx.fillRect(0, 0, width, height);

      time += 2;

      particles.forEach(p => {
        const angle = getFlowVector(p.x, p.y, time);
        
        // Acceleration field
        p.vx += Math.cos(angle) * 0.15;
        p.vy += Math.sin(angle) * 0.15;
        
        // Velocity limiter/friction
        p.vx *= 0.95;
        p.vy *= 0.95;

        const newX = p.x + p.vx;
        const newY = p.y + p.vy;

        // Draw flowing light streak
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(newX, newY);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.thickness;
        ctx.stroke();

        p.x = newX;
        p.y = newY;
        p.age++;

        // Regenerate particles dynamically when they get old or wander off-screen
        if (p.x < 0 || p.x > width || p.y < 0 || p.y > height || p.age > p.maxAge) {
          p.x = Math.random() * width;
          p.y = Math.random() * height;
          p.vx = 0;
          p.vy = 0;
          p.age = 0;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
      {/* 
        mix-blend-screen ensures the glowing particle trails overlay nicely 
        without blowing out the background into gray mud 
      */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-90 pointer-events-none mix-blend-screen" 
      />
      
      {/* Ambient center spotlight to add depth to the fluid simulation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[200px] pointer-events-none mix-blend-screen" />
      
      {/* Vignette mask to fade out the edges smoothly into the dark section container */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)] pointer-events-none opacity-80" />
      
      {/* Heavy bottom fade for transitioning into About/Skills */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </div>
  );
};

export default FlowField;
