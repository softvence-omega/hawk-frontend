import GradientButton from "@/components/ui/GradientButton";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import squareFeet from "@/assets/icons/Frame.svg";
import bed from "@/assets/icons/bed.svg";
import bath from "@/assets/icons/Bathroom.svg";
import parking from "@/assets/icons/parking.svg";
import wifi from "@/assets/icons/wifi.svg";
import swimmingPool from "@/assets/icons/swimmingPool.svg";

interface CompCardProps {
  isActive: boolean;
  img: string;
  address: string;
  sqft: number;
  beds: number;
  baths: number;
  timeRemaining: string;
  asIsPrice: string;
  rehabEst: string;
  arv: string;
  offer: string;
  openingBid: string;
}

const ActiveCompsCard: React.FC<CompCardProps> = ({
  isActive,
  img,
  address,
  sqft,
  beds,
  baths,
  timeRemaining,
  asIsPrice,
  rehabEst,
  arv,
  offer,
  openingBid,
}) => {
  const [days, hours, minutes, seconds] = timeRemaining.split(" : ");

  return (
    <div
      className={`rounded-lg shadow-md p-4 mb-4 ${
        isActive ? "bg-green-100" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-sm text-gray-500">Opening Bid</p>
          <p className="text-lg font-bold">${openingBid}</p>
        </div>
        <GradientButton className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
          PLACE A BID
        </GradientButton>
      </div>
      {/* image  */}
      <div>
        <img src={img} alt="" />
      </div>

      <div className="flex items-center my-3">
        <span className="mr-2">
          <IoLocationOutline />
        </span>
        <p className="text-sm">{address}</p>
      </div>

      <div className="flex justify-between items-center text-sm mb-4">
        <div className="flex items-center">
          <span className="mr-4 flex items-center gap-2">
            <img src={squareFeet} alt="" className="w-5 h-5" />
            <span> {sqft} sqft</span>
          </span>
          <span className="mr-4 flex items-center gap-2">
            <img src={bed} alt="" className="w-5 h-5" />
            {beds}
          </span>
          <span className="flex items-center gap-2">
            <img src={bath} alt="" className="w-5 h-5" />
            {baths}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2">
            <img src={parking} alt="" className="w-5 h-5" />
          </span>
          <span className="flex items-center gap-2">
            <img src={wifi} alt="" className="w-5 h-5" />
          </span>
          <span className="flex items-center gap-2">
            <img src={swimmingPool} alt="" className="w-5 h-5" />
          </span>
        </div>
      </div>

      <div className="mb-4 bg-white px-4 py-2">
        <p className="text-xs text-gray-500 mb-1">Time Remaining</p>
        <div className="flex space-x-2">
          <div className="text-center">
            <div className="font-bold">{days}</div>
            <div className="text-xs">Days</div>
          </div>
          <div className="text-center">
            <div className="font-bold">{hours}</div>
            <div className="text-xs">Hours</div>
          </div>
          <div className="text-center">
            <div className="font-bold">{minutes}</div>
            <div className="text-xs">Minutes</div>
          </div>
          <div className="text-center">
            <div className="font-bold">{seconds}</div>
            <div className="text-xs">Seconds</div>
          </div>
        </div>
      </div>

      <button className="bg-blue-600 text-white w-full py-2 rounded-lg text-md font-medium mb-4">
        Let's Comp It
      </button>

      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
        <div>
          <p className="text-gray-500">As-Is:</p>
          <p>${asIsPrice}</p>
        </div>
        <div>
          <p className="text-gray-500">Rehab Est:</p>
          <p>${rehabEst}</p>
        </div>
        <div>
          <p className="text-gray-500">ARV:</p>
          <p>${arv}</p>
        </div>
        <div>
          <p className="text-gray-500">75% Offer:</p>
          <p>${offer}</p>
        </div>
      </div>

      <button className="text-black border border-gray-600 w-full py-2 hover:bg-blue-600 hover:text-white rounded-md text-sm font-medium">
        View Details
      </button>
    </div>
  );
};

export default ActiveCompsCard;
