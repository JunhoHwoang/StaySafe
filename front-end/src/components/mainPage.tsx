import Header from "./header";
import { SafetyCardList } from "./SafetyCardList";
import { Sidebar } from "./sidebar";

// Sample data for the cards
const cardData = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card",
      content: "Content for card 1",
      score: 10,
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card",
      content: "Content for card 2",
      score: 8,
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card",
      content: "Content for card 3",
      score: 6,
    },
  ];

const MainPage = () => {
  return (
    <div className="flex flex-col w-full h-screen items-stretch">
      <Header />
      <div className="grid grid-cols-5 grid-rows-1  h-full">
        <div className="col-span-1">
          <Sidebar />
        </div>

        <div className="col-span-3 w-full">
          <SafetyCardList cards={cardData} />
        </div>

        <div className="col-span-1"></div>
      </div>
    </div>
  )
}

export default MainPage