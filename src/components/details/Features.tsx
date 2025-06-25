export default function Features() {
  return (
    <div className="w-full pt-10">
      <h2 className="lg:text-xl font-semibold">Facts & features</h2>
      <div className="space-y-10 my-10">
        {/* Interior */}
        <div>
          <h2 className="py-2 w-full bg-[#F6F6FA] px-4">Interior</h2>
          <div className="px-4 flex flex-col md:flex-row justify-between gap-8">
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Bedrooms & bathrooms</h4>
              <ul>
                <li>Bedrooms: 3</li>
                <li>Bathrooms: 2</li>
                <li>Full bathrooms: 2</li>
                <li>Half bathrooms: 1</li>
              </ul>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Heating</h4>
              <ul>
                <li>Natural Gas</li>
                <li>Propane</li>
                <li>Central Heating</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Property */}
        <div>
          <h2 className="py-2 w-full bg-[#F6F6FA] px-4">Property</h2>
          <div className="px-4 mt-6">
            <ul>
              <li>Property type: Single Family</li>
              <li>Lot size: 5,000 sqft</li>
              <li>Year built: 2005</li>
              <li>Stories: 2</li>
              <li>Parking: 2 spaces</li>
            </ul>
          </div>
        </div>

        {/* Construction */}
        <div>
          <h2 className="py-2 w-full bg-[#F6F6FA] px-4">Construction</h2>
          <div className="px-4 mt-6">
            <ul>
              <li>Construction materials: Brick, Wood</li>
              <li>Roof: Shingle</li>
              <li>Foundation: Slab</li>
              <li>New construction: No</li>
            </ul>
          </div>
        </div>

        {/* Utilities & green energy */}
        <div>
          <h2 className="py-2 w-full bg-[#F6F6FA] px-4">
            Utilities & green energy
          </h2>
          <div className="px-4 mt-6">
            <ul>
              <li>Water: Public</li>
              <li>Sewer: Public</li>
              <li>Electric: Connected</li>
              <li>Energy efficiency: Solar panels</li>
            </ul>
          </div>
        </div>

        {/* Community & HOA */}
        <div>
          <h2 className="py-2 w-full bg-[#F6F6FA] px-4">Community & HOA</h2>
          <div className="px-4 mt-6">
            <ul>
              <li>Community features: Playground, Pool</li>
              <li>HOA fee: $120/month</li>
              <li>HOA amenities: Clubhouse, Gym</li>
              <li>Pets allowed: Yes</li>
            </ul>
          </div>
        </div>

        {/* Financial & listing details */}
        <div>
          <h2 className="py-2 w-full bg-[#F6F6FA] px-4">
            Financial & listing details
          </h2>
          <div className="px-4 mt-6">
            <ul>
              <li>Price: $450,000</li>
              <li>Price/sqft: $225</li>
              <li>Days on market: 42</li>
              <li>MLS ID: 123456789</li>
              <li>Listed on: May 1, 2025</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
