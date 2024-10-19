import Header from "./header";
import { SafetyCardList } from "./SafetyCardList";
import { FilterSort } from "./FilterSort";
import { Graphs } from "./Graphs";

// Sample data for the cards
const cardData = [
  {
    id: 1,
    datetime: "2024-01-01",
    title: "Card 1",
    description: "This is the first card",
    content: "Content for card 1",
    score: 10,
  },
  {
    id: 2,
    datetime: "2024-02-02",
    title: "Card 2",
    description: "This is the second card",
    content: "Content for card 2",
    score: 8,
  },
  {
    id: 3,
    datetime: "2024-03-03",
    title: "Card 3",
    description: "This is the third card",
    content: "Content for card 3",
    score: 6,
  },
  {
    id: 4,
    datetime: "2024-04-04",
    title: "Card 4",
    description: "This is the third card",
    content: "Content for card 4",
    score: 2,
  },
  {
    id: 5,
    datetime: "2024-04-05",
    title: "Card 5",
    description: "This is the third card",
    content: "Content for card 5",
    score: 5,
  },
  {
    id: 7,
    datetime: "2024-04-06",
    title: "Card 6",
    description: "This is the third card",
    content: "Content for card 6",
    score: 6,
  },
];

export default function MainPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        <div className="md:col-span-2 order-first md:order-last space-y-4">
          <h2 className="text-2xl font-semibold">Graphs</h2>
          <Graphs cardData={cardData} />
        </div>
        <div className="md:col-span-2 order-last md:order-first space-y-4">
          <h2 className="text-2xl font-semibold">Results</h2>
          <FilterSort />
          <SafetyCardList cards={cardData} />
        </div>
      </div>
    </div>
  );
}