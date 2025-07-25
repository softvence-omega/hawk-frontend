import ActiveComps from "@/components/Auction/ActiveComps";
import AuctionSearch from "@/components/Auction/AuctionSearch";
import SoldComps from "@/components/Auction/SoldComps";
import { FaArrowCircleDown } from "react-icons/fa";
import LoginFooter from "@/Layout/LoginFooter";

const Auction = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Top search */}
      <AuctionSearch />

      {/* Main layout */}
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        {/* Left side: Map & Sold Comps */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="h-[300px] md:h-[500px] w-full">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              className="rounded-md"
              src="https://maps.google.com/maps?q=2861%2062nd%20Ave,%20Oakland,%20CA&t=&z=14&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>

          {/* Sold Comps */}
          <div className="bg-[#FDEEEE] py-3 px-4 border border-[#B91C1C] rounded-md">
            <p className="text-[#B91C1C] font-bold">SOLD COMPS</p>
          </div>
          <SoldComps />
        </div>

        {/* Right side: Active Cards */}
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <h1 className="font-bricolage text-xl sm:text-2xl font-semibold">
              Quebec Real Estate & Homes For Sale
            </h1>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 gap-2 sm:gap-0">
              <p className="text-gray-400 text-sm">5 results</p>
              <p className="text-blue-400 flex items-center gap-2 text-sm">
                Sort: Home for you <FaArrowCircleDown />
              </p>
            </div>

            <div className="bg-[#16A34A14] py-3 px-4 border border-[#15803D] rounded-md mt-3">
              <p className="text-[#15803D] font-bold">ACTIVE</p>
            </div>
          </div>

          <ActiveComps />
        </div>
      </div>

      {/* <div className="mt-96">
        <div className="mb-24 flex justify-center items-center gap-4">
          <img src={logo} alt="" />
          <span className="text-xl font-semibold">AZ Deal Hub</span>
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <h1>Follow us on:</h1>
            <img src={footerIcon1} alt="" />
            <img src={footerIcon2} alt="" />
            <img src={footerIcon3} alt="" />
            <img src={footerIcon4} alt="" />
            <p>© 2006-2025 AZ Deal Hub</p>
          </div>
        </div>
        <img src={footerImage} alt="" className="w-full" />
      </div> */}
      <LoginFooter />
    </div>
  );
};

export default Auction;
