// src/components/Education.jsx
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      institution: "University of Engineering and Technology, Lahore",
      degree: "Bachelor of Science in Computer Science",
      location: "Lahore, Pakistan",
      period: "2025 - 2029",
    },
    {
      institution: "Unique College For Girls",
      degree: "Intermediate (ICS)",
      location: "Lahore, Pakistan",
      period: "2023 - 2025",
    }
  ];

  return (
    <section id="education" className="min-h-screen px-6 md:px-20 py-20">
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
            My <span className="text-orange-500">Education</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(255, 165, 0, 0.15)",
                transition: { duration: 0.15 }
              }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-2xl p-6 border border-white/20 hover:border-orange-500/50 transition-all"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {edu.institution}
              </h3>
              <p className="text-orange-500 font-medium mt-1">
                {edu.degree}
              </p>
              
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600 dark:text-gray-400">
                <span>{edu.period}</span>
                <span>•</span>
                <span>{edu.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;