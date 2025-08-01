import { motion } from 'framer-motion';
import bg from './header-background.webp';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState("Priyansh Tyagi.");
  const texts = ["Priyansh Tyagi.", "a Frontend Developer.", "a React Enthusiast.", "a Tech Lover.", "a Problem Solver.", "a Student."];

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prev) => (prev === texts[0] ? texts[1] : prev === texts[1] ? texts[2] : prev === texts[2] ? texts[3] : prev === texts[3] ? texts[4] : prev === texts[4] ? texts[5] : texts[0]));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
    <section className="relative flex flex-col text-center justify-center items-center text-white bg-cover bg-center h-screen overflow-hidden" 
             style={{ backgroundImage: `url(${bg})` }}>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/50 to-blue-900/60"></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
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

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 w-full max-w-6xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Glassmorphism Card */}
        <motion.div 
          className="backdrop-blur-xl bg-white/15 border border-white/20 rounded-3xl p-12 shadow-2xl"
          variants={heroVariants}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)',
            boxShadow: '0 25px 45px rgba(0,0,0,0.3)'
          }}
        >
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-sm"></div>
          
          <div className="relative z-10">
            {/* Greeting */}
            <motion.div 
              className="text-2xl font-light text-gray-300 mb-4"
              variants={textVariants}
            >
                             👋 Hello, I&apos;m
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
              variants={textVariants}
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Hi, I am{' '}
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                {displayText}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-xl text-white max-w-4xl mx-auto leading-relaxed mb-10 font-medium"
              variants={textVariants}
            >
              Motivated and enthusiastic 2nd-year B.Tech Computer Science student with a strong foundation in front-end
              development. Skilled in HTML, CSS, JavaScript, and React. Proficient in Python, C, and Java, with a proven ability
              to work collaboratively and independently. Eager to leverage skills in real-world projects and contribute to the
              technology industry with innovative and user-centric solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-6"
              variants={textVariants}
            >
              <motion.a 
                href="https://asset.cloudinary.com/dymfymgnm/0204b511fd3a990afeb5056dc1fb3314" 
                target='blank' 
                download
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group"
              >
                <button className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25">
                  <span className="relative z-10 flex items-center gap-2">
                    📄 Resume
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </motion.svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </motion.a>

              <motion.a
                href="#contact"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group"
              >
                <button className="relative overflow-hidden border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10">
                  <span className="relative z-10 flex items-center gap-2">
                    💬 Contact Me
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </motion.svg>
                  </span>
                </button>
              </motion.a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
