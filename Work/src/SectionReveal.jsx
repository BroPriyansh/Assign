import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SectionReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.8, 
  threshold = 0.1,
  className = '',
  effect = 'slide'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px",
    amount: threshold 
  });

  const getVariants = () => {
    switch (effect) {
      case 'slide':
        return {
          hidden: {
            opacity: 0,
            y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
            x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
            scale: 0.95,
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.25, 0.25, 0.75],
            }
          }
        };
      
      case 'zoom':
        return {
          hidden: {
            opacity: 0,
            scale: 0.3,
            rotate: -10,
          },
          visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
              duration,
              delay,
              ease: "backOut",
            }
          }
        };
      
      case 'flip':
        return {
          hidden: {
            opacity: 0,
            rotateY: 90,
            scale: 0.8,
          },
          visible: {
            opacity: 1,
            rotateY: 0,
            scale: 1,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            }
          }
        };
      
      case 'bounce':
        return {
          hidden: {
            opacity: 0,
            y: -100,
            scale: 0.3,
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration,
              delay,
              type: "spring",
              bounce: 0.6,
            }
          }
        };
      
      case 'elastic':
        return {
          hidden: {
            opacity: 0,
            scale: 0,
            rotate: 180,
          },
          visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
              duration,
              delay,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }
          }
        };
      
      case 'blur':
        return {
          hidden: {
            opacity: 0,
            filter: 'blur(10px)',
            y: 30,
          },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            }
          }
        };
      
      default:
        return {
          hidden: {
            opacity: 0,
            y: 30,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            }
          }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

// Staggered children component
export const StaggerContainer = ({ children, staggerDelay = 0.1, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

// Individual stagger item
export const StaggerItem = ({ children, className = '' }) => {
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
};

// Morphing reveal effect
export const MorphReveal = ({ children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const morphVariants = {
    hidden: {
      opacity: 0,
      borderRadius: "50%",
      scale: 0.1,
      rotate: 180,
    },
    visible: {
      opacity: 1,
      borderRadius: "0%",
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={morphVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

// Typewriter effect
export const TypewriterReveal = ({ text, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: 0.05,
        delayChildren: delay,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      }
    }
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Parallax reveal
export const ParallaxReveal = ({ 
  children, 
  offset = 50, 
  className = '' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const parallaxVariants = {
    hidden: {
      opacity: 0,
      y: offset,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={parallaxVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
