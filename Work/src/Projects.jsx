import i1 from './Work1.png';
import i2 from './Work2.png';
import i3 from './Work3.png';
import i4 from './Work4.png';
import { motion } from 'framer-motion';
const Projects = () => {

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
        id="portfolio"
        className="bg-gray-900 text-white p-12"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-3xl mb-16">Check happy out some of my work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative">
            <a href="https://github.com/BroPriyansh/Demo" target='blank'><img src={i1} alt="Project Unavailable" className="bg-cover rounded-lg hover cursor-pointer" /></a>
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Landing Page Design</div>
          </div>
          <div className="relative">
            <a href="https://github.com/BroPriyansh/FrontendWork1" target='blank'><img src={i2} alt="Project Unavailable" className="w-full rounded-lg hover cursor-pointer" /></a>
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Divueens</div>
          </div>
          <div className="relative">
            <a href="https://github.com/BroPriyansh/Dash" target='blank'><img src={i3} alt="Project Unavailable" className="w-full rounded-lg hover cursor-pointer" /></a>
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Student Dashboard</div>
          </div>
          <div className="relative">
            <a href="https://github.com/BroPriyansh/schedul" target='blank'><img src={i4} alt="Project Unavailable" className="w-full rounded-lg hover cursor-pointer" /></a>
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Scheduler</div>
          </div>
        </div>
      </motion.section>
  );
};

export default Projects;
