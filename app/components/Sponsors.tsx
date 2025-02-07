"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const sponsorsData = [
  { name: "TechCorp", logo: "/placeholder.svg" },
  { name: "InnovateLabs", logo: "/placeholder.svg" },
  { name: "FutureTech", logo: "/placeholder.svg" },
  { name: "CodeMasters", logo: "/placeholder.svg" },
]

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-retro-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-retro-pink"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Intergalactic Allies
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsorsData.map((sponsor, index) => (
            <motion.div
              key={index}
              className="bg-retro-purple p-6 rounded-lg shadow-lg flex items-center justify-center border-2 border-retro-blue"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={150}
                height={150}
                className="max-w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors

