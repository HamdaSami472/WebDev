// src/components/Navbar.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-2xl px-6 py-3 shadow-lg border border-white/20">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-orange-500">HS</span>
              <span className="text-gray-800 dark:text-white font-medium hidden sm:block">
                Hamda Sami
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800 dark:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 pt-4 border-t border-white/20 flex flex-col space-y-3"
            >
              <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>
               Home
              </MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </MobileNavLink>
              <MobileNavLink href="#skills" onClick={() => setIsOpen(false)}>
                Skills
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </MobileNavLink>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

// NavLink Component for Desktop
const NavLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium relative group"
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
  </motion.a>
);

// NavLink Component for Mobile
const MobileNavLink = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium text-lg px-4 py-2 rounded-xl hover:bg-white/10"
  >
    {children}
  </a>
);

export default Navbar;