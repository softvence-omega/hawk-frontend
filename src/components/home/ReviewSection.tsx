"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data/TestimonialData";
import CommonWrapper from "@/common/CommonWrapper";

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Determine number of slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
      
      // Reset index when slidesToShow changes to prevent out of bounds
      setCurrentIndex(0);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % (testimonials.length - slidesToShow + 1)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slidesToShow, testimonials.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + 1, testimonials.length - slidesToShow)
    );
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xs sm:text-sm ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="w-full bg-gray-50 py-6 sm:py-8 md:py-12 lg:py-16">
      <CommonWrapper>
        <div className="px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-4">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                What Our Clients Say
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                Real stories from satisfied customers who found their perfect stay
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 text-sm sm:text-base">
              Show More Reviews
            </Button>
          </div>

          {/* Testimonials Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-shrink-0 px-2 sm:px-3 mb-4"
                    style={{ width: `${100 / slidesToShow}%` }}
                  >
                    <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow duration-300">
                      {/* Property Image */}
                      <div className="mb-3 sm:mb-4">
                        <img
                          src={testimonial.propertyImage || "/placeholder.svg"}
                          alt="Property"
                          className="w-full h-36 object-cover rounded-lg"
                        />
                        <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2 truncate">
                          {testimonial.location}
                        </p>
                      </div>

                      {/* Testimonial Text */}
                      <div className="mb-3 sm:mb-4 md:mb-6">
                        <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed italic line-clamp-3">
                          "{testimonial.text}"
                        </p>
                      </div>

                      {/* Customer Info */}
                      <div className="flex items-center gap-2 sm:gap-3">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">
                            {testimonial.name}
                          </h4>
                          <div className="flex gap-1 mt-0.5 sm:mt-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-2 justify-center sm:justify-end mt-4 sm:mt-6"> 
              <button 
                onClick={prevSlide} 
                disabled={currentIndex === 0} 
                className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:shadow-md hover:border-gray-300 transition-all duration-200 ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`} 
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= testimonials.length - slidesToShow}
                className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:shadow-md hover:border-gray-300 transition-all duration-200 ${
                  currentIndex >= testimonials.length - slidesToShow ? "opacity-50 cursor-not-allowed" : ""
                }`}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {Array.from({ length: Math.max(1, testimonials.length - slidesToShow + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-blue-600 scale-110" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
}