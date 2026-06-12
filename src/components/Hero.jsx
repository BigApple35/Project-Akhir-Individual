import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '#6366F1' : '#06B6D4';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < Math.min(particleCount, 100); i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background Particles & Grid Overlay */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="tech-grid-overlay" />
      <div className="aurora-bg" />

      {/* Hero Content Wrapper */}
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        
        {/* Floating Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-8 group"
        >
          {/* Pulsing Backlight */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-indigo via-brand-violet to-brand-cyan blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
          
          {/* Avatar Container */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-brand-indigo via-brand-violet to-brand-cyan animate-float-slow shadow-2xl">
            <img 
              src="./image-profile.png" 
              alt="Daris Nur Rahmat" 
              className="w-full h-full rounded-full object-cover bg-dark-surface"
              onError={(e) => {
                // If avatar image is not found, fallback to initials on gradient background
                e.target.onerror = null; 
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = `
                  <div class="w-full h-full rounded-full bg-dark-surface flex items-center justify-center font-display text-4xl font-bold text-gradient-primary">
                    DNR
                  </div>
                `;
              }}
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 font-display"
        >
          Hi, I am <span className="text-gradient-primary bg-clip-text font-black">Daris Nur Rahmat</span>
        </motion.h1>

        {/* Dynamic Typing Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-3xl font-medium text-slate-300 mb-6 font-mono"
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Laravel Developer',
              2000,
              'Golang Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-brand-cyan drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]"
          />
        </motion.div>

        {/* Short Bio */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed mb-10"
        >
          I am a student of Information Systems at the Faculty of Computer Science, Universitas Brawijaya.
          I specialize in building clean backends, performant API integrations, and intuitive, interactive full-stack applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan hover:opacity-90 font-medium text-white transition-all shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_4px_30px_rgba(139,92,246,0.6)] font-display hover:scale-105 active:scale-95 duration-200"
          >
            Contact Me
          </button>
          <a 
            href="./CV Daris Nur Rahmat.docx"
            download="CV Daris Nur Rahmat.docx"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-indigo/50 font-medium text-white transition-all hover:scale-105 active:scale-95 duration-200 font-display flex items-center justify-center gap-2 group"
          >
            <span>Download CV</span>
            <svg 
              className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </motion.div>

        {/* Animated Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          onClick={handleScrollToAbout}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer hidden md:flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors duration-300"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll Down</span>
          <div className="w-[24px] h-[40px] rounded-full border-2 border-current flex justify-center p-1.5">
            <motion.div 
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-1.5 h-1.5 rounded-full bg-current"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
