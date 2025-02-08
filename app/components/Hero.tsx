"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-hackathon-dark-blue to-hackathon-darker-blue">
      <div className="absolute inset-0 bg-retro-black bg-opacity-50"></div>
      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-hackathon-light-pink"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Colossus 2025
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-hackathon-beige"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join us for 24 hours of coding, innovation, and fun!
        </motion.p>
        <motion.a
          href="https://unstop.com/hackathons/colossus-2025"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-hackathon-purple text-hackathon-light-pink px-8 py-3 rounded-full text-lg font-semibold hover:bg-hackathon-lavender transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
