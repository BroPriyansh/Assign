import i1 from './Work1.png';
import i2 from './Work2.png';
import i3 from './Work3.png';
// import i4 from './Work4.png';
import i5 from './WriteMind.png';
import i6 from './DocsQA.png';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "Landing Page Design",
    description: "A modern, responsive landing page with stunning animations and user-friendly interface. Built with React and Tailwind CSS.",
    image: i1,
    github: "https://github.com/BroPriyansh/Demo",
    live: null,
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    category: "Frontend"
  },
  {
    id: 2,
    title: "Divueens",
    description: "An elegant e-commerce platform with modern design patterns and seamless user experience. Features product catalog and shopping cart functionality.",
    image: i2,
    github: null,
    live: "https://divueens-frontend.vercel.app/",
    technologies: ["React", "CSS", "JavaScript"],
    category: "E-commerce"
  },
  {
    id: 3,
    title: "Student Dashboard",
    description: "A comprehensive dashboard for students to manage their academic progress, assignments, and course materials with intuitive navigation.",
    image: i3,
    github: "https://github.com/BroPriyansh/Dash",
    live: "https://dash-mu-gray.vercel.app/",
    technologies: ["React", "JavaScript", "CSS"],
    category: "Dashboard"
  },
  {
    id: 4,
    title: "WriteMind",
    description: "A personal blogging platform with a clean design, allowing users to share their thoughts and experiences. Features include post creation and commenting.",
    image: i5,
    github: "https://github.com/BroPriyansh/BlogSite",
    live: "https://priyansh-blog-site.vercel.app/",
    technologies: ["React", "CSS", "JavaScript","Firebase"],
    category: "Blogging"
  },
  {
    id: 5,
    title: "DocsQA",
    description: "An end-to-end intelligent document assistant that allows users to upload PDF business documents, receive a real-time summary, ask natural language questions, and view the source snippets from which answers are retrieved — with optional highlighting.",
    image: i6,
    github: "https://github.com/BroPriyansh/AI-Hack",
    live: "https://ai-hack-olxwtaxj79mi3eeaz3sfzl.streamlit.app/",
    technologies: ["Python", "Streamlit", "AI","LangChain","HuggingFace"],
    category: "Blogging"
  }
];

const Projects = () => {
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="portfolio" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/40 to-blue-900/50 py-20 overflow-hidden">
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
          variants={projectVariants}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-white text-lg max-w-2xl mx-auto font-medium">
            Explore my latest work showcasing innovative solutions and creative designs that demonstrate my passion for building exceptional digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="group"
              variants={projectVariants}
              whileHover="hover"
            >
                             <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    variants={imageVariants}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2 mb-3">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                                     <p className="text-white mb-6 leading-relaxed font-medium">
                     {project.description}
                   </p>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Code
                      </span>
                    </motion.a>
                    
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-white/30 text-white font-semibold py-3 px-4 rounded-xl text-center hover:bg-white/10 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={projectVariants}
        >
                     <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-white mb-6 font-medium">
              Let&apos;s collaborate and bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <motion.a
              href="#contact"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
