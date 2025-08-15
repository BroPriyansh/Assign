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
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
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
            {/* Disabled custom cursor for professional look */}
            
            
            {/* Particles background */}
            <div className="fixed inset-0 z-0">
              <ParticlesBackground />
            </div>
            
            {/* Main content with enhanced animations */}
            <div className="relative z-10">
              <Navbar />
              
              {/* Hero Section */}
              <div id="home">
                <Hero />
              </div>
              
              {/* About Section */}
              <SectionReveal effect="slide" delay={0.1}>
                <div id="about">
                  <About />
                </div>
              </SectionReveal>
              
              {/* Skills Section */}
              <SectionReveal effect="slide" delay={0.1}>
                <div id="skills">
                  <Skills />
                </div>
              </SectionReveal>
              
              {/* Projects Section */}
              <SectionReveal effect="slide" delay={0.1}>
                <Projects />
              </SectionReveal>
              
              {/* Contact Section */}
              <SectionReveal effect="slide" delay={0.1}>
                <Contact />
              </SectionReveal>
              
              {/* Footer */}
              <Footer />
            </div>
            
            {/* Simple scroll to top button */}
            {scrollProgress > 0.1 && (
              <motion.button
                className="fixed bottom-8 right-8 z-30 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </motion.button>
            )}
            
            
            {/* Professional scroll progress indicator */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
              style={{
                scaleX: scrollProgress,
              }}
              initial={{ scaleX: 0 }}
            />
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
