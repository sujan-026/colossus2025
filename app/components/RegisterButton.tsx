"use client"

import { motion } from "framer-motion"

const RegisterButton = () => {
  return (
    <section id="register" className="py-20 bg-retro-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-retro-pink"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ready to join the Cosmic Coding Crusade?
        </motion.h2>
        <motion.p
          className="text-xl mb-8 text-retro-green"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Don't miss out on this stellar opportunity to innovate, collaborate, and win astronomical prizes!
        </motion.p>
        <motion.a
          href="https://unstop.com/hackathons/colossus-2025"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-retro-purple text-retro-pink px-8 py-3 rounded-full text-lg font-semibold hover:bg-retro-blue transition-all duration-300 border-2 border-retro-green"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Beam Me Up to Unstop
        </motion.a>
      </div>
    </section>
  )
}

export default RegisterButton

