import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/BroPriyansh',
      icon: '📚',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/priyansh-tyagi-3972442b0',
      icon: '💼',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/brop1_2/',
      icon: '📷',
      color: 'hover:text-pink-400'
    }
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
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
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900/40 to-blue-900/50 border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 py-12"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand Section */}
          <motion.div 
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
              Priyansh Tyagi
            </h3>
            <p className="text-gray-300 text-sm">
              Frontend Developer & React Enthusiast
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Creating amazing digital experiences
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4 flex items-center justify-center gap-2">
                <span className="text-xl">📧</span>
                Get in Touch
              </h4>
              <a 
                href="mailto:priyanshtyagi30@gmail.com" 
                className="text-orange-400 hover:text-orange-300 transition-colors duration-300 text-sm break-all"
              >
                priyanshtyagi30@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="text-center md:text-right"
            variants={itemVariants}
          >
            <h4 className="text-white font-semibold mb-4 flex items-center justify-center md:justify-end gap-2">
              <span className="text-xl">🌐</span>
              Follow Me
            </h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-white/10 rounded-xl flex items-center justify-center text-xl text-white transition-all duration-300 ${social.color}`}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Bottom Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Priyansh Tyagi. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Skills
            </a>
            <a 
              href="#portfolio" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Made with Love */}
        <motion.div 
          className="text-center mt-8"
          variants={itemVariants}
        >
          <p className="text-gray-500 text-xs">
            Made with ❤️ using React & Tailwind CSS
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
