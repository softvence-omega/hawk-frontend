import HouseCard from "@/components/home/HouseCard";
import banner from "../../public/banner img.png";
import CommonWrapper from "@/common/CommonWrapper";
import ReviewSection from "@/components/home/ReviewSection";

const Home = () => {
  const cardData = [
    {
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

      {/* Card Grid Section */}
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {cardData.map((item, index) => (
            <HouseCard key={index} property={item} />
          ))}
        </div>
     

      {/* Reviews */}
      <ReviewSection />
    </div>
  );
};

export default Home;
