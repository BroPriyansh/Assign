import { motion } from 'framer-motion';
import me from './me.jpg';

const About = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: { duration: 0.3 }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/40 to-blue-900/50 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative group"
              variants={imageVariants}
              whileHover="hover"
            >
              {/* Glowing Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={me} 
                  alt="Priyansh Tyagi" 
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                👨‍💻 Developer
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            {/* Description */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-3xl">🌟</span>
                Who I Am
              </h3>
              <p className="text-white leading-relaxed text-lg font-medium">
                Motivated and enthusiastic 2nd-year B.Tech Computer Science student with a strong foundation in front-end
                development. Skilled in HTML, CSS, JavaScript and React. Proficient in Python, C, and Java, with a proven ability
                to work collaboratively and independently. Eager to leverage skills in real-world projects and contribute to the
                technology industry with innovative and user-centric solutions.
              </p>
            </div>

            {/* Personal Info */}
            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              variants={statsVariants}
            >
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">📍</span>
                  Personal Details
                </h4>
                                 <div className="space-y-3 text-white">
                   <div className="flex items-center gap-3">
                     <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                     <span><strong>Location:</strong> Agra, Uttar Pradesh</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                     <span><strong>Nationality:</strong> Indian</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                     <span><strong>Age:</strong> 21</span>
                   </div>
                 </div>
              </div>

              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎓</span>
                  Education & Interests
                </h4>
                                 <div className="space-y-3 text-white">
                   <div className="flex items-center gap-3">
                     <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                     <span><strong>Study:</strong> GLA University, Mathura</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                     <span><strong>Interests:</strong> Reading Novels, Chess</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                     <span><strong>Focus:</strong> Frontend Development</span>
                   </div>
                 </div>
              </div>
            </motion.div>

            {/* Skills Preview */}
            <motion.div 
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl"
              variants={statsVariants}
            >
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Quick Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'JavaScript', 'HTML', 'CSS', 'Python', 'Java', 'C'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 rounded-full text-white text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
