import { useEffect, useRef } from 'react';

const CodeRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Binary and Tech characters
    const chars = '01#A855F7<>{}[];!@$%&*()_=+\\/?010101110001010'.split('');
    const fontSize = 16;
    let columns = Math.ceil(canvas.width / fontSize);

    let drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * canvas.height; // Start at random positions
    }

    const draw = () => {
      // Trail effect (semi-transparent black overlay)
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color to techy purple and pink
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Randomly make some characters pink for tech highlight
        if (Math.random() > 0.9) {
          ctx.fillStyle = '#ec4899'; 
        } else {
          ctx.fillStyle = '#a855f7'; 
        }
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drops when they fall off screen randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 35);

    // Re-initialize columns on resize
    const handleResize = () => {
      resizeCanvas();
      const newColumns = Math.ceil(canvas.width / fontSize);
      if (newColumns > columns) {
        for (let x = columns; x < newColumns; x++) {
          drops[x] = Math.random() * canvas.height;
        }
      }
      columns = newColumns;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0a0a]">
      {/* Code Rain Matrix */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-30 mix-blend-screen"
      />
      
      {/* Ambient gradient overlay so it fades smoothly into the page bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </div>
  );
};

export default CodeRain;
