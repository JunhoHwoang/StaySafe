import Header from "./header";
import { SafetyCardList } from "./SafetyCardList";
import { FilterSort } from "./FilterSort";
import { Graphs } from "./Graphs";
import { useState } from "react";
import { GraphStats } from "./GraphStats";
import useCardData from "./useCardData";


export default function MainPage() {
  const cardData = useCardData();
  const [filteredItems, setFilteredItems] = useState(cardData);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        <div className="md:col-span-2 order-last md:order-first space-y-4">
          <h2 className="text-2xl font-semibold">Statistics</h2>
          <Graphs cardData={cardData} />
          <GraphStats cardData={cardData} />
        </div>
        <div className="md:col-span-2 order-first md:order-last space-y-4">
          <h2 className="text-2xl font-semibold">Results</h2>
          <FilterSort items={cardData} onFilterSort={setFilteredItems} />
          <SafetyCardList cards={filteredItems} />
        </div>
      </div>
    </div>
  );
}
