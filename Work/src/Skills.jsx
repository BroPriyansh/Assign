import { motion } from 'framer-motion';

const skillsData = {
  "Frontend Development": [
    { name: 'HTML', level: 90, icon: '🌐' },
    { name: 'CSS', level: 85, icon: '🎨' },
    { name: 'React', level: 80, icon: '⚛️' },
    { name: 'Tailwind CSS', level: 85, icon: '💨' },
    { name: 'JavaScript', level: 80, icon: '📜' }
  ],
  "Programming Languages": [
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'Java', level: 70, icon: '☕' },
    { name: 'C', level: 65, icon: '🔧' },
    { name: 'DSA', level: 70, icon: '🧮' }
  ],
  "Tools & Technologies": [
    { name: 'Git', level: 80, icon: '📚' },
    { name: 'Figma', level: 70, icon: '🎯' },
    { name: 'Firebase', level: 65, icon: '🔥' }
  ]
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { 
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  return (
    <section id="skills" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/40 to-purple-900/50 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-500/5 rounded-full blur-3xl"></div>
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
          variants={sectionVariants}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-white text-lg max-w-2xl mx-auto font-medium">
            My technical arsenal spans across frontend development, programming languages, and modern tools that enable me to create exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div
              key={category}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
              variants={sectionVariants}
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                {category}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                                 {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    variants={skillVariants}
                    whileHover="hover"
                  >
                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-xl font-semibold text-white">{skill.name}</span>
                        </div>
                        <span className="text-lg font-bold text-orange-400">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full relative"
                          variants={progressVariants}
                          custom={skill.level}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </motion.div>
                      </div>
                      
                      {/* Skill Level Indicator */}
                      <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Advanced</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
                 <motion.div 
           className="mt-16 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
           variants={sectionVariants}
         >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            🚀 Additional Competencies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Responsive Design', icon: '📱' },
              { name: 'UI/UX Principles', icon: '🎨' },
              { name: 'Problem Solving', icon: '🧩' },
              { name: 'Team Collaboration', icon: '🤝' },
              { name: 'Version Control', icon: '📝' },
              { name: 'API Integration', icon: '🔗' },
              { name: 'Performance Optimization', icon: '⚡' },
              { name: 'Cross-browser Compatibility', icon: '🌍' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                                 <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <div className="text-sm font-medium text-white">{skill.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={sectionVariants}
        >
                     <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-white mb-6 font-medium">
              Let&apos;s collaborate and bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <motion.a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Connect
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
