"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://player.vimeo.com/external/731752181.sd.mp4?s=b6a5e9f9f7d9a9e9b9e9b9e9b9e9b9e9b9e9b9e9&profile_id=164"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-retro-black bg-opacity-50"></div>
      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-retro-pink"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Colossus 2025
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-retro-green"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Embark on a 24-hour cosmic coding odyssey!
        </motion.p>
        <motion.a
          href="https://unstop.com/hackathons/colossus-2025"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-retro-purple text-retro-pink px-8 py-3 rounded-full text-lg font-semibold hover:bg-retro-blue transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join the Arcade
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
