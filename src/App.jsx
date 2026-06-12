import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Custom Cursor Spring Physics
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 35, stiffness: 350, mass: 0.3 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // End splash loading screen after 1.8 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    // Mouse movement listener
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          /* Splash Screen */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#0A0A0F] z-[9999] flex flex-col items-center justify-center gap-6 select-none"
          >
            {/* Logo loading animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-6xl font-bold font-display relative"
            >
              <span className="text-gradient-primary font-black">D.</span>
              {/* Backglow behind logo */}
              <div className="absolute inset-0 bg-brand-violet/20 blur-xl rounded-full scale-150 animate-pulse -z-10" />
            </motion.div>

            {/* Shimmer loading bar */}
            <div className="w-48 h-[3px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.2, 
                  ease: 'easeInOut' 
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan"
              />
            </div>
            
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs font-mono tracking-widest text-slate-500 uppercase"
            >
              Initializing Portfolio
            </motion.span>
          </motion.div>
        ) : (
          /* Main Content */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen"
          >
            {/* Smooth Spring-based Custom Cursor Glow */}
            <motion.div
              className="custom-cursor-glow hidden md:block"
              style={{
                left: cursorX,
                top: cursorY,
              }}
            />

            {/* Sticky Navigation bar */}
            <Navbar />

            {/* Portfolio Sections */}
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
