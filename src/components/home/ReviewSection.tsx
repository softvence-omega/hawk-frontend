"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
<<<<<<< HEAD
import { IoIosArrowRoundForward } from "react-icons/io";

const testimonials = [
  {
    name: "David Simmons",
    location: "Oakland, CA",
    stars: 5,
    image: "/house.jpg",
    feedback:
      "AZ Deal Hub transformed my investment strategy. The AI comp analysis is incredibly accurate and fast!",
  },
  {
    name: "Mavis Barry",
    location: "Oakland, CA",
    stars: 5,
    image: "/house.jpg",
    feedback:
      "Finally, a platform that gives me real-time access to distressed properties. Game changer!",
  },
  {
    name: "Leo Turner",
    location: "San Diego, CA",
    stars: 4,
    image: "/house.jpg",
    feedback:
      "Super intuitive platform with real estate insights that save me time and money!",
  },
  {
    name: "Emma White",
    location: "Austin, TX",
    stars: 5,
    image: "/house.jpg",
    feedback:
      "AZ Deal Hub has been a game-changer for my investment journey. Highly recommend!",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const visibleCards = 3;
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleCards; i++) {
      result.push(testimonials[(index + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section className="bg-white mt-10 py-16 px-4 sm:px-6 lg:px-8 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 mt-2 text-base sm:text-lg">
            Real stories from satisfied customers who found their perfect stay.
          </p>
        </div>
        <button className="flex gap-2 items-center bg-blue-600 hover:bg-blue-700  text-white font-bold py-3 md:py-1 lg:py-3  px-4 rounded transition-colors duration-200">
          Read More Reviews
          <IoIosArrowRoundForward size={24} />
        </button>
      </div>

      {/* Cards */}
      <div className="relative mt-12">
        <div className="flex flex-wrap gap-6 justify-center">
          {getVisibleTestimonials().map((testimonial, i) => (
            <div
              key={i}
              className="w-full sm:w-[47%] lg:w-[30%] bg-white rounded-xl border shadow-lg p-6 text-center transition hover:shadow-xl"
            >
              <div className="text-blue-600 text-3xl mb-4">“</div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {testimonial.feedback}
              </p>
              <div className="text-blue-600 text-3xl mt-4">”</div>

              <div className="mt-6 flex items-center justify-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                  <div className="text-blue-500 text-sm">
                    {"★".repeat(testimonial.stars)}
                    {"☆".repeat(5 - testimonial.stars)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-end mt-10">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full border border-gray-300 text-gray-500 hover:text-white hover:bg-blue-600 transition"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full border border-gray-300 text-gray-500 hover:text-white hover:bg-blue-600 transition"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
=======
import { testimonials } from "@/lib/data/TestimonialData";

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real stories from satisfied customers who found their perfect stay
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
            Show More Reviews
          </Button>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                width: `${(testimonials.length * 100) / 3}%`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                    {/* Property Image */}
                    <div className="mb-4">
                      <img
                        src={testimonial.propertyImage || "/placeholder.svg"}
                        alt="Property"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        {testimonial.location}
                      </p>
                    </div>

                    {/* Testimonial Text */}
                    <div className="mb-6">
                      <p className="text-gray-700 text-sm leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Customer Info */}
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </h4>
                        <div className="flex gap-1 mt-1">
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
          <div className="flex gap-2 justify-end mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
>>>>>>> 8fb6fd093a96d538aea58bac37683b00b21e8483
  );
}
