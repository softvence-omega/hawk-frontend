import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  );
}
