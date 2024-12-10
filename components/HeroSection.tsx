"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    watchImage: "/images/watches.png",
    text: "Best Deal Online on Smart Watches",
    bgColor: "#1E3A5F",
  },
  {
    watchImage: "/images/car.jpg",
    text: "CAR RENTING. At affordable prices",
    bgColor: "#2B6CB0",
  },
  {
    watchImage: "/images/gifts.jpg",
    text: "Buy gifts to your loved ones ",
    bgColor: "#7D030A",
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
      id="heroSection"
      className="relative flex flex-col-reverse mx-10 lg:mx-20 sm:flex-row items-center mt-20 justify-center text-white h-[550px] lg:h-[400px] overflow-visible transition-colors duration-500 rounded-lg"
      style={{ backgroundColor: slides[currentIndex].bgColor }}
    >
      {/* Left Chevron */}
      <button
        onClick={handlePrev}
        className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 md:w-20 md:h-20 rounded-full bg-[#F3F9FB] shadow-lg"
        aria-label="Previous"
      >
        <span className="flex justify-center items-center text-[#25AAE1] text-3xl font-bold">
          &lt;
        </span>
      </button>

      {/* Main Content */}
      <div className="flex flex-col-reverse sm:flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 md:px-12">
        {/* Text Section */}
        <div className="w-full text-start mb-4 md:mb-0">
          <h2 className="text-lg sm:text-xl md:text-2xl w-[70%] lg:text-4xl font-bold mb-2 md:mb-4">
            {slides[currentIndex].text}
          </h2>
          <p className="text-sm w-[70%] sm:text-base md:text-lg lg:text-xl">
            Experience the best deals and explore the world of smart wearables
            with our exclusive collection.
          </p>
          {/* Indicator Circles */}
      <div className="absolute bottom-20 flex space-x-1">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={` ${
              currentIndex === index
                ? "w-2 sm:w-5 h-1 bg-white rounded-lg"
                : "w-2 sm:w-3 h-1 bg-white rounded-full"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
        </div>

        {/* Watch Image Section */}
        <div className="relative w-[70%] sm:w-[50%] md:w-[40%] h-[200px] sm:h-[250px] lg:h-[300px]">
          <Image
            src={slides[currentIndex].watchImage}
            alt={`Watch ${currentIndex + 1}`}
            layout="fill"
            style={{ objectFit: "contain" }}
            className="transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* Right Chevron */}
      <button
        onClick={handleNext}
        className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 md:w-20 md:h-20 rounded-full bg-[#F3F9FB] shadow-lg"
        aria-label="Next"
      >
        <span className="text-[#25AAE1] text-3xl font-bold">&gt;</span>
      </button>

      
    </div>
  );
}
