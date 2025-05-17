// import React from 'react';
import { motion } from 'framer-motion';
import me from './me.jpg';

const About = () => {

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section id="about" className="bg-gray-700 text-white p-12 flex justify-center items-center" initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}
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
  );
};

export default About;
