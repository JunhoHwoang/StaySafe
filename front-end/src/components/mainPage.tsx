import Header from "./header";
import { SafetyCardList } from "./SafetyCardList";
import { FilterSort } from "./FilterSort";
import { Graphs } from "./Graphs";
import { useState } from "react";
import { GraphStats } from "./GraphStats";

// Sample data for the cards
const cardData = [
  {
    id: 1,
    datetime: "4/21/2024",
    title: "Card 1",
    description: "This is the first card",
    content: "Content for card 1",
    score: 10,
  },
  {
    id: 2,
    datetime: "4/12/2024",
    title: "Card 2",
    description: "This is the second card",
    content: "Content for card 2",
    score: 8,
  },
  {
    id: 3,
    datetime: "9/10/2024",
    title: "Card 3",
    description: "This is the third card",
    content: "Content for card 3",
    score: 6,
  },
  {
    id: 4,
    datetime: "2/20/2024",
    title: "Card 4",
    description: "This is the third card",
    content: "Content for card 4",
    score: 2,
  },
  {
    id: 5,
    datetime: "4/20/2022",
    title: "Card 5",
    description: "This is the third card",
    content: "Content for card 5",
    score: 5,
  },
  {
    id: 7,
    datetime: "4/20/2024",
    title: "Card 6",
    description: "This is the third card",
    content: "Content for card 6",
    score: 6,
  },
];

export default function MainPage() {
  const [filteredItems, setFilteredItems] = useState(cardData);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        <div className="md:col-span-2 order-first md:order-last space-y-4">
          <h2 className="text-2xl font-semibold">Graphs</h2>
          <Graphs cardData={cardData} />
          <GraphStats cardData={cardData} />
        </div>
        <div className="md:col-span-2 order-last md:order-first space-y-4">
          <h2 className="text-2xl font-semibold">Results</h2>
          <FilterSort items={cardData} onFilterSort={setFilteredItems} />
          <SafetyCardList cards={filteredItems} />
        </div>
      </div>
    </div>
  );
}
