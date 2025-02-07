"use client"

import { useEffect, useState } from "react"

const CustomScrollbar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      setScrollPercentage((scrolled / scrollHeight) * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed right-0 top-0 h-full w-4 bg-retro-black z-50">
      <div className="absolute bottom-0 left-0 w-full bg-retro-pink" style={{ height: `${scrollPercentage}%` }}>
        <div className="absolute -left-3 -top-3 w-6 h-6 bg-retro-pink rounded-full animate-chomp">
          <div className="absolute top-1 left-1 w-1 h-1 bg-retro-black rounded-full"></div>
        </div>
      </div>
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="absolute left-1/2 w-2 h-2 bg-retro-blue rounded-full transform -translate-x-1/2"
          style={{ top: `${(index + 1) * 5}%` }}
        ></div>
      ))}
    </div>
  )
}

export default CustomScrollbar

