import React, { useState, useEffect, useCallback } from 'react';

// Custom ChevronRight component to replace lucide-react import
const ChevronRight = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const slidesData = [
  {
    id: 1,
    imageUrl: "/image/banner-5-scaled.jpg",
    alt: "Slide 1: Farming Innovation",
    title: "Innovative Tech",
    subtitle: "to Transform Agriculture",
    description: "Empowering farmers with cutting-edge solutions. Farmer wins, we win.",
  },
  {
    id: 2,
    imageUrl: "/image/slider-1.webp",
    alt: "Slide 2: Sustainable Growth",
    title: "Sustainable Growth",
    subtitle: "for a Better Tomorrow",
    description: "Our technology focuses on efficiency and environmental health.",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slidesData.length;
  const AUTOPLAY_DELAY = 3000; // 3 seconds

  // Function to move to the next slide
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  // Function to set the slide manually
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Autoplay Effect
  useEffect(() => {
    const interval = setInterval(goToNext, AUTOPLAY_DELAY);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [goToNext]);

  // Current Slide Content
  const currentSlide = slidesData[currentIndex];

  return (
    <section className="relative pt-20 pb-20 overflow-hidden min-h-[600px] bg-gray-900">
      {/* Absolute Carousel Container (The Slides) */}
      <div className="absolute inset-0 -z-10 h-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${totalSlides * 100}%` }}
        >
          {slidesData.map((slide) => (
            <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
              <img
                src={slide.imageUrl}
                className="w-full h-full object-cover"
                alt={slide.alt}
              />
              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        {/* Custom Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-green-400 w-6"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-24 z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 animate-fadeInUp">
          <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
            {currentSlide.title}
          </span>
          <br />
          {currentSlide.subtitle}
        </h1>

        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fadeInUp delay-200">
          {currentSlide.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-300">
          <a
            href="#about"
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-[0_0_20px_rgba(52,211,163,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center"
          >
            Explore Our Journey
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>

          <a
            href="#portfolio"
            className="border-2 border-green-300 text-green-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
