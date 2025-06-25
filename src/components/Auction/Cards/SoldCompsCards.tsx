import { FaBed, FaBath } from "react-icons/fa";
import { BiArea } from "react-icons/bi";

interface SoldCompsCardsProps {
  image: string;
  price: number;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  soldDate: string;
  dom: number;
  status: string;
}

export default function SoldCompsCards({
  image,
  price,
  sqft,
  bedrooms,
  bathrooms,
  soldDate,
  dom,
  status,
}: SoldCompsCardsProps) {
  return (
    <div className="w-full h-fit bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-4">
      {/* Property Image */}
      <div className="w-full h-48 rounded-lg overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt="Property"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Price */}
      <div className="text-2xl font-bold text-red-600">
        ${price.toLocaleString()}
      </div>

      {/* Property Details */}
      <div className="flex items-center gap-4 text-gray-600">
        <div className="flex items-center gap-1">
          <BiArea className="w-4 h-4" />
          <span className="text-sm">{sqft} sqft</span>
        </div>
        <div className="flex items-center gap-1">
          <FaBed className="w-4 h-4" />
          <span className="text-sm">{bedrooms}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaBath className="w-4 h-4" />
          <span className="text-sm">{bathrooms}</span>
        </div>
      </div>

      {/* Property Info */}
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Sold:</span>
          <span className="font-medium">{soldDate}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">DOM:</span>
          <span className="font-medium">{dom}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Status:</span>
          <span className="font-medium">{status}</span>
        </div>
      </div>
    </div>
  );
}
