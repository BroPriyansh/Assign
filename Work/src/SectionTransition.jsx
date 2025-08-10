import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimations } from './hooks/useScrollAnimations';

const SectionTransition = () => {
  const { currentSection, isTransitioning, scrollDirection } = useScrollAnimations();

  const getSectionInfo = (section) => {
    const sectionData = {
      home: { 
        title: 'Welcome', 
        color: 'from-orange-500 to-pink-500',
        icon: '🏠',
        bg: 'bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20'
      },
      about: { 
        title: 'About Me', 
        color: 'from-purple-500 to-blue-500',
        icon: '👨‍💻',
        bg: 'bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20'
      },
      skills: { 
        title: 'My Skills', 
        color: 'from-blue-500 to-cyan-500',
        icon: '⚡',
        bg: 'bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20'
      },
      portfolio: { 
        title: 'Projects', 
        color: 'from-cyan-500 to-green-500',
        icon: '🚀',
        bg: 'bg-gradient-to-br from-cyan-500/20 via-green-500/20 to-emerald-500/20'
      },
      contact: { 
        title: 'Contact', 
        color: 'from-green-500 to-orange-500',
        icon: '📧',
        bg: 'bg-gradient-to-br from-green-500/20 via-yellow-500/20 to-orange-500/20'
      }
    };
    return sectionData[section] || sectionData.home;
  };

  const currentSectionInfo = getSectionInfo(currentSection);

  const overlayVariants = {
    initial: {
      x: scrollDirection === 'down' ? '100%' : '-100%',
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    exit: {
      x: scrollDirection === 'down' ? '-100%' : '100%',
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const contentVariants = {
    initial: {
      y: 50,
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: 'easeOut',
      }
    },
    exit: {
      y: -50,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      }
    }
  };

  const particleVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 180, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <motion.div
          key={`transition-${currentSection}`}
          className={`fixed inset-0 z-[60] pointer-events-none ${currentSectionInfo.bg}`}
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Backdrop blur effect */}
          <div className="absolute inset-0 backdrop-blur-xl bg-black/40" />
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={particleVariants}
                animate="animate"
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>

          {/* Geometric shapes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-white/20"
            animate={{
              rotate: -360,
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut"
            }}
          />

          {/* Main content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <motion.div
              className="text-center"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Section icon with glow effect */}
              <motion.div
                className="relative mb-6"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center text-4xl backdrop-blur-sm border border-white/20">
                  {currentSectionInfo.icon}
                </div>
              </motion.div>

              {/* Section title */}
              <motion.h2
                className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${currentSectionInfo.color} bg-clip-text text-transparent mb-4`}
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                {currentSectionInfo.title}
              </motion.h2>

              {/* Loading bar */}
              <motion.div
                className="w-64 h-1 bg-white/10 rounded-full mx-auto overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className={`h-full bg-gradient-to-r ${currentSectionInfo.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                />
              </motion.div>

              {/* Animated dots */}
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-white/40 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Corner decorative elements */}
          <motion.div
            className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/20"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1.5,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionTransition;
