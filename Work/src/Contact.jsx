// import React from 'react';

import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { useState } from 'react';
const Contact = () => {

const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    Swal.fire({
      icon: 'success',
      title: 'Form Submitted!',
      text: 'Thank you for reaching out.',
    });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

  return (
      <motion.section id="contact" className="bg-white text-black p-12" initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <h2 className="text-center text-3xl mb-6">Get in touch.</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500" required/>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500" required/>
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500" rows="5" required></textarea>
          <button type="submit" className="w-full p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md">
            Send Message
          </button>
        </form>
      </motion.section>
  );
};

export default Contact;
