import Header from "./header";
import React from "react";
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

export default function MainPage() {
  return (
    <div className="flex flex-col w-full h-screen items-stretch">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-1 h-full">
        <div className="md:col-span-2 order-first md:order-last">
          <p className="text-2xl">Graphs</p>
        </div>
        <div className="md:col-span-3 order-last md:order-first">
          <p className="text-2xl">Results</p>
          <Sidebar />
          <SafetyCardList cards={cardData} />
        </div>
      </div>
    </div>
  );
}