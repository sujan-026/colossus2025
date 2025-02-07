"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const faqData = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is an event where participants collaborate intensively on software projects, typically over a short period of time, usually 24-48 hours.",
  },
  {
    question: "Who can participate?",
    answer:
      "Anyone with an interest in technology and innovation can participate, regardless of their skill level or background.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "While coding skills are helpful, they are not always necessary. Hackathons often need designers, project managers, and idea generators too.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop, charger, and any other devices you might need. We&apos;ll provide food, drinks, and a place to work.",
  },
  {
    question: "Is there a fee to participate?",
    answer: "No, participation in Colossus 2025 is completely free!",
  },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-retro-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-retro-pink"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cosmic Queries
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full text-left p-4 bg-retro-purple rounded-lg focus:outline-none border-2 border-retro-blue"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-retro-pink">{item.question}</h3>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-retro-black rounded-b-lg border-2 border-t-0 border-retro-blue"
              >
                <p className="p-4 text-retro-green">{item.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

