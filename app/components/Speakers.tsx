"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const speakersData = [
  { name: "John Doe", role: "CEO, Tech Innovators", image: "/placeholder.svg" },
  { name: "Jane Smith", role: "CTO, Future Systems", image: "/placeholder.svg" },
  { name: "Mike Johnson", role: "Founder, CodeCraft", image: "/placeholder.svg" },
  { name: "Sarah Williams", role: "AI Researcher, DataMinds", image: "/placeholder.svg" },
]

const Speakers = () => {
  return (
    <section id="speakers" className="py-20 bg-retro-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-retro-pink"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Galactic Guides
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakersData.map((speaker, index) => (
            <motion.div
              key={index}
              className="bg-retro-purple p-6 rounded-lg shadow-lg text-center border-2 border-retro-blue"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={speaker.image || "/placeholder.svg"}
                alt={speaker.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 border-4 border-retro-green"
              />
              <h3 className="text-xl font-semibold mb-2 text-retro-pink">{speaker.name}</h3>
              <p className="text-sm text-retro-green">{speaker.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers

