"use client";

import { motion } from "framer-motion";

const scheduleData = [
  { time: "9:00 AM", event: "Registration and Check-in" },
  { time: "10:00 AM", event: "Opening Ceremony" },
  { time: "11:00 AM", event: "Hacking Begins" },
  { time: "1:00 PM", event: "Lunch Break" },
  { time: "6:00 PM", event: "Dinner" },
  { time: "12:00 AM", event: "Midnight Snack" },
  { time: "9:00 AM", event: "Breakfast" },
  { time: "12:00 PM", event: "Hacking Ends" },
  { time: "2:00 PM", event: "Project Presentations" },
  { time: "4:00 PM", event: "Awards Ceremony" },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-hackathon-dark-blue">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-hackathon-light-pink"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Space Station Itinerary
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-hackathon-darker-blue p-4 rounded-lg shadow-lg border-2 border-hackathon-purple"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-hackathon-lavender">
                {item.time}
              </h3>
              <p className="text-hackathon-beige">{item.event}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
