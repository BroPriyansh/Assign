
import bg from './header-background.webp';
import i1 from './Work1.png';
import i2 from './Work2.png';
import me from './me.jpg';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { motion } from "framer-motion";

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const skillCategories = [
    {
      title: 'Spoken languages',
      skills: [
        { name: 'English', level: 70 },
        { name: 'Hindi', level: 90 },
      ],
    },
    {
      title: 'Frontend development',
      skills: [
        { name: 'React', level: 70 },
        { name: 'JavaScript', level: 70 },
        { name: 'Tailwind', level: 70 },
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 80 },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 60 },
        { name: 'C', level: 60 },
        { name: 'Java', level: 70 },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', level: 70 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 70 },
      ],
    }
  ];

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

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [displayText, setDisplayText] = useState("Priyansh Tyagi.");
  const texts = ["Priyansh Tyagi.", "Frontend Developer."];

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prev) => (prev === texts[0] ? texts[1] : texts[0]));
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const heroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };


  return (
    <>
      <header className="flex justify-center sm:space-x-16 space-x-4 bg-gray-800 bg-opacity-60 z-10 fixed w-full text-white p-4">
        <a href="#about" className="hover:text-orange-500 font-medium text-lg cursor-pointer hover:delay-150">About</a>
        <a href="#skills" className="hover:text-orange-500 cursor-pointer text-lg font-medium hover:delay-150">Skills</a>
        <a href="#portfolio" className="hover:text-orange-500 text-lg font-medium cursor-pointer hover:delay-150">Portfolio</a>
        <a href="#contact" className="hover:text-orange-500 text-lg font-medium cursor-pointer hover:delay-150">Contact</a>
      </header>

      <section className="flex flex-col text-center justify-center items-center text-white bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}>
        <div className="bg-[#15364e] bg-opacity-70 p-8 rounded-lg sm:w-[70%]">
          <motion.h1
            className='text-5xl font-bold'
            initial="hidden"
            whileInView="visible"
            variants={heroVariants}
          >
            I am <span className="bg-gradient-to-r from-orange-100 via-orange-300 to-orange-600 bg-clip-text text-transparent">{displayText}</span>
          </motion.h1>
          <motion.p
            className='my-8 text-lg text-gray-300 mx-auto w-[70%]'
            initial="hidden"
            whileInView="visible"
            variants={paragraphVariants}
          >
            Motivated and enthusiastic 2nd-year B.Tech Computer Science student with a strong foundation in front-end
            development. Skilled in HTML, CSS, JavaScript, and React. Proficient in Python, C, and Java, with a proven ability
            to work collaboratively and independently. Eager to leverage skills in real-world projects and contribute to the
            technology industry with innovative and user-centric solutions.
          </motion.p>
          <div className="flex justify-center space-x-8">
            <motion.a
              href="https://asset.cloudinary.com/dymfymgnm/a67786a0043b1d65f3250f30110b8fdc"
              target='blank'
              download
              initial="hidden"
              whileInView="visible"
              variants={buttonVariants}
            >
              <button className='border border-orange-500 rounded-full px-4 py-2 text-lg'>Resume</button>
            </motion.a>
            <motion.a
              href="#contact"
              initial="hidden"
              whileInView="visible"
              variants={buttonVariants}
            >
              <button className='border border-white rounded-full px-4 py-2 text-lg'>Contact</button>
            </motion.a>
          </div>
        </div>
      </section>

      {/* About */}
      <motion.section
        id="about"
        className="bg-gray-700 text-white p-12 flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-8">
          <img src={me} alt="Priyansh Tyagi" className="w-[20%] max-sm:w-[100%] rounded-lg" />
          <div className='w-[50%] max-sm:w-[100%]'>
            <h2 className="text-center text-3xl mb-6">About Me</h2>
            <div className="flex justify-center">
              <p className="text-center my-4 pb-4 w-[80%] max-sm:w-[100%]">
              Motivated and enthusiastic 2nd-year B.Tech Computer Science student with a strong foundation in front-end
              development. Skilled in HTML, CSS, JavaScript and, React. Proficient in Python, C, and Java, with a proven ability
              to work collaboratively and independently. Eager to leverage skills in real-world projects and contribute to the
              technology industry with innovative and user-centric solutions.
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <ul className="list-disc ml-6">
                <li><strong>Location:</strong> Agra, UttarPradesh</li>
                <li><strong>Nationality:</strong> Indian</li>
                <li><strong>Study:</strong> GLA University, MATHURA</li>
              </ul>
              <ul>
                <li><strong>Age:</strong> 21</li>
                <li><strong>Interests:</strong> Reading Novels, Chess </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Education and Experience */}
      <motion.section
        id="skills"
        className="bg-white text-black p-12"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <div className='flex sm:w-[70%] sm:space-x-20 sm:ml-[20%] space-x-8'>
          <div>
            <h1 className="text-center text-3xl mb-6">Education</h1>
            <hr />
          </div>
          <div>
            <h2>Bachelor in Computer Science</h2>
            <p>GLA UNIVERSITY, MATHURA</p>
            <p>2023-27</p>

            <h2 className='mt-4'>Senior Secondary Education</h2>
            <p>Baluni Public School, Agra</p>
            <p>2021-23</p>
          </div>
        </div>
        <hr className='mt-8' />
        <div className='flex sm:w-[70%] sm:space-x-20 sm:ml-[20%] mt-8 space-x-8'>
          <div>
            <h1 className="text-center text-3xl mb-6">Experience</h1>
            <hr />
          </div>
          <div>
            <h2>Frontend Developer Intern</h2>
            <p>BAOIAM</p>
            <p>2nd June 2024 - 2nd August 2024</p>
          </div>
        </div>
        <hr className='mt-8 ' />
      </motion.section>

      {/* Skills */}
      <motion.section
        className="bg-white text-black p-12"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-3xl mb-6">Skills</h2>

        <div className="min-sm:w-[60%] mx-auto flex flex-wrap gap-x-20 gap-y-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex-1 min-w-[250px] max-w-[45%] mb-8">
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              {category.skills.map((skill, idx) => (
                <div key={idx} className="mb-2">
                  <span className="block text-gray-400">{skill.name}</span>
                  <div className="relative">
                    <div className="bg-gray-100 rounded h-2">
                      <div
                        className="bg-orange-500 h-full rounded"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Portfolio */}
      <motion.section
        id="portfolio"
        className="bg-gray-900 text-white p-12"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-3xl mb-16">Check out some of my work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative">
            <a href="https://github.com/BroPriyansh/Demo" target='blank'><img src={i1} alt="Project Unavailable" className="bg-cover rounded-lg hover cursor-pointer" /></a>
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Project title 1</div>
          </div>
          <div className="relative">
            <a href="https://github.com/BroPriyansh/FrontendWork1" target='blank'><img src={i2} alt="Project Unavailable" className="w-full rounded-lg hover cursor-pointer" /></a>
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Project title 2</div>
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="bg-white text-black p-12"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-3xl mb-6">Get in touch.</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="w-full p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md">
            Send Message
          </button>
        </form>
      </motion.section>

      <footer className='bg-orange-500 text-white'>
        <div className="mt-8 text-center sm:flex items-center justify-center space-x-8 py-2">
          <p className="">Email <a href="mailto:priyanshtyagi30@gmail.com" className="underline">priyanshtyagi30@gmail.com</a></p>

          <div className="sm:flex justify-center text-center items-center space-x-8">
            <a href="https://github.com/BroPriyansh" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.instagram.com/brop1_2/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/priyansh-tyagi-715589347/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 text-2xl bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 transition-all"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default App;