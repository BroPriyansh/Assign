import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './LoadingScreen';
import CustomCursor from './CustomCursor';
import ParticlesBackground from './ParticlesBackground';
import SectionReveal, { StaggerContainer, StaggerItem } from './SectionReveal';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Update scroll progress
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };
    
    checkMobile();
    updateScrollProgress();
    
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    
    // Always scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    // Prevent scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  // Enhanced section variants with more spectacular effects
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { 
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 0.75],
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" setIsLoading={setIsLoading} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Custom cursor for desktop */}
            {!isMobile && <CustomCursor />}
            
            
            {/* Particles background */}
            <div className="fixed inset-0 z-0">
              <ParticlesBackground />
            </div>
            
            {/* Main content with enhanced animations */}
            <div className="relative z-10">
              <Navbar />
              
              {/* Hero Section with zoom effect */}
              <SectionReveal effect="zoom" delay={0.2}>
                <div id="home">
                  <Hero />
                </div>
              </SectionReveal>
              
              {/* About Section with slide and stagger */}
              <SectionReveal effect="slide" direction="right" delay={0.1}>
                <StaggerContainer staggerDelay={0.15}>
                  <div id="about">
                    <About />
                  </div>
                </StaggerContainer>
              </SectionReveal>
              
              {/* Skills Section with flip effect */}
              <SectionReveal effect="flip" delay={0.2}>
                <StaggerContainer staggerDelay={0.1}>
                  <div id="skills">
                    <Skills />
                  </div>
                </StaggerContainer>
              </SectionReveal>
              
              {/* Projects Section with elastic bounce */}
              <SectionReveal effect="elastic" delay={0.1}>
                <StaggerContainer staggerDelay={0.2}>
                  <Projects />
                </StaggerContainer>
              </SectionReveal>
              
              {/* Contact Section with blur effect */}
              <SectionReveal effect="blur" delay={0.15}>
                <Contact />
              </SectionReveal>
              
              {/* Footer with bounce effect */}
              <SectionReveal effect="bounce" delay={0.1}>
                <Footer />
              </SectionReveal>
            </div>
            
            {/* Enhanced scroll to top button with magnetic effect */}
            <motion.button
              className="fixed bottom-8 right-8 z-30 w-14 h-14 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 magnetic"
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                boxShadow: "0 0 30px rgba(249, 115, 22, 0.6)"
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              initial={{ 
                opacity: 0, 
                scale: 0,
                rotate: 180,
                y: 100
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 0,
                y: 0
              }}
              transition={{ 
                delay: 2,
                duration: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{
                  y: [-2, 2, -2]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </motion.svg>
            </motion.button>
            
            {/* Floating action bubbles */}
            <div className="fixed bottom-24 right-8 z-30 space-y-3">
              {[
                { icon: "💬", href: "#contact", color: "from-blue-500 to-cyan-500", delay: 2.2 },
                { icon: "🚀", href: "#portfolio", color: "from-purple-500 to-pink-500", delay: 2.4 },
                { icon: "⚡", href: "#skills", color: "from-green-500 to-emerald-500", delay: 2.6 }
              ].map((bubble, index) => (
                <motion.a
                  key={index}
                  href={bubble.href}
                  className={`block w-12 h-12 bg-gradient-to-r ${bubble.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 opacity-80 hover:opacity-100`}
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    x: 50
                  }}
                  animate={{ 
                    opacity: 0.8, 
                    scale: 1,
                    x: 0
                  }}
                  transition={{ 
                    delay: bubble.delay,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 150
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    opacity: 1,
                    rotate: 360
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.span
                    animate={{
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {bubble.icon}
                  </motion.span>
                </motion.a>
              ))}
            </div>
            
            {/* Scroll progress indicator */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 z-50 origin-left"
              style={{
                scaleX: scrollProgress,
              }}
              initial={{ scaleX: 0 }}
            />
            
            {/* Section indicator dots */}
            <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
              <div className="flex flex-col space-y-4">
                {['home', 'about', 'skills', 'portfolio', 'contact'].map((section, index) => (
                  <motion.button
                    key={section}
                    className="w-3 h-3 rounded-full border-2 border-white/40 bg-transparent hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.5 }}
                    onClick={() => {
                      const element = document.getElementById(section === 'portfolio' ? 'portfolio' : section);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 + index * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
