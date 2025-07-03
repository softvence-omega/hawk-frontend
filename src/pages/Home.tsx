import HouseCard from "@/components/home/HouseCard";
import banner from "../../public/banner img.png";
import CommonWrapper from "@/common/CommonWrapper";
import ReviewSection from "@/components/home/ReviewSection";
import AuctionSearch from "@/components/Auction/AuctionSearch";
import PerfectHome from "@/components/home/PerfectHome";

const Home = () => {
  const cardData = [
    {
      id: 1,
      name: "2861 62nd Ave, Oakland, CA",
      area: 1200,
      beds: 4,
      baths: 3,
      timer: "00  : 00  : 00  :  00",
      asIsPrice: 205000,
      rehabEstimate: 40000,
      arv: 300000,
      offer: 225000,
    },
    {
      id: 2,
      name: "2861 62nd Ave, Oakland, CA",
      area: 1500,
      beds: 3,
      baths: 2,
      timer: "01 : 12 : 30 : 45",
      asIsPrice: 275000,
      rehabEstimate: 55000,
      arv: 375000,
      offer: 281250,
    },
    {
      id: 3,
      name: "2861 62nd Ave, Oakland, CA",
      area: 1800,
      beds: 5,
      baths: 3,
      timer: "00 : 05 : 15 : 22",
      asIsPrice: 320000,
      rehabEstimate: 75000,
      arv: 450000,
      offer: 337500,
    },
    {
      id: 4,
      name: "2861 62nd Ave, Oakland, CA",
      area: 950,
      beds: 2,
      baths: 1,
      timer: "03 : 00 : 00 : 00",
      asIsPrice: 150000,
      rehabEstimate: 30000,
      arv: 210000,
      offer: 157500,
    },
    {
      id: 5,
      name: "Hilltop",
      area: 2200,
      beds: 4,
      baths: 3,
      timer: "00 : 00 : 45 : 18",
      asIsPrice: 410000,
      rehabEstimate: 90000,
      arv: 575000,
      offer: 431250,
    },
    {
      id: 6,
      name: "Hilltop",
      area: 2200,
      beds: 4,
      baths: 3,
      timer: "00 : 00 : 45 : 18",
      asIsPrice: 410000,
      rehabEstimate: 90000,
      arv: 575000,
      offer: 431250,
    },
  ];

  return (
    <div className="">
      {/* Responsive video banner */}
      <video
        className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[590px] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={banner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <AuctionSearch />

      {/* Card Grid Section */}

      <CommonWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-6 md:p-8 lg:p-12">
          {cardData.map((item) => (
            <HouseCard property={item}></HouseCard>
          ))}
        </div>
      </CommonWrapper>

      {/* Reviews */}
      <ReviewSection />
      <CommonWrapper>
        <PerfectHome></PerfectHome>
      </CommonWrapper>
    </div>
  );
};

export default Home;
