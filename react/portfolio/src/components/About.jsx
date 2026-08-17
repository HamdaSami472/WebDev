// src/components/About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About <span className="text-orange-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glass background */}
              <div className="absolute inset-0 bg-orange-500/20 rounded-2xl blur-3xl -z-10"></div>
              
              {/* Image Container with Glass Effect */}
              <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-2xl p-4 border border-white/20 shadow-2xl">
                <img
                  src="/hamda-img.png"
                  alt="Hamda Sami"
                  className="w-72 h-72 md:w-96 md:h-96 rounded-xl object-cover"
                />
              </div>
              
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            
            
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I'm <span className="text-orange-500 font-semibold">Hamda Sami</span>, 
             a frontend developer with a passion for learning and a vision to become a full-stack developer with expertise in AI/ML. As a Computer Science student, I love bridging the gap between theory and practice, building solutions that are both functional and impactful.

My journey in tech started with a love for building things, and that curiosity has only grown stronger. Today, I work with technologies like React, JavaScript, and Tailwind CSS, while diving deeper into backend systems and machine learning. I'm always eager to take on new challenges, collaborate with others, and grow as a developer.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              With a strong foundation in both frontend and backend development, 
              I enjoy building solutions that make a difference. My curiosity 
              drives me to continuously learn and explore new technologies.
            </p>

            {/* Stats */}
           

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {["React", ".NET Framework", "C#","C++", "Tailwind CSS", "JavaScript"].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-white/20 hover:border-orange-500 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="inline-block mt-4 px-8 py-3 bg-linear-to-r from-orange-500 to-orange-400 text-white rounded-full font-medium shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;