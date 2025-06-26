import img from "../../assets/detailsImage/image.png";

export default function HomeDetailsComponent() {
  return (
     <div className="flex flex-col md:flex-col px-4 sm:px-6 lg:px-8 lg:flex-row overflow-hidden w-full max-w-full mx-auto h-auto lg:h-[700px] mt-8 mb-8">
      {/* Left Image */}
      <div className="w-full lg:w-[65%] lg:h-[700px] ">
        <img
          src={img}
          alt="House"
          className="object-cover h-full w-full rounded-[12px]"
        />
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-white lg:h-[700px] flex flex-col justify-between">
        <div className="flex gap-[14px] items-center px-4 sm:px-6 pb-6 lg:mt-0 mt-10">
          <button className="font-semibold text-gray-800 border-b-2 border-black">Overview</button>
          <button className="text-gray-500">Your Bids</button>
        </div>

        <div className="border border-[#D1D1D5] rounded-[10px] px-[20px] py-[24px] lg:ml-6 ml-0 flex-1 flex flex-col justify-between">
          <div>
            <div className="text-center mb-8 bg-[#F0F4FF] rounded-[8px] px-[20px] py-[30px] mt-2">
              <h2 className="text-gray-700 font-semibold mb-2">TO BE SOLD AT AUCTION IN</h2>
              <div className="flex justify-evenly gap-3 text-base sm:text-lg font-bold text-[#84CC16] flex-wrap">
                <div className="text-center min-w-[60px]">
                  <div>07</div>
                  <div className="text-xs text-gray-500">Days</div>
                </div>
                <div className="text-center min-w-[60px]">
                  <div>23</div>
                  <div className="text-xs text-gray-500">Hours</div>
                </div>
                <div className="text-center min-w-[60px]">
                  <div>56</div>
                  <div className="text-xs text-gray-500">Minutes</div>
                </div>
                <div className="text-center min-w-[60px]">
                  <div>32</div>
                  <div className="text-xs text-gray-500">Seconds</div>
                </div>
              </div>
            </div>

            <div className="mb-3 text-sm sm:text-base flex justify-between items-center border-b border-[#D1D1D5] pb-2">
              <span className="font-[300] text-[20px]">Status: </span>
              <span className="bg-[#84CC16] px-3 py-2 rounded-full text-white font-medium text-[14px]">Active</span>
            </div>

            <div className="mb-4  flex justify-between items-center border-b border-[#D1D1D5] pb-2">
              <span className="font-[300] text-[20px]">DOM: </span>
              <span className="text-gray-600 font-[400] text-[16px]">65 Days</span>
            </div>

            <div>
              <h3 className="text-[16px] leading-[24px] mb-4">Bid Amount</h3>
              <input
                type="text"
                placeholder="Enter your bid amount"
                className="border border-[#D1D1D5] px-4 py-2 w-full rounded-[4px] mb-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-[4px] text-sm sm:text-base">
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
