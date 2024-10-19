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
  datetime: string;
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
  datetime,
  description,
  content,
  score,
}) => (
  <Card className="mb-4 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
    <CardHeader className="p-4">
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="p-4">
      <p>{content}</p>
    </CardContent>
    <CardFooter className="p-4 flex justify-between items-center">
      <Badge variant="outline" className="mr-2">
        {new Date(datetime).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </Badge>
      <Badge>Score: {score}</Badge>
    </CardFooter>
  </Card>
);

// CardList component
export const SafetyCardList: React.FC<CardListProps> = ({ cards }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Calculate the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col pb-6 w-full">
      {currentItems.map((card) => (
        <Link
          key={card.id}
          to={`/card?id=${card.id}&title=${card.title}&description=${card.description}&content=${card.content}&score=${card.score}`}
          className="no-underline"
        >
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
