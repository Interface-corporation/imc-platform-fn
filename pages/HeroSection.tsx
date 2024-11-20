"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    watchImage: "/images/hero1.jpg",
    text: "Best Deal Online on Smart Watches",
    bgColor: "#1E3A5F",
  },
  {
    watchImage: "/images/hero2.jpg",
    text: "SMART WEARABLE. UP to 80% OFF",
    bgColor: "#2B6CB0",
  },
  {
    watchImage: "/images/hero3.jpg",
    text: "Explore the New Era of Smart Wearables",
    bgColor: "#4A5568",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative flex items-center justify-center text-white h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden transition-colors duration-500 m-4 rounded-lg"
      style={{ backgroundColor: slides[currentIndex].bgColor }}
    >
      {/* Left Chevron */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-4 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg z-10"
        aria-label="Previous"
      >
        <span className="text-blue-500 text-lg font-bold">&lt;</span>
      </button>

      {/* Main Content */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between w-full max-w-6xl px-6">
        {/* Text Section */}
        <div className="w-full sm:w-[60%] text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4">
            {slides[currentIndex].text}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Experience the best deals and explore the world of smart wearables
            with our exclusive collection.
          </p>
        </div>

        {/* Watch Image Section */}
        <div className="relative w-[70%] sm:w-[40%] h-[200px] sm:h-[250px] lg:h-[300px]">
          <Image
            src={slides[currentIndex].watchImage}
            alt={`Watch ${currentIndex + 1}`}
            layout="fill"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* Right Chevron */}
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg z-10"
        aria-label="Next"
      >
        <span className="text-blue-500 text-lg font-bold">&gt;</span>
      </button>

      {/* Indicator Circles */}
      <div className="absolute bottom-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
