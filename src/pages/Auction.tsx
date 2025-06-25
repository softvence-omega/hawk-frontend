import ActiveComps from "@/components/Auction/ActiveComps";
import AuctionSearch from "@/components/Auction/AuctionSearch";
import SoldComps from "@/components/Auction/SoldComps";
import { FaArrowCircleDown } from "react-icons/fa";
import LoginFooter from "@/Layout/LoginFooter";

const Auction = () => {
  return (
    <div>
      <AuctionSearch />
      <div className="flex mx-3 gap-2">
        {/* iframe  */}
        <div className="w-1/2">
          <div className="h-[500px]">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=2861%2062nd%20Ave,%20Oakland,%20CA&t=&z=14&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
          {/* sold comps  */}
          <div>
            <div className="bg-[#FDEEEE] py-4 px-2 border border-[#B91C1C] rounded-md mt-3">
              <p className="text-[#B91C1C] font-bold">SOLD COMPS</p>
            </div>
            <SoldComps />
          </div>
        </div>
        {/* cards  */}
        <div className="w-1/2">
          <div className="px-4 py-5">
            <h1 className="font-bricolage text-2xl font-semibold">
              Quebec Real Estate & Homes For Sale
            </h1>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-400">5 results</p>
              <p className="text-blue-400 flex items-center gap-3">
                Sort: Home for you <FaArrowCircleDown />
              </p>
            </div>
            <div className="bg-[#16A34A14] py-4 px-2 border border-[#15803D] rounded-md mt-3">
              <p className="text-[#15803D] font-bold">ACTIVE</p>
            </div>
          </div>
          {/* cards div  */}
          <div>
            <ActiveComps />
          </div>
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
