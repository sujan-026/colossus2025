"use client";

import { useState, useRef, useEffect } from "react";

interface SlideData {
  src: string;
  alt?: string;
}

interface SlideProps {
  slide: SlideData;
}

const Slide = ({ slide }: SlideProps) => {
  return (
    <div
      className="carousel-focus flex items-center justify-center mx-2 transition-all duration-800 ease-in-out"
      style={{ width: "400px", height: "300px" }} // Adjust image size here
    >
      <img
        className="w-full h-full object-cover rounded-lg shadow-lg"
        src={slide.src}
        alt={slide.alt || "Carousel Image"}
      />
    </div>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Toggle animation pause/resume
  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      if (isPaused) {
        carousel.style.animationPlayState = "paused"; // Pause animation
      } else {
        carousel.style.animationPlayState = "running"; // Resume animation
      }
    }
  }, [isPaused]);

  return (
    <div
      className="container mx-auto w-full overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
    >
      <div
        ref={carouselRef}
        className="carousel-items flex items-center justify-center"
        style={{
          width: "fit-content",
          animation: `carouselAnim ${slides.length * 5}s infinite linear`, // Continuous rotation
        }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} />
        ))}
        {/* Duplicate slides for seamless looping */}
        {slides.map((slide, index) => (
          <Slide key={`duplicate-${index}`} slide={slide} />
        ))}
      </div>

      <style jsx>{`
        @keyframes carouselAnim {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%)); // Move by half the total width
          }
        }

        .carousel-items {
          display: flex;
          width: max-content;
        }

        .carousel-focus:hover {
          transition: all 0.8s;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}