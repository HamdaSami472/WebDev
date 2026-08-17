import { motion } from "framer-motion";
import '../app.css';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-20 pt-16">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            <span className="text-orange-500">Hamda Sami</span> <br />
            <span className="text-orange-500 text-xl">Frontend Developer expanding into Full-Stack & AI/ML</span>
          </h1>

          <p className="text-lg mt-4 text-gray-800 dark:text-gray-300 max-w-lg">
           frontend developer, CS student, and lifelong learner, currently diving into full-stack and AI/ML to create meaningful solutions.
          </p>

          <div className="mt-6 flex items-center gap-6">
            <a
              href="#projects"
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform inline-block"
            >
              View Work
            </a>
            <a
              href="#about"
              className="text-gray-900 dark:text-white font-medium hover:text-orange-500 transition"
            >
              ABOUT →
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl -z-10"></div>
            
            <motion.img
              src="/hamda-img.png"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-orange-500 shadow-2xl cursor-pointer"
              whileHover={{ 
                y: -10,  
                scale: 1.03,
                transition: { 
                  duration: 0.2,
                  type: "spring",
                  stiffness: 400
                }
              }}
              whileTap={{
                scale: 0.97
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;