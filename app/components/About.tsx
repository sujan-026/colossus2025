"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-hackathon-darker-blue">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-hackathon-light-pink"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mission Briefing
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-hackathon-dark-blue p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-hackathon-lavender">
              What is Colossus 2025?
            </h3>
            <p className="mb-4 text-hackathon-beige">
              Colossus 2025 is a 24-hour intergalactic coding mission where
              space cadets, alien designers, and cosmic innovators unite to
              create mind-bending projects. Whether you&apos;re a seasoned
              astronaut or a rookie explorer, this is your chance to push the
              boundaries of the digital universe!
            </p>
          </div>
          <div className="bg-hackathon-dark-blue p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-hackathon-lavender">
              Why Join the Arcade?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-hackathon-beige">
              <li>Network with fellow space travelers</li>
              <li>Learn alien technologies and skills</li>
              <li>Win out-of-this-world prizes</li>
              <li>Gain real-world asteroid-busting experience</li>
              <li>Have fun and create cosmic memories</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
