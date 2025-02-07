"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const gameElements = [
  { emoji: "👾", size: 40 },
  { emoji: "🚀", size: 50 },
  { emoji: "🛸", size: 60 },
  { emoji: "🌟", size: 30 },
  { emoji: "🪐", size: 70 },
]

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const elements = container.children
      const containerRect = container.getBoundingClientRect()
      const centerX = containerRect.width / 2
      const centerY = containerRect.height / 2

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLElement
        const rect = element.getBoundingClientRect()
        const elementCenterX = rect.left + rect.width / 2 - containerRect.left
        const elementCenterY = rect.top + rect.height / 2 - containerRect.top

        const deltaX = e.clientX - containerRect.left - elementCenterX
        const deltaY = e.clientY - containerRect.top - elementCenterY

        const angle = Math.atan2(deltaY, deltaX)
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

        const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY)
        const force = (maxDistance - distance) / maxDistance

        const moveX = Math.cos(angle) * force * 20
        const moveY = Math.sin(angle) * force * 20

        element.style.transform = `translate(${moveX}px, ${moveY}px)`
      }
    }

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" style={{ overflow: "hidden" }}>
      {gameElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
          }}
          animate={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ fontSize: element.size }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  )
}

export default InteractiveBackground

