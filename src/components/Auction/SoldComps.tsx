import { soldCompsData } from "@/lib/data/cardData";
import PropertyCard from "./Cards/SoldCompsCards";

const SoldComps = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Property Listings
        </h1>

        {/* Single card example */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {soldCompsData.map((property, idx) => (
            <PropertyCard key={idx} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoldComps;
