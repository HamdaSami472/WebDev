// src/components/Projects.jsx
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "EduRide",
      description: "Final term database project for 2nd semester - a comprehensive database system for educational transportation management.",
      tech: ["C#", "MySql", ".NET Framework"],
      github: "https://github.com/HamdaSami472/EduRide"
    },
    {
      title: "CareSync",
      description: "An elderly healthcare management system built as my first semester Pf project in C++. Focuses on managing patient records and care schedules.",
      tech: ["C++", "File Handling", "OOP"],
      github: "https://github.com/HamdaSami472/CareSync"
    },
    {
      title: "MAC-dm-project",
      description: "Discrete mathematics project of semester 1 - implementing mathematical concepts through programming.",
      tech: ["C++", "Discrete Mathematics", "Algorithms"],
      github: "https://github.com/HamdaSami472/MAC-dm-project"
    },
    {
      title: "OOP-Caresync",
      description: "Object-Oriented Programming version of the CareSync healthcare management system.",
      tech: ["C#", "OOP", "Healthcare Systems"],
      github: "https://github.com/HamdaSami472/OOP-Caresync"
    },
    {
      title: "MidProject-Rubrics-Eval-System",
      description: "Rubrics Evaluation System - a database systems mid project for automated grading and assessment.",
      tech: ["C#", "Database Systems", "Evaluation System"],
      github: "https://github.com/HamdaSami472/MidProject-Rubrics-Eval-System"
    },
    {
      title: "Forest-Escape",
      description: "An OOP game project - an interactive escape game built with object-oriented programming principles.",
      tech: ["C++", "Game Development", "OOP"],
      github: "https://github.com/HamdaSami472/Forest-Escape-"
    }
  ];

  return (
    <section id="projects" className="min-h-screen px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            My <span className="text-orange-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Some of the projects I've worked on
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(255, 165, 0, 0.15)",
                transition: { duration: 0.15 }
              }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-2xl p-6 border border-white/20 hover:border-orange-500/50 transition-all flex flex-col"
            >
           
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {project.title}
              </h3>
              
         
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 grow">
                {project.description}
              </p>
  
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors mt-auto"
              >
                <FiGithub className="w-5 h-5" />
                <span className="text-sm font-medium">View on GitHub</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;