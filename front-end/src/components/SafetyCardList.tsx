import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

// Define the interface for our card data
interface CardData {
  id: number;
  title: string;
  description: string;
  content: string;
  score: number;
}

// Props for the CardList component
interface CardListProps {
  cards: CardData[];
}

// Individual Card component
const CardItem: React.FC<CardData> = ({
  title,
  description,
  content,
  score,
}) => (
  <Card className="m-4 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{content}</p>
    </CardContent>
    <CardFooter>
      <Badge>Score: {score}</Badge>
    </CardFooter>
  </Card>
);

// CardList component
export const SafetyCardList: React.FC<CardListProps> = ({ cards }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  // Calculate the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards.slice(indexOfFirstItem, indexOfLastItem);
  

  return (
    <div className="flex flex-col pb-6 w-full">
      {currentItems.map((card) => (
        <Link key={card.id} to={`/${card.id}`} className="no-underline">
          <CardItem {...card} />
        </Link>
      ))}
      <Pagination
        totalItems={cards.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
