import { activeCompsData } from "@/lib/data/cardData";
import ActiveCompsCard from "./Cards/ActiveCompsCards";

const ActiveComps: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {activeCompsData.map((comp) => (
          <ActiveCompsCard
            key={comp.id}
            img={comp.img}
            isActive={comp.isActive}
            address={comp.address}
            sqft={comp.sqft}
            beds={comp.beds}
            baths={comp.baths}
            timeRemaining={comp.timeRemaining}
            asIsPrice={comp.asIsPrice}
            rehabEst={comp.rehabEst}
            arv={comp.arv}
            offer={comp.offer}
            openingBid={comp.openingBid}
          />
        ))}
      </div>
    </div>
  );
};

export default ActiveComps;
