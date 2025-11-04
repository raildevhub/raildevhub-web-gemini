import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  theme: 'light' | 'dark';
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -200, y: -200 };

    const particleColor = theme === 'light' ? 'rgba(55, 65, 81, 0.8)' : 'rgba(107, 114, 128, 0.8)';
    const lineColor = theme === 'light' ? 'rgba(55, 65, 81, 0.2)' : 'rgba(107, 114, 128, 0.2)';

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx!.fillStyle = particleColor;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const handleParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(${theme === 'light' ? '55, 65, 81' : '107, 114, 128'}, ${1 - distance / 100})`;
            ctx!.lineWidth = 0.5;
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
        
        const dxMouse = particles[i].x - mouse.x;
        const dyMouse = particles[i].y - mouse.y;
        const distanceMouse = Math.sqrt(dxMouse*dxMouse + dyMouse*dyMouse);
        if (distanceMouse < 150) {
           ctx!.beginPath();
           ctx!.strokeStyle = `rgba(66, 165, 245, ${1 - distanceMouse/150})`;
           ctx!.lineWidth = 1;
           ctx!.moveTo(particles[i].x, mouse.x);
           ctx!.lineTo(mouse.x, mouse.y);
           ctx!.stroke();
        }
      }
    };

    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    const handleMouseMove = (event: MouseEvent) => {
        mouse.x = event.x;
        mouse.y = event.y;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });

    resizeCanvas();
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default ParticleBackground;