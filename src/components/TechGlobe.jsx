import { useEffect, useRef } from 'react';

const TechGlobe = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width, height;
    let particles = [];
    const numParticles = 400;
    const R = 350; // Radius of the 3D globe
    let angleX = 0;
    let angleY = 0;
    let animationFrameId;

    const init = () => {
      particles = [];
      // Generate particles along a sphere using the Fibonacci lattice algorithm
      for (let i = 0; i < numParticles; i++) {
        const phi = Math.acos(1 - 2 * (i + 0.5) / numParticles);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i; // Golden ratio math

        const x = Math.sin(phi) * Math.cos(theta);
        const y = Math.cos(phi);
        const z = Math.sin(phi) * Math.sin(theta);

        particles.push({ 
          originalX: x, 
          originalY: y, 
          originalZ: z 
        });
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();
    init();

    const draw = () => {
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, width, height);

      // Spin the globe smoothly
      angleY -= 0.003;
      angleX -= 0.001;

      // Position globe off-center to act as a 3D model sitting cleanly behind the text
      const cx = width > 768 ? width * 0.75 : width * 0.5;
      const cy = height * 0.5;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // First, calculate the 3D transformation for all particles
      const projected = particles.map(p => {
        // Rotate around X-axis
        const y1 = p.originalY * cosX - p.originalZ * sinX;
        const z1 = p.originalY * sinX + p.originalZ * cosX;

        // Rotate around Y-axis
        const x2 = p.originalX * cosY + z1 * sinY;
        const z2 = -p.originalX * sinY + z1 * cosY;

        return { x2, y1, z2 };
      });

      // Draw the connection mesh to simulate a data globe
      ctx.lineWidth = 1;
      for (let i = 0; i < numParticles; i++) {
        for (let j = i + 1; j < numParticles; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          // Check Cartesian distance in the unit sphere coordinate array
          const dist = Math.sqrt(
            Math.pow(p1.x2 - p2.x2, 2) + 
            Math.pow(p1.y1 - p2.y1, 2) + 
            Math.pow(p1.z2 - p2.z2, 2)
          );

          if (dist < 0.28) {
            // Screen projection maths (simulating depth/distance)
            const scale1 = 600 / (600 + p1.z2 * R);
            const px1 = cx + p1.x2 * R * scale1;
            const py1 = cy + p1.y1 * R * scale1;

            const scale2 = 600 / (600 + p2.z2 * R);
            const px2 = cx + p2.x2 * R * scale2;
            const py2 = cy + p2.y1 * R * scale2;

            // Fade lines dynamically based on their placement on the Z axis (fade things spinning to the back)
            // also make connections tighter / more glowing if dots are closer
            const baseAlpha = (0.28 - dist) * 3;
            const depthFader = Math.min(1, Math.max(0, (p1.z2 + p2.z2 + 1) / 2)); 
            
            ctx.beginPath();
            ctx.moveTo(px1, py1);
            ctx.lineTo(px2, py2);
            // Dynamic purple laser links
            ctx.strokeStyle = `rgba(168, 85, 247, ${baseAlpha * depthFader})`;
            ctx.stroke();
          }
        }
      }

      // Draw the isolated intersection nodes (techy data points)
      projected.forEach(p => {
        const scale = 600 / (600 + p.z2 * R);
        const px = cx + p.x2 * R * scale;
        const py = cy + p.y1 * R * scale;

        const r = Math.max(0.5, 2.5 * scale);
        
        // Z-axis fading so backside dots fade into the abyss
        const alpha = Math.min(1, Math.max(0.1, (p.z2 + 1) / 2));

        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);

        // Pink and purple nodes reflecting data points
        if (Math.random() > 0.95) {
          ctx.fillStyle = `rgba(236, 72, 153, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
        }
        
        ctx.fill();
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
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
       <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-60 pointer-events-none mix-blend-screen" 
       />
       {/* Ambient purple backlight for the 3D globe effect */}
       <div className="absolute top-1/4 right-[5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
       
       {/* Fade screen to smoothly merge into your lower dark sections */}
       <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </div>
  );
};

export default TechGlobe;
