export default function Features() {
  return (
    <div className="w-full py-10">
      <h2 className="lg:text-2xl text-xl font-bold mb-8">Facts & features</h2>
      <div className="space-y-8">
        {/* Interior */}
        <div>
          <h2 className="py-2 w-full text-xl bg-[#F6F6FA] px-4">Interior</h2>
          <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
            {/* Bedrooms & Bathrooms */}
            <div>
              <h4 className="font-bold mb-2">Bedrooms & bathrooms</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Bedrooms: 3</li>
                <li>Bathrooms: 2</li>
              </ul>
            </div>

            {/* Heating */}
            <div>
              <h4 className="font-bold mb-2">Heating</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Natural Gas, Propane</li>
              </ul>
            </div>

            {/* Rooms */}
            <div>
              <h4 className="font-bold mb-2">Rooms</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Room types: Bathroom, Family Room, Baths,<br></br> Other Bedrooms, Kitchen, Dining</li>
              </ul>
            </div>

            {/* Cooling */}
            <div>
              <h4 className="font-bold mb-2">Cooling</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Electric</li>
              </ul>
            </div>

            {/* Dining Room */}
            <div>
              <h4 className="font-bold mb-2">Dining room</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Features: Eat-in Kitchen, Formal Dining</li>
                <li>Level: Main</li>
              </ul>
            </div>

            {/* Appliances */}
            <div>
              <h4 className="font-bold mb-2">Appliances</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Included: Dishwasher, Electric Water Heater</li>
                <li>Included: Microwave, Refrigerator</li>
              </ul>
            </div>

            {/* Family Room */}
            <div>
              <h4 className="font-bold mb-2">Family room</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Level: Main</li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-bold mb-2">Features</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Other</li>
                <li>Basement: Partial, Finished Bath, Living Room</li>
                <li>Has fireplace: Yes</li>
                <li>Fireplace features: Main Floor</li>
              </ul>
            </div>

            {/* Living Room */}
            <div>
              <h4 className="font-bold mb-2">Living room</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Level: Basement</li>
              </ul>
            </div>

            {/* Interior Area */}
            <div>
              <h4 className="font-bold mb-2">Interior area</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Total structure area: 2,200 sqft</li>
                <li>Total interior livable area: 2,200 sqft</li>
                <li>Finished area above ground: 1,425 sqft</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Property */}
        <div>
          <h2 className="py-2 w-full text-xl bg-[#F6F6FA] px-4">Property</h2>
          <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
            <div>
              <h4 className="font-bold mb-2">Parking</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Total spaces: 6</li>
                <li>Parking features: Attached & Detached, Off Street, Electric, Storage</li>
                <li>Attached garage spaces: 6</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Lot</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Dimensions: 120 x 120 / 14400 sqft</li>
                <li>Features: Corner Lot, Over 1/4 up to 1/2 Acre</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Features</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Levels: Split Entry</li>
                <li>Stories: 1</li>
                <li>Patio & porch: Enclosed, Three Season Room</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Details</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Additional structures: Garage(s)</li>
                <li>Parcel number: 540002202100000</li>
                <li>Special conditions: Real Estate Owned</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Construction */}
        <div>
          <h2 className="py-2 w-full text-xl bg-[#F6F6FA] px-4">Construction</h2>
          <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
            <div>
              <h4 className="font-bold mb-2">Type & style</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Home type: SingleFamily</li>
                <li>Property subtype: Single Family Residence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Condition</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>New construction: No</li>
                <li>Year built: 1990</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Materials</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Frame</li>
                <li>Roof: Composition</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Utilities */}
        <div>
          <h2 className="py-2 w-full text-xl bg-[#F6F6FA] px-4">Utilities & green energy</h2>
          <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
            <div>
              <h4 className="font-bold mb-2">Utilities</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Sewer: Public Sewer</li>
                <li>Water: Public</li>
                <li>Utilities for property: Propane Tank Rental</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Community */}
        <div>
          <h2 className="py-2 w-full text-xl bg-[#F6F6FA] px-4">Community & HOA</h2>
          <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
            <div>
              <h4 className="font-bold mb-2">Location</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Region: Little Sioux</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Financial */}
        <div>
          <h2 className="py-2 w-full text-xl bg-[#F6F6FA] px-4">Financial & listing details</h2>
          <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
            <div>
              <h4 className="font-bold mb-2">Financials</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Price per square foot: $98/sqft</li>
                <li>Tax assessed value: $199,420</li>
                <li>Annual tax amount: $3,168</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Listing</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Date on market: 3/16/2025</li>
                <li>Listing terms: 1031 Exchange,Conventional</li>
                <li>Electric utility on property: Yes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}