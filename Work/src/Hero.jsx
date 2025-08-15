import { motion } from 'framer-motion';
import bg from './header-background.webp';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState("Frontend Developer");
  const texts = ["Frontend Developer", "React Specialist", "Full Stack Developer", "Software Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prev) => {
        const currentIndex = texts.indexOf(prev);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 4000); // Slower, more professional

    return () => clearInterval(interval);
  }, [texts]);

  // Enhanced animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const particleVariants = {
    animate: {
      y: [-20, 20, -20],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative flex flex-col text-center justify-center items-center text-white bg-cover bg-center min-h-screen px-4 overflow-hidden" 
             style={{ backgroundImage: `url(${bg})` }}>
      
      {/* Dynamic Attractive Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-blue-900/90 to-indigo-900/95"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/30 via-transparent to-pink-900/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-violet-900/20 to-emerald-900/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced floating geometric shapes with vibrant colors */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-pink-500/25 to-violet-500/30 rounded-full blur-xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-cyan-400/25 to-emerald-500/30 rounded-full blur-2xl"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1.1, 0.9, 1.1],
            rotate: [360, 0, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-orange-500/30 to-red-500/25 rounded-full blur-xl"
          animate={{
            y: [-15, 15, -15],
            x: [15, -15, 15],
            rotate: [0, 360, 0],
            scale: [0.8, 1.3, 0.8]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/4 left-1/3 w-28 h-28 bg-gradient-to-r from-blue-400/20 to-indigo-500/25 rounded-full blur-2xl"
          animate={{
            y: [25, -25, 25],
            x: [-20, 20, -20],
            scale: [1.2, 0.8, 1.2]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Enhanced colorful particles */}
        {[...Array(12)].map((_, i) => {
          const colors = [
            'bg-cyan-400/40', 'bg-pink-400/40', 'bg-violet-400/40', 
            'bg-emerald-400/40', 'bg-orange-400/40', 'bg-blue-400/40',
            'bg-rose-400/40', 'bg-teal-400/40', 'bg-purple-400/40',
            'bg-lime-400/40', 'bg-amber-400/40', 'bg-indigo-400/40'
          ];
          return (
            <motion.div
              key={i}
              className={`absolute w-3 h-3 ${colors[i]} rounded-full blur-sm`}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [-15, 15, -15],
                x: [-10, 10, -10],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
                rotate: [0, 360, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          );
        })}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Professional Card with glow effect */}
        <motion.div 
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          variants={heroVariants}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            boxShadow: '0 25px 45px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
        >
          {/* Dynamic animated border with multiple colors */}
          <motion.div 
            className="absolute inset-0 rounded-3xl opacity-60 blur-sm"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3))',
                'linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(34, 197, 94, 0.3), rgba(59, 130, 246, 0.3))',
                'linear-gradient(45deg, rgba(34, 197, 94, 0.3), rgba(249, 115, 22, 0.3), rgba(147, 51, 234, 0.3))',
                'linear-gradient(45deg, rgba(249, 115, 22, 0.3), rgba(59, 130, 246, 0.3), rgba(236, 72, 153, 0.3))'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-10">
            {/* Greeting with icon */}
            <motion.div 
              className="text-lg md:text-xl text-gray-300 mb-4 flex items-center justify-center gap-2"
              variants={textVariants}
            >
              <motion.span 
                className="text-2xl"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
              >
                👋
              </motion.span>
              Hello, I'm
            </motion.div>

            {/* Enhanced Main Title */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={textVariants}
            >
              <motion.span 
                className="text-white relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Priyansh Tyagi
                {/* Dynamic colorful underline effect */}
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: 1,
                    background: [
                      'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
                      'linear-gradient(90deg, #ec4899, #22c55e, #3b82f6)',
                      'linear-gradient(90deg, #22c55e, #f97316, #8b5cf6)',
                      'linear-gradient(90deg, #f97316, #3b82f6, #ec4899)'
                    ]
                  }}
                  transition={{ 
                    delay: 1.5, 
                    duration: 0.8,
                    background: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
              </motion.span>
              <br />
              <motion.span 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                key={displayText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0
                }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.5
                }}
              >
                {displayText}
              </motion.span>
            </motion.h1>

            {/* Enhanced Description with highlights */}
            <motion.p 
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10"
              variants={textVariants}
            >
              Passionate <span className="text-cyan-300 font-semibold">Computer Science student</span> specializing in modern web development. 
              Experienced in building scalable applications with{' '}
              <span className="text-emerald-300 font-semibold">React, JavaScript,</span> and contemporary technologies. 
              Committed to creating efficient, user-focused solutions that drive{' '}
              <span className="text-pink-300 font-semibold">business growth</span>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
              variants={textVariants}
            >
              <motion.a 
                href="https://drive.google.com/file/d/1r8gU-CplaxvvbjcTWa7Nz_C4SZkvWZmH/view?usp=sharing" 
                target='_blank' 
                download
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group"
                rel="noopener noreferrer"
              >
                <motion.button 
                  className="relative overflow-hidden text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 flex items-center gap-3"
                  animate={{
                    background: [
                      'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                      'linear-gradient(45deg, #8b5cf6, #ec4899)',
                      'linear-gradient(45deg, #ec4899, #22c55e)',
                      'linear-gradient(45deg, #22c55e, #3b82f6)'
                    ]
                  }}
                  transition={{
                    background: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
                  }}
                >
                  <span className="relative z-10">Download Resume</span>
                  <motion.svg 
                    className="w-5 h-5 relative z-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ y: 2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </motion.svg>
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </motion.button>
              </motion.a>

              <motion.a
                href="#contact"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group"
              >
                <motion.button 
                  className="relative overflow-hidden border-2 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-2xl"
                  animate={{
                    borderColor: [
                      'rgba(59, 130, 246, 0.6)',
                      'rgba(139, 92, 246, 0.6)',
                      'rgba(236, 72, 153, 0.6)',
                      'rgba(34, 197, 94, 0.6)'
                    ],
                    backgroundColor: [
                      'rgba(59, 130, 246, 0.1)',
                      'rgba(139, 92, 246, 0.1)',
                      'rgba(236, 72, 153, 0.1)',
                      'rgba(34, 197, 94, 0.1)'
                    ]
                  }}
                  transition={{
                    borderColor: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    backgroundColor: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.15)'
                  }}
                >
                  <span className="relative z-10">Contact Me</span>
                  <motion.svg 
                    className="w-5 h-5 relative z-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </motion.svg>
                  {/* Rainbow shine effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                        'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
                        'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.3), transparent)',
                        'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.3), transparent)'
                      ]
                    }}
                    transition={{
                      background: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  />
                </motion.button>
              </motion.a>
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <motion.div 
              className="mt-12 hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <motion.div 
                className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center relative cursor-pointer"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, borderColor: 'rgba(255,255,255,0.8)' }}
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <motion.div 
                  className="w-1.5 h-3 rounded-full mt-2"
                  animate={{ 
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8],
                    background: [
                      'linear-gradient(to bottom, #06b6d4, #8b5cf6)',
                      'linear-gradient(to bottom, #8b5cf6, #ec4899)',
                      'linear-gradient(to bottom, #ec4899, #22c55e)',
                      'linear-gradient(to bottom, #22c55e, #06b6d4)'
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    background: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
              <motion.p 
                className="text-xs text-gray-400 mt-2"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Scroll Down
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
