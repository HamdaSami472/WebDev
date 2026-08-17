// src/components/Contact.jsx
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


  
  const contactInfo = [
    {
      label: "Email",
      value: "hamda.sami@gmail.com",
      link: "mailto:hamda.sami@gmail.com"
    },
    {
      label: "GitHub",
      value: "github.com/HamdaSami472",
      link: "https://github.com/HamdaSami472"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/hamda-sami-17b058392",
      link: "https://www.linkedin.com/in/hamda-sami-17b058392"
    },
    {
      label: "Location",
      value: "Lahore, Pakistan",
      link: null
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        SERVICE_ID,    // ← Using env variable
        TEMPLATE_ID,   // ← Using env variable
        formRef.current,
        PUBLIC_KEY     // ← Using env variable
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSubmitStatus("success");
          setIsSubmitting(false);
          formRef.current.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          setSubmitStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen px-6 md:px-20 py-20">
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
            Contact <span className="text-orange-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Get in touch with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(255, 165, 0, 0.1)",
                }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-2xl p-5 border border-white/20 hover:border-orange-500/50 transition-all"
              >
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {item.label}
                </p>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-gray-800 dark:text-white hover:text-orange-500 transition-colors block mt-1"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-base font-semibold text-gray-800 dark:text-white mt-1">
                    {item.value}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Send Me a Message
              </h3>
              
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/10 dark:bg-black/10 rounded-xl border border-white/20 focus:border-orange-500 outline-none text-gray-800 dark:text-white placeholder-gray-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/10 dark:bg-black/10 rounded-xl border border-white/20 focus:border-orange-500 outline-none text-gray-800 dark:text-white placeholder-gray-500 transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-white/10 dark:bg-black/10 rounded-xl border border-white/20 focus:border-orange-500 outline-none text-gray-800 dark:text-white placeholder-gray-500 transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 dark:bg-black/10 rounded-xl border border-white/20 focus:border-orange-500 outline-none text-gray-800 dark:text-white placeholder-gray-500 transition-colors resize-none"
                    required
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="text-green-500 text-sm font-medium bg-green-500/10 px-4 py-2 rounded-xl">
                    ✅ Message sent successfully!
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="text-red-500 text-sm font-medium bg-red-500/10 px-4 py-2 rounded-xl">
                    ❌ Failed to send message. Please try again.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-linear-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;