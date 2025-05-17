// import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bg from './header-background.webp';
import { useState, useEffect } from 'react';

const Hero = () => {

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

    const [displayText, setDisplayText] = useState("Priyansh Tyagi.");
  const texts = ["Priyansh Tyagi.", "Frontend Developer." , "React Enthusiast." , "Tech Lover." , "Problem Solver." , "Student."];

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prev) => (prev === texts[0] ? texts[1] : texts[0]));
    }, 3000);

    return () => clearInterval(interval); 
  }, []);
  

  return (
    <section className="flex flex-col text-center justify-center items-center text-white bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}>
         <div className="bg-[#15364e] bg-opacity-70 p-8 rounded-lg sm:w-[70%]">
           <motion.h1 className='text-5xl font-bold' initial="hidden" whileInView="visible" variants={heroVariants}>
            Hi , I am <span className="bg-gradient-to-r from-orange-100 via-orange-300 to-orange-600 bg-clip-text text-transparent">{displayText}</span>
          </motion.h1>
          <motion.p className='my-8 text-lg text-gray-300 mx-auto w-[70%]' initial="hidden" whileInView="visible" variants={paragraphVariants}>
            Motivated and enthusiastic 2nd-year B.Tech Computer Science student with a strong foundation in front-end
            development. Skilled in HTML, CSS, JavaScript, and React. Proficient in Python, C, and Java, with a proven ability
            to work collaboratively and independently. Eager to leverage skills in real-world projects and contribute to the
            technology industry with innovative and user-centric solutions.
          </motion.p>
          <div className="flex justify-center space-x-8">
            <motion.a href="https://asset.cloudinary.com/dymfymgnm/a67786a0043b1d65f3250f30110b8fdc" target='blank' download initial="hidden" whileInView="visible" variants={buttonVariants}>
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
  );
};

export default Hero;
