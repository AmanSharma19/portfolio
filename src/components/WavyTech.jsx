import { useEffect, useRef } from 'react';

const WavyTech = () => {
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

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);

    // Four crystal-clear data frequency waves with distinctive brand colors
    const waves = [
      { y: height * 0.45, length: 0.003, amplitude: 90, speed: 0.015, color: '#a855f7' }, // Purple
      { y: height * 0.55, length: 0.004, amplitude: 110, speed: 0.012, color: '#ec4899' }, // Pink
      { y: height * 0.5, length: 0.005, amplitude: 70, speed: 0.02, color: '#06b6d4' },   // Cyan
      { y: height * 0.6, length: 0.002, amplitude: 130, speed: 0.01, color: '#8b5cf6' }   // Violet
    ];

    let time = 0;

    const draw = () => {
      // Clear the canvas completely every frame for ultimate crispness (no messy trails)
      ctx.clearRect(0, 0, width, height);

      time += 1;

      waves.forEach((wave) => {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 10) {
          // Clean sine wave calculation with organic breathing amplitude
          const y = wave.y + Math.sin(x * wave.length + time * wave.speed) * wave.amplitude * Math.cos(time * 0.005);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;

        // Apply a glowing neon effect to the lines
        ctx.shadowBlur = 20;
        ctx.shadowColor = wave.color;
        
        ctx.stroke();
        
        // Reset shadow to prevent bleeding
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
    <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden flex flex-col items-center justify-center">
      {/* Clean, static, minimal developer dot-grid layer */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}
      />
      
      {/* 
        The dynamic undulating wavy data streams 
        Mix-blend-screen ensures the neon colors pop perfectly against the dark background 
      */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-[0.85] pointer-events-none mix-blend-screen z-10" 
      />
      
      {/* Absolute dark vignette frame so the waves don't look awkwardly cut off at the screen edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_100%)] pointer-events-none z-20" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-20" />
    </div>
  );
};

export default WavyTech;
