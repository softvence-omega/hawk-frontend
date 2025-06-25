import {
  FaBath,
  FaBed,
  FaBolt,
  FaCar,
  FaFire,
  FaHome,
  FaWifi,
} from "react-icons/fa";
import Features from "./Features";

export default function Description() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 min-h-fit pt-6">
      <h2 className="font-semibold lg:text-3xl text-xl">
        2861 62nd Ave, Oakland, CA
      </h2>
      <div className="w-full mx-auto grid lg:grid-cols-3 gap-6 pt-8 h-full">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6 overflow-y-auto">
          {/* Top Icons */}
          <div className="flex items-center justify-between gap-6 text-gray-700 text-sm border-b border-[#D1D1D5] pb-6">
            <div className="flex items-center justify-evenly gap-8">
              <div className="flex items-center gap-2">
                <FaHome /> 1200 sqft
              </div>
              <div className="flex items-center gap-2">
                <FaBed /> 4
              </div>
              <div className="flex items-center gap-2">
                <FaBath /> 3
              </div>
            </div>
            <div className="flex items-center justify-evenly gap-8">
              <div className="flex items-center gap-2">
                <FaCar />
              </div>
              <div className="flex items-center gap-2">
                <FaWifi />
              </div>
              <div className="flex items-center gap-2">
                <FaBolt />
              </div>
              <div className="flex items-center gap-2">
                <FaFire />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="pt-2 border-b border-[#D1D1D5] pb-9">
            <h2 className="lg:text-xl font-semibold mb-2">Description</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Great home ready to move into with 3 garages! 1 - 2 car attached,
              1 detached with plenty of room for the toys, cars, and hobby
              space. This home is all finished with 3 bedrooms and 1 bath on the
              main, an eat-in area off the kitchen and formal dining area, large
              living room with a fireplace and bookshelves. The basement is
              finished with a large living room area, a bathroom, laundry room,
              and an area that would fit all the coats.
            </p>
          </div>

          {/* Map */}
          <div className="pt-4">
            <h2 className="lg:text-xl font-semibold mb-2">Map</h2>
            <div className="w-full h-[500px]">
              <iframe
                src="https://maps.google.com/maps?q=Little%20Sioux,%20Iowa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="rounded-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <Features></Features>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white rounded-lg border border-[#D1D1D5] p-6 space-y-4 lg:h-[26%]">
          <h3 className="lg:text-xl font-bold flex items-center gap-2 text-gray-700">
            LIVE AUCTION AI ANALYZER
          </h3>
          <div className="flex justify-between text-sm border-b border-[#D1D1D5] pb-2">
            <span className="text-gray-500">As-is:</span>
            <span className="font-semibold text-gray-800">$205,000</span>
          </div>
          <div className="flex justify-between text-sm border-b border-[#D1D1D5] pb-2">
            <span className="text-gray-500">Rehab Est:</span>
            <span className="font-semibold text-gray-800">$40,000</span>
          </div>
          <div className="flex justify-between text-sm border-b border-[#D1D1D5] pb-2">
            <span className="text-gray-500">ARV:</span>
            <span className="font-semibold text-gray-800">$300,000</span>
          </div>
          <div className="flex justify-between text-sm border-b border-[#D1D1D5] pb-2">
            <span className="text-gray-500">75% Offer:</span>
            <span className="font-semibold text-blue-600">$225,000</span>
          </div>
          <div className="flex justify-between text-sm border-b border-[#D1D1D5] pb-2">
            <span className="text-gray-500">30-90 Day Resale:</span>
            <span className="font-semibold text-gray-800">$250,000</span>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 mt-2 rounded text-sm font-semibold">
            Let's Comp It!
          </button>
        </div>
      </div>
    </div>
  );
}
