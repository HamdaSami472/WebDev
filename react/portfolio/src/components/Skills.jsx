// src/components/Skills.jsx
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "C#", "C++", "C"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend & Frameworks",
      skills: [".NET Framework", "C# .NET"]
    },
    {
      title: "Tools & Environments",
      skills: ["VS Code", "Visual Studio", "Vite", "Overleaf", "LaTeX", "Git", "GitHub", "GitLab", "GitBash"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.15 }
              }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-2xl p-6 border border-white/20 hover:border-orange-500/50 transition-all"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-white/20 hover:border-orange-500 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;