"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const winnersData = [
  {
    name: "Team Innovators",
    project: "EcoTrack",
    image: "/placeholder.svg",
    testimonial:
      "Colossus 2024 was an incredible experience that pushed our limits and helped us grow as developers.",
  },
  {
    name: "Digital Dreamers",
    project: "HealthHub",
    image: "/placeholder.svg",
    testimonial:
      "The mentorship and resources provided during the hackathon were invaluable. We're thrilled to have won!",
  },
  {
    name: "Tech Titans",
    project: "SmartCity",
    image: "/placeholder.svg",
    testimonial:
      "Colossus 2024 opened doors for us. The networking opportunities were amazing, and winning was just the cherry on top.",
  },
];

const PreviousHackathon = () => {
  return (
    <section id="previous-hackathon" className="py-20 bg-hackathon-darker-blue">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-hackathon-light-pink"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Colossus 2024 Time Capsule
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-12 text-hackathon-beige"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Relive the cosmic achievements of our previous intergalactic mission!
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {winnersData.map((winner, index) => (
            <motion.div
              key={index}
              className="bg-hackathon-dark-blue p-6 rounded-lg shadow-lg border-2 border-hackathon-purple"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={winner.image || "/placeholder.svg"}
                alt={winner.name}
                width={300}
                height={200}
                className="rounded-lg mb-4 object-cover border-4 border-hackathon-lavender"
              />
              <h3 className="text-2xl font-semibold mb-2 text-hackathon-light-pink">
                {winner.name}
              </h3>
              <p className="text-lg mb-2 text-hackathon-lavender">
                Project: {winner.project}
              </p>
              <p className="italic text-hackathon-beige">
                &quot;{winner.testimonial}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousHackathon;
