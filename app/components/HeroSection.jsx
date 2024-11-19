"use client";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const images = ["/images/hero1.png", "/images/hero2.png", "/images/hero3.png"];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative flex items-center justify-center text-white h-[300px]">
      {/* Left Chevron */}
      <button
        onClick={handlePrev}
        className="absolute left-4 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
        aria-label="Previous"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      {/* Main Image */}
      <div className="mx-auto">
        <Image
          src={images[currentIndex]}
          alt={`hero ${currentIndex + 1}`}
          width={1000}
          height={800}
          className="mx-auto mb-4 rounded-lg"
        />
      </div>

      {/* Right Chevron */}
      <button
        onClick={handleNext}
        className="absolute right-4 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
        aria-label="Next"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
