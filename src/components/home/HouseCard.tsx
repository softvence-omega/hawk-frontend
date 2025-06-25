import { useState } from 'react';
import cardImg from '../../../public/card-img.jpg';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBed } from "react-icons/md";

const HouseCard = ({ property }) => {
    const [bidAmount, setBidAmount] = useState('');
    const [isBidPlaced, setIsBidPlaced] = useState(false);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(amount);
    };



    return (
        <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden m-4 transition-all duration-300 hover:shadow-xl ">
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
                        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-[6px]"> <CiLocationOn></CiLocationOn>{property.name}</h2>
                        <div className=' flex gap'>
                            <div className="text-gray-600 mt-1 flex gap-[24px]">
                                <p> {property.area.toLocaleString()} sqft</p>
                                <p className='flex items-center gap-[4px]'> <MdOutlineBed></MdOutlineBed>{property.beds} Beds  </p>
                                <p className='flex items-center gap-[4px]'> <MdOutlineBed></MdOutlineBed>{property.baths} Baths </p>
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
                        Days &nbsp;  Hours &nbsp;  Minutes  &nbsp; Seconds
                    </p>
                </div>

                {/* CTA Button */}
                <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mb-4 transition-colors duration-200"
                   
                >
                    Let’s Comp It
                </button>

                {/* Price Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex gap-[46px] items-center border-b border-gray-300">
                        <p className="text-gray-600 text-sm">As-Is:</p>
                        <p className="font-bold text-sm">{formatCurrency(property.asIsPrice)}</p>
                    </div>
                    <div className="flex gap-[46px] items-center border-b border-gray-300">
                        <p className="text-gray-600 text-sm">Rehab Est:</p>
                        <p className="font-bold text-sm">{formatCurrency(property.rehabEstimate)}</p>
                    </div>
                    <div className="flex gap-[46px] items-center border-b border-gray-300">
                        <p className="text-gray-600 text-sm">ARV:</p>
                        <p className="font-bold text-sm ">{formatCurrency(property.arv)}</p>
                    </div>
                    <div className="flex gap-[46px] items-center border-b border-gray-300">
                        <p className="text-gray-600 text-sm">75% Offer:</p>
                        <p className="font-bold text-sm text-blue-600">{formatCurrency(property.offer)}</p>
                    </div>
                </div>

                <h1 className='pb-2'>Bid Amount </h1>
                <div>
                    <div className='flex gap-[16px] w-full'>
                        <input className='px-3 flex-1 border border-gray-300 rounded' type="text" placeholder='Enter your bid amount' />
                        <button className='flex-1 bg-linear-to-r from-[#FF8702] to-[#FD4303] px-[24px] py-[10px] rounded text-white'>Place Bid</button>
                    </div>
                    <button className='w-full px-[24px] py-[20px] border border-gray-600 rounded mt-2'>View Details</button>
                </div>

            </div> 


           
        </div>
    );
};

export default HouseCard;