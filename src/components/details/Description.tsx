import Features from "./Features";

import bathrm from "../../assets/icons/Bathroom.svg";
import bedr from "../../assets/icons/bed.svg";
import frm from "../../assets/icons/Frame.svg";
import parking from "../../assets/icons/parking.svg";
import swimm from "../../assets/icons/swimmingPool.svg";
import wifi from "../../assets/icons/wifi.svg";

const propertyIcons = [
  { icon: frm, label: "1200 sqft" }, // Area
  { icon: bedr, label: "4" },        // Bedroom
  { icon: bathrm, label: "3" },      // Bathroom
  { icon: parking, label: "" },      // Parking
  { icon: wifi, label: "" },         // Wifi
  { icon: swimm, label: "" },        // Pool
];

const analyzerStats = [
  { label: "As-is:", value: "$205,000" },
  { label: "Rehab Est:", value: "$40,000" },
  { label: "ARV:", value: "$300,000" },
  { label: "75% Offer:", value: "$225,000", className: "text-blue-600" },
  { label: "30-90 Day Resale:", value: "$250,000" },
];

export default function Description() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-6">
      <h2 className="font-semibold text-xl lg:text-3xl">
        2861 62nd Avenue, Oakland, CA
      </h2>

      {/* Mobile Layout */}
      <div className="block lg:hidden space-y-6 pt-8">
        {/* Icons */}
        <div className="flex flex-wrap justify-between gap-4 text-gray-700 text-sm border-b border-[#D1D1D5] pb-6">
          {propertyIcons.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={item.icon} alt="icon" className="w-5 h-5" />
              {item.label && <span>{item.label}</span>}
            </div>
          ))}
        </div>

        {/* Description */}
        <section className="border-b border-[#D1D1D5] pb-6">
          <h3 className="text-xl font-semibold mb-2">Description</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Great home ready to move into with 3 garages! 1 - 2 car attached, 1
            detached with plenty of room for the toys, cars, and hobby space.
            This home is all finished with 3 bedrooms and 1 bath on the main, an
            eat-in area off the kitchen and formal dining area, large living
            room with a fireplace and bookshelves. The basement is finished with
            a large living room area, a bathroom, laundry room, and an area that
            would fit all the coats.
          </p>
        </section>

        {/* Map */}
        <section>
          <h3 className="text-xl font-semibold mb-2">Map</h3>
          <div className="w-full h-[250px]">
            <iframe
              src="https://maps.google.com/maps?q=Little%20Sioux,%20Iowa&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="rounded-lg w-full h-full"
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </section>

        {/* AI Analyzer */}
        <section className="bg-white rounded-lg border border-[#D1D1D5] p-4 space-y-4">
          <h3 className="text-lg font-bold text-gray-700">
            LIVE AUCTION AI ANALYZER
          </h3>
          {analyzerStats.map(({ label, value, className }, idx) => (
            <div
              key={idx}
              className="flex justify-between text-sm border-b border-[#D1D1D5] pb-2"
            >
              <span className="text-gray-500">{label}</span>
              <span
                className={`font-semibold text-gray-800 ${className || ""}`}
              >
                {value}
              </span>
            </div>
          ))}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 mt-2 rounded text-sm font-semibold">
            Let's Comp It!
          </button>
        </section>

        {/* Features */}
        <Features />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 pt-8">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Icons */}
          <div className="flex items-center justify-between text-gray-700 text-sm border-b border-[#D1D1D5] pb-6">
            <div className="flex items-center gap-8">
              {propertyIcons.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img src={item.icon} alt="icon" className="w-5 h-5" />
                  {item.label && <span>{item.label}</span>}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-8">
              {propertyIcons.slice(3).map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img src={item.icon} alt="icon" className="w-5 h-5" />
                  {item.label && <span>{item.label}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <section className="border-b border-[#D1D1D5] pb-9 pt-2">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Great home ready to move into with 3 garages! 1 - 2 car attached,
              1 detached with plenty of room for the toys, cars, and hobby
              space. This home is all finished with 3 bedrooms and 1 bath on the
              main, an eat-in area off the kitchen and formal dining area, large
              living room with a fireplace and bookshelves. The basement is
              finished with a large living room area, a bathroom, laundry room,
              and an area that would fit all the coats.
            </p>
          </section>

          {/* Map */}
          <section className="pt-4">
            <h3 className="text-xl font-semibold mb-2">Map</h3>
            <div className="w-full h-[500px]">
              <iframe
                src="https://maps.google.com/maps?q=Little%20Sioux,%20Iowa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="rounded-lg w-full h-full"
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          </section>

          {/* Features */}
          <Features />
        </div>

        {/* Right Sidebar */}
        <aside className="bg-white rounded-lg border border-[#D1D1D5] p-6 space-y-4 h-fit">
          <h3 className="text-xl font-bold text-gray-700">
            LIVE AUCTION AI ANALYZER
          </h3>
          {analyzerStats.map(({ label, value, className }, idx) => (
            <div
              key={idx}
              className="flex justify-between text-sm border-b border-[#D1D1D5] pb-2"
            >
              <span className="text-gray-500">{label}</span>
              <span
                className={`font-semibold text-gray-800 ${className || ""}`}
              >
                {value}
              </span>
            </div>
          ))}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 mt-2 rounded text-sm font-semibold">
            Let's Comp It!
          </button>
        </aside>
      </div>
    </div>
  );
}
