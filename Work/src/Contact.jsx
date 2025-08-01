import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    Swal.fire({
      icon: 'success',
      title: 'Message Sent Successfully!',
      text: 'Thank you for reaching out. I\'ll get back to you soon!',
      background: '#1f2937',
      color: '#fff',
      confirmButtonColor: '#f97316'
    });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setIsSubmitting(false);
  };

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

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'priyanshtyagi30@gmail.com',
      link: 'mailto:priyanshtyagi30@gmail.com'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Agra, Uttar Pradesh, India',
      link: null
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/priyansh-tyagi-3972442b0',
      link: 'https://linkedin.com/in/priyansh-tyagi-3972442b0'
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-orange-900/40 to-purple-900/50 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
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
            Let&apos;s Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-white text-lg max-w-2xl mx-auto font-medium">
            Ready to start a project or just want to chat? I&apos;d love to hear from you. Send me a message and I&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
                         <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-3xl">💬</span>
                Get in Touch
              </h3>
              <p className="text-white mb-8 leading-relaxed font-medium">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let&apos;s create something amazing together!
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
                         <motion.div 
               className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
               variants={itemVariants}
             >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-3xl">🌐</span>
                Follow Me
              </h3>
              <div className="flex gap-4">
                                 {[
                   { name: 'GitHub', icon: '📚', url: 'https://github.com/BroPriyansh' },
                   { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/priyansh-tyagi-3972442b0' },
                   { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/brop1_2/' }
                 ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-white/10 rounded-2xl flex items-center justify-center text-2xl hover:bg-white/10 hover:scale-110 transition-all duration-300"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
                     <motion.div 
             variants={formVariants}
             className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
           >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">✉️</span>
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="your.email@example.com" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea 
                  name="message" 
                  placeholder="Tell me about your project..." 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="5"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    📤 Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
