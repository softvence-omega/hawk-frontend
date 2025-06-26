import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import PerfectHomeImg from "@/assets/perfectHome.jpg";

const PerfectHome = () => {
  return (
    <div className="w-full ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px] py-12 lg:py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Find Your Perfect Home Today!
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                Find the right property for you & your family, easy booking in
                minutes.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-base font-medium border-gray-300 hover:bg-gray-50 group"
              >
                Browse Properties
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                className="px-8 py-3 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get an AI Comp
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={PerfectHomeImg}
                alt="Elegant mansion with classical architecture"
                className="w-full h-auto object-cover"
                crossOrigin="anonymous"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-100 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectHome;
