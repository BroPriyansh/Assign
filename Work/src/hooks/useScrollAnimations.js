import { useEffect, useState } from 'react';

export const useScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [currentSection, setCurrentSection] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollY = () => {
      const newScrollY = window.scrollY;
      
      // Update scroll direction
      if (newScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (newScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      setScrollY(newScrollY);
      lastScrollY = newScrollY;

      // Determine current section with improved logic
      const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
      
      // If at the very top, always show home
      if (newScrollY < 50) {
        if (currentSection !== 'home') {
          setCurrentSection('home');
          setIsTransitioning(true);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 800);
        }
        return;
      }

      const sectionOffsets = sections.map(section => {
        const element = document.getElementById(section);
        return element ? element.offsetTop - 200 : 0; // Increased offset for better detection
      });

      let newCurrentSection = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        if (newScrollY >= sectionOffsets[i]) {
          newCurrentSection = sections[i];
          break;
        }
      }

      if (newCurrentSection !== currentSection) {
        setIsTransitioning(true);
        setCurrentSection(newCurrentSection);
        
        // Reset transition state after animation
        setTimeout(() => {
          setIsTransitioning(false);
        }, 800);
      }
    };

    // Ensure we start at home on mount
    setCurrentSection('home');
    
    window.addEventListener('scroll', updateScrollY, { passive: true });
    // Delay initial call to ensure DOM is ready
    setTimeout(updateScrollY, 100);

    return () => window.removeEventListener('scroll', updateScrollY);
  }, [currentSection]);

  return {
    scrollY,
    scrollDirection,
    currentSection,
    isTransitioning
  };
};

export const useSmoothScroll = () => {
  const scrollToSection = (sectionId, offset = -80) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.offsetTop + offset;
      
      // Add transition effect
      document.body.style.overflow = 'hidden';
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Re-enable scroll after animation
      setTimeout(() => {
        document.body.style.overflow = 'unset';
      }, 1000);
    }
  };

  return { scrollToSection };
};
