// import { useState } from "react";
import cardImg from "../../../public/card-img.jpg";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBed } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface Property {
  id: number;
  name: string;
  area: number;
  beds: number;
  baths: number;
  timer: string;
  asIsPrice: number;
  rehabEstimate: number;
  arv: number;
  offer: number;
}

const HouseCard = ({ property }: { property: Property }) => {
  //   const [bidAmount, setBidAmount] = useState("");
  //   const [isBidPlaced, setIsBidPlaced] = useState(false);
  const navigate = useNavigate();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="w-full md:max-w-md bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ">
      {/* Property Image */}
      <div className="w-full h-48 overflow-hidden ">
        <img
          src={cardImg}
          alt={`${property.name} property`}
          className="w-full h-full object-cover "
        />
      </div>

      <div className="p-6">
        {/* Property Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-[6px]">
              {" "}
              <CiLocationOn></CiLocationOn>
              {property.name}
            </h2>
            <div className=" flex gap">
              <div className="text-gray-600 mt-1 flex gap-[24px]">
                <p> {property.area.toLocaleString()} sqft</p>
                <p className="flex items-center gap-[4px]">
                  {" "}
                  <MdOutlineBed></MdOutlineBed>
                  {property.beds} Beds{" "}
                </p>
                <p className="flex items-center gap-[4px]">
                  {" "}
                  <MdOutlineBed></MdOutlineBed>
                  {property.baths} Baths{" "}
                </p>
              </div>
              {/* <div className='flex gap-[24px]'>
                                <FaCarOn></FaCarOn>
                                <FaWifi></FaWifi>
                            </div> */}
            </div>
          </div>
          {/* Could add favorite button here */}
        </div>

        {/* Timer Section */}
        <div className="my-4 bg-gray-100 p-3 rounded-lg">
          <p className="text-center text-2xl font-bold text-[#84CC16]">
            {property.timer}
          </p>
          <p className="text-center text-gray-600 text-sm">
            Days &nbsp; Hours &nbsp; Minutes &nbsp; Seconds
          </p>
        </div>

        {/* CTA Button */}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mb-4 transition-colors duration-200"
          onClick={() => navigate(`/comps/${property.id}`)}
        >
          Let’s Comp It
        </button>

        {/* Price Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="flex justify-between sm:gap-2 md:gap-4 items-center border-b border-gray-300 pb-2">
            <p className="text-gray-600 text-sm flex-shrink-0">As-Is:</p>
            <p className="font-bold text-sm text-right">
              {formatCurrency(property.asIsPrice)}
            </p>
          </div>
          <div className="flex justify-between sm:gap-2 md:gap-4 items-center border-b border-gray-300 pb-2">
            <p className="text-gray-600 text-sm flex-shrink-0">Rehab Est:</p>
            <p className="font-bold text-sm text-right">
              {formatCurrency(property.rehabEstimate)}
            </p>
          </div>
          <div className="flex justify-between sm:gap-2 md:gap-4 col-span-2 items-center border-b border-gray-300 pb-2">
            <p className="text-gray-600 text-sm flex-shrink-0">ARV:</p>
            <p className="font-bold text-sm text-right">
              {formatCurrency(property.arv)}
            </p>
          </div>
          {/* <div className="flex justify-between sm:gap-2 md:gap-4 items-center border-b border-gray-300 pb-2">
            <p className="text-gray-600 text-sm flex-shrink-0">75% Offer:</p>
            <p className="font-bold text-sm text-blue-600 text-right">
              {formatCurrency(property.offer)}
            </p>
          </div> */}
        </div>

        {/* Bud Amount Section */}

        <h1 className="pb-2">Bid Amount </h1>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 w-full">
            <input
              className="px-2 py-2 flex-1 border border-gray-300 rounded text-xs sm:text-sm min-w-0"
              type="text"
              placeholder="Enter bid amount"
            />
            <button className="flex-shrink-0 bg-gradient-to-r from-[#FF8702] to-[#FD4303] px-3 sm:px-4 py-2 rounded text-white text-xs sm:text-sm font-medium whitespace-nowrap">
              Place Bid
            </button>
          </div>
          <button
            className="w-full px-4 py-3 border border-gray-600 font-bold rounded text-xs sm:text-sm hover:bg-gray-50 transition-colors"
            onClick={() => navigate(`/homeDetails/${property.id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
